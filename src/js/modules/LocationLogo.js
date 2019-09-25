class LocationLogo {
  constructor () {
    this.locationLogo = document.querySelector('.location-logo');
    this.locationLogoEng = document.querySelector('.location-logo--out');

    if (location.href.match(/oldboydev.ru/)) {
        this.locationLogo.removeAttribute("href");
        this.locationLogo.style.opacity = '1';
    }

    if (location.href.match(/eu.oldboydev.ru/)) {
        this.locationLogo.removeAttribute("href");
    }
    this.events();
  }
}

export default LocationLogo;
