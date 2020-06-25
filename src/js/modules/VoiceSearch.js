
class VoiceSearch {
    constructor() {
        this.trigger = document.querySelector('.city-form__mic');
        this.form = document.querySelector('.city-form__form');
        this.searchInput = this.form.querySelector('.city-form__input');
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
        this.addEvents()
    }

    listenStart(evt) {
        evt.preventDefault();
        const trigger = evt.target;
        trigger.classList.add('city-form__microphone-trigger--active');
        this.searchInput.placeholder = 'Говорите...';
        this.trigger.classList.add('active');
        this.recognition.start();
    }

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
              stations: [],
              lineOfMetro: []
            };
            for (let k = 0; k < stations.length; k++) {
              branch.stations.push(stations[k].textContent);
              branch.lineOfMetro.push(stations[k].className);
            }
    
            branches.push(branch);
          }
        }
    
        return branches;
    }

    filterBranches (branchList, searchText) {
        searchText = searchText.toLocaleLowerCase();
    
        let filteredBranches = branchList.filter((branch) => {
          if (branch.city.toLowerCase().includes(searchText)) {
            return true;
          } else if (branch.address.toLowerCase().includes(searchText)) {
            return true;
          } else {
            for (let i = 0; i < branch.stations.length; i++) {
              if (branch.stations[i].toLowerCase().includes(searchText)) {
                return true;
              }
            }
    
            return false;
          }
        });
    
        return filteredBranches;
    }

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
        if (branch.stations.length > 0) {
            let metro = document.createElement('div');
            metro.classList.add('location-list__metro');
            
            branch.stations.forEach((station, i) => {
            let stationElement = document.createElement('span');
            stationElement.textContent = station;
            if(branch.lineOfMetro[0] !== "") {
                stationElement.classList.add(branch.lineOfMetro[i]);
            }
            metro.appendChild(stationElement);
            });

            item.appendChild(metro);
        }

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

    _parseTranscript(evt) {
        const res = Array.from(evt.results).map((result) => {
            return result[0];
        })

        const result = res.map((result) => {
            return result.transcript
        })

        return result.join('');
    }

    _transcriptHandler(evt) {
        const speechOutput = this._parseTranscript(evt);
        this.searchInput.value = speechOutput;
        if(evt.results[0].isFinal) {
            this.trigger.classList.remove('city-form__microphone-trigger--active');
            this.searchInput.placeholder = null;
            //this.form.submit();
            let searchPhrase = this.locationInput.value;
            if (searchPhrase.length > 0) {
                this.trigger.style.display = 'none';
                let filteredBranches = this.filterBranches(this.branches, searchPhrase);
                this.showFound(filteredBranches);
            } else {
                this.hideResults();
            }
        }
    }

    addEvents() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if(window.SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.interimResults = true;
            this.recognition.lang = 'ru-RU';
            this.recognition.addEventListener('result', (event) => this._transcriptHandler(event));

            this.recognition.onerror = (event) => {
                console.log(event.error);
                if(event.error == 'no-speech') {
                    this.trigger.classList.add('inactive');
                    this.searchInput.placeholder = 'Поиск...';
                }
            }
        }
        else {
            this.trigger.remove();
        }

        this.trigger.addEventListener('click', (event) => this.listenStart(event));

        this.searchInput.addEventListener('search', (event) => {
            event.target.placeholder = 'Говорите...';
            this.trigger.style.display = 'block';
        })
    }
}

export default VoiceSearch