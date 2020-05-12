class BranchHelper {
    constructor () {
        this.btn = document.querySelector('.branch-helper__header');
        this.helper = document.querySelector('.branch-helper');
        this.arrow = document.querySelector('.branch-helper__arrow');
        this.headline = document.querySelector('.branch-helper__headline');

        this.addEvent();
    }

    addEvent() {

        setTimeout(() => {
            this.helper.classList.add('branch-helper--visible');
            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.png')";
                this.headline.style.opacity = "1";
            } else {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.png')";
                this.headline.style.opacity = "0.5";
            }
        }, 5000);

        setTimeout(() => {
            this.helper.classList.add('branch-helper--visible');
            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.png')";
                this.headline.style.opacity = "1";
            } else {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.png')";
                this.headline.style.opacity = "0.5";
            }
        }, 60000);

        this.btn.addEventListener('click', () => {
            this.helper.classList.toggle('branch-helper--visible');

            if (this.helper.classList.contains('branch-helper--visible')) {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-right.png')";
                this.headline.style.opacity = "1";
            } else {
                this.arrow.style.backgroundImage = "url('/sites/all/themes/oldboy8/dist/img/arrow-left.png')";
                this.headline.style.opacity = "0.5";
            }
        });
    }
}

export default BranchHelper;