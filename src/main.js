import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/UI/Button.vue';
import Preloader from './components/UI/Preloader.vue';

const app = createApp(App);

app.component('Button', Button);
app.component('Preloader', Preloader);
app.use(store);
app.use(router);
app.mount('#app');