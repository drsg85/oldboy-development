class MenuScale {
  constructor () {
    this.menuScale = document.querySelectorAll('.main-nav__link');
    this.addEvents();
  }

  addEvents() {
      if (this.menuScale.length > 5) {
        console.log('its alive');
        this.menuScale.forEach(element => {
            element.classList.add('main-nav__link--scale');
        });
      }
  }
}

export default MenuScale;
