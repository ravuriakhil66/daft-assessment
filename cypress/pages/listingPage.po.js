class ListingPage {
  get header() {
    return cy.get('[data-testid="search-h1"]');
  }

  get resultsImageCard() {
    return cy.get('[data-testid="card-img"]');
  }

  get filters() {
    return cy.get('[data-testid="open-filters-modal"]');
  }

  get surveyButton() {
    return cy.get('[aria-label="Hide survey"]', { timeout: 10000 });
  }

  get filterGarageSearchBox() {
    return cy.get('[data-testid="terms-input-text"]');
  }

  get showResults() {
    return cy.get('[data-testid="filters-modal-show-results-button"]');
  }

  verifyPropertyHeader(expectedProperty) {
    this.header.should("include.text", expectedProperty);
  }

  applyGarageFilterSearch(keyword) {
    this.filters.click();
    this.filterGarageSearchBox.clear().type(keyword);
    try {
      this.surveyButton.click();
      this.showResults.click();
    } catch (e) {
      console.warn("Survery Alert not displayed");
      this.showResults.click().wait(500);
    }
  }

  openFirstResult() {
    this.resultsImageCard.eq(2).click().wait(500);
  }
}

export default new ListingPage();
