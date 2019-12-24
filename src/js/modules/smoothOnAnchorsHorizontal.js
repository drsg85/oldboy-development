class SmoothOnAnchorsHorizontal {
    constructor(obj) {
        this.alphabet = document.querySelector('.location-selector__alphabet');
        this.containerTarget = document.querySelector('.branch-addresses__container');
        this.btns = [...this.alphabet.querySelectorAll(obj.triggers)];
        this.target = this.containerTarget.querySelectorAll(obj.targets);
        this.addEvents();
    }

    ease(t) {
        return t;
    }

    scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset) {
        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = this.ease(progress);
        progress = Math.min(progress, 1);
        this.containerTarget.scrollLeft = (scrollEndElemTop * ease + (startScrollOffset - scrollEndElemTop)) - 200;

        if(runtime < duration){
        requestAnimationFrame(() => {
            const stamp = new Date().getTime();
            this.scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        })
        }
    }

    scrolling(evt, target) {
        evt.preventDefault();
        const scrollEndElem = document.querySelector(`#${target}`);
        const anim = requestAnimationFrame(() => {
            const stamp = new Date().getTime();
            const duration = 500;
            const start = stamp;
            const startScrollOffset = scrollEndElem.offsetLeft;
            
            const scrollEndElemTop = scrollEndElem.getBoundingClientRect().left;
        this.scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        });
    }

    addEvents() {
        this.btns.map((el) => el.addEventListener('click', (event) => {
            const reg = /.*(#)/g;
            const href = el.href.match(reg)[0];
            const correct = el.href.replace(href, '');
            this.scrolling(event, correct);
        }))
    }
}

export default SmoothOnAnchorsHorizontal;