class LanguageSelector {
  constructor() {
    this.langSelect = document.querySelector('.language-select');
    
    if (this.langSelect) {
      this.langButton = this.langSelect.querySelector('.language-select__current');
      this.langPopup = this.langSelect.querySelector('.language-select__popup');
      if(this.langPopup) {
        this.reset();
      }
      else {
        this.langButton.style.display = 'none';
      }

      this.addEvents();
    }
  }

  addEvents() {
    this.langButton.addEventListener('click', () => {
      this.togglePopup();
    });

    document.addEventListener('click', (evt) => {
      if(evt.target != this.langButton && evt.target != this.langPopup) {
        this.reset();
      }
    });
  }

  reset() {
    this.langPopup.classList.add('language-select__popup--hidden');
  }

  togglePopup() {
    this.langPopup.classList.toggle('language-select__popup--hidden');
  }
}

export default LanguageSelector;
