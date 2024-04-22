// page/component/new-pages/user/user.js
Page({
    data:{
      thumb:'',
      nickname:'',
      orders:[],
      hasAddress:false,
      address:{}
    },
    onLoad(){
      var self = this;
      /**
       * 获取用户信息
       */
      wx.getUserInfo({
        success: function(res){
          self.setData({
            thumb: res.userInfo.avatarUrl,
            nickname: res.userInfo.nickName
          })
        }
      }),
  
      /**
       * 发起请求获取订单列表信息
       */
      wx.request({
        url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
        success(res){
          self.setData({
            orders: res.data
          })
        }
      })
    }, 
})