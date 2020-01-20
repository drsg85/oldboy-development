class SmoothOnAnchorsHorizontal {
    constructor(obj) {
        this.alphabet = document.querySelector('.location-selector__alphabet');
        this.containerTarget = document.querySelector('.branch-addresses__container');
        
        if(this.alphabet && this.containerTarget) {
            this.btns = [...this.alphabet.querySelectorAll(obj.triggers)];
            this.target = this.containerTarget.querySelectorAll(obj.targets);
            this.addEvents();
        }
    }

    ease(t) {
        return t;
    }

    scrollToLeft(start, stamp, duration, scrollEndElemLeft, startScrollOffset, widthOfEl) {
        const runtime = stamp - start;
        let progress = runtime / duration;
        const ease = this.ease(progress);
        progress = Math.min(progress, 1);
        this.containerTarget.scrollLeft = (scrollEndElemLeft * ease + (startScrollOffset - scrollEndElemLeft)) - widthOfEl;

        if(runtime < duration){
        requestAnimationFrame(() => {
            const stamp = new Date().getTime();
            this.scrollToLeft(start, stamp, duration, scrollEndElemLeft, startScrollOffset, widthOfEl);
        })
        }
    }

    scrolling(evt, target) {
        evt.preventDefault();
        const scrollEndElem = document.querySelector(`#${target}`);
        let widthOfTargetEl;
        if(scrollEndElem !== null) {
            widthOfTargetEl = scrollEndElem.parentElement.offsetWidth;
            const anim = requestAnimationFrame(() => {
                const stamp = new Date().getTime();
                const duration = 500;
                const start = stamp;
                const startScrollOffset = scrollEndElem.offsetLeft;
                
                const scrollEndElemLeft = scrollEndElem.getBoundingClientRect().left;
            this.scrollToLeft(start, stamp, duration, scrollEndElemLeft, startScrollOffset, widthOfTargetEl);
            });
        }
        
        else {
            console.log(scrollEndElem);
        }
    }

    

    addEvents() {
        this.btns.map((el) => {
            const reg = /.*(#)/g;
            const href = el.href.match(reg)[0];
            const correct = el.href.replace(href, '');

            if(document.querySelector(`#${correct}`) === null) {
                el.style.color = '#cccccc';
                el.style.pointerEvents = 'none';
            }
        })
        this.btns.map((el) => el.addEventListener('click', (event) => {
            const reg = /.*(#)/g;
            const href = el.href.match(reg)[0];
            const correct = el.href.replace(href, '');
            this.scrolling(event, correct);
        }))
    }
}

export default SmoothOnAnchorsHorizontal;