import {Component} from "vue";

interface IOfficeFabric {
    install: (vue: any) => void;
}

export const OfficeFabric: IOfficeFabric;

declare module "office-vue-fabric/lib" {
    const OfficeButton: Component;

    export {
        OfficeButton
    };
}
