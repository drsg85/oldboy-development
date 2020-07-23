'use strict';

class MobileMenu {
  constructor () {
    this.menuButton = document.querySelector('.menu-button');
    this.menu = document.querySelector('.hero__nav');
    this.menuLinks = document.querySelectorAll('.main-nav__link');

    this.reset();
    this.events();
  }


  /**
   * Add event listeners
   */
  events () {
    this.menuButton.addEventListener('click', () => {
      this.toggleMenu();
      this.removeHandlerClass();
      document.documentElement.style.overflow = "unset";
    });

    for (let i = 0; i < this.menuLinks.length; i++) {
      this.menuLinks[i].addEventListener('click', () => {
        this.toggleMenu();
      });
    }

    window.addEventListener('keydown', () => this.closeHandlerByEsc(event));
    this.menuButton.addEventListener('click', () => this.closeHandlerByClickOnPage(event));
  }


  /**
   * Reset initial menu state
   */
  reset () {
    this.menuButton.classList.remove('menu-button--close');
    this.menu.classList.add('hero__nav--hidden');
    if(document.querySelector('.hero__nav-wrapper')) {
      const targetEl = document.querySelector('.hero__nav-wrapper');
      targetEl.remove();
    }
  }

closeHandlerByEsc(evt) {
  if(evt.keyCode == 27 && !this.menu.classList.contains('hero__nav--hidden')) {
    this.menuButton.classList.remove('menu-button--close');
    this.menu.classList.add('hero__nav--hidden');
    this.removeHandlerClass();
  }
}

closeMobileMenuByClick() {
  this.menuButton.classList.remove('menu-button--close');
  this.menu.classList.add('hero__nav--hidden');
  this.removeHandlerClass();
}

closeHandlerByClickOnPage(evt) {
  if(evt.target.classList.contains('menu-button--close')) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('hero__nav-wrapper');
    document.body.appendChild(wrapper);
    wrapper.addEventListener('click', () => this.closeMobileMenuByClick());
    document.documentElement.style.overflow = "hidden";
  }
}
  /**
   * Toggle menu state
   */
  toggleMenu () {
    this.menuButton.classList.toggle('menu-button--close');
    this.menu.classList.toggle('hero__nav--hidden');
    if(!this.menuButton.classList.contains('menu-button--close')) {
      this.removeHandlerClass();
    }
  }

  removeHandlerClass() {
    if(document.querySelector('.hero__nav-wrapper')) {
      const targetEl = document.querySelector('.hero__nav-wrapper');
      targetEl.remove();
    }
  }
}

export default MobileMenu;
