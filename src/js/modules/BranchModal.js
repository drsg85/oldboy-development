class BranchModal {
    constructor () {
        this.modal = document.querySelector('.branch-modal');
        this.cbtn = document.querySelector('.branch-modal__close');
        this.ybtn = document.querySelector('yButton');

        this.addEvent();
    }

    addEvent() {
        this.ybtn.addEventListener('click', () => {
            this.modal.classList.add('branch-modal--visible');
        });

        this.cbtn.addEventListener('click', () => {
            this.modal.classList.remove('branch-modal--visible');
        });
    }
}


export default BranchModal;