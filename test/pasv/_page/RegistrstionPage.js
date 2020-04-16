import AppPage from './AppPAge';
import { newUser } from '../_data/registrationData';
import MainPage from './MainPage';

class RegistrationPage extends AppPage {
    get firstNameInput() {
        return $('[name="firstName"]');
    }

    get lastNameInput() {
        return $('[name="lastName"]');
    }

    get cellPhoneNumberInput() {
        return $('[name="phone"]');
    }

    get emailInput() {
        return $('[name="email"]');
    }

    get passwordInput() {
        return $('[name="password"]');
    }

    get aboutInput() {
        return $('[name="about"]');
    }

    get myGoalsInput() {
        return $('[name="goals"]');
    }

    get countryOption() {
        return $('[name="countryName"]');
    }

    get englishLevelOption() {
        return $('[name="englishLevel"]');
    }

    get submitBtn() {
        return $('[type="submit"]');
    }

    open() {
        super.open('https://stage.pasv.us/user/register');
    }
    get requiredFieldsList(){
        return $$('.invalid-feedback');
    }
    get invalidInputMsg(){
        return $('//div[@class="invalid-feedback"]')
    }

    get warningRedFrameList(){
        return $$('.is-invalid');
    }

    // method for create new user
    registerNewUser() {
        this.firstNameInput.setValue(newUser.firstName);
        this.lastNameInput.setValue(newUser.lastName);
        this.cellPhoneNumberInput.setValue(newUser.phone);
        this.emailInput.setValue(newUser.email);
        this.passwordInput.setValue(newUser.password);
        this.aboutInput.setValue(newUser.about);
        this.myGoalsInput.setValue(newUser.goals);
        this.countryOption.selectByVisibleText(newUser.country);
        this.englishLevelOption.selectByVisibleText(newUser.englishLevel);
        MainPage.smartClick(this.submitBtn);
    }

    verifyFieldHighlightInRed(index){
        MainPage.header.click();
        browser.waitUntil(() =>
            this.warningRedFrameList[index].isDisplayed() === true,
            5000, `Field index[${index}] didn't highlight in red`);
    }

}
export default new RegistrationPage();
