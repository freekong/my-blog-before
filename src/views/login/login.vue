<template>
  <div class="login-box">
    <div class="login">
      <el-form label-width="100px;">
        <el-form-item label="账号">
          <el-input style="width: 300px;" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input style="width: 300px;" v-model="password" type="password" @keyup.enter.native="login"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 300px;" round @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/api'
import { setToken, removeToken } from '@/utils/token'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    /**
     * @description: 登录
     * @param {type} 
     * @return {type} 
     */
    login() {
      let data = {
        username: this.username,
        password: this.password
      }
      login(data).then(res => {
        if (res.data.code === 200) {
          setToken(res.data.data.token)
          this.$router.push({
            path: '/'
          })
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
  .login {
    width: 560px;
    height: 300px;
    border: 1px solid #00171F;
    border-radius: 4px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    .el-form {
      margin-left: 70px;
      margin-top: 40px;
    }
    .el-button {
      width: 300px;
      align-self: center;
      border: none;
    }
  }
}
</style>