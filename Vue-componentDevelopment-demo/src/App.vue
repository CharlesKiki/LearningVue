<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- 利用标签进行父子组件传递方法 -->
      <Add :addComment='addComment'/>
      <!-- 利用标签进行父子组件传值 -->
      <!-- 传递是逐层的，无法直接传递非子组件 -->
      <List :comments='comments' :deleteComment='deleteComment'/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  /* Focus:data在子组件中是一个方法 */
  data () {
    return {
      comments:
      [
        {
          name: 'Anne',
          comment: 'Vue is simple'
        },
        {
          name: 'Yong',
          comment: 'Vue is pure'
        },
        {
          name: 'Charles',
          comment: 'Vue is hard'
        }
      ]
    }
  },
  methods: {
    /* addComment:effect on List component */
    addComment (comment) {
      this.comments.unshift(comment)
    },
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    List
  }
}

</script>

<style>
</style>
