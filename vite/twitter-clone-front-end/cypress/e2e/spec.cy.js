describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "Happening now");
  });
});
