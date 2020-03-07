import axios from '@/service/axios.js'
/**
 * 获取权限列表
 */
function getAppList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/app/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function getAppDetail(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/app/detail`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function createRole(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/app/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function deleteApp(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/app/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function updateApp(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/app/update`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
const appApi = {
  getAppList,
  getAppDetail,
  createRole,
  deleteApp,
  updateApp
}
export {
  appApi
}