import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/Tab1Page.vue";

const routes = [
  {
    path: "/",
    component: TabsPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
