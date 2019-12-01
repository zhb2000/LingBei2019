# 队名：四面楚鸽
没怎么搞过前端，现学现卖之作，各位大佬轻喷 0u0
## 观看网页
1. 邹老板的腾讯云小水管：[**传送门1**](http://122.51.164.145/)
2. Github Page：[**传送门2**](https://zhb2000.github.io/LingBei2019/)

### 温馨提示
- 不建议您使用2017年以前的旧版浏览器访问，特别是IE……
- 没有专门处理兼容性问题，个别移动端浏览器可能无法正常使用画板功能
- 图片较多，Github Page 建议挂梯子访问
- 个别地方只有按钮，功能没来得及做 (lll￢ω￢)

## 小组成员
### 技术组
- ![zhb](./docs/zhb.png) [朱华彬（前端）](https://github.com/zhb2000)
- ![zlw](./docs/zlw.jpg) [邹龙威（后端）](https://github.com/Photooon)
### 设计组
- ![lhz](./docs/lhz.jpg) [骆荟州](https://github.com/LUO12826)
- ![pcr](./docs/pcr.jpg) 彭丛蓉

## 网站介绍
网站名称：**M++（漫家家）**

我们自己设计的LOGO：

![LOGO](./docs/logo.png)

前端使用 Vue.js 构建，后端使用 Django 框架
### 第三方库 
1. axios: https://github.com/axios/axios
2. vue-awesome-swiper: https://github.com/surmon-china/vue-awesome-swiper

## 构建本项目
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 工程目录
```
public/pic_res 图片资源目录
public/jsons 数据文件
```
```
src/components 自定义组件
src/views 各个页面
```
```
自定义组件列表：

MyContentArea.vue 居中内容区域
ContentAreaWide.vue 居中内容区域（宽）
MyNavbar.vue 顶部导航栏

MyGrid.vue	国漫列表网格
AnimationCard.vue 国漫列表卡片
WorkListNavbar.vue 国漫列表导航栏
DropdownButton.vue 下拉菜单按钮

PaintingBoard.vue 画板画布
PaintingBoardGrid.vue 画板界面网格
PaintingBoardNavbar.vue 画板导航栏
PaintingPicture.vue 画板界面临摹图像
PaintingToolbar.vue 画板工具栏
PenTools.vue 画板画笔工具栏
ColorTools.vue	画板颜色工具栏

CardGroupGrid.vue 广场页面卡片组网格
PicTextCard.vue 广场页面图文卡片
SquareTextCard.vue 广场页面文字卡片
CardGroupHeader.vue 卡片组头部
SquareSwiper.vue 广场轮播图
SquareSwiperCard.vue 轮播图卡片

DetailGrid.vue 详情页面网格
DetailIntroduction.vue 介绍卡片
DetailPictureCard.vue 剧照卡片
DetailComment.vue 评论区卡片
DetailNews.vue 新闻卡片
PinkFloatTag.vue 浮动标签组件
Comment.vue 单条评论卡片
FiveStarDisplay.vue 五星评分组件

HomeBaiSheCard.vue 首页白蛇缘起卡片
HomeFirst.vue 首页首屏卡片
HomeDaYu.vue 首页大鱼海棠卡片
HomeNeZha.vue 首页哪吒卡片
```