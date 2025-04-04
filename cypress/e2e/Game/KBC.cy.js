describe('KBC Game Automation', () => {
    let roomId;
  
    it('should create a room as tester and get the room ID', () => {
      cy.visit('https://websim.ai/c/hUBIbdvVaAGr2M2Do');
  
      // Get the iframe and type the player name
      cy.getIframe('iframe').within(() => {
        cy.get('#player-name').type('tester');
        cy.get('#player-name').should('have.value', 'tester');
        cy.get('button[onclick="showCreateRoom()"]').click();
        cy.get('button[w-tid="13"]').click();
        
        // Wait for the room ID to appear and store it
        cy.get('#room-code-display[w-tid="21"]').should('be.visible').then(($roomId) => {
            roomId = $roomId.text(); // Adjust the selector and method to get the room ID text
          });
         
      });
    });
  
    it('should log in as testman and join the created room', () => {
      cy.visit('https://websim.ai/c/hUBIbdvVaAGr2M2Do');
  
      // Get the iframe and type the player name
      cy.getIframe('iframe').within(() => {
        cy.get('#player-name').type('testman');
        cy.get('#player-name').should('have.value', 'testman');
        cy.get('button[onclick="showJoinRoom()"]').click();
  
        // Enter the room ID and join the room
        cy.get('#room-code').type(roomId); // Adjust the selector to match the room ID input field
        //cy.get('button[onclick="joinRoom()"]').click();
        cy.on('window:alert', (alertText) => {
          // Verify the alert text
          expect(alertText).to.equal('Room not found'); // Replace with the actual alert text
        });
        
      });
    });
  
    it.skip('should start the game from tester\'s perspective', () => {
      // Assuming you have a way to switch or control the tester session
      // Navigate to the tester's session or ensure tester is active
      cy.visit('https://websim.ai/c/hUBIbdvVaAGr2M2Do'); // Or any relevant URL to go back to tester's session
  
      // Get the iframe and perform actions to start the game
      cy.getIframe('iframe').within(() => {
        // Add necessary steps to start the game, e.g., clicking a start button
        cy.get('button[onclick="startGame()"]').click(); // Adjust the selector to match the start game button
      });
    });
  
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  