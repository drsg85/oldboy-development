class BarberSwitcher {
    constructor() {
        this.template = document.querySelector('#bgList');
        this.decoContainer = document.querySelector('.hero__deco');
        this.addEvents()
    }
    
    addEvents() {
        const highImages = this.template.content.querySelectorAll('div[data-img]');
        const highImagesPath = [];
        const middleImagesPath = [];
        const lowImagesPath = [];

        highImages.forEach((img) => {
            highImagesPath.push(img.dataset.img);
            lowImagesPath.push(img.dataset.imgMobile);
            middleImagesPath.push(img.dataset.imgTablet);
        });

        const randomed = Math.floor(Math.random() * ((highImagesPath.length - 1) - 0 + 1)) + 0;
        const currentImagePathHeigh = highImagesPath[randomed];
        const currentImagePathMiddle = middleImagesPath[randomed];
        const currentImagePathLow = lowImagesPath[randomed];

        const picture = this.decoContainer.querySelector('picture');
        const sources = picture.querySelectorAll('source');
        const img = picture.querySelector('img')
        sources[0].media = '(min-width:320px)';
        sources[0].srcset = currentImagePathLow;
        sources[1].media = '(min-width:600px)';
        sources[1].srcset = currentImagePathMiddle;
        sources[2].media = '(min-width:1200px)';
        sources[2].srcset = currentImagePathHeigh;
        img.src = currentImagePathMiddle;
    }
}

export default BarberSwitcher