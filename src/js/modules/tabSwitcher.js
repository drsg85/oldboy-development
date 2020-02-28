class TabSwitcher {
    constructor(obj) {
        this.tabs = [...document.querySelectorAll(obj.tabs)];
        this.elToOpen = [...document.querySelectorAll(obj.elToOpen)];
        this.classActive;
        if(this.tabs.length > 0) {
            this.addEvents();
        }
    }

    switchClass(element) {
        this.tabs.map((el) => el.classList.remove(this.classActive));
        element.classList.add(this.classActive);
        this.elToOpen.map((el) => {
            el.classList.remove('price-list__container--active');
            setTimeout(() => {
                el.style.display = 'none';
            }, 300);
            if(element.id == el.dataset.content) {
                el.classList.add('price-list__container--active');
                setTimeout(() => {
                    el.style.display = 'block';
                }, 300);
            }
        });
    }

    addEvents() {
        const regExp = /^\S+/;
        const tabClass = this.tabs[0].className.match(regExp)[0];
        this.classActive = `${tabClass}--active`;
        this.tabs.map((el, i) => {
            if(el.classList.contains(this.classActive)) {
                this.elToOpen.map((element) => {
                    if(el.id == element.dataset.content) {
                        element.style.display = 'block';
                        element.classList.add('price-list__container--active');
                    }
                })
            }
        })
        this.tabs.map((el) => el.addEventListener('click', () => this.switchClass(el)));
    }
}

export default TabSwitcher;