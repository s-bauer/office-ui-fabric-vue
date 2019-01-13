import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import babel from 'rollup-plugin-babel';
import minify from "rollup-plugin-babel-minify";
import postprocess from 'rollup-plugin-postprocess';


import {join} from "path";
import {lstatSync, readdirSync} from "fs";

const baseConfig = {
    external: ['vue'],
    output: {
        globals: {
            vue: "Vue",
        }
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        vue(),
        resolve(),
        commonjs(),
        babel({
            extensions: ['.js', '.ts', '.vue'],
            runtimeHelpers: true,
            sourceMap: true
        }),
        postprocess([
            [/component\.__file = ".*";/, ""]
        ])
    ]
};

const inputs = readdirSync("src")
    .filter(name => lstatSync(join("src", name)).isDirectory())
    .filter(name => !name.includes("FocusTrapZone"))
    .map(name => `src\\${name}\\Office${name}.vue`);

inputs.push("src\\index.ts");
inputs.push("src\\FocusTrapZone\\FocusTrapZone.vue");

const esmConfig = Object.assign({}, baseConfig, {
    input: inputs,
    output: {
        globals: {vue: "Vue"},
        format: "esm",
        dir: "dist/esm",
        sourcemap: true,
        experimentalCodeSplitting: true,
        experimentalDynamicImport: true,
    },
});

const umdConfig = Object.assign({}, baseConfig, {
    input: "src/index.ts",
    output: {
        globals: {vue: "Vue"},
        format: "umd",
        file: "dist/office-vue-fabric.umd.js",
        sourcemap: true,
        name: "OfficeVueFabric"
    },
});

const umdMinConfig = Object.assign({}, baseConfig, {
    input: "src/index.ts",
    output: {
        globals: {vue: "Vue"},
        format: "umd",
        file: "dist/office-vue-fabric.umd.min.js",
        sourcemap: true,
        name: "OfficeVueFabric",
        compact: true
    },
});

// noinspection JSValidateTypes
let clone = baseConfig.plugins.slice(0);
clone.push(minify());

umdMinConfig.plugins = clone;

export default [esmConfig, umdConfig, umdMinConfig];
