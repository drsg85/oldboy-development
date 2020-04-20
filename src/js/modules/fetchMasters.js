class FetchMasters {
    constructor() {
        this.api = 'd8m22a27wuwur3yfa474';
        this.userToken = 'd3e4e1e2145d915f66261dad60fceaab';
        this.companyId = '37300';
        //this.companyId = obj.yclientsId;
        this.staff_id = '631239';
        this.ammountOfComments = 5000;
        this.urlForComments = `https://api.yclients.com/api/v1/comments/${this.companyId}&count=${this.ammountOfComments}`;
        this.urlForMasters = `https://api.yclients.com/api/v1/staff/${this.companyId}`;
        this.masters = document.querySelector('.team__content');
        this.feedback = document.querySelector('.feedback');
        this.openFeedbackButton = document.querySelectorAll('.member__review');
        this.closeFeedbackButton = document.querySelectorAll('.feedback__close-button');
        this.starsContainer = {
            1: 'feedback__stars--one',
            2: 'feedback__stars--two',
            3: 'feedback__stars--three',
            4: 'feedback__stars--four',
            5: 'feedback__stars--five'
        };
        this.data;
        this.copyresult;
        this.counter = 5;
        this.resD = [];
        this.arr = [];
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
            'password': 's3SG4df$err$%$3ggf^GDFS332'
        };
        xhr.send(JSON.stringify(body));
    }

    addPhoto() {
        const templateMasterList = document.querySelector('#templateMasterList'),
                items = [...templateMasterList.content.querySelectorAll('.staffMember')];
        const arrOfPhotosUrls = {};
        items.map((item) => {
            let itemId = item.dataset.id;
            arrOfPhotosUrls[`${itemId}`] = item.dataset.photo;
            arrOfPhotosUrls[`${itemId}-name`] = item.dataset.name;
        })
        return arrOfPhotosUrls;
    }

    addMasters() {
        if(document.querySelector('#templateMasterList')) {
            const photos = this.addPhoto();
            const xhr = new XMLHttpRequest();
            xhr.open('GET', this.urlForMasters);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `${this.api}, ${this.userToken}`);
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    const data = JSON.parse(xhr.responseText),
                        templateMaster = document.querySelector('#templateMaster'),
                        item = templateMaster.content.querySelector('.member'),
                        top = templateMaster.content.querySelector('.member__top'),
                        img = templateMaster.content.querySelector('.member__photo img'),
                        name = templateMaster.content.querySelector('.member__name'),
                        rating = templateMaster.content.querySelector('.member__count'),
                        spec = templateMaster.content.querySelector('.member__position'),
                        feedbackCountNum = templateMaster.content.querySelector('.feedback__count-num'),
                        feedbackResult = templateMaster.content.querySelector('.feedback__result');

                    data.map((el) => {
                        let ratingParsed = el.rating.toFixed(1);
                        let topBarber = el.specialization.toLowerCase();

                        if(!topBarber.indexOf('топ')) {
                            top.style.display = 'block';
                        }
                        else {
                            top.style.display = 'none';
                        }
                        const elID = el.id;
                        item.dataset.id = el.id;
                        item.dataset.commentsCount = el.comments_count;
                        img.src = photos[`${elID}`] ? photos[`${elID}`] : '';
                        img.alt = photos[`${elID}`] ? photos[`${elID}-name`] : '';
                        name.textContent = el.name;
                        rating.textContent = ratingParsed;
                        feedbackResult.textContent = ratingParsed;
                        spec.textContent = el.specialization;
                        feedbackCountNum.textContent = el.comments_count;

                        let cloned = item.cloneNode(true);

                        if(el.hidden == 0) {
                            cloned.dataset.id = el.id;
                            name.textContent = el.name;
                            rating.textContent = ratingParsed;
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
                        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
                        const body = document.body;
                        body.style.position = 'fixed';
                        body.style.top = `-${scrollY}`;
                        body.style.left = 0;
                        body.style.width = `calc(100% - 8px)`;
                    }));

                    const masters = [...document.querySelectorAll('.member')];
                    masters.map((master) => {
                        if(master.dataset.commentsCount == 0) {
                            const button = master.querySelector('.member__review');
                            const votes = master.querySelector('.member__count');
                            button.style.display = 'none';
                            votes.style.display = 'none';
                        }
                    })
                }
            }
            xhr.send();
        }
    }

    addComments() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', this.urlForComments);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `${this.api}, ${this.userToken}`);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                const data = JSON.parse(xhr.responseText),
                    templateMaster = document.querySelector('#templateComment'),
                    comment = templateMaster.content.querySelector('.feedback__item'),
                    commentAvatar = templateMaster.content.querySelector('.feedback__avatar'),
                    commentName = templateMaster.content.querySelector('.feedback__reviewer-name'),
                    commentDate = templateMaster.content.querySelector('.feedback__date'),
                    commentText = templateMaster.content.querySelector('.feedback__text'),
                    triggers = [...document.querySelectorAll('.member__review')],
                    commentStars = templateMaster.content.querySelector('.feedback__stars');
                this.data = data;

                this.copyresult = triggers.map((el) => {
                    const parentOfCurrentTrigger = this.findParent(el, 'member');
                    const masterId = parentOfCurrentTrigger.dataset.id;
                    const result = this.data.filter((el) => el.master_id == masterId);
                    return result;
                });

                const sliced = [this.copyresult.map((arr) => arr.splice(0,5))],
                    flatted = sliced.flat().flat(),
                    masters = document.querySelectorAll('.member');

                masters.forEach((master) => {
                    const ul = master.querySelector('.feedback__content');
                    flatted.map((comm) => {
                        if(master.dataset.id == comm.master_id) {
                            const avatarSrc = comm.user_avatar;
                            if(avatarSrc.indexOf('no-master') == -1) {
                                commentAvatar.src = avatarSrc;
                            }
                            else {
                                commentAvatar.src = '/sites/all/themes/oldboy8/dist/img/icons/reviewer.svg';
                            }
                            commentName.textContent = comm.user_name;
                            commentDate.textContent = comm.date;
                            commentText.textContent = comm.text;
                            commentStars.className = `feedback__stars ${this.starsContainer[comm.rating]}`;
                            const clonedComment = comment.cloneNode(true);
                            ul.appendChild(clonedComment);
                            }
                    })
                });

                const feedbacks = document.querySelectorAll('.feedback__close-button');

                feedbacks.forEach((el) => el.addEventListener('click', () => {
                    const feedbackParent = this.findParent(el, 'feedback');
                    feedbackParent.classList.remove('feedback--show');
                    const body = document.body;
                    const scrollY = body.style.top;
                    body.style.position = '';
                    body.style.top = '';
                    body.style.left = '';
                    body.style.width = '';
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                    this.counter = 5;
                    this.resD = [];
                    this.arr = [];
                }));

                document.addEventListener('keydown', (evt) => {
                    if (evt.keyCode === 27 && document.querySelector('.feedback--show')) {
                        const currentFeedback = document.querySelector('.feedback--show');
                        currentFeedback.classList.remove('feedback--show');
                        const body = document.body;
                        const scrollY = body.style.top;
                        body.style.position = '';
                        body.style.top = '';
                        body.style.left = '';
                        body.style.width = '';
                        window.scrollTo(0, parseInt(scrollY || '0') * -1);
                    }
                });

                feedbacks.forEach((feedback) => {
                    const feedbackParent = this.findParent(feedback, 'feedback');
                    document.addEventListener('keydown', (evt) => {
                        if (evt.keyCode === 27) {
                            feedbackParent.classList.remove('feedback--show');
                            document.documentElement.style.overflow = 'auto';
                        }
                    });
                })

                const moreComments = [...document.querySelectorAll('.feedback__more')];
                
                moreComments.map((btn) => btn.addEventListener('click', () => {
                    const parentOfCommentBlock = this.findParent(btn, 'member'),
                    ul = parentOfCommentBlock.querySelector('.feedback__content--more'),
                    templateMaster = document.querySelector('#templateMoreComments'),
                    comment = templateMaster.content.querySelector('.feedback__item'),
                    commentAvatar = templateMaster.content.querySelector('.feedback__avatar'),
                    commentName = templateMaster.content.querySelector('.feedback__reviewer-name'),
                    commentDate = templateMaster.content.querySelector('.feedback__date'),
                    commentText = templateMaster.content.querySelector('.feedback__text'),
                    commentStars = templateMaster.content.querySelector('.feedback__stars'),
                    masterId = parentOfCommentBlock.dataset.id,
                    flatted = this.copyresult;
                    ul.innerHTML = '';
                    flatted.map((memberArr) => {
                        memberArr.map((el) => {
                            if(masterId == el.master_id && this.counter <= memberArr.length && this.arr.length <= memberArr.length) {
                                    this.arr.push(el);
                                }
                            })
                        })
                    this.counter+=5;
                    this.resD.push((this.arr.splice(0,5)));
                    this.resD.flat().map((comm) => {
                            const avatarSrc = comm.user_avatar;
                            if(avatarSrc.indexOf('no-master') == -1) {
                                commentAvatar.src = avatarSrc;
                            }
                            else {
                                commentAvatar.src = '/sites/all/themes/oldboy8/dist/img/icons/reviewer.svg';
                            }
                            commentName.textContent = comm.user_name;
                            commentDate.textContent = comm.date;
                            commentText.textContent = comm.text;
                            commentStars.className = `feedback__stars ${this.starsContainer[comm.rating]}`;
                            const clonedComment = comment.cloneNode(true);
                            ul.appendChild(clonedComment);
                        });
                    if(this.resD.flat().length >= this.arr.length) {
                        btn.style.display = 'none';
                    }
                }))
            }
        }
        xhr.send();
    }

    checkPositionPopup() {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    }

    debounceOnScroll(func, time) {
        let timer;
        return function (event) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(func, time, event);
        };
    };

    addEvents() {
        this.auth();
        const debounced = this.debounceOnScroll(this.checkPositionPopup, 400);
        window.addEventListener('scroll', debounced);
        this.addComments();
        this.addMasters();
    }
}

export default FetchMasters;