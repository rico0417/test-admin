<template>
	<el-input v-bind="$attrs">
		<template v-for="(value, name) in $slots" #[name]="slotData">
			<slot :name="name" v-bind="slotData || {}" />
		</template>
	</el-input>
</template>

<script setup lang="ts" name="SolutionInput"></script>

<style lang="scss" scoped>
.el-input {
	:deep(.el-input__wrapper) {
		border-radius: 14px;
	}
}
</style>
