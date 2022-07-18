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
