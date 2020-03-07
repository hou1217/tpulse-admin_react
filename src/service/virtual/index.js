import axios from '@/service/axios.js'

/**
 * 家族列表
 */
function familyList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族详情
 */
function familyDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/family/detail`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

/**
 * 创建家族
 */
function creatFamily(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/create`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 编辑家族
 */
function updateFamily(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/update`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 激活家族
 */
function activeFamily(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 删除家族
 */
function deleteFamily(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族下的订阅号列表
 */
function familyRssList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族下的订阅标签列表
 */
function familyRssTagList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss-tag/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族下的订阅号激活
 */
function familyRssActive(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族下的订阅号移除
 */
function familyRssDelete(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族下的订阅标签激活
 */
function familyRssTagActive(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss-tag/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 家族下的订阅标签移除
 */
function familyRssTagDelete(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss-tag/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 通过模板批量新建成员
 */
function createRobotByTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/create-by-template`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * 创建成员
 */
function creatRobot(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/create`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 成员列表
 */
function robotList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 更新成员
 */
function updateRobot(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/update`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 激活成员
 */
function activeRobot(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 删除成员
 */
function removeRobot(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/remove`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 成员详情
 */
function robotDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/robot/detail`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

/**
 * 成员模板详情
 */
function templateDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/template/detail`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

/**
 * 成员分配解绑房间
 */
function robotAllocateRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/allocate-room`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}





/**
 * 创建模板
 */
function creatTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/template/create`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 更新模板
 */
function updateTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/template/update`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 模板列表
 */
function templateList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/template/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 删除模板
 */
function deleteTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/template/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 按模板类型获取家族成员列表
 */
function robotListByTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/statistics-by-template`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 成员激活-按模板类型激活
 */
function robotActiveByTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/remove-by-template-model`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 成员删除-按模板类型删除成员
 */
function robotDeleteByTemplate(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/remove-by-template`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 创建房间
 */
function creatRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/create`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}


/**
 * 设置独享
 */
function setRoomType(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/set/room-type`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 编辑房间
 */
function updateRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/update`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 房间列表
 */
function roomList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 房间详情
 */
function roomDetail(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/backend/detail`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}


/**
 * 激活房间
 */
function activeRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 删除房间
 */
function deleteRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}
/**
 * 查找机器人所属房间列表
 */
function findByRobotRoomList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/backend/find-by-robot`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}

// 激活房间内成员
function activeMemberInRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/robot/active-member-in-room`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 随机分配成员信息（名字 头像）
 */
function robotRandomInfo(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/robot/random-info`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}



//房间订阅列表
function roomRssList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/rss/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}


//房间订阅标签列表
function roomRssTagList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/rss-tag/list`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//房间rss订阅
function roomAllocateRss(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/allocate-rss`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//房间rss-tag订阅
function roomAllocateRssTag(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/allocate-rss-tag`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

// 已订阅分类列表
function rssCategoryList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/family/rss/category-list`, { params: params })
      .then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
  });
}


//房间下的订阅号激活
function roomRssActive(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/rss/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//房间下的订阅号移除
function roomRssDelete(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/rss/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}


//房间下的订阅标签激活
function roomRssTagActive(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/rss-tag/active`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//房间下的订阅标签移除
function roomRssTagDelete(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/rss-tag/delete`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}



//通过订阅号id查询列表，获得订阅号是否已经在家族中订阅的状态
function rssListbyId(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss/list-by-id`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//家族下订阅号的订阅
function familyRssFollow(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss/follow`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//家族下订阅号的取消
function familyRssCancel(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss/cancel`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}


//通过订阅号id查询列表，获得订阅号是否已经在家族中订阅标签的状态
function rssTagListbyId(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss-tag/list-by-id`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//家族下订阅标签的订阅
function familyRssTagFollow(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss-tag/follow`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

//家族下订阅号的取消
function familyRssTagCancel(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/family/rss-tag/cancel`, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

/**
 * 房间动态列表
 */
function getRoomDynamicList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/moment/list`, params).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 改变房间动态状态
 */
function changeRoomDynamicStatus(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/moment/publish`, params).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

/**
 * 所有分类列表
 */
function getCategoryList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`rss-admin-app/mgmt/rss/category/list`, params).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 房间-查询可分配房间
 */
function getAllocatableRoomList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/backend/find-unbind?familyId=${params.familyId}`).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 我的房间-列表
 */
function getMyRoomList(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/backend/list-mine`, params).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 我的房间-快速创建房间
 */
function quickCreateRoom(params) {
  return new Promise((resolve, reject) => {
    axios.post(`/social/dynamic/room/easy/create`, params).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 家族详情-已订阅标签列表
 */
function roomFamilyRssTagList(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/family/rss/tag-list?familyId=${params.familyId}`).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

/**
 * 家族详情-已订阅房间标签列表
 */
function roomBackendTags(params) {
  return new Promise((resolve, reject) => {
    axios.get(`/social/dynamic/room/backend/tags?familyId=${params.familyId}`).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
}

var virtualApi = {
  familyList,
  familyDetail,
  creatFamily,
  updateFamily,
  activeFamily,
  deleteFamily,
  familyRssList,
  familyRssTagList,
  familyRssActive,
  familyRssDelete,
  familyRssTagActive,
  familyRssTagDelete,

  creatRobot,
  robotList,
  updateRobot,
  activeRobot,
  removeRobot,
  robotDetail,
  robotAllocateRoom,
  robotRandomInfo,
  templateDetail,
  createRobotByTemplate,

  creatTemplate,
  updateTemplate,
  templateList,
  deleteTemplate,
  robotActiveByTemplate,
  robotListByTemplate,
  robotDeleteByTemplate,

  setRoomType,
  creatRoom,
  updateRoom,
  deleteRoom,
  activeRoom,
  roomList,
  roomDetail,
  findByRobotRoomList,
  roomRssList,
  roomRssTagList,
  roomAllocateRss,
  roomAllocateRssTag,
  rssCategoryList,
  roomRssActive,
  roomRssDelete,
  roomRssTagActive,
  roomRssTagDelete,
  activeMemberInRoom,

  rssListbyId,
  familyRssFollow,
  familyRssCancel,
  rssTagListbyId,
  familyRssTagFollow,
  familyRssTagCancel,

  getRoomDynamicList,
  getCategoryList,
  getAllocatableRoomList,

  getMyRoomList,
  quickCreateRoom,
  roomFamilyRssTagList,
  roomBackendTags
};

export { virtualApi }
