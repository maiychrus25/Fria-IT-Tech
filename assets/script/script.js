const navbarLink = document.querySelectorAll('.navbar__container__link__list__item');

navbarLink.forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (item.innerText != 'Contact' && item.innerText != 'About') {
      item.classList.add('show');

      let a = item.querySelector('a');
      a.setAttribute('aria-expanded', 'true');

      let dropdownMenu = item.querySelector('.dropdown-menu');
      dropdownMenu.classList.add('show');
    }
  });
});

navbarLink.forEach(item => {
  item.addEventListener('mouseleave', () => {
    if (item.innerText != 'Contact' && item.innerText != 'About') {
      item.classList.remove('show');

      let a = item.querySelector('a');
      a.setAttribute('aria-expanded', 'false');

      let dropdownMenu = item.querySelector('.dropdown-menu');
      dropdownMenu.classList.remove('show');
    }
  });
});

const navbar = document.querySelector('.navbar-area');

window.onscroll = (() => {
  if (window.scrollY > 150) {
    navbar.classList.add('is-sticky');
    navbar.classList.remove('navbar-two');
  } else {
    navbar.classList.remove('is-sticky');
    navbar.classList.add('navbar-two');
  }
});


const goTop = document.querySelector('.go-top');
goTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});