<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import home from '/src/pages/Home.vue';
import order from '/src/pages/Order.vue';
import menu from '/src/pages/Menu.vue';

export default ({
    components:{
        'app-home': home,
        'app-menu': menu,
        'app-order': order
    },
});
</script>

