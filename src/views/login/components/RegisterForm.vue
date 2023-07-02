<template>
	<div class="loginForm-container">
		<div class="login-title">注册账号</div>
		<el-form style="width: 100%" ref="loginFormRef" label-position="top" :model="loginForm" :rules="loginRules" size="large">
			<div class="login-label">用户名</div>
			<el-form-item prop="username">
				<solution-input v-model="loginForm.username" placeholder="请输入用户名"> </solution-input>
			</el-form-item>
			<div class="login-label">邮箱</div>
			<el-form-item prop="email">
				<solution-input v-model="loginForm.email" placeholder="请输入邮箱"> </solution-input>
			</el-form-item>
			<div class="login-label">密码</div>
			<el-form-item prop="password">
				<solution-input type="password" v-model="loginForm.password" show-password autocomplete="new-password"></solution-input>
			</el-form-item>
			<div class="login-label">确认密码</div>
			<el-form-item prop="rePassword">
				<solution-input type="password" v-model="loginForm.rePassword" show-password autocomplete="new-password"></solution-input>
			</el-form-item>
		</el-form>
		<div class="login-btn">
			<solution-button size="large" type="success" :loading="loading" @click="toRegister">注册</solution-button>
			<solution-button size="large" type="danger" :loading="loading" @click="toggleForm">返回</solution-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Login } from "@/api/interface";
import type { ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import SolutionButton from "@/components/SolutionUi/SolutionButton/index.vue";
import SolutionInput from "@/components/SolutionUi/SolutionInput/index.vue";

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive<Login.RegisterForm>({ username: "", password: "", email: "", rePassword: "" });

interface ToggleEmits {
	(e: "toggle"): void;
}
const emits = defineEmits<ToggleEmits>();
const toggleForm = () => {
	emits("toggle");
};

const toRegister = () => {
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
	margin-top: 40px;
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
	margin-top: 20px;
	button {
		width: 100px;
	}
}
.login-options {
	color: #7d8592;
	& > span:last-child {
		cursor: pointer;
	}
}
</style>
