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

document.querySelectorAll('.fria-responsive-nav__link').forEach(link => {
  link.addEventListener('click', function (e) {
    const dropdownMenu = this.nextElementSibling;
    if (dropdownMenu && dropdownMenu.classList.contains('fria-responsive-nav__dropdown-menu')) {
      // Toggle the display property of the dropdown menu
      if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    }
  });
});

document.querySelectorAll('.fria-responsive-nav__expand').forEach(expandBtn => {
  expandBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Ngừng sự kiện mặc định của link
    const dropdownMenu = this.previousElementSibling; // Chọn phần tử menu dropdown trước đó
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });
});

const head = document.querySelectorAll('.fria-responsive-nav__menu__dropdown-menu__item__head');

head.forEach(item => {
  let found = false;
  item.addEventListener('click', () => {
    head.forEach(item => item.classList.remove('active'));

    found = true;
    item.classList.add('active');

    const icon = item.querySelector('.fria-responsive-nav__menu__dropdown-menu__item__head__link__icon');

    if (icon.textContent.trim() === '+') {
      icon.innerHTML = '-';
    } else if (icon.textContent.trim() === '-') {
      icon.innerHTML = '+';
    }

  });
});

