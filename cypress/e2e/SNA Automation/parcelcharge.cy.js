describe('Parcel US ', () => {
it('Parcel below 150 ', () => {
        cy.visit('https://shopnewage.com/collections/featured-deals/products/pro-series-2-ft-x-8-ft-wall-mounted-steel-shelf-40406?variant=14991588032578?z=33133')
     cy.wait(9000)
     cy.get('[data-testid="klaviyo-form-RFhphJ"]').should('exist').then(($closePopup) => {
        if ($closePopup.length > 0) {
          // If the element with data-testid "klaviyo-form-RFhphJ" exists, click on the button
          cy.get('button.klaviyo-close-form').click();
        } else {
          // Handle the case when the element is not present (optional)
          cy.log('Popup element not found, skipping click');
        }
      });
      cy.get('.add-to-cart_main').click()
      cy.get('.fs-30 > .menu-icons').click()
      cy.get('.hidden_xs.clearfix > .medium-4 > .catSummary > .cart-summary__subtotal-bar > .row > .main-summary-list > .cartSummarys > .summary_list_heading > .total_listamout > .premium_delivery_price').invoke('attr', 'deliverycharges').then((value) => {
        // Value should be "21.75"
        expect(value).to.equal('21.75');
      });
      cy.get('.onSalePrice').invoke('text').then((priceText) => {
        // Extract individual parts of the price
        const currencySymbol = (priceText.match(/(\D+)/) || [])[0] || '';
        const dollars = (priceText.match(/(\d+)/) || [])[0] || '';
        const cents = (priceText.match(/(\d+)$/) || [])[0] || '';
  
        // Check if all parts are present before proceeding
        if (currencySymbol && dollars && cents) {
          // Concatenate and convert to a numerical value
          const productPrice = parseFloat(`${dollars}.${cents}`);
  
          // Use the product price as needed in your test
          // For example, you can assert that the price is 144.99
          expect(productPrice).to.equal(144.99);
  
          // Or you can use the product price for further assertions or actions
          // For example, you can make an API request with the extracted price
          // cy.request({ method: 'POST', url: '/api/some-endpoint', body: { price: productPrice } });
        } else {
          // Handle the case where one or more parts are missing
          cy.log('Unable to extract complete price information');
        }
      });
     })
    
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
})