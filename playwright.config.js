import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

 // Страница входа (https://lms.threadqa.ru/xpath-practice-hub/basics#practice-elements)
export class RegistrationFormPage { // переименовать класс в форму реги
    constructor(page) {

        this.page = page;
        this.usernameField = page.locator('//input[@name="username"]'); // локаторы для полей ввода
        this.emailField = page.locator("#user-email-input");
        this.passwordField = page.locator("#user-password-input");
        this.commentField = page.locator("#user-comment-textarea");

        this.countryDropdown = page.locator("#country-select");

        this.termsCheckbox = page.locator("#terms-checkbox");
        this.newsletterRadioBtn = page.locator("#newsletter-yes");
        this.newsNoRadioBtn = page.locator("#newsletter-no");

    }
    async open(){
        await this.page.goto('https://lms.threadqa.ru/xpath-practice-hub/basics#practice-elements'); // вход на страницу тренажёра
    }

    async login(username, email, password, comment) { // вводим логин-пароль емэйл и коммент
        await this.usernameField.fill(username);
        await this.pemailField.fill(email);
        await this.passwordField.fill(password);
        await this.commentField.fill(comment);

        await this.countryDropdown.click();
       await this.countryDropdown.selectOption();
        await this.termsCheckbox.check();
        await this.newsletterRadioBtn.check();
     
    }
}

