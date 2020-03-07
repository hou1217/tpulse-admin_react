import axios from '@/service/axios.js'
import {
  typeList,
} from './mock.js'
// 获取同步计划列表
function getTypeList (params){
  return axios.get(`/rss-admin-app/mgmt/rss/sync/category/list`,{params:params})
  // return Promise.resolve(typeList)
}
function addType(params){
  return axios.post(`/rss-admin-app/mgmt/rss/sync/category/create`,params)
  // return Promise.resolve({
  //   data:'add success'
  // })
}
function editType(params){
  return axios.post(`/rss-admin-app/mgmt/rss/sync/category/edit`,params)
  // return Promise.resolve({
  //   data:'edit success'
  // })
}
function deleteType(params){
  return axios.post(`/rss-admin-app/mgmt/rss/sync/category/delete`,params)
  // return Promise.resolve({
  //   data:'delete success'
  // })
}
const resourceApi={
  getTypeList,
  addType,
  editType,
  deleteType
}
export {
  resourceApi
}