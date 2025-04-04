describe('Product Prices', () => {
  it('collection to PIP price', () => {
    cy.visit('https://shopnewage.com/collections/all')
      .get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133")
      .get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
      .wait(20000);

    // Get the collection price
    let collectionPrice;

    cy.get('.price__isSup')
      .invoke('text')
      .then((text) => {
        const regex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/; // Regex to match the price format ($x,xxx.xx)
        const match = text.match(regex);
        if (match) {
          collectionPrice = match[0];
          cy.log(collectionPrice); // Output the stored collection price in the Cypress log
        }
      });

    //cy.log(`Collection Price = ${collectionPrice}`);
    let collpointvalue;

    cy.get('.sup').eq(1).invoke('text').then((text) => {
      collpointvalue = text;
      //cy.log(collpointvalue)
      //cy.log(collectionPrice+'.'+collpointvalue)
      let correctcollprice = collectionPrice +'.'+collpointvalue
      cy.log(correctcollprice)

      // Later, you can use the stored value as needed
      //cy.log(correctcollprice); // Output the stored value in the Cypress log

      cy.get('.product-50406 > .product-thumbnail__text--wrapper > .product-thumbnail__actions > .product-thumbnail__add-to-cart').click()
      cy.wait(20000)

      // Extract and log PIP prices
      let pippri;

      cy.get('.price__isSup')
        .invoke('text')
        .then((text) => {
          const regex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/; // Regex to match the price format ($x,xxx.xx)
          const match = text.match(regex);
          if (match) {
            pippri = match[0];
            //cy.log(pippri); // Output the stored collection price in the Cypress log
          }
        });

      //cy.log(`PIP Pri = ${pippri}`);
      let collpointvalue2;

      cy.get('.sup').eq(1).invoke('text').then((text) => {
        collpointvalue2 = text;
        //cy.log(collpointvalue2)
        //cy.log(pippri+'.'+collpointvalue2)
        let correctpipprice = pippri +'.'+collpointvalue2
        cy.log(correctpipprice)
        if(correctcollprice==correctpipprice){
          expect(correctcollprice).to.equal(correctpipprice);
          cy.log("Price is matching ")
        }

        // Later, you can use the stored value as needed
        //cy.log(correctpipprice); // Output the stored value in the Cypress log
      });
    });
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});
