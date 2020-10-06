class BranchModal {
    constructor () {
        this.modal = document.querySelector('.branch-modal');
        this.cbtn = document.querySelector('.branch-modal__close');
        this.addEvent();
    }

    addEvent() {
        setTimeout(() => {
            this.modal.classList.add('branch-modal--visible');
        }, 5000);

        this.cbtn.addEventListener('click', () => {
            this.modal.classList.remove('branch-modal--visible');
            console.log('yeah');
        });
    }
}


export default BranchModal;