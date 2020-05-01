<template>  
    <view>
		<loginCom v-if="!getToken"></loginCom>
		<userCom v-else :fresh="fresh" @freshAction="freshAction"></userCom>
    </view>  
</template>
<script>
    import { mapGetters} from 'vuex' 
	import loginCom from './components/login.vue'
	import userCom from './components/user.vue'
	import * as API from '../../api/user.js'
    export default {
		data(){
			return {
				fresh:false
				// userInfo: {},
				// id:null,
				// type:null
			}
		},
		components:{
			loginCom,
			userCom
		},
		computed:{
			...mapGetters({
				getToken: "getToken"
			}),
		},
		onPullDownRefresh() {
			this.fresh = true
		},
		onLoad(e) {
			// url: '/pages/user/user?id='+this.id+"&type="+this.type,
			// console.log(e)
			// this.id=e.id
			// this.type=e.type
		},
		onShow(e) {
			this.fresh = true
		},
		mounted(){
			// console.log(this.getToken)
			// console.log(this.$store)
		},
        methods: {
			freshAction(){
				this.fresh = false
			}
			// personalCenterList() {
			// 	API.personalCenter().then(
			// 	        res => {
			// 				// console.log(res.data, '多多')
			// 				this.userInfo = res.data
			// 	        },
			// 	        err => {}
			// 	      );
			// },
        }
    }  
</script>  
<style lang="less">
</style>