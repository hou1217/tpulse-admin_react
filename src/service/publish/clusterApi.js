import axios from '@/service/axios.js'
const PUBLISH_HOST = process.env.VUE_APP_PUBLISH_HOST;  // 发布相关域名

var clusterListRes = {
    state: '000000',
    msg: 'success',
    data: {
        list: [
            {
                id: '000001',
                name: '集群1',
                gateway: '1',
                operation: '2',
                node: '3',
                env: 'fat'
            },
            {
                id: '000002',
                name: '集群2',
                gateway: '3',
                operation: '1',
                node: '2',
                env: 'uat'
            }
        ],
        count: 0
    }
};

var clusterDetailRes = {
    state: '000000',
    msg: 'success',
    data: {
        // intranet: "1",
        // extranet: "2",
        // domain: "http://www.baidu.com",
        // gateway: "var a = b;",
        // operation1: "4",
        // operation2: "5",
        // node: 'node1',
        // env: 'fat'
        name: '集群1',
        envLevel: 'env',
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
};

var clusterCreateRes = {
    state: '000000',
    msg: 'success',
    data: null
};

var clusterEditRes = {
    state: '000000',
    msg: 'success',
    data: null
};

// 集群列表
function getClusterList(params) {
    return new Promise((resolve, reject) => {
        resolve(clusterListRes);
    });
}

// 集群详情
function getClusterDetail(params) {
    return new Promise((resolve, reject) => {
        resolve(clusterDetailRes);
    });
}

// 创建集群
function createCluster(params) {
    return new Promise((resolve, reject) => {
        resolve(clusterCreateRes);
    });
}

// 编辑集群
function editCluster(params) {
    return new Promise((resolve, reject) => {
        resolve(clusterEditRes);
    });
}

const clusterApi = {
    getClusterList,
    getClusterDetail,
    createCluster,
    editCluster
}
export {
    clusterApi
}