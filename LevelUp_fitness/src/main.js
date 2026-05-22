import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Importerer fila vi laget over

const app = createApp(App)

app.use(createPinia())
app.use(router) // Her kobles rutingen på!

app.mount('#app')