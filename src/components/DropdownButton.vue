<template>
  <div class="dropdown" @mouseleave="hide()">
    <button class="dropdown_button" @click="change()">{{itemArray[selected].title}} ▼</button>
    <div class="menu_wrapper">
      <transition>
        <div
          class="dropdown_content"
          :class="{dropdown_content_show:isShow,dropdown_content_hide:!isShow}"
        >
          <a
            v-for="item in itemArray"
            :key="item.id"
            href="#"
            :class="{active: item.id===selected}"
          >{{item.title}}</a>
        </div>
      </transition>
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
    //isRight: Boolean,

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
  /* margin-top: 5px; */
  background-color: white;
  width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
}

.menu_wrapper {
  padding-top: 5px;
}

/**展示菜单 */
.dropdown_content_show {
  display: block;
}

/**隐藏菜单 */
.dropdown_content_hide {
  display: none;
}

/* .dropdown_content_right {
  position: absolute;
  right: 0px;
} */
/* 
.dropdown:hover .dropdown_content{
  display: block;
} */

/**菜单里的一项 */
.dropdown_content a {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

/**菜单里的一项鼠标悬浮 */
.dropdown_content a:hover:not(.active) {
  background-color: rgb(233, 233, 233);
}

/**被选中的那一项 */
.active {
  background-color: lightgrey;
}

/** 被选中的那一项鼠标悬浮*/
.active:hover {
  background-color: rgb(192, 192, 192);
}
</style>