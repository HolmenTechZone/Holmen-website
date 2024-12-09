import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home/Home.vue";
import About from "../Pages/About/About.vue";
import Projects from "../Pages/Projects/Project.vue";
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
    path: "/projects",
    name: "Project",
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
