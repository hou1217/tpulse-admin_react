import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
const NAKEBAO_CHECK_HOST = process.env.VUE_APP_APP_HOST;

const momentListPath = "/nakebao-admin-app/mgmt/moment/list";
const searchAuthorPath = "/nakebao-admin-app/mgmt/moment/publisher/list";
const searchCategoryPath = "/nakebao-admin-app/mgmt/moment/category/list";
const authorInfoPath = "/nakebao-admin-app/mgmt/moment/detail/publisher";
const dynamicInfoPath = "/nakebao-admin-app/mgmt/moment/detail";
const operationListPath = "/nakebao-admin-app/mgmt/moment/detail/audit-history";

const momentListUrl = NAKEBAO_CHECK_HOST + momentListPath;
const searchAuthorUrl = NAKEBAO_CHECK_HOST + searchAuthorPath;
const searchCategoryUrl = NAKEBAO_CHECK_HOST + searchCategoryPath;
const authorInfoUrl = NAKEBAO_CHECK_HOST + authorInfoPath;
const dynamicInfoUrl = NAKEBAO_CHECK_HOST + dynamicInfoPath;
const operationListUrl = NAKEBAO_CHECK_HOST + operationListPath;

// 测试数据
var authors = [
  {
    name: '作者1',
    value: 'author1'
  },
  {
    name: '作者2',
    value: 'author2'
  },
  {
    name: '作者3',
    value: 'author3'
  }
];
var categories = [
  {
    name: '全家门店',
    value: 'store'
  },
  {
    name: '品牌商',
    value: 'brand'
  },
  {
    name: '公众号',
    value: 'public'
  },
  {
    name: '微博',
    value: 'weibo'
  }
];

/**
 * 获取动态列表
 * @params params
 */
function getMomentList(params) {
  console.debug('checkCommonApi');
  console.debug(JSON.parse(localStorage.getItem('ticket')));
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: momentListUrl,
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

/**
 * 获取发布者列表（暂缓）
 * @params params
 */
function getAuthorList(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: searchAuthorUrl,
      params: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(authors);
  });
}

/**
 * 获取分类列表（暂缓）
 * @params params
 */
function getCategoryList(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: searchCategoryUrl,
      params: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(categories);
  });
}

/**
 * 获取发布者详情
 * @params params
 */
function getAuthorInfo(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: authorInfoUrl,
      params: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(userInfo);
  });
}

/**
 * 获取动态详情
 * @params params
 */
function getDynamicInfo(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: dynamicInfoUrl,
      params: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(dynamicInfo);
  });
}

/**
 * 获取操作日志
 * @params params
 */
function getOperationLogList(params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: operationListUrl,
      params: params,
      headers: {
        'WALLAN-TOKEN' : localStorage.getItem('ticket')?JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"]:''
      }
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    
    // resolve(operationList);
  });
}

var CheckCommonApi = {
  getMomentList,
  getAuthorList,
  getCategoryList,
  getAuthorInfo,
  getDynamicInfo,
  getOperationLogList
};

export {CheckCommonApi}
