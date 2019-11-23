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
      <my-grid :card-items="cardItems" />
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyContentArea from "@/components/MyContentArea.vue";
//import AnimationCard from "@/components/AnimationCard.vue";
import MyGrid from "@/components/MyGrid.vue";
import WorkListNavbar from "@/components/WorkListNavbar.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": MyContentArea,
    //"ani-card": AnimationCard,
    "my-grid": MyGrid,
    "work-list-navbar": WorkListNavbar
  },
  data: function() {
    return {
      leftSelected: 0,
      rightSelected: 0,
      //对象数组
      cardItems: [
        {
          id: 0,
          imgSrc: require("@/assets/art_works_list_img/哪吒之魔童降世.jpg"),
          title: "哪吒之魔童降世",
          date: "2019-7-26",
          rate: 8.5
        },
        {
          id: 1,
          imgSrc: require("@/assets/art_works_list_img/罗小黑战记.jpg"),
          title: "罗小黑战记",
          date: "2019-9-7",
          rate: 8.2
        },
        {
          id: 2,
          imgSrc: require("@/assets/art_works_list_img/白蛇：缘起.jpg"),
          title: "白蛇：缘起",
          date: "2019-1-11",
          rate: 7.9
        },
        {
          id: 3,
          imgSrc: require("@/assets/art_works_list_img/大护法.jpg"),
          title: "大护法",
          date: "2017-07-13",
          rate: 7.8
        },
        {
          id: 4,
          imgSrc: require("@/assets/art_works_list_img/那年那兔那些事.jpg"),
          title: "那年那兔那些事",
          date: "2015-03-04",
          rate: 8.7
        },
        {
          id: 5,
          imgSrc: require("@/assets/art_works_list_img/魔角侦探.jpg"),
          title: "魔角侦探",
          date: "2010-12-03",
          rate: 9.3
        },
        {
          id: 6,
          imgSrc: require("@/assets/art_works_list_img/画江湖之不良人Ⅲ.jpg"),
          title: "画江湖之不良人Ⅲ",
          date: "2018-10-25",
          rate: 7.8
        },
        {
          id: 7,
          imgSrc: require("@/assets/art_works_list_img/斗破苍穹特别篇2.jpg"),
          title: "斗破苍穹特别篇2",
          date: "2019-04-14",
          rate: 8.6
        },
        {
          id: 8,
          imgSrc: require("@/assets/art_works_list_img/魔道祖师.jpg"),
          title: "魔道祖师",
          date: "2018-07-09",
          rate: 8.9
        },
        {
          id: 9,
          imgSrc: require("@/assets/art_works_list_img/伍六七之最强发型师.jpg"),
          title: "伍六七之最强发型师",
          date: "2019-10-23",
          rate: 8.8
        },
        {
          id: 10,
          imgSrc: require("@/assets/art_works_list_img/镇魂街第一季.jpg"),
          title: "镇魂街第一季",
          date: "2016-04-28",
          rate: 8.7
        },
        {
          id: 11,
          imgSrc: require("@/assets/art_works_list_img/全职高手第一季.jpg"),
          title: "全职高手第一季",
          date: "2017-04-07",
          rate: 8.3
        },
        {
          id: 12,
          imgSrc: require("@/assets/art_works_list_img/少年锦衣卫第一季.jpg"),
          title: "少年锦衣卫第一季",
          date: "2017-02-09",
          rate: 8.2
        },
        {
          id: 13,
          imgSrc: require("@/assets/art_works_list_img/少年歌行.jpg"),
          title: "少年歌行",
          date: "2018-12-26",
          rate: 8.6
        },
        {
          id: 14,
          imgSrc: require("@/assets/art_works_list_img/斗罗大陆1.jpg"),
          title: "斗罗大陆1",
          date: "2018-01-20",
          rate: 7.3
        },
        {
          id: 15,
          imgSrc: require("@/assets/art_works_list_img/斗破苍穹.jpg"),
          title: "斗破苍穹",
          date: "2012-6",
          rate: 9.0
        },
        {
          id: 16,
          imgSrc: require("@/assets/art_works_list_img/大鱼海棠.jpg"),
          title: "大鱼海棠",
          date: "2016-07-08",
          rate: 6.8
        },
        {
          id: 17,
          imgSrc: require("@/assets/art_works_list_img/刺客伍六七.jpg"),
          title: "刺客伍六七",
          date: "2018-04-25",
          rate: 8.9
        },
        {
          id: 18,
          imgSrc: require("@/assets/art_works_list_img/秦时明月之诸子百家.jpg"),
          title: "秦时明月之诸子百家",
          date: "2010-05-11",
          rate: 9.3
        }
      ]
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
  background-color: #f6f6f6;
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
