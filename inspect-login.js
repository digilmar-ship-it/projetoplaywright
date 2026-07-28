const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://automationpratice.com.br/login', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  const inputs = page.locator('input');
  console.log('count', await inputs.count());
  for (let i = 0; i < await inputs.count(); i++) {
    const el = inputs.nth(i);
    const attrs = await el.evaluate(node => ({
      tag: node.tagName,
      type: node.getAttribute('type'),
      id: node.getAttribute('id'),
      name: node.getAttribute('name'),
      placeholder: node.getAttribute('placeholder'),
      outerHTML: node.outerHTML.slice(0, 300)
    }));
    console.log(i, JSON.stringify(attrs));
  }
  await browser.close();
})();
