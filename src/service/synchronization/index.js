import {
  planList,
  planDetail,
  planInfo,
  subList,
  scriptList,
  scriptDetail,
  taskDetail
} from './mock.js'
import axios from '@/service/axios.js'
// 获取同步计划列表
function getPlanList (params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/list`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(planList);
  });
}
function startOrStop (params){
  return new Promise((resolve, reject) => {
    resolve({
      data:'启动/暂停成功'
    });
  });
}
function deletePlan(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/delete`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:'删除成功'
    // });
  });
}
function getPlanDetail(params){
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/plan/detail`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(planDetail);

  });
}
function deleteRssIdList(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/rss/delete`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:'删除成功'
    // });

  });
}
function getAllSubList(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/list`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:{
    //     "list": [
    //       {
    //         "rssId": "eastday_e44efc48f4ff28639332b20e7a40c463",
    //         "tag": "美食",
    //         "url": "http://www.baidu.com",
    //         "headId": "1",
    //         "name": "订阅号1"
    //       }
    //     ],
    //     "count": 1
    //   }
    // });

  });
}
function getRssListByName(params){
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/filter-by-name`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:[
    //     {
    //       "rssId": "1",
    //       "name": "1",
    //       "headId": "1"
    //     }
    //   ]
    // });

  });
}
function addRss(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/rss/add`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:"添加成功"
    // });

  });
}
// 寻找默认同步计划
function findDefaultPlan(params){
  return axios.get(`/rss-admin-app/mgmt/rss/plan/find-default`,{params:params})
}
function getSubList (params){
  console.log(params);
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/plan/rss/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(subList);
  });
}
function createPlan (params){
  console.log(params);
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/create`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(subList);
  });
}
function editPlan (params){
  console.log(params);
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/edit`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(subList);
  });
}
function getScriptList (params){
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/plan/script/list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(scriptList);
  });
}
function getScriptDetail (params){
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/plan/script/detail`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(scriptDetail);
  });
}

function deleteScript(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/script/delete`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:"删除成功"
    // });

  });
}
function createScript(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/script/create`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:"新增成功"
    // });

  });
}
function editScript(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/mgmt/rss/plan/script/edit`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:"编辑成功"
    // });

  });
}
function getTask(params){
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/plan/task/get`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve(taskDetail);

  });
} 
function checkMoment(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-archive-app/inner/crawler/rss/moment/check-by-category`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:'success'
    // });

  });
}
function sendDataBack(params){
  return new Promise((resolve, reject) => {
    axios.post(`/rss-admin-app/plan/task/report`,params)
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:'success'
    // });

  });
} 
function getRssScriptList (params){
  return new Promise((resolve, reject) => {
    axios.get(`/rss-admin-app/mgmt/rss/plan/script/rss-list`,{params:params})
    .then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
    // resolve({
    //   data:[
    //     {
    //       name:'脚本1',
    //       content:`new Promise((resolve, reject) => {
    //         try{
    //             if($CONFIG){
    //                 //获取简介
    //                 $CONFIG.avatar = document.querySelector("[node-type='photo'] img").src;
    //                 //描述
    //                 var desc = document.querySelector("[node-type='cover_wrap'] .pf_intro").getAttribute("title");
    //                 $CONFIG.desc = desc;
    //                 //获取fans
    //                 var tds = document.querySelectorAll("table.tb_counter tbody tr td");
    //                 if(tds[1]){
    //                   var fans = tds[1].querySelector("strong").innerText;
    //                   $CONFIG.fans = fans;
    //                 }
    //                 //获取背景图
    //                 var bgImage = document.querySelector("[node-type='cover_wrap'] [node-type='cover']").style.backgroundImage
    //                 var regex = /url\\("(.+)"\\)/;
    //                 var found = bgImage.match(regex);
    //                 if(found && found[1]){
    //                     let protocol = location.protocol;
    //                     $CONFIG.cover = found[1].startsWith("//") ? (protocol + found[1]) : found[1];
    //                 }
    //                 resolve($CONFIG);
    //             }
    //         }catch(e){
    //             console.error("解析异常, e: ", e);              
    //             reject(e);
    //         }
    //       });`
    //     }
    //   ]
    // });
  });
}
function judgeHasDefaultAll(params){
  return axios.get(`/rss-admin-app/mgmt/rss/plan/category-has-default-all`,{params:params})
}
const synchronizationApi={
  getPlanList,
  startOrStop,
  deletePlan,

  getPlanDetail,
  deleteRssIdList,
  getAllSubList,
  getRssListByName,
  addRss,
  findDefaultPlan,
  getSubList,
  createPlan,
  editPlan,

  getScriptList,
  getScriptDetail,
  deleteScript,
  createScript,
  editScript,
  getTask,
  checkMoment,
  sendDataBack,

  getRssScriptList,
  judgeHasDefaultAll
}
export {
  synchronizationApi
}