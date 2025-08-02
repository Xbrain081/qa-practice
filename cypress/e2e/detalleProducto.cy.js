describe('Prueba de Login - The Internet', () => {
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
      cy.get('#item_4_img_link > .inventory_item_img').should('exist').click();
      cy.get('.btn_primary').should('exist');
      cy.get('.inventory_details_desc').should('exist').and('not.be.empty');
      cy.get('.inventory_details_img').should('exist').and('be.visible');
      cy.get('.inventory_details_price').contains(/\$\d+(\.\d{2})?/);
      cy.get('#shopping_cart_container').should('exist').should('be.visible');
      cy.get('.bm-burger-button > button').should('exist').should('not.be.disabled');
      cy.get('.inventory_details_back_button').contains('Back').should('exist').click({ force: true });
    });
});