// cypress/integration/googleSearch.spec.js
import { googleSearchPage, searchResultsPage } from '../pageObjects';

describe('Google Search', () => {
  it('should perform a search and display results', () => {
    googleSearchPage.visit();
    googleSearchPage.search('Cypress testing');

    searchResultsPage.getResultsCount().should('be.visible');
  });
});

  