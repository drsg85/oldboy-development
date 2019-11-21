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
            if (this.investmentPopup.classList.contains('investment-popup--hidden')) {
                this.investmentPopup.classList.remove('investment-popup--hidden');
                setTimeout(() => {
                    this.investmentPopup.classList.remove('investment-popup__visually');
                }, 20);
            }
        })

        this.investmentPopupClose.addEventListener('click', () => {
            this.investmentPopup.classList.add('investment-popup__visually');
            setTimeout(() => {
                this.investmentPopup.classList.add('investment-popup--hidden');
            }, 500);
            
        })
    }
}


export default PopUp;
