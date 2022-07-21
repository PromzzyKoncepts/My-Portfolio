const ham = document.querySelector('.menubtn');
const navbar = document.querySelector('.nav-menu');
const x = document.querySelector('.slide-in');

x.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
ham.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  navbar.classList.remove('active');
}));

const reset = () => {
  if (window.innerWidth > 768) {
    navbar.style.display = 'none';
  }
};
window.addEventListener('resize', reset);

// FORM VALIDATION

const email = document.getElementById('email');
const form = document.getElementById('formid');
const errorMessage = document.getElementById('error');
errorMessage.style.float = 'left';
errorMessage.style.color = 'red';
errorMessage.style.fontFamily = 'Inter, sans-serif';
const userName = document.querySelector('name');
function valid(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

const showError = (e) => {
  if (!valid(email.value)) {
    e.preventDefault();
    errorMessage.textContent = 'Your Email must be lowercase';
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 3000);
  }
  email.value = '';
  userName.value = '';
};
form.addEventListener('submit', showError);

// This is for local storage
const userContent = {
  fullName: '',
  lastName: '',
  email: '',
  textArea: '',
};

form.addEventListener('toString', () => {
  userContent.fullName = document.querySelector('#fullname').value;
  userContent.lastName = document.querySelector('#full-name').value;
  userContent.email = document.querySelector('#email').value;
  userContent.textArea = document.querySelector('#text-area').value;

  localStorage.setItem('stored', JSON.stringify(userContent));
});
const storedObject = JSON.parse(localStorage.getItem('stored'));
document.querySelector('#email').value = storedObject.email;
document.querySelector('#fullname').value = storedObject.fullName;
document.querySelector('#full-name').value = storedObject.lastName;
document.querySelector('#text-area').value = storedObject.textArea;
