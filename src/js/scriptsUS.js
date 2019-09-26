'use strict';
import MobileMenu from './modules/MobileMenu';
import LanguageSelector from './modules/LanguageSelector';
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';

const mobileMenu = new MobileMenu();
const langSelector = new LanguageSelector();

new ToTop();

new SmoothOnAnchors();