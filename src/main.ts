import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import ElemPlusRus from 'element-plus/es/locale/lang/ru';
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus, {
    locale: ElemPlusRus,
}).mount('#app')
