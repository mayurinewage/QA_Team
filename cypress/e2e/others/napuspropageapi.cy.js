it('Then it should create a new user', () => {
    cy.request({
      method: 'POST',
      url: 'https://app.newageproducts.com/DynamicLeadTime-stg/v4/public/api/us/regionalprice/sku',
      body: {
        "zipcode":"27012",
        "sku":[52005,52643]
    }
    })
      .then((response) => {
        expect(response.status).eq(200)
        //expect(response.body.variants.price).to.eq("1559.99")
        cy.log(JSON.stringify(response))
        //expect(response.body.price_data_status[0].variants[0]).include.property('price','2427.61')
        //expect(response.body.price_data_status[0].variants[0]).include.property('variant_sku','52005')
        expect(response.body.price_data_status[0].variants[0]).include.property('price','832.49')
        let Product1 = ((response.body.price_data_status[0].variants[0].price))
        cy.log("The product1 price is $"+ Product1)
        expect(response.body.price_data_status[2].variants[0]).include.property('price','1109.99')
        let Product2 = ((response.body.price_data_status[2].variants[0].price))
        cy.log("The product2 price is $"+ Product2)
        //expect(response.body.price_data_status[2].variants[0]).include.property('variant_sku','52633')
        //expect(response.body.price_data_status[0].variants[0]).include.property('price','23.84')
         //let apiprice= response.body.price_data_status[0].variants[0].price 
         //cy.log(apiprice)
        let responseData = response.body;
cy.writeFile(
  "cypress/fixtures/testsamplenew.json",
  responseData
);
      });
  });