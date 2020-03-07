import axios from '@/service/axios.js'
const PUBLISH_HOST = process.env.VUE_APP_PUBLISH_HOST;  // 发布相关域名

// 测试数据
var appListRes = {
    state: '000000',
    msg: 'success',
    data: {
        list: [
            {
                id: '000001',
                name: 'GKD',
                typeName: '静态资源'
            },
            {
                id: '000002',
                name: 'GKDGKD',
                typeName: 'java应用'
            }
        ],
        count: 2
    }
};

var appTypeListRes = {
    state: '000000',
    msg: 'success',
    data: [
        {
            name: '全部',
            value: ''
        },
        {
            name: 'java应用',
            value: 'jvm'
        },
        {
            name: '静态资源',
            value: 'static'
        }
    ]
};

var envListRes = {
    state: '000000',
    msg: 'success',
    data: {
        list: [
            {
                id: "000001",
                name: "fat"
            },
            {
                id: "000002",
                name: "uat"
            }
        ],
        count: 2
    }
};

var appDetailRes = {
    state: '000000',
    msg: 'success',
    data: {
        id: "000001",
        name: "tpulse-stream",
        description: "动态房间",
        type: "static",
        buildScript: "var a = 1;",
        gitRepo: "git@gitlab.wallan.tech:tpulse/h5/tpulse-stream.git",
        userName: "userName",
        password: "",
        branch: "release"
    }
};

var appEnvDetailRes = {
    state: '000000',
    msg: 'success',
    data: {
        appName: 'tpulse-stream',
        name: 'test.fat',
        sourceConfig: [{
            name: ".env.fat",
            path: "/test",
            file: [{
                id: 'f00001',
                name: '.env.fat'
            }]
        }],
        publishConfig: [{
            name: ".env.fat",
            path: "/test",
            file: [{
                id: 'f00001',
                name: '.env.fat'
            }]
        }],
    }
};

var appCreateTipRes = {
    state: '000000',
    msg: 'success',
    data: [
        {
            key: 'key1',
            value: 'value1'
        },
        {
            key: 'key2',
            value: 'value2'
        }
    ]
};

var commonRes = {
    state: '000000',
    msg: 'success',
    data: {}
};

var envConfigRes = {
    state: '000000',
    msg: 'success',
    data: "NODE_ENV = 'production'↵VUE_APP_TITLE = 'fat'    ↵VUE_APP_APP_HOST= 'http://192.168.9.31:8080'"
};

var applicationPublishRes = {
    state: '000000',
    msg: 'success',
    data: {
        id: '000001',
        appName: 'tpulse-stream',
        type: 'static',
        envLevel: 'fat',
        envName: '.env.fat',
        version: '0.0.1',
        cluster: {
            name: '集群1',
            envLevel: 'fat',
            static: 'http://www.baidu.com',
            trends: 'http://www.taobao.com',
            nginx: 'var a = 1;',
            ip: '172.16.16.15',
            userName: 'tUser',
            userPass: null,
            nodeList: [{
                name: '节点1',
                bastionName: 'test',
                description: '测试节点',
                hostname: '192.168.9.95',
                user: '用户1',
                password: null,
                tags: ['test'],
                port: 8080
            }]
        }
    }
};

var publishHistoryRes = {
    state: '000000',
    msg: 'success',
    data: {
        count: 2,
        list: [{
            appName: "tpulse-admin",
            builtAt: "2019-12-12 16:39:18",
            elapsedTime: null,
            env: "fat",
            hosts: null,
            id: "5df1fcb6bf284a435a06d2f4",
            logUrl: null,
            status: "成功",
            type: "静态资源",
            version: "0.2.5"
        },
        {
            appName: "tpulse-admin",
            builtAt: "2019-12-12 16:13:45",
            elapsedTime: null,
            env: "fat",
            hosts: null,
            id: "5df1f6b9bf284a435a06d2f3",
            logUrl: null,
            status: "失败",
            type: "静态资源",
            version: "0.2.4"
        }]
    }
};


// 获取应用列表
function getAppList(params) {
    return new Promise((resolve, reject) => {
        // axios.get(`/mgmt/app/list`, { params: params, baseURL: PUBLISH_HOST })
        //     .then((res) => {
        //         resolve(res);
        //     })
        //     .catch((err) => {
        //         reject(err);
        //     });

        resolve(appListRes);
    });
}

// 应用发布
function appPublish(params) {
    return new Promise((resolve, reject) => {
        resolve(commonRes);
    });
}

// 构筑提示
function getAppCreateTip() {
    return new Promise((resolve, reject) => {
        resolve(appCreateTipRes);
    });
}

// 创建应用
function appCreate(params) {
    return new Promise((resolve, reject) => {
        resolve(commonRes);
    });
}

// 编辑应用
function appEdit(params) {
    return new Promise((resolve, reject) => {
        resolve(commonRes);
    });
}

// 获取应用类型列表
function getAppTypeList(params) {
    return new Promise((resolve, reject) => {
        // axios.get(`/mgmt/app/type/list`, { params: params, baseURL: PUBLISH_HOST })
        //     .then((res) => {
        //         resolve(res);
        //     }).catch((err) => {
        //         reject(err);
        //     });
        resolve(appTypeListRes);
    });
}

// 获取应用详情
function getAppDetail(params) {
    return new Promise((resolve, reject) => {
        // axios.get(`/mgmt/app/detail`, { params: params, baseURL: PUBLISH_HOST }).then((res) => {
        //     resolve(res);
        // }).catch((err) => {
        //     reject(err);
        // });

        resolve(appDetailRes);
    });
}

// 获取环境列表
function getEnvList(params) {
    return new Promise((resolve, reject) => {
        resolve(envListRes);
    });
}

// 获取环境详情
function getAppEnvDetail() {
    return new Promise((resolve, reject) => {
        resolve(appEnvDetailRes);
    });
}

// 创建环境
function envCreate() {
    return new Promise((resolve, reject) => {
        resolve(commonRes);
    });
}

// 编辑环境
function envEdit() {
    return new Promise((resolve, reject) => {
        resolve(commonRes);
    });
}

// 获取环境配置文件详情
function getEnvConfigDetail() {
    return new Promise((resolve, reject) => {
        resolve(envConfigRes);
    });
}

// 获取发布详情
function getPublishDetail(params) {
    return new Promise((resolve, reject) => {
        resolve(applicationPublishRes);
    });
}

// 获取发布历史列表
function getPublishHistoryList(params) {
    return new Promise((resolve, reject) => {
        resolve(publishHistoryRes);
    });
}

const myApplicationApi = {
    getAppList,
    getAppTypeList,
    getAppDetail,
    getAppEnvDetail,
    getEnvList,
    appPublish,
    appCreate,
    appEdit,
    envCreate,
    envEdit,
    getAppCreateTip,
    getPublishDetail,
    getPublishHistoryList
}
export {
    myApplicationApi
}