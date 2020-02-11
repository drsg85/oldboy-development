class SortBranches {
    constructor() {
        this.branches = [...document.querySelectorAll('.location-list--metro')];
        this.addEvents();
    }

    addEvents() {
        const fragment = document.createDocumentFragment();
        this.branches.map((el) => {
            const li = [...el.querySelectorAll('.location-list__item')];
            const obj = li.map((el, i) => {
                if(el.querySelector('.location-list__metro span') !== null) {
                    return {
                        metro: el.querySelector('.location-list__metro span').textContent,
                        index: i
                    }
                }
            })

            obj.sort((a, b) => {
                if(a.metro > b.metro) {
                    return 1;
                }
                if(a.metro < b.metro) {
                    return -1;
                }
                return 0;
            });
            
            const res = obj.map((el) => {
                if(el !== undefined) {
                    return li[el.index];
                }
            });
            const result = [...res];
            result.map((el) => {
                if(el !== undefined) {
                    fragment.appendChild(el);
                }
            })
            el.appendChild(fragment);
        })
    }
}

export default SortBranches;