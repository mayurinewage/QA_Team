describe('Product Prices', () => {
  it('should get the prices of all products', () => {
    cy.visit('https://shopnewage.com/collections/all');
    cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133");
    cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click();

    const priceSelector = '.price__isSup';

    // Iterate over all price elements on the page
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

      // Write the log message to a file (optional)
      cy.writeFile('product_prices.txt', logMessage, { flag: 'a+' });
    });

    // Wait for 20 seconds
    cy.wait(20000);

    // Rerun the price retrieval logic after 20 seconds
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

      // Log the formatted price after reloading
      const logMessage = `Product Price ${index + 1} (after reload) = ${formattedPrice}`;
      cy.log(logMessage);

      // Write the log message to a file (optional)
      cy.writeFile('product_prices_afterload.txt', logMessage, { flag: 'a+' });
    });
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
});
