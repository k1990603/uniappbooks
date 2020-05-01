<template>
	<image :src="url" :mode="fill"></image>
</template>

<script>
export default {
    name: 'loayImg',
    props: {
        imgUrl: {
            type: String,
            default: ''
        },
		fill: {
			type: String,
			default: 'aspectFill'
		}
    },
    data () {
        return {
            url: '../../static/images/loading.gif'
            // url: 'http://localhost:8080/books/static/images/loading.gif'
        }
    },
    methods: {
    },
    created () {
		// #ifdef H5
		//判断浏览器
		var Browser=new Object();  
		Browser.userAgent=window.navigator.userAgent.toLowerCase();  
		Browser.ie=/msie/.test(Browser.userAgent);  
		Browser.Moz=/gecko/.test(Browser.userAgent); 
		
		var temp = new Image()
		temp.src = this.imgUrl //只会请求一次
		if(Browser.ie){
		        img.onreadystatechange =()=> { 
		            if(temp.readyState=="complete"||temp.readyState=="loaded"){  
		                this.url = this.imgUrl
		            }  
		        }          
		    }else if(Browser.Moz){ 
		        temp.onload=()=> {  
		            if(temp.complete==true){  
		                this.url = this.imgUrl
		            }  
		        }          
		    } 
		// #endif
		// #ifdef APP-PLUS
		this.url = this.imgUrl
		// #endif
			
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
