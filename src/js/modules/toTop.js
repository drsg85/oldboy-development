import SmoothScroll from './SmoothScroll';

class ToTop {
    constructor() {
        this.btn = document.querySelector('.up-button');
        this.target = document.body;
        this.btn.style.opacity = '0';
        this.btn.style.pointerEvents = 'none';
        this.addEvents();
    }

    addEvents() {
        const smoothUp = new SmoothScroll({
            trigger: this.btn,
            target: this.target
        });

        document.addEventListener('scroll', () => {
            /**
            |--------------------------------------------------
            | window.scrollY - динамичный скролл от верха страницы (при скролле увеличивается)
            window.innerHeight - статичная высота окна браузера
            |--------------------------------------------------
            */
            if(window.scrollY > window.innerHeight) {
              this.btn.style.opacity = '1';
              this.btn.style.pointerEvents = 'auto';
            } else {
              this.btn.style.opacity = '0';
              this.btn.style.pointerEvents = 'none';
            }
        })
    }
}

export default ToTop;