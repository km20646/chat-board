import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import BoardList from "../pages/BoardList";
import BoardView from "../pages/BoardView";
import BoardWriter from "../pages/BoardWriter";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    { path: "/board", name: "BoardList", component: BoardList },
    { path: "/view/:seq", name: "BoardView", component: BoardView },
    { path: "/writer", name: "BoardWriter", component: BoardWriter },
];
const router = new VueRouter({
    mode: "history",
    // base: "/vue",
    routes,
});

export default router;
