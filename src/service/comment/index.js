import axios from '@/service/axios.js'
/**
 * 获取评论列表
 */
function getCommentsList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao/comment/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
    // const res = {"state":"000000","msg":"成功","data":{"count":10,"comments":[{"commentId":"5d5a0ff0ec6e2265b1c24602","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5139cc65365b5ddaf9747c","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-03/0e1832af-79a6-493c-b1b0-da8a0714ee0b","nickname":"momo"},"commentBody":{"text":"电脑电脑电脑","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-01/705c8e81-9e59-4ce1-a570-2d1a05661d12","type":"image/jpeg","height":"710","width":"690"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1566183408706},{"commentId":"5d567c55ec6e2265b1c2450a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5502deec6e225d272471eb","headId":"http://image-uat2.maxxipoint.com/img/stampImage/cf267af4-0956-42ac-8af4-a00227443f28.jpg","nickname":"香草味"},"commentBody":{"text":"还会","video":{"videoUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/ef460bbf-db84-471d-86f4-6bfbc49536bf","duration":"6.065000","width":"1280","height":"720"}},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565949013698},{"commentId":"5d567bd1ec6e2265b1c24504","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5502deec6e225d272471eb","headId":"http://image-uat2.maxxipoint.com/img/stampImage/cf267af4-0956-42ac-8af4-a00227443f28.jpg","nickname":"香草味"},"commentBody":{"text":"刚开始","video":{"videoUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/a5bf636e-fe05-4476-b977-ceab63163fec","duration":"4.690000","width":"480","height":"360"}},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565948881772},{"commentId":"5d567657ec6e2240305becce","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"\uD83D\uDE01"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565947479253},{"commentId":"5d56068aec6e2263aa840a1a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"你好","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/01fc0990-30bb-40f1-90ab-b2626b178c5e","type":"image/jpeg","height":"3024","width":"4032"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918858326},{"commentId":"5d560660ec6e2263aa840a13","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"哈哈"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918816623},{"commentId":"5d560549ec6e2263aa840a10","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"你","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/abb2101e-941c-41a3-bbb5-d55145f52694","type":"image/jpeg","height":"2436","width":"1125"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918537436},{"commentId":"5d53e0b5ec6e22661f23078a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565778101245},{"commentId":"5d53e0b2ec6e22661f230787","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565778098914},{"commentId":"5d53e0b0ec6e22661f230784","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565778096214}],"cursor":"5d53e0b0ec6e22661f230786"}}
    // resolve(res);
  })
}
/**
 * 删除
 * @param {*} params 
 */ 
function deleteAccounts(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao/comment/remove`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
    // const res = {"state":"000000","msg":"成功","data":{"count":10,"comments":[{"commentId":"5d5a0ff0ec6e2265b1c24602","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5139cc65365b5ddaf9747c","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-03/0e1832af-79a6-493c-b1b0-da8a0714ee0b","nickname":"momo"},"commentBody":{"text":"电脑电脑电脑","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-01/705c8e81-9e59-4ce1-a570-2d1a05661d12","type":"image/jpeg","height":"710","width":"690"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1566183408706},{"commentId":"5d567c55ec6e2265b1c2450a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5502deec6e225d272471eb","headId":"http://image-uat2.maxxipoint.com/img/stampImage/cf267af4-0956-42ac-8af4-a00227443f28.jpg","nickname":"香草味"},"commentBody":{"text":"还会","video":{"videoUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/ef460bbf-db84-471d-86f4-6bfbc49536bf","duration":"6.065000","width":"1280","height":"720"}},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565949013698},{"commentId":"5d567bd1ec6e2265b1c24504","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5502deec6e225d272471eb","headId":"http://image-uat2.maxxipoint.com/img/stampImage/cf267af4-0956-42ac-8af4-a00227443f28.jpg","nickname":"香草味"},"commentBody":{"text":"刚开始","video":{"videoUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/a5bf636e-fe05-4476-b977-ceab63163fec","duration":"4.690000","width":"480","height":"360"}},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565948881772},{"commentId":"5d567657ec6e2240305becce","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"\uD83D\uDE01"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565947479253},{"commentId":"5d56068aec6e2263aa840a1a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"你好","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/01fc0990-30bb-40f1-90ab-b2626b178c5e","type":"image/jpeg","height":"3024","width":"4032"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918858326},{"commentId":"5d560660ec6e2263aa840a13","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"哈哈"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918816623},{"commentId":"5d560549ec6e2263aa840a10","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"你","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/abb2101e-941c-41a3-bbb5-d55145f52694","type":"image/jpeg","height":"2436","width":"1125"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918537436},{"commentId":"5d53e0b5ec6e22661f23078a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565778101245},{"commentId":"5d53e0b2ec6e22661f230787","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565778098914},{"commentId":"5d53e0b0ec6e22661f230784","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565778096214}],"cursor":"5d53e0b0ec6e22661f230786"}}
    // resolve(res);
  })
}
/**
 * 下架
 * @param params
 */
function offlineComment(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao/comment/offlineComment`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 上架
 * @param params
 */
function onlineComment(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao/comment/onlineComment`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 上神评
 * @param {*} params
 */
function onlineGodComment(params){
  return new Promise((resolve, reject) => {
    axios.post(`/nakebao/comment/onlineGodComment`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  });
}
/**
 * 发送回复
 */
function sendReply(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao/comment/reply`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
  })
}
/**
 * 获取复评论列表
 */
function getCommentRepliesList(params){
  return new Promise((resolve,reject) => {
    axios.post(`/nakebao/comment/commentReply/list`,params)
    .then((res) => {
      resolve(res);
    })
    .catch((err)=>{
      reject(err);
    });
    // const res = {"state":"000000","msg":"成功","data":{"count":10,"comments":[{"commentId":"5d5a0ff0ec6e2265b1c24602","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5139cc65365b5ddaf9747c","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-03/0e1832af-79a6-493c-b1b0-da8a0714ee0b","nickname":"momo"},"commentBody":{"text":"电脑电脑电脑","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-01/705c8e81-9e59-4ce1-a570-2d1a05661d12","type":"image/jpeg","height":"710","width":"690"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1566183408706},{"commentId":"5d567c55ec6e2265b1c2450a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5502deec6e225d272471eb","headId":"http://image-uat2.maxxipoint.com/img/stampImage/cf267af4-0956-42ac-8af4-a00227443f28.jpg","nickname":"香草味"},"commentBody":{"text":"还会","video":{"videoUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/ef460bbf-db84-471d-86f4-6bfbc49536bf","duration":"6.065000","width":"1280","height":"720"}},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565949013698},{"commentId":"5d567bd1ec6e2265b1c24504","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5502deec6e225d272471eb","headId":"http://image-uat2.maxxipoint.com/img/stampImage/cf267af4-0956-42ac-8af4-a00227443f28.jpg","nickname":"香草味"},"commentBody":{"text":"刚开始","video":{"videoUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/a5bf636e-fe05-4476-b977-ceab63163fec","duration":"4.690000","width":"480","height":"360"}},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565948881772},{"commentId":"5d567657ec6e2240305becce","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"\uD83D\uDE01"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565947479253},{"commentId":"5d56068aec6e2263aa840a1a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"你好","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/01fc0990-30bb-40f1-90ab-b2626b178c5e","type":"image/jpeg","height":"3024","width":"4032"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918858326},{"commentId":"5d560660ec6e2263aa840a13","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"哈哈"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918816623},{"commentId":"5d560549ec6e2263aa840a10","commentAccount":{"accType":"WANDER","accId":"g1_00_5d55088fec6e225d27247210","headId":"tx111","nickname":"全村的希望"},"commentBody":{"text":"你","images":[{"imageUrl":"http://wander-app.qn.faxinmessage.com/comment/2019-08-05/abb2101e-941c-41a3-bbb5-d55145f52694","type":"image/jpeg","height":"2436","width":"1125"}]},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565918537436},{"commentId":"5d53e0b5ec6e22661f23078a","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":0,"commentCount":0},"commentTime":1565778101245},{"commentId":"5d53e0b2ec6e22661f230787","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565778098914},{"commentId":"5d53e0b0ec6e22661f230784","commentAccount":{"accType":"WANDER","accId":"g1_00_5d5108dd65365b74fbab1bff","headId":"http://wander-app.qn.faxinmessage.com/contact/2019-08-01/e06a710a-de3f-43bd-8313-e792447e94fc","nickname":"明月清泉"},"commentBody":{"text":"12"},"whisper":false,"commentWapper":{"thumbUp":false,"praiseCount":1,"commentCount":0},"commentTime":1565778096214}],"cursor":"5d53e0b0ec6e22661f230786"}}
    // resolve(res);
  })
}



const  commentApi = {
  getCommentsList,
  deleteAccounts,
  offlineComment,
  onlineComment,
  onlineGodComment,
  sendReply,
  getCommentRepliesList,
}
export {
  commentApi
}
