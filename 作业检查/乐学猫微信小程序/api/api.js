import request  from '../http/request' 

export const getTopCate=(data = {})=> {
    return request({
        // baseURL: hostConfig.xxx,
        url: "app/home/getSecondClassify/1?classify_id=1",
        method: "GET",
        data,
    });
}
// 轮播图
export const swiper=(data = {})=> {
  return request({
      // baseURL: hostConfig.xxx,
      url: "app/home/banner/1/4",
      method: "GET",
      data,
  });
}
// 免费直播课
export const classify=(data = {})=> {
  return request({
      url: "app/home/marketingCourse/1?classify_id=1",
      method: "GET",
      data,
  });
}

//图片验证码
export const yzmimg=(data = {})=> {
    return request({
        url: "app/getImgCode",
        method: "GET",
        data,
    });
}

//获取手机验证码
export const phoneyzm=(data = {})=> {
    return request({
        url: "getsmscode",
        method: "POST",
        data,
    });
}