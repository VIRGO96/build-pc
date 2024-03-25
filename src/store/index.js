import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: "my-vuex-storage",
            paths: ["Auth"],
            storage: window.sessionStorage,
        }),
    ],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Auth,
    },
});
