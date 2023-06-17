describe("Testes de Frontend", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("botão Salvar", () => {
      cy.get("input#nome").type("Harry Potter");
      cy.get("input#ISBN").type("12345");
      cy.get("input#opcao1").check(); 
      cy.get("input#opcao3").check();
      cy.get("button.btn-primary").click();
  
      cy.url().should("include", "Lista_de_Livros.html");
      cy.contains("Livro salvo com sucesso!");
    });
  
    it("botão Limpar'", () => {
      cy.get("input#nome").type("Harry Potter");
      cy.get("input#ISBN").type("12345");
      cy.get("button.btn-secondary").click();
  
      cy.get("input#nome").should("have.value", "");
      cy.get("input#ISBN").should("have.value", "");
    });
  
    it("botão Ver Todos", () => {
      cy.get("button.vertodos").click();
  
      cy.url().should("include", "Lista_de_Livros.html"); 
    });
  });
  
    it("botão Lista de Livros", () => {
      cy.get("a#btn-livros").click();
  
      cy.url().should("include", "Lista_de_Livros.html"); 
    });
  
    it("botão Lista de Usuários", () => {
      cy.get("a#btn-usuarios").click();
  
      cy.url().should("include", "Lista_de_Usuários.html"); 
    });
      
        it("'E-mail'", () => {
          const email = "marcello@gmail.com";
          cy.get("input[name='email']").type(email);
          cy.get("input[name='email']").should("have.value", email);
        });
      
        it("'Senha'", () => {
          const password = "123";
          cy.get("input[name='senha']").type(Senha);
          cy.get("input[name='senha']").should("have.value", Senha);
        });
      
        it("botão Quero me cadastrar", () => {
          cy.get("button.register").click();
          cy.url().should("include", "Lista_de_Usuários.html"); 
    });
      
        it("Teste do formulário de login completo", () => {
          const email = "marcello@gmail.com";
          const Senha = "123";
      
          cy.get("input[name='email']").type(email);
          cy.get("input[name='senha']").type(Senha);
          cy.get("input[type='submit']").click();
      
        });
      
  
  