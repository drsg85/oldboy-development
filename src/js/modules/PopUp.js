'use strict';

class PopUp {
    constructor () {
      this.investmentPopup = document.querySelector('.investment-popup');
      this.protectionLink = document.querySelector('.protection__link');
      this.investmentPopupClose = document.querySelector('.investment-popup__close');

      this.events();
    }

events () {
    this.protectionLink.addEventListener('click', () => {
        this.investmentPopup.style.display = "block";
        // this.investmentPopup.classList.toggle('.investment-popup--active');
    });

    this.investmentPopupClose.addEventListener('click', () => {
        this.investmentPopup.style.display = "none";
    })
}
}

export default PopUp;
