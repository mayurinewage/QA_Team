describe('NAP US Timing update ',()=>{
    it('Footer Timing',()=>{
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

it('About US page Timing',()=>{
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

it('Experience Center page timing',()=>{
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

    it('Contact US page Timing',()=>{
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

        it('Newsroom page timing',()=>{
            cy.visit('https://newageproducts.com/newsroom/')
        cy.get('.MuiInputBase-input').eq(1).type('33133');
        cy.get('.sc-cdf11386-8').click()
        cy.wait(3000)
        cy.get('.info > :nth-child(2) > :nth-child(1)').should('have.text', 'Live Product Demos');
        cy.get('.info > :nth-child(2) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.info > :nth-child(2) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');

        cy.get('.info > :nth-child(3) > :nth-child(1)').should('have.text', 'Virtual Design Consultations');
        cy.get('.info > :nth-child(3) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.info > :nth-child(3) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');

        cy.get('.info > :nth-child(4) > :nth-child(1)').should('have.text', 'Sales Team Hours');
        cy.get('.info > :nth-child(4) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.info > :nth-child(4) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');

        cy.get('.info > :nth-child(5) > :nth-child(1)').should('have.text', 'Experience Center Hours');
        cy.get('.info > :nth-child(5) > :nth-child(2)').should('have.text', 'Mon-Fri: 11AM - 5PM EST');
        cy.get('.info > :nth-child(5) > :nth-child(3)').should('have.text', 'Sat-Sun: 10AM - 5PM EST');

        cy.get(':nth-child(6) > .grid-heading').should('have.text', 'Our hours of operation might differ, depending on Canadian public statutory holidays.');
        cy.get('.info > :nth-child(7) > :nth-child(1) > a').should('have.text', '+1 877.306.8930');

        })

        it('VDC page timing',()=>{
            cy.visit('https://newageproducts.com/')
        cy.get('.MuiInputBase-input').eq(1).type('33133');
        cy.get('.sc-cdf11386-8').click()
        cy.wait(3000)
        cy.get('.ltd').click()
        cy.wait(3000)
        cy.get('.data-div > .main-heading').should('have.text', 'Hours of Operation');
        cy.get('.data-div > :nth-child(2)').should('have.text', 'Monday to Friday | 9:00 AM to 7:00 PM');
        cy.get('.data-div > :nth-child(3)').should('have.text', 'Saturday to Sunday | 9:30 AM to 5:00 PM');
        cy.get('.data-div > .desc').should('have.text', 'Our hours of operation might differ, depending on statutory holidays.');
        cy.get('.contact-us > h3.jsx-56338ebc8e77b0bf').should('have.text', 'Contact us');
        cy.get('.tel').should('have.text', '1.877.306.8930');
        cy.get('.mail').should('have.text', 'design@newageproducts.com');


        })
 
        it('Live product page timing',()=>{
            cy.visit('https://newageproducts.com/live-product-demo/')
            cy.get('.MuiInputBase-input').eq(1).type('33133');
            cy.get('.sc-cdf11386-8').click()
            cy.wait(3000)

            cy.get('.info > :nth-child(1) > :nth-child(1)').should('have.text', 'Business Hours');
            cy.get('.info > :nth-child(1) > :nth-child(2)').should('have.text', 'Mon - Fri: 9AM - 7PM EST');
            cy.get('.info > :nth-child(1) > :nth-child(3)').should('have.text', 'Sat - Sun: 9:30AM - 5PM EST');
            cy.get(':nth-child(1) > .italic').should('have.text', 'Our hours of operation might differ, depending on Canadian public statutory holidays.');
            cy.get('.info > :nth-child(2) > :nth-child(1) > a').should('have.text', '+1 877.306.8930');
            cy.get(':nth-child(2) > .link > a').should('have.text', 'ec_ops@newageproducts.com');
        })
       
    


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
})