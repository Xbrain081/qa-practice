describe('Prueba de Login - The Internet', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
    });
  
    it('Debería iniciar sesión exitosamente con credenciales válidas', () => {
      cy.get('[data-test="username"]').should('exist').should('be.visible');
      cy.get('[data-test="password"]').should('exist').should('be.visible');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').should('exist').should('not.be.disabled').click();
    });
  });