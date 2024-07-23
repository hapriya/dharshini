// const form = document.querySelector('#form')
// const username = document.querySelector('#username');
// const email = document.querySelector('#email');
// const password = document.querySelector('#password');
// const cpassword = document.querySelector('#cpassword');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (!validateInputs()) {


//     };

// })
// function validateInputs() {
//     const usernameVal = username.value.trim();
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();
//     let success = true

//     if (usernameVal === '') {
//         success = false;
//         setError(username, 'Username is required')
//     }
//     else {
//         setSuccess(username)
//     }
//     if (emailVal === '') {
//         success = false;
//         setError(email, 'Email is required')
//     }
//     else if (!validateEmail(emailVal)) {
//         success = false;
//         setError(email, 'please enter a valid email')
//     }
//     else {
//         setSuccess(email)
//     }

//     if (passwordVal === '') {
//         success = false;
//         setError(password, 'password is required')
//     }
//     else if (passwordVal.length < 8) {
//         setError(password, 'password must be atleast 8 characters long')
//     }

//     else {
//         setSuccess(password)
//     }
//     if (cpasswordVal === '') {
//         setError(cpassword, 'confirm password is required');
//     }
//     else if (cpasswordVal !== passwordVal) {
//         setError(cpassword, 'password does not match')

//     }
//     else {
//         setSuccess(cpassword);
//     }
//     return success;
// }
// function setError(element, message) {
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = message;
//     // inputGroup.classlist.add('error')
//     // inputGroup.classlist.remove('success')
// }


// function setSuccess(element) {
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = "";
//     inputGroup.classlist.add('success')
//     inputGroup.classlist.remove('error')
// }


// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        console.log("Form submitted successfully!");
    }

});









function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
    } else if (!/^[A-Za-z]+$/.test(usernameVal)) {
        success = false;
        setError(username, 'Only lowercase are allowed');
    } else {
        setSuccess(username);
    }



    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }



    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }



    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is required');
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Passwords do not match');
    } else {
        setSuccess(cpassword);
    }

    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = "";
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};




const inputs = [username, email, password, cpassword];
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        console.log(e.this)
        if (input.value.trim() !== '') {
            setSuccess(input);
        } else {
            setError(input, `${input.previousElementSibling.innerText} is required`);
        }
    });

});
