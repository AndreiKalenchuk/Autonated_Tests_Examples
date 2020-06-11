import { expect } from "chai";
const homeUrl = "https://app.pasv.us/user/login";
describe("Login page", () => {
  before(() => {
    browser.url(homeUrl);
  });
  const passWord = "Porol66766676";
  const email = "andrey.kalenchyk@gmail.com";

  it("verify page title", () => {
    expect(browser.getTitle()).eq("Progress Monitor");
  });

  it("should have h1's text 'User Login'", () => {
    const header = $("//h1");
    // Css selector  ==>  const header = $('h1');
    // header.getText()=> 'User Login';
    const actual = "User Login";
    const expected = header.getText();
    expect(expected).equal(actual);
  });

  /*   it('should verify login Btn is Disabled', () => {
    const email = $('//input[@name="email"]');
    const pass = $('//input[@name="password"]');
    const loginBtn = $('//button[@type="submit"]');
    email.setValue('');
    pass.setValue('');
    expect(loginBtn.isEnabled(),'Login Btn is Enabled').eq(false);
  });

  it("should accept Email (correct) in the field", () => {
    const emailInput = $('//input[@name="email"]');
    emailInput.setValue("ffffoioi@gmail.com");
    browser.keys("Tab");
    const attribute = emailInput.getAttribute("class");
    expect(attribute).eq("form-control  is-valid");
  });

  it("verify email in footer", () => {
    const el = $('//small[@qa="app-slogan"]/a');
    const expectedEmail = "support@pasv.us";
    //    const getEmailText = el.getText();
    const getEmail = el.getAttribute("href");
    expect(getEmail).eq(`mailto:${expectedEmail}`);
  });

  it("login button is disable with correct email, password is empty", () => {
    const emailInput = $('//input[@name="email"]');
    const pass = $('//input[@name="password"]');
    const loginBtn = $('//button[@type="submit"]');
    emailInput.setValue("ffffoioi@gmail.com");
    pass.setValue("");
    browser.keys("Tab");
    expect(!loginBtn.isEnabled(), "Login Btn is Enabled").eq(true);
  });*/

  it("should has Password field on the login page", () => {});

  it("should accept password (correct) in the field", () => {});

  it("should login with correct email and password verify redirect to profile page", () => {
    const emailInput = $('//input[@name="email"]');
    const passInput = $('//input[@name="password"]');
    const loginBtn = $('//button[@type="submit"]');
    const notificationMsg = $(
      '//*[@class="notification-title"][text()="Auth success"]'
    );
    const dropDownName = $('//li[@class="dropdown nav-item"]/a');
    emailInput.setValue(email);
    passInput.setValue(passWord);
    loginBtn.click();
    const header = $("//h1");
    notificationMsg.waitForDisplayed();
    //    expect(notificationMsg.getText(), 'Wrong Title', 5000).eq('Auth success')
    expect(header.getText()).eq("");
    expect(dropDownName.getText()).eq("");
  });

  it("should select all dropDown options", () => {
    browser.url("https://app.pasv.us/diary/create");
    const dropDown = $('//select[@name="morale"]');
    dropDown.selectByAttribute("value", "10");
    dropDown.selectByIndex(2);
    dropDown.selectByVisibleText("8");
    const array = [
      "",
      "10 – I am pleased with everything!",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1",
      "0 – I give up"
    ];

    for (let i = 0; i < array.length; i++) {
      dropDown.selectByVisibleText(array[i]);
      browser.pause(500);
    }
    for (let i = 0; i <= 10; i++) {
      dropDown.selectByIndex(i);
      browser.pause(500);
    }
  });

  it("click on check box", () => {
    let i = 0;
    while (i <= 11) {
      $(`//input[@id="input-${i}"]`).click();
      $(`//input[@id="input-${i}"]`).isSelected();
      browser.pause(500);
      i++;
    }
    // same by using for loop

    for (let i = 0; i <= 11; i++) {
      $(`//input[@id="input-${i}"]`).click();
      $(`//input[@id="input-${i}"]`).isSelected();
      browser.pause(500);
    }
  });
});
