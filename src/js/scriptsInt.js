'use strict';
import MobileMenu from './modules/MobileMenu';
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';
import LocationSelector from './modules/LocationSelector';
import BarberSwitcher from './modules/barberSwitcher';
import LanguageSelector from './modules/LanguageSelector';
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';

const mobileMenu = new MobileMenu();

const toTop = new ToTop();

const smoothOnAnchors = new SmoothOnAnchors();

const locationSelector = new LocationSelector();

const langSelector = new LanguageSelector();

if(document.querySelector('#bgList')) {
    new BarberSwitcher();
}

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
