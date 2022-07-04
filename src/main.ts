import { createApp } from "vue";
import naive from "naive-ui";
import { VueQueryPlugin } from "vue-query";
import "./assets/css/tailwind.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.use(naive);

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

app.mount("#app");
