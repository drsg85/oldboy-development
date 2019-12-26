'use strict';
import SmoothScroll from './SmoothScroll';

class GoToElement {
    constructor () {
        this.alphabetItem = document.querySelectorAll('.alphabet__item');
        this.branchItems = [...document.querySelectorAll('.branch-addresses__letter')];

        this.events();
    }

    events() {
        function gotoelement(e_id, arr) {
            // document.getElementById('branch-index').scrollLeft = document.getElementById(e_id).offsetLeft - document.getElementById('branch-index').offsetLeft - document.getElementById('branch-index').clientLeft;

            const target = document.getElementById(e_id);
            for (let i = 0; i < arr.length; i++) {
                let everyLetter = arr[i];
                if (everyLetter.classList.contains('branch-addresses__letter--active')) {
                    everyLetter.classList.remove('branch-addresses__letter--active');
                }
            }


            target.classList.add('branch-addresses__letter--active');
            return false;
          }

          for (let i = 0; i < this.alphabetItem.length; i++) {
              let alphabetLetter = this.alphabetItem[i];
              let letterLink = alphabetLetter.getElementsByTagName('a')[0].getAttribute('href');
              letterLink = letterLink.replace(/#/g,'');

              alphabetLetter.addEventListener('click', () => {
                gotoelement(letterLink,this.branchItems);
              });
          }
    }
}


export default GoToElement;