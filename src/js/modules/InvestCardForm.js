class investCardForm {
    constructor(obj) {
        this.currentFormParent = obj.formParent
        this.openFormButton = document.querySelectorAll('.offer-button');
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
                    formButton.style.opacity="0";
                    
                    const parentOfCurrentForm = this.findParent(formButton, this.currentFormParent);

                    let form = parentOfCurrentForm.querySelector('.offers-card__form');
                    form.classList.add('offers-card__form--active');

                    let closeButton = parentOfCurrentForm.querySelector('.offers-card__close-button');
                    closeButton.addEventListener ('click', () => {
                        form.classList.remove('offers-card__form--active');
                        formButton.style.opacity="1";
                    });
                });
        }
    }
}


export default investCardForm;