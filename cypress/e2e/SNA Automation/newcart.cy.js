describe('Newcart US theme',()=>{
    before(function () {
        cy.visit('https://shopnewage.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=137916514484');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
      });

it('adding SKU',()=>{
    cy.visit('https://shopnewage.com/collections/search-results/products/bold-series-9-piece-cabinet-set-50406?variant=31604659060802&z=33133')
    cy.get('.add-to-cart_main').click()
    cy.wait(5000)
    cy.get('.cart > a > .ls-is-cached').click()
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})
})