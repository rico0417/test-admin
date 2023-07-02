<template>
	<el-button v-bind="$attrs">
		<template v-for="(value, name) in $slots" #[name]="slotData">
			<slot :name="name" v-bind="slotData || {}" />
		</template>
	</el-button>
</template>

<script setup lang="ts" name="SolutionButton"></script>

<style lang="scss" scoped>
.el-button {
	border-radius: 14px;
}
</style>
