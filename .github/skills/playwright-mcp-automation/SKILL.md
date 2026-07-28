---
name: playwright-mcp-automation
description: "Use this skill when you need to generate a Playwright test from a natural-language scenario, open the Playwright MCP workflow, create the test file, run it, inspect failures, fix the automation, and re-run until it passes."
---

# Playwright MCP Automation Skill

Use this skill whenever the user wants to create automated browser tests from a plain-language instruction, provide a target URL, and have the workflow generate, execute, and correct a Playwright test.

## Objective

Transform a request such as:
- "Crie um teste para fazer login no site X"
- "Teste o fluxo de cadastro no site Y"
- "Valide se a página inicial carrega corretamente"

into a working Playwright test that is written in the workspace, executed, and iteratively corrected until it passes.

## Required Inputs

Ask the user for:
1. The test goal in plain language.
2. The target URL.
3. Optional: the browser or environment to prioritize.

## Workflow

### 1. Understand the scenario
- Read the user's request carefully.
- Extract the main user journey, expected result, and target page.
- If the site requires authentication, identify the form fields and success indicators.

### 2. Create or update the Playwright test
- Create a new spec file under the tests folder when needed.
- Use Playwright test syntax with import from @playwright/test.
- Prefer explicit, robust selectors such as role-based locators when possible.
- Keep the test focused on the requested behavior.
- If the user asks for a specific scenario, implement only that scenario.

### 3. Use the Playwright MCP workflow
- Open the Playwright MCP context and inspect the page behavior.
- If needed, capture selectors, navigation steps, and assertions from the real website.
- Generate the automation based on the observed UI.
- If the site is dynamic, account for waits and visibility conditions.

### 4. Run the test
- Execute the generated test with Playwright.
- If the test fails, inspect the error output carefully.
- Identify whether the issue is caused by:
  - selector mismatch
  - timing / waiting issues
  - incorrect assertion
  - environmental issue such as CAPTCHA, login redirect, or network instability

### 5. Fix and rerun
- Update the test accordingly.
- Re-run the test.
- Repeat until the test passes or the remaining issue is clearly explained.

## Expected Output

At the end, provide:
- the generated test file path
- the final Playwright code
- the execution result: passed or failed
- if failed, the reason and the correction applied

## Quality Rules

- Write clean, readable Playwright code.
- Prefer deterministic waits and assertions.
- Avoid flaky selectors when possible.
- Keep the test aligned with the user's request.
- Do not silently claim success without running the test.

## Example usage

User says:
"Crie um teste para validar o login no site https://automationpratice.com.br"

The skill should:
1. Create or update a test file in the tests folder.
2. Generate the Playwright automation for the login flow.
3. Execute it.
4. If it fails, fix it and run again.
5. Report the final outcome.
