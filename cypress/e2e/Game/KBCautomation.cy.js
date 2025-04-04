describe('Visit the Game',()=>{

    it('Visit the Game',()=>{
        cy.visit('https://websim.ai/c/hUBIbdvVaAGr2M2Do')
        cy.wait(5000)
        cy.getIframe('iframe').within(() => {
            cy.get('h1[w-tid="7"]').should('contain', 'Kaun Banega Crorepati - Multiplayer Lobby');
            cy.get('button[onclick="showCreateRoom()"][w-tid="10"]').should('be.visible');
            cy.get('button[onclick="showJoinRoom()"][w-tid="11"]').should('be.visible');
            cy.get('#player-name').should('be.visible')
            cy.get('#player-name').type('tester');
            cy.get('#player-name').should('have.value', 'tester');
            cy.get('button[onclick="showCreateRoom()"]').click();
            cy.get('button[onclick="backToInitial()"][w-tid="14"]').should('be.visible');
            //cy.get('span#w-room-code-display[w-tid="21"]').should('be.visible');
            cy.get('button[w-tid="13"]').click();
            
            // Wait for the room ID to appear and store it
            cy.get('#room-code-display[w-tid="21"]').should('be.visible')
            cy.get('#room-code-display[w-tid="21"]').invoke('text').then((roomCode) => {
                // Log the room code to Cypress log
                cy.log(`Room Code: ${roomCode}`);
              });
            
             
          });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
})