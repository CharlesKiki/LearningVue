## 1. vue脚手架
    用来创建vue项目的工具包
    创建项目:
        npm install -g vue-cli
        vue init webpack VueDemo
    开发环境运行:
        cd VueDemo
        npm install
        npm run dev
    生产环境打包发布
        npm run build
        npm install -g serve
        serve dist
        http://localhost:5000

###  使用 vue-cli 创建模板

------

#### 说明

vue-cli 是 vue 官方提供的脚手架工具。它可以通过NPM安装。建议使用全局安装，Vue-cli会以单独的命令行环境配置在系统环境变量中。

github: https://github.com/vuejs/vue-cli

作用: 从 https://github.com/vuejs-templates 下载模板项目

#### 创建 vue 项目

首先，安装脚手架。

npm install vue-cli

Vue-cli会提供Vue命令使用，格式的详细参数参考Github项目说明

在当前目录下生成以Webpack为打包工具的Vue模板项目

vue init webpack vue_demo

```
? Project name vue_demo
? Project description A Vue.js project
? Author Charles <HUCharles@foxmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm      

   vue-cli · Generated "vue_demo".
```

cd vue_demo

npm install

npm run dev
访问: http://localhost:8080/

##### VueCli初始化项目结构--约定

```
|-- build : webpack 相关的配置文件夹(基本不需要修改)

	|-- dev-server.js : 通过 express 启动后台服

|-- config: webpack 相关的配置文件夹(基本不需要修

	|-- index.js: 指定的后台服务的端口号和静态资源文

|-- node_modul

|-- src : 源码文

	|-- components: vue 组件及其相关资源文

	|-- App.vue: 应用根主

	|-- main.js: 应用入口 

|-- static: 静态资源文

|-- .babelrc: babel 的配置

|-- .eslintignore: eslint 检查忽略的

|-- .eslintrc.js: eslint 检查的

|-- .gitignore: git 版本管制忽略的

|-- index.html: 主页面

|-- package.json: 应用包配置

|-- README.md: 应用描述说明的 readme 
```



#### 项目的打包与发布

##### 打包

Focus：如果你并没有使用VueCli生成项目，那么很可能下面的打包命令是失效的。这是因为VueCli生成的初始化项目有标准的入口文件等项目约定，该命令依赖以上项目约定。

```
npm run build
```

##### 发布 1: 使用静态服务器工具包

[serve](https://github.com/zeit/serve) - Static file serving and directory listing。

Assuming you would like to serve a static site, single page application or just a static file (no matter if on your device or on the local network), this package is just the right choice for you.

全局安装静态服务器，serve会自动的注册全局变量，无需手动配置。

```
npm install -g serve
```

进入当前项目根目录下(dist目录的上层目录)，向网络发布指定位置的项目

```
serve dist
```

访问: http://localhost:50

##### 发布 2: 使用动态 web 服务器(tomcat)

修改配置: webpack.prod.conf.

```
output:

	publicPath: '/xxx/' //打包文件夹的

}
```

重新打包：

```
npm run build
```

修改 dist 文件夹为项目名称: xxx

将 xxx 拷贝到运行的 tomcat 的 webapps 目录下

访问: http://localhost:8080/xxx

## 2. eslint

    用来做项目编码规范检查的工具。
    基本原理: 定义了很多规则, 检查项目的代码一旦发现违背了某个规则就输出相应的提示信息
    有相应的配置, 可定制检查

## 3. 组件化编程
    vue文件包含3个部分
        <template>
          <div></div>
        </template>
        <script>
            export default {
    		  props: []/{}
              data(){},
    		  computed: {}
              methods: {},
    		  
    		  watch: {}
    		  filters: {}
    		  directives: {}
    		  components: {}
            }
        </script>
        <style>
        </style>
    组件化编码的基本流程
    	1). 拆分界面, 抽取组件
    	2). 编写静态组件
    	3). 编写动态组件
        	初始化数据, 动态显示初始化界面
        	实现与用户交互功能
    组件通信的5种方式
    	props
    	vue的自定义事件
    	pubsub第三方库
    	slot
    	vuex(后面单独讲)
    props:
        父子组件间通信的基本方式
        属性值的2大类型: 
            一般: 父组件-->子组件
            函数: 子组件-->父组件
    	隔层组件间传递: 必须逐层传递(麻烦)
    	兄弟组件间: 必须借助父组件(麻烦)
    vue自定义事件
        子组件与父组件的通信方式
        用来取代function props
        不适合隔层组件和兄弟组件间的通信
    pubsub第三方库(消息订阅与发布)
        适合于任何关系的组件间通信
    slot
        通信是带数据的标签
        注意: 标签是在父组件中解析
    vuex
        多组件共享状态(数据的管理)
        组件间的关系也没有限制
        功能比pubsub强大, 更适用于vue项目

## 4. ajax
    相关库:
        vue-resource: vue插件, 多用于vue1.x
        axios: 第三方库, 多用于vue2.x
    vue-resource使用
        // 引入模块
        import VueResource from 'vue-resource'
        // 使用插件
        Vue.use(VueResource)
        
        // 通过vue/组件对象发送ajax请求
        this.$http.get('/someUrl').then((response) => {
          // success callback
          console.log(response.data) //返回结果数据
        }, (response) => {
          // error callback
          console.log(response.statusText) //错误信息
        })
    axios使用
        // 引入模块
        import axios from 'axios'
        
        // 发送ajax请求
        axios.get(url)
          .then(response => {
            console.log(response.data) // 得到返回结果数据
          })
          .catch(error => {
        	console.log(error.message)
          })

## 5. vue-router
    vue用来实现SPA的插件
    使用vue-router
        1. 创建路由器: router/index.js
          new VueRouter({
            routes: [
              { // 一般路由
                path: '/about',
                component: about
              },
              { // 自动跳转路由
                path: '/', 
                redirect: '/about'
              }
            ]
          })
        2. 注册路由器: main.js
           import router from './router'
           	new Vue({
           		router
           	})
        3. 使用路由组件标签:
           	<router-link to="/xxx">Go to XXX</router-link>
           	<router-view></router-view>
    编写路由的3步
        1. 定义路由组件    
        2. 映射路由
        3. 编写路由2个标签
    嵌套路由
        children: [
            {
              path: '/home/news',
              component: news
            },
            {
              path: 'message',
              component: message
            }
         ]
    向路由组件传递数据
        params: <router-link to="/home/news/abc/123">
        props: <router-view msg='abc'>
    缓存路由组件
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    路由的编程式导航
    	this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
    	this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
    	this.$router.back(): 请求(返回)上一个记录路由