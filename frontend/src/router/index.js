import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import About from "../views/About.vue";
import CreateFlight from "../views/CreateFlight.vue";
import PasswordInput from "../views/AboutView.vue";
import Ticket from "../views/Ticket.vue";
import Help from "../views/Help.vue";

const routes = [
  {    
    name: "Index",
    path: "/",
    component: Index,
    props: true,
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    name: "Ticket",
    path: "/ticket",
    component: Ticket,
  },
  {
    name: "Help",
    path: "/Help",
    component: Help,
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
  {
    path: '/password',
    name: 'PasswordInput',
    component: PasswordInput
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
