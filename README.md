# playwright-test

Minimal Playwright setup for testing a website.

## Setup

1. Install dependencies:

	```bash
	npm install
	npx playwright install --with-deps chromium
	```

2. Point the tests at the site you want to verify:

	```bash
	export BASE_URL="https://your-site.example"
	```

## Run tests

Run the smoke test in headless mode:

```bash
npm run test:e2e
```

Run in headed mode:

```bash
npm run test:e2e:headed
```

Open Playwright UI mode:

```bash
npm run test:e2e:ui
```

## What is included

- A Playwright config in `playwright.config.js`
- A sample smoke test in `tests/smoke.spec.js`
- `BASE_URL` support so you can target any website without editing the config

## Next step

Replace the sample smoke test with assertions that match your site, for example checking the page title, navigation, forms, or login flow.