<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <!-- 2.使用组件标签 -->
    <HellWorld/>
  </div>
</template>

<script>
// 1.引入组件
import HellWorld from './components/templateExample.vue'
export default {
  name: 'App',
  // 组件映射
  components: {
    HellWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 200;
  height: 200;
}
</style>
