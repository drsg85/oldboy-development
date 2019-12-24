class ExclusiveCities {
    constructor() {
        this.input = document.querySelector('input#edit-city');
        this.incorrectionText = document.querySelector('.form__input-city-incorrect')
        this.submit = document.querySelector('.form__submit-btn');

        this.data;
        if(this.input) {
            this.addEvents();
        }
    }

    checkCity(data) {
        this.data = data;
        return this.data;
    }

    addEvents() {
        //const url = 'http://localhost:3000/list/top_cities.json';
        //const url = 'http://oldboydev.ru/list/top_cities';
        const url = 'https://oldboybarbershop.com/list/top_cities';
        (async () => {
            const resp = await fetch(url);
            const data = await resp.json();
            this.checkCity(data);
        })();
        this.input.addEventListener('blur', () => {
            let val = this.input.value.toLowerCase().trim();
            for (let i = 0; i < this.data.length; i++) {

                let el = this.data[i];
                if(val == el.title.toLowerCase() || el.title.toLowerCase().indexOf(val) !== -1 && val !== '') {
                    this.input.style.border = '2px solid rgb(175, 33, 46)';
                    this.submit.disabled = true;
                    this.submit.classList.add('button--disabled');
                    this.incorrectionText.classList.add('form__input-city-incorrect--active');
                    break;
                }
                else {
                    this.input.style.border = 'none';
                    this.submit.disabled = false;
                    this.submit.classList.remove('button--disabled');
                    this.incorrectionText.classList.remove('form__input-city-incorrect--active');
                }
            }
        })
    }
}
export default ExclusiveCities;