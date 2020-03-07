import axios from '@/service/axios.js'
const SHOP_HOST = process.env.VUE_APP_SHOP_HOST;
// 测试数据
var categoryOrderRes = {
    state: '000000',
    msg: 'success',
    data: [
        // '1-1', '1-2', '1-3', '2-1', '2-2', '2-3'
    ]
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 4; j++) {
        let str = i + '-' + j;
        categoryOrderRes.data.push(str);
    }
}
console.debug(categoryOrderRes);

/**
 * 标签管理-商品标签（后台类目）
 */
function getItemCatList(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/rss-admin-app/mgmt/shopping/tag/list`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        // if (params.level === 1) {
        //     resolve(primaryCatRes);
        // } else {
        //     resolve(secondaryCatRes);
        // }
    })
}

/**
 * 标签管理-创建商品标签（后台类目）
 */
function createItemCat(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/rss-admin-app/mgmt/shopping/tag/create`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 标签管理-获取标签详情（后台类目）
 */
function getItemCatDetail(params) {
    return new Promise((resolve, reject) => {
        axios.get(`/rss-admin-app/mgmt/shopping/tag/detail?tagId=${params.tagId}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * 标签管理-编辑商品标签（后台类目）
 */
function editItemCat(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/rss-admin-app/mgmt/shopping/tag/edit`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 标签管理-删除标签（后台类目）
 */
function deleteItemCat(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/rss-admin-app/mgmt/shopping/tag/delete`, params).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    });
}



/**
 * 商品管理-商品分类（前台分类）
 */
function getFrontCategoryList(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/front-category/list`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        // resolve(frontCategoryRes);
    })
}

/**
 * 商品管理-创建分类（前台分类）
 */
function createFrontCategory(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/front-category/create`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}
/**
 * 商品管理-分类详情
 */
function getFrontCategoryDetail(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/front-category/detail`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-分类更新（前台分类）
 */
function updateFrontCategory(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/front-category/update`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-分类激活（前台分类）
 */
function changeFrontCategoryStatus(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/front-category/active`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-删除分类（前台分类）
 */
function deleteFrontCategory(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/front-category/delete`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-商品分类序列
 */
function getOrderList(params) {
    return new Promise((resolve, reject) => {
        // axios.post(`/`, params)
        //     .then((res) => {
        //         resolve(res);
        //     })
        //     .catch((err) => {
        //         reject(err);
        //     });
        resolve(categoryOrderRes);
    })
}



/**
 * 商品管理-商品列表
 */
function getGoodsList(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/tao-goods/list`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        // resolve(goodsListRes);
    })
}

/**
 * 商品管理-单个商品推广
 */
function singlePromote(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/tao-goods/promote`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-多个商品推广
 */
function multiplePromote(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/tao-goods/promote-multi`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * 商品管理-商品激活（上架下架）
 */
function changeGoodsStatus(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/tao-goods/active`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-商品删除
 */
function deleteGoods(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/tao-goods/delete`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-编辑基础信息
 */
function updateBasicInfo(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/shopping-mall/tao-goods/update`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

/**
 * 商品管理-商品详情
 */
function getGoodsDetail(params) {
    return new Promise((resolve, reject) => {
        // ?id=${params.id}
        // axios.get(`/shopping-mall/tao-goods/detail?itemId=${params.itemId}`, params)
        axios.post(`/shopping-mall/tao-goods/detail`, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    })
}


var goodsApi = {
    getItemCatList,
    createItemCat,
    getItemCatDetail,
    editItemCat,
    deleteItemCat,
    getFrontCategoryList,
    createFrontCategory,
    updateFrontCategory,
    changeFrontCategoryStatus,
    deleteFrontCategory,
    getOrderList,
    getGoodsList,
    singlePromote,
    multiplePromote,
    changeGoodsStatus,
    deleteGoods,
    updateBasicInfo,
    getGoodsDetail,
    getFrontCategoryDetail
};

export { goodsApi }