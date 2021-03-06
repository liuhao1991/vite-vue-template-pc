/*
 * @Author: lh@metgs.com
 * @Date: 2022-07-04 16:39:54
 * @LastEditors: lh@metgs.com
 * @LastEditTime: 2022-07-08 17:24:06
 * @Description: ...
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
// import 'uno.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.mount('#app');

