<template>
  <div class="dropdown" @mouseleave="hide()">
    <button class="dropdown_button" @click="change()">{{itemArray[selected].title}} ▼</button>
    <div class="menu_wrapper">
      <div
        class="dropdown_content"
        :class="{dropdown_content_show:isShow,dropdown_content_hide:!isShow,dropdown_content_right:isRight}"
      >
        <a
          v-for="item in itemArray"
          :key="item.id"
          href="#"
          :class="{active: item.id===selected}"
          @click="$emit('dropdown-select',item.id)"
        >{{item.title}}</a>
      </div>
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
    isRight: {
      default: false,
      type: Boolean
    },

    //下拉菜单数组
    //{id:Number,title:String}
    itemArray: Array
  },
  data: function() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    change() {
      //alert(this.isShow + "click");
      if (this.isShow) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
};
</script>

<style scoped>
/**包括按钮和菜单在内的整个区域 */
.dropdown {
  display: inline-block;
  transition: 0.3s;
}
/**按钮 */
.dropdown_button {
  height: 100%;
  width: 100%;
  background-color: white;
  border: 1px solid grey;
  border-radius: 40px;
  color: grey;
  transition: 0.3s;
  outline: none;
  cursor: pointer;
}

.dropdown_button:hover {
  background-color: lightgray;
}

/**菜单 */
.dropdown_content {
  display: none;
  position: absolute;
  background-color: white;
  width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.3s;
}

.dropdown_content_right {
  right: 0px;
}

.menu_wrapper {
  padding-top: 5px;
  transition: 0.3s;
  width: 100%;
  position: relative;
}

/**展示菜单 */
.dropdown_content_show {
  display: block;
  transition: 0.3s;
}

/**隐藏菜单 */
.dropdown_content_hide {
  display: none;
  transition: 0.3s;
}

/**菜单里的一项 */
.dropdown_content a {
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: center;
  transition: 0.3s;
}

/**菜单里的一项鼠标悬浮 */
.dropdown_content a:hover {
  background-color: rgb(233, 233, 233);
}

.dropdown_content a:not(.active) {
  color: black;
}

/**被选中的那一项 */
.dropdown_content .active {
  /* background-color: lightgrey; */
  color: #ff6a6a;
  font-weight: bold;
}

/** 被选中的那一项鼠标悬浮*/
/* .active:hover {
  background-color: rgb(192, 192, 192);
} */
</style>