---
mode: agent
description: "Generate, run, and fix a Playwright test from a natural-language scenario and URL."
---

Use the Playwright MCP automation skill to build a browser test for the user's request.

Workflow:
1. Ask for the test goal in plain language if it is not clear.
2. Ask for the target URL if it was not provided.
3. Create or update a Playwright spec file inside the tests folder.
4. Generate the automation code with Playwright.
5. Execute the test.
6. If it fails, inspect the cause, fix the test, and run it again.
7. Report the final result clearly, including the file created and whether it passed.
