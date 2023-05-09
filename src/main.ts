import { createApp } from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// custom directives
import directives from "@/directives/index";
// vue Router
import router from "@/routers/index";
// vue i18n
import i18n from "@/languages/index";
// pinia store
import pinia from "@/stores/index";
// svg icons
import svgIcon from "@/components/SvgIcon";
// errorHandler
import errorHandler from "@/utils/errorHandler";
// install element-plus and element-plus-icon
import { installElementPlus, installElementPlusIcon } from "@/plugins/installElementPlus";

const app = createApp(App);
// 全局代码错误捕捉（用于为应用内抛出的未捕获错误指定一个全局处理函数）
app.config.errorHandler = errorHandler;

installElementPlus(app);
installElementPlusIcon(app);
app.use(router).use(i18n).use(pinia).use(directives).use(svgIcon).mount("#app");
