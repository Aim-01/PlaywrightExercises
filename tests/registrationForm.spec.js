
import { test, expect } from '@playwright/test';
import { RegistrationFormPage } from '../pages/RegistrationFormPage.js';

test.describe('Тестируем левую часть сайта - "Элементы форм" без кнопок (только поля ввода и чекбокс с радиобаттоном и дропдауном', () => {
  let formPage;

  test.beforeEach(async ({ page }) => {
    formPage = new RegistrationFormPage(page);
    await formPage.open();
  });

  test('Заполнение текстовых полей', async () => {  // ПЕРВЫЙ ТЕСТ
    await formPage.fillForm('Ivannnn', 'ivivivg@gmail.com', 'Password123123', 'Hello world.....');

    await expect(formPage.usernameField).toHaveValue('Ivannnn');
    await expect(formPage.emailField).toHaveValue('ivivivg@gmail.com');
    await expect(formPage.passwordField).toHaveValue('Password123123');
    await expect(formPage.commentField).toHaveValue('Hello world.....');
  });

  test('Выбор радиобаттона', async () => { // ВТОРОЙ ТЕСТ ПО ОЧЕРЕДИ
    await formPage.chooseNewsletterYes();
    await expect(formPage.newsletterYes).toBeChecked();

    await formPage.chooseNewsletterNo();
    await expect(formPage.newsletterNo).toBeChecked();
    await expect(formPage.newsletterYes).not.toBeChecked();
  });

 test("Выбор из выпадающего списка", async ({ page }) => {//ТРЕТИЙ ТЕСТ ПО ОЧЕРЕДИ


    const formPage = new RegistrationFormPage(page);

    // Выбираем страну
    await formPage.selectCountry('Россия');

    // Проверяем, что dropdown показывает выбранную страну
    await expect(formPage.countryDropdown).toHaveText(/Россия/);
  });

});