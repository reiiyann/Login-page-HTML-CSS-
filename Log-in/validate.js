const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const repeat_Password_input = document.getElementById('repeat-password-input')

form.addEventListener('submit', (e) => {
    
    let errors = []

    if(username_input){
        // if we have a username input then we are in the signup
        errors = getSignupFormErrors(username-input.value, password-input.value)
    }
    else{
        //if we don't have a username input then we are in the login
        errors = getLoginFormErrors(username-input.value, password-input.value)
    }
    if(errors.length > 0){
        // if there are any errrors
        e.preventDefault()
    }
})

function getSignupFormErrors(Username, Password){
    let errors = []

    if(Username === '' || Username == null){
        errors.push('Username is required') 
        username_input.parentElement.ClassList.add('incorrect')
    }
    if(Password === '' || Password == null){
        errors.push('Password is required')
        password_input.parentElement.ClassList.add('incorrect')
    }

    return errors;
}   

function getLoginFormErrors(Username, Password){
  let errors = []   

  if(Username === '' || Username == null){
    errors.push('Username is required')
    username_input.parentElement.ClassList.add('incorrect')
}
if(Password === '' || Password == null){
    errors.push('Password is required')
    password_input.parentElement.ClassList.add('incorrect')
}
if(Password !== repeatPassword){
    errors.push('Password does not match repeated password')
}
return errors;
}

const allInputs = [username-input, password-input, repeat-Password-input]

allInputs.forEach(Input => {
    Input.addEventListener('input',() => {
        if(Input.parentElement.classList.contains('incorect')){
            Input.parentElement.classList.remove(incorrect)
        }
    })
})