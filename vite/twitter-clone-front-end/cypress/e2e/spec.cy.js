describe("signup", () => {
  it("should handle registration", () => {
    cy.visit("/");

    cy.get("a:contains('Create account')").click({ force: false });
    cy.url().should("include", "/i/flow/signup");
  });
});
