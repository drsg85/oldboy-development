import InvestForm from './modules/InvestForm';
import InvestChart from './modules/InvestChart';
import MobileMenu from './modules/MobileMenu';
import ToTop from './modules/toTop';
import SmoothOnAnchors from './modules/smoothOnAnchors';
import InvestCalculator from './modules/InvestCalculator';
import LocationSelector from './modules/LocationSelector';
import LocationSearch from './modules/LocationSearch';
import LocationLogo from './modules/LocationLogo';

const investForm = new InvestForm();

const investChart = new InvestChart();

const mobileMenu = new MobileMenu();


const locationLogo = new LocationLogo();

new ToTop();

new SmoothOnAnchors();

const investCalculator = new InvestCalculator();

const locationSelector = new LocationSelector();

const locationSearch = new LocationSearch();