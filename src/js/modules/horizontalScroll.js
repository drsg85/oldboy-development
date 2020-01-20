'use strict';

class HorizontalScroll {
    constructor() {
        this.branchContainer = document.querySelector('.branch-addresses__container');
        
        if(this.branchContainer) {
            this.events();
        }
    }

    events() {
        this.branchContainer.addEventListener('wheel', (event) => {
            console.log(this.branchContainer.scrollLeft);
            event.preventDefault();
            if (event.deltaMode == event.DOM_DELTA_PIXEL) {
                var modifier = 1;
                // иные режимы возможны в Firefox
            } else if (event.deltaMode == event.DOM_DELTA_LINE) {
                var modifier = parseInt(getComputedStyle(this).lineHeight);
            } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
                var modifier = this.clientHeight;
              }
              if (event.deltaY != 0) {
                // замена вертикальной прокрутки горизонтальной
                this.branchContainer.scrollLeft += modifier * event.deltaY;
              }
        });
    }
}


export default HorizontalScroll;