//your JS code here. If required.
describe('Login Form', () => {
  it('displays login form with correct elements', () => {
    cy.visit('http://localhost:3000'); // Replace with the correct URL

    // Check if the heading "Login Form" is displayed
    cy.get('h1').should('contain', 'Login Form');

    // Check if the username input field is present
    cy.get('#username').should('exist');

    // Check if the password input field is present
    cy.get('#password').should('exist');

    // Check if the "Remember me" checkbox is present
    cy.get('#checkbox').should('exist');

    // Check if the label "Remember me" is correctly associated with the checkbox
    cy.get('label[for="checkbox"]').should('contain', 'Remember me');

    // Check if the submit button is present
    cy.get('#submit').should('exist');
  });
});
