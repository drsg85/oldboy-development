'use strict';

class MobileMenu {
  constructor () {
    this.menuButton = document.querySelector('.menu-button');
    this.menu = document.querySelector('.hero__nav');
    this.menuLinks = document.querySelectorAll('.main-nav__link');

    this.reset();
    this.events();
    this.disableScroll();
    this.disableScrollIos();
  }


  /**
   * Add event listeners
   */
  events () {
    const debounced = this.debounceOnScroll(this.checkPositionPopup, 400);
        window.addEventListener('scroll', debounced);

    this.menuButton.addEventListener('click', () => {
      this.toggleMenu();
      this.removeHandlerClass();
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

  debounceOnScroll(func, time) {
    let timer;
    return function (event) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
};

  checkPositionPopup() {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}

  disableScroll() {
    this.menuButton.addEventListener('click', () => {
      if(this.menu.classList.contains('hero__nav--hidden')) {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      else {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
      }
    });
  }
  disableScrollIos() {
    const isSafari = navigator.userAgent.indexOf("Safari") !== -1;
    const isIphone = navigator.userAgent.indexOf("iPhone") !== -1;
    const isMobileIosSafari = isSafari && isIphone;

    if (this.menu.classList.contains('menu-button--close') && isMobileIosSafari) {
        document.ontouchmove = (e) => e.preventDefault();
    } else {
        document.ontouchmove = (e) => true;
    }
  }
}

export default MobileMenu;
