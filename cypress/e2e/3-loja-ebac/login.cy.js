/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

 it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('robson.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, robson.teste (não é robson.teste? Sair)')
 })

 it('Deve exibir uma mensagem de erro ao inserir usário inválido', () => {
    cy.get('#username').type('robson@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('exist')
 });

 it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('robson.teste@teste.com.br')
    cy.get('#password').type('teste@000')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail robson.teste@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error > li').should('exist')
 });

})
