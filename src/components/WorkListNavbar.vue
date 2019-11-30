<template>
  <div class="navbar_outer">
    <div class="dropdown_outer">
      <dropdown-button
        class="dropdown"
        :itemArray="leftDropdownArray"
        :selected="leftDropdownSelected"
      />
    </div>
    <div class="list_wrapper">
      <ul class="type_list">
        <li v-for="item in typeArray" :key="item.id" :class="{active: item.id===typeSelected}">
          <div>{{item.title}}</div>
        </li>
      </ul>
    </div>
    <div class="right_dropdown_outer">
      <div class="reverse_button_area">
        <img src="pic_res/icon/sort.svg" class="reverse_button" @click="$emit('reverse-sort')" />
        <!-- <div class="reverse_button">⇵</div> -->
      </div>
      <div>
        <dropdown-button
          class="dropdown"
          :itemArray="rightDropdownArray"
          :selected="rightDropdownSelected"
          :is-right="true"
          @dropdown-select="$emit('sort-change',$event)"
        />
      </div>
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
      ]
    };
  },
  props: {
    /**哪一个被激活,从0开始编号 */
    typeSelected: Number,
    /**左侧下拉菜单被选中 */
    leftDropdownSelected: Number,
    /**右侧下拉菜单被选中 */
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
  /* overflow: hidden; */
  display: grid;
  transition: 0.3s;
}

.dropdown_outer {
  height: 30px; /*edge上dropdown_outer会突然变高溢出，只好把高度定死 */
  padding: 10px 0px;
  text-align: center; /*让按钮水平居中 */
  transition: 0.3s;
}

.right_dropdown_outer {
  height: 30px;
  margin: 10px 10px 10px 0px;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  align-items: center;
  transition: 0.3s;
}

.dropdown {
  height: 30px;
  display: inline-block;
}
.reverse_button_area {
  height: 30px;
  width: 15px;
  display: grid;
  align-items: center;
}
.reverse_button {
  width: 100%;
  cursor: pointer;
}
/**保证list能横向滚动，并且把滚动条隐藏 */
.list_wrapper{
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  height: 100%;
  justify-items: center;
}
/**必须要margin: auto否则会偏移出去，不知道为什么 */
.type_list {
  list-style-type: none;
  margin: auto;
  padding: 0;
  overflow-y: hidden;
  height: 100%;
  transition: 0.3s;
  white-space: nowrap;
  display: inline-block;
  -ms-overflow-style: none;/**edge隐藏滚动条 */
}
/**chrome、safari隐藏滚动条 */
.type_list::-webkit-scrollbar{
  display: none;
}
/**强行针对宽度做自适应调整，宽的时候水平居中，窄的时候水平滚动 */
@media screen and (min-width: 681px){
  .type_list{
    width: auto;
    overflow-x: hidden;
    height: 100%;
  }
}
@media screen and (max-width: 680px){
  .type_list{
    width: 100%;
    overflow-x: scroll;
    margin: 0;
    height: calc(100% + 17px);
  }
}

.type_list > li {
  /* float: left; */
  height: 100%;
  display: inline-block;
  color: #44546a;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
  overflow: hidden;
}

.type_list > li > div {
  padding: 6px 10px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  overflow: hidden;
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
}

/*当前项目*/
.type_list .active {
  color: white;
}
@media screen and (min-width: 1401px) {
  .navbar_outer {
    grid-template-columns: 100px 1fr 120px;
  }
  .type_list > li {
    padding: 8px 10px;
  }
}
@media screen and (min-width: 601px) and (max-width: 1400px) {
  .navbar_outer {
    grid-template-columns: 90px 1fr 120px;
  }
  .type_list > li {
    padding: 8px 3px;
  }
}
@media screen and (max-width: 600px) {
  .navbar_outer {
    grid-template-columns: 90px 1fr 120px;
  }
  .type_list > li {
    padding: 8px 0px;
  }
}
</style>