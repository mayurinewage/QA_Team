describe('KBC Game Automation', () => {
    let roomId;
  
    it('should create a room as tester and start the game', () => {
      cy.visit('https://websim.ai/c/hUBIbdvVaAGr2M2Do');
  
      // Get the iframe and type the player name
      cy.getIframe('iframe').within(() => {
        cy.get('#player-name').type('tester');
        cy.get('#player-name').should('have.value', 'tester');
        cy.get('button[onclick="showCreateRoom()"]').click();
        cy.get('button[w-tid="13"]').click();
  
        // Wait for the room ID to appear and store it
        cy.get('#room-code-display[w-tid="21"]').should('be.visible').then(($roomId) => {
          roomId = $roomId.text().trim(); // Store the room ID text and trim any whitespace
          cy.log(`Room ID: ${roomId}`); // Log the room ID for debugging
        });
  
        // Add necessary steps to start the game, e.g., clicking a start button
        cy.get('button[onclick="startGame()"]').click(); // Adjust the selector to match the start game button
      });
    });
  
    it('should log in as testman and join the created room', () => {
      cy.visit('https://websim.ai/c/hUBIbdvVaAGr2M2Do');
  
      // Get the iframe and type the player name
      cy.getIframe('iframe').within(() => {
        cy.get('#player-name').type('testman');
        cy.get('#player-name').should('have.value', 'testman');
  
        // Click the join room button to show the room ID input
        cy.get('button[onclick="showJoinRoom()"]').click();
  
        // Log the room ID to verify it is correctly captured
        cy.log(`Joining Room ID: ${roomId}`);
  
        // Enter the room ID and join the room
        cy.get('#room-code').type(roomId); // Adjust the selector to match the room ID input field
        cy.get('button[onclick="joinRoom()"]').click();
      });
    });
  
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  