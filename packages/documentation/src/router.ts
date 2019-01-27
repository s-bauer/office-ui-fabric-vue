import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("./views/About.vue"),
        },
        {
            path: "/components",
            name: "components",
            component: () => import("./views/components/Overview.vue"),
            children: [
                {
                    path: "button",
                    name: "components/button",
                    component: () => import("./views/components/Button/OfficeButton.vue"),
                },
                {
                    path: "textfield",
                    name: "components/textfield",
                    component: () => import("./views/components/TextField/OfficeTextField.vue"),
                },
            ],
        },
    ],
});
