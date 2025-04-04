describe('Flooring cal', () => {
    it('Flooring cal', () => {
      cy.visit('https://newageproducts.com/flooring/luxury-vinyl-plank/');
  
      // Clear and enter the zip code
      cy.get('form > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
        .type('33133');
  
      // Click the 'Calculate' button
      cy.get('.sc-c889514f-8').click();
  
      // Enter total area in square feet
      cy.get('[placeholder="Enter total area in Feet"]').clear().type('100');
      cy.wait(3000)
      
      // Choose unit (e.g., sq ft)
      cy.get('.input-box > input').click();
      cy.get('.input-box > ul > :nth-child(1)').click();
  
      // Extract and calculate total cost
      cy.get('.total-feet').invoke('text').then((text) => {
        // Remove any unwanted characters (e.g., extra spaces, "sq ft", etc.)
        const value = text.replace(/[^0-9.]/g, '');
        
        // Parse the value as a float
        const floatValue = parseFloat(value);
        
        // Use floatValue as needed in your Cypress test
        cy.log(`Total sq ft: ${floatValue}`);
        let areacoveredbyonebox = 14.15;
        let noofboxes = Math.ceil(floatValue / areacoveredbyonebox);
        cy.log('No of boxes = ' + noofboxes);
        let productprice = 55.09;
        
        // Calculate total cost
        let totalcost = noofboxes * productprice;
        cy.log('Total Price = ' + totalcost);
  
        // Extract and compare the site price
        cy.get('.total-price').invoke('text').then((text) => {
          // Remove any unwanted characters (e.g., currency symbols, commas, etc.)
          const value = text.replace(/[^0-9.]/g, '');
          
          // Parse the value as a float
          const siteprice = parseFloat(value);
          
          // Use siteprice as needed in your Cypress test
          cy.log(`Extracted value: ${siteprice}`);
  
          // Use Cypress assertion to check if totalcost is equal to siteprice
          expect(totalcost).to.equal(siteprice);
        });
      });
    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  