import sbjs from 'sourcebuster';

class IncludeSourceInForm {
    constructor() {
        this.form = document.querySelector('#application-form');
        sbjs.init();
        this.addEvents();
    }

    showMeInfo() {
        const utm_medium = sbjs.get.current.mdm;
        const utm_source = sbjs.get.current.src;
        const utm_term = sbjs.get.current.trm;
        const utm_campaign = sbjs.get.current.cmp;
        console.log(utm_source, utm_medium, utm_campaign, utm_term);
    }

    addEvents() {
        this.showMeInfo();
    }
}

export default IncludeSourceInForm;