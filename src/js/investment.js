import MobileMenu from './modules/MobileMenu';
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';
import InvestCalculator from './modules/InvestCalculator';
import LocationLogo from './modules/LocationLogo';
import LocationSearch from './modules/LocationSearch';
import LocationSelector from './modules/LocationSelector';
import PopUp from './modules/PopUp';
import MaskTel from './modules/MaskTel';

const mobileMenu = new MobileMenu();

const locationSelector = new LocationSelector();

const locationSearch = new LocationSearch();

const locationLogo = new LocationLogo();

new ToTop();

new SmoothOnAnchors();

const investCalculator = new InvestCalculator();

const popUp = new PopUp();

const inputMask = new MaskTel();
