<template>
  <div class="sidebar" :class="mode==='horizontal'?'horizontal':'vertical'">
    <el-menu
      class="sidebar-el-menu"
      :mode="mode"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#242f42"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :unique-opened="false"
      :router="true"
      @select="selectMenu">
      <template v-for="item in items">
        <!-- 第一次判断 -->
        <template v-if="item.subs">
          <el-submenu :index="item.index"  :key="item.index">
            <template slot="title">
              <!-- <i :class="item.icon"></i> -->
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <!-- 第二次判断 -->
              <template v-if="subItem.subs">
                <el-submenu :index="subItem.index" :key="subItem.index">
                  <template slot="title">
                    <span slot="title">{{ subItem.title }}</span>
                  </template>
                  <template v-for="(grandSubItem) in subItem.subs">
                    <!-- 第三次判断 -->
                    <template v-if="grandSubItem.subs">
                      <el-submenu :index="grandSubItem.index" :key="grandSubItem.index">
                        <template slot="title">
                          <span slot="title">{{ grandSubItem.title }}</span>
                        </template>
                        <template v-for="(grandSubItem2) in grandSubItem.subs">
                          <!-- 第四次判断 -->
                          <template v-if="grandSubItem2.subs">
                            <el-submenu :index="grandSubItem2.index" :key="grandSubItem2.index">
                              <template slot="title">
                                <span slot="title">{{ grandSubItem2.title }}</span>
                              </template>
                              <el-menu-item
                                  v-for="(grandSubItem3,i) in grandSubItem2.subs"
                                  :key="i"
                                  :index="grandSubItem3.index"
                                  :class="origin===grandSubItem3.index?'is-active':''">
                                  {{ grandSubItem3.title }} 
                              </el-menu-item>
                            </el-submenu>
                          </template>
                          <template v-else>
                            <el-menu-item :index="grandSubItem2.index" :key="grandSubItem2.index" :class="origin===grandSubItem2.index?'is-active':''">
                              {{ grandSubItem2.title }}
                            </el-menu-item>
                          </template>
                        </template>
                      </el-submenu>
                    </template>
                    <template v-else>
                      <el-menu-item :index="grandSubItem.index" :key="grandSubItem.index" :class="origin===grandSubItem.index?'is-active':''">
                        {{ grandSubItem.title }}
                      </el-menu-item>
                    </template>
                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="subItem.index" :key="subItem.index" :class="origin===subItem.index?'is-active':''">
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index"  :key="item.index" :class="origin===item.index?'is-active':''">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import bus from '@/assets/js/Bus';
  import LoginApi from '@/service/login'
  export default {
    name: "nkbMenu",
    props:{
      mode:{
        type:String,
        default:'horizontal'
      }
    },
    data() {
      return {
        collapse: false,
        items: [],
        // activeIndex:'',
        origin:''
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path;
      }
    },
    watch:{
      // $route(){
      //   this.selectMenu(this.activeIndex)
      // }
      '$route'(to, from) {
        this.origin = to.meta.origin
      }
    },
    created() {
      this.judgeRole();
      bus.$on('collapse', data => {
        this.collapse = data;
      })
    },
    methods: {
      selectMenu(index,indexPath){
        console.log(index,indexPath);
        // this.activeIndex = index;
      },
      judgeRole() {
        //调用登陆接口
        LoginApi.getRouterList({})
        .then((res) => {
          console.log('获取数据成功');
          console.log(res);
          const data  = res.data? res.data.root.subs:[];
          this.items = [{
            icon: 'el-icon-document',
            index: '/hello',
            title: '首页',
          }].concat(data);
        })
        .catch((err)=>{
          console.error('数据异常：', err);
          // this.toastData.msg = err.msg ? err.msg : '登陆失败';
          // this.toastVisible = true;
        });
        return ;
        this.items = [
          {
            icon: 'el-icon-document',
            index: 'check',
            title: '动态审核',
            subs: [
              {
                title: '待审核',
                index: '/checkPending'
              },
              {
                title: '已通过',
                index: '/checkPass'
              },
              {
                title: '未通过',
                index: '/checkFail'
              }
            ]
          },
          {
            icon: 'el-icon-document',
            index: 'account',
            title: '账号管理',
            subs: [
              {
                title: '全家',
                index: '/manager'
              }
            ]
          },
          {
            icon: 'el-icon-document',
            index: 'rights',
            title: '权限管理',
            subs: [
              {
                title: '角色管理',
                index: '/role'
              },
              {
                title: '用户管理',
                index: '/account'
              },
              
            ]
          },
          {
            icon: 'el-icon-document',
            index: 'content',
            title: '内容管理',
            subs: [
              {
                title: '标签管理',
                index: '/labelManagement'
              },
              // {
              //   title: '运营号',
              //   index: '/subscriptions'
              // },
             
            ]
          },
          {
            icon: 'el-icon-document',
            index: 'subscribe',
            title: '订阅管理',
            subs: [
              // {
              //   title: '添加订阅号',
              //   index: '/creatSubscribe'
              // },
              {
                title: '订阅号',
                index: 'origins',
                subs:[
                  // {
                  //   title: '微博',
                  //   index: '/microblog',
                  // },
                  {
                    title: '东方号',
                    index: '/east',
                  },
                  // {
                  //   title: '运营号',
                  //   index: '/operation',
                  // },
                ]
              },
              {
                title: '订阅标签',
                index: '/subscribeLabel'
              },
            ]
          },
          {
            icon: 'el-icon-document',
            index: 'game',
            title: '游戏管理',
            subs: [
              {
                title: '游戏分类',
                index: '/classify'
              },
              {
                title: '游戏列表',
                index: '/gameList'
              },
              {
                title: '游戏推荐',
                index: '/gameRecommend'
              },
            ]
          },
          {
            icon: 'el-icon-document',
            index: 'tag',
            title: '订阅标签及订阅号',
            subs: [
              {
                title: '订阅标签',
                index: '/subscribeTags'
              },
              {
                title: '订阅号',
                index: '/origins'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .sidebar {
    &.vertical{
      display: block;
      position: absolute;
      left: 0;
      top: 70px;
      bottom: 0;
      width 205px
      .sidebar-el-menu:not(.el-menu--collapse) {
        width: 205px;
      } 
    }
    &.horizontal{
      float:left;
      display: block;
      height: 100%;
    }
  }

  
  
  .sidebar > ul {
    height: 100%;
    overflow hidden
    overflow-y: auto;
  }
</style>
