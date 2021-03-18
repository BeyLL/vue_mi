import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";    
import ElementUI from 'element-ui'
import animated from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/reset.css'
import '@/assets/iconfont/iconfont.css'
import '../mock/index'
// Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(animated)
Vue.config.devtools = true
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
