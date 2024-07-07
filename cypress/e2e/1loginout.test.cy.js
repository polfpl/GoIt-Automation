describe('User can visit GoIt page', () => {
    // visit page
    beforeEach('Go to page', () => {
    cy.visit('https://www.edu.goit.global/pl/account/login');
});

it('Log in and log out ', () => {
    // find user email and type mail
    cy.get('#user_email').type('user888@gmail.com')
    // find user password and type password
    cy.get('#user_password').type('1234567890')
    // find button and click
    cy.get('.next-1jphuq5').click()
    // find navigation menu button
    cy.get('#open-navigation-menu-mobile')
    // click navigation menu button
    cy.get('#open-navigation-menu-mobile').click()
    // find logout button 
    cy.get(':nth-child(12) > .next-bve2vl')
    // click logout button
    cy.get(':nth-child(12) > .next-bve2vl').click()
});
});