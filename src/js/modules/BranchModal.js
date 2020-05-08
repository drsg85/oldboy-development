class BranchModal {
    constructor () {
        this.modal = document.querySelector('.branch-modal');
        this.cbtn = document.querySelector('.branch-modal__close');
        this.ybtn = document.querySelector('.yButton');
        this.ybtnSquare = document.querySelector('.ms_booking');
        this.triggers = [this.ybtn, this.ybtnSquare];
        this.addEvent();
    }

    addEvent() {
        // this.ybtn.classList.remove('yButton');
        // this.ybtnSquare.classList.remove('ms_booking');

        // this.ybtnSquare.addEventListener('click', (evt) => {
        //     evt.preventDefault();
        //     alert('done');
        // });

        this.triggers.forEach((trigger) => trigger.addEventListener('click', () => {
            this.modal.classList.add('branch-modal--visible');
        }))

        this.cbtn.addEventListener('click', () => {
            this.modal.classList.remove('branch-modal--visible');
        });
    }
}


export default BranchModal;