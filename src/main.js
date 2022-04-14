import { createApp } from 'vue'
import App from './Home.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App).use(router).mount('#app')
