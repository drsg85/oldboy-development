class Yclients {
    constructor() {
        this.api = 'd8m22a27wuwur3yfa474';
        this.userToken = 'e4ebbf9631720ce1587b310af7f90ce5';
        this.companyId = '34064';
        this.staff_id = '631239';
        this.urlForComments = `https://api.yclients.com/api/v1/comments/${this.companyId}`;
        this.urlForMasters = `https://api.yclients.com/api/v1/staff/${this.companyId}`;
        this.masters = document.querySelector('.masters');
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

    addMasters() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlForMasters);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `${this.api}, ${this.userToken}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                const data = JSON.parse(xhr.responseText);
                const item = document.createElement('li');
                const img = document.createElement('img');
                const rating = document.createElement('p');
                const spec = document.createElement('span');
                const comments = document.createElement('ul');
                item.classList.add('master-item');
                item.dataset.id = 'id';
                item.appendChild(img);
                item.appendChild(rating);
                item.appendChild(spec);
                item.appendChild(comments);

                data.map((el) => {
                    let cloned = item.cloneNode(true);
                    cloned.dataset.id = el.id;
                    img.src = el.avatar;
                    rating.textContent = el.rating;
                    spec.textContent = el.specialization
                    this.masters.appendChild(cloned);
                });
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
                    console.log(data);
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