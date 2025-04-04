describe('Testrunner',()=>{
    it("TC",()=>{
        cy.visit("https://newageproducts.com/")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})