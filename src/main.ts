import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import './assets/tailwind.css'
import VueSlider from 'vue-slider-component'
import './assets/style.scss'


const app = createApp(App)

app.component('VueSlider', VueSlider)
app.use(store)
app.use(router)



app.mount("#app")
