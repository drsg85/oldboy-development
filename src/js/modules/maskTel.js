import InputMask from '../../../node_modules/inputmask/dist/inputmask/inputmask';

class MaskTel {
    constructor() {
        this.inputTels = document.querySelectorAll('.lead-form--masked');
        this.addEvents();
    }

    addEvents() {
        console.log(this.inputTels);
        let telInput = new InputMask({
            'mask': '7(999) 999-99-99'
        }).mask(this.inputTels);
    }
}

export default MaskTel;