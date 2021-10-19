import { createRouter, createWebHistory } from "vue-router";

import Body from "../components/body.vue";
import Faq from "../Pages/Faq.vue";
import Support from "../Pages/Support.vue";

//Default Routes
import Default from "../Pages/Dashboard/Default.vue";
import Ecommerce from "../Pages/Dashboard/Ecommerce.vue";

/* uikits */
// import alert from '../Pages/UI_Kits/Alert.vue';
import Statecolor from "../Pages/UI_Kits/State_Color.vue";
// import Helperclasses from '../Pages/UI_Kits/helper_classes';
// import Avatars from '../Pages/UI_Kits/avatars';
// import Grid from '../Pages/UI_Kits/grid';
// import Tagpills from '../Pages/UI_Kits/tag_pills';
// import Typography from '../Pages/UI_Kits/typography';
// import Progressbar from '../Pages/UI_Kits/progress_bar';
// import Modal from '../Pages/UI_Kits/modal';
// import Popover from '../Pages/UI_Kits/popover';
// import Tooltip from '../Pages/UI_Kits/tooltip';
// import Spinners from '../Pages/UI_Kits/loader';
// import Dropdown from '../Pages/UI_Kits/dropdown';
// import Accordion from '../Pages/UI_Kits/accordion';
// import Boxshadow from '../Pages/UI_Kits/box_shadow';
// import Lists from '../Pages/UI_Kits/lists';

const routes = [
  {
    path: "",
    redirect: { name: "default" },
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
  // {
  //   path: "/pages/Faq",
  //   name: "FAQ",
  //   component: Body,
  // },
  {
    path: "/pages",
    component: Body,
    children: [
      {
        path: "/pages/faq",
        name: "Faq",
        component: Faq,
        meta: {
          title: "Faq | Cuba - Premium Admin Template",
        },
      },
      {
        path: "/pages/support",
        name: "Support",
        component: Support,
        meta: {
          title: "Support | Cuba - Premium Admin Template",
        },
      },
    ],
  },
  // {
  //   path: "/uikits",
  //   component: Body,
  //   children: [
  //     {
  //       path: "alert",
  //       name: "alert",
  //       component: alert,
  //       meta: {
  //         title: "Alert | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "state-color",
  //       name: "Statecolor",
  //       component: Statecolor,
  //       meta: {
  //         title: "Statecolor | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "helper-classes",
  //       name: "Helperclasses",
  //       component: Helperclasses,
  //       meta: {
  //         title: "Helperclasses | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "avatars",
  //       name: "Avatars",
  //       component: Avatars,
  //       meta: {
  //         title: "Avatars | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "grid",
  //       name: "Grid",
  //       component: Grid,
  //       meta: {
  //         title: "Grid | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "tag-pills",
  //       name: "Tagpills",
  //       component: Tagpills,
  //       meta: {
  //         title: "Tagpills | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "typography",
  //       name: "Typography",
  //       component: Typography,
  //       meta: {
  //         title: "Typography | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "progress-bar",
  //       name: "Progressbar",
  //       component: Progressbar,
  //       meta: {
  //         title: "Progressbar | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "modal",
  //       name: "Modal",
  //       component: Modal,
  //       meta: {
  //         title: "Modal | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "popover",
  //       name: "Popover",
  //       component: Popover,
  //       meta: {
  //         title: "Popover | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "tooltip",
  //       name: "Tooltip",
  //       component: Tooltip,
  //       meta: {
  //         title: "Tooltip | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "loader",
  //       name: "Spinners",
  //       component: Spinners,
  //       meta: {
  //         title: "Spinners | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "dropdown",
  //       name: "Dropdown",
  //       component: Dropdown,
  //       meta: {
  //         title: "Dropdown | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "accordion",
  //       name: "Accordion",
  //       component: Accordion,
  //       meta: {
  //         title: "Accordion | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "box-shadow",
  //       name: "Boxshadow",
  //       component: Boxshadow,
  //       meta: {
  //         title: "Boxshadow | Cuba - Premium Admin Template",
  //       },
  //     },
  //     {
  //       path: "lists",
  //       name: "Lists",
  //       component: Lists,
  //       meta: {
  //         title: "Lists | Cuba - Premium Admin Template",
  //       },
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
