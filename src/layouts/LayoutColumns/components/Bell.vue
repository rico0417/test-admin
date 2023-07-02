<template>
	<el-tooltip effect="dark" content="提醒" placement="bottom">
		<div class="header-icon">
			<el-icon :size="20"><Bell /></el-icon>
		</div>
	</el-tooltip>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-icon {
	width: 48px;
	height: 48px;
	border-radius: 14px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
</style>
