<template>
	<div class="login-container">
		<div class="login-card">
			<!-- 左侧说明 -->
			<div class="flex-column-center" style="justify-content: space-around">
				<p style="font-size: 40px; width: 409px; line-height: 56px; color: #fff">这里是文字示例，最多显示两行折行</p>
				<img src="@/assets/images/login_pic.svg" />
			</div>
			<!-- 右侧登录框 -->
			<div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
// import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
