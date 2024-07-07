describe("Wejście na stronę GoIt", () => {
  // wejście na stronę
  beforeEach("Go to page", () => {
    cy.visit("https://www.edu.goit.global/pl/account/login");
  });

  it("Zalogowanie i wylogowanie ", () => {
    cy.get("#user_email").type("testowyqa@qa.team"); // znalezienie pola email i wpisanie email użytkownika
    cy.get("#user_password").type("QA!automation-1"); // znalezienie pola password i wpisanie hasła
    cy.get(".next-1jphuq5").click(); // znalezienie przycisku Login i kliknięcie - zalogowanie
    cy.get("#open-navigation-menu-mobile"); // znalezienie przycisku navigation menu
    cy.get("#open-navigation-menu-mobile").click(); // kliknięcie przycisku navigation menu
    cy.get(":nth-child(9) > .next-bve2vl"); // znalezienie przycisku logout
    cy.get(":nth-child(9) > .next-bve2vl").click(); // kliknięsie przycisku wylogowania - wylogowanie
  });
});
