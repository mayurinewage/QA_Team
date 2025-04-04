describe ('Collection sorting',()=>{
    it('Price low to high',()=>{
      cy.visit('https://shopnewage.com/collections/home-bar') 
      .get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133")
      .get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
      .wait(20000);
      cy.get('#sort-by').select("?Collections=Home+Bar&search_return=all&sort_by_field=Price%2C+low+to+high")
      
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})