it('Written with DeploySentinel Recorder', () => {
    cy.request({
    method: "POST",
    url: "https://staging-api.newageproducts.com/cart/get-data",
    
    body:{
        "store": "US",
        "zipcode": "33133",
        "sku": [
            // "SKU:QTY:single unit PRICE"
            // accepts multiple entries as well
            "61203:3","50406:3"
        ]
     }
    })
    // how to make post call on cypress
    
  
    .then((response) => {
     let responseData = response.body;
     cy.log(responseData);
    cy.writeFile(
    "cypress/fixtures/carttest.json",
    responseData
    );
    //expect(response.body.price_data_status[0].variants[0]).include.property('price','21.19')
    
    });
    })