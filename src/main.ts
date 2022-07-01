import { createApp } from "vue";
import naive from "naive-ui";

import App from "./App.vue";
import "./assets/css/tailwind.css";

import router from "./router";

const app = createApp(App);

app.use(router);
app.use(naive);

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

app.mount("#app");
