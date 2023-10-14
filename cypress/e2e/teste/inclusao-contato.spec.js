
describe('Alteração de Contato', () => {
    it('Deve alterar um contato existente', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  
      // Realize ações de interação para encontrar um contato existente e efetuar alterações.
      cy.contains('Nome do Contato').click(); // Por exemplo, clique no nome do contato.
  
      // Interaja com os campos de alteração, faça as alterações necessárias.
      cy.get('input[name="nome"]').clear().type('Novo Nome do Contato');
      cy.get('input[name="email"]').clear().type('novoemail@contato.com');
  
      // Clique no botão de atualização ou salvar as alterações.
      cy.get('button[type="submit"]').click();
  
      // Verifique se as alterações foram aplicadas corretamente.
      cy.contains('Novo Nome do Contato');
      cy.contains('novoemail@contato.com');
    });
  });
  
  describe('Remoção de Contato', () => {
    it('Deve remover um contato existente', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
  
      // Realize ações de interação para encontrar um contato existente e efetuar a remoção.
      cy.contains('Nome do Contato').click(); // Por exemplo, clique no nome do contato.
  
      // Clique no botão de remoção.
      cy.get('button[type="button"]').click();
  
      // Verifique se o contato foi removido corretamente.
      cy.contains('Nome do Contato').should('not.exist');
    });
  });
  