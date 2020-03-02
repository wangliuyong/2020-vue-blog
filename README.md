# 使用vue重构博客

# 项目初始化

```
    npm install -g vue-cli
    vue init webpack blog-client
```

# 项目启动

npm run dev

# 项目打包

npm run build

## 使用vuex需要注意的点

1.mutation必须是同步函数，异步的可以使用action

## 路由相关

使用箭头函数按需异步懒加载相关页面组件
