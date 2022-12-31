import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/luna-blue/theme.css";

const app = createApp(App);
app.use(PrimeVue).component("Button", Button);
app.mount("#app");
