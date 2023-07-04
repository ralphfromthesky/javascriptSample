




const emailHeading = document.getElementById('emailHeading');
const phoneNumberHeading = document.getElementById('phoneNumberHeading');

phoneNumberHeading.style.display = 'block'; 

emailHeading.addEventListener('click', function () {
  phoneNumberHeading.classList.remove('active');
  this.classList.add('active');
  var emailInput = document.getElementById('emailInput')
  var phoneInput = document.getElementById('numberPhone');
   phoneInput.style.display = 'none';
  emailInput.style.display = 'block';

});

phoneNumberHeading.addEventListener('click', function () {
  emailHeading.classList.remove('active');
  this.classList.add('active');
  var emailInput = document.getElementById('emailInput')
  var phoneInput = document.getElementById('numberPhone');
   phoneInput.style.display = 'block';
   emailInput.style.display = 'none';
});

// this is show hide password
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  const inputPassword = document.getElementById('inputPassword');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    open.style.display = 'none'
    close.style.display = 'block';

  }
})

close.addEventListener('click', () => {
  const inputPassword = document.getElementById('inputPassword');
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  if (inputPassword.type === 'text') {
    inputPassword.type = 'password';
    close.style.display = 'none';
    open.style.display = 'block';
  }
})

const hide = document.getElementById('hide');
const show = document.getElementById('show');

hide.addEventListener('click', () => {
  const loginPassword = document.getElementById('loginPassword');
  const hide = document.getElementById('hide');
  const show = document.getElementById('show');
  if (loginPassword.type === 'password') {
    loginPassword.type = 'text';
    hide.style.display = 'none';
    show.style.display = 'block'
  }
})

show.addEventListener('click', () => {
  const loginPassword = document.getElementById('loginPassword');
  const hide = document.getElementById('hide');
  const show = document.getElementById('show');
  if (loginPassword.type === 'text') {
    loginPassword.type = 'password';
    hide.style.display = 'block';
    show.style.display = 'none';
  }
})


const clearInput = () => {
  const signinEmail = document.getElementById('signinEmail');
  const inputPassword = document.getElementById('inputPassword');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('loginPassword');
  signinEmail.value = '';
  inputPassword.value = '';
  emailInput.value = '';
  passwordInput.value = '';
}

const emailSignin = () => {
  const signinEmail = document.getElementById('signinEmail');
  const signinError = document.getElementById('signinError');
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (signinEmail.value.trim() === '') {
    signinError.textContent = 'Please sign in';
    return false;
  } else if (!emailRegex.test(signinEmail.value)) {
    signinError.textContent = 'Please enter valid mail'
    return false;
  } else {
    signinError.textContent = '';
  }
  return true
}

const signinPassword = () => {
  const inputPassword = document.getElementById('inputPassword');
  const siginPasswordError = document.getElementById('signinPasswordError');
  if (inputPassword.value === '') {
    siginPasswordError.textContent = 'Enter your Password';
    return false;
  } else if ((inputPassword.value.length >= 15) || (inputPassword.value.length <= 3)) {
    siginPasswordError.textContent = 'Please enter your valid password';
    return false;
  } else {
    siginPasswordError.textContent = '';
  }
  return true
}

const signinForm = document.getElementById('signinForm');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  emailSignin();
  signinPassword();

  const isValid = true;
  if (((emailSignin()) && (signinPassword() == isValid))) {
    console.log('success!')
    clearInput();
  } else {
    console.log('failed!')
  }
});


const registrationForm = document.getElementById('registrationForm');
const checkEmail = () => {
  let emailInput = document.getElementById('emailInput');
  let emailError = document.getElementById('emailError');
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    return false
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email';
    return false;
  } else {
    emailError.textContent = '';
  }
  return true
}

const checkPasswordInput = () => {
  let passwordInput = document.getElementById('loginPassword');
  let passwordError = document.getElementById('passwordError');

  if (passwordInput.value.trim() === '') {
    passwordError.textContent = 'Password is required';
    return false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password is minimun of 6 character';
    return false;
  } else if (passwordInput.value.length >= 15) {
    passwordError.textContent = 'Password maximum is 15 character'
    return false;
  }
  else {
    passwordError.textContent = '';
  }
  return true;
}

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmail();
  checkPasswordInput();
  const isValid = true;
  if (!checkEmail() || !checkPasswordInput()) {
    console.log('registration failed!');
    return false;
  } else if ((checkEmail()) && (checkPasswordInput()) == isValid) {
    console.log('registration success!');
    clearInput();
  }

});

