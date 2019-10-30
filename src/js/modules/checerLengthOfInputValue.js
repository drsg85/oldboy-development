class CheckerLengthOfInputValue {
    constructor() {
        this.inputValues = [...document.querySelectorAll('.vacancy-form__btn span')];
        this.flagElem = document.querySelector('.vacancy-form__label');
        this.addEvents();
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    addEvents() {
        if(this.inputValues = []) {
            this.inputValues = [...document.querySelectorAll('.js-webform-radios .option')];
        }
        this.inputValues.map((el) => {
            let val = el.textContent;
            let valLength = val.length;
            let targetEl;
            if(this.flagElem) {
                targetEl = 'vacancy-form__label';
            }
            else {
                targetEl = 'js-form-item';
            }
            let parent = this.findParent(el, targetEl);
            parent.style.width = '30%';
            if(valLength >= 8) {
                parent.style.width = '43%';
            }
            else if(valLength >= 15) {
                parent.style.width == "55%";
            }
        })
    }
}

export default CheckerLengthOfInputValue;