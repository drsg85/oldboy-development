'use strict';

class BranchList {
  constructor () {
    this.button = document.querySelector('.branch-list__button');
    this.list = document.querySelector('.branch-list');

    console.dir(this.button);

    this.events();
    this.reset();
  }


  /**
   * Add event listeners
   */
  events () {
    this.button.addEventListener('click', (event) => {
      console.log('toggle list');
      this.toggleList(event);
    });
  }


  /**
   * Reset initial menu state
   */
  reset () {
    this.isHidden = true;
    this.list.classList.add('branch-list--hidden');
    this.setButtonText(this.isHidden);
  }


  toggleList (event) {
    event.preventDefault();

    this.isHidden = !this.isHidden;
    this.list.classList.toggle('branch-list--hidden');
    this.setButtonText(this.isHidden);
  }
  
  setButtonText (isHidden) {
    let buttonText = this.button.textContent;
    let newText = '<div class="branch-list__button-mid"></div>';
    console.log(isHidden);

    if (isHidden) {
      newText = 'Посмотреть филиалы списком' + newText;
    } else {
      newText = 'Скрыть список филиалов'+ newText;
    }

    this.button.innerHTML = newText;
  }
}

export default BranchList;
