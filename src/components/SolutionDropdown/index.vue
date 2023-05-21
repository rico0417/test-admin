<template>
	<div class="dropdown-container" @click="changeDropdownType">
		<div class="main item-style">主项目</div>
		<hr />
		<div style="height: 200px; overflow: auto">
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
			<div class="option-item item-style">子项目</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const width = ref("200px");
const height = ref("50px");
const flag = ref(false);
const changeDropdownType = () => {
	flag.value = !flag.value;
	if (flag.value) {
		height.value = "300px";
	} else {
		height.value = "50px";
	}
};
</script>

<style lang="scss" scoped>
.dropdown-container {
	position: absolute;
	width: v-bind(width);
	height: v-bind(height);
	transition: height 500ms ease-in-out;
	cursor: pointer;
	border-radius: 14px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 6px 58px 0px rgba(121, 145, 173, 0.2);
	overflow: hidden;
}

.item-style {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.main {
}

hr {
	border: none;
	border-top: 1px solid #ccc;
	width: 80%;
}

.option-item {
	&:hover {
		border-radius: 10px;
		background-color: rgba(234, 240, 254, 0.5);
	}
}
</style>
