const { expect } = require('@playwright/test');
const baseUrl = 'https://automationpratice.com.br/login';

const abrirSite = async (page) => {
    await page.goto(baseUrl)
}

const logarComSucesso = async (page) => {
    await page.locator('#user').fill('digilmar@gmail.com')
    await page.locator('#password').fill('123456')
    await page.getByRole('button', { name: 'login' }).click();
}

const verificarSeLogado = async (page) => {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible()
}

const logarEmailInvalido = async (page) => {
    await page.locator('#user').fill('usuario@');
    await page.locator('#password').fill('123456');
    await page.getByRole('link', { name: 'Login' }).click();
}

const mensagemEmailInvalido = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible
}

const logarSenhaInvalida = async (page) => {
    await page.locator('#user').fill('digilmar@gmail.com')
    await page.locator('#password').fill('123');
    await page.getByRole('link', { name: 'Login' }).click();
}

const mensagemSenhaInvalida = async (page) => {
    await expect(page.getByText('Senha inválida.')).toBeVisible
}

const loginSemDados = async (page) => {
    await page.getByRole('button', { name: 'login' }).click()
}


module.exports = {
    abrirSite,
    logarComSucesso,
    verificarSeLogado,
    logarEmailInvalido,
    mensagemEmailInvalido,
    logarSenhaInvalida,
    mensagemSenhaInvalida,
    loginSemDados

}
