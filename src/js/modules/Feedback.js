class Feedback {
    constructor () {
        this.feedback = document.querySelector('.feedback__container');
        this.openFeedbackButton = document.querySelector('.member__feedback');
        this.closeFeedbackButton = document.querySelector('.feedback__close-button');

        this.addEvent();
    }

    addEvent() {
        this.openFeedbackButton.addEventListener('click', () => {
            this.feedback.classList.add('feedback__container--show');
            this.closeFeedbackButton.classList.add('feedback__close-button--show');

        });

        if (this.feedback.classList.contains('feedback__container')) {
            console.log('test');
            document.addEventListener('click', (event) => {
                if (event.target.closest('feedback__container')) return;
                this.feedback.classList.remove('feedback__container--show');
            });
        }

        this.closeFeedbackButton.addEventListener('click', () => {
            this.feedback.classList.remove('feedback__container--show');
            this.closeFeedbackButton.classList.remove('feedback__close-button--show');
        });

        document.addEventListener('keydown', (evt) => {
            if (evt.keyCode === 27) {
                this.feedback.classList.remove('feedback__container--show');
                this.closeFeedbackButton.classList.remove('feedback__close-button--show');
            }
        });

        
    }
}

export default Feedback;