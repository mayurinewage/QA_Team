it('Lead Time API', () => {
    cy.request({
        method: "POST",
        url: "https://app.newageproducts.com/DynamicLeadTime/public/api/us/lead-time/sku",
        body: {
            "zipcode": "33133",
            "sku": [50406]
        }
    })
    .then((response) => {
        let responseData = response.body;
        cy.log(JSON.stringify(responseData)); // log the response as a string

        // Assuming 'lead_time' is a property of the data array, and you want to check its value
        expect(response.body.data[0].lead_time).to.include('This product will ship in 18-24 days.');

        cy.writeFile(
            "cypress/fixtures/leadtimetest.json",
            responseData
        );

        
    });
});
it('Calculate Dates based on Lead Time', () => {
    // Assuming leadtime is a variable that contains the lead time text
    let leadtime = 'This product will ship in 18-24 days.';

    // Extracting the numeric values from the leadtime text
    let match = leadtime.match(/\d+/g);
    
    if (match && match.length >= 2) {
        // Extracted numeric values
        let daysFrom = parseInt(match[0]);
        let daysTo = parseInt(match[1]);

        // Calculate dates
        let today = new Date();
        let date18DaysFromToday = new Date(today);
        date18DaysFromToday.setDate(today.getDate() + daysFrom);

        let date24DaysFromToday = new Date(today);
        date24DaysFromToday.setDate(today.getDate() + daysTo);

        // Log the calculated dates
        cy.log('18 days from today: ' + date18DaysFromToday.toDateString());
        cy.log('24 days from today: ' + date24DaysFromToday.toDateString());

        // Perform any additional assertions or actions based on the calculated dates
    } else {
        // Handle the case where the leadtime format is not as expected
        cy.log('Leadtime format not as expected.');
    }
});

    // it('Compare Dates with Lead Time Text', () => {

    //     cy.visit('https://shopnewage.com/products/bold-series-9-piece-cabinet-set-50406?variant=31604659060802&z=33133')
    // cy.wait(10000)
    //     // Assuming leadtime is a variable that contains the lead time text
    //     let leadtime = 'This product will ship in 18-24 days.';
    
    //     // Extracting the numeric values from the leadtime text
    //     let match = leadtime.match(/\d+/g);
    
    //     if (match && match.length >= 2) {
    //         // Extracted numeric values
    //         let daysFrom = parseInt(match[0]);
    //         let daysTo = parseInt(match[1]);
    
    //         // Calculate dates
    //         let today = new Date();
    //         let date18DaysFromToday = new Date(today);
    //         date18DaysFromToday.setDate(today.getDate() + daysFrom);
    
    //         let date24DaysFromToday = new Date(today);
    //         date24DaysFromToday.setDate(today.getDate() + daysTo);
    
    //         // Format dates to match the date format in the HTML element
    //         let formattedStartDate = date18DaysFromToday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    //         let formattedEndDate = date24DaysFromToday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    //         // Log the calculated and formatted dates
    //         cy.log('Start date: ' + formattedStartDate);
    //         cy.log('End date: ' + formattedEndDate);
    
    //         // Get the text from the HTML element
    //         cy.get('span.lead_time_text.grey').invoke('text').then((elementText) => {
    //             // Log the text from the element
    //             cy.log('Text from element: ' + elementText);
    
    //             // Assert that the text from the element includes the formatted dates
    //             expect(elementText).to.include(formattedStartDate);
    //             expect(elementText).to.include(formattedEndDate);
    //         });
    //     } else {
    //         // Handle the case where the leadtime format is not as expected
    //         cy.log('Leadtime format not as expected.');
    //     }
    // });

    // Assuming the HTML element is located with a suitable selector
const elementSelector = '.lead_time_text.grey';

describe('Extract and Format Dates', () => {
  it('should extract and format dates', () => {
    // Replace 'your_page_url' with your actual page URL
    cy.visit('https://shopnewage.com/products/bold-series-9-piece-cabinet-set-50406?variant=31604659060802&z=33133');
cy.wait(10000)
    // Assuming leadtime is a variable that contains the lead time text
    let leadtime = 'This product will ship in 18-24 days.';

    // Extracting the numeric values from the leadtime text
    let match = leadtime.match(/\d+/g);

    if (match && match.length >= 2) {
      // Extracted numeric values
      let daysFrom = parseInt(match[0]);
      let daysTo = parseInt(match[1]);

      // Calculate dates
      let today = new Date();
      let date18DaysFromToday = new Date(today);
      date18DaysFromToday.setDate(today.getDate() + daysFrom);

      let date24DaysFromToday = new Date(today);
      date24DaysFromToday.setDate(today.getDate() + daysTo);

      // Format dates to match the date format in the HTML element
      let formattedStartDate = date18DaysFromToday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      let formattedEndDate = date24DaysFromToday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

      // Log the formatted dates
      cy.log('Start date: ' + formattedStartDate);
      cy.log('End date: ' + formattedEndDate);

      // Get text from the specified element
      cy.get(elementSelector).invoke('text').then((text) => {
        // Log the text from the element
        cy.log('Text from element: ' + text);

        // Assert that the text from the element includes the formatted dates
        expect(text).to.include(formattedStartDate);
        expect(text).to.include(formattedEndDate);
      });
    } else {
      // Handle the case where the leadtime format is not as expected
      cy.log('Leadtime format not as expected.');
    }
  });
});

     Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    });


  
  