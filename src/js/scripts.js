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

const mobileMenu = new MobileMenu();
const locationSelector = new LocationSelector();
const locationSearch = new LocationSearch();
const langSelector = new LanguageSelector();
const locationLogo = new LocationLogo();
const menuScale = new MenuScale();
//const geolocationControl = new GeolocationControl();
//const ipInfo = new IpInfo();
const checkerLengthOfInputValue = new CheckerLengthOfInputValue();

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
        loop: false,
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
        slideBy: 1,
        mouseDrag: true,
        nav: false,
        
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
    lightGallery(document.getElementById('photo-gallery__slider-item-six'));
    lightGallery(document.getElementById('photo-gallery__slider-item-seven'));
    lightGallery(document.getElementById('photo-gallery__slider-item-eight'));
}

