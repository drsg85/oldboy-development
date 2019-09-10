class UpButton {
  constructor() {
    this.btn = document.querySelector('.up-button');

    if (this.btn) {
      this.btn.style.opacity = '0';
      this.btn.style.pointerEvents = 'none';
      this.addEvents();
    }
  }

  ease(t) {
    return t;
  }

  scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset) {
    const runtime = stamp - start;
    let progress = runtime / duration;
    const ease = this.ease(progress);
    progress = Math.min(progress, 1);
    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

    if(runtime < duration){
    requestAnimationFrame(() => {
        const stamp = new Date().getTime();
        this.scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    })
    }
  }

  scrolling() {
    const scrollEndElem = document.body;
    const anim = requestAnimationFrame(() => {
    const stamp = new Date().getTime();
    const duration = 500;
    const start = stamp;
    const startScrollOffset = window.pageYOffset;

    const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
    this.scrollToTop(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    });
  }

  addEvents() {
    this.btn.addEventListener('click', () => this.scrolling());

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

export default UpButton;
