## 介绍
原理是NodeJS分发数据，运行在NodeJS的播放实体会控制发送。

需求是远方的女友和我能够同时播放、暂停、拖动进度条视频。

环境: 一个国内的具有公网ip的云服务器，当然测试网络可以是局域网。

下载代码在服务器上 git clone https://github.com/CarryHJR/coplayer.git

安装依赖

npm install
启动
node index.js

让女票访问ip:3000 然后自己也访问ip:3000，就可以一起看视频啦

## demo
![](http://first-carryhjr.oss-cn-shanghai.aliyuncs.com/2019-10-28-Kapture%202019-10-28%20at%2018.28.45.gif)

#### 开发环境

------

开发环境为NodeJS，利用express来定位资源，这会影响script标签的src指向，相当于托管静态资源。

Jquery + NodeJS + Socket





