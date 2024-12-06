import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/";
import About from "../Pages/About/About.vue";
import Services from "../Pages/Solutions&Service/SolutionsPage.vue";
import Projects from "../Pages/Projects/Projects.vue";
import Contact from "../Pages/Contact/Contact.vue";
// import GetInTouch from "../views/GetInTouch.vue";

// Define Routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

// Create Router Instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
