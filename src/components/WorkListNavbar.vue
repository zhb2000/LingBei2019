<template>
  <div class="navbar_outer">
    <div class="dropdown_outer">
      <dropdown-button
        class="dropdown"
        :itemArray="leftDropdownArray"
        :selected="leftDropdownSelected"
      />
    </div>
    <ul class="type_list">
      <li v-for="item in typeArray" :key="item.id" :class="{active: item.id===typeSelected}">
        <div>{{item.title}}</div>
      </li>
    </ul>
    <div class="dropdown_outer">
      <dropdown-button
        class="dropdown"
        :itemArray="rightDropdownArray"
        :selected="rightDropdownSelected"
        @dropdown-select="$emit('sort-change',$event)"
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

      //右侧下拉菜单对象数组
      rightDropdownArray: [
        { id: 0, title: "默认" },
        { id: 1, title: "上映时间" },
        { id: 2, title: "评分" },
        { id: 3, title: "名称" }
      ],
    };
  },
  props: {
    //哪一个被激活,从0开始编号
    typeSelected: Number,
    //左侧下拉菜单被选中
    leftDropdownSelected: Number,
    //右侧下拉菜单被选中
    rightDropdownSelected: Number
  }
};
</script>

<style scoped>
.navbar_outer {
  top: 0px;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  overflow: hidden;
  display: grid;
  transition: 0.3s;
}

.dropdown_outer {
  padding: 10px 0px;
  text-align: center; /*让按钮水平居中 */
}

/**块状元素定宽+margin: auto来水平居中 */
.dropdown {
  height: 100%;
}

/**必须要margin: auto否则会偏移出去，不知道为什么 */
.type_list {
  list-style-type: none;
  margin: auto;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
}

.type_list > li {
  float: left;
  height: 100%;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}

.type_list > li > div {
  height: 100%;
  padding: 6px 10px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}

.type_list > li.active > div {
  background-color: #ff6a6a;
}

.type_list > li.active > div:hover {
  font-weight: bold;
}

/*非当前项目鼠标悬浮*/
.type_list > li:not(.active) :hover {
  color: #ff6a6a;
  font-weight: bold;
  /* color: white;
  background-color: rgba(0, 0, 0, 0.2); */
}

/*当前项目*/
.type_list .active {
  color: white;
}
@media screen and (min-width: 1401px) {
  .navbar_outer {
    grid-template-columns: 1fr 8fr 1fr;
  }
  .type_list > li {
    padding: 8px 10px;
  }
}
@media screen and (min-width: 601px) and (max-width: 1400px) {
  .navbar_outer {
    grid-template-columns: 1fr 4.5fr 1fr;
  }
  .type_list > li {
    padding: 8px 3px;
  }
}
@media screen and (max-width: 600px) {
  .navbar_outer {
    grid-template-columns: 90px 1fr 90px;
  }
  .type_list > li {
    padding: 8px 0px;
  }
}
</style>