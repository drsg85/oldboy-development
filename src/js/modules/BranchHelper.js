class BranchHelper {
    constructor () {
        this.btn = document.querySelector('.branch-helper__header');
        this.helper = document.querySelector('.branch-helper');
        this.arrow = document.querySelector('.branch-helper__arrow');
        this.leftArrow = document.querySelector('.branch-helper__arrow-movleft');
        this.rightArrow = document.querySelector('.branch-helper__arrow-movright');
        this.headline = document.querySelector('.branch-helper__headline');

        this.addEvent();
    }

    findParent(el, cls) {
        while(el = el.parentElement && !el.classList.contains(cls))
            return el;
    }

    closeHandlerByEsc(evt) {
        if(evt.keyCode == 27 && this.helper.classList.contains('branch-helper--visible')) {
            this.helper.classList.remove('branch-helper--visible');
            this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.svg')";
            // this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
            this.rightArrow.style.display = 'none';
            this.leftArrow.style.display = 'block';
            this.headline.style.opacity = "0.5";
        }
    }

    closeHandlerByClickOnFreeSpace(evt) {
        const target = evt.target;
        const currentTarget = target == this.btn || this.btn.classList.contains(target);
        const currentOpenedBlock = target == this.helper;
        if(!currentTarget && !currentOpenedBlock && this.helper.classList.contains('branch-helper--visible')) {
            this.helper.classList.toggle('branch-helper--visible');
            this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.svg')";
            //this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
            this.rightArrow.style.display = 'none';
            this.leftArrow.style.display = 'block';
            this.headline.style.opacity = "0.5";
        }
    }

    addEvent() {

        setTimeout(() => {
            this.helper.classList.add('branch-helper--visible');
            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.svg')";
                //this.arrow.style.backgroundImage = "url('./img/arrow-right.svg')";
                this.leftArrow.style.display = 'none';
                this.rightArrow.style.display = 'block';
                this.headline.style.opacity = "1";
            } else {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.svg')";
                // this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
                this.leftArrow.style.display = 'block';
                this.rightArrow.style.display = 'none';
                this.headline.style.opacity = "0.5";
            }
        }, 5000);

        setTimeout(() => {
            this.helper.classList.add('branch-helper--visible');
            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.svg')";
                this.headline.style.opacity = "1";
                //this.arrow.style.backgroundImage = "url('./img/arrow-right.svg')";
                this.leftArrow.style.display = 'none';
                this.rightArrow.style.display = 'block';
            } else {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.svg')";
                // this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
                this.leftArrow.style.display = 'block';
                this.rightArrow.style.display = 'none';
                this.headline.style.opacity = "0.5";
            }
        }, 60000);

        this.btn.addEventListener('click', (event) => {
            event.stopPropagation();
            this.helper.classList.toggle('branch-helper--visible');

            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.svg')";
                //this.arrow.style.backgroundImage = "url('./img/arrow-right.svg')";
                this.leftArrow.style.display = 'none';
                this.rightArrow.style.display = 'block';
                this.headline.style.opacity = "1";
            } else {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.svg')";
                //this.arrow.style.backgroundImage = "url('./img/arrow-left.svg')";
                this.rightArrow.style.display = 'none';
                this.leftArrow.style.display = 'block';
                this.headline.style.opacity = "0.5";
            }
        });

        window.addEventListener('keydown', () => this.closeHandlerByEsc(event));

        document.addEventListener('click', (event) => this.closeHandlerByClickOnFreeSpace(event));
    }
}

export default BranchHelper;