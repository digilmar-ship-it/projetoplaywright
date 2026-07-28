// @ts-check
import { test, expect } from '@playwright/test';

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
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('usuario@');
  await page.locator('#password').fill('senhaerrada');
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByText('E-mail inválido.')).toBeVisible
});

test('Login com senha inválida', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').fill('usuario@gmail.com')
  await page.locator('#password').fill('123')
  await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByText('Senha inválida.')).toBeVisible
});

test('Login sem dados', async ({ page }) => {
  await page.goto(baseUrl)
  await page.getByRole('link', { name: ' Login' }).click()
    await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByText('E-mail inválido.')).toBeVisible
  
});
