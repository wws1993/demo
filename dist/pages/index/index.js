"use strict";
// index.js
// 获取应用实例
// const app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        contentStyle: 'mt-_24px_',
        classNames: "bg-_url_qhttpscssxxxdcomsxxdwebpq__ text-_h123456_ text-_50px_ bg-_hfff_",
        wildContent: '******',
        arr: [1]
    },
    onLoad: function () { },
    copyText: function (e) {
        const txt = e.currentTarget.dataset.text;
        wx.setClipboardData({
            data: txt,
            success: function (res) {
                wx.getClipboardData({
                    success: function (res) {
                        wx.showToast({
                            title: '复制成功！',
                            icon: 'success',
                            duration: 1000
                        });
                    }
                });
            }
        });
    }
});
