import axios from '@/service/axios.js'
/**
 * 获取权限列表
 */
function getAccountList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/account-app/account/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function getAccountDetail(params){
  return new Promise((resolve,reject) => {
    axios.post(`/account-app/inner/account/info`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function updateAccount(params){
  return new Promise((resolve,reject) => {
    axios.post(`/security-app/account/role/bind`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
const accountApi = {
  getAccountList,
  getAccountDetail,
  updateAccount
}
export {
  accountApi
}