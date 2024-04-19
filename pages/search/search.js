let timeId = null;
Page({
    data: {
        history: [],
        hot: ['草莓蛋糕', '草莓糕点', '奶油蛋糕'],
        result: [
            {
                id: 1,
                url: '../details2/details2',
                thumb: '/imgs/s4.png',
                title: '草莓蛋糕 7寸',
                price: 99
            },
            {
                id: 2,
                url: '../details2/details2',
                thumb: '/imgs/s5.png',
                title: '草莓糕点 100g',
                price: 19
            }
        ],
        showKeywords: false,
        keywords: ['冷饮', '西瓜', '水果捞', '热饮'],
        value: '',
        showResult: false,
    },
    cancelSearch() {
        this.setData({
            showResult: false,
            showKeywords: false,
            value: ''
        })
    },
    searchInput(e) {
        if(!e.detail.value){
            this.setData({
                showKeywords: false
            })
        }else{
            if(!this.data.showKeywords){
                timeId && clearTimeout(timeId);
                timeId = setTimeout(() => {
                    this.setData({
                        showKeywords: true
                    })
                }, 1000)
            }
        }
    },
    keywordHandle(e) {
        const text = e.target.dataset.text;
        this.setData({
            value: text,
            showKeywords: false,
            showResult: true
        })
        this.historyHandle(text);
    },
    historyHandle(value) {
        let history = this.data.history;
        const idx = history.indexOf(value);
        if (idx === -1) {
            // 搜索记录只保留8个
            if (history.length > 7) {
                history.pop();
            }
        } else {
            history.splice(idx, 1);
        }
        history.unshift(value);
        wx.setStorageSync('history', JSON.stringify(history));
        this.setData({
            history
        });
    },
    onLoad() {
        const history = wx.getStorageSync('history');
        if (history) {
            this.setData({
                history: JSON.parse(history)
            })
            console.log(this.data.history);
        }
    }
})