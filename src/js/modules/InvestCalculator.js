class InvestCalculator {
    constructor() {
        this.formResult = document.querySelector('.invest-calculator__result');
        this.formGraphLabels = [...document.querySelectorAll('.invest-calculator__radio')];
        this.formInvest = this.formResult.querySelector('#invest-calculator__value-invest');
        this.sumText = [...this.formResult.querySelectorAll('.invest-calculator__summ-text')];
        this.investCalcSumms = [...document.querySelectorAll('.invest-calculator__sum')];
        this.investLocation = document.querySelector('.invest-location');
        this.investLocs = [...this.investLocation.querySelectorAll('.invest-location__radio')];
        this.formPassive = this.formResult.querySelector('#invest-calculator__value-passive');
        this.formYear = this.formResult.querySelector('#invest-calculator__value-year');
        this.formMonth = this.formResult.querySelector('#invest-calculator__value-month');
        this.location = 'monthRU';

        this.calcFlag = true;
        this.euInvestment = {
            0: '1 250 000 ₽',
            1: '2 500 000 ₽',
            2: '3 750 000 ₽',
            3: '5 000 000 ₽',
            4: '6 250 000 ₽',
            5: 'более 6 250 000 ₽'
        }

        this.ruInvestment = {
            0: '850 000 ₽',
            1: '1 700 000 ₽',
            2: '2 550 000 ₽',
            3: '3 400 000 ₽',
            4: '4 250 000 ₽',
            5: 'более 4 250 000 ₽'
        }

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
            let summInMonth = summSelector.dataset.monthru;
            if(this.location === 'monthEU') {
                summInMonth = summSelector.dataset.montheu;
            }
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
        this.investLocs.map((el) => el.addEventListener('change', () => {
            this.clicking(this.formGraphLabels[0]);
            if(el.id === 'rf') {
                this.calcFlag = true;
                this.investCalcSumms.map((el, i) => {
                    el.textContent = this.ruInvestment[i];
                });
                this.location = 'monthRU';
                this.formYear.innerHTML = "480 000";
                this.formPassive.innerHTML = "2 400 000";
                this.formMonth.innerHTML = "40 000";
                this.formInvest.innerHTML = "850 000";
                
            }
            else if(el.id === 'eu') {
                this.calcFlag = false;
                this.investCalcSumms.map((el, i) => {
                    el.textContent = this.euInvestment[i];
                });
                this.location = 'monthEU';
                this.formYear.innerHTML = "1 250 000";
                this.formPassive.innerHTML = "6 000 000";
                this.formMonth.innerHTML = "100 000";
                this.formInvest.innerHTML = "1 250 000";
            }
        }));

        this.formGraphLabels.map((el, i, arr) => {
            if(i < arr.length - 1) {
                el.addEventListener('click', () => this.clicking(el));
            }
            else {
                el.addEventListener('click', () => this.special(el));
            }
        });

        document.body.addEventListener('click', (event) => {
            this.formGraphLabels.some(() => {
                if(event.target !== document.activeElement && this.calcFlag) {
                    this.formGraphLabels[0].checked = true;
                    this.formResult.classList.remove('invest-calculator__special');
                    this.formYear.innerHTML = "480 000";
                    this.formPassive.innerHTML = "2 400 000";
                    this.formMonth.innerHTML = "40 000";
                    this.formInvest.innerHTML = "850 000";
                }
                else if(event.target !== document.activeElement && !this.calcFlag) {
                    this.formGraphLabels[0].checked = true;
                    this.formResult.classList.remove('invest-calculator__special');
                    this.formYear.innerHTML = "1 250 000";
                    this.formPassive.innerHTML = "6 000 000";
                    this.formMonth.innerHTML = "100 000";
                    this.formInvest.innerHTML = "1 250 000";
                }
                else {
                    return;
                }
            });
            
        });
    }
}

export default InvestCalculator;