import { App } from "vue";
import SvgIcon from "./index.vue";
import "virtual:svg-icons-register";

const svgIconPlugin = {
	install(app: App): void {
		// 全局挂载
		app.component("SvgIcon", SvgIcon);
	}
};

export default svgIconPlugin;
