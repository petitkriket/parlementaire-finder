import { createApp } from "vue";
import naive from "naive-ui";
import { VueQueryPlugin } from "vue-query";
import "./assets/css/tailwind.css";

import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.use(i18n);
app.use(naive);

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

app.mount("#app");
