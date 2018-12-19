'use strict';

class MobileMenu {
  constructor () {
    this.menuButton = document.querySelector('.menu-button');
    this.menu = document.querySelector('.hero__nav');

    this.reset();
    this.events();
  }


  /**
   * Add event listeners
   */
  events () {
    this.menuButton.addEventListener('click', (event) => {
      this.toggleMenu(event);
    });
  }


  /**
   * Reset initial menu state
   */
  reset () {
    this.menuButton.classList.remove('menu-button--close');
    this.menu.classList.add('hero__nav--hidden');
  }


  /**
   * Toggle menu state
   * @param {MouseEvent} event
   */
  toggleMenu (event) {
    event.preventDefault();

    this.menuButton.classList.toggle('menu-button--close');
    this.menu.classList.toggle('hero__nav--hidden');
  }
}

export default MobileMenu;
