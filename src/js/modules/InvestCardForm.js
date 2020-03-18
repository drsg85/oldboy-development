class investCardForm {
    constructor() {
        this.openFormButton = document.querySelectorAll('.offer-button');
        this.offersCard = document.querySelector('.offers-card__form');
        this.cardCloseButton = document.querySelector('.offers-card__close-button');
        this.addEvents();
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    addEvents() {
        for (let i = 0; i < this.openFormButton.length; i++) {
            let formButton = this.openFormButton[i];

                formButton.addEventListener('click', () => {
                    // this.offersCard.classList.add('offers-card__form--active');
                    formButton.style.opacity="0";
                    
                    const findParent = this.findParent(formButton, 'offers-card__item');

                    let form = findParent.querySelector('.offers-card__form');
                    form.classList.add('offers-card__form--active');

                    let closeButton = findParent.querySelector('.offers-card__close-button');
                    closeButton.addEventListener ('click', () => {
                        form.classList.remove('offers-card__form--active');
                        formButton.style.opacity="1";
                    });
                });
        }
    }
}


export default investCardForm;