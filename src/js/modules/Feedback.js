class Feedback {
    constructor () {
        this.feedback = document.querySelector('.feedback');
        this.openFeedbackButton = document.querySelectorAll('.member__review');
        this.closeFeedbackButton = document.querySelector('.feedback__close-button');

        this.addEvent();
    }
    
    addEvent() {
        for (let i = 0; i < this.openFeedbackButton.length; i++) {
            let openButton = this.openFeedbackButton[i];

        /* openButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this.feedback.classList.add('feedback--show');
            this.closeFeedbackButton.classList.add('feedback__close-button--show');
            document.documentElement.style.overflow = 'hidden';
        }); */

        this.closeFeedbackButton.addEventListener('click', () => {
            this.feedback.classList.remove('feedback--show');
            this.closeFeedbackButton.classList.remove('feedback__close-button--show');
            document.documentElement.style.overflow = 'auto';
        });

        document.addEventListener('keydown', (evt) => {
            if (evt.keyCode === 27) {
                this.feedback.classList.remove('feedback--show');
                this.closeFeedbackButton.classList.remove('feedback__close-button--show');
                document.documentElement.style.overflow = 'auto';
            }
        });

        this.openSpace = function () {
                if (event.target.closest('feedback__container')) return;
                this.feedback.classList.remove('feedback--show');
                document.documentElement.style.overflow = 'auto';
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