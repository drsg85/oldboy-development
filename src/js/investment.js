import MobileMenu from './modules/MobileMenu';
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';
import LocationLogo from './modules/LocationLogo';
import LocationSearch from './modules/LocationSearch';
import LocationSelector from './modules/LocationSelector';
import PopUp from './modules/PopUp';
import MaskTel from './modules/MaskTel';
import SortBranches from './modules/SortBranches';
import SmoothOnAnchorsHorizontal from './modules/smoothOnAnchorsHorizontal';
import HorizontalScroll from './modules/horizontalScroll';
import GoToElement from './modules/GoToElement';
import InvestCardForm from './modules/InvestCardForm';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';

const mobileMenu = new MobileMenu();

const locationSelector = new LocationSelector();

const locationSearch = new LocationSearch({
    selector: '.location-selector',
    parent: '.location-selector',
    list: '.location-list',
    listItem: '.location-list__item'
});
const locationSearchMoscow = new LocationSearch({
    selector: '.branch-section__content',
    parent: '.hero__caption',
    list: '.location-catalog',
    listItem: '.location-catalog__item'
});

const locationLogo = new LocationLogo();

new ToTop();

new SmoothOnAnchors();

const popUp = new PopUp();

const inputMask = new MaskTel();

import VoiceSearch from './modules/voiceSearch';

if(document.querySelector('.profit__offers')) {
    const investCardForm = new InvestCardForm({
        formParent: 'offers-card__item' 
    });
}

if(document.querySelector('.profit__international-content')) {
    const investCardForm = new InvestCardForm({
        formParent: 'profit-item'
    })
}

function checkWindowWidth() {
    if(window.innerWidth < 700) {
        const anchors = [...document.querySelectorAll('.alphabet__trigger')];
        anchors.map((el) => {
            const reg = /.*(#)/g;
            const href = el.href.match(reg)[0];
            const correct = el.href.replace(href, '');
            
            if(document.querySelector(`#${correct}`) === null) {
                el.style.color = '#cccccc';
                el.style.pointerEvents = 'none';
            }
        })
    }
    else {
        new SmoothOnAnchorsHorizontal({
            triggers: '.alphabet__trigger',
            targets: '.smooth-target'
        });
    }
};

checkWindowWidth();

function debounceOnResize(func) {
    let timer;
    return function (event) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, 1000, event);
    };
};

window.addEventListener('resize', () => debounceOnResize(checkWindowWidth()));

new HorizontalScroll();

new GoToElement();

if(document.querySelector('.location-selector')) {
    new SortBranches();
}

if(document.querySelector('.city-form__mic')) {
    new VoiceSearch();
}

if(document.querySelector('.investors-comments')) {
    const newFormatSlider = new tns({
        mode: 'carousel',
        container: '.investors-comments__slider',
        mouseDrag: true,
        nav: false,
        controls: true,
        controlsContainer: '.investors-comment__nav',
        items: 1,
    })
}