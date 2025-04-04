

// describe('Convert lead time to date range', () => {
//     it('should convert lead time to date range', () => {
//       cy.fixture('data.json').then((data) => {
//         const leadTimeStr = data.lead_time;
//         const daysRange = leadTimeStr.match(/\d+/g).map(Number); // Extract numbers
  
//         const today = new Date();
        
//         // Helper function to add days to a date
//         const addDays = (date, days) => {
//           const result = new Date(date);
//           result.setDate(result.getDate() + days);
//           return result;
//         };
        
//         // Convert the number of days to dates
//         const startDate = addDays(today, daysRange[0]);
//         const endDate = addDays(today, daysRange[1]);
  
//         // Helper function to format the date
//         const formatDate = (date) => {
//           const options = { month: 'long', day: 'numeric' };
//           return date.toLocaleDateString('en-US', options);
//         };
  
//         // Format the dates
//         const formattedStartDate = formatDate(startDate);
//         const formattedEndDate = formatDate(endDate);
//         console.log(formattedStartDate, formattedEndDate);

  
//         // Combine the dates into a range string
//         const dateRange = `${formattedStartDate} - ${formattedEndDate}`;
        
  
//         // Log the date range or use it in your test
//         cy.log(dateRange);
  
//         // Example assertion
//         expect(dateRange).to.be.a('string');
//       });
//     });
//   });
describe('Getting the Lead time from website',()=>{
    it('Visit the site and get the Lead time',()=>{
        cy.visit('https://shopnewage.com/products/bold-series-9-piece-cabinet-set-50406?variant=31604659060802')
        // cy.get('.lead-time').invoke('text').then((leadTime)=>{
        //     cy.log(leadTime)
        //})
        cy.wait(5000)
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Close dialog 1")').length > 0) {
              cy.get('button:contains("Close dialog 1")').click();
            }
          });
          cy.get('.zipcodeanchor > .addReplaceZipcode').click()
          cy.get('.ProductRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').type('33133')
          cy.get('.ProductRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click()
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})
  