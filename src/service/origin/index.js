import axios from '@/service/axios.js'
/**
 * 获取订阅源列表
 */
function getSubscriptionsList(params){
  return new Promise((resolve,reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/list`,{params:params})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 创建订阅源
 * @param params
 */
function createAccount(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/mgmt/rss-platform/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 订阅源详情
 * @param params
 */
function getAuthorInfo(params){
  return new Promise((resolve, reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss-platform/detail`,{params:params})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 *
 * @param {*} params
 */
function startPublish(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/mgmt/rss-platform/moment/publish`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 获取已发布列表
 */
function getSubscriptionsPublishList(params){
  return new Promise((resolve,reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/moment/list`,{params:params})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 订阅源详情
 * */
function getSubscriptionInfo(params){
  return new Promise((resolve,reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/detail`,{params:params})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 修改订阅源
 */
function updateSubscription(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao-admin-app/mgmt/rss-platform/modify`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 发布/撤销发布online
 */
function subscribe(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao-admin-app/mgmt/rss/subscribe`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 发布/撤销发布online
 */
function online(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao-admin-app/mgmt/rss/moment/online`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 批量操作(推广，暂停推广)
 * @params params
 */
function spreadAll(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao-admin-app/mgmt/rss/moment/promote`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 订阅源来源列表
 * */
function getOriginList(params){
  return new Promise((resolve,reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/source/list`,{params:params})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 获取动态详情
 * @params params
 */
function getDynamicInfo(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/moment/detail`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 获取注水详情
 * @params params
 */
function getWaterDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/moment/detail/promote`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 获取操作日志
 * @params params
 */
function getOperationLogList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/nakebao-admin-app/mgmt/rss/moment/audit-history/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(operationList);
  });
}
const  originApi = {
  getSubscriptionsList,
  createAccount,
  getAuthorInfo,
  startPublish,
  getSubscriptionsPublishList,
  getSubscriptionInfo,
  updateSubscription,
  subscribe,
  online,
  spreadAll,
  getOriginList,
  getDynamicInfo,
  getWaterDetail,
  getOperationLogList
}
export {
  originApi
}
