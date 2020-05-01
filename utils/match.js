  //小说
  export function bookType (type) {
    let msg = ''
    switch (type) {
    case 0:
      msg = '玄幻魔法'
      break
    case 1:
      msg = '武侠修真'
      break
    case 2:
      msg = '都市言情'
      break
    case 3:
      msg = '历史军事'
      break
    case 4:
      msg = '侦探推理'
      break
	 case 5:
	   msg = '网游动漫'
	   break
	 case 6:
	   msg = '科幻灵异'
	   break
	 case 7:
	   msg = '其他类型'
	   break
    }
    return msg
  }
  
  //漫画
  export function bookTypeDetail (type) {
    let msg = ''
    switch (type) {
    case '猜你喜欢':
      msg = 1
      break
    case '男生喜欢':
      msg = 4
      break
    case '女生喜欢':
      msg = 3
      break
    case '大家都在看':
      msg = 2
      break
    }
    return msg
  }
  
  //漫画
  export function comicType (type) {
    let msg = ''
    switch (type) {
    case '猜你喜欢':
      msg = '后宫'
      break
    case '男生喜欢':
      msg = '热血'
      break
    case '女生喜欢':
      msg = '恋爱,古风'
      break
    case '今日推荐':
      msg = ''
      break
    }
    return msg
  }
  