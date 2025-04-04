describe('Geolocation', () => {
    it('Geolocationtest', () => {
      cy.viewport(550, 750)

cy.visit('https://newageproducts.com/', 
{
    onBeforeLoad ({ navigator }) {
      // newyork city
      const latitude = 40.741895
      const longitude = -73.989308
     cy.stub(navigator.geolocation, 'getCurrentPosition')
       .callsArgWith(0, { coords: { latitude, longitude } })
       //cy.get('.cta-wrapper > .sc-c889514f-8').click()

    }

    
  })
})
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })
  