import { createApp } from 'vue'
import { Vue3Mq } from "vue3-mq";
import { VueAnime } from 'vue-anime';
import App from './App.vue'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

app.use(VueFullPage)
app.use(Vue3Mq);
app.use(VueAnime);

app.mount('#app')