## Notes
All examples are created using public demo application and are intended for portfolio purposes only.

# Playwright TypeScript — E2E Test Suite

End-to-end UI automation for [SauceDemo](https://www.saucedemo.com) built with Playwright and TypeScript.

Covers the shopping cart and order placement flows across Chromium, Firefox, and WebKit with `@regression` and `@smoke` tag-based execution and automated Allure reporting published to GitHub Pages.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev) 1.60+ | Browser automation & assertions |
| TypeScript | Type-safe test code |
| Allure Playwright | Rich test reporting |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Allure report hosting |

---

## Project Structure

```
playwright-typescript/
├── e2e/                          # Test specs
│   ├── CartFunctionality.spec.ts # Cart add/remove/persist scenarios
│   └── OrderPlacement.spec.ts    # Checkout and order placement scenarios
├── fixtures/
│   ├── baseFixture.ts            # Page object fixtures (itemList, cartPage, etc.)
│   └── loginFixture.ts           # Auto-login fixture (runs before every test)
├── pages/                        # Page Object Models
│   ├── BasePage.ts               # Abstract base class for all post-login pages
│   ├── LoginPage.ts              # Standalone (pre-authentication page)
│   ├── ItemList.ts               # Extends BasePage
│   ├── CartPage.ts               # Extends BasePage
│   └── ItemDetailsPage.ts        # Extends BasePage
├── constants.ts                  # Shared credentials, page titles, checkout data
└── playwright.config.ts          # Browsers, reporters, base URL
```

---

## Test Suites
Test cases from the [Test case design and test documentation examples](https://github.com/pandoraizida/QA-portfolio/tree/main/test-cases) were used for automation

### Cart Functionality (`CartFunctionality.spec.ts`)

| Test ID | Title | Tags |
|---|---|---|
| CART-01 | Added item displays in the cart | `@regression` `@smoke` |
| CART-02 | Added multiple items display in the cart | `@regression` |
| CART-03 | Removed from cart item is not displayed in the cart | `@regression` `@smoke` |
| CART-04 | Added to the cart item can be removed from the Item list | `@regression` `@smoke` |
| CART-05 | Added to the cart item can be removed from the Item Details page | `@regression` |
| CART-07 | Cart persistence check | `@regression` |
| CART-10 | Refreshing Cart page does not affect cart state | `@regression` |

### Order Placement (`OrderPlacement.spec.ts`)

| Test ID | Title | Tags |
|---|---|---|
| ORDER-01 | Successful order placement with one item | `@regression` `@smoke` |
| ORDER-02 | Successful order placement with multiple items | `@regression` |
| ORDER-04 | Empty Checkout form shows an error message | `@regression` |
| ORDER-06 | Continue shopping returns to Item List | `@regression` `@smoke` |
| ORDER-07 | Canceling checkout process returns to the cart | `@regression` |
| ORDER-08 | Canceling order placement returns to Item List | `@regression` |


---

## Running Tests Locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm ci

# Install browser binaries
npx playwright install --with-deps

# Run all regression tests (default)
npm run test

# Run smoke tests only
npm run test:smoke

# Run a specific browser
npx playwright test --project=chromium

# Run a specific spec file
npx playwright test e2e/CartFunctionality.spec.ts

# Open interactive UI mode
npx playwright test --ui
```

**View the HTML report after a local run:**
```bash
npx playwright show-report
```

---

## Configuration

Key settings in `playwright.config.ts`:

| Setting | Value | Notes |
|---|---|---|
| `baseURL` | `https://www.saucedemo.com` | Target application |
| `workers` | 3 | Parallel workers |
| `fullyParallel` | true | Tests run concurrently within a suite |
| `retries` | 1 | One retry on failure |
| `browsers` | Chromium, Firefox, WebKit | Cross-browser coverage |
| `trace` | on-first-retry | Trace collected on retry |
| `screenshot` | only-on-failure | Screenshot on failure |
| `video` | retain-on-failure | Video retained on failure |

---

## CI/CD Pipeline

The pipeline is defined in `.github/workflows/playwright.yml` and runs automatically on every **push** or **pull request** that touches files under `auto-testing/playwright-typescript/`.

### Jobs

```
push / pull_request
       │
       ▼
  ┌─────────┐      ┌──────────────┐      ┌──────────────┐
  │  test   │─────▶│ allure-report│─────▶│ deploy-pages │
  └─────────┘      └──────────────┘      └──────────────┘
```

#### 1. `test` — Run tests

- Runs on `ubuntu-latest`
- Installs Node.js dependencies via `npm ci` (with npm cache)
- Installs Playwright browser binaries with system dependencies
- Executes `npx playwright test` (all `@regression` tests across 3 browsers)
- Uploads two artifacts (retained for 30 days):
  - `playwright-report` — Playwright's built-in HTML report
  - `allure-results` — Raw Allure result files for the next job

#### 2. `allure-report` — Generate Allure report

- Runs after `test` (always, even on test failure)
- Downloads the `allure-results` artifact
- Installs Allure CLI globally and generates the HTML report
- Uploads the finished report as the `allure-report` artifact and as a GitHub Pages artifact

#### 3. `deploy-pages` — Publish to GitHub Pages

- Runs after `allure-report` (always)
- Deploys the generated Allure report to GitHub Pages
- The live report URL is available in the job summary after each run

### Artifacts

| Artifact | Contents | Retention |
|---|---|---|
| `playwright-report` | Playwright HTML report with traces, screenshots, videos | 30 days |
| `allure-results` | Raw JSON result files | 30 days |
| `allure-report` | Generated Allure HTML report | 30 days |

---

## Architecture Notes

**Page Object Model** — all UI interactions are encapsulated in page classes under `pages/`. `CartPage` and `ItemDetailsPage` extend `ItemList` to inherit shared locators (cart icon, badge, item list).

**Fixtures** — `loginFixture.ts` extends `baseFixture.ts` and performs a full login before every test using `{auto: true}`, so test bodies stay focused on the feature under test. Both spec files import `test` from `loginFixture`.

**Test data** — credentials and page titles are defined in `constants.ts`. Checkout form data is generated at runtime with a `Date.now()` suffix to keep values unique per run.
