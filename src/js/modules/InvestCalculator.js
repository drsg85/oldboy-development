class InvestCalculator {
    constructor() {
        this.formResult = document.querySelector('.invest-calculator__result');
        this.formGraphLabels = [...document.querySelectorAll('.invest-calculator__radio')];
        this.formInvest = this.formResult.querySelector('#invest-calculator__value-invest');
        this.sumText = [...this.formResult.querySelectorAll('.invest-calculator__summ-text')];
        this.formPassive = this.formResult.querySelector('#invest-calculator__value-passive');
        this.formYear = this.formResult.querySelector('#invest-calculator__value-year');
        this.formMonth = this.formResult.querySelector('#invest-calculator__value-month');
        this.addEvents();
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    clicking(el) {
        this.flag = true;
        this.formResult.classList.remove('invest-calculator__special');
        if(this.flag) {
            const parent = this.findParent(el, 'invest-calculator__label');
            const summSelector = parent.querySelector('.invest-calculator__sum');
            const summInMonth = summSelector.dataset.month;
            const summInString = summSelector.textContent;
            const summInStringR = (summInString.substring(0, summInString.length-1)).split(' ').join('');
            const regExp = /\d{1,3}(?=(\d{3})+(?!\d))/g;
            const rouble = document.createElement('span');
            rouble.classList.add('invest-calculator__curr', 'rouble-sign');
            rouble.textContent = ' Р';
            this.sumText.map((el) => {
                if(!el.querySelector('.invest-calculator__curr')) {
                    el.appendChild(rouble.cloneNode(true));
                }
                else return;
            });
            const correctSumm = summInStringR.replace(regExp, '$& ');
            const resultInMonth = summInMonth.toString();
            const resultInYear = (summInMonth * 12).toString();
            const resultInPassive = (summInMonth * 12 * 5).toString();
            this.formInvest.innerHTML = correctSumm;
            this.formPassive.innerHTML = resultInPassive.replace(regExp, '$& ');
            this.formYear.innerHTML = resultInYear.replace(regExp, '$& ');
            this.formMonth.innerHTML = resultInMonth.replace(regExp, '$& ');
        }
    }

    special(el) {
        this.formResult.classList.add('invest-calculator__special');
    }

    addEvents() {
        this.formGraphLabels.map((el, i, arr) => {
            if(i < arr.length - 1) {
                el.addEventListener('click', () => this.clicking(el));
            }
            else {
                el.addEventListener('click', () => this.special(el));
            }

            document.body.addEventListener('click', (event) => {
                let tst = false;
                this.formGraphLabels.some(() => {
                    if(event.target == document.activeElement) {
                        tst = true;
                    }
                    else {
                        tst = false;
                    }
                })
                if(!tst) {
                    this.formGraphLabels[0].checked = true;
                    this.formResult.classList.remove('invest-calculator__special');
                    this.formYear.innerHTML = "480 000";
                    this.formPassive.innerHTML = "2 400 000";
                    this.formMonth.innerHTML = "40 000";
                    this.formInvest.innerHTML = "704 000";
                }
                else {
                    return;
                }
            })
        });
    }
}

export default InvestCalculator;