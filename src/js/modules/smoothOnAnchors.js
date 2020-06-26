import Jump from 'jump.js'
class SmoothOnAnchors {
    constructor() {
        this.anchors = [...document.querySelectorAll('.smooth-trigger')];
        if(this.anchors) {
            this.addEvents();
        }
    }

    scrolling(evt) {
        const target = evt.target.href.split('#')[1];
        Jump(`#${target}`);
    }

    addEvents() {
        this.anchors.map((trigger) => trigger.addEventListener('click', (event) => this.scrolling(event)))
    }
}

export default SmoothOnAnchors;