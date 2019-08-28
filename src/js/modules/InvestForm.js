class InvestForm {
    constructor() {
        this.header = document.querySelector('.hero--investment');
        this.form = document.querySelector('.invest-form-container');
        this.trigger = document.querySelector('.form-opener');
        this.closeButton = this.form.querySelector('.invest__close-icon');
        if(this.trigger) {
            this.headerHeight = this.header.clientHeight - 300;
            this.addEvents();
        }
    }

    checkClassOnScroll() {
        if((window.pageYOffset > this.header || document.documentElement.scrollTop > this.headerHeight) && !this.trigger.classList.contains('form-opener--active')) {
            this.trigger.classList.add('form-opener--styled');
        }
        else {
            this.trigger.classList.remove('form-opener--styled');
        }
    };

    debounceOnResize(func) {
        let timer;
        return function (event) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(func, 250, event);
        };
    };

    closeHandlerByEsc(evt) {
        if(evt.keyCode == 27 && this.form.classList.contains('invest-form-container--active')) {
          this.form.classList.remove('invest-form-container--active');
          this.trigger.classList.remove('form-opener--active');
          //this.removeHandlerClass();
        }
    }
    
    closeMobileMenuByClick() {
    this.menuButton.classList.remove('menu-button--close');
    this.menu.classList.add('hero__nav--hidden');
    this.removeHandlerClass();
    }
    
    closeHandlerByClickOnPage(evt) {
    if(evt.target.classList.contains('menu-button--close')) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('hero__nav-wrapper');
        document.body.appendChild(wrapper);
        wrapper.addEventListener('click', () => this.closeMobileMenuByClick());
    }
    }

    addEvents() {
        console.log(this.headerHeight);
        this.trigger.addEventListener('click', () => {
            if(!this.form.classList.contains('invest-form-container--active')) {
                this.form.classList.add('invest-form-container--active');
                this.trigger.classList.add('form-opener--active');
            }
            else {
                this.form.classList.remove('invest-form-container--active');
                
            }
        });
        
        this.closeButton.addEventListener('click', () => {
            this.form.classList.remove('invest-form-container--active');
            this.trigger.classList.remove('form-opener--active');
        });

        window.addEventListener('keydown', () => this.closeHandlerByEsc(event));

        window.addEventListener('scroll', () => this.debounceOnResize(this.checkClassOnScroll()));
    }
}

export default InvestForm;