<template>
    <view>
		<view v-for="(item_, index) in floors" :key="index" class="solid-bottom">
			<!-- <view class="floor1"> -->
				<view v-if="index%2 != 1" class="cu-bar bg-white margin-top">
					<view class="action">
						<text class="cuIcon-titles text-orange "></text> {{ item_.title }}
					</view>
					<view class="action text-orange" @tap="toNavigate" data-url="/pages/two/comic/comicType/comicType" :data-id="item_.title">
						<text>更多</text>
						<text class="lg cuIcon-right"></text>
					</view>
				</view>
				<!-- <view class="cu-card article no-card"> -->
					<navigator v-if="index%2 != 1" v-for="(itemOne,num) in item_.content" :key="num" class="cu-card article no-card" :url="'/pages/two/comic/comicDetail/comicDetail?comicId='+itemOne.id" hover-class="navigator-hover">
					<view class="cu-item shadow">
						<!-- <view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view> -->
						<view class="content">
							<!-- <image :src="itemOne.coverPic"
							 mode="aspectFill"></image> -->
							 <loayImg :imgUrl="itemOne.coverPic"></loayImg>
							<view class="desc">
								<view class="text-content"> 
									<view class="text-black">{{ itemOne.title }}</view>
									<text>{{ itemOne.summary }}</text>
								</view>
								<view>
									<view v-if="num%2 !== 1" class="cu-tag bg-red light sm round">{{ itemOne.category.slice(0, -1) }}</view>
									<view v-if="num%2 === 1" class="cu-tag bg-gradual-green light sm round">{{ itemOne.category.slice(0, -1) }}</view>
								</view>
							</view>
						</view>
					</view>
					</navigator>
				<!-- </view> -->
			<!-- </view> -->
			
			<view v-if="index%2 === 1" class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-titles text-orange "></text> {{ item_.title }}
				</view>
				<view class="action text-orange" @tap="toNavigate" data-url="/pages/two/comic/comicType/comicType" :data-id="item_.title">
					<text>更多</text>
					<text class="lg cuIcon-right"></text>
				</view>
			</view>
			<view v-if="index%2 === 1" class="cu-card dynamic grid col-2 bg-white no-card">
				<view class="cu-item shadow" v-for="(item,index) in item_.content" :key="index">
					<navigator :url="'/pages/two/comic/comicDetail/comicDetail?comicId='+item.id">
					<view class="grid flex-sub padding-lr col-1 grid-square">
						<view class="bg-img">
							<!-- <image :src="item.coverPic" mode="aspectFill"></image> -->
							<loayImg :imgUrl="item.coverPic"></loayImg>
						</view>
					</view>
					<view class="text-content">
						<view class="text-black" style="marginTop:20rpx">{{ item.title }}</view>
						<view class="text-cut text-gray" style="width:320rpx;fontSize:20rpx">{{ item.summary }}</view>
					</view>
					</navigator>
				</view>
			</view>
		</view>
    </view>
</template>

<script>
import loayImg from "../../../../components/loayImg/loayImg.vue"
export default {
    name: 'comicList',
	components: {
		loayImg
	},
	data() {
		return {
			// avatar:[
			// 	{
			// 		value: 'similar',
			// 		label: '分类',
			// 		color: 'orange',
			// 		url: '/pages/two/comic/classification/classification'
			// 	},
			// 	{
			// 		value: 'rank',
			// 		label: '排行',
			// 		color: 'green',
			// 		url: '/pages/two/comic/classification/classification'
			// 	},
			// 	{
			// 		value: 'selection',
			// 		label: 'VIP',
			// 		color: 'blue',
			// 		url: '/pages/two/comic/classification/classification'
			// 	}
			// ]
		}
	},
    props: {
        floors: {
            type: Array,
            default: []
        }
    },
    methods: {
		toNavigate(e) {
			// console.log(e)
			let url = e.currentTarget.dataset.url
			let id = e.currentTarget.dataset.id
			uni.navigateTo({
				url: url + "?category=" + id
			})
		},
        selectItem (info) {
            if (info.selected === false) {
                for (const item of this.switchArr) {
                    if (info.key === item.key) {
                        item.selected = true
                        this.$emit('switchValue', item)
                    } else {
                        item.selected = false
                    }
                }
            }
        }
    },
    created () {
		// let len = this.switchList.length
  //       for (let i = 0; i < len; i++) {
  //           const arrItem = {
  //               key: this.switchList[i].key,
  //               value: this.switchList[i].value,
  //               selected: this.defaultValue === this.switchList[i].key ? true : false
  //           }
  //           if (this.switchList[i].key === this.defaultValue) {
  //               this.$emit('switchValue', arrItem)
  //           }
  //           this.switchArr.push(arrItem)
  //       }
    }
}
</script>

<style lang="less">
		// .comicImg {
		// 	position: relative;
		// }
	.cu-card.dynamic>.cu-item {
		box-sizing: border-box;
		display: inline-block;
		margin-left: 0;
		margin-right: 0;
		.text-content {
			padding: 0 30rpx;
		}
	}
</style>
