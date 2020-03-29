class BranchPopup {
    constructor () {
        this.popup = document.querySelector('.branch-popup');
        this.closePopupButton = document.querySelector('.branch-popup__close');

        this.addEvent();
    }
    
    addEvent() {
        this.closePopupButton.addEventListener('click', () => {
            this.popup.classList.remove('branch-popup--active');
            // document.documentElement.style.overflow = 'auto';
        });

        document.addEventListener('keydown', (evt) => {
            if (evt.keyCode === 27) {
                this.popup.classList.remove('branch-popup--active');
                // document.documentElement.style.overflow = 'auto';
            }
        });

        this.openSpace = function () {
                if (event.target.closest('hero__popup')) return;
                this.popup.classList.remove('branch-popup--active');
                // document.documentElement.style.overflow = 'auto';
        }

        document.addEventListener('click', (event) => {
            if (event.target !== event.target.classList.contains('branch-popup')) {
            this.openSpace();
        }
        });
    }
}

export default BranchPopup;