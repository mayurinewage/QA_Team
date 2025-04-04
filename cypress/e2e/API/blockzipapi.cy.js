it('Block ZIP code API', () => {
    const zipcodes = [
        77296,18010,15740,98929,98667,98477,98455,98262,98184,98151,97482,97259,97251
    //   99403, 99299, 99165, 98929, 98667, 98492, 98477, 98460, 98455, 98450,
    //   98442, 98262, 98205, 98189, 98184, 98171, 98151, 98132, 98054, 97482,
    //   97475, 97472, 97428, 97427, 97425, 97372, 97313, 97299, 97272, 97271,
    //   97259, 97255, 97254, 97253, 97251, 95887, 95314, 95250, 94625, 94286,
    //   94246, 94209, 94199, 94175, 94171, 94162, 94156, 94155, 94154, 94153,
    //   94152, 94150, 94138, 94136, 94135, 94106, 94101, 94013, 93784, 93780,
    //         93382, 93381, 93093, 92725, 92720, 92718, 92717, 92715, 92714, 92710,
    //         92709, 92687, 92686, 92680, 92670, 92669, 92668, 92667, 92666, 92665,
    //         92645, 92644, 92643, 92641, 92640, 92635, 92633, 92632, 92631, 92621,
    //         92601, 92515, 92424, 92414, 92412, 92326, 92292, 92194, 92189
    ];
  
    // Initialize an empty array to store all responses
    let allResponses = [];
  
    // Iterate through each zipcode and make a POST request
    cy.wrap(zipcodes).each((zipcode) => {
      cy.request({
        method: "POST",
        url: "https://app.newageproducts.com/shipping-portal/public/api/get-block-zip",
        body: {
          "zipcode": zipcode,
          "store": "US"
        }
      })
      .then((response) => {
        let responseData = response.body;
        cy.log(responseData);
        
        // Customize your assertions based on the response
        expect(response.body).to.include.property('data', 1);
  
        // Add the response data to the array
        allResponses.push(responseData);
      });
    }).then(() => {
      // Write all responses to a single JSON file
      cy.writeFile('cypress/fixtures/allResponses.json', allResponses);
    });
  });
  