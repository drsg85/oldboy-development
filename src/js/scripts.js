'use strict';
import MobileMenu from './modules/MobileMenu';
import LocationSelector from './modules/LocationSelector';
import LocationSearch from './modules/LocationSearch';
import UpButton from './modules/UpButton';
// import smoothscroll from 'smoothscroll-polyfill';
import LanguageSelector from './modules/LanguageSelector';


const mobileMenu = new MobileMenu();
const locationSelector = new LocationSelector();
const locationSearch = new LocationSearch();
const upButton = new UpButton();
// smoothscroll.polyfill();
// window.__forceSmoothScrollPolyfill__ = true;
const langSelector = new LanguageSelector();


