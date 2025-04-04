describe('Newcart',()=>{
    it('Cart',()=>{
        cy.viewport(1536,1280)
        cy.visit("https://staging2.dev-newageproducts.com/products/pro-series-3-0-14-piece-cabinet-set-52143/?prod_id=01tAs000005TKOfIAO&variant=01tAs000005TQNdIAO")
   cy.wait(5000)
   //cy.reload()
   cy.get('.addReplaceZipcode').click()
   cy.get('#\\:r1\\:').type('12345');
   cy.get('.sc-cdf11386-8').click()
   cy.wait(10000)
   cy.get('.buy-now-cta-container > div > .MuiButtonBase-root').click()
   cy.get('.cart > img').click()
   cy.get('.view-cart-cta > .sc-45d8e9c5-0').click()

   cy.get('.price-box').within(() => {
    // Get the product price
    cy.get('.product-price')
      .invoke('text')
      .then((productPrice) => {
        const formattedProductPrice = productPrice.trim(); // Remove any extra spaces
        cy.wrap(formattedProductPrice).as('productPrice');
      });
  
    // Get the compare price
    cy.get('.compare-price')
      .invoke('text')
      .then((comparePrice) => {
        const formattedComparePrice = comparePrice.trim(); // Remove any extra spaces
        cy.wrap(formattedComparePrice).as('comparePrice');
      });
  
    // Get the savings price
    cy.get('.product-savings span:nth-child(2)')
      .invoke('text')
      .then((savingsPrice) => {
        const formattedSavingsPrice = savingsPrice.trim(); // Remove any extra spaces
        cy.wrap(formattedSavingsPrice).as('savingsPrice');
      });
  });
  
  // Use the stored values later in your test
  cy.get('@productPrice').then((productPrice) => {
    cy.log(`Product Price: ${productPrice}`);
  });
  
  cy.get('@comparePrice').then((comparePrice) => {
    cy.log(`Compare Price: ${comparePrice}`);
  });
  
  cy.get('@savingsPrice').then((savingsPrice) => {
    cy.log(`Savings Price: ${savingsPrice}`);
  });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})