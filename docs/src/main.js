import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from '/src/pages/Home.vue';
import Order from '/src/pages/Order.vue';
import Menu from '/src/pages/Menu.vue';

Vue.use(VueRouter)

const route = [
    {path: '/', component: Home},
    {path: '/menu', component: Menu},
    {path: '/order', component: Order}
]
const router = new VueRouter({
    routes:route
})

new Vue({
  el: '#vueLink',
  render: h => h(App),
  router:router
});

