describe('Product Prices', () => {
    it('Search the products', () => {
      cy.visit('https://shopnewage.com/');
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input')
        .clear()
        .type("33133");
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button')
        .click();
      cy.wait(5000);
       let searchsku = 50406;
      cy.get('.search__form > .header-bar__search-input')
        .click()
        .type(searchsku + '{enter}');
      cy.wait(10000);
  
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
  
      cy.get('.sup')
        .eq(1)
        .invoke('text')
        .then((collpointvalue) => {
          let correctcollprice = collectionPrice + '.' + collpointvalue;
          cy.log(correctcollprice);
  
          cy.get('.product-thumbnail__add-to-cart > .icon').click();
          cy.wait(20000);
  
          // Extract and log PIP prices
          //cy.get('.product-sku').invoke('text')
          let skuonpip;

cy.get('.product-sku')
  .invoke('attr', 'content')
  .then((content) => {
    skuonpip = content;
    cy.log(skuonpip); // Output the extracted SKU in the Cypress log
    cy.log(searchsku)

    // Compare with searchsku
     // Assuming searchsku is already defined

    if (skuonpip === searchsku) {
      cy.log("SKU matches with searchsku");
    } else {
      cy.log("SKU does not match with searchsku");
      cy.get('.swatch_container > [data-value="Gray"] > .swatch_file > img').click()
      //cy.get('.varient_2 > .swatch_container > .active > .swatch_file > img').click()
      cy.get('.swatch_container > [data-value="Bamboo"] > .swatch_file > img').click()
      //cy.get('.swatch_container .swatch_file > img').eq(0) for all swatches
      //cy.get('.options > .select > .varient_1 > .swatch_container') // for four swatch
    }
  });

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
  
          cy.get('.sup')
            .eq(1)
            .invoke('text')
            .then((collpointvalue2) => {
              let correctpipprice = pippri + '.' + collpointvalue2;
              cy.log(correctpipprice);
  
              if (correctcollprice === correctpipprice) {
                expect(correctcollprice).to.equal(correctpipprice);
                cy.log("Price is matching");

              }
            });
        });
    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  