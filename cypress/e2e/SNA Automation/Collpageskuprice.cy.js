describe("Extract SKU values and print as SKU {index}", () => {
    it("Extract and print SKU values", () => {
      // ... your existing code ...
      cy.visit('https://shopnewage.com/collections/all');
    cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133");
    cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click();

  
      let sku; // Declare the SKU variable outside the .each() function
  
      cy.get(".product-thumbnail__add-to-cart").each(($element, index) => {
        const href = $element.attr("href");
        const regex = /products\/.*?(\d+)\?variant=/;
        const match = href.match(regex);
  
        if (match && match[1]) {
          sku = match[1]; // Assign the SKU value to the variable declared outside
          cy.log(`SKU ${index + 1}: ${sku}`);
        } else {
          cy.log("SKU not found for element " + index);
        }
  
        // ... your existing code ...
  
        // Iterate over all price elements on the page
        const priceSelector = '.price__isSup';
        cy.get(priceSelector).each(($priceElement, index) => {
          let price = '';
          $priceElement.contents().each((_, element) => {
            if (element.nodeType === Node.TEXT_NODE) {
              const text = element.nodeValue.trim();
              if (text) {
                price += text;
              }
            }
          });
  
          // Get the cents value
          const centsValue = $priceElement.find('.sup').eq(1).text();
  
          // Construct the formatted price string
          const formattedPrice = `${price}.${centsValue}`;
  
          // Log the formatted price
          const logMessage = `Product Price ${index + 1} = ${formattedPrice}`;
          cy.log(logMessage);
  
          // Log the SKU and formatted price together
          cy.log(sku + logMessage);
        });
  
        // ... rest of your code ...
      });
    });
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  