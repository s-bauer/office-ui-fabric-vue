import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueHighlightJS from "vue-highlight.js";

// Highlight.js languages
import javascript from "highlight.js/lib/languages/javascript";
import shell from "highlight.js/lib/languages/shell";
import vue from "vue-highlight.js/lib/languages/vue";

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import "highlight.js/styles/default.css";

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    javascript,
    vue,
    shell
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
