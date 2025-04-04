describe('NAP US Timing update ', () => {
    it('Footer Timing', () => {
        cy.visit('https://newageproducts.com/')

        cy.get('.MuiInputBase-input').eq(1).type('33133');

        cy.get('.sc-cdf11386-8').click();
        cy.wait(3000)
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(3) > .bold').should('have.text', 'Sales Team');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(3) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(3) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(4) > .bold').should('have.text', 'Customer Service Team');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(4) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(5) > .bold').should('have.text', 'Live Product Demos');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(5) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(5) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(6) > .bold').should('have.text', 'Experience Center Hours');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(6) > :nth-child(2)').should('have.text', 'Mon-Fri: 11AM - 5PM EST');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(6) > :nth-child(3)').should('have.text', 'Sat-Sun: 10AM - 5PM EST');


    })

    it('About US page Timing', () => {
        cy.visit('https://newageproducts.com/about-us/')
        cy.get('.MuiInputBase-input').eq(1).type('33133');
        cy.get('.sc-cdf11386-8').click();
        cy.wait(3000)
        cy.get('.info > :nth-child(1) > :nth-child(1)').should('have.text', 'Experience Centre');
        cy.get(':nth-child(1) > .no-bold').should('have.text', '1190 Caledonia Rd, Toronto, Ontario, M6A 2W5');
        cy.get('.info > :nth-child(2) > :nth-child(1)').should('have.text', 'Business Hours');
        cy.get('.info > :nth-child(2) > :nth-child(2)').should('have.text', 'Monday - Friday 11:00 AM to 5:00 PM');
        cy.get('.info > :nth-child(2) > :nth-child(3)').should('have.text', 'Saturday - Sunday 10:00 AM to 5:00 PM');
        cy.get('.italic').should('have.text', 'Our hours of operation might differ, depending on Canadian public statutory holidays.');
        cy.get(':nth-child(3) > :nth-child(1) > a').should('have.text', '+1 877.306.8930');

    })

    it('Experience Center page timing', () => {
        cy.visit('https://newageproducts.com/experiencecenter/')
        cy.get('.MuiInputBase-input').eq(1).type('33133');
        cy.get('.sc-cdf11386-8').click();
        cy.wait(3000)
        cy.get('.info > :nth-child(1) > :nth-child(1)').should('have.text', 'Experience Centre');
        cy.get(':nth-child(1) > .no-bold').should('have.text', '1190 Caledonia Rd, Toronto, Ontario, M6A 2W5');
        cy.get('.info > :nth-child(2) > :nth-child(1)').should('have.text', 'Business Hours');
        cy.get('.info > :nth-child(2) > :nth-child(2)').should('have.text', 'Monday - Friday 11:00 AM to 5:00 PM');
        cy.get('.info > :nth-child(2) > :nth-child(3)').should('have.text', 'Saturday - Sunday 10:00 AM to 5:00 PM');
        cy.get('.italic').should('have.text', 'Our hours of operation might differ, depending on Canadian public statutory holidays.');
        cy.get('.info > :nth-child(3) > :nth-child(1) > a').should('have.text', '+1 877.306.8930');

    })

    it('Contact US page Timing', () => {
        cy.visit('https://newageproducts.com/')
        cy.get('.MuiInputBase-input').eq(1).type('33133');
        cy.get('.sc-cdf11386-8').click();
        cy.wait(3000)
        cy.get('.sc-211676b7-1 > :nth-child(6) > .sc-211676b7-3 > a').click()
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(1) > .grid-heading').should('have.text', 'Live Product Demos');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(1) > :nth-child(2)').should('have.text', 'Mon-Fri: 9:00AM - 7:00PM EST');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(1) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5:00PM EST');

        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(2) > .grid-heading').should('have.text', 'Sales Team');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(2) > :nth-child(2)').should('have.text', 'Mon-Fri: 9:00AM - 7:00PM EST');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(2) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5:00PM EST');

        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(3) > .grid-heading').should('have.text', 'Experience Center Hours');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(3) > :nth-child(2)').should('have.text', 'Mon-Fri: 11:00AM - 5:00PM EST');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(3) > :nth-child(3)').should('have.text', 'Sat-Sun: 10:00AM - 5:00PM EST');

        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(4) > .grid-heading').should('have.text', 'Customer Service');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(4) > :nth-child(2)').should('have.text', 'Mon-Fri: 9:00AM - 7:00PM EST');
        cy.get('.showInDesktop > .sc-d4935795-1 > :nth-child(4) > :nth-child(3)').should('have.text', 'Sat-Sun: Closed on weekends');



        cy.get('.info > :nth-child(1) > :nth-child(1)').should('have.text', 'Experience Centre');
        cy.get(':nth-child(1) > .no-bold').should('have.text', '1190 Caledonia Rd, Toronto, Ontario, M6A 2W5');
        cy.get('.info > :nth-child(2) > :nth-child(1)').should('have.text', 'Business Hours');
        cy.get('.info > :nth-child(2) > :nth-child(2)').should('have.text', 'Monday - Friday 11:00 AM to 5:00 PM');
        cy.get('.info > :nth-child(2) > :nth-child(3)').should('have.text', 'Saturday - Sunday 10:00 AM to 5:00 PM');
        cy.get('.italic').should('have.text', 'Our hours of operation might differ, depending on Canadian public statutory holidays.');
        cy.get('.info > :nth-child(3) > :nth-child(1) > a').should('have.text', '+1 877.306.8930');


    })





    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})