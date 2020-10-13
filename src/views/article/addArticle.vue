<template>
  <div class="add-article-box">
    <div class="article-title-set">
      <el-form label-width="180px" :inline="true">
        <el-form-item label="作者：">
          <el-input style="width: 180px;" :disabled="mode === 2" v-model="author"></el-input>
        </el-form-item>
        <el-form-item label="标题：">
          <el-input style="width: 180px;" v-model="title"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @blur="onEditorBlur($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <div class="btn-box">
      <el-button size="mini" v-if="mode === 1" type="primary" @click="addArticleContent">发布</el-button>
      <el-button size="mini" v-if="mode === 2" type="primary" @click="editorArticle">发布</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import { addArticle, getArticleDetail, editArticle } from '@/api/api'
export default {
  components: {quillEditor},
  data() {
    return {
      mode: '', // 模式 1：添加 2：编辑
      editId: 0, // 要修改的id
      title: '', // 文章标题
      author: '', // 作者
      editor: null,   // 富文本编辑器对象
      content: `<p></p><p><br></p><ol></ol>`, // 富文本编辑器默认内容
      editorOption: { //  富文本编辑器配置
        modules: {
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            // ['link', 'image', 'video']
          ],
          // handlers: {
          //   'image': function (value) {
          //     if (value) {
          //       console.log('自定义图片')
          //     } else {
          //       this.quill.format('image', false)
          //     }
          //   }
          // }
          // imageDrop: true,
          // imageResize: {
          //   displayStyles: {
          //     backgroundColor: 'black',
          //     border: 'none',
          //     color: 'white'
          //   },
          //   modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          // }
        },
        theme: 'snow',
        placeholder: '请输入正文'
      },
    }
  },
  mounted() {
    this.editor = this.$refs.myQuillEditor.quill;
    console.log(this.$route.query.id, '=================query')
    if (this.$route.query.id != undefined) {
      this.mode = 2
      this.editId = this.$route.query.id
      this.getDeatil()
    } else {
      this.mode = 1
    }
  },
  methods: {
    onEditorReady (editor) {},
    // 富文本编辑器 失去焦点事件
    onEditorBlur (editor) {},
    // 富文本编辑器 获得焦点事件
    onEditorFocus (editor) {},
    // 富文本编辑器 内容改变事件
    onEditorChange (editor) {
      console.log(this.content, '=========editor')
    },
    /**
     * @description: 修改文章
     * @param {type} 
     * @return {type} 
     */
    editorArticle() {
      var that = this
      let data = {
        id: this.editId,
        title: this.title,
        content: this.content
      }
      editArticle(data).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '修改成功',
            onClose: function() {
              that.$router.push({
                path: '/articleList'
              })
            }
          })
        }
      })
    },
    /**
     * @description: 获取文章详情
     * @param {type} 
     * @return {type} 
     */
    getDeatil() {
      getArticleDetail({id: this.editId}).then(res => {
        if (res.data.code === 200) {
          this.title = res.data.data[0].title
          this.content = res.data.data[0].content
          this.author = res.data.data[0].author
        }
      })
    },
    /**
     * @description: 添加文章
     * @param {type} 
     * @return {type} 
     */
    addArticleContent() {
      let data = {
        title: this.title,
        author: this.author,
        content: this.content
      }
      addArticle(data).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: "添加成功"
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.add-article-box {
  padding: 20px;
  height: 900px;
  .article-title-set {
    margin-top: 15px;
  }
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    min-height: 600px;
  }
  .btn-box {
    margin-top: 15px;
    text-align: right;
  }
}
</style>