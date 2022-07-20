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