# oppo 手机商城

## 项目简介

手机商城是模仿 OPPO 手机商城官网的一款基于服务端渲染（SSR）的程序，主要包括商城页面的搭建，以及用户逻辑交互设计。主要分为导航栏，轮播图展示，商品分类展示，以及站点推荐等模块的搭建。

## 代码仓库

- GitHub: github.com/Nalamal/nuxt_oppo

## 技术栈

Nuxt3、vite、TypeScript、element-plus 和 pinia 等。

## 项目功能

- 导航栏模块:搭建导航栏，利用 NuxtPage 组件实现页面跳转。
- 轮播图模块:通过 element-plus 的 carousel 走马灯组件，轮播热门商品。
- 商品分类查询模块:根据商品型号分类查询对应商品信息显示到页面上。
- 商品展示模块:根据系列展示商品卡片信息。
- 页尾模块:标注客户权益、热门机型、用户协议信息等。

## 文件资源结构

```text
nuxt_oppo
├─ .nuxt                  # nuxt生成文件
├─ .output                # 打包资源文件
├─ .assets                # 静态资源文件
├─ .components            # 全局组件
├─ .layouts               # 全局布局组件
├─ .pages                 # 页面组件
├─ .public                # 静态资源文件
├─ .server                # 服务端渲染配置文件
├─ .service               # 网络请求配置文件
├─ .store                 # pinia 状态管理仓库
├─ .gitignore             # 忽略 git 提交
├─ .npmrc                 # npm 包管理配置文件
├─ app.vue                # 项目主组件
├─ nuxt.config.ts         # nuxt 全局配置
├─ package-lock.json      # 依赖包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
```

## 常用命令

- clone

```sh
# github
https://github.com/Nalamal/vue_shop.git
```

- install

```sh
npm install
```

- run

```sh
npm run dev
```

- build

```sh
npm run build
```

- lint

```sh
npm run lint
```

- format

```sh
npm run format
```

- preview

```sh
npm run preview
```

## 项目截图

- 登录页
  ![导航栏](https://img1.imgtp.com/2023/07/11/IzWiuxB5.jpg)
- 商品分类
  ![商品分类](https://img1.imgtp.com/2023/07/11/dzMucirM.jpg)
- 商品展示
  ![商品展示](https://img1.imgtp.com/2023/07/11/vIbU0hpd.jpg)
- 页尾
  ![页尾](https://img1.imgtp.com/2023/07/11/y82ez3Q9.jpg)
