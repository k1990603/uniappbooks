<template>
    <view class="s-switch-container">
        <view class="s-switch-item" :class="{
                's-switch-selected': item.selected
              }"
              @tap="selectItem(item)"
              v-for="item in switchArr" :key="item.key">
            {{item.value}}
        </view>
    </view>
</template>

<script>
export default {
    name: 'SSwitch',
    props: {
        defaultValue: {
            type: Number,
            default: 0
        },
        switchList: {
            type: Array,
            default: [
                // {
                //     key: 0,
                //     value: '是'
                // },
                // {
                //     key: 1,
                //     value: '否'
                // }
            ]
        }
    },
    data () {
        return {
            switchArr: []
        }
    },
    methods: {
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
		let len = this.switchList.length
        for (let i = 0; i < len; i++) {
            const arrItem = {
                key: this.switchList[i].key,
                value: this.switchList[i].value,
                selected: this.defaultValue === this.switchList[i].key ? true : false
            }
            if (this.switchList[i].key === this.defaultValue) {
                this.$emit('switchValue', arrItem)
            }
            this.switchArr.push(arrItem)
        }
    }
}
</script>

<style lang="scss" scoped>
    .s-switch-container {
		margin: 0 auto;
        padding: 2rpx;
        display: flex;
        flex-direction: row;
        // width: 215rpx;
        height: 60rpx;
        border-radius: 100rpx;
        // border: 4rpx solid #1D8BE8;
		background-color: #fff;
    }
    .s-switch-item {
        // color: #1D8BE8;
		color: #ec008c;
        // font-size: 30rpx;
        // width: 80rpx;
		padding: 0 20rpx;
        display: flex;
        justify-content: center;
        align-items: center;
		transition: all .3s linear;
    }
    .s-switch-selected {
        color: #ffffff;
        border-radius: 40rpx;
        // background: #1D8BE8;
        background: #ec008c;
    }
</style>
