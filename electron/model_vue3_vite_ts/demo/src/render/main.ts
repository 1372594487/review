import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as utils from './libs/utils'

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router)
app.config.globalProperties._utils = utils;
app.config.globalProperties._http = () => {
    console.log("app.config.globalProperties.http");
};
app.mount('#app')

