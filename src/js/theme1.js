import { docReady } from './utils';
import detectorInit from './theme/detector';
import handleNavbarVerticalCollapsed from './theme/navbar-vertical';
import tooltipInit from './theme/tooltip';
import popoverInit from './theme/popover';
import navbarTopDropShadow from './theme/navbar-top';
import toastInit from './theme/toast';
import navbarDarkenOnScroll from './theme/navbar-darken-on-scroll';
import scrollToTop from './theme/scroll-to-top';
import navbarComboInit from './theme/navbar-combo';
import listInit from './theme/list';
import searchInit from './theme/search';
import themeControl from './theme/theme-control';
import dropdownOnHover from './theme/dropdown-on-hover';
import scrollbarInit from './theme/scrollbar';
// import 'overlayscrollbars/css/OverlayScrollbars.css';

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(detectorInit);
docReady(handleNavbarVerticalCollapsed);
docReady(tooltipInit);
docReady(popoverInit);
docReady(navbarTopDropShadow);
docReady(toastInit);
docReady(navbarDarkenOnScroll);
docReady(scrollToTop);
docReady(navbarComboInit);
docReady(listInit);
docReady(searchInit);
docReady(themeControl);
docReady(dropdownOnHover);
docReady(scrollbarInit);
