import request from '@/utils/request'

// login API 的方法如下：
// 这里使用 request 方法，它是一个基于 axios 封装的库，目前我们的 /user/login
// 接口是通过 mock 实现的，用户数据位于 /mock/user.js
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
