class SmoothOnAnchorsHorizontal {
    constructor(obj) {
        this.alphabet = document.querySelector('.location-selector__alphabet');
        this.containerTarget = document.querySelector('.branch-addresses__container');
        this.branchAddresses = document.querySelector('.branch-addresses');
        if(this.alphabet && this.containerTarget) {
            this.btns = [...this.alphabet.querySelectorAll(obj.triggers)];
            this.target = this.containerTarget.querySelectorAll(obj.targets);
            this.addEvents();
        }
    }

    ease(t) {
        return t;
    }

    animate({timing, draw, duration}) {
        const start = performance.now();
        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if(timeFraction > 1) timeFraction = 1;
            let progress = timing(timeFraction);
            draw(progress);
            if(timeFraction < 1) requestAnimationFrame(animate);
        });
    }

    scrollToLeft(scrollEndElemLeft, startScrollOffset, widthOfEl) {
        const leftPadding = +(window.getComputedStyle(this.branchAddresses, null).getPropertyValue("padding-left").slice(0,-2));
        this.animate({
            duration: 600,
            timing: this.ease,
            draw: pct => {
                this.containerTarget.scrollLeft = (scrollEndElemLeft * pct + (startScrollOffset - scrollEndElemLeft)) - widthOfEl + leftPadding;
            }
        })
    }

    scrolling(evt, target) {
        evt.preventDefault();
        const scrollEndElem = document.querySelector(`#${target}`);
        let widthOfTargetEl;
        if(scrollEndElem !== null) {
            widthOfTargetEl = scrollEndElem.parentElement.offsetWidth;

            const anim = requestAnimationFrame(() => {
                const startScrollOffset = scrollEndElem.offsetLeft;
                const scrollEndElemLeft = scrollEndElem.getBoundingClientRect().left;
            this.scrollToLeft(scrollEndElemLeft, startScrollOffset, widthOfTargetEl);
            });
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

            this.btns.map((el) => {
                const reg = /.*(#)/g;
                const href = el.href.match(reg)[0];
                const correct = el.href.replace(href, '');
                
                if(document.querySelector(`#${correct}`) === null) {
                    el.style.color = '#cccccc';
                    el.style.pointerEvents = 'none';
                }
                else {
                    el.classList.remove('alphabet__trigger--active');
                }
            })

            el.classList.add('alphabet__trigger--active');
            
            this.scrolling(event, correct);
        }))
    }
}

export default SmoothOnAnchorsHorizontal;