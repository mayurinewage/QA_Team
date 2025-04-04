
describe("API Plugin Test", () =>{
    it('Create a new todo by request',{ env: { snapshotOnly: true } }, () => {
   cy.api("POST", "https://reqres.in/api/users",{
        "id": 8,
        "email": "eve10.holt@reqres.in",
        "first_name": "api",
        "last_name": "call",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
  });
    });
      });

// apicheckup.cy.js

// Import the Cypress API plugin
// apicheckup.cy.js

