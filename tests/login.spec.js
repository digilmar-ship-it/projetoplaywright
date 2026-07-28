// @ts-check
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const baseUrl = 'https://automationpratice.com.br';

test('Login com sucesso', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('digilmar@gmail.com')
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible()
  await expect(page.getByText('Olá, digilmar@gmail.com')).toBeVisible()
  await page.getByRole('button', { name: 'OK' }).click()
});

test('Login com email inválido', async ({ page }) => {
  await page.goto(baseUrl)
  // Acessar página principal
  await page.getByRole('link', { name: ' Login' }).click();
  //Acessar botão de login
  await page.locator('#user').fill('usuario@');
  await page.locator('#password').fill('senhaerrada');
  //Preencher usuário e senha
  await page.getByRole('link', { name: 'Login' }).click();
  //Clicar botão login
  await expect(page.getByText('E-mail inválido.')).toBeVisible
  //Validar mensagem de E-mail inválido
});

test('Login com senha inválida', async ({ page }) => {
  await page.goto(baseUrl)
  // Acessar página principal
  await page.getByRole('link', { name: ' Login' }).click()
  //Acessar botão de login
  await page.locator('#user').fill('usuario@gmail.com')
  await page.locator('#password').fill('123')
  //Preencher usuário e senha
  await page.getByRole('button', { name: 'login' }).click()
  //Clicar botão login
  await expect(page.getByText('Senha inválida.')).toBeVisible
  //Validar mensagem de senha inválida
});

test('Login sem dados', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByRole('link', { name: ' Login' }).click()
  await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByText('E-mail inválido.')).toBeVisible

});
