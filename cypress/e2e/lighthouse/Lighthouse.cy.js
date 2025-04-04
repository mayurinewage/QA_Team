import "@cypress-audit/lighthouse/commands";
describe('Lighthouse NAP', () => {
    it('NAP Desktop', () => {

cy.visit('https://newageproducts.com/')
//cy.viewport(1024, 768)
cy.lighthouse(
  {
    performance: 20,
    accessibility: 20,
    "best-practices": 20,
    seo: 20,
    pwa: 20,
  },
 {
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
  },
)
    
  })
})



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })
  