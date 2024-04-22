Page({
  //这是一个对象，它包含了页面的数据，这些数据可以在页面的WXML模板中被引用。
  data: {
    //这是一个数组，包含了页面上要显示的分类信息。每个分类是一个对象，包含name(分类名称)和id(分类标识符)两个属性。
      category: [
          {name:'蛋糕',id:'dangao'},
          {name:'糕点',id:'gaodian'},
          {name:'冷饮',id:'lengyin'},
          {name:'热饮',id:'reyin'},
          {name:'甜品',id:'tianpin'},
          {name:'水果',id:'shuiguo'}
      ],
      //是一个空数组，用于后续存放某个分类下的具体详情数据。
      detail:[],
      //这表示当前选中的分类索引，此处为0，意味着默认选中第一个分类(在这个例子中是“蛋糕”)
      curIndex: 0,
      //这可能是一个标志，用来表示页面是否处于滚动状态。
      isScroll: false,
      //是用于指定页面滚动时的目标视图，此处为“dangao”，意味着滚动的目标是“蛋糕”分类
      toView: 'dangao'
  },
  //这是微信小程序页面的一个生命周期函数，当页面已经加载完成时调用。
  onReady(){
    //在异步函数中，this 的值可能会发生变化，因此这里将 this 保存在一个变量 self 中，以便在回调函数中使用。
      var self = this;
      //这是微信小程序提供的发起网络请求的API。它接受一个对象作为参数，该对象包含请求的配置。
      wx.request({
        //这是请求发送到的URL地址。这个地址应该是服务器上一个提供特定分类详情数据的接口
          url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
          // self.setData({detail:res.data}):这是微信小程序提供的更新页面数据的方法。
          //success(res){}这是一个回调函数，当请求成功时被调用。res 是响应对象，包含了服务器返回的数据。
          success(res){    
            //setData方法接受一个对象，对象中的键是页面的 data 对象中的属性名，值是要更新的值。这里将请求返回的详情数据 res.data 赋值给页面的    
              self.setData({
                //detail数据属性
                  detail : res.data
              })
          }
      });
      
  },
  //switchTab(e){..}: 这定义了-个名为 switchTab 的函数，它接收一个参数 e，这个参数代表事件对象，通常包含了触发事件的相关信息。
  switchTab(e){
    //const self=this;: 由于在异步回调或者某些循环中 this 的指向可能会改变，这里使用const self=this; 来保存当前作用域下的 this 引用，以便在函数的其他部分或者回调函数中使用。
    const self = this;
    /*this.setData({ isScroll:
true }):这是微信小程序提供的一个方法，用于更新页面的 data 对象。setData 方法接受一个对象作为参数，对象中的键是 data 对象中的属性名，值是要更新的值。在这个例子中，它将 data 对象中的
isScrol 属性设置为 true.*/
    this.setData({
      isScroll: true
    })
    //setTimeout(function(){..}0):这是一个 setTimeout 调用，它接受两个参数:第一个参数是一个函数，第二个参数是延迟的时间(以毫秒为单位)。在这里，延迟时间设置为0，意味着函数将在当前执行栈清空后的下一个事件循环中执行，这通常用于异步更新。
    setTimeout(function(){
      //self.setData({... }):这是微信小程序中用于更新页面数据的方法。它接受一个对象作为参数，对象中的键是页面的 data对象中的属性名，值是要更新的值。
      self.setData({
        /*toView: e.target.dataset.id这里e是一个事件对象，e.target 是触发事件的元素。e.target.dataset.id 从触发事件的元素中获取 dataset 对象里的 id 属性值，并将其设置为页面 data 对象中的 toView 属性的值。*/
        toView: e.target.dataset.id,
        /*curlndex:e.target.dataset.index:类似地，这里从触发事件的元素的dataset 对象中获取 index属性值，并将其设置为页面 data对象中的 curlndex 属性的值。*/
        curIndex: e.target.dataset.index
      })
    },0)
    //setTimeout(function (){... }1):这是一个调用 setTimeout的语句，它设置了一段代码在指定的毫秒数之后执行。这里指定的延迟时间是 1毫秒。
    setTimeout(function () {
      //self.setData({isScroll:false }):这是在 setTimeout的回调函数中执行的代码，用于更新页面的 data 对象。
      //setData 是微信小程序提供的一个方法，用于更新页面的
      self.setData({
        //data 对象，从而触发页面的重新渲染。在这个例子中，它将data 对象中的 isScroll 属性设置为 false。
        isScroll: false
      })
    },1)
      
  }
  
})