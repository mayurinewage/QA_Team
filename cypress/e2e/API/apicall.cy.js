it('Written with DeploySentinel Recorder', () => {
  cy.request({
  method: "POST",
  url: "https://app.newageproducts.com/RegionalPortal/public/api/us/defaultpricesku",
  
  body:{
  "zipcode":"33133",
  "sku":[12030]
  }
  })
  // how to make post call on cypress
  

  .then((response) => {
   let responseData = response.body;
   cy.log(responseData);
  cy.writeFile(
  "cypress/fixtures/test.json",
  responseData
  );
  //expect(response.body.price_data_status[0].variants[0]).include.property('price','21.19')
  
  });
  })

