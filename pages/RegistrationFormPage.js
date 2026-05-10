
export class RegistrationFormPage {
  constructor(page) {
    this.page = page;
    // Локаторы
    this.usernameField = page.locator('//input[@name="username"]');
    this.emailField = page.locator('#user-email-input');
    this.passwordField = page.locator('#user-password-input');
    this.commentField = page.locator('#user-comment-textarea');

    this.countryDropdown = page.locator('[data-testid="country-dropdown"]');
    this.termsCheckbox = page.locator('#terms-checkbox');

    this.newsletterYes = page.locator('#newsletter-yes');
    this.newsletterNo = page.locator('#newsletter-no');
  }

  async open() {
    await this.page.goto('https://lms.threadqa.ru/xpath-practice-hub/basics#practice-elements'); // сайт где все эти поля и кнопки
  }

  async fillForm(username, email, password, comment) {
    await this.usernameField.fill(username);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.commentField.fill(comment);
  }

async selectCountry(countryValue) {
  await this.countryDropdown.click();
  await this.countryDropdown.selectOption(countryValue);
  await this.page.getByText(countryValue);
}

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async chooseNewsletterYes() {
    await this.newsletterYes.check();
  }

  async chooseNewsletterNo() {
    await this.newsletterNo.check();
  }
}