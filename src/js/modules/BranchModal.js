class BranchModal {
    constructor () {
        this.modal = document.querySelector('.branch-modal');
        this.cbtn = document.querySelector('.branch-modal__close');
        this.ybtn = document.querySelector('.yButton');
        this.ybtnSquare = document.querySelector('.button');
        this.triggers = [this.ybtn, this.ybtnSquare];
        this.addEvent();
    }

    addEvent() {
        this.ybtn.style.visibility = "hidden";
            this.ybtnSquare.addEventListener('click', () => {
                this.modal.classList.add('branch-modal--visible');
            });
            
            this.cbtn.addEventListener('click', () => {
                this.modal.classList.remove('branch-modal--visible');
                this.ybtn.style.visibility = "visible";
        });
    }
}


export default BranchModal;