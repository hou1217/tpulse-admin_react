import axios from '@/service/axios.js'
const APP_HOST = process.env.VUE_APP_APP_HOST;
// const APP_HOST = 'http://192.168.9.155:8890';

const tagByRankPath = "/nakebao-admin-app/nakebao/tag/child";
const getTagsPath = "/nakebao-admin-app/nakebao/tag/list";
const tagSubscribePath = "/nakebao-admin-app/nakebao/tag/subscribe";
const tagByNamePath = "/nakebao-admin-app/nakebao/tag/name/search";

const tagByRankUrl = APP_HOST + tagByRankPath;
const getTagsUrl = APP_HOST + getTagsPath;
const tagSubscribeUrl = APP_HOST + tagSubscribePath;
const tagBynameUrl = APP_HOST + tagByNamePath;

/**
 * 获取某一级下所有标签
 */
function getTagByRank(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: tagByRankUrl + `?tag=${params.tag}&level=2`,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });

        // resolve(primaryRes);
    });
}

/**
 * 获取标签列表
 */
function getTagList(params) {
    console.debug('getTagList');
    console.debug(params);
    let uploadParams = {};

    uploadParams['page'] = Number(params.page);
    uploadParams['pageSize'] = Number(params.pageSize);
    if (params.level) {
        uploadParams['level'] = params.level;
    }
    if (params.tag) {
        uploadParams['tag'] = params.tag;
    }
    if (params.subscribe || params.subscribe === false) {
        console.debug('subscribe=false');
        if (params.subscribe === 'false') {
            uploadParams['subscribe'] = false;
        } else {
            uploadParams['subscribe'] = params.subscribe;
        }
    }
    if (params.parent) {
        uploadParams['parentTag'] = params.parent;
    }

    if (params.sortBy || params.direction) {
        uploadParams['sortBy'] = params.sortBy || 'momentCount';
        switch (params.direction) {
            case 'ascending':
                uploadParams['direction'] = 'ASC';
                break;
            case 'descending': 
                // uploadParams['direction'] = 'DESC';
            default: 
                uploadParams['direction'] = 'DESC';
         }
    }
    console.debug(uploadParams);

    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: getTagsUrl,
            data: uploadParams,
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
}

/**
 * 订阅/取消订阅标签
 */
function tagSubscribe(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: tagSubscribeUrl,
            data: params,
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
}

/**
 * 模糊查询标签名称
 */
function getTagByName(params) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: tagBynameUrl + `?tag=${params.tag}&level=${params.level}`,
            params: {},
            headers: {
                'WALLAN-TOKEN': localStorage.getItem('ticket') ? JSON.parse(localStorage.getItem('ticket'))["WALLAN-TOKEN"] : ''
            }
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err)
        });
    });
}

var TagsApi = {
    getTagByRank,
    getTagList,
    tagSubscribe,
    getTagByName
};

export { TagsApi }