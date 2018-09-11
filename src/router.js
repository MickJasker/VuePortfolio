import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import About from "./views/About.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
