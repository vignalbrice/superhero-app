import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.component("apexchart", VueApexCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
