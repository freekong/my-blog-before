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
export function getArticleList(params) {
  return request({
    url: '/getArticleList',
    method: 'get',
    params
  })
}
// 获取文章详情
export function getArticleDetail(params) {
  return request({
    url: '/getArticleDetail',
    method: 'get',
    params
  })
}
// 修改文章
export function editArticle(data) {
  return request({
    url: '/modifyArticle',
    method: 'put',
    data
  })
}
// 删除文章
export function delArticle(params) {
  return request({
    url: '/delArticle',
    method: 'delete',
    params
  })
}