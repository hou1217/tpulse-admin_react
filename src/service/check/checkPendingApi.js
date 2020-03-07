import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
const NAKEBAO_CHECK_HOST = process.env.VUE_APP_APP_HOST;

const operateAllPath = "/nakebao-admin-app/mgmt/moment/audit";

const operateAllUrl = NAKEBAO_CHECK_HOST + operateAllPath;

// 测试数据


/**
 * 批量通过/不通过
 * @params params
 */
function operateAll(params) {
  console.debug('checkPendingApi 批量操作');
  console.debug(params);
  
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: operateAllUrl,
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

var CheckPendingApi = {
  operateAll,
};

export {CheckPendingApi}
