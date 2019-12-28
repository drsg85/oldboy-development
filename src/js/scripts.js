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
import SmoothOnAnchorsHorizontal from './modules/smoothOnAnchorsHorizontal';
import HorizontalScroll from './modules/horizontalScroll';
import GoToElement from './modules/GoToElement';

const mobileMenu = new MobileMenu();
const locationSelector = new LocationSelector();
const locationSearch = new LocationSearch();
const langSelector = new LanguageSelector();
const locationLogo = new LocationLogo();
const menuScale = new MenuScale();
//const geolocationControl = new GeolocationControl();
//const ipInfo = new IpInfo();
const checkerLengthOfInputValue = new CheckerLengthOfInputValue();
const goToElement = new GoToElement();

new ToTop();

new SmoothOnAnchors();

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
        slideBy: 'page',
        mouseDrag: false,
        gutter: 5,
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
    
    lightGallery(document.getElementById('in-countries__slider-item-first'));
    lightGallery(document.getElementById('in-countries__slider-item-second'));
    lightGallery(document.getElementById('in-countries__slider-item-third'));
    lightGallery(document.getElementById('in-countries__slider-item-fourth'));
    lightGallery(document.getElementById('in-countries__slider-item-fifth'));
}

if(document.querySelector('.stars__slider-container')) {
    const starsSlider = new tns({
        mode: 'carousel',
        container: '.stars__slider',
        slideBy: 'page',
        mouseDrag: true,
        nav: false,
        center: true,
        edgePadding: -45,
        controls: true,
        controlsContainer: '.stars__slider-controls',
        navPosition: 'bottom',
        items: 1,
        responsive: {
            700: {
                items: 2,
                edgePadding: 0
            },
            
            1200: {
                items: 3,
                slideBy: 3,
                gutter: 40,
            }
        }
    });
}

if(document.querySelector('.photo-gallery__slider-container')) {
    const newFormatSlider = new tns({
        mode: 'carousel',
        container: '.photo-gallery__slider',
        slideBy: 'page',
        mouseDrag: false,
        gutter: 0,
        center: true,
        edgePadding: -45,
        nav: false,
        controls: true,
        controlsContainer: '.photo-gallery__slider-controls',
        navPosition: 'bottom',
        items: 1,
        responsive: {
            1000: {
                gutter: 40
            }
        }
    });
    
    lightGallery(document.getElementById('photo-gallery__slider-item-first'));
    lightGallery(document.getElementById('photo-gallery__slider-item-second'));
    lightGallery(document.getElementById('photo-gallery__slider-item-third'));
    lightGallery(document.getElementById('photo-gallery__slider-item-fourth'));
    lightGallery(document.getElementById('photo-gallery__slider-item-fifth'));
    lightGallery(document.getElementById('photo-gallery__slider-item-six'));
    lightGallery(document.getElementById('photo-gallery__slider-item-seven'));
    lightGallery(document.getElementById('photo-gallery__slider-item-eight'));
}

new SmoothOnAnchorsHorizontal({
    triggers: '.alphabet__trigger',
    targets: '.smooth-target'
});

new HorizontalScroll();