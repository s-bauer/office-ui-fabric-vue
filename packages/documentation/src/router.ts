import Vue                   from "vue";
import Router, {RouteConfig} from "vue-router";
import Home                  from "./views/Home.vue";

Vue.use(Router);

interface ComponentRoutes {
    [key: string]: {
        [key: string]: () => any
    };
}

export const Routes: ComponentRoutes = {
    "Basic Input": {
        "Button":    () => import("./views/components/Button/OfficeButton.vue"),
        "CheckBox":  () => import("./views/components/CheckBox/OfficeCheckBox.vue"),
        "Label":     () => import("./views/components/Label/OfficeLabel.vue"),
        "ChoiceGroup":     () => import("./views/components/ChoiceGroup/OfficeChoiceGroup.vue"),
        "TextField": () => import("./views/components/TextField/OfficeTextField.vue"),
    },
    "Content":     {
        "Image": () => import("./views/components/Image/OfficeImage.vue"),
        "Icon":  () => import("./views/components/Icon/OfficeIcon.vue"),
    },
};

const internalRoutes: RouteConfig[] = [];
for (const category of Object.keys(Routes)) {
    for (const key of Object.keys(Routes[category])) {
        internalRoutes.push({
            path:      key.toLowerCase(),
            name:      `components/${key.toLowerCase()}`,
            component: Routes[category][key]
        });
    }
}

internalRoutes.push({
    path: "/",
    name: "components",
    component: () => import("./views/components/Overview.vue"),
});

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
            component: () => import("./views/components/Components.vue"),
            children:  internalRoutes,
        },
    ],
});
