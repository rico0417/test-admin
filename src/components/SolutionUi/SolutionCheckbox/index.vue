<template>
	<el-checkbox class="solution-checkbox" v-bind="$attrs" />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-checkbox {
	font-weight: 400;
	color: #7d8592;
	:deep(.el-checkbox__input) {
		.el-checkbox__inner {
			border-radius: 5px;
			border-color: #0a1629;
			&:hover {
				border-color: #0f1428;
			}
		}
		&.is-checked {
			.el-checkbox__inner {
				background-color: #ffffff;
				border-color: #0a1629;
				&::after {
					border: 1px solid #3f8cff;
					border-left: 0;
					border-top: 0;
					background-color: #ffffff;
					position: absolute;
					top: -2px;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
				}
			}
			& + .el-checkbox__label {
				color: #7d8592;
			}
		}
	}
	&.el-checkbox--large {
		:deep(.el-checkbox__inner) {
			width: 16px;
			height: 16px;
		}
		:deep(.el-checkbox__label) {
			font-size: 16px;
		}
	}
}
</style>
