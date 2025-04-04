describe('Product Prices', () => {
  it('collection to PIP price', () => {
    cy.visit('https://shopnewage.com/collections/all')
      .get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133")
      .get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
      .wait(20000);

    // Get the collection price
    let collectionPrice;
    let collpointvalue;

    cy.get('.price__isSup')
      .invoke('text')
      .then((text) => {
        const regex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/; // Regex to match the price format ($x,xxx.xx)
        const match = text.match(regex);
        if (match) {
          collectionPrice = match[0];
        }
      });

    cy.get('.sup').eq(1).invoke('text').then((text) => {
      collpointvalue = text;
      let correctcollprice = collectionPrice + '.' + collpointvalue;
      cy.log('Collection Price =' + correctcollprice);
    })

    const priceComparisons = [];

    cy.get('.product-50406 > .product-thumbnail__text--wrapper > :nth-child(1) > .product-thumbnail__text > .product-thumbnail__price > .hide--mobile')
      .invoke('text')
      .then((text) => {
        let collcompareprice = text.trim();

        //cy.get('.product-50406 > .product-thumbnail__text--wrapper > .product-thumbnail__actions > .product-thumbnail__add-to-cart').click();
        cy.get('.product-thumbnail__text--wrapper > .product-thumbnail__actions > .product-thumbnail__add-to-cart').eq(0).click()
        cy.wait(20000);

        let pippri;

        cy.get('.price__isSup')
          .invoke('text')
          .then((text) => {
            const regex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/; // Regex to match the price format ($x,xxx.xx)
            const match = text.match(regex);
            if (match) {
              pippri = match[0];
            }
          });

        let collpointvalue2;

        cy.get('.sup').eq(1).invoke('text').then((text) => {
          collpointvalue2 = text;
          let correctpipprice = pippri + '.' + collpointvalue2;
          cy.log('PIP Price =' + correctpipprice);

          priceComparisons.push({
            collcompareprice,
            correctcollprice: correctpipprice
          });

          // Return to the collection page
          cy.visit('https://shopnewage.com/collections/all');
        });
      });

    // Iterate over all other products
    cy.get('.product-thumbnail__text--wrapper > :nth-child(1) > .product-thumbnail__text > .product-thumbnail__price > .hide--mobile').each(($priceElement, index) => {
      if (index === 0) return; // Skip the first product, as it has already been tested

      cy.wrap($priceElement)
        .invoke('text')
        .then((text) => {
          let collcompareprice = text.trim();

          cy.get('.product-thumbnail__actions > .product-thumbnail__add-to-cart').eq(index).click();
          cy.wait(20000);

          let pippri;

          cy.get('.price__isSup')
            .invoke('text')
            .then((text) => {
              const regex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/; // Regex to match the price format ($x,xxx.xx)
              const match = text.match(regex);
              if (match) {
                pippri = match[0];
              }
            });

          let collpointvalue2;

          cy.get('.sup').eq(1).invoke('text').then((text) => {
            collpointvalue2 = text;
            let correctpipprice = pippri + '.' + collpointvalue2;

            cy.log('PIP Price =' + correctpipprice);

            priceComparisons.push({
              collcompareprice,
              correctcollprice: correctpipprice
            });

            // Return to the collection page
            cy.visit('https://shopnewage.com/collections/all');
          });
        });
    });

    // Perform assertions
    priceComparisons.forEach((comparison) => {
      expect(comparison.collcompareprice).to.equal(comparison.correctcollprice);
    });
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
});
