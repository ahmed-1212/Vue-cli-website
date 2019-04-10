import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showHide: false
    },
    mutations: {
        change: state => {
            state.showHide = !state.showHide
        }
    }
});

export default store;