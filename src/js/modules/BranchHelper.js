import csso from 'gulp-csso';
import Swiper from './Swiper';
class BranchHelper {
    constructor () {
        this.btn = document.querySelector('.branch-helper__header');
        this.helper = document.querySelector('.branch-helper');
        this.arrow = document.querySelector('.branch-helper__arrow');
        this.leftArrow = document.querySelector('.branch-helper__arrow-movleft');
        this.rightArrow = document.querySelector('.branch-helper__arrow-movright');
        this.headline = document.querySelector('.branch-helper__headline');
        this.url = window.location.href;
        this.addEvent();
    }

    arrowSwitcher(url) {
        if (this.helper.classList.contains('branch-helper--visible')) {
            this.arrow.style.backgroundImage = `url('${url}/img/arrow-right.svg')`;
            //this.arrow.style.backgroundImage = "url('./img/arrow-right.svg')";
            this.leftArrow.style.display = 'none';
            this.rightArrow.style.display = 'block';
            this.headline.style.opacity = "1";
        } else {
            this.arrow.style.backgroundImage = `url('${url}/img/arrow-left.svg')`;
            // this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
            this.leftArrow.style.display = 'block';
            this.rightArrow.style.display = 'none';
            this.headline.style.opacity = "0.5";
        }
    }

    findParent(el, cls) {
        while(el = el.parentElement && !el.classList.contains(cls))
            return el;
    }

    closeHandlerByEsc(evt, url) {
        if(evt.keyCode == 27 && this.helper.classList.contains('branch-helper--visible')) {
            this.helper.classList.remove('branch-helper--visible');
            this.arrow.style.backgroundImage = `url('${url}/img/arrow-left.svg')`;
            // this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
            this.rightArrow.style.display = 'none';
            this.leftArrow.style.display = 'block';
            this.headline.style.opacity = "0.5";
        }
    }

    closeHandlerByClickOnFreeSpace(evt, url) {
        const target = evt.target;
        const currentTarget = target == this.btn || this.btn.classList.contains(target);
        const currentOpenedBlock = target == this.helper;
        if(!currentTarget && !currentOpenedBlock && this.helper.classList.contains('branch-helper--visible')) {
            this.helper.classList.toggle('branch-helper--visible');
            this.arrow.style.backgroundImage = `url('${url}/img/arrow-left.svg')`;
            //this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
            this.rightArrow.style.display = 'none';
            this.leftArrow.style.display = 'block';
            this.headline.style.opacity = "0.5";
        }
    }

    switchVisibility(evt, url) {
        evt.stopPropagation();
        this.helper.classList.toggle('branch-helper--visible');
        if (this.helper.classList.contains('branch-helper--visible')) {
            this.arrow.style.backgroundImage = `url('${url}/img/arrow-right.svg')`;
            //this.arrow.style.backgroundImage = "url('./img/arrow-right.svg')";
            this.leftArrow.style.display = 'none';
            this.rightArrow.style.display = 'block';
            this.headline.style.opacity = "1";
        } else {
            this.arrow.style.backgroundImage = `url('${url}/img/arrow-left.svg')`;
            //this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
            this.rightArrow.style.display = 'none';
            this.leftArrow.style.display = 'block';
            this.headline.style.opacity = "0.5";
        }
    }

    addEvent() {
        const correctUrl = ''
        if(this.url.indexOf('.com')) {
            correctUrl = '/sites/all/themes/oldboy8/dist'
        }
        else {
            correctUrl = '/assets';
        }
        setTimeout(() => {
            this.helper.classList.add('branch-helper--visible');
            
            this.arrowSwitcher(correctUrl);
        }, 5000);

        // setTimeout(() => {
        //     this.helper.classList.add('branch-helper--visible');
            
        //     this.arrowSwitcher();
        // }, 60000);

        this.btn.addEventListener('click', (event) => this.switchVisibility(event, correctUrl));

        window.addEventListener('keydown', () => this.closeHandlerByEsc(event, correctUrl));

        document.addEventListener('click', (event) => this.closeHandlerByClickOnFreeSpace(event, correctUrl));
    }
}

export default BranchHelper;