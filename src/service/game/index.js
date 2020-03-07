import axios from '@/service/axios.js'
// import  './mock.js'
// 全局的 axios 默认值
const GAME_HOST = process.env.VUE_APP_GAME_HOST
/**
 * 游戏相关的接口
 * @param {*} params 
 */
function getClassifications(params){
  return new Promise((resolve,reject) => {
    axios.get(`/game/lobby/category`,{params:params,baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data1);
      reject(err);
    });
  })
}
function getCategoryDetail(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/category/detail`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data2);
      reject(err);
    });
  })
}
function showOrHide(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/category/hide`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data2);
      reject(err);
    });
  })
}
function showOrHideGame(params){
  return new Promise((resolve,reject) => {
    axios.post(`game/lobby/game/hide`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data2);
      reject(err);
    });
  })
}
function update(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/category/update`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data2);
      reject(err);
    });
  })
}

function getQiniuToken(params){
  return new Promise((resolve,reject) => {
    axios.get(`/game/lobby/qiniu/token`,{params:params,baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data3);
      reject(err);
    });
  })
}
function getGamesList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/game/list`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data3);
      reject(err);
    });
  })
}
function addGame(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/game/create`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data3);
      reject(err);
    });
  })
}
function updateGame(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/game/update`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data3);
      reject(err);
    });
  })
}
function deleteGame(params){
  return new Promise((resolve,reject) => {
    axios.get(`/game/lobby/game/delete`,{params:params,baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data3);
      reject(err);
    });
  })
}

function startOrStop(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/game/promote`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
function getRecommendList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/recommend/${params.board}`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data4);
      reject(err);
    });
  })
}
function addRecommend(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/recommend/${params.board}/create`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data4);
      reject(err);
    });
  })
}
function updateRecommend(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/recommend/${params.board}/update`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data4);
      reject(err);
    });
  })
}
function offTheShelf(params){
  return new Promise((resolve,reject) => {
    axios.post(`/game/lobby/recommend/${params.board}/hide`,params,{baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data4);
      reject(err);
    });
  })
}
function deleteRecommend(params){
  return new Promise((resolve,reject) => {
    axios.get(`/game/lobby/recommend/${params.board}/delete`,{params:params,baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data4);
      reject(err);
    });
  })
}
function getGameTags(params){
  return new Promise((resolve,reject) => {
    axios.get(`/game/lobby/game/tag?tag=x`,{params:params,baseURL:GAME_HOST})
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      // resolve(data4);
      reject(err);
    });
  })
}
const gameApi = {
  getClassifications,
  getCategoryDetail,
  showOrHide,
  showOrHideGame,
  update,//

  getQiniuToken,
  getGamesList,
  getGameTags,
  addGame,
  updateGame,
  deleteGame,
  startOrStop,

  getRecommendList,
  addRecommend,
  updateRecommend,
  offTheShelf,
  deleteRecommend,
  
}
export {
  gameApi
}