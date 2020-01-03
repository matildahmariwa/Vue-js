import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Create from './components/create'
import News from './components/news'
import CreateProduct from './components/createProduct'
import Display from './components/display'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios;
// const accessToken = localStorage.getItem('access_token')
//
// if (accessToken) {
//     Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
// }


export const store = new Vuex.Store({
    state: {
        products: [
            {
                id: 1,
                name: 'cups'
            },
            {
                id: 2,
                name: 'utensils'
            },
            {
                id: 3,
                name: 'onions'
            },
        ],
        posts: {}

    },
    getters: {
        productCount: state => {
            return state.products.length
        }
    },
    mutations: {
        addProduct: (state, product) => {
            sta   te.products.push(product)
        },
        addPosts(state, post) {
            state.posts = post
        },

    },
    actions: {
        addProducts({commit}, product) {
            commit('addProduct', product)
        },
        addPosts({commit}, post) {
            axios.post('http://jsonplaceholder.typicode.com/posts', post)
                .then(response => response.data)
                .then(posts => {
                    commit('getPosts', posts)
                })
        }

    }
}

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/createProduct',
            name: 'createProduct',
            component: CreateProduct
        },
        {
            path: '/display',
            name: 'display',
            component: Display
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Signup
        }


    ]
});

new Vue({
    router,
    store,

    render: h => h(App),
}).$mount('#app')
