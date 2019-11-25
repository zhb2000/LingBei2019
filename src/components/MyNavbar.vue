<template>
  <div
    class="navbar_outer"
    :class="{transparent_outer:transparent,not_transparent_outer:!transparent}"
  >
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
        { id: 0, title: "首页", link: "home.html" },
        { id: 1, title: "国漫", link: "worklist.html" },
        { id: 2, title: "广场", link: "square.html" },
        { id: 3, title: "画板", link: "paintingboard.html" }
      ]
    };
  },
  props: {
    //哪一个被激活,从0开始编号
    selected: {
      type: Number,
      required: true
    },
    //是否启用透明样式
    transparent: {
      type: Boolean,
      default: false
    }
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
  overflow: hidden;
}
.not_transparent_outer {
  background-color: #414141;
}
.transparent_outer {
  background-color: #000000b4;
}

/**导航栏的logo图片 */
.navbar_logo {
  height: 100%;
  transition: 0.3s;
}

/**登录按钮外层 */
.navbar_button_outer {
  float: right;
  height: 100%;
  transition: 0.3s;
}

/**登录按钮 */
.navbar_button {
  background-color: #fe6868;
  border: 0px;
  color: white;
  height: 100%;
  border-radius: 15px;
  border: 0px solid;
  transition: 0.5s;
  outline: none;
  cursor: pointer;
}

/**登录按钮鼠标悬浮 */
.navbar_button:hover {
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
  color: #c3c3c3;
  text-align: center;
  text-decoration: none;
  height: 100%;
  transition: 0.3s;
}

/*非当前项目鼠标悬浮*/
.navbar > li a:hover:not(.active) {
  background-color: rgba(0, 0, 0, 0.2);
  color: #ff6a6a;
}

/*当前项目鼠标悬浮*/
.navbar > li a:hover.active {
  background-color: rgba(0, 0, 0, 0.2);
}

/*当前项目*/
.navbar .active {
  color: #ff6a6a;
  /* border-bottom: 3px solid #ff6a6a; */
  font-weight: bold;
}
@media screen and (min-width: 801px) {
  .navbar > li a {
    padding: 14px 16px;
  }
  .navbar_button_outer {
    padding: 10px 50px;
  }
  .navbar_button {
    width: 100px;
  }
  .navbar_logo {
    padding: 10px 50px;
  }
}
@media screen and (max-width: 800px) {
  .navbar > li a {
    padding: 14px 10px;
  }
  .navbar_button_outer {
    padding: 10px 10px;
  }
  .navbar_button {
    width: 80px;
  }
  .navbar_logo {
    padding: 10px 10px;
  }
}
</style>