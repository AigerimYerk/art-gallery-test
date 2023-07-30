import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/Home.vue";
import FavoritesPage from "@/views/Favorites.vue";
import PicturePage from "@/views/Picture.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesPage,
  },
  {
    path: "/pictures/:id",
    name: "Picture",
    component: PicturePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;