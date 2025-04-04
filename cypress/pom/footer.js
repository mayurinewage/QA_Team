class footernap {


    clickGetintouch() {
        cy.get('.sc-ec994386-1 > :nth-child(1) > .sc-ec994386-3').should('have.text', 'Get in touch');
        cy.get(':nth-child(1) > [href="/virtual-design-consultation/#request-free-consultation"]').should('have.text', 'Request Design Consultation');
        cy.get(':nth-child(1) > [href="/virtual-design-consultation/#request-free-consultation"]').click()
       cy.url().should('eq', 'https://newageproducts.com/virtual-design-consultation/#request-free-consultation');
    }
    clickStartLiveProduct() {
        cy.get(':nth-child(1) > [href="/request-live-product-demo/"]').should('have.text', 'Start Live Product Demo');
        cy.get(':nth-child(1) > [href="/request-live-product-demo/"]').click()
        cy.url().should('eq', 'https://newageproducts.com/request-live-product-demo/');
    }
    clickcontactnumber() {
        cy.get(':nth-child(1) > .telcall > .nap-social-info').should('have.text', '1 877 306 8930');
        
    }
    clickGetInspired() {
        cy.get('.sc-ec994386-1 > :nth-child(2) > :nth-child(1)').should('have.text', 'Get Inspired');
        cy.get(':nth-child(2) > [href="/product-catalogs/"]').should('have.text', 'Product Catalogs');
        cy.get(':nth-child(2) > [href="/product-catalogs/"]').click()
       cy.url().should('eq', 'https://newageproducts.com/product-catalogs/');
    }

    clickwhatsnew() {
        cy.get(':nth-child(2) > [href="/whats-new/"]').should('have.text', 'Outdoor Furniture');
        cy.get(':nth-child(2) > [href="/whats-new/"]').click()
        cy.url().should('eq', 'https://newageproducts.com/whats-new/');
    }
    clickOrderSwatches() {
        cy.get(':nth-child(2) > [href="/collections/free-samples/"]').should('have.text', 'Order Swatches');
        cy.get(':nth-child(2) > [href="/collections/free-samples/"]').click()
        cy.url().should('eq', 'https://newageproducts.com/collections/free-samples/');

    }
    ///done till above 
    clickbarcabinets() {
        cy.get('.sc-dda3fe3f-1 > :nth-child(1) > [href="/home-bar-cabinets/"]').should('have.text', 'Bar Cabinets');
        cy.get('.sc-dda3fe3f-1 > :nth-child(1) > [href="/home-bar-cabinets/"]').click()
        cy.url().should('eq', 'https://newageproducts.com/home-bar-cabinets/');
    }
    clickkitchen() {
        cy.get('[href="/kitchen"]').should('have.text', 'Kitchen');
        cy.get('[href="/kitchen"]').click()
        cy.url().should('eq', 'https://newageproducts.com/kitchen/');
    }
    clicklaundarystorage() {
        cy.get('[href="/laundry-room-cabinets"]').should('have.text', 'Laundry Storage');
        cy.get('[href="/laundry-room-cabinets"]').click()
        cy.url().should('eq', 'https://newageproducts.com/laundry-room-cabinets/');
    }
    clickflooring() {
        cy.get('[href="/flooring"]').should('have.text', 'Flooring');
        cy.get('[href="/flooring"]').click()
        cy.url().should('eq', 'https://newageproducts.com/flooring/');
    }

    clickvdc(){
        cy.get(':nth-child(2) > [href="/virtual-design-consultation/"]').should('have.text', 'Virtual Design Consultation');
        cy.get(':nth-child(2) > [href="/virtual-design-consultation/"]').click()
        cy.url().should('eq','https://newageproducts.com/virtual-design-consultation/');
    }

    clicklpd(){
        cy.get(':nth-child(2) > [href="/live-product-demo/"]').should('have.text', 'Live Product Demos');
        cy.get(':nth-child(2) > [href="/live-product-demo/"]').click()
        cy.url().should('eq','https://newageproducts.com/live-product-demo/');
    }

    clickinstallation(){
        cy.get('.sc-dda3fe3f-1 > :nth-child(2) > [href="/installation-services/"]').should('have.text', 'Installation');
        cy.get('.sc-dda3fe3f-1 > :nth-child(2) > [href="/installation-services/"]').click()
        cy.url().should('eq','https://newageproducts.com/installation-services/');
    }
    clickproductreg(){
        cy.get(':nth-child(2) > [href="/register/"]').should('have.text', 'Product Registration');
        cy.get(':nth-child(2) > [href="/register/"]').click()
        cy.url().should('eq','https://newageproducts.com/register/');
    }
    checkfootertimings(){
        cy.get(':nth-child(6) > a.nap-social-info').should('have.text', '1.877.306.8930');
        cy.get('.sc-dda3fe3f-1 > :nth-child(6) > :nth-child(3) > .bold').should('have.text', 'Sales Team');
        cy.get('.sc-dda3fe3f-1 > :nth-child(6) > :nth-child(3) > :nth-child(2)').should('have.text', 'Mon-Fri: 9AM - 7PM EST');
        cy.get('.sc-dda3fe3f-1 > :nth-child(6) > :nth-child(3) > :nth-child(3)').should('have.text', 'Sat-Sun: 9:30AM - 5PM EST');
        
    }
}
export default footernap;