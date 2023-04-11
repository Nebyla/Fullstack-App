import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import About from "../views/About.vue";
import CreateFlight from "../views/CreateFlight.vue";

const routes = [
  {    
    name: "Index",
    path: "/",
    component: Index,
    props: true
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    name: "Create",
    path: "/create",
    component: Create,
  },
  {
    name: "CreateFlight",
    path: "/createflight",
    component: CreateFlight,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
