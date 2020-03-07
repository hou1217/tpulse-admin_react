import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
const NAKEBAO_CHECK_HOST = process.env.VUE_APP_APP_HOST;

const spreadAllPath = "/nakebao-admin-app/mgmt/moment/promote";
const offLinePath = "/nakebao-admin-app/mgmt/moment/online";
const waterDetailPath = "/nakebao-admin-app/mgmt/moment/detail/promote";

const spreadAllUrl = NAKEBAO_CHECK_HOST + spreadAllPath;
const offLineUrl = NAKEBAO_CHECK_HOST + offLinePath;
const waterDetailUrl = NAKEBAO_CHECK_HOST + waterDetailPath;

// 测试数据

/**
 * 批量操作(推广，暂停推广)
 * @params params
 */
function spreadAll(params) {
  console.debug('checkPassApi 批量操作');
  console.debug(params);
  
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: spreadAllUrl,
      data: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 批量操作(下架)
 * @params params
 */
function offLineAll(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: offLineUrl,
      data: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
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
    axios({
      method: 'GET',
      url: waterDetailUrl,
      params: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

var CheckPassApi = {
  spreadAll,
  offLineAll,
  getWaterDetail
};

export {CheckPassApi}
