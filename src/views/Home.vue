<template>
  <div class="contain">
    <header>
      <div class="header-text">
        <span>帮助</span>
        <span>注销</span>
      </div>
    </header>
    <div class="main">
      <div class="left-menu">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
          <template v-for="(item, index) in routeData">
            <el-submenu v-if="!item.onlyOne" :key="index" :index="item.path">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item-group v-for="child in item.children" :key="child.name">
                  <el-menu-item v-if="!child.hidden" :index="child.path">{{child.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-if="item.onlyOne" :key="index" :index="item.path">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
        <template>
          <div class="menu-set-box">
            <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="foldMenu"></i>
          </div>
        </template>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle } from '@/api/api'
export default {
  name: 'Home',
  data() {
    return {
      isCollapse: false,
      username: '',
      password: ''
    }
  },
  computed: {
    routeData() {
      return this.$router.options.routes.filter(item => !item.hidden)
    }
  },
  mounted() {
    console.log(this.routeData, '-------routeArr')
  },
  methods: {
    /**
     * @description: 折叠菜单
     * @param {type} 
     * @return {type} 
     */
    foldMenu() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    add() {
      let data = {
        title: 'test111',
        author: 'djh',
        content: '生理健康管理师大哥肯定是开了个理论上的   速度快根据老师过来开始了的价格啦dfbdfbdfbdfsbs'
      }
      addArticle(data).then(res => {

      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/color.scss";
.contain {
  header {
    height: 50px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.5);
    .header-text {
      height: 50px;
      float: right;
      line-height: 50px;
      span {
        display: inline-block;
        width: 60px;
        color: $normalFont;
        cursor: pointer;
      }
    }
  }
  .main {
    display: flex;
    height: 100%;
    .left-menu {
      height: 100%;
      position: relative;
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
      .menu-set-box {
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: right;
        i {
          cursor: pointer;
          font-size: 28px;
          color: #333;
        }
      }
    }
    .right-content {
      width: 100%;
    }
  }
}
</style>
