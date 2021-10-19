import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FormWizard } from "vue-form-wizard";
import Toasted from "vue-toasted";
import VueSweetalert2 from "vue-sweetalert2";
import VueTour from "vue-tour";
import Vue from "vue";
import VueFeather from "vue-feather";
import VueApexCharts from "vue-apexcharts";
import { Icon } from "leaflet";
import { EditIcon } from "vue-feather";
import BootstrapVue from 'bootstrap-vue';


//import scss theme
import "./assets/scss/app.scss";

//Breadcrumbs
import Breadcrumbs from "../src/components/Breadcrumbs.vue";

const app = createApp(App);
app.component(VueFeather.name, VueFeather);

app.component("Breadcrumbs", Breadcrumbs);
app.use(BootstrapVue);

app
  .use(store)
  .use(router)
  .mount("#app");


// app.use(VueFeather);

// app.use(Toasted, {
//   iconPack: "fontawesome",
// });
