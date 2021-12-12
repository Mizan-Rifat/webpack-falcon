import basicEchartsInit from './theme/charts/echarts/basic-echarts';
import topProductsInit from './theme/charts/echarts/top-products';
import totalSalesInit from './theme/charts/echarts/total-sales';
import { docReady } from './utils';
// import 'bootstrap';

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(totalSalesInit);
docReady(topProductsInit);
docReady(basicEchartsInit);

// docReady(scrollbarInit);
