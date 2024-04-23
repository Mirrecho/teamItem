Page({

  data: {
      category: [
          {name:'蛋糕',id:'dangao'},
          {name:'糕点',id:'gaodian'},
          {name:'冷饮',id:'lengyin'},
          {name:'热饮',id:'reyin'},
          {name:'甜品',id:'tianpin'},
          {name:'水果',id:'shuiguo'}
      ],

      detail:[],
      curIndex: 0,
      isScroll: false,
      toView: 'dangao'
  },
  switchTab(e){
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function(){
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    },0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    },1)
      
  }
  
})