describe('Product Prices', () => {
    it('collection to PIP price', () => {
      cy.visit('https://shopnewage.com/collections/all')
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133")
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
      cy.wait(20000)
  
      // Correct result for single product
      const collectionPriceSelector = '.price__isSup';
      let collectionPrice = 0;
  
      // Get the price and cents values for the collection price
      cy.get(collectionPriceSelector).eq(0).then(($collectionPriceElement) => {
        const price = $collectionPriceElement.text().trim().replace(/[^0-9.]/g, '');
        collectionPrice = parseFloat(price);
        cy.log(`Collection Price = ${collectionPrice}`);
      });
  
      cy.get('.product-50406 > .product-thumbnail__text--wrapper > .product-thumbnail__actions > .product-thumbnail__add-to-cart').click();
      cy.wait(20000);
  
      // Function to extract and log prices
      function extractAndLogPrices(priceSelector) {
        // Iterate over all price elements on the page
        cy.get(priceSelector).each(($priceElement, index) => {
          const price = $priceElement.text().trim().replace(/[^0-9.]/g, '');
          const pipPrice = parseFloat(price);
          cy.log(`Price ${index + 1} = ${pipPrice}`);
          cy.wrap(pipPrice).as(`pipPrice${index}`);
        });
      }
  
      // Usage example
      extractAndLogPrices('.price__isSup.ff-pb');
  
      // Compare collection price and PIP prices
      // Compare collection price and PIP prices
const numProducts = Cypress.$('.price__isSup.ff-pb').length;
for (let i = 0; i < 1; i++) {
  cy.get(`@pipPrice${i}`).then((pipPrice) => {
    expect(pipPrice).to.equal(collectionPrice);
  });
}

    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  