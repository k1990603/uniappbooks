<template>
	<view id="header">
		<!-- :style="[{height:bottomColor?(200 + 'upx'):(CustomBar + 'px')}]" -->
		<view class="cu-custom" :class="[bottomColor?'bottomColor':'']" >
		<!-- <view class="cu-custom"> -->
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :class="headerStatus?'flexStatus':''" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var style = ''
				// #ifdef APP-PLUS
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				// #endif
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
			bottomColor: {
				type: [Boolean, String],
				default: false
			},
			headerStatus: {
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			BackPage() {
				// #ifdef H5
				history.back()
				// #endif
				// #ifdef APP-PLUS
				uni.navigateBack({
					delta: 1
				});
				// #endif
				
			}
		}
	}
</script>

<style>
	#header .bottomColor{
		height: 200upx;
	}
	#header .bottomColor .cu-bar {
		height: 200upx;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}
	#header .cu-bar .flexStatus {
		display: flex;
	}
	/* #header .bottomColor .cu-bar{
		box-shadow:  0 0.5px 3px rgba(0, 0, 0, 0);
	}
	.bottomColor::after {
		content: '';
		width: 100%;
		height: 400%;
		position: absolute;
		top: -70upx;
		left: 0;
		border-radius: 50%;
		background-image: linear-gradient(45deg, #ec008c, #6739b6);
	} */
</style>
