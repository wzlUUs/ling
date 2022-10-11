const baseUrl = 'https://www.lexuemiao.com/api/';//这里可通过环境变量获取不同域名
// 封装请求
module.exports = function (options) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: baseUrl + options.url,
      method:
        options.method === 'GET' ? options.data : JSON.stringify(options.data),
      data: options.data,
      header: {
        'content-type': 'application/json',
        // 'x-token': 'x-token'
      },
      success: function (res) {
        resolve(res);
        //这里可以加状态判断
      },
      fail: function (error) {
        reject(error);
      },
      complete: () => {
        setTimeout(() => {
          wx.hideLoading();
        }, 100);
      },
    });
  });
};