import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/user/lists',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createUser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: `/user/${data.id}`,
    method: 'post',
    data
  })
}

export function hiddenUser(data) {
  return request({
    url: `/user/hidden/${data.id}`,
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: `/user/${data.id}`,
    method: 'delete',
    data
  })
}

export function getUserByNo(userNo) {
  return request({
    url: `/user/check/${userNo}`,
    method: 'get'
  })
}

export function addBalance(data) {
  return request({
    url: '/balance/add',
    method: 'post',
    data
  })
}

export function balanceLog(query) {
  return request({
    url: '/balance/lists',
    method: 'get',
    params: query
  })
}
