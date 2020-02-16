<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <!-- Focus:This is not HTML tag -->
            <!-- v-for="(comment,index) in comments"用以循环 -->
            <!-- :comment="comment" 用以传参 -->
            <!-- :key="index" 用以循环标签语法 -->
            <item v-for="(comment,index) in comments" :comment="comment" :key="index" :deleteComment='deleteComment' :index='index'/>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue'
export default {
  name: 'List',
  /* 声明接收属性，成为组件内部对象 */
  /* Focus: deleteComment方法用于传递子组件 */
  props: ['comments', 'deleteComment'],
  components: {
    Item
  }
}

</script>

<style>
.reply {
  margin-top: 0px;
}
</style>
