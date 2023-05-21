<template>
	<div class="flex-column-center" style="margin-top: 113px">
		<div class="welcome-title">欢迎登录</div>
		<el-form ref="loginFormRef" label-position="top" :model="loginForm" :rules="loginRules" size="large">
			<div class="login-label">用户名</div>
			<el-form-item prop="username">
				<el-input class="login-input" v-model="loginForm.username" placeholder="用户名：admin / user"> </el-input>
			</el-form-item>
			<div class="login-label">密码</div>
			<el-form-item prop="password">
				<el-input
					class="login-input"
					type="password"
					v-model="loginForm.password"
					show-password
					autocomplete="new-password"
				></el-input>
			</el-form-item>
			<div class="flx-justify-between login-options">
				<el-checkbox label="记住我" size="large" />
				<span>忘记密码?</span>
			</div>
		</el-form>
		<div class="mt30">
			<el-button @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
				<span style="padding: 0 30px">立即登录</span>
			</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { ElNotification } from "element-plus";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/stores";
import { TabsStore } from "@/stores/modules/tabs";
import { KeepAliveStore } from "@/stores/modules/keepAlive";
import { getTimeState } from "@/utils/util";
import { HOME_URL } from "@/config/config";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import type { ElForm } from "element-plus";
import md5 from "js-md5";

const router = useRouter();
const tabsStore = TabsStore();
const keepAlive = KeepAliveStore();
const globalStore = GlobalStore();

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "" });

const login = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async valid => {
		console.log(valid);
		if (!valid) return;
		loading.value = true;
		try {
			// 1.执行登录接口
			const { data } = await loginApi({ ...loginForm, password: md5(loginForm.password) });
			globalStore.setToken(data.access_token);

			// 2.添加动态路由
			await initDynamicRouter();

			// 3.清空 tabs、keepAlive 保留的数据
			tabsStore.closeMultipleTab();
			keepAlive.setKeepAliveName();

			// 4.跳转到首页
			router.push(HOME_URL);
			ElNotification({
				title: getTimeState(),
				message: "欢迎登录 Vue-solution-admin",
				type: "success",
				duration: 3000
			});
		} finally {
			loading.value = false;
		}
	});
};

onMounted(() => {
	// 监听enter事件（调用登录）
	document.onkeydown = (e: any) => {
		e = window.event || e;
		if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
			if (loading.value) return;
			login(loginFormRef.value);
		}
	};
});
</script>

<!-- <style scoped lang="scss">
@import "../index.scss";
</style> -->
<style scoped lang="scss">
.welcome-title {
	font-size: 22px;
	color: #0a1629;
	margin-bottom: 34px;
}
.login-label {
	color: #7d8592;
	margin-bottom: 8px;
	font-size: 14px;
}
.login-input {
	width: 403px;
	height: 50px;
}

.login-options {
	color: #7d8592;
	& > span:last-child {
		cursor: pointer;
	}
}
</style>
