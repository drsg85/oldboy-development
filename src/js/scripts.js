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

if(document.querySelector('.stars__slider-container')) {
    const newFormatSlider = new tns({
        mode: 'carousel',
        container: '.stars__slider',
        slideBy: 'page',
        mouseDrag: false,
        gutter: 10,
        nav: false,
        controls: true,
        controlsContainer: '.stars__slider-controls',
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
    
    lightGallery(document.getElementById('stars__slider-item-first'));
    lightGallery(document.getElementById('stars__slider-item-second'));
    lightGallery(document.getElementById('stars__slider-item-third'));
    lightGallery(document.getElementById('stars__slider-item-fourth'));
    lightGallery(document.getElementById('stars__slider-item-fifth'));
}

new SmoothOnAnchorsHorizontal({
    triggers: '.smooth-trigger',
    targets: '.smooth-target'
});

new HorizontalScroll();