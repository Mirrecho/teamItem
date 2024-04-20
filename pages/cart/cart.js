// page/component/new-pages/cart/cart.js
Page({
    data: {
      carts:[],               // 购物车列表
      hasList:false,          // 列表是否有数据
      totalPrice:0,           // 总价，初始为0
      selectAllStatus:true,    // 全选状态，默认全选
      obj:{
          name:"hello"
      }
    },
    onShow() {
      this.setData({
        hasList: true,
        carts:[
          {id:1,title:'草莓糕点 100g',image:'/imgs/s5.png',num:4,price:19,selected:true},
          {id:2,title:'水果捞 100g',image:'/imgs/s6.png',num:1,price:9.9,selected:true}
        ]
      });
      this.getTotalPrice();
    },
    /**
     * 当前商品选中事件
     */
    selectList(e) {
      const index = e.currentTarget.dataset.index;
      let carts = this.data.carts;
      const selected = carts[index].selected;
      carts[index].selected = !selected;
      this.setData({
        carts: carts
      });
      this.getTotalPrice();
    },
  
    /**
     * 删除购物车当前商品
     */
    deleteList(e) {
      const index = e.currentTarget.dataset.index;
      let carts = this.data.carts;
      carts.splice(index,1);
      this.setData({
        carts: carts
      });
      if(!carts.length){
        this.setData({
          hasList: false
        });
      }else{
        this.getTotalPrice();
      }
    },
  