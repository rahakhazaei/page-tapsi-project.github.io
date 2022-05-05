const toggler = document.querySelector('.nav-toggler');
const navbar = document.querySelector('.nav');
toggler.addEventListener('click', (e)=> {
    navbar.classList.toggle('nav__expanded');
})
