import Vue                   from "vue";
import Router, {RouteConfig} from "vue-router";
import Home                  from "./views/Home.vue";

Vue.use(Router);

export const Routes: { [key: string]: () => any } = {
    "Button":    () => import("./views/components/Button/OfficeButton.vue"),
    "TextField": () => import("./views/components/TextField/OfficeTextField.vue"),
    "CheckBox":  () => import("./views/components/CheckBox/OfficeCheckBox.vue"),
};

const internalRoutes: RouteConfig[] = [];
for (const key of Object.keys(Routes)) {
    internalRoutes.push({
        path:      key.toLowerCase(),
        name:      `components/${key.toLowerCase()}`,
        component: Routes[key]
    });
}


export default new Router({
    routes: [
        {
            path:      "/",
            name:      "home",
            component: Home,
        },
        {
            path:      "/about",
            name:      "about",
            component: () => import("./views/About.vue"),
        },
        {
            path:      "/components",
            name:      "components",
            component: () => import("./views/components/Overview.vue"),
            children:  internalRoutes,
        },
    ],
});
