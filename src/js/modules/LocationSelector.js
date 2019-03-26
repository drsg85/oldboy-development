'use strict';

class LocationSelector {
  constructor () {
    this.city = document.querySelector('.city-select__city');
    this.citySelector = document.querySelector('.location-selector');
    this.citySelectorClose = document.querySelector('.location-selector__close');

    this.reset();
    this.events();
  }

  events () {
    this.city.addEventListener('click', (evt) => {
      evt.preventDefault();

      this.toggleSelector();
    });

    this.citySelectorClose.addEventListener('click', (evt) => {
      evt.preventDefault();

      this.toggleSelector();
    });
  }

  reset () {
    this.citySelector.classList.add('location-selector--hidden');
    this.citySelectorClose.classList.add('location-selector__close--hidden');
  }
  
  toggleSelector () {
    this.citySelector.classList.toggle('location-selector--hidden');
    this.citySelectorClose.classList.toggle('location-selector__close--hidden');
  }
}

export default LocationSelector;
