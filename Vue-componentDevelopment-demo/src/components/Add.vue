<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <!-- Vue DataBinding -->
        <input type="text" class="form-control" placeholder="用户名" v-model="name"/>
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <!-- Vue DataBinding -->
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right"  @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  props: {
    addComment: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  components: {},
  methods: {
    // 提交回调方法
    add () {
      // 1.检查输入合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('姓名或者内容不能为空')
      }
      // 2.合成数据类型
      const comment = {
        name,
        content
      }
      // 3.添加数据到comments中
      // Focus:AppVUE.addComment
      this.addComment(comment)

      // 4.清空输入
      this.name = ''
      this.content = ''
    }
  }
}
</script>

<style>
</style>
