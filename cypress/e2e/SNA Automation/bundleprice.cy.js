describe('Bundle testing',()=>{
    it('Bundle price',()=>{
        cy.visit('https://shopnewage.com/products/bold-series-9-piece-cabinet-set-50406')
        cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type('33133')
        cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
        cy.wait(5000)
        cy.get(".price__isSup.ff-pb.fs-34.bundle_price_2.bundle_main_price_product_id_4692891893826")
        .invoke("text")
        .then((priceText) => {
          // Parse the extracted text to get the value as a number
          const sitePrice = parseFloat(priceText.replace("$", "").trim());
  
          // Store the site price for later use (e.g., in Cypress custom commands or tests)
          cy.wrap(sitePrice).as("sitePrice");
  
          // Log the site price to the Cypress console
          cy.log(`Site Price: $${sitePrice.toFixed(2)}`);
          cy.get('#learn_more_32472643305538').click()
        });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})