describe('Block ZIP code NAP US ',()=>{
    it('NAP US Block ZIP code',()=>{
cy.visit('https://newageproducts.com/')
cy.get('.MuiInputBase-input').eq(1).type('33133');
cy.get('.sc-cdf11386-8').click();
cy.get('.zipbox > b').click()
// let zipcode = [99403,99299,99165,98929]
// cy.get('.MuiInputBase-input').eq(1).clear().type(zipcode);
//const zipcodes = [99403, 99299, 99165, 98929];
const zipcodes = [
    99403, 99299, 99165, 98929, 98667, 98492, 98477, 98460, 98455, 98450,
    98442, 98262, 98205, 98189, 98184, 98171, 98151, 98132, 98054, 97482,
    97475, 97472, 97428, 97427, 97425, 97372, 97313, 97299, 97272, 97271,
    97259, 97255, 97254, 97253, 97251, 95887, 95314, 95250, 94625, 94286,
    94246, 94209, 94199, 94175, 94171, 94162, 94156, 94155, 94154, 94153,
    94152, 94150, 94138, 94136, 94135, 94106, 94101, 94013, 93784, 93780,
    93382, 93381, 93093, 92725, 92720, 92718, 92717, 92715, 92714, 92710,
    92709, 92687, 92686, 92680, 92670, 92669, 92668, 92667, 92666, 92665,
    92645, 92644, 92643, 92641, 92640, 92635, 92633, 92632, 92631, 92621,
    92601, 92515, 92424, 92414, 92412, 92326, 92292, 92194, 92189
    ];
  
cy.get('.MuiInputBase-input').eq(1).clear();

zipcodes.forEach((zipcode, index) => {
  cy.get('.MuiInputBase-input').eq(1).type(zipcode.toString(), { delay: 0 });
  if (index < zipcodes.length - 1) {
    // Add a delay or wait for a specific condition between typing each value
    // For example, you can use cy.wait() or cy.get() with appropriate conditions
    cy.wait(1000); // Adjust the delay as needed
    cy.get('.sc-cdf11386-8').click();
cy.get('.MuiFormHelperText-root').should('have.text', 'Sorry but we do not ship to your location');

  }
});

// cy.get('.sc-cdf11386-8').click();
// cy.get('.MuiFormHelperText-root').should('have.text', 'Sorry but we do not ship to your location');


    })

    it.only('NAP CA Block ZIP code',()=>{
        cy.visit('https://newageproducts.com/ca/')
        cy.get('.zipbox > b').click()
        cy.get(':nth-child(2) > .MuiTypography-root').click()
        const zipcodes = [
            99403, 99299, 99165, 98929, 98667, 98492, 98477, 98460, 98455, 98450,
            98442, 98262, 98205, 98189, 98184, 98171, 98151, 98132, 98054, 97482,
            97475, 97472, 97428, 97427, 97425, 97372, 97313, 97299, 97272, 97271,
            97259, 97255, 97254, 97253, 97251, 95887, 95314, 95250, 94625, 94286,
            94246, 94209, 94199, 94175, 94171, 94162, 94156, 94155, 94154, 94153,
            94152, 94150, 94138, 94136, 94135, 94106, 94101, 94013, 93784, 93780,
            93382, 93381, 93093, 92725, 92720, 92718, 92717, 92715, 92714, 92710,
            92709, 92687, 92686, 92680, 92670, 92669, 92668, 92667, 92666, 92665,
            92645, 92644, 92643, 92641, 92640, 92635, 92633, 92632, 92631, 92621,
            92601, 92515, 92424, 92414, 92412, 92326, 92292, 92194, 92189
            ];
          
        cy.get('.MuiInputBase-input').eq(1).clear();
        
        zipcodes.forEach((zipcode, index) => {
          cy.get('.MuiInputBase-input').eq(1).type(zipcode.toString(), { delay: 0 });
          if (index < zipcodes.length - 1) {
            // Add a delay or wait for a specific condition between typing each value
            // For example, you can use cy.wait() or cy.get() with appropriate conditions
            cy.wait(1000); // Adjust the delay as needed
            cy.get('.sc-cdf11386-8').click();
        cy.get('.MuiFormHelperText-root').should('have.text', 'Sorry but we do not ship to your location');
        
          }
        });
        
        
    
    })
    

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})
