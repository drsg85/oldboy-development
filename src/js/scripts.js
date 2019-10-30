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

