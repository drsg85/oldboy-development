import sbjs from 'sourcebuster';

class IncludeSourceInForm {
    constructor() {
        sbjs.init();
        this.addEvents();
    }

    showMeInfo() {
        const utm_medium = sbjs.get.current.mdm;
        const utm_source = sbjs.get.current.src;
        const utm_term = sbjs.get.current.trm;
        const utm_campaign = sbjs.get.current.cmp;
    }

    addEvents() {
        this.showMeInfo();
    }
}

export default IncludeSourceInForm;