describe('Prueba de Login - The Internet', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
    });
  
    it('usuario ingresa con credenciales validas caso positivo', () => {
      cy.get('[data-test="username"]').should('exist').should('be.visible');
      cy.get('[data-test="password"]').should('exist').should('be.visible');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').should('exist').should('not.be.disabled').click();
    });

    it('usuario ingresa con usuario bloqueado', () => {
      cy.get('[data-test="username"]').should('exist').should('be.visible');
      cy.get('[data-test="password"]').should('exist').should('be.visible');
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').should('exist').should('not.be.disabled').click();
      cy.get('[data-test="error"]').should('exist').should('be.visible').and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('usuario da click en login sin un usuario valido', () => {
      cy.get('#login-button').should('exist').should('not.be.disabled').click();
      cy.get('[data-test="error"]').should('exist').should('be.visible').and('contain.text', 'Epic sadface: Username is required');
    });

    it('usuario trata de ingresar con una contraseña invalida', () => {
      cy.get('[data-test="username"]').should('exist').should('be.visible');
      cy.get('[data-test="password"]').should('exist').should('be.visible');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('123');
      cy.get('#login-button').should('exist').should('not.be.disabled').click();
      cy.get('[data-test="error"]').should('exist').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
    });

  });