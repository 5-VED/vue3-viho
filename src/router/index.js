import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/Header/index.vue";
import Body from "../components/body.vue";

//Default Routes
import Default from "../Pages/Dashboard/Default.vue";
import Ecommerce from "../Pages/Dashboard/Ecommerce.vue";

const routes = [
  {
    path: "",
    rediredt: { name: "default" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Body,
    children: [
      {
        path: "default",
        name: "default",
        component: Default,
        meta: {
          title: "Default Dashboard | Viho - Premium Admin Template",
        },
      },
      {
        path: "ecommerce",
        name: "ecommerce",
        component: Ecommerce,
        meta: {
          title: "Ecommerce Dashboard | Viho - Premium Admin Template",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
