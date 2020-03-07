import axios from '@/service/axios.js'

/**
 * 获取标签列表
 * @params params
 */
function getTagList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 获取标签详情
 * @params params
 */
function getTagDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag/detail`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 新建标签
 */
function creatTag(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag/create`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 编辑标签
 */
function editTag(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag/edit`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 删除标签
 */
function deleteTag(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag/delete`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 激活/取消激活标签
 */
function activeTag(params){
  return new Promise((resolve,reject) => {
    axios.post(`/rss-admin-app/mgmt/tag/activate`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}

/**
 * 查询某个级别下的所有标签
 * @params params
 */
function findBylevel(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/tag/find-by-level`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}


/**
 * 
 */


var tagManagrmentApi = {
  getTagList,
  getTagDetail,
  findBylevel,
  creatTag,
  editTag,
  deleteTag,
  activeTag

};

export {tagManagrmentApi}
