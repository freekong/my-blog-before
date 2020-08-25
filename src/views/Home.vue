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
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">文章</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">文章管理</el-menu-item>
              <el-menu-item index="1-2">文章分类</el-menu-item>
              <el-menu-item index="1-3">统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right-content">
        
      </div>
    </div>
  </div>
</template>

<script>
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
      return this.$router.options.routes
    }
  },
  mounted() {
    console.log(this.routeData, '-------routeArr')
    this.login()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
    .left-menu {
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
    }
    .right-content {

    }
  }
}
</style>
