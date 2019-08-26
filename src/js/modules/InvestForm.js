class InvestForm {
    constructor() {
        this.form = document.querySelector('.invest-form-container');
        this.trigger = document.querySelector('.form-opener');
        this.closeButton = this.form.querySelector('.invest__close-icon');

        if(this.trigger) {
            
            this.addEvents();
        }
    }
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
    }
}

export default InvestForm;