<template>
	<div class="solution-menu-container">
		<div style="height: 132px; display: flex; align-items: center; padding: 0 24px">
			<div style="height: 50px; width: 50px; background-color: rgba(63, 140, 255, 1); border-radius: 10px"></div>
		</div>
		<div class="menu-item-group">
			<div class="menu-item is-active">
				<div class="menu-item-content">
					<div class="icon-style">
						<el-icon><Menu /></el-icon>
					</div>
					<div class="font-style">仪表盘</div>
				</div>
			</div>
			<div class="menu-item">
				<div class="menu-item-content">
					<div class="icon-style">
						<el-icon><Menu /></el-icon>
					</div>
					<div class="font-style">项目</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.solution-menu-container {
	width: 200px;
	height: 100%;
	background-color: #ffffff;
	border-radius: 24px;
	box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
	.menu-item {
		width: 100%;
		height: 44px;
		cursor: pointer;
		margin-bottom: 9px;
		&.is-active {
			position: relative;

			&::after {
				content: ""; /* content 值会生成 ::after 伪元素 */
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				width: 4px;
				background-color: rgba(63, 140, 255, 1);
				border-radius: 2px;
			}
			.menu-item-content {
				background-color: rgba(237, 242, 254, 1);
				.icon-style,
				.font-style {
					color: rgba(63, 140, 255, 1);
				}
			}
		}
		.menu-item-content {
			display: flex;
			align-items: center;
			width: 172px;
			height: 100%;
			line-height: 44px;
			margin-left: 16px;
			border-radius: 10px;
			padding-left: 10px;
			box-sizing: border-box;
			transition: 0.3s;
			&:hover {
				background-color: rgba(237, 242, 254, 1);
			}
			.icon-style {
				font-size: 20px;
				line-height: 10px;
				margin-right: 14px;
				color: rgba(125, 133, 146, 1);
			}
			.font-style {
				font-size: 16px;
				color: rgba(125, 133, 146, 1);
			}
		}
	}
}
</style>
