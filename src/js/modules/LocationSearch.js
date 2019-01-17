'use strict';

class LocationSearch {
  constructor () {
    this.locationSelector = document.querySelector('.location-selector');
    this.locationForm = this.locationSelector.querySelector('.city-form__form');
    this.locationInput = this.locationSelector.querySelector('.city-form__input');

    this.branches = this.generateBranches();
    this.events();
  }

  events () {
    this.locationForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this.locationInput.addEventListener('keyup', (evt) => {
      console.clear();
      let searchPhrase = this.locationInput.value;
      let filteredBranches = this.filterBranches(this.branches, searchPhrase);
      console.log(filteredBranches);
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
      let items = locationLists[i].querySelectorAll('.location-list__item a');

      for (let j = 0; j < items.length; j++) {
        branches.push({
          city: city,
          address: items[j].textContent,
          link: items[j].href
        });
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
    // console.log(branchList);
    let filteredBranches = branchList.filter((branch) => {
      if (branch.city.toLowerCase().includes(searchText) ||
          branch.address.toLowerCase().includes(searchText)) {
            return true;
          }
      return false;
    });

    return filteredBranches;
  }
}


export default LocationSearch;
