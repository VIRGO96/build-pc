import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ItemDetails from "../components/ItemDetails.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import { auth, onAuthStateChanged } from "../config/firebase";

Vue.use(VueRouter);

const routes = [
    { path: "*", redirect: "/login" },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: "/register",
        name: "SignUp",
        component: SignUp,
        meta: { requiresGuest: true },
    },
    {
        path: "/item-details",
        name: "ItemDetails",
        component: ItemDetails,
        meta: { requiresAuth: true },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const requiresGuest = to.matched.some(
        (record) => record.meta.requiresGuest
    );

    onAuthStateChanged(auth, (user) => {
        if (requiresAuth && !user) {
            next({
                path: "/login",
                query: { redirect: to.fullPath },
            });
        } else if (requiresGuest && user) {
            next({
                path: "/item-details",
                query: { redirect: to.fullPath },
            });
        } else {
            next();
        }
    });
});

export default router;
