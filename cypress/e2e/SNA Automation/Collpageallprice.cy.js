
describe('Product Prices', () => {

    it('should get the prices of all products', () => {
  
      cy.visit('https://shopnewage.com/collections/all')

      //cy.wait(5000)
      //cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').type("12345")
      //cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click()
      // Get the prices of the first three products
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type("33133")
      cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click()
      cy.wait(20000)
      cy.get('.product-50406 > .product-thumbnail__text--wrapper > :nth-child(1) > .product-thumbnail__text > .product-thumbnail__price > .price__isSup').invoke('text').then(price11 =>{
        cy.log('Price 11:', price11)
      })

      // Assuming you have a Cypress selector to target the price element
//const priceSelector = '.price__isSup';

// Get the price element and extract the value
//cy.get(priceSelector).invoke('text').then((text) => {
 // const price = text.trim().replace(/[$,]/g, '') + '.99';
  //const formattedPrice = 'Price = $ ' + price;
  //cy.log(formattedPrice);
//});



// below output price= $ 1749
//const priceSelector = '.price__isSup';
//cy.get(priceSelector).eq(0).then(($priceElement) => {
  //let price = '';
  //$priceElement.contents().each((index, element) => {
    //if (element.nodeType === Node.TEXT_NODE) {
      //const text = element.nodeValue.trim();
      //if (text) {
        //price += text;
     // }
    //}
  //});
  //const formattedPrice = 'Price =  ' + price;
  //cy.log(formattedPrice);
//});


//correct result for single product
//const priceSelector = '.price__isSup';

// Get the price and cents values
//cy.get(priceSelector).eq(0).then(($priceElement) => {
  //let price = '';
  //$priceElement.contents().each((index, element) => {
    //if (element.nodeType === Node.TEXT_NODE) {
    //  const text = element.nodeValue.trim();
      //if (text) {
        //price += text;
      //}
    //}
  //});

  // Get the cents value
  //const centsValue = $priceElement.find('.sup').eq(1).text();

  // Construct the formatted price string
  //const formattedPrice = `Price =  ${price}.${centsValue}`;
  //cy.log(formattedPrice);
//});
// Assuming you have a Cypress selector to target the price elements
//cy.wait(20000)
// Scroll to the bottom of the webpage
//cy.scrollTo('bottom');

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
  const formattedPrice = `Price ${index + 1} =  ${price}.${centsValue}`;
  cy.log(formattedPrice);
  
});


  






    
      //cy.get('.product-card__price').eq(0).invoke('text').then(price1 => {
  
       // cy.log('Price 1:', price1)
  
     // })
  
  
     // cy.get('.product-card__price').eq(1).invoke('text').then(price2 => {
  
       // cy.log('Price 2:', price2)
  
      //})
  
  
     // cy.get('.product-card__price').eq(2).invoke('text').then(price3 => {
  
       // cy.log('Price 3:', price3)
  
    //  })
  
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })
  })