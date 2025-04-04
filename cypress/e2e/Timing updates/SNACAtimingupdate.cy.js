describe('SNAP CA Timing update ',()=>{
    it('Footer Timing',()=>{
        cy.visit('https://ca.shopnewage.com')
        cy.wait(8000)
        
        // cy.get('[data-testid="klaviyo-form-RFhphJ"]').should('exist').then(($closePopup) => {
        //     if ($closePopup.length > 0) {
        //       // If the element with data-testid "klaviyo-form-RFhphJ" exists, click on the button
        //       cy.get('button.klaviyo-close-form').click();
        //     } else {
        //       // Handle the case when the element is not present (optional)
        //       cy.log('Popup element not found, skipping click');
        //     }
        //   });
        

        //cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type('33133')
        //cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click()
        
        cy.get(':nth-child(3) > .nap-social-info > .ff-pb').should('have.text', 'Sales Team');
        cy.get(':nth-child(3) > .nap-social-info > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get(':nth-child(3) > .nap-social-info > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');

        cy.get(':nth-child(4) > .nap-social-info > .ff-pb').should('have.text', 'Customer Service Team');
        cy.get(':nth-child(4) > .nap-social-info > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');

        cy.get(':nth-child(5) > .nap-social-info > .ff-pb').should('have.text', 'Live Product Demos');
        cy.get(':nth-child(5) > .nap-social-info > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get(':nth-child(5) > .nap-social-info > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');

        cy.get(':nth-child(6) > .nap-social-info > .ff-pb').should('have.text', 'Experience Center Hours');
        cy.get(':nth-child(6) > .nap-social-info > :nth-child(2)').should('have.text', 'Mon-Fri: 11AM - 5PM EST');
        cy.get(':nth-child(6) > .nap-social-info > :nth-child(3)').should('have.text', 'Sat-Sun: 10AM - 5PM EST');
    })

    it('PIP FAQ and Shipping & retun timings ',()=>{
        cy.visit('https://ca.shopnewage.com/products/bold-series-9-piece-cabinet-set-50406')
        // let closepopup = cy.get('[data-testid="klaviyo-form-RFhphJ"]')
        
        // cy.get('[data-testid="klaviyo-form-RFhphJ"]').should('exist').then(() => {
        //     // If the element with data-testid "klaviyo-form-RFhphJ" exists, click on the button
        //     cy.get('button.klaviyo-close-form').click();
        //   });
        
        
        // cy.get('[data-testid="klaviyo-form-RFhphJ"]').should('exist').then(($closePopup) => {
        //     if ($closePopup.length > 0) {
        //       // If the element with data-testid "klaviyo-form-RFhphJ" exists, click on the button
        //       cy.get('button.klaviyo-close-form').click();
        //     } else {
        //       // Handle the case when the element is not present (optional)
        //       cy.log('Popup element not found, skipping click');
        //     }
        //   });
          
          
          
        // cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type('33133')
        // cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click()
        cy.get('#label_faq').click()
        cy.get('#faq > .row > .small-12 > .product-page__contact-details > .tab-box > .contact_details_content > p')
        .should('have.text','Customer Service Hours:Mon - Fri: 9:00am - 7:00pm ESTSales & Design Service Hours:Mon - Fri: 9:00am - 7:00pm ESTSat-Sun 9:30am - 5:00pm EST')
        cy.get('#label_shipping').click(
            cy.get('#shipping > .row > .small-12 > .product-page__contact-details > .tab-box > .contact_details_content > p')
            .should('have.text','Customer Service Hours:Mon - Fri: 9:00am - 7:00pm ESTSales & Design Service Hours:Mon - Fri: 9:00am - 7:00pm ESTSat-Sun 9:30am - 5:00pm EST')
        )
        

    })

    it('Terms of use page timing update',()=>{
        cy.visit('https://ca.shopnewage.com/pages/terms-of-use')
        //cy.wait(8000)
         cy.wait(8000)

        // cy.get('[data-testid="klaviyo-form-RFhphJ"]').should('exist').then(($closePopup) => {
        //         if ($closePopup.length > 0) {
        //           // If the element with data-testid "klaviyo-form-RFhphJ" exists, click on the button
        //           cy.get('button.klaviyo-close-form').click();
        //         } else {
        //           // Handle the case when the element is not present (optional)
        //           cy.log('Popup element not found, skipping click');
        //         }
        //       });
              

        // cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type('33133')
        // cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click()
         cy.get('.contact_details_content').should('have.text','Customer Service Hours:Mon - Fri: 9:00am - 7:00pm ESTSales & Design Service Hours:Mon - Fri: 9:00am - 7:00pm ESTSat-Sun 9:30am - 5:00pm EST');
    })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });
      
    })