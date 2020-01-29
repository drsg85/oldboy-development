class Feedback {
    constructor () {
        this.feedback = document.querySelector('.feedback');
        this.openFeedbackButton = document.querySelectorAll('.member__feedback');
        this.closeFeedbackButton = document.querySelector('.feedback__close-button');

        this.addEvent();
    }
    
    addEvent() {
        for (let i = 0; i < this.openFeedbackButton.length; i++) {
            let openButton = this.openFeedbackButton[i];

        openButton.addEventListener('click', () => {
            this.feedback.classList.add('feedback--show');
            this.closeFeedbackButton.classList.add('feedback__close-button--show');
        });

        this.closeFeedbackButton.addEventListener('click', () => {
            this.feedback.classList.remove('feedback--show');
            this.closeFeedbackButton.classList.remove('feedback__close-button--show');
        });

        document.addEventListener('keydown', (evt) => {
            if (evt.keyCode === 27) {
                this.feedback.classList.remove('feedback--show');
                this.closeFeedbackButton.classList.remove('feedback__close-button--show');
            }
        });

        this.openSpace = function () {
                if (event.target.closest('feedback__container')) return;
                this.feedback.classList.remove('feedback--show');
        }

        document.addEventListener('click', (event) => {
            if (event.target !== openButton && event.target.classList.contains('feedback')) {
            this.openSpace();
        }
        });
    }
    }
}

export default Feedback;