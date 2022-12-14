const navSlide = () => {
    const threelinething = document.querySelector('.threelinething');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    threelinething.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.5}s`;
            }
        });
        //3line thing animation
        threelinething.classList.toggle('toggle');
    });
}
navSlide();