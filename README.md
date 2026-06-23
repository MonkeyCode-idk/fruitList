水果购物车
基于 Vue 2 的购物车交互 Demo，数据驱动视图，支持本地持久化存储。

技术栈
Vue 2：响应式数据绑定、计算属性、侦听器

localStorage：浏览器本地存储，实现数据持久化

ES6+：箭头函数、数组方法（filter、find、reduce、every、forEach）

核心功能
商品数量增减

商品删除

全选 / 取消全选（计算属性完整写法：get + set）

总价与总数量自动统计（reduce 累加）

购物车数据自动同步到 localStorage（深度侦听）

快速运行
浏览器直接打开 index.html 即可，无需构建工具
