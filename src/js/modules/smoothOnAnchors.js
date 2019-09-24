import SmoothScroll from './SmoothScroll';

class SmoothOnAnchors {
    constructor(obj) {
        this.anchors = [...document.querySelectorAll('.smooth-trigger')];
        this.targets = [...document.querySelectorAll('.smooth-target')];
        if(this.anchors && this.targets) {
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