import axios from '@/service/axios.js'
function getUserList(params){
  return axios.get(`/social-app/mgmt/moment-room/userprofile/list`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
}
function getRoomList(params){
  return axios.get(`/social-app/mgmt/moment-room/roomprofile/list`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
}
function getUserBehaviorList(params){
  return axios.get(`/social-app/mgmt/ubt/list`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
}
function getRoomDetail(params){
  return axios.get(`/social-app/mgmt/moment-room/roomprofile/detail`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
}
function getUserDetail(params){
  return axios.get(`/social-app/mgmt/moment-room/userprofile/detail`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
}
function getUserBehaviorDetail(params){
  return axios.get(`/social-app/mgmt/ubt/detail`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
}
//根据房间名筛选房间
function searchRoomByKeyword(params){
  return axios.get(`/social-app/mgmt/moment-room/search-by-keyword`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
} 
//根据用户名筛选用户
function searchUserByKeyword(params){
  return axios.get(`/social-app/mgmt/user/search-by-keyword`,{params:params})
  return Promise.resolve({
    data:'get success'
  })
} 
const recommendApi={
  getUserList,
  getRoomList,
  getUserBehaviorList,
  getRoomDetail,
  getUserDetail,
  getUserBehaviorDetail,
  searchRoomByKeyword,
  searchUserByKeyword
}
export {
  recommendApi
}