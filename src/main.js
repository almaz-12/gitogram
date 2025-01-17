import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
// createApp(App).mount('#app');

app.use(router);
app.use(store);
app.mount('#app');
