import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as utils from './libs/utils'
import "/src/render/assets/style/font/font.css"

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router)
app.config.globalProperties._utils = utils;
app.config.globalProperties._http = () => {
    console.log("app.config.globalProperties.http");
};
app.mount('#app')

