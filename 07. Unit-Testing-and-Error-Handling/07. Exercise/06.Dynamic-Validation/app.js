function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', () => {
        let regex = /[a-z]+@[a-z]+\.[a-z]+/;
        if(!regex.test(email.value)){
            email.className = 'error';
        }
        else{
            email.className = '';
        }
    });
}