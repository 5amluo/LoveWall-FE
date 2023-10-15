import { createApp } from 'vue'
import './style.css'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from './App.vue'
import router from "./router/index.js";
import store from "./store/index.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {createPinia} from 'pinia'

import clickEffect from './mixins/clickEffect'








const app = createApp(App);
const pinia =createPinia();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store);
app.use(router);
app.use(ElementPlus);


app.mount("#app");
app.use(pinia);
app.mixin(clickEffect)

