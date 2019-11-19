<template>
  <div class="navbar_outer">
    <img class="navbar_logo" src="../assets/logo.png" />
    <ul class="navbar">
      <li v-for="item in titleArray" :key="item.id">
        <a :href="item.link" :class="{active: item.id==selected}">{{item.title}}</a>
      </li>
    </ul>
    <div class="navbar_button_outer">
      <button class="navbar_button">登录/注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNavbar",
  data: function() {
    return {
      //对象数组
      titleArray: [
        { id: 0, title: "首页", link: "https://www.baidu.com" },
        { id: 1, title: "国漫", link: "https://www.baidu.com" },
        { id: 2, title: "广场", link: "https://www.baidu.com" },
        { id: 3, title: "咨询", link: "https://www.baidu.com" },
        { id: 4, title: "画板", link: "https://www.baidu.com" }
      ]
    };
  },
  props: {
    //哪一个被激活,从0开始编号
    selected: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**最外层 */
.navbar_outer {
  top: 0px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
  /* box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2); */
}

/**导航栏的logo图片 */
.navbar_logo {
  height: 100%;
  padding: 10px 50px;
}

/**登录按钮外层 */
.navbar_button_outer {
  float: right;
  height: 100%;
  padding: 10px 50px;
}

/**登录按钮 */
.navbar_button {
  background-color: palevioletred;
  border: 0px;
  color: white;
  height: 100%;
  width: 100px;
  border-radius: 10px;
  border: 0px solid;
  transition: 0.5s;
}

/**登录按钮鼠标悬浮 */
.navbar_button:hover{
  background-color: red;
}

/**导航栏列表 */
.navbar {
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

.navbar > li {
  float: left;
  height: 100%;
}

.navbar > li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 100%;
}

/*非当前项目鼠标悬浮*/
.navbar > li a:hover:not(.active) {
  /*background-color: #111;*/
  color: #4caf50;
}

/*当前项目*/
.navbar .active {
  /*background-color: #4CAF50;*/
  color: #4caf50;
  border-bottom: 3px solid #4caf50;
  font-weight: bold;
}
</style>