import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import "./prism";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

AOS.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
