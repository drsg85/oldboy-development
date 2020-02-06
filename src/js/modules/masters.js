import Feedback from "./Feedback";


class Yclients {
    constructor() {
        this.api = 'd8m22a27wuwur3yfa474';
        this.userToken = 'e4ebbf9631720ce1587b310af7f90ce5';
        this.companyId = '31799';
        this.staff_id = '631239';
        this.urlForComments = `https://api.yclients.com/api/v1/comments/${this.companyId}`;
        this.urlForMasters = `https://api.yclients.com/api/v1/staff/${this.companyId}`;
        this.masters = document.querySelector('.team__content');
        this.addEvents();
    }

    auth() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.yclients.com/api/v1/auth');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `${this.api}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
            }
        }
        const body = {
            'login': '79814536555',
            'password': 'Dddkoenig107107107Ddd'
        };
        xhr.send(JSON.stringify(body));
    }

    createFragment() {
            const item = document.createElement('article'),
            itemHeader = document.createElement('header'),
            photoContainer = document.createElement('div'),
            itemName = document.createElement('h3'),
            spec = document.createElement('span'),
            btn = document.createElement('button'),
            img = document.createElement('img'),
            rating = document.createElement('p'),
            comments = document.createElement('ul');
            item.classList.add('member');
            itemHeader.classList.add('member__header');
            itemName.classList.add('member__name');
            spec.classList.add('member__position');
            rating.classList.add('member__rating');
            btn.classList.add('member__feedback');
            btn.textContent = 'Отзывы';
            itemHeader.appendChild(spec);
            itemHeader.appendChild(itemName);
            photoContainer.classList.add('member__photo');
            photoContainer.appendChild(img);
            item.dataset.id = 'id';
            item.appendChild(itemHeader);
            item.appendChild(photoContainer);
            item.appendChild(btn);
            item.appendChild(rating);
            return item;
    }

    addMasters() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlForMasters);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `${this.api}, ${this.userToken}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                let item = this.createFragment();
                data.map((el) => {
                    console.log(typeof el.hidden);
                    if(el.hidden == 0) {
                        let cloned = item.cloneNode(true),
                            img = cloned.querySelector('img'),
                            rating = cloned.querySelector('.member__rating'),
                            spec = cloned.querySelector('.member__position'),
                            itemName = cloned.querySelector('.member__name');
                        cloned.dataset.id = el.id;
                        itemName.textContent = el.name;
                        img.src = el.avatar_big;
                        rating.textContent = el.rating;
                        spec.textContent = el.specialization
                        this.masters.appendChild(cloned);
                    }
                    else {
                        return;
                    }
                });
                new Feedback();
            }
        }
        xhr.send();
    }

    addComments() {
        const xhr = new XMLHttpRequest();
            xhr.open('GET', this.urlForComments);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `${this.api}, ${this.userToken}`);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    const data = JSON.parse(xhr.responseText);
                    const masters = [...document.querySelectorAll('.master-item')];
                    masters.map((el) => {
                        const masterId = el.dataset.id;
                        const ul = el.querySelector('ul');
                        data.map((el) => {
                            if(el.master_id == masterId) {
                                const comment = document.createElement('li');
                                const commentText = document.createElement('p');
                                comment.appendChild(commentText);
                                commentText.textContent = el.text;
                                const clonedComment = comment.cloneNode(true);
                                ul.appendChild(clonedComment);
                            }
                        })
                    })

                }
            }
        xhr.send();
    }

    addEvents() {
        this.addMasters();
        this.addComments();
    }
}

export default Yclients;