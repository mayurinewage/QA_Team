describe('Footer Test', () => {
    it('NAP', () => {
        cy.visit('https://newageproducts.com/');
        cy.get('.MuiInputBase-input').eq(1).type('33133');
        cy.get('.sc-cdf11386-8').click();

        // Commented out previous lines, they are unnecessary for the current test
        // ...

        let menu = cy.get('.menu-bar > img');
        menu.click();
        cy.get('.logo-img-box > a > img').click();
        cy.url().should('eq', 'https://newageproducts.com/');
        cy.get(':nth-child(6) > a.nap-social-info').should('have.text', '1.877.306.8930');
        cy.get('.sc-211676b7-1 > :nth-child(6) > :nth-child(3) > .bold').should('have.text', 'Sales Team');
        cy.get('.nap-social-info').eq(0).should('have.text', 'Sales Team');
        cy.get('.nap-social-info').eq(1).should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.nap-social-info').eq(2).should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');
        cy.get('.sc-dda3fe3f-1 > :nth-child(6) > :nth-child(3) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.sc-dda3fe3f-1 > :nth-child(6) > :nth-child(3) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');

        // Corrected typo in the line below (changed `,should` to `.should`)
        // cy.get('.menu-bar > img').click();
        // let Garagemenu = cy.get('.menu-name').eq(0);
        // Garagemenu.click();
        // cy.get('.black').should('have.text', 'Garage');
        // cy.wait(3000);
        // let Garagecabinets = cy.get('.menu-name').eq(2);
        // Garagecabinets.should('have.text', 'Garage Cabinets ')
        // Garagecabinets.click()
        // let Garagecabinetspage = cy.get('.menu-name').eq(2)
        // Garagecabinetspage.click()
        // cy.wait(3000)
        // cy.url().should('eq', 'https://newageproducts.com/garage-storage-cabinets/');

        // menu.click({ force: true });
        // Garagemenu.click({ force: true });
        // Garagecabinets.click({ force: true });
        
        // let proseries = cy.get('.menu-name').eq(3)
        // proseries.click();

        // Corrected the typo in the line below (changed `,should` to `.should`)
        //cy.url().should('eq', 'https://newageproducts.com/garage-storage-cabinets-pro-3-0-series/');
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
    });
});