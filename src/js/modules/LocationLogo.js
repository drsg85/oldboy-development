class LocationLogo {
  constructor () {
    this.locationLogo = document.querySelector('.location-logo');
    this.locationLogoEng = document.querySelector('.location-logo--out');
    this.addEvents();
  }

  addEvents() {
    if (location.href.match(/oldboybarbershop.com/)) {
      this.locationLogo.removeAttribute("href");
      this.locationLogo.style.opacity = '1';
    }

    if (location.href.match(/eu.oldboybarbershop.com/)) {
        this.locationLogo.removeAttribute("href");
    }
  }
}

export default LocationLogo;
