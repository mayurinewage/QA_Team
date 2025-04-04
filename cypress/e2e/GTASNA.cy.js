// describe('GTA SNA Theme', ()=>{
//     it('PIP page',()=>{
//         cy.visit("https://ca.shopnewage.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=127132893251")
//         cy.wait(7000)
//         cy.get('b > .addReplaceZipcode').click()
//         cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').type('a1a1a1')
//         cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button > span').click()
//         cy.wait(5000)
//         cy.visit('https://ca.shopnewage.com/products/10-x-13-ft-aluminum-louvered-pergola-s7-90052?variant=40590254112835')
//         let ZIPcodes;
//     cy.fixture('example.json').then((data) => {
//       // 'data' contains the contents of the JSON file
//       // You can now access and use the data as needed
//       // For example, if 'data' is an object, we can use Object.values() to get an array of its values
//       const entries = Object.values(data);
//       // Now, 'entries' is an array of objects with 'postal_code' key
//       ZIPcodes = entries.map(entry => entry.postal_code);
//     }).then(() => {
      
//       console.log('ZIP codes:', ZIPcodes);

    
//     });
       
//         cy.get('.zipcodeanchor > .addReplaceZipcode').click()
//         cy.get('.ProductRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').type(ZIPcodes)
//     })
//     Cypress.on('uncaught:exception', (err, runnable) => {
//         return false;
//       });
// })

describe('GTA ',()=>{
  it('SNA GTA',()=>{
cy.visit('https://ca.shopnewage.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=127132893251')
cy.wait(7000)
cy.get('b > .addReplaceZipcode').click()
cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').type('a1a1a1')
const zipcodes = [
  "a1a1a1", "k2k2k2"
  ];

  cy.visit('https://ca.shopnewage.com/products/10-x-13-ft-aluminum-louvered-pergola-s7-90052?variant=40590254112835&z=k1k1k1')
cy.wait(2000)
zipcodes.forEach((zipcode, index) => {
  cy.get('b > .addReplaceZipcode').click()
  cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type(zipcode.toString(), { delay: 0 });
if (index < zipcodes.length - 1) {
  // Add a delay or wait for a specific condition between typing each value
  // For example, you can use cy.wait() or cy.get() with appropriate conditions
  cy.wait(1000); // Adjust the delay as needed
  cy.get('.regionalMainPopup > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
//cy.get('.MuiFormHelperText-root').should('have.text', 'Sorry but we do not ship to your location');

}
});
Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });


  })
})