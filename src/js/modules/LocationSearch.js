'use strict';

class LocationSearch {
  constructor () {
    // Location selector (for faster search)
    this.locationSelector = document.querySelector('.location-selector');

    // Search form elements
    this.locationForm = this.locationSelector.querySelector('.city-form__form');
    this.locationInput = this.locationSelector.querySelector('.city-form__input');

    // Search results elements
    this.resultsSection = this.locationSelector.querySelector('.search-results');
    this.resultsList = this.locationSelector.querySelector('.search-results__list');
    this.notFoundLabel = this.locationSelector.querySelector('.search-results__not-found');

    this.branches = this.generateBranches();
    this.events();
    this.hideResults();
  }


  /**
   * Adds events listeners
   */
  events () {
    this.locationForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this.locationForm.addEventListener('input', (evt) => {
      let searchPhrase = this.locationInput.value;
      if (searchPhrase.length <= 0) {
        this.hideResults();
      }
    });

    this.locationInput.addEventListener('keyup', (evt) => {
      let searchPhrase = this.locationInput.value;
      if (searchPhrase.length > 0) {
        let filteredBranches = this.filterBranches(this.branches, searchPhrase);
        this.showFound(filteredBranches);
      } else {
        this.hideResults();
      }
    });
  }


  /**
   * Returns an array of objects representing branches
   * @return {Array}
   */
  generateBranches () {
    let branches = [];
    let locationLists = this.locationSelector.querySelectorAll('.location-list');

    for (let i = 0; i < locationLists.length; i++) {
      let city = locationLists[i].querySelector('.location-list__city').textContent;
      let items = locationLists[i].querySelectorAll('.location-list__item');

      for (let j = 0; j < items.length; j++) {
        let itemLink = items[j].querySelector('a');
        let stations = items[j].querySelectorAll('.location-list__metro span');

        let branch = {
          city: city,
          address: itemLink.textContent,
          link: itemLink.href,
          stations: []
        };

        for (let k = 0; k < stations.length; k++) {
          branch.stations.push(stations[k].textContent);
        }

        branches.push(branch);
      }
    }

    return branches;
  }


  /**
   * Filters an array of branches and returns an array
   * of branches that include searchText
   * @param {Array} branchList
   * @param {string} searchText
   * @return {Array}
   */
  filterBranches (branchList, searchText) {
    searchText = searchText.toLocaleLowerCase();

    let filteredBranches = branchList.filter((branch) => {
      if (branch.city.toLowerCase().includes(searchText)) {
        return true;
      } else if (branch.address.toLowerCase().includes(searchText)) {
        return true;
      }

      return false;
    });

    return filteredBranches;
  }


  /**
   * Renders found branches
   * @param {Array} foundBranches
   */
  showFound (foundBranches) {
    // Showing results wrapper
    this.resultsSection.style.display= 'block';

    // Cleaning results list
    while (this.resultsList.firstChild) {
      this.resultsList.removeChild(this.resultsList.firstChild);
    }

    if (foundBranches.length > 0) {
      let docFragment = document.createDocumentFragment();

      // Adding branches
      foundBranches.forEach((branch) => {
        let item = document.createElement('li');
        item.classList.add('search-results__item');
        let link = document.createElement('a');
        link.classList.add('search-results__link');
        link.textContent = branch.city + ', ' + branch.address;
        link.href = branch.link;
        item.appendChild(link);
        docFragment.appendChild(item);
      });
  
      this.resultsList.appendChild(docFragment);
      this.notFoundLabel.style.display = 'none';
    } else {
      this.notFoundLabel.style.display = 'block';
    }
  }


  hideResults () {
    this.resultsSection.style.display = 'none';
  }
}


export default LocationSearch;
