class HomePage {
  visit() {
    cy.visit("/");
    //this.clickAcceptAllButton();
  }

  get acceptAllButton() {
    return cy.get("#didomi-notice-agree-button > span");
  }

  get surveyButton() {
    return cy.get('[aria-label="Hide survey"]', { timeout: 10000 });
  }

  get searchInput() {
    return cy.get('[data-testid="county-area-filter"]', { timeout: 10000 });
  }

  get searchLocationInput() {
    return cy.get(".search-form__location");
  }

  get searchButton() {
    return cy.get(".search-form__button");
  }

  clickAcceptAllButton() {
    try {
      this.acceptAllButton.click();
      this.surveyButton.click();
    } catch (e) {
      console.warn("Cookies Alert not displayed");
    }
  }

  performSearch(keyword, autosuggestion) {
    this.searchInput.type(keyword);
    cy.contains(autosuggestion).click();
    //this.searchButton.click();
  }
}

export default new HomePage();
