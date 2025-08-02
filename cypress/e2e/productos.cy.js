describe('Prueba de seleccion de producto', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').click();
    });

    it('Debera ser redirigido a la página de inventario después de iniciar sesión', () => {
      cy.url('https://www.saucedemo.com/v1/inventory.html');
    });

    it('visualiza producto y regresa a la página de inventario', () => {
      cy.get('#item_4_img_link > .inventory_item_img').click();
      cy.contains('button', 'Back').should('exist').click({ force: true });
    });
});
