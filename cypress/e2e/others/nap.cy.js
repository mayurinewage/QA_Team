
  import * as apiresponse from "../fixtures/test.json"

  describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
  cy.visit("https://regional.dev-newageproducts.com/ca/flooring/luxury-vinyl-plank/")
  
  cy.get('#MobilePinCodeUpdate > .zipbox > span').click()
  cy.get('.sc-5658b3a5-0 > .pinCode-Modal > .field > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("A1A1A1")
  cy.get('.sc-5658b3a5-0 > .pinCode-Modal > :nth-child(4) > .sc-c889514f-8').click()
  //cy.get('.slick-current > :nth-child(1) > .sc-87779093-1 > .sc-87779093-3 > .content-box > .sc-87779093-17 > .sc-87779093-5').find(7219.54)
  //cy.get('.slick-current>div>.jKygyL>.kgTvet>div>div,3').should('include.text', '$7219.54')
  //cy.get('.sc-87779093-1 > .sc-87779093-3 > .content-box >.sc-87779093-17 > .sc-87779093-5', { timeout: 20000 }).eq(9).invoke('text').then(price => {
    cy.get('.slick-current > :nth-child(1) > .sc-ca413372-1 > .sc-ca413372-3 > .content-box > .sc-ca413372-17 > .sc-ca413372-5', { timeout: 20000 }).invoke('text').then(price => {
    cy.log("Product price" + price.split('$')[1]);
  const storageprice = price.split('$')[1];
  cy.log(storageprice);
  //expect(apiresponse.price_data_status[0].variants[0].price).eq.to.be(storageprice)
  
   assert.equal(storageprice,apiresponse.price_data_status[0].variants[0].price)
  //expect(storageprice).to.equal(apitestdata.apiprice);
  
  })
  });
  
  });
  // cy.get('.slick-current > :nth-child(1) > .sc-87779093-1 > .sc-87779093-3 > .content-box > .sc-87779093-17 > .sc-87779093-5',{ timeout: 10000 })
  Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
  })

  
  