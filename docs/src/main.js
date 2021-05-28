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

var bodyRef = document.body;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function debounce(func, wait=5, immediate = true){
    var timeout;
    return function(){
        var context =this, args = arguments;
        var later = function(){
            timeout = null;
            if (!immediate) func.apply(context,args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slideIn');
function slide(e){
    sliderImages.forEach(sliderImage =>{
        const slideInAt = (window.scrollY + window.innerHeight);
            sliderImage.height/2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }
        //console.log(slideInAt);
    })
}
window.addEventListener('scroll', debounce(slide));
