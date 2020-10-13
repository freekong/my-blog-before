<template>
  <div class="article-list-box">
    <div class="search-box">
      <el-form label-width="100px" :inline="true">
        <el-form-item label="标题">
          <el-input style="width: 176px;" v-model="searchData.title" size="small" @keyup.enter.native="search"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input style="width: 176px;" v-model="searchData.author" size="small" @keyup.enter.native="search"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="small" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-button class="add-btn" type="success" size="small" @click="addArticle">添加文章</el-button>
    </div>
    <el-table
      :data="articleList"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        align="center">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="创建时间"
        align="center">
      </el-table-column>
      <el-table-column
        prop="update_time"
        label="修改时间"
        align="center">
      </el-table-column>
      <el-table-column 
        label="操作"
        width="120"
        align="center">
        <template slot-scope="scope">
          <span class="btn-text" @click="editArticle(scope.row)">编辑</span>
          <span class="btn-text" @click="deleteArticle(scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { addArticle, getArticleList, delArticle } from '@/api/api'
export default {
  data() {
    return {
      articleList: [],
      searchData: {
        title: '', // 文章标题
        author: '', // 作者
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    /**
     * @description: 获取文章列表
     * @param {type} 
     * @return {type} 
     */
    getList() {
      let params = {
        title: '',
        author: '',
        pageSize: 10,
        currentPage: 1
      }
      getArticleList(params).then(res => {
        if (res.data.code === 200) {
          this.articleList = res.data.data.data
        }
      })
    },
    /**
     * @description: 搜索
     * @param {type} 
     * @return {type} 
     */
    search() {
      let params = {
        title: this.searchData.title,
        author: this.searchData.author,
        pageSize: 10,
        currentPage: 1
      }
      getArticleList(params).then(res => {
        if (res.data.code === 200) {
          this.articleList = res.data.data.data
        }
      })
    },
    /**
     * @description: 删除文章
     * @param {type} 
     * @return {type} 
     */
    deleteArticle(val) {
      delArticle({id: val.id}).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getList()
        }
      })
    },
    /**
     * @description: 修改文章
     * @param {type} 
     * @return {type} 
     */
    editArticle(val) {
      this.$router.push({
        path: '/addArticle',
        query: {
          id: val.id
        }
      })
    },
    /**
     * @description: 添加文章
     * @param {type} 
     * @return {type} 
     */
    addArticle() {
      this.$router.push({
        path: '/addArticle'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list-box {
  width: 100%;
  padding: 20px 20px;
  .search-box {
    border: 1px solid #DCDFE6;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 20px;
    position: relative;
    .el-form-item {
      margin-bottom: 0;
    }
    .add-btn {
      position: absolute;
      height: 38px;
      right: 20px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .btn-text {
    cursor: pointer;
    margin-right: 15px;
    color: #67C23A;
  }
}
</style>