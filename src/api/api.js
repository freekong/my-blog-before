import request from '@/utils/request'


// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 注册
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}
// 添加文章 /addArticle
export function addArticle(data) {
  return request({
    url: '/addArticle',
    method: 'post',
    data
  })
}
// 获取文章列表 /getArticleList
export function getArticle(params) {
  return request({
    url: '/getArticleList',
    method: 'get',
    params
  })
}