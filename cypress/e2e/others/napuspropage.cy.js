describe('NAP US GARAGE PRO PAGE', () => {
    it('PRO PAGE', () => {
        cy.visit("https://regional.dev-newageproducts.com/garage-storage-cabinets-pro-3-0-series/")
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('12345')
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('33133')
        cy.get('.sc-c889514f-8').click()
        cy.get('.filter-tabs > :nth-child(5)').click()
        cy.get(':nth-child(1) > .features > .row-top > .price > .sc-cbd3ad43-1', { timeout: 10000 }).eq(0).invoke('text').then(price1 => { 
          cy.log("Product price" + price1.split('$')[1]); 
         const Productone = price1.split('$')[1]; 
         cy.log(Productone);
        })
        cy.get(':nth-child(2) > .features > .row-top > .price > .sc-cbd3ad43-1', { timeout: 10000 }).invoke('text').then(price2 => { 
          cy.log("Product price" + price2.split('$')[1]); 
         const Product2 = price2.split('$')[1]; 
         cy.log(Product2);
        })
        cy.get(':nth-child(3) > .features > .row-top > .price > .sc-cbd3ad43-1', { timeout: 10000 }).invoke('text').then(price3 => { 
          cy.log("Product price" + price3.split('$')[1]); 
         const Product3 = price3.split('$')[1]; 
         cy.log(Product3);
        })
        cy.get(':nth-child(4) > .features > .row-top > .price > .sc-cbd3ad43-1', { timeout: 10000 }).invoke('text').then(price4 => { 
          cy.log("Product price" + price4.split('$')[1]); 
         const Product4 = price4.split('$')[1]; 
         cy.log(Product4);
        })
        cy.get(':nth-child(5) > .features > .row-top > .price > .sc-cbd3ad43-1', { timeout: 10000 }).invoke('text').then(price5 => { 
          cy.log("Product price" + price5.split('$')[1]); 
         const Product5 = price5.split('$')[1]; 
         cy.log(Product5);
        })
        });
        //cy.get('#MobilePinCodeUpdate > .zipbox > span').click()
        //cy.get('.sc-b93566d4-0 > .pinCode-Modal > .field > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("A1A1A1")
        //cy.get('.sc-b93566d4-0 > .pinCode-Modal > :nth-child(4) > .sc-c889514f-8').click()
        //cy.get('.slick-current > :nth-child(1) > .sc-87779093-1 > .sc-87779093-3 > .content-box > .sc-87779093-17 > .sc-87779093-5').find(7219.54)
        //cy.get('.slick-current>div>.jKygyL>.kgTvet>div>div,3').should('include.text', '$7219.54')
        //cy.get('.sc-87779093-1 > .sc-87779093-3 > .content-box >.sc-87779093-17 > .sc-87779093-5', { timeout: 10000 }).eq(9).invoke('text').then(price => { 
          //cy.log("Product price" + price.split('$')[1]); 
         // const storageprice = price.split('$')[1]; 
         // cy.log(storageprice);
        })
       // cy.get('.slick-current > :nth-child(1) > .sc-87779093-1 > .sc-87779093-3 > .content-box > .sc-87779093-17 > .sc-87779093-5',{ timeout: 10000 })
        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })