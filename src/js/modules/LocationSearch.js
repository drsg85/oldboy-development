'use strict';

class LocationSearch {
  constructor () {
    this.locationSelector = document.querySelector('.location-selector');
    this.locationForm = this.locationSelector.querySelector('.city-form__form');
    this.locationInput = this.locationSelector.querySelector('.city-form__input');

    this.branches = this.generateBranches();
    this.events();
    this.hideResults();
  }

  events () {
    this.locationForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
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
      return branch.city.toLowerCase().startsWith(searchText);
    });

    return filteredBranches;
  }


  /**
   * Renders found branches
   * @param {Array} foundBranches
   */
  showFound (foundBranches) {
    let resultsList = this.locationSelector.querySelector('.search-results');
    resultsList.style.display= 'block';

    while (resultsList.firstChild) {
      resultsList.removeChild(resultsList.firstChild);
    }

    if (foundBranches.length > 0) {
      let docFragment = document.createDocumentFragment();

      // Adding title
      // TODO: refactor this for i11n
      let title = document.createElement('h2');
      title.classList.add('search-results__title');
      title.textContent = 'Результаты поиска:';
      docFragment.appendChild(title);

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
  
      resultsList.appendChild(docFragment);
    }

  }


  hideResults () {
    let resultsList = this.locationSelector.querySelector('.search-results');
    resultsList.style.display = 'none';
  }
}


export default LocationSearch;
