// @ts-check
const { test } = require('@playwright/test');
const { abrirSite, logarComSucesso, verificarSeLogado, logarEmailInvalido, mensagemEmailInvalido, logarSenhaInvalida, mensagemSenhaInvalida, loginSemDados } = require('./loginPage');

test('Login com sucesso', async ({ page }) => {
    await abrirSite(page);
    await logarComSucesso(page);
    await verificarSeLogado(page);
    
});

test('Login com email inválido', async ({ page }) => {
    await abrirSite(page);
    await logarEmailInvalido(page);
    await mensagemEmailInvalido(page);
    
});

test('Login com senha inválida', async ({ page }) => {
    await abrirSite(page);
    await logarSenhaInvalida(page);
    await mensagemSenhaInvalida(page);
});

test('Login sem dados', async ({ page }) => {
    await abrirSite(page);
    await loginSemDados(page);
    await mensagemEmailInvalido(page);  
   
});
