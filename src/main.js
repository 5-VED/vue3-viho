import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FormWizard } from "vue-form-wizard";
import Toasted from "vue-toasted";
import VueSweetalert2 from "vue-sweetalert2";
import VueTour from "vue-tour";
import Vue from 'vue';
import VueFeather from 'vue-feather';
import VueApexCharts from "vue3-apexcharts";
import { Icon } from "leaflet";
import { EditIcon } from "vue-feather";

//import scss theme
import "./assets/scss/app.scss";

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.component('apexchart', VueApexCharts);

app
  .use(store)
  .use(router)
  .mount("#app");

// app.use(VueFeather);

// app.use(Toasted, {
//   iconPack: "fontawesome",
// });
