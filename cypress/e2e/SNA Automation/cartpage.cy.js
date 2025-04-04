describe('checking the cart page',()=>{
    before(function(){
        cy.viewport(1536,864)
        cy.visit("https://shopnewage.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=137047769268")
    })
    it('Checking the cart page',()=>{
       cy.visit("https://shopnewage.com/collections/garage-cabinets-offers/products/bold-series-7-piece-cabinet-set-50421?variant=31604842954818&z=33133")
       cy.get('.add-to-cart_main').click()
       cy.get('.ds-flex > .ls-is-cached').click()
       cy.get('.cart > .minicart__icon-wrapper > .ub-cart > .ub-cart__cart-link-wrapper > .ub-cart__cart-link').click()
       cy.get('p.font-medium.ff-pb.text-base')
       .invoke('text')
       .then((subtotalText) => {
         const subtotalPrice = parseFloat(subtotalText.replace(/[$,]/g, ''));
 
         let calculatedInstallationCharges;
         if (subtotalPrice < 1000) {
           calculatedInstallationCharges =  Math.round(subtotalPrice * 0.22 + 150);
         } else {
           calculatedInstallationCharges =  Math.round(subtotalPrice * 0.22);
         }
 
         // Extract the installation charges from the element
         cy.get('span.installation_charges')
           .invoke('text')
           .then((displayedChargesText) => {
             const displayedInstallationCharges = parseFloat(displayedChargesText.replace(/[$,]/g, ''));
 
             // Compare the calculated charges with the displayed charges
             expect(displayedInstallationCharges).to.equal(calculatedInstallationCharges);
             const totalPrice = subtotalPrice + calculatedInstallationCharges;

        // Calculate delivery charges based on the total price
        let deliveryCharges;
        if (totalPrice < 1000) {
          deliveryCharges = Math.round(totalPrice * 0.15);
        } else {
          deliveryCharges = 0;
        }

        // Log the calculated delivery charges
        cy.log(`Delivery Charges: $${deliveryCharges.toFixed(2)}`);

           });
       });
      });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
