import Vue from "vue";
import App from "./App.vue";
import VueHolder from "vue-holderjs";
import router from "./routes/index";
import vuetify from "./plugins/vuetify";
Vue.use(VueHolder);
Vue.config.productionTip = false;
new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
