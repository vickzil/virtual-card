import Vue from "vue";
import VueRouter from "vue-router";
import AddCard from "../views/AddCard.vue";
import AllCards from "../views/AllCards.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AddCard",
    component: AddCard,
    meta: {
      transition: "fade-in-down",
      title: " cards - Add Card",
      requiresAuth: true,
    },
  },

  {
    path: "/cards",
    name: "AllCards",
    component: AllCards,
    meta: {
      transition: "fade-in-down",
      title: " cards - AllCards",
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT_TITLE = "Welcome to cards";

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
