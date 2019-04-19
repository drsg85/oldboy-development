class UpButton {
  constructor() {
    this.upButton = document.querySelector('.up-button');

    if (this.upButton) {
      this.addEvents();
    }
  }


  addEvents() {
    this.upButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    });
  }
}

export default UpButton;
