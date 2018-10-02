import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import portfolioItem from "./components/portfolioItem.vue";
import error from "./views/error.vue";
import signIn from "./views/signIn.vue";
import PortfolioAdmin from "./views/PortfolioAdmin.vue";

Vue.use(Router);
let router = new Router({
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
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/portfolio/:name=:id",
      name: "portfolioItem",
      component: portfolioItem,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: signIn,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/admin",
      name: "PortfolioManager",
      component: PortfolioAdmin,
      meta: {
        requiresAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("/login");
  else if (!requiresAuth && currentUser) next("/admin");
  else next();
});

export default router;
