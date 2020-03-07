const planList = {
  data:{
    list:[
      {
        planId:'0001',
        name:'同步计划1',
        category:'微博',
        syncCount:100,
        triggers:[
          {
            dateRange:null,
            dateType:'每个工作日',
            frequency:10,
            timePeriods:[
              {
                startTime:'08:00',
                endTime:'12:00'
              }
            ]
          },
          {
            dateRange:null,
            dateType:'每个周末',
            frequency:20,
            timePeriods:[
              {
                startTime:'08:40',
                endTime:'12:30'
              }
            ]
          }
        ]
      },
      {
        planId:'0002',
        name:'同步计划2',
        category:'微博',
        syncCount:100,
        triggers:[
          {
            dateRange:null,
            dateType:'每个工作日',
            frequency:10,
            timePeriods:[
              {
                startTime:'08:00',
                endTime:'12:00'
              }
            ]
          },
          {
            dateRange:null,
            dateType:'每个周末',
            frequency:20,
            timePeriods:[
              {
                startTime:'08:40',
                endTime:'12:30'
              }
            ]
          }
        ]
      }
    ],
    count:2
  }
}
const planDetail = {
  data:{
    planId: '0002',
    name:'同步计划1',
    category:'微博',
    defaultAll:false,
    rssList: [{
      "name": "1",
      "rssId": "1",
      "url": "1"
    }],
    scriptId:'脚本1',
    expectSyncCount:1,
    triggers:[
      {
        dateRange:null,
        dateType:'EVERY_WORKDAY',
        frequency:10,
        timePeriods:[
          {
            startTime:'08:00',
            endTime:'12:00'
          }
        ]
      },
      {
        dateRange:null,
        dateType:'EVERY_WEEKEND',
        frequency:20,
        timePeriods:[
          {
            startTime:'08:40',
            endTime:'12:30'
          }
        ]
      }
    ],
    syncSpeed:'4',
  }
}
const planInfo = {
  data:{
    name:'同步计划1',
    category:'微博',
    plans:[
      {
        dateRange:null,
        dateType:'每个工作日',
        frequency:10,
        timePeriods:[
          {
            startTime:'08:00',
            endTime:'12:00'
          }
        ]
      },
      {
        dateRange:null,
        dateType:'每周末',
        frequency:20,
        timePeriods:[
          {
            startTime:'08:40',
            endTime:'12:30'
          }
        ]
      }
    ],
    dateType:null,
    script:'脚本1', 
    state: false,
  }
}
const subList ={
  data:{
    list:[
      {
        rssId:'eastday_e44efc48f4ff28639332b20e7a40c463',
        name:'订阅号1',
        category:'东方号',
        tag:'美食',
        "expectTime": "12：00",
        "executeTime": "12：00",
        "syncCount": 1,
        "state": "等待同步",
        "executeUser": "用户名称1",
        url:'http://www.baidu.com',
      }
    ],
    count:1
  }
}
const scriptList ={
  data:{
    list:[
      {
        planId:'eastday_e44efc48f4ff28639332b20e7a40c463',
        name:'脚本1',
        category:'微博',
        state:'未启用',
      }
    ],
    count:1
  }
}
const scriptDetail = {
  data:{
    "planId": "eastday_e44efc48f4ff28639332b20e7a40c463",
    "name": "脚本1",
    "category": "微博",
    "content": `new Promise((resolve, reject) => {
      try{
          if($CONFIG){
              //获取简介
              $CONFIG.avatar = document.querySelector("[node-type='photo'] img").src;
              //描述
              var desc = document.querySelector("[node-type='cover_wrap'] .pf_intro").getAttribute("title");
              $CONFIG.desc = desc;
              //获取fans
              var tds = document.querySelectorAll("table.tb_counter tbody tr td");
              if(tds[1]){
                var fans = tds[1].querySelector("strong").innerText;
                $CONFIG.fans = fans;
              }
              //获取背景图
              var bgImage = document.querySelector("[node-type='cover_wrap'] [node-type='cover']").style.backgroundImage
              var regex = /url\("(.+)"\)/;
              var found = bgImage.match(regex);
              if(found && found[1]){
                  let protocol = location.protocol;
                  $CONFIG.cover = found[1].startsWith("//") ? (protocol + found[1]) : found[1];
              }
              resolve($CONFIG);
          }
      }catch(e){
          console.error("解析异常, e: ", e);              
          reject(e);
      }
    });`
  }
}
const taskDetail =  {
  data:{
    "taskId": "00001",
    "script": `new Promise((resolve, reject) => {
        try{
            if($CONFIG){
                //获取简介
                $CONFIG.avatar = document.querySelector("[node-type='photo'] img").src;
                //描述
                var desc = document.querySelector("[node-type='cover_wrap'] .pf_intro").getAttribute("title");
                $CONFIG.desc = desc;
                //获取fans
                var tds = document.querySelectorAll("table.tb_counter tbody tr td");
                if(tds[1]){
                  var fans = tds[1].querySelector("strong").innerText;
                  $CONFIG.fans = fans;
                }
                //获取背景图
                var bgImage = document.querySelector("[node-type='cover_wrap'] [node-type='cover']").style.backgroundImage
                var regex = /url\\("(.+)"\\)/;
                var found = bgImage.match(regex);
                if(found && found[1]){
                    let protocol = location.protocol;
                    $CONFIG.cover = found[1].startsWith("//") ? (protocol + found[1]) : found[1];
                }
                resolve($CONFIG);
            }
        }catch(e){
            console.error("解析异常, e: ", e);              
            reject(e);
        }
      });`,
    "url": "https://weibo.com/u/6711062248"
  }
}
export {
  planList,
  planDetail,
  planInfo,
  subList,
  scriptList,
  scriptDetail,
  taskDetail
}
