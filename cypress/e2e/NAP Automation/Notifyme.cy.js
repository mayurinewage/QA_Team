describe('Notify me Audit', () => {
    it('Notify me SNA Audit', () => {
      cy.visit('https://shopnewage.com/');
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133");
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click();
  
      // Define an array of different input values
      const inputValues = ['91784', '91663']; // Add more values as needed
  
      // Iterate through the inputValues array and perform the Cypress actions
      inputValues.forEach(inputValue => {
        cy.get('.search__form > .header-bar__search-input')
          .click()
          .clear()
          .type(`${inputValue}{enter}`);
  
        // Perform the actions after entering the input value
        cy.get('.product-thumbnail__add-to-cart').click();
        cy.wait(5000)
        cy.get('.notifyPopup > span').click();
        cy.get('#notify_full_name').click().type('Please ignore test by DI team{enter}');
        cy.get('#notify_email_address').click().type('svelliangiri@newageproducts.com');
        cy.get('#notify_zipcode').click().type('33133{enter}');
        cy.get('.checkbox > .none_uppercase').click();
        cy.get('.notify-delivery-popup-close').click();
        
        // You can add assertions or other actions specific to this input value here
      });
    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  