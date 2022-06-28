import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/deputees",
      name: "deputees-page",
      component: () => import("@/pages/DeputeesPage.vue"),
    },
    {
      path: "/deputees/:id",
      name: "deputy-page",
      component: () => import("@/pages/DeputyPage.vue"),
      props: true,
    },
    {
      path: "/about",
      name: "about-page",
      component: () => import("@/pages/AboutPage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found-page",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
});

export default router;
