import { createStore } from "vuex";

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        CLEAR_user(state) {
            state.user = null
        }
    },
    actions: {
        async login({ commit }, details){
            
        },
        async logout({ commit }){

        },
        async register({ commit }) {
            
        }
    },
    modules: {

    }
})