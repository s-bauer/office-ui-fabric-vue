const path = require("path");

module.exports = {
    baseUrl: ".",
    pages: {
        index: {
            entry: "packages/office-ui-fabric-vue/main.ts"
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set("@icons", path.resolve(__dirname, "packages/icons"));
        config.resolve.alias.set("@utilities", path.resolve(__dirname, "packages/utilities"));
        config.resolve.alias.set("@styling", path.resolve(__dirname, "packages/styling"));
        config.resolve.alias.set("@components", path.resolve(__dirname, "packages/office-ui-fabric-vue/components"));
    }
};
