// @ts-check
import { test, expect } from '@playwright/test';

test('Teste para validar o título da tela', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Teste para abrir o link get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

  // Teste Login Qazando.
  test('Teste de login com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br')
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').fill('digilmar@gmail.com')
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible()
  await expect(page.getByText('Olá, digilmar@gmail.com')).toBeVisible()
  await page.getByRole('button', { name: 'OK' }).click()
});