'use strict';

class MobileMenu {
  constructor () {
    this.menuButton = document.querySelector('.menu-button');
    this.menu = document.querySelector('.hero__nav');

    this.reset();
    this.events();
  }

  events () {
    this.menuButton.addEventListener('click', (event) => {
      this.toggleMenu(event);
    });
  }

  reset () {
    this.menuButton.classList.remove('menu-button--close');
    this.menu.classList.add('hero__nav--hidden');
  }

  toggleMenu (event) {
    event.preventDefault();

    this.menuButton.classList.toggle('menu-button--close');
    this.menu.classList.toggle('hero__nav--hidden');
  }
}

export default MobileMenu;
