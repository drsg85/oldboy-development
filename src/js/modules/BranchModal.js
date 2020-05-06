class BranchModal {
    constructor () {
        this.btn = document.querySelector('.branch-modal__header');
        this.helper = document.querySelector('.branch-modal');

        this.addEvent();
    }

    addEvent() {
        this.btn.addEventListener('click', () => {
            this.helper.classList.toggle('branch-modal--visible');
        });
    }
}



export default BranchModal;