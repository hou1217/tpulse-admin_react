import axios from '@/service/axios.js'

var versionListRes = {
    state: '000000',
    msg: 'success',
    data: {
        list: [
            {
                id: '000001',
                version: '0.0.1',
                desc: '测试版本'
            },
            {
                id: '000002',
                version: '0.0.2',
                desc: '测试版本'
            }
        ],
        count: 2
    }
};

var versionDetailRes = {
    state: '000000',
    msg: 'success',
    data: {
        version: '0.0.1',
        desc: '测试版本',
        app: [{
            appNo: null,
            description: "huaqiangu单机模式",
            id: "5dee1cec340138fe4baecbd0",
            lastBuiltAt: null,
            lastBuiltStatus: null,
            name: "huaqiangu-standalone-app",
            type: "jvm",
            typeName: "java应用"
        }, {
            appNo: "079",
            description: "pandengzhe-report",
            id: "5d8c8842827a604b178948bc",
            lastBuiltAt: null,
            lastBuiltStatus: null,
            name: "pandengzhe-report",
            type: "jvm",
            typeName: "java应用"
        }, {
            appNo: null,
            description: "纳客宝后台管理系统",
            id: "5d565baa827a604b17655f01",
            lastBuiltAt: null,
            lastBuiltStatus: null,
            name: "jixiang-feeds-admin",
            type: "static",
            typeName: "静态资源"
        }]
    }
};

function getVersionList(params) {
    return new Promise((resolve, reject) => {
        resolve(versionListRes);
    });
}

function getVersionDetail(params) {
    return new Promise((resolve, reject) => {
        resolve(versionDetailRes);
    });
}

const versionApi = {
    getVersionList,
    getVersionDetail
}
export {
    versionApi
}