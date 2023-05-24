import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttractionRoutes from "./attraction";
import PictureRoutes from "./picture";
import Route from "./route";
import User from "./user"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  ...AttractionRoutes,
  ...PictureRoutes,
  ...Route,
  ...User
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
