import faker from 'faker';

const H1RegisterPage = 'User Register';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

// data to create new User:
const newUser = {
    firstName,
    lastName,
    password,
    phone: 12345434567,
    email,
    about: 'eat sleep code repeat',
    goals: 'eat sleep code repeat',
    englishLevel: 'Upper intermediate',
    country: 'Belarus',
};
const incorrectNamesArray = ['Vale ra', 'Валера', '11Valera', '!@#$%^&*()_+=`~/\,.?><|'] ;
const incorrectCellPhoneArray = ['1234567890', '1234567890123', '1 2223334455','!@#$%^&*()_+=`~/\,.?><| ', '1222333445t']
const incorrectEmailsArray = ['s nt@gmail.com', '@gmail.com', 'a@gmail', 'a@gmailcom', 'фывапп@gmail.com',
    '!@#$^&*()_+=`~/\\,.?><|@gmail.com',
    'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwert@gmail.com',
    'student@qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwer.com'];
const incorrectPasswordArray = ['1234', '1234567890123456789012345678901']
const emptyAboutInput = '';
const emptyMyGoalsInput = '';

export { H1RegisterPage, newUser, incorrectEmailsArray, incorrectNamesArray, incorrectCellPhoneArray,
    incorrectPasswordArray, emptyAboutInput, emptyMyGoalsInput, };
