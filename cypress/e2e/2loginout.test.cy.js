describe('Wejście na stronę GoIt', () => {
    // visit page
    beforeEach('Go to page', () => {
    cy.visit('https://www.edu.goit.global/pl/account/login');
});

it('Zaologowanie i wylogowanie ', () => {
    // znalezienie pola email i wpisanie email użytkownika
    cy.get('#user_email').type('testowyqa@qa.team')
    // znalezienie pola password i wpisanie hasła
    cy.get('#user_password').type('QA!automation-1')
    // znalezienie przycisku Login i kliknięcie - zalogowanie
    cy.get('.next-1jphuq5').click()
    // znalezienie przycisku navigation menu
    cy.get('#open-navigation-menu-mobile')
    // liknięcie przycisku navigation menu
    cy.get('#open-navigation-menu-mobile').click()
    // znalezienie przycisku logout 
    cy.get(':nth-child(9) > .next-bve2vl')
    // kliknięsie przycisku wylogowania - wylogowanie 
    cy.get(':nth-child(9) > .next-bve2vl').click()
    
});
});