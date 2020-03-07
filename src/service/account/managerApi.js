import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
const NAKEBAO_CHECK_HOST = process.env.VUE_APP_APP_HOST;

const managerNameListPath = "/";
const storeListPath = "/";
const phoneListPath = "/";
const managerListPath = "/nakebao-admin-app/nakebao/user/search";
const managerInfoPath = "/nakebao-admin-app/nakebao/user/get";
const createManagerPath = "/nakebao-admin-app/nakebao/user/create";
const editManagerPath = "/nakebao-admin-app/nakebao/user/update";
const deleteManagerPath = "/nakebao-admin-app/nakebao/user/delete";
const operateAllPath = "/nakebao-admin-app/nakebao/user/privilege/switch";
const qiniuTokenPath = "/nakebao-admin-app/mgmt/qiniu/token";
const managerImportPath = "/nakebao-admin-app/nakebao/user/import";

const managerNameListUrl = APP_HOST + managerNameListPath;
const storeListUrl = APP_HOST + storeListPath;
const phoneListUrl = APP_HOST + phoneListPath;
const managerListUrl = APP_HOST + managerListPath;
const managerInfoUrl = APP_HOST + managerInfoPath;
const createManagerUrl = NAKEBAO_CHECK_HOST + createManagerPath;
const editManagerUrl = APP_HOST + editManagerPath;
const deleteManagerUrl = APP_HOST + deleteManagerPath;
const operateAllUrl = APP_HOST + operateAllPath;
const qiniuTokenUrl = NAKEBAO_CHECK_HOST + qiniuTokenPath;
const managerImportUrl = APP_HOST + managerImportPath;

// 测试数据
var managerNames = [];
var stores = [
  {
    name: '店铺1',
    value: 'shop1'
  },
  {
    name: '店铺2',
    value: 'shop2'
  },
  {
    name: '店铺3',
    value: 'shop3'
  }
];
var phones = [
    '12345678901',
    '12345678902',
    '12345678903'
];
var managers = [
  {
    id: '123',
    name: '张三',
    phoneNum: '12345678901',
    storeName: '全家耀华路店',
    storeImg: 'http://wander-static.dev.qn.faxinmessage.com/crawler/2019-07-05/7cc5695c-cd19-46b2-906b-11fc1f6ac4ec',
    storeDesc: '店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介',
    rights: true,
    powers: ['动态发布']
  },
  {
    id: '124',
    name: '李四',
    phoneNum: '12345678903',
    storeName: '全家成山路店',
    storeImg: 'http://wander-static.dev.qn.faxinmessage.com/crawler/2019-07-05/7cc5695c-cd19-46b2-906b-11fc1f6ac4ec',
    storeDesc: '店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介',
    rights: false,
    powers: ['动态发布', '动态发布']
  },
  {
    id: '125',
    name: '王五',
    phoneNum: '12345678904',
    storeName: '全家虹梅路店',
    storeImg: 'http://wander-static.dev.qn.faxinmessage.com/crawler/2019-07-05/7cc5695c-cd19-46b2-906b-11fc1f6ac4ec',
    storeDesc: '店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介店铺简介',
    rights: true,
    powers: ['动态发布']
  }
];
var managerInfo = {
  name: '店长1',
  phoneNum: '12345678901',
  store: '店铺1',
  storePortrait: 'http://wander-static.dev.qn.faxinmessage.com/crawler/2019-07-05/7cc5695c-cd19-46b2-906b-11fc1f6ac4ec',
  storeDesc: 'd店铺简介店铺简介',
  powers: [1]
};

/**
 * 获取店长名称列表（暂缓）
 * @params params
 */
function getManagerNameList(params) {
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'GET',
    //   url: managerNameListUrl,
    //   params: params,
    //   headers: {
    //     'WALLAN-TOKEN' : JSON.parse(localStorage.getItem('SESSION_KEY'))?JSON.parse(localStorage.getItem('SESSION_KEY'))["token"]:''
    //   }
    // }).then((res) => {
    //   resolve(res);
    // }).catch((err) => {
    //   reject(err);
    // });
    
    resolve(managerNames);
  });
}

/**
 * 获取店铺列表（暂缓）
 * @params params
 */
function getStoreList(params) {
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'GET',
    //   url: storeListUrl,
    //   params: params,
    //   headers: {
    //     'WALLAN-TOKEN' : JSON.parse(localStorage.getItem('SESSION_KEY'))?JSON.parse(localStorage.getItem('SESSION_KEY'))["token"]:''
    //   }
    // }).then((res) => {
    //   resolve(res);
    // }).catch((err) => {
    //   reject(err);
    // });
    
    resolve(stores);
  });
}

/**
 * 获取手机号列表（暂缓）
 * @params params
 */
function getPhoneList(params) {
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'GET',
    //   url: phoneListUrl,
    //   params: params,
    //   headers: {
    //     'WALLAN-TOKEN' : JSON.parse(localStorage.getItem('SESSION_KEY'))?JSON.parse(localStorage.getItem('SESSION_KEY'))["token"]:''
    //   }
    // }).then((res) => {
    //   resolve(res);
    // }).catch((err) => {
    //   reject(err);
    // });
    
    resolve(phones);
  });
}

/**
 * 获取店长列表
 * @params params
 */
function getManagerList(params) {
  console.debug('managerApi getManagerList');
  console.debug(params);
  
  // let upload = {};
  // for (let key of Object.keys(params)) {
  //   if (typeof params[key] === "object") {
  //     if ()
  //   } else {
  //     if (params[key]) {
  //       upload[key] = params[key];
  //     }
  //   }
  // }
  
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: managerListUrl,
      data: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      console.debug('getManagerList res');
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(managers);
  });
}

/**
 * 获取店长详情
 * @params params
 */
function getManagerInfo(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: managerInfoUrl + `?id=${params.id}`,
      params: {},
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
 * 新增店长
 * @params params
 */
function createManager(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: createManagerUrl,
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
 * 编辑店长
 * @params params
 */
function editManager(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: editManagerUrl,
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
 * 删除店长
 * @params params
 */
function deleteManager(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: deleteManagerUrl + `?id=${params.id}`,
      params: {},
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
 * 获取七牛token
 * @params params
 */
function getQiniuToken(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: qiniuTokenUrl + `?module=${params.module}`,
      params: {},
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
 * 批量操作权限
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

/**
 * 导入店长
 * @params params
 */
function importManager(params) {
  console.debug('managerApi importManager');
  console.debug(params);
  let uploadParams = new FormData();
  for (let key in params) {
    uploadParams.append(key, params[key], params[key].name);
  }
  
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: managerImportUrl,
      data: uploadParams,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:'',
        'Content-Type': 'multipart/form-data;'
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

var ManagerApi = {
  getManagerNameList,
  getStoreList,
  getPhoneList,
  getManagerList,
  getManagerInfo,
  createManager,
  editManager,
  getQiniuToken,
  operateAll,
  deleteManager,
  importManager
};

export {ManagerApi}
