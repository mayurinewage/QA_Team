describe('NAP collection products', () => {
  const ZIPcode = 33133;
  let skuPriceData = [];

  before(function () {
    cy.visit('https://newageproducts.com/collections/outdoor-kitchen-cabinets/');
    cy.get('[alt="newage navigation bar"]').click();
    cy.get('.location').click();
    cy.get('.MuiInputBase-input.MuiOutlinedInput-input.css-g8k17y').eq(1).click().type(ZIPcode);
    cy.get('.sc-cdf11386-8.klKgmR.button').eq(1).click();
  });

  it('Collect and store SKU prices from the website', () => {
    cy.wait(5000);

    // Check if the "Close dialog 1" button is present and visible, then click it
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Close dialog 1")').length > 0) {
        cy.get('button:contains("Close dialog 1")').click();
      }
    });

    // Collect SKU and price data
    cy.get('[class^="price"]').each(($el) => {
      const className = $el.attr('class');
      const skuMatch = className.match(/price (\d{5})/);

      if (skuMatch) {
        const sku = skuMatch[1];
        cy.wrap($el).find('.notranslate').invoke('text').then((text) => {
          const price = text.replace('$', '').trim(); // Remove dollar sign and trim
          cy.log(`SKU ${sku} price = ${price}`);
          skuPriceData.push({ sku, price });
        });
      }
    }).then(() => {
      // Write SKU and price data to a JSON file
      cy.writeFile('cypress/fixtures/skuData.json', { zipcode: ZIPcode, products: skuPriceData });
    });
  });

  // Prevent Cypress from failing the test on uncaught exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});

describe('API call and price comparison', () => {
  it('Fetch prices from API and compare with website prices', () => {
    // Read the SKU and price data from the JSON file
    cy.readFile('cypress/fixtures/skuData.json').then((data) => {
      const { zipcode, products } = data;

      // Make the API call with the required body format
      cy.request({
        method: 'POST',
        url: 'https://app.newageproducts.com/RegionalPortal/public/api/us/defaultpricesku',
        body: { zipcode, sku: products.map(product => product.sku) },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // Log the entire API response to understand its structure
        cy.log(JSON.stringify(response.body));

        // Validate the response status
        expect(response.status).to.eq(200);

        // Extract the product prices from the API response
        const apiPrices = response.body.products; // Adjust this based on actual API response structure

        // Log apiPrices to debug
        cy.log(`API Prices: ${JSON.stringify(apiPrices)}`);

        // Check if apiPrices is defined and is an array
        if (Array.isArray(apiPrices)) {
          // Compare prices SKU by SKU
          products.forEach(product => {
            const apiProduct = apiPrices.find(p => p.sku === product.sku);
            if (apiProduct) {
              cy.log(`Comparing prices for SKU ${product.sku}`);
              expect(parseFloat(apiProduct.price)).to.eq(parseFloat(product.price), `Price mismatch for SKU ${product.sku}`);
            } else {
              cy.log(`SKU ${product.sku} not found in API response`);
            }
          });
        } else {
          cy.log('API response does not contain a valid products array');
        }
      });
    });
  });
});
