import { expect } from '@playwright/test';

export class RegistrationFormPage {
  constructor(page) {
    this.page = page;
    // Локаторы определяем
    //Элементы форм
    this.usernameField = page.locator('//input[@name="username"]');
    this.emailField = page.locator('#user-email-input');
    this.passwordField = page.locator('#user-password-input');
    this.commentField = page.locator('#user-comment-textarea');

    this.countryDropdown = this.page.locator("[data-testid='country-dropdown']").first();

    this.termsCheckbox = page.locator('#terms-checkbox');

    this.newsletterYes = page.locator('#newsletter-yes');
    this.newsletterNo = page.locator('#newsletter-no');
    
    // Интерактивные Элементы
    //кнопки
    this.primaryButton = page.getByTestId('primary-button'); // осноная кнопка
    this.secondaryButton = page.locator('#secondary-action-btn');
    this.successButon = page.locator('#success-action-btn');
    this.dangerButton = page.locator('#danger-action-btn');

    // уведомление показать
    this.alrt = page.locator("[data-testid='show-alert-button']");
    this.alrtMessage = page.locator('Информационное сообщение');

    // модальное окно
  this.modalWindow = page.getByTestId('open-modal-button');
this.modalWinTitle = page.getByTestId('modal-title');

    // Toast уведомления
    this.succsessToast = page.locator("#notify-success-btn");
    this.errorToast = page.locator("#notify-error-btn");
    this.warningToast = page.locator("#notify-warning-btn");
    this.infoToast = page.locator("#notify-info-btn > svg");

    // ссылки
    this.externalLink = page.locator("#external-link");
    this.jacorLink = page.locator("#anchor-link");

  }

  async open() {
    await this.page.goto('https://lms.threadqa.ru/xpath-practice-hub/basics#practice-elements'); // сайт где все эти поля и кнопки
  }

 
// Проверка кнопок
async verifyPrimaryButtonVisible() {
  await this.primaryButton.waitFor({ state: 'visible' });
  await expect(this.primaryButton).toBeVisible();
}

async clickPrimaryButton() {
  await this.primaryButton.click();
}

async verifySecondaryButtonVisible() {
  await this.secondaryButton.waitFor({ state: 'visible' });
  await expect(this.secondaryButton).toBeVisible();
}

async clickSecondaryButton() {
  await this.secondaryButton.click();
}

async verifySuccessButtonVisible() {
  await this.successButon.waitFor({ state: 'visible' });
  await expect(this.successButon).toBeVisible();
}

async clickSuccessButton() {
  await this.successButon.click();
}

async verifyDangerButtonVisible() {
  await this.dangerButton.waitFor({ state: 'visible' });
  await expect(this.dangerButton).toBeVisible();
}

async clickDangerButton() {
  await this.dangerButton.click();
}

// Alert
async openAlert() {
  await this.alrt.click();
}

async verifyAlertVisible() {
  const alert = this.page.locator("#alert-message");
  await expect(alert).toHaveText("Информационное сообщениеЭто важное уведомление для пользователя.");
}


// Modal window
async openModal() {
  await this.modalWindow.waitFor({ state: 'visible' });
  await this.modalWindow.click();
}

async verifyModalVisible() {
  const modal = this.page.locator('[data-testid="modal-title"]');

  await modal.waitFor({ state: 'visible' });

  await expect(this.modalWinTitle).toHaveText("Модальное окно");
}



// Toast notifications
async clickSuccessToast() {
  await this.succsessToast.click();
}

async verifySuccessToastVisible() {
  await expect(this.page.locator('.toast-success')).toBeVisible();
}

async clickErrorToast() {
  await this.errorToast.click();
}

async verifyErrorToastVisible() {
  await expect(this.page.locator('.toast-error')).toBeVisible();
}

async clickWarningToast() {
  await this.warningToast.click();
}

async verifyWarningToastVisible() {
  await expect(this.page.locator('.toast-warning')).toBeVisible();
}

async clickInfoToast() {
  await this.infoToast.click();
}

async verifyInfoToastVisible() {
  await expect(this.page.locator('.toast-info')).toBeVisible();
}


// Links
async verifyExternalLink() {
  await expect(this.externalLink).toHaveAttribute('href', /http/);
}

async verifyAnchorLink() {
  await expect(this.jacorLink).toHaveAttribute('href', /#/);
}
  
}