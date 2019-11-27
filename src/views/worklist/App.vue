<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="1" />
      <work-list-navbar
        :typeSelected="0"
        @sort-change="sortArray"
        :leftDropdownSelected="leftSelected"
        :rightDropdownSelected="rightSelected"
      />
    </div>
    <content-area style="margin-top:30px; margin-bottom:30px">
      <!-- <my-gird>
        <ani-card v-for="item in cardItems" :cardItem="item" :key="item.id" />
      </my-gird>-->
      <my-grid v-if="loadOK" :card-items="cardItems" />
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyContentArea from "@/components/MyContentArea.vue";
//import AnimationCard from "@/components/AnimationCard.vue";
import MyGrid from "@/components/MyGrid.vue";
import WorkListNavbar from "@/components/WorkListNavbar.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": MyContentArea,
    //"ani-card": AnimationCard,
    "my-grid": MyGrid,
    "work-list-navbar": WorkListNavbar
  },
  mounted() {
    axios
      .get("jsons/work_list_data/list_array.json")
      .then(response => {
        this.cardItems = response.data.cardItems;
        this.loadOK = true;
      })
      .catch(error => alert(error));
  },
  data: function() {
    return {
      leftSelected: 0,
      rightSelected: 0,
      loadOK: false,
      cardItems: null
    };
  },
  methods: {
    sortArray(sortType) {
      var theType = null;
      var compare = null;

      //定义降序比较函数
      var compareDown = function(p) {
        return function(m, n) {
          var a = m[p];
          var b = n[p];
          return b - a; //降序
        };
      };
      //定义升序比较函数
      var compareUp = function(p) {
        return function(m, n) {
          var a = m[p];
          var b = n[p];
          return a - b; //升序
        };
      };
      //字符串升序排序
      var compareStrUp = function(p) {
        return function(m, n) {
          var a = m[p];
          var b = n[p];
          return a.localeCompare(b, "zh-CN"); //升序
        };
      };
      //字符串降序排序
      var compareStrDown = function(p) {
        return function(m, n) {
          var a = m[p];
          var b = n[p];
          return b.localeCompare(a, "zh-CN"); //升序
        };
      };

      if (sortType === 0) {
        theType = "id";
        compare = compareUp;
      } else if (sortType === 1) {
        theType = "date";
        compare = compareStrDown;
      } else if (sortType === 2) {
        theType = "rate";
        compare = compareDown;
      } else if (sortType === 3) {
        theType = "title";
        compare = compareStrUp;
      }

      this.cardItems.sort(compare(theType));
      this.rightSelected = sortType;
    }
  }
};
</script>

<style>
/**把网页的边界去掉 */
body {
  margin: 0 0;
  background-color: #ebeef3;
  font-size: 16px;
}

/**改变盒子模型 */
* {
  box-sizing: border-box;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  width: 100%;
}
/**吸顶的导航栏区域 */
.navbar_area {
  position: sticky;
  width: 100%;
  top: 0px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>
