<!-- 分栏布局 -->
<template>
	<div class="layout-container">
		<el-container>
			<div class="layout-aside">
				<solution-menu></solution-menu>
			</div>
			<el-container>
				<el-header>
					<div class="header-box">
						<Solution-input class="search-input" placeholder="搜索">
							<template #prefix>
								<el-icon class="el-input__icon"><search /></el-icon>
							</template>
						</Solution-input>
						<div class="header-right-box">
							<Bell></Bell>
							<Solution-dropdown></Solution-dropdown>
						</div>
					</div>
				</el-header>
				<el-main>
					<!-- <div style="height: 100%; width: 100%; background-color: blue"></div> -->
					<Main />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts" name="layoutColumns">
import SolutionMenu from "@/components/SolutionUi/SolutionMenu/index.vue";
import SolutionInput from "@/components/SolutionUi/SolutionInput/index.vue";
import SolutionDropdown from "@/components/SolutionUi/SolutionDropdown/index.vue";
import Bell from "./components/Bell.vue";
import Main from "@/layouts/components/Main/index.vue";
</script>

<style lang="scss" scoped>
.layout-container {
	padding: 20px;
	height: 100vh;
	width: 100vw;
	box-sizing: border-box;
	background-color: rgba(243, 247, 252, 1);
}
.el-container {
	width: 100%;
	height: 100%;
	.layout-aside {
		margin-right: 30px;
	}
	.el-header {
		padding: 0;
		.header-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.search-input {
				width: 412px;
				height: 48px;
			}
			.header-right-box {
				width: 280px;
				height: 48px;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}

	.el-main {
		padding: 0;
	}
}
</style>
