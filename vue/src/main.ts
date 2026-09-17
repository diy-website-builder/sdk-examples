import { createApp } from "vue";
import App from "./App.vue";
import { keepHostAtRoot } from "./keepHostAtRoot";
import "./styles.css";

keepHostAtRoot();

createApp(App).mount("#app");
