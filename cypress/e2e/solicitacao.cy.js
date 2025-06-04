Cypress.Commands.add('createCurso', () => {
    cy.exec('python create_curso.py', { failOnNonZeroExit: false });
});

Cypress.Commands.add('createSolicitacao', () => {
    cy.exec('python create_solicitacao.py', { failOnNonZeroExit: false });
});

Cypress.Commands.add('deleteAllCurso', () => {
    cy.exec('python delete_curso.py', { failOnNonZeroExit: false });
});

Cypress.Commands.add('deleteAllUsers', () => {
    cy.exec('python delete_user.py', { failOnNonZeroExit: false });
});

Cypress.Commands.add('deleteAllInformacoes', () => {
    cy.exec('python delete_informacoes.py', { failOnNonZeroExit: false });
});

Cypress.Commands.add('deleteAllSolicitacao', () => {
    cy.exec('python delete_solicitacao.py', { failOnNonZeroExit: false });
});
Cypress.Commands.add('createUser', (username, email, password, confirm_password, first_name, last_name, cpf, telefone, data_nascimento, genero, endereco, numero, bairro, estado, cidade, escolaridade, escola, turno, curso ) => {
    cy.visit('/auth/register/');
    cy.get('#username').type(username);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirm_password').type(confirm_password);
    cy.get('.next-btn > .bx').click();
    cy.get('#first_name').type(first_name);
    cy.get('#last_name').type(last_name);
    cy.get('#CPF').type(cpf);
    cy.get('#telefone').type(telefone);
    cy.get('#data_nascimento').type(data_nascimento);
    cy.get('#genero').select(genero);
    cy.get('.next-btn > .bx').click();
    cy.get('#CEP').type('54521150');
    cy.get('#endereco').type(endereco);
    cy.get('#numero').type(numero);
    cy.get('#bairro').type(bairro);
    cy.get('#estado').type(estado);
    cy.get('#cidade').type(cidade);
    cy.get('.next-btn > .bx').click();
    cy.get('#escolaridade').select(escolaridade);
    cy.get('#escola').type(escola);
    cy.get('#turno').select(turno);
    cy.get('#curso').select(curso);
    cy.get('.form-step.active > .btn-2').click();
});

Cypress.Commands.add('createSuperUser', (username, email, password, confirm_password, pergunta, senha_professor) => {
    cy.visit('/auth/register/');
    cy.get('#username').type(username);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirm_password').type(confirm_password);
    cy.get('#pergunta').select(pergunta);
    cy.get('#cod_seguranca').type(senha_professor)
    cy.get('#submit-professor').click();
});
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/auth/login/');
    cy.get('#username').type(username)
    cy.get('#password').type(password);
    cy.get('.btn-2').click();
});

describe('teste de cadastro', () => {
    beforeEach(() => {
        cy.deleteAllSolicitacao();
        cy.deleteAllUsers();
        cy.deleteAllInformacoes();
        cy.deleteAllCurso()
        cy.createCurso();

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignora erros de elementos não encontrados
            if (err.message.includes('document.getElementById') || 
                err.message.includes('null') ||
                err.message.includes('undefined')) {
            return false
            }
            return true
        })
    });

    it('criar solicitacao', () => {
        cy.visit('/auth/register/');
        cy.get('#username').type('usuario teste');
        cy.get('#email').type('teste@gmail.com');
        cy.get('#password').type('123');
        cy.get('#confirm_password').type('123');
        cy.get('#pergunta').select('Aluno');
        cy.get('.next-btn > .bx').click();
        cy.get('#first_name').type('teste');
        cy.get('#last_name').type('teste2');
        cy.get('#CPF').type('11111111111');
        cy.get('#telefone').type('11941500444');
        cy.get('#data_nascimento').type('2005-11-05');
        cy.get('#genero').select('Masculino');
        cy.get('.next-btn > .bx').click();
        cy.get('#CEP').type('54521150');
        cy.get('#endereco').type('rua do teste');
        cy.get('#numero').type('120');
        cy.get('#bairro').type('bairro do teste');
        cy.get('#estado').type('estado do teste');
        cy.get('#estado').type('estado do teste');
        cy.get('#cidade').type('cidade do teste');
        cy.get('.next-btn > .bx').click();
        cy.get('#escolaridade').select('Fundamental Completo');
        cy.get('#escola').type('escola teste');
        cy.get('#turno').select('Tarde');
        cy.get('#curso').select('Iniciação a Programação');
        cy.get('.form-step.active > .btn-2').click();
        cy.get('#username').type('usuario teste');
        cy.get('#password').type('123');
        cy.get('.btn-2').click();
        cy.get('[href="/portal_aluno/"]').click();
        cy.get('[href="/portal_aluno/"]').click();
        cy.get(':nth-child(4) > a').click();
        cy.get('#btnNovaSolicitacao').click();
        cy.get('#formCriar > [type="text"]').type('solicitação teste');
        cy.get('#formCriar > textarea').type('teste da mensagem');
        cy.get('#formCriar > select').select('Problema');
        cy.get('#formCriar > .btn').click();
    });
     it('editar solicitao', () => {
       cy.visit('/auth/register/');
        cy.get('#username').type('usuario teste');
        cy.get('#email').type('teste@gmail.com');
        cy.get('#password').type('123');
        cy.get('#confirm_password').type('123');
        cy.get('#pergunta').select('Aluno');
        cy.get('.next-btn > .bx').click();
        cy.get('#first_name').type('teste');
        cy.get('#last_name').type('teste2');
        cy.get('#CPF').type('11111111111');
        cy.get('#telefone').type('11941500444');
        cy.get('#data_nascimento').type('2005-11-05');
        cy.get('#genero').select('Masculino');
        cy.get('.next-btn > .bx').click();
        cy.get('#CEP').type('54521150');
        cy.get('#endereco').type('rua do teste');
        cy.get('#numero').type('120');
        cy.get('#bairro').type('bairro do teste');
        cy.get('#estado').type('estado do teste');
        cy.get('#estado').type('estado do teste');
        cy.get('#cidade').type('cidade do teste');
        cy.get('.next-btn > .bx').click();
        cy.get('#escolaridade').select('Fundamental Completo');
        cy.get('#escola').type('escola teste');
        cy.get('#turno').select('Tarde');
        cy.get('#curso').select('Iniciação a Programação');
        cy.get('.form-step.active > .btn-2').click();
        cy.get('#username').type('usuario teste');
        cy.get('#password').type('123');
        cy.get('.btn-2').click();
        cy.get('[href="/portal_aluno/"]').click();
        cy.get(':nth-child(4) > a').click();
        cy.get('#btnNovaSolicitacao').click();
        cy.get('#formCriar > [type="text"]').type('solicitação teste');
        cy.get('#formCriar > textarea').type('teste da mensagem');
        cy.get('#formCriar > select').select('Problema');
        cy.get('#formCriar > .btn').click();
        cy.get('.btn-editar > .bx').click();
        cy.get('#editarTitulo').clear().type('editando soicitação');
        cy.get('#editarMensagem').clear().type('editando a mensagem');
        cy.get('#editarTipo').select('Outro');
        cy.get('#formEditar > .btn').click();

    });
    it('excluir solicitacao', () => {
        cy.visit('/auth/register/');
        cy.get('#username').type('usuario teste');
        cy.get('#email').type('teste@gmail.com');
        cy.get('#password').type('123');
        cy.get('#confirm_password').type('123');
        cy.get('#pergunta').select('Aluno');
        cy.get('.next-btn > .bx').click();
        cy.get('#first_name').type('teste');
        cy.get('#last_name').type('teste2');
        cy.get('#CPF').type('11111111111');
        cy.get('#telefone').type('11941500444');
        cy.get('#data_nascimento').type('2005-11-05');
        cy.get('#genero').select('Masculino');
        cy.get('.next-btn > .bx').click();
        cy.get('#CEP').type('54521150');
        cy.get('#endereco').type('rua do teste');
        cy.get('#numero').type('120');
        cy.get('#bairro').type('bairro do teste');
        cy.get('#estado').type('estado do teste');
        cy.get('#estado').type('estado do teste');
        cy.get('#cidade').type('cidade do teste');
        cy.get('.next-btn > .bx').click();
        cy.get('#escolaridade').select('Fundamental Completo');
        cy.get('#escola').type('escola teste');
        cy.get('#turno').select('Tarde');
        cy.get('#curso').select('Iniciação a Programação');
        cy.get('.form-step.active > .btn-2').click();
        cy.get('#username').type('usuario teste');
        cy.get('#password').type('123');
        cy.get('.btn-2').click();
        cy.get('[href="/portal_aluno/"]').click();
        cy.get(':nth-child(4) > a').click();
        cy.get('#btnNovaSolicitacao').click();
        cy.get('#formCriar > [type="text"]').type('solicitação teste');
        cy.get('#formCriar > textarea').type('teste da mensagem');
        cy.get('#formCriar > select').select('Problema');
        cy.get('#formCriar > .btn').click();
        cy.get('.btn-deletar > .bx').click();
        cy.get('#formDeletar > .btn').click();

    });
    it('responder solicitacao', () => {
        cy.createSuperUser('usuarioteste', 'usuarioteste@gmail.com', '123', '123', 'Gestor','instituto-solidare');
        cy.createSolicitacao();
        cy.login('usuarioteste', '123');
        cy.get('[href="/portal_professor/"]').click();
        cy.get(':nth-child(5) > a').click();
        cy.get('.btn-capturar').click();
        cy.get('.btn-editar > .bx').click();
        cy.get('#responderStatus').select('Resolvido');
        cy.get('#responderSolucao').type('Solicitacao teste foi resolvida');
        cy.get('.btn').click();

    });

     afterEach(() => {
        cy.deleteAllCurso();
        cy.deleteAllUsers();
        cy.deleteAllInformacoes();
        cy.deleteAllSolicitacao();
    });   
});