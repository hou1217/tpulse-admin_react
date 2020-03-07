import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
const NAKEBAO_CHECK_HOST = process.env.VUE_APP_APP_HOST;

const operateAllPath = "/nakebao-admin-app/mgmt/moment/online";

const operateAllUrl = NAKEBAO_CHECK_HOST + operateAllPath;

// 测试数据

/**
 * 批量操作
 * @params params
 */
function operateAll(params) {
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

var CheckFailApi = {
  operateAll
};

export {CheckFailApi}
