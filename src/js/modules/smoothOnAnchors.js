import SmoothScroll from './SmoothScroll';

class SmoothOnAnchors {
    constructor() {
        this.anchors = [...document.querySelectorAll('.smooth-trigger')];
        if(this.anchors) {
            this.addEvents();
        }
    }

    addEvents() {
        this.anchors.map((el) => {
            const target = el.href.split('#')[1];
            const smoothScroll = new SmoothScroll({
                trigger: el,
                target: document.querySelector(`#${target}`)
            })
        })
    }
}

export default SmoothOnAnchors;