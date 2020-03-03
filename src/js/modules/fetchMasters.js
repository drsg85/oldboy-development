class FetchMasters {
    constructor() {
        this.api = 'd8m22a27wuwur3yfa474';
        this.userToken = 'e4ebbf9631720ce1587b310af7f90ce5';
        this.companyId = '34064';
        this.staff_id = '631239';
        this.urlForComments = `https://api.yclients.com/api/v1/comments/${this.companyId}`;
        this.urlForMasters = `https://api.yclients.com/api/v1/staff/${this.companyId}`;
        this.masters = document.querySelector('.team__content');
        this.feedback = document.querySelector('.feedback');
        this.openFeedbackButton = document.querySelectorAll('.member__review');
        this.closeFeedbackButton = document.querySelectorAll('.feedback__close-button');
        this.data;
        this.copyresult;
        this.resultData = [];
        this.resD = [];
        this.counter = 5;
        this.addEvents();
    }

    findParent(el, cls) {
        while((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }

    auth() {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.yclients.com/api/v1/auth');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `${this.api}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                const data = JSON.parse(xhr.responseText);
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
                console.log(data);
                const item = document.createElement('article');
                item.classList.add('member')

                const top = document.createElement('div');
                top.classList.add('member__top');

                const header = document.createElement('header');
                header.classList.add('member__header');

                const dataWrap = document.createElement('div');
                dataWrap.classList.add('member__data');

                const name = document.createElement('h3');
                name.classList.add('member__name');

                const spec = document.createElement('p');
                spec.classList.add('member__position');

                dataWrap.appendChild(name);
                dataWrap.insertBefore(spec, name);

                const ratingWrap = document.createElement('div');
                ratingWrap.classList.add('member__rating');

                const rating = document.createElement('p');
                rating.classList.add('member__count');
                
                const addComments = document.createElement('a');
                addComments.href = "#";
                addComments.classList.add('member__review');
                addComments.textContent = 'Отзывы';

                ratingWrap.appendChild(rating);
                ratingWrap.appendChild(addComments);

                header.appendChild(dataWrap);
                header.appendChild(ratingWrap);
                
                const imgWrap = document.createElement('div');
                const img = document.createElement('img');
                imgWrap.classList.add('member__photo');

                const feedback = document.createElement('div');
                feedback.classList.add('feedback');

                const feedbackContainer = document.createElement('div');
                feedbackContainer.classList.add('feedback__container');

                const feedbackHeader = document.createElement('header');
                feedbackHeader.classList.add('feedback__header');

                const feedbackInfo = document.createElement('div');
                feedbackInfo.classList.add('feedback__info');

                const feedbackTitle = document.createElement('p');
                feedbackTitle.classList.add('feedback__title');
                feedbackTitle.textContent = 'Отзывы наших клиентов';

                const feedbackSubtitle = document.createElement('p');
                feedbackSubtitle.classList.add('feedback__desc');
                feedbackSubtitle.textContent = 'Об услугах барберов';

                feedbackInfo.appendChild(feedbackTitle);
                feedbackInfo.appendChild(feedbackSubtitle);


                const feedbackSumm = document.createElement('div');
                feedbackSumm.classList.add('feedback__summary');

                const feedbackCount = document.createElement('div');
                feedbackCount.classList.add('feedback__count');

                const feedbackRes = document.createElement('div');
                feedbackRes.classList.add('feedback__result');

                feedbackSumm.appendChild(feedbackCount);
                feedbackSumm.appendChild(feedbackRes);


                feedbackHeader.appendChild(feedbackInfo);
                feedbackHeader.appendChild(feedbackSumm);

                const feedbackContent = document.createElement('ul');
                feedbackContent.classList.add('feedback__content');
                feedbackContent.dataset.someId = item.dataset.id;
                const feedbacMore = document.createElement('button');
                feedbacMore.classList.add('feedback__more');
                feedbacMore.textContent = 'Показать еще отзывы';

                feedbackContainer.appendChild(feedbackHeader);
                feedbackContainer.appendChild(feedbackContent);
                feedbackContainer.appendChild(feedbacMore);

                const feedbackClose = document.createElement('button');
                feedbackClose.classList.add('feedback__close-button');

                feedback.appendChild(feedbackContainer);
                feedback.appendChild(feedbackClose);

                imgWrap.appendChild(img)

                item.appendChild(top);
                item.appendChild(header);
                item.appendChild(imgWrap);
                item.appendChild(feedback);
                item.dataset.id = 'id';

                data.map((el) => {
                    item.dataset.id = el.id;
                    img.src = el.avatar;
                    name.textContent = el.name;
                    rating.textContent = el.rating;
                    spec.textContent = el.specialization;
                    let cloned = item.cloneNode(true);
                    if(el.hidden == 0) {
                        cloned.dataset.id = el.id;
                        img.src = el.avatar;
                        name.textContent = el.name;
                        rating.textContent = el.rating;
                        spec.textContent = el.specialization;
                        this.masters.appendChild(cloned);
                    }
                });
                const popupTriggers = [...document.querySelectorAll('.member__review')];
                popupTriggers.map((el) => el.addEventListener('click', (event) => {
                    event.preventDefault();
                    const parentOfCurrentTrigger = this.findParent(el, 'member');
                    const feedback = parentOfCurrentTrigger.querySelector('.feedback');
                    const closeFeedbackButton = parentOfCurrentTrigger.querySelector('.feedback__close-button');
                    feedback.classList.add('feedback--show');
                    closeFeedbackButton.classList.add('feedback__close-button--show');
                    document.documentElement.style.overflow = 'hidden';
                }))

                const feedbacks = document.querySelectorAll('.feedback__close-button');
                feedbacks.forEach((el) => el.addEventListener('click', () => {
                    el.parentElement.classList.remove('feedback--show');
                    document.documentElement.style.overflow = 'auto';
                }))
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
                    this.data = data;
                    const triggers = [...document.querySelectorAll('.feedback__more')];
                    const popupTriggers = [...document.querySelectorAll('.member__review')];
                    this.copyresult = triggers.map((el) => {
                        const parentOfCurrentTrigger = this.findParent(el, 'member');
                        const masterId = parentOfCurrentTrigger.dataset.id;
                        const result = this.data.filter((el) => el.master_id === masterId);
                        return result;
                    });
                    popupTriggers.map((el) => {
                        const parentOfCurrentTrigger = this.findParent(el, 'member');
                        const ul = parentOfCurrentTrigger.querySelector('.feedback__content');
                        this.copyresult.map((elComment) => {
                            elComment.map((el) => {
                                this.resultData.push(el.text);
                            })
                        });
                        this.resD = this.resultData.splice(0,5);
                        this.resD = this.resD.flat();
                        this.counter+=5;
                        if(this.counter >= this.copyresult.length) {
                            el.style.display = 'none';
                            this.counter = 0;
                        }
                        this.resD.map((el) => {
                            const comment = document.createElement('li');
                            comment.classList.add('feedback__item')
                            const commentText = document.createElement('p');
                            commentText.classList.add('feedback__text');
                            comment.appendChild(commentText);
                            commentText.textContent = el;
                            const clonedComment = comment.cloneNode(true);
                            ul.appendChild(clonedComment);
                        })
                    })

                    triggers.map((el) => el.addEventListener('click', () => {
                        
                        const parentOfCurrentTrigger = this.findParent(el, 'member');
                        const ul = parentOfCurrentTrigger.querySelector('.feedback__content');
                        this.copyresult.map((elComment) => {
                            elComment.map((el) => {
                                this.resultData.push(el.text);
                            })
                        });
                        this.resD = this.resultData.splice(0,5);
                        this.resD = this.resD.flat();
                        this.counter+=5;
                        if(this.counter >= this.copyresult.length) {
                            el.style.display = 'none';
                            this.counter = 0;
                        }
                        this.resD.map((el) => {
                            const comment = document.createElement('li');
                            comment.classList.add('feedback__item')
                            const commentText = document.createElement('p');
                            commentText.classList.add('feedback__text');
                            comment.appendChild(commentText);
                            commentText.textContent = el;
                            const clonedComment = comment.cloneNode(true);
                            ul.appendChild(clonedComment);
                        })
                    }));
                }
            }
        xhr.send();
        
    }

    addEvents() {
        this.addComments();
        this.addMasters();
    }
}

export default FetchMasters;