describe('location', () => {
  it('locationtest', () => {

cy.visit('https://regional.dev-newageproducts.com/flooring/luxury-vinyl-plank/', {
  
      onBeforeLoad (win) {
        // e.g., force Barcelona geolocation
        const latitude = 41.38879;
        const longitude = 2.15899;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    });
  
})
})


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })
