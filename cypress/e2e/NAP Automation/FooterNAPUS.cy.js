import footernap from "../../pom/footer";
describe('Footer NAP',()=>{
    it('NAP US',()=>{
 cy.visit('https://newageproducts.com/')
 let ZIPcode = 33133
 cy.get('.location-language > .false').click()
 cy.get('.MuiInputBase-input.MuiOutlinedInput-input.css-g8k17y').eq(1).click().type(ZIPcode)
 cy.get(':nth-child(32) > .sc-39c15cab-4 > .input-wrapper > form > .cta-wrapper > .sc-cdf11386-8').click()

    //     cy.get('.sc-cdf11386-8').click();
    //     cy.get('#email_id').type(12);
    //     cy.get('#email_subscribe > button').click();
    //     cy.get('.error_messages').should('have.text', 'Invalid Email Address');
    //     cy.get(':nth-child(1) > .sc-211676b7-3').should('have.text', 'Products');
    //     const garagefooter = new footernap();
    //     garagefooter.clickgaragecabinets();
    //     const garageshelvings = new footernap();
    //     garageshelvings.clickgarageshelvings();
    //     const outdoorkitchen = new footernap();
    //     outdoorkitchen.clickoutdoorkitchen()
    //     const outdoorfurniture = new footernap();
    //     outdoorfurniture.clickoutdoorfurniture();
    //     const grillsandapp = new footernap();
    //     grillsandapp.clickgrillsandapp();
    //     const barcabinets = new footernap();
    //     barcabinets.clickbarcabinets();
    //     const clickkitchen = new footernap();
    //     clickkitchen.clickkitchen();
    //     const laundarystorage = new footernap();
    //     laundarystorage.clicklaundarystorage();
    //     const flooring = new footernap();
    //     flooring.clickflooring();
    //     cy.get(':nth-child(2) > .sc-dda3fe3f-3').should('have.text', 'Services');
    //     const timings = new footernap();
    //     timings.checkfootertimings();

     })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})