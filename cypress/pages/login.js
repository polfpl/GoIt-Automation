export class Login {
    visit() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
    
    login() {
        cy.get("#user_email").type("testowyqa@qa.team"); // znalezienie pola email i wpisanie email użytkownika
        cy.get("#user_password").type("QA!automation-1"); // znalezienie pola password i wpisanie hasła
        cy.get(".next-1jphuq5").click(); // znalezienie przycisku Login i kliknięcie - zalogowanie
        
    }
    
    logout() {
        cy.get("#open-navigation-menu-mobile"); // znalezienie przycisku navigation menu
        cy.get("#open-navigation-menu-mobile").click(); // kliknięcie przycisku navigation menu
        cy.get(":nth-child(9) > .next-bve2vl"); // znalezienie przycisku logout
        cy.get(":nth-child(9) > .next-bve2vl").click(); // kliknięsie przycisku wylogowania - wylogowanie
    }  

}

