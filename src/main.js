import Vue from 'vue';
// assets imports
import 'vuetify/dist/vuetify.min.css';

import Accounting from 'accounting';
import moment from 'moment';
// UI components
import Vuetify from 'vuetify';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify);

Vue.component('vue-perfect-scrollbar', VuePerfectScrollbar);

// date format filter
Vue.filter('dateFormat', (value, df = 'DD/MMM/YYYY') => {
  if (value) {
    return moment(value).format(df);
  }
  return '';
});
// money format filter
// {{ 9876543.210 | money }} <- "$9,876,543.21"
// {{ 9,876,543.21 | money('$', 3) }} <- "$9,876,543.210"
Vue.filter('money', (value, symbol = '$', toFixed = 2) => Accounting.formatMoney(value, symbol, toFixed));
// number decimal format filter
// {{ 9876543.210 | decimal }} <- "9,876,543.21"
// {{ 9876543.21 | decimal(3) }} <- "9,876,543.210"
Vue.filter('decimal', (value, toFixed = 2) => Accounting.formatNumber(value, toFixed));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
