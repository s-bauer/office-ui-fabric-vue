const path = require("path");

function configureInclude(arr) {
    for (const obj of arr) {
        obj.include
            .add(path.resolve(__dirname, "src"))
            .add(path.resolve(__dirname, "../office-ui-fabric-vue/src"))
            .add(path.resolve(__dirname, "../styling/src"))
            .add(path.resolve(__dirname, "../utilities/src"))
            .add(path.resolve(__dirname, "../icons/src"));
    }
}

module.exports = {
    publicPath: "./",
    chainWebpack: (config) => {
        config.resolve.alias
            .set("vue$", path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js"))
            .set("@s-bauer/styling$", path.resolve(__dirname, "../styling/src/index.ts"))
            .set("@s-bauer/utilities$", path.resolve(__dirname, "../utilities/src/index.ts"))
            .set("@s-bauer/icons$", path.resolve(__dirname, "../icons/src/index.ts"))
            .set("office-vue-fabric$", path.resolve(__dirname, "../office-ui-fabric-vue/src/index.ts"));

        configureInclude([
            config.module.rule("vue"),
            config.module.rule("js"),
            config.module.rule("ts"),
        ]);

        config.module.rule("example-files")
            .test(/\.example$/)
            .use("raw-loader")
                .loader("raw-loader");
    }
};
