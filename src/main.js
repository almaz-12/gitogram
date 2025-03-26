import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import store from './store';

const pinia = createPinia();
const app = createApp(App);
// createApp(App).mount('#app');

app.use(router);
app.use(store);
app.use(pinia);
app.mount('#app');
