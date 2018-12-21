'use strict';

class PromoCards {
  constructor () {
    this.cards = document.querySelectorAll('.promo');

    this.events();
  }


  events () {
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i];
      let infoButton = card.querySelector('.promo__info-button');
      let closeButton = card.querySelector('.promo__close-button');

      infoButton.addEventListener('click', () => {
        this.toggleCard(card);
      });

      closeButton.addEventListener('click', () => {
        this.toggleCard(card);
      });
    }
  }


  toggleCard (card) {
    card.classList.toggle('promo--open');
  }
}

export default PromoCards;
