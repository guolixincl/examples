# 自定义组件库模板架构

## 目录结构
|-- build       打包命令
|-- components  组件定义
|-- sites       示例网站
  |-- src
    |-- demos   组件的demo页
    |-- views
      |-- Demo.vue  展示单个组件的demo，数据来自demos目录
      |-- Doc.vue   展示说明文档，数据来自打包后的组件readme.md文件
      |-- Home.vue  列举所有组件

## 命令
```
npm run site // 启动示例网站开发模式（更改组件源码时可以实时同步）
npm run build // 打包组件为单一文件，输出到/lib目录下
npm run build:components  // 单独打包每个组件到/lib目录，与babel-plugin-import结合使用按需加载
```