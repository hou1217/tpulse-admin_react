import axios from '@/service/axios.js'



/**
 *获得上传token
 */
function getQiniuToken(params) {
  return new Promise((resolve, reject) => {
    axios.get(`rss-admin-app/mgmt/qiniu/token`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**订阅标签***************** */
/**
 * 订阅标签-标签动态列表
 */
function getTagMomentList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag-subscribe/moment/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅标签-动态发布/撤销发布
 */
function momentPublish(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag-subscribe/moment/publish`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 订阅标签-动态审核历史
 */
function auditHistory(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag-subscribe/moment/audit-history`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅号分类列表
 */
function getCategoryList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/category/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅号详情
 */
function getRssDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/detail`,{params:params})
    
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 同步号详情
 */
function getSyncDetail(params) {
  return axios.get(`/rss-admin-app/mgmt/rss/sync/detail`,{params:params})
}
/**
 * 添加同步号
 */
function createRss(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/sync/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
    // resolve({
    //   data:'添加成功'
    // })
  })
}

/**
 * 信息流详情
 */
function getRssMomentDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/moment/detail`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}






/**订阅号 **/
/**
 * 动态列表
 */
function getMomentList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/moment/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**订阅号 **/
/**
 * 粉丝数筛选条件
 */
function getFansFilterList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/fans-filter/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 同步号-微博关键字模糊列表
 */
function weiboSearchByKeyword(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/sync/search-by-keyword`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 同步号-微博列表
 */
function getWeiboList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/sync/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:{
    //     "list": [
    //       {
    //         "headId": "xx",
    //         "tag": "xx",
    //         "fans": 1,
    //         "state": false,
    //         "url": "http://www.baidu.com",
    //         "name": "xxx",
    //         "planState": false
    //       },
    //       {
    //         "headId": "xxx",
    //         "tag": "xxx",
    //         "fans": 11,
    //         "state": true,
    //         "url": "http://www.baidu.com",
    //         "name": "xxxx",
    //         "planState": true
    //       }
    //     ],
    //     "count": 1
    //   }
    // })
  });
}
/**
 * 同步号-编辑微博
 */
function editSync(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/sync/edit`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 同步号-微博上架/下架
 */
function rssActivate(params){
  return axios.post(`/rss-admin-app/mgmt/rss/sync/activate`,params)
}
/**
 * 同步号-微博删除
 */
function weiboDelete(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/sync/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 订阅号-动态发布/撤销
 */
function subscribeOnline(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/moment/subscribe/online`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 订阅号-东方号关键字模糊列表
 */
function eastdaySearchByKeyword(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/eastday/search-by-keyword`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅号-东方号列表
 */
function getEastdayList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/eastday/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅号-东方号上架/下架
 */
function eastdayOnline(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/eastday/online`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 订阅号-编辑东方号
 */
function eastdayEdit(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/eastday/edit`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

// 同步计划
/**
 * 东方号-同步计划列表
 */
function getTagScheduleList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag-schedule/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 东方号-根据关键字获得同步计划列表
 */
function TagScheduleSearchByKeyword(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag-schedule/search-by-keyword`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 东方号-新建同步计划
 */
function tagSchduleCreate(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag-schedule/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 东方号-同步计划详情
 */
function getTagScheduleDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag-schedule/detail`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}
/**
 * 东方号-编辑同步计划
 */
function tagSchduleEdit(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag-schedule/edit`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 东方号-同步计划启动/暂停
 */
function tagSchduleActivate(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag-schedule/activate`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 东方号-删除同步计划
 */
function tagSchduleDelete(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag-schedule/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 订阅号-运营号关键字模糊列表
 */
function operationSearchByKeyword(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss-platform-as-rss/search-by-keyword`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅号-运营号列表
 */
function getOperationList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss-platform-as-rss/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 订阅号-运营号上架/下架
 */
function operationOnline(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss-platform-as-rss/online`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 订阅号-运营号编辑
 */
function operationEdit(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/inner/mgmt/rss-platform/edit`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 订阅号-运营号删除
 */
function operationDelete(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss-platform-as-rss/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 查询订阅号列表
 */
function getRssList(params) {
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 名称查询订阅号
 */
function getRssListByName(params) {
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/filter-by-name`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}


var subscribeApi = {
  getQiniuToken,
  //订阅标签
  getTagMomentList,
  momentPublish,
  auditHistory,
  getCategoryList,
  getRssDetail,
  getSyncDetail,
  getRssMomentDetail,
  //添加订阅号
  createRss,
  //订阅号-动态列表
  getMomentList,
  getFansFilterList,
  //发布/撤销
  subscribeOnline,
  //同步号
  weiboSearchByKeyword,
  getWeiboList,
  editSync,
  rssActivate,
  weiboDelete,
  //订阅号-东方号
  eastdaySearchByKeyword,
  getEastdayList,
  eastdayOnline,
  eastdayEdit,
  //同步计划
  getTagScheduleList,
  TagScheduleSearchByKeyword,
  tagSchduleCreate,
  getTagScheduleDetail,
  tagSchduleEdit,
  tagSchduleActivate,
  tagSchduleDelete,
  //订阅号-运营号
  operationSearchByKeyword,
  getOperationList,
  operationOnline,
  operationEdit,
  operationDelete,

  // 订阅号-通用
  getRssList,
  getRssListByName
}
export {subscribeApi}