<template>
    <div>
        <li class="list-group-item">
            <div class="handle">
                <!-- Vur监听函数 -->
                <a href="javascript:;" @click="deleteItem">删除</a>
            </div>
            <p class="user">
                <span>{{comment.name}}</span>
                <span>说:{{comment.comment}}</span>
            </p>
            <p class="centence">React不错!</p>
        </li>
    </div>
</template>

<script>
export default {
  props: {
    //   指定属性名和属性内容
    comment: Object,
    deleteComment: Function,
    index: Number
  },
  methods: {
    deleteItem () {
      // 对象解构，ES6语法
      const {comment, deleteComment, index} = this
      if (window.confirm(`确认删除${comment.name}的评论吗？`)) {
        deleteComment(index)
      }
    }
  }
}
</script>

<style>
li {
  transition: .5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
