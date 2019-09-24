class LocationLogo {
  constructor () {
    this.locationLogo = document.querySelector('.location-logo');
    this.locationLogoEng = document.querySelector('.location-logo--out');

    if (location.href.match(/oldboybarbershop.com/)) {
        this.locationLogo.style.pointerEvents = 'none';
    }

    if (location.href.match(/eu.oldboybarbershop.com/)) {
        this.locationLogoEng.style.pointerEvents = 'auto';
    }
    this.events();
  }
}

export default LocationLogo;
