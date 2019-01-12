import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

const rollupAlias = aliases => ({
    resolveId(importee) {
        const keys = Object.keys(aliases);
        let alias;
        for(const key of keys) {
            if(importee.includes(key))
                alias = importee.replace(key, aliases[key]);
        }

        return alias ? this.resolveId(alias) : null;
    }
});

export default {
    input: 'packages/office-ui-fabric-vue/components/index.ts',
    output: {
        format: 'esm',
        file: 'dist/office-vue-fabric.esm.js',
    },
    external: ['vue'],
    plugins: [
        rollupAlias({
            "@styling": "packages/styling",
            "@utilities": "packages/utilities",
            "@icons": "packages/icons",
            "@components": "packages/office-ui-fabric-vue/components"
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                include: [
                    "packages/**/*.ts",
                    "packages/**/*.tsx",
                    "packages/**/*.vue"
                ]
            }
        }),
        vue(),
        resolve(),
        commonjs(),
    ]
}
