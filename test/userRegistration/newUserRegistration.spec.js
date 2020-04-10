import { expect } from "chai";
import Notification from "../_page/Notification";
import RegistrationPage from "./RegistrstionPage";
import { H1RegisterPage } from "./registrationData";
import MainPage from "../_page/MainPage";
import { H1LoginPage } from "../login/loginData";

describe("NEW USER REGISTRATION", () => {
  before("should open Register Page, verify H1 (header)", () => {
    RegistrationPage.open();
    MainPage.verifyElementText(MainPage.header, H1RegisterPage);
  });

  it("button `Submit` should be disabled by default", () => {
    expect(RegistrationPage.submitBtn.isEnabled()).false;
  });

  it("should fill out all fields, click Submit Btn", () => {
    RegistrationPage.registerNewUser();
  });

  it("verify page h1 (header)", () => {
    MainPage.verifyElementText(MainPage.header, H1LoginPage);
  });

  it("should get successful notification about user registration in the system", () => {
    Notification.successMsgDisplayed();
  });
});

describe("NEW USER REGISTRATION", () => {
  before("should open Register Page, verify H1 (header)", () => {
    RegistrationPage.open();
    MainPage.verifyElementText(MainPage.header, H1RegisterPage);
  });

  it("verify First Name(0) field with no input will be highlighted in red", () => {
    RegistrationPage.firstNameInput.click();
    RegistrationPage.verifyFieldHighlightInRed(0);
  });

  it("verify Last Name(1) field with no input will be highlighted in red", () => {
    RegistrationPage.lastNameInput.click();
    RegistrationPage.verifyFieldHighlightInRed(1);
  });

  it("verify Cell phone number(2) field with no input will be highlighted in red", () => {
    RegistrationPage.cellPhoneNumberInput.click();
    RegistrationPage.verifyFieldHighlightInRed(2);
  });

  it("verify Email(3) field with no input will be highlighted in red", () => {
    RegistrationPage.emailInput.click();
    RegistrationPage.verifyFieldHighlightInRed(3);
  });

  it("verify Password(4) field with no input will be highlighted in red", () => {
    RegistrationPage.passwordInput.click();
    RegistrationPage.verifyFieldHighlightInRed(4);
  });

  it("verify About(5) textarea with no input will be highlighted in red", () => {
    RegistrationPage.aboutInput.click();
    RegistrationPage.verifyFieldHighlightInRed(5);
  });

  it("verify My goals(6) textarea with no input will be highlighted in red", () => {
    RegistrationPage.myGoalsInput.click();
    RegistrationPage.verifyFieldHighlightInRed(6);
  });

  it("verify Country(7) drop down with no options will be highlighted in red", () => {
    RegistrationPage.countryOption.click();
    RegistrationPage.verifyFieldHighlightInRed(7);
  });

  it("verify English level(8) drop down with no options will be highlighted in red", () => {
    RegistrationPage.englishLevelOption.click();
    RegistrationPage.verifyFieldHighlightInRed(8);
  });
});
