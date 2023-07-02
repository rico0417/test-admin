<template>
	<div class="loginForm-container">
		<div class="login-title">欢迎登录</div>
		<el-form style="width: 100%" ref="loginFormRef" label-position="top" :model="loginForm" :rules="loginRules" size="large">
			<div class="login-label">用户名</div>
			<el-form-item prop="username">
				<solution-input v-model="loginForm.username" placeholder="用户名：admin / user"></solution-input>
			</el-form-item>
			<div class="login-label">密码</div>
			<el-form-item prop="password">
				<solution-input
					type="password"
					v-model="loginForm.password"
					show-password
					autocomplete="new-password"
					placeholder="请输入密码"
				></solution-input>
			</el-form-item>
			<div class="flx-justify-between login-options">
				<solution-checkbox label="记住我" size="large"></solution-checkbox>
				<span @click="forgotPassword">忘记密码?</span>
			</div>
		</el-form>
		<div class="login-btn">
			<solution-button @click="login(loginFormRef)" size="large" type="primary" :loading="loading">立即登录</solution-button>
			<p>还没有账号？<span @click="toggleForm">去注册</span></p>
		</div>
	</div>
</template>

<script setup lang="ts">
import SolutionButton from "@/components/SolutionUi/SolutionButton/index.vue";
import SolutionInput from "@/components/SolutionUi/SolutionInput/index.vue";
import SolutionCheckbox from "@/components/SolutionUi/SolutionCheckbox/index.vue";
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
import { ElMessage } from "element-plus";

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

interface ToggleEmits {
	(e: "toggle"): void;
}
const emits = defineEmits<ToggleEmits>();
const toggleForm = () => {
	emits("toggle");
};

const forgotPassword = () => {
	ElMessage.error("功能暂未开放");
};
</script>

<style scoped lang="scss">
.loginForm-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 60px;
	box-sizing: border-box;
	margin-top: 113px;
}
.login-title {
	font-size: 22px;
	color: #0a1629;
	margin-bottom: 34px;
}
.login-label {
	color: #7d8592;
	margin-bottom: 8px;
	font-size: 14px;
}

.login-btn {
	margin-top: 30px;
	text-align: center;
	button {
		width: 170px;
		height: 48px;
	}
	p {
		color: rgba(63, 140, 255, 1);
		font-size: 14px;
		span {
			text-decoration: underline;
			cursor: pointer;
		}
	}
}
.login-options {
	color: #7d8592;
	& > span:last-child {
		cursor: pointer;
	}
}
</style>

<style scoped>
.el-button .custom-loading .circular {
	margin-right: 6px;
	width: 18px;
	height: 18px;
	animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
	animation: loading-dash 1.5s ease-in-out infinite;
	stroke-dasharray: 90, 150;
	stroke-dashoffset: 0;
	stroke-width: 2;
	stroke: var(--el-button-text-color);
	stroke-linecap: round;
}
</style>
