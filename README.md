# LoopQATechEval

Technical evaluation for LoopQA

Note: Thought it would and should normally ignored by git, I've included the .env in the repo for portability, as it is used to store test project credentials. Actual secrets should never be committed to version control.

To run the project:
1.  install Playwright: `npm init playwright@latest`
2.  install dotenv: `npm install dotenv --save`
3.  in Playwright.config.ts, uncomment the following lines to allow pulling secrets from the .env:
```
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });
```
4. run `npx playwright test` for headless execution, or `npx playwright test --ui` for UI if desired.
5. view test results with `npx playwright show-report` if they aren't shown automatically.
