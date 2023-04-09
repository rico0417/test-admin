import { App } from "vue";
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/styles/theme/element-dark.scss";
// custom element css
import "@/styles/element.scss";

export const installElementPlusIcon = function installElementPlusIcon(app: App) {
	// 注册element Icons组件
	Object.keys(Icons).forEach(key => {
		app.component(key, Icons[key as keyof typeof Icons]);
	});
};

export const installElementPlus = function installElementPlus(app: App) {
	// https://github1s.com/pure-admin/vue-pure-admin/blob/main/src/plugins/element-plus/index.ts
	app.use(ElementPlus);
};
