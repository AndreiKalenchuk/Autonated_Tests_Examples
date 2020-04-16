const H1LoginPage = 'User Login';

const studentWithWrongEmail = {
    email: 'wrong@gmail.com',
    password: '98765ytrewq$',
    emptyEmail: '',
};

const studentWithWrongPassword = {
    email: 'studentofpasv@gmail.com',
    password: 'wrong',
    emptyPass: '',
};

const incorrectEmailsArray = ['s nt@gmail.com', '@gmail.com', 'a@gmail', 'a@gmailcom', 'фывапп@gmail.com',
    '!@#$^&*()_+=`~/\\,.?><|@gmail.com',
    'qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwert@gmail.com',
    'student@qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwer.com'];


export {H1LoginPage, studentWithWrongEmail, studentWithWrongPassword, incorrectEmailsArray,};