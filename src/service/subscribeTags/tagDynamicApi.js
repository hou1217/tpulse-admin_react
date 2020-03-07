import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
const NAKEBAO_CHECK_HOST = process.env.VUE_APP_APP_HOST;

const categoriesPath = "";
const tagInfoPath = "";
const dynamicsPath = "/nakebao-admin-app/mgmt/news/list";
const spreadPath = "/nakebao-admin-app/mgmt/news/promote";
const publishPath = "/nakebao-admin-app/mgmt/news/online";
const authorInfoPath = "/nakebao-admin-app/mgmt/news/publisher/detail";
const dynamicInfoPath = "/nakebao-admin-app/mgmt/news/detail";
const spreadInfoPath = "/nakebao-admin-app/mgmt/news/detail/promote";
const logInfoPath = "/nakebao-admin-app/mgmt/news/log";

const categoriesUrl = APP_HOST + categoriesPath;
const tagInfoUrl = APP_HOST + tagInfoPath;
const dynamicsUrl = APP_HOST + dynamicsPath;
const spreadUrl = APP_HOST + spreadPath;
const publishUrl = APP_HOST + publishPath;
const authorInfoUrl = APP_HOST + authorInfoPath;
const dynamicInfoUrl = APP_HOST + dynamicInfoPath;
const spreadInfoUrl = APP_HOST + spreadInfoPath;
const logInfoUrl = APP_HOST + logInfoPath;

// 测试数据
var categories = [
    {
        name: '微博',
        value: '微博'
    },
    {
        name: '全家门店',
        value: '全家门店'
    }
];
var tagInfo = {
    name: '标签名称',
    subscribed: true,
    under: '一级标签1'
};
var dynamics = {
    state: '000000',
    data: {
        list: [
            {
                "momentId": "5d5bbd75ec6e221bd6e3a570",
                "type": "MOMENT",
                "momentBody": {
                    "bodyType": "MOMENT",
                    "body": {
                        "text": {
                            "content": "发个动态发点表情[微笑][微笑][微笑]"
                        }
                    }
                },
                "publishTime": 1566293365143,
                "platform": "PUBM",
                "accId": "g1_00_5d511da465365b74fbab1c01",
                "accType": "WANDER",
                "authority": "PUBLIC",
                "countForward": 0,
                "comment": {
                    "commentWapper": {
                        "thumbUp": false,
                        "praiseCount": 0,
                        "commentCount": 0,
                        "forwardCount": 0
                    }
                },
                "clicks": 0,
                "authorityAffect": {

                },
                "account": {
                    "accId": "g1_00_5d511da465365b74fbab1c01",
                    "accType": "WANDER",
                    "headId": "",
                    "nickname": "就爱吃西瓜",
                    "maskNickname": "就爱吃西瓜",
                    "category": "全家门店"
                },
                "promoteClicks": 0,
                "realClicks": 0,
                "promoteState": "END",
                "state": "AUDIT_WAITING",
                "forward": false
            },
            {
                "momentId": "5d5bb92cec6e221bd6e3a569",
                "type": "MOMENT",
                "momentBody": {
                    "bodyType": "MOMENT",
                    "body": {
                        "text": {
                            "content": "不吐[坏笑][欠揍][闭嘴][闭嘴]"
                        }
                    }
                },
                "publishTime": 1566292268636,
                "platform": "PUBM",
                "accId": "g1_00_5d5502deec6e225d272471eb",
                "accType": "WANDER",
                "authority": "PUBLIC",
                "countForward": 0,
                "comment": {
                    "commentWapper": {
                        "thumbUp": false,
                        "praiseCount": 0,
                        "commentCount": 0,
                        "forwardCount": 0
                    }
                },
                "clicks": 0,
                "authorityAffect": {

                },
                "account": {
                    "accId": "g1_00_5d5502deec6e225d272471eb",
                    "accType": "WANDER",
                    "headId": "",
                    "nickname": "香草味",
                    "maskNickname": "香草味",
                    "category": "全家门店"
                },
                "promoteClicks": 0,
                "realClicks": 0,
                "promoteState": "END",
                "state": "AUDIT_WAITING",
                "forward": false
            }
        ],
        count: 1
    }
}
var authorInfo = {
    state: '000000',
    data: {
        name: 'yzy',
        category: '全家门店',
        tag: {
            primary: '一级标签',
            secondary: '二级标签'
        }
    }
}
var dynamicInfo = {
    "state": "000000",
    "data": {
        "momentId": "5d5bddb8ec6e224fcb2f4974",
        "type": "MOMENT",
        "momentBody": {
            "bodyType": "MOMENT",
            "body": {
                "text": {
                    "content": "没有的表情发一个[憧憬]"
                }
            }
        },
        "publishTime": 1566301624989,
        "platform": "PUBM",
        "accId": "g1_00_5d511da465365b74fbab1c01",
        "accType": "WANDER",
        "authority": "PUBLIC",
        "countForward": 0,
        "comment": {
            "commentWapper": {
                "thumbUp": false,
                "praiseCount": 1,
                "commentCount": 0,
                "forwardCount": 0
            }
        },
        "clicks": 0,
        "authorityAffect": {

        },
        "account": {
            "accId": "g1_00_5d511da465365b74fbab1c01",
            "accType": "WANDER",
            "headId": "",
            "nickname": "就爱吃西瓜",
            "maskNickname": "就爱吃西瓜",
            "category": "全家门店"
        },
        "promoteClicks": 0,
        "realClicks": 0,
        "promoteState": "END",
        "state": "PUBLISHED",
        "forward": false
    }
}
var spreadInfo = {
    "state": "000000",
    "data": {
        "clickConfig": {
            "timeUnit": "HOUR",
            "speed": 1,
            "goal": 1,
            "id": "5d649d9f37968af6352847f1",
            "current": 0,
            "momentId": "5d5cbe0fec6e224fcb2f4c03",
            "type": 1,
            "status": 1,
            "createdAt": 1566875039798,
            "updatedAt": 1566875039798
        },
        "state": "START"
    }
}
var logInfo = {
    "state": "000000",
    "data": {
        "list": [
            {
                "momentId": "5d5cbe0fec6e224fcb2f4c03",
                "opt": "启用推广",
                "operator": "nakebao",
                "optTime": "2019-08-27 11:03:59",
                "msg": "",
                "optState": "操作成功"
            },
            {
                "momentId": "5d5cbe0fec6e224fcb2f4c03",
                "opt": "审核通过",
                "operator": "nkbAudit",
                "optTime": "2019-08-21 11:51:46",
                "msg": "",
                "optState": "操作成功"
            }
        ],
        "count": 2
    }
}

/**
 * 获取分类列表
 */
function getCategories(params) {
    return new Promise((resolve, reject) => {
        // axios({
        //     method: 'GET',
        //     url: categoriesUrl,
        //     params: params,
        //     headers: {
        //         'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
        //     }
        // }).then((res) => {
        //     resolve(res);
        // }).catch((err) => {
        //     reject(err);
        // });

        resolve(categories);
    });
}

/**
* 获取标签信息
*/
function getTagInfo() {
    return new Promise((resolve, reject) => {
        // axios({
        //     method: 'GET',
        //     url: tagInfoUrl,
        //     params: params,
        //     headers: {
        //         'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
        //     }
        // }).then((res) => {
        //     resolve(res);
        // }).catch((err) => {
        //     reject(err);
        // });

        resolve(tagInfo);
    });
}

/**
* 获取获取动态列表
*/
function getDynamics(params) {
    let query = `?`;
    if (params.tag) query+=`tag=${params.tag}&`;
    if (params.category) query+=`category=${params.category}&`;
    if (params.page || params.page == 0) query+=`page=${params.page}&`;
    if (params.pageSize || params.pageSize) query+=`pageSize=${params.pageSize}&`;
    if (params.direction) query+=`direction=${params.direction}&`;
    if (params.sort) query+=`sort=${params.sort}&`;
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            // url: dynamicsUrl + `?tag=${params.tag}&category=${params.category}&page=${Number(params.page)}&pageSize=${Number(params.pageSize)}&direction=${params.direction}&sort=${params.sort}`,
            url: dynamicsUrl + query,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });

        // resolve(dynamics);
    });
}

/**
* 获取推广/停推
*/
function spread(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: spreadUrl,
            data: params,
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });

        // resolve({});
    });
}

/**
* 获取发布/撤销发布
*/
function publish(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: publishUrl,
            data: params,
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });

        // resolve({});
    });
}

/**
 * 获取发布者信息
 */
function getAuthorInfo(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: authorInfoUrl + `?accId=${params.accId}`,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });

        // resolve(authorInfo);
    });
}

/**
 * 获取动态详情
 */
function getDynamicInfo(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: dynamicInfoUrl + `?momentId=${params.momentId}`,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
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
 * 获取推广详情
 */
function getSpreadInfo(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: spreadInfoUrl + `?momentId=${params.momentId}`,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });

        // resolve(spreadInfo);
    });
}

/**
 * 获取日志详情
 */
function getLogInfo(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: logInfoPath + `?momentId=${params.momentId}`,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });

        // resolve(logInfo);
    });
}

var TagDynamicApi = {
    getCategories,
    getTagInfo,
    getDynamics,
    spread,
    publish,
    getAuthorInfo,
    getDynamicInfo,
    getSpreadInfo,
    getLogInfo
};

export { TagDynamicApi }