<template>
  <div class="dropdown">
    <button class="dropdown_button">{{itemArray[selected].title}} ▼</button>
    <div class="dropdown_content" :class="{dropdown_content_right: isRight}">
      <a
        v-for="item in itemArray"
        :key="item.id"
        href="#"
        :class="{active: item.id==selected}"
      >{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownButton",
  props: {
    //哪一项被选中
    selected: Number,

    //下拉菜单与按钮右对齐
    isRight: Boolean,

    //下拉菜单数组
    //{id:Number,title:String}
    itemArray: Array
  }
};
</script>

<style scoped>
/**包括按钮和菜单在内的整个区域 */
.dropdown {
  display: inline-block;
  height: 100%;
  width: 100%;
}

/**按钮 */
.dropdown_button {
  height: 100%;
  width: 100%;
  background-color: white;
  border: 1px solid grey;
  border-radius: 40px;
  color: grey;
}

/**菜单 */
.dropdown_content {
  display: none;
  position: absolute;
  background-color: white;
  width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown_content_right {
  position: absolute;
  right: 0px;
}

/**菜单里的一项 */
.dropdown_content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/**菜单里的一项鼠标悬浮 */
.dropdown_content a:hover:not(.active) {
  background-color: lightgrey;
}

/**被选中的那一项 */
.active {
  background-color: lightgrey;
}

/** 被选中的那一项鼠标悬浮*/
.active:hover {
  background-color: grey;
}

/**鼠标悬浮展示菜单 */
.dropdown:hover .dropdown_content {
  display: block;
}
</style>