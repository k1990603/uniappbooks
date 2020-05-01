import { UPDATE_NERWORK_TYPE } from '@/store/app.js'
// 修改网络状态
export const changeNetworkType=(store,type)=>{
	store.dispatch(UPDATE_NERWORK_TYPE, type)
}