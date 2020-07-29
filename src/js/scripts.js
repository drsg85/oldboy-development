'use strict';
import MobileMenu from './modules/MobileMenu';
import LocationSelector from './modules/LocationSelector';
import LocationSearch from './modules/LocationSearch';
import LanguageSelector from './modules/LanguageSelector';
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';
import LocationLogo from './modules/LocationLogo';
import MenuScale from './modules/MenuScale';
//import GeolocationControl from './modules/GeolocationControl';
//import IpInfo from './modules/IpInfo';
import CheckerLengthOfInputValue from './modules/checerLengthOfInputValue';
import TabSwitcher from './modules/tabSwitcher';
import ExclusiveCities from './modules/exclusiveCities';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';
import Feedback from './modules/Feedback';

import SmoothOnAnchorsHorizontal from './modules/smoothOnAnchorsHorizontal';
import HorizontalScroll from './modules/horizontalScroll';
import GoToElement from './modules/GoToElement';
import FetchMasters from './modules/fetchMasters';
import SortBranches from './modules/SortBranches';
import BranchPopup from './modules/BranchPopup';
import BranchHelper from './modules/BranchHelper';
import BranchModal from './modules/BranchModal'
import Swiper from './modules/Swiper';
import BarberSwitcher from './modules/barberSwitcher';
import VoiceSearch from './modules/voiceSearch';
import IncludeSourceInForm from './modules/includeSourceInForm';
const mobileMenu = new MobileMenu();
const locationSelector = new LocationSelector();
const locationSearch = new LocationSearch({
    selector: '.location-selector',
    parent: '.location-selector'
});
const locationSearchMoscow = new LocationSearch({
    selector: '.branch-section__content',
    parent: '.hero__caption',
});
const langSelector = new LanguageSelector();
const locationLogo = new LocationLogo();
const menuScale = new MenuScale();
const feedback = new Feedback();
//const geolocationControl = new GeolocationControl();
//const ipInfo = new IpInfo();
const checkerLengthOfInputValue = new CheckerLengthOfInputValue();

new ToTop();

new TabSwitcher({
    tabs: '.price-list__btn',
    elToOpen: '.price-list__container'
});

new ExclusiveCities();

if(document.querySelector('.new-format__slider-wrap')) {
    const newFormatSlider = new tns({
        mode: 'carousel',
        container: '.new-format__slider',
        mouseDrag: true,
        nav: true,
        navContainer: '.new-format__slider-dots',
        controls: false,
        navPosition: 'bottom',
        items: 1,
    })
}

if(document.querySelector('.in-countries__slider-container')) {
    const newFormatSlider = new tns({
        mode: 'carousel',
        container: '.in-countries__slider',
        slideBy: 1,
        loop: false,
        mouseDrag: false,
        // gutter: 5,
        nav: false,
        controls: true,
        controlsContainer: '.in-countries__slider-controls',
        navPosition: 'bottom',
        items: 1,
        responsive: {
            700: {
                items: 2
            },
            
            1200: {
                items: 3
            }
        }
    });
    
    // lightGallery(document.getElementById('in-countries__slider-item-first'));
    // lightGallery(document.getElementById('in-countries__slider-item-second'));
    // lightGallery(document.getElementById('in-countries__slider-item-third'));
    // lightGallery(document.getElementById('in-countries__slider-item-fourth'));
    // lightGallery(document.getElementById('in-countries__slider-item-fifth'));
}

if(document.querySelector('.stars__slider-container')) {
    const starsSlider = new tns({
        mode: 'carousel',
        container: '.stars__slider',
        slideBy: 1,
        mouseDrag: true,
        nav: false,
        lazyload: true,
        lazyloadSelector: '.stars__slider-img',
        loop: false,
        controls: true,
        controlsContainer: '.stars__slider-controls',
        navPosition: 'bottom',
        items: 1,
        responsive: {

            700: {
                items: 2,
                slideBy: 2,
                gutter: 20
            },

            1000: {
                fixedWidth: 360,
                gutter: 40
            },
            
            1200: {
                items: 3,
                slideBy: 3,
            }
        }
    });
}

if(document.querySelector('.photo-gallery__slider-container')) {
    const newFormatSlider = new tns({
        mode: 'carousel',
        container: '.photo-gallery__slider',
        slideBy: 'page',
        loop: false,
        mouseDrag: false,
        gutter: 0,
        nav: false,
        controls: true,
        controlsContainer: '.photo-gallery__slider-controls',
        navPosition: 'bottom',
        items: 1
    });
    
    lightGallery(document.getElementById('photo-gallery__slider-item-first'));
    lightGallery(document.getElementById('photo-gallery__slider-item-second'));
    lightGallery(document.getElementById('photo-gallery__slider-item-third'));
    lightGallery(document.getElementById('photo-gallery__slider-item-fourth'));
    lightGallery(document.getElementById('photo-gallery__slider-item-fifth'));
    lightGallery(document.getElementById('photo-gallery__slider-item-sixth'));
    lightGallery(document.getElementById('photo-gallery__slider-item-seventh'));
    lightGallery(document.getElementById('photo-gallery__slider-item-eight'));
    lightGallery(document.getElementById('photo-gallery__slider-item-ninth'));
    lightGallery(document.getElementById('photo-gallery__slider-item-ten'));
    lightGallery(document.getElementById('photo-gallery__slider-item-eleventh'));
    lightGallery(document.getElementById('photo-gallery__slider-item-twelve'));
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

//new GoToElement();

// window.addEventListener('load', function() {
//     const yID = window.yClientsId;
//     new FetchMasters({
//         yclientsId: yID
//     });
// })

new SmoothOnAnchors();

if(document.querySelector('.location-selector')) {
    new SortBranches();
}

if(document.querySelector('.branch-popup')) {
    new BranchPopup();
}

if(window.innerWidth >= 1199) {
    if(document.querySelector('.branch-helper')) {
        new BranchHelper();
    }
}

if(window.innerWidth < 1199) {
    if(document.querySelector('.branch-helper')) {
        new Swiper({
            target: '.branch-helper',
            classToSwitch: 'branch-helper--visible'
        })
    }
}

if(document.querySelector('#bgList')) {
    new BarberSwitcher();
}

if(document.querySelector('.city-form__mic')) {
    new VoiceSearch();
}

new IncludeSourceInForm();