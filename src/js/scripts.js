'use strict';
import MobileMenu from './modules/MobileMenu';
import LocationSelector from './modules/LocationSelector';
import LocationSearch from './modules/LocationSearch';
import LanguageSelector from './modules/LanguageSelector';
<<<<<<< HEAD
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';
=======
import LocationLogo from './modules/LocationLogo';

>>>>>>> fc9b7b022d422273f7cac13882cd88576400ce05

const mobileMenu = new MobileMenu();
const locationSelector = new LocationSelector();
const locationSearch = new LocationSearch();
const langSelector = new LanguageSelector();
const locationLogo = new LocationLogo();

new ToTop();

new SmoothOnAnchors();

