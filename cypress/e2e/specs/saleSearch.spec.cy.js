import HomePage from '../../pages/homePage.po';
import ListingPage from '../../pages/listingPage.po';

describe('Daft Sale Property Search Test', () => {
  it('verify search and applies a garage filter', () => {
    // Visit Daft website
    HomePage.visit();

    cy.fixture('sale.json').then((data) => {
    // Perform a search for Sale Ad in county Dublin
    HomePage.performSearch(data.location, data.county);

    // check url
    cy.verifyURLContains(data.url)

    // Verify that there are search results for this location
    ListingPage.verifyPropertyHeader(data.searchResults);

    // Apply the "garage" keyword filter
    ListingPage.applyGarageFilterSearch(data.filterSearch);

    // Verify that there are results for the "garage" filter
    ListingPage.openFirstResult();

    // Check that the "garage" keyword is present in the advert
    cy.contains(data.filterSearch, {timeout: 10000}).should('exist');

    })
  });
});
