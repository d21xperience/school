import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store';
// progress bar
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';

const app = createApp(App)
app.mixin({
    methods: {
     ShowMenu : (e) => {
            let obj = e.target.nextSibling
            obj.classList.toggle('hidden')
        }
    }
})

// Register your store by updating your main.js file to match the following:
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(ToastService);
app.use(router)
app.use(store)
app.mount('#app')
