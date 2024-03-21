import { createRouter, createWebHashHistory } from "vue-router";
import Feeds from "@/components/Feeds.vue";
import About from "@/components/mocks/About.vue";
import NotFound from "@/components/mocks/NotFound.vue";
import Params from "@/components/mocks/Params.vue";
import Children from "@/components/mocks/Children.vue";

const routes = [
  {
    path: "/",
    component: Feeds,
    name: "feeds",
  },
  {
    path: "/about",
    component: About,
    name: "about",
    children: [
      {
        path: "children",
        component: Children,
        name: "children",
      },
    ],
  },
  {
    path: "/params/:id",
    component: Params,
    name: "params",
  },
  {
    path: "/:pathMath(.*)",
    component: NotFound,
    name: "notFound",
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
