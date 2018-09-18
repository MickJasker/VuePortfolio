import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import About from "./views/About.vue";
import portfolioItem from "./components/portfolioItem.vue";
import error from "./views/error.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      redirect: { name: "error" }
    },
    {
      path: "/404",
      name: "error",
      component: error
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
    },
    {
      path: "/portfolio/:name=:id",
      name: "portfolioItem",
      component: portfolioItem,
      props: true
    }
  ]
});
