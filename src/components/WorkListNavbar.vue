<template>
  <div class="navbar_outer">
    <div class="left_dropdown_outer">
      <dropdown-button
        :itemArray="leftDropdownArray"
        :isRight="false"
        :selected="leftDropdownSelected"
      />
    </div>
    <ul class="type_list">
      <li v-for="item in typeArray" :key="item.id" :class="{active: item.id==typeSelected}">
        <div>{{item.title}}</div>
      </li>
    </ul>
    <div class="right_dropdown_outer">
      <dropdown-button
        :itemArray="rightDropdownArray"
        :isRight="false"
        :selected="rightDropdownSelected"
      />
    </div>
  </div>
</template>

<script>
import DropdownButton from "@/components/DropdownButton.vue";

export default {
  name: "WorkListNavbar",
  components: {
    "dropdown-button": DropdownButton
  },
  data: function() {
    return {
      //对象数组
      typeArray: [
        { id: 0, title: "全部" },
        { id: 1, title: "青春" },
        { id: 2, title: "热血" },
        { id: 3, title: "搞笑" },
        { id: 4, title: "恋爱" },
        { id: 5, title: "校园" },
        { id: 6, title: "玄幻" },
        { id: 7, title: "治愈" }
      ],

      //左侧下拉菜单对象数组
      leftDropdownArray: [{ id: 0, title: "电影" }, { id: 1, title: "漫画" }],
      //左侧下拉菜单被选中
      leftDropdownSelected: 0,

      //右侧下拉菜单对象数组
      rightDropdownArray: [{ id: 0, title: "电影" }, { id: 1, title: "漫画" }],
      //右侧下拉菜单被选中
      rightDropdownSelected: 1
    };
  },
  props: {
    //哪一个被激活,从0开始编号
    typeSelected: Number
  }
};
</script>

<style scoped>
.navbar_outer {
  top: 0px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
  /* box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2); */
}

.left_dropdown_outer {
  float: left;
  height: 100%;
  width: 200px;
  padding: 10px 50px;
}

.right_dropdown_outer {
  float: right;
  height: 100%;
  width: 200px;
  padding: 10px 50px;
}

.type_list {
  display: inline-block;
  list-style-type: none;
  margin: auto;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

.type_list > li {
  float: left;
  height: 100%;
  display: block;
  color: black;
  text-align: center;
  padding: 8px 10px;
  text-decoration: none;
}

.type_list > li > div {
    height: 100%;
    padding: 6px 10px;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
}

.type_list > li.active > div{
    background-color: pink;
}

/*非当前项目鼠标悬浮*/
.type_list > li:not(.active) :hover {
  color: pink;
}

/*当前项目*/
.type_list .active {
  color: white;
}
</style>