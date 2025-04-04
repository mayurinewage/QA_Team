describe('NAP collection products', () => {
    before(function () {
      cy.visit('https://newageproducts.com/collections/outdoor-kitchen-cabinets/')
      const ZIPcode = 33133;
      cy.get('[alt="newage navigation bar"]').click();
      cy.get('.location').click();
      cy.get('.MuiInputBase-input.MuiOutlinedInput-input.css-g8k17y').eq(1).click().type(ZIPcode);
      cy.get('.sc-cdf11386-8.klKgmR.button').eq(1).click();
    });
  
    it('All products price', () => {
      cy.wait(5000);
  
      // Check if the "Close dialog 1" button is present and visible, then click it
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Close dialog 1")').length > 0) {
          cy.get('button:contains("Close dialog 1")').click();
        }
      });
  
      // Select all price elements with a class starting with "price" followed by exactly 5 digits
      //cy.get('[class^="price"]').each(($el) => {
        cy.get('[class^="price"]').each(($el) => {
        const className = $el.attr('class');
        const skuMatch = className.match(/price (\d{5})/);
  
        if (skuMatch) {
          const sku = skuMatch[1];
          cy.wrap($el).find('.notranslate').invoke('text').then((text) => {
            cy.log(`SKU ${sku} price = ${text}`);
          });
        }
      });
    });
  
    // Prevent Cypress from failing the test on uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  