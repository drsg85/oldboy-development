class UpButton {
  constructor() {
    this.upButton = document.querySelector('.up-button');
    this.upButton.style.opacity = '0';

    if (this.upButton) {
      this.addEvents();
    }
  }


  addEvents() {
    this.upButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    });

    document.addEventListener('scroll', (evt) => {
      console.log(window.innerHeight, window, scrollY);
      if(window.scrollY > window.innerHeight) {
        this.upButton.style.opacity = '1';
      } else {
        this.upButton.style.opacity = '0';
      }
    })
  }
}

export default UpButton;
