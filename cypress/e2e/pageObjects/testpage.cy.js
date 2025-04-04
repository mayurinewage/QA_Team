// cypress/support/page-objects/googleSearchPage.js
class GoogleSearchPage {
  visit() {
    cy.visit('https://www.google.com');
  }

  search(query) {
    cy.get('input[name="q"]').type(query);
    cy.get('input[name="btnK"]').click();
  }
}

// cypress/support/page-objects/searchResultsPage.js
class SearchResultsPage {
  getResultsCount() {
    return cy.get('#resultStats').invoke('text');
  }
}

// cypress/support/page-objects/index.js
export const googleSearchPage = new GoogleSearchPage();
export const searchResultsPage = new SearchResultsPage();
