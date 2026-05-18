import { test, expect } from '@playwright/test';
import { RegistrationFormPage } from '../pages/RegistrationFormPage.js';

test.describe('Интерактивные элементы', () => {

  test.beforeEach(async ({ page }) => {
    const form = new RegistrationFormPage(page);
    await form.open();

    // переключаемся на правую панель
    await page.getByText('Интерактивные элементы').click();

    page.form = form;
  });

  // test('Проверка кнопок', async ({ page }) => {  
  //   const form = page.form;

  //   await expect(form.primaryButton).toBeVisible();
  //   await expect(form.secondaryButton).toBeVisible();
  //   await expect(form.successButon).toBeVisible();
  //   await expect(form.dangerButton).toBeVisible();

  //   await form.primaryButton.click();
  //   await form.secondaryButton.click();
  //   await form.successButon.click();
  //   await form.dangerButton.click();
  // });

  // test('Показ уведомления (alert)', async ({ page }) => { 
  //   const form = page.form;

  //   await form.openAlert();
  //   await form.verifyAlertVisible();
  // });

// test('Открытие модального окна', async ({ page }) => {  
//   const form = new RegistrationFormPage(page);

//   await form.open();
//   await page.getByText('Интерактивные элементы').click();

//   await form.openModal();
//   await form.verifyModalVisible();
// });

  test('Toast уведомления', async ({ page }) => {
    const form = page.form;

    await form.clickSuccessToast();
    await form.verifySuccessToastVisible();

    await form.clickErrorToast();
    await form.verifyErrorToastVisible();

    await form.clickWarningToast();
    await form.verifyWarningToastVisible();

    await form.clickInfoToast();
    await form.verifyInfoToastVisible();
  });

  // test('Проверка ссылок', async ({ page }) => {
  //   const form = page.form;

  //   await form.verifyExternalLink();
  //   await form.verifyAnchorLink();
  // });

});