function validate() {
    let username = document.getElementById('username');
    let usernameRegex = /([A-Za-z0-9]{3,20})/;
    console.log(usernameRegex);
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let passwordRegex = /([A-Za-z0-9_]{5,15})/;

    let email = document.getElementById('email');
    let emailRegex = /(^[\w]+@[\w]+\.[\w]+$)/;

    let companyNumber = document.getElementById('companyNumber');

    let isCompany = document.getElementById('company');
    isCompany.addEventListener('change', () => {
        let companyInfo = document.getElementById('companyInfo');
        if (companyInfo.style.display == 'block') {
            companyInfo.style.display = 'none';
        }
        else {
            companyInfo.style.display = 'block';
        }
    })



    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
        let isUsernameValid;
        let isPasswordValid;
        let isConfirmPasswordValid;
        let isEmailValid;
        let isCompanyValid;
        let arePasswordsEqual;

        if (isCompany.checked) {
            let isCompanyNumberValid = companyNumber.value >= 1000 && companyNumber.value <= 9999;
            if (!isCompanyNumberValid) {
                companyNumber.style = 'border-color: red;';
                isCompanyValid = false;
            }
            else {
                companyNumber.style = 'border: none;';
                isCompanyValid = true;
            }
        } else {
            isCompanyValid = true;
        }

        if (!usernameRegex.test(username.value)) {
            username.style = 'border-color: red;';
            isUsernameValid = false;
        } else {
            username.style = 'border: none;';
            isUsernameValid = true;
        }

        if (!passwordRegex.test(password.value)) {
            password.style = 'border-color: red;';
            isPasswordValid = false;
        } else {
            password.style = 'border: none;';
            isPasswordValid = true;
            if (password.value != confirmPassword.value) {
                confirmPassword.style = 'border-color: red;';
                arePasswordsEqual = false;
            } else {
                password.style = 'border: none;';
                confirmPassword.style = 'border: none;';
                arePasswordsEqual = true;
            }
        }

        if (!passwordRegex.test(confirmPassword.value)) {
            confirmPassword.style = 'border-color: red;';
            isConfirmPasswordValid = false;
        } else {
            confirmPassword.style = 'border: none;';
            isConfirmPasswordValid = true;
            if (password.value != confirmPassword.value) {
                password.style = 'border-color: red;';
                confirmPassword.style = 'border-color: red;';
                arePasswordsEqual = false;
            } else {
                password.style = 'border: none;';
                confirmPassword.style = 'border: none;';
                arePasswordsEqual = true;
            }
        }

        if (!emailRegex.test(email.value)) {
            email.style = 'border-color: red;';
            isEmailValid = false;
        } else {
            email.style = 'border: none;';
            isEmailValid = true;
        }

        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isCompanyValid && arePasswordsEqual) {
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }
    });
}
