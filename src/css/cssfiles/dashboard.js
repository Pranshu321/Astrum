const ctx = document.getElementById('myChart').getContext("2d")

const gradientFill = ctx.createLinearGradient(0, 0, 0, 400)
gradientFill.addColorStop(0, "rgba(64, 186, 255, 0.17)")
gradientFill.addColorStop(1, "rgba(64, 186, 255, 0)")


const navHamburger = document.querySelector('.nav__hamburger');
const navMenuContainer = document.querySelector('.nav');
const navLogo = document.querySelector('.nav__logo');

navHamburger.addEventListener('click', () => {
  if (navHamburger.classList.contains('active')) {
    navHamburger.classList.remove('active');
    navMenuContainer.classList.remove('active')
    navMenuContainer.style.animation = "fadeOut .5s forwards";
    window.setTimeout(() => {
      navMenuContainer.classList.remove('nav__menu-hamburger');
    }, 500);
    window.setTimeout(() => {
      navLogo.classList.remove('active');
    }, 500);
  } else {
    navHamburger.classList.add('active');
    navMenuContainer.classList.add('active')
    navLogo.classList.add('active')
    navMenuContainer.style.animation = "fadeIn .5s forwards";
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    navMenuContainer.style = "";
    navHamburger.classList.remove('active');
    navMenuContainer.classList.remove('active')
  }
});