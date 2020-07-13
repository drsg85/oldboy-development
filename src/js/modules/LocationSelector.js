'use strict';

class LocationSelector {
  constructor () {
    this.city = document.querySelector('.city-select');
    this.citySelector = document.querySelector('.location-selector');
    this.citySelectorClose = document.querySelector('.location-selector__close');
    this.cityInput = document.querySelector('.city-form__input');
    this.locationAbroad = document.querySelector('.location-selector__abroad');
    this.locationLogo = document.querySelector('.location-logo--reset');
    this.locationLogo.style.filter = `drop-shadow(1px 1px 0px orange)`;
    this.locationAbroadSwitcher = document.querySelector('.location-logo--switcher');
    this.toSwitchBlocks = [this.citySelector.querySelector('.location-selector__fast-nav'), this.citySelector.querySelector('.location-selector__alphabet'), this.citySelector.querySelector('.location-selector__content')]
    this.reset();
    this.events();
  }

  switchAbroad() {
    this.toSwitchBlocks.map((switchBlock) => {
      switchBlock.classList.add('location-selector--invisible');
    });
    this.locationAbroad.classList.add('location-selector__abroad--visible');
    this.locationLogo.style.filter = null;
    this.locationAbroadSwitcher.style.filter = `drop-shadow(1px 1px 0px orange)`;
  }
  
  resetSwitch() {
    this.toSwitchBlocks.map((switchBlock) => {
      switchBlock.classList.remove('location-selector--invisible')
    })
    this.locationAbroad.classList.remove('location-selector__abroad--visible');
    this.locationAbroadSwitcher.style.filter = null;
    this.locationLogo.style.filter = `drop-shadow(1px 1px 0px orange)`;
  }
  
  /**
   * Adds click events to open and close city selector
   */
  events () {
    this.city.addEventListener('click', (evt) => {
      evt.preventDefault();
      
      this.toggleSelector();
      if(this.cityInput) {
        setTimeout(() => {
          this.cityInput.focus();
        }, 250);
      }
    });
    
    this.citySelectorClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      
      this.toggleSelector();
    });

    window.addEventListener('keydown', () => this.closeHandlerByEsc(event));

    this.locationAbroadSwitcher.addEventListener('click', () => this.switchAbroad());

    this.locationLogo.addEventListener('click', () => this.resetSwitch())
  }
  
  
  /**
   * Reset city selector state
   */
  reset () {
    this.citySelector.classList.add('location-selector--hidden');
    this.citySelectorClose.classList.add('location-selector__close--hidden');
    this.isHidden = true;
  }
  
  
  /**
   * Toggle city selector stace (open/closed)
   */
  toggleSelector () {
    this.citySelector.classList.toggle('location-selector--hidden');
    this.citySelectorClose.classList.toggle('location-selector__close--hidden');
    this.isHidden = !this.isHidden;
    if (this.isHidden) {
      document.documentElement.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }


  closeHandlerByEsc(evt) {
    if(evt.keyCode == 27 && !this.citySelector.classList.contains('location-selector--hidden')) {
      this.citySelectorClose.classList.add('location-selector__close--hidden');
      this.citySelector.classList.add('location-selector--hidden');
      document.documentElement.style.overflow = 'auto';
    }
  }
}

export default LocationSelector;
