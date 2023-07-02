<template>
	<section>
		<div class="container card-hover-moveTo">
			<!-- 登录 -->
			<div class="user signinBx">
				<div class="imgBx">
					<div class="user-tips">登录</div>
					<div style="text-align: center">
						<img src="@/assets/images/login_pic.svg" style="width: 80%" />
					</div>
				</div>
				<div class="formBx">
					<Login-form @toggle="toggleForm" />
				</div>
			</div>
			<!-- 注册 -->
			<div class="user signupBx">
				<div class="formBx">
					<Register-form @toggle="toggleForm" />
				</div>
				<div class="imgBx">
					<div class="user-tips">注册</div>
					<div style="text-align: center">
						<img src="@/assets/images/login_pic.svg" style="width: 80%" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts" name="login">
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
const toggleForm = () => {
	const section = document.querySelector("section") as HTMLElement;
	const container = document.querySelector(".container") as HTMLElement;
	container.classList.toggle("active");
	section.classList.toggle("active");
};
</script>

<style lang="scss" scoped>
section {
	position: relative;
	min-height: 100vh;
	background: #f4f8fc;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	.container {
		position: relative;
		width: 816px;
		height: 564px;
		background: #fff;
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		border-radius: 24px;
		.user {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			.imgBx {
				position: relative;
				width: 50%;
				height: 100%;
				transition: 0.5s;
				background-color: rgba(63, 140, 255, 1);
				.user-tips {
					width: 100%;
					height: 40%;
					font-size: 40px;
					text-align: center;
					line-height: 240px;
					color: #ffffff;
				}
			}
			.formBx {
				box-sizing: border-box;
				position: relative;
				width: 50%;
				height: 100%;
				background: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				transition: 0.5s;
			}
		}
		.signupBx {
			// 当没有激活时，注册页穿透
			pointer-events: none;
			.formBx {
				top: 100%;
			}
			.imgBx {
				top: -100%;
				transition: 0.5s;
			}
		}

		.signinBx {
			top: 0;
			.formBx {
				top: 0;
			}
			.imgBx {
				top: 0;
				transition: 0.5s;
			}
		}

		&.active {
			.signupBx {
				// 激活时，注册页设置该属性为它的默认值（auto） 可以正常点击访问
				pointer-events: auto;
				.formBx {
					top: 0;
				}
				.imgBx {
					top: 0;
				}
			}
			.signinBx {
				.formBx {
					top: 100%;
				}
				.imgBx {
					top: -100%;
				}
			}
		}
	}
}

@media (max-width: 991px) {
	section {
		.container {
			max-width: 400px;
			.imgBx {
				display: none;
			}
			.user {
				.formBx {
					width: 100%;
				}
			}
			&.active {
				.signinBx {
					.formBx {
						// 登录卡片切换时的方向
						top: -100%;
					}
				}
			}
		}
	}
}
</style>
