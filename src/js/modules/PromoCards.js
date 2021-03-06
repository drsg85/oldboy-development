'use strict';

class PromoCards {
  constructor () {
    this.cards = document.querySelectorAll('.promo');

    this.events();
  }


  /**
   * Add event listeners
   */
  events () {
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i];
      let infoButton = card.querySelector('.promo__info-button');
      let closeButton = card.querySelector('.promo__close-button');

      infoButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.toggleCard(card);
      });

      closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this.toggleCard(card);
      });
    }
  }


  /**
   * Toggle card state
   * @param {HTMLElement} card
   */
  toggleCard (card) {
    card.classList.toggle('promo--open');
  }
}

export default PromoCards;
