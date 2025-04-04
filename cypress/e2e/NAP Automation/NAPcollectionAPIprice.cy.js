describe('API Price Checkup', () => {
    it('Compare website prices with API prices', () => {
        // Read the SKU and price data from the JSON file
        cy.readFile('cypress/fixtures/skuData.json').then((data) => {
            const { zipcode, products } = data;

            // Prepare the body for the API call
            const apiBody = {
                zipcode: zipcode,
                sku: products.map(product => product.sku)
            };

            // Log the prepared API body for debugging purposes
            cy.log(JSON.stringify(apiBody));

            // Make the API call with the required body format using cy.api() from the plugin
            cy.api({
                method: 'POST',
                url: 'https://app.newageproducts.com/RegionalPortal/public/api/us/defaultpricesku', // Replace with your actual API endpoint
                body: apiBody,
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                // Log the API response to understand its structure
                cy.log(JSON.stringify(response.body));

                // Validate the response status
                expect(response.status).to.eq(200);

                // Extract the product prices from the API response
                const apiPrices = response.body.price_data_status;

                // Check if apiPrices is defined and is an array
                expect(apiPrices).to.be.an('array');

                // Compare prices SKU by SKU
                products.forEach(product => {
                    const apiProduct = apiPrices.find(p => p.variant_sku === product.sku);
                    if (apiProduct) {
                        cy.log(`Comparing prices for SKU ${product.sku}`);
                        expect(parseFloat(apiProduct.price)).to.eq(parseFloat(product.price), `Price mismatch for SKU ${product.sku}`);
                        cy.log("API Price = " + apiProduct.price)
                        cy.log("collection Price = " + product.price)
                    } else {
                        cy.log(`SKU ${product.sku} not found in API response`);
                    }
                });
            });
        });
    });
});
