<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="1" />
    </div>
    <content-area style="margin-top:30px; margin-bottom:30px;">
      <my-grid>
        <template #introduction>
          <introduction-card :item="introductionItem" />
        </template>
        <template #pictures>
          <picture-card :img-array="imgArray" />
        </template>
        <template #comments>
          <comment-card />
        </template>
        <template #news>
          <news-card :news-array="newsArray" />
        </template>
      </my-grid>
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import ContentAreaWide from "@/components/ContentAreaWide.vue";
import DetailGrid from "@/components/DetailGrid.vue";
import DetailIntroduction from "@/components/DetailIntroduction.vue";
import DetailPictureCard from "@/components/DetailPictureCard.vue";
import DetailComment from "@/components/DetailComment.vue";
import DetailNews from "@/components/DetailNews.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": ContentAreaWide,
    "my-grid": DetailGrid,
    "introduction-card": DetailIntroduction,
    "picture-card": DetailPictureCard,
    "comment-card": DetailComment,
    "news-card": DetailNews
  },
  data: function() {
    return {
      //顶部介绍卡片的对象
      introductionItem: {
        imgSrc: require("@/assets/art_works_list_img/大圣归来.jpg"),
        title: "西游记之大圣归来（2015）",
        director: "田晓鹏",
        date: "date is here",
        type: "剧情 / 动画 / 奇幻",
        detail:
          "五百年前，由石猴变化而成的齐天大圣孙悟空（张磊 配音）大闹天宫，最终被如来佛祖镇在了五行山下。此去经年，长安城内突然遭到山妖洗劫，童男童女哭声连连，命悬一线。危机时刻，自幼被行脚僧法明（吴文伦 配音）抚养长大的江流儿（林子杰 配音）救下了一个小女孩，结果反遭山妖追杀。经过一番追逐，江流儿无意中解除了孙悟空的封印，齐天大圣自然好好地将山妖教训了一番。因为封印未解开，悟空不得不护送江流儿和小女孩回长安，一路上又遭遇了猪八戒（刘九容 配音）和白龙马。与此同时，妖王（童自荣 配音）绝不甘心失败，他躲在暗中，等待着给孙悟空一行致命一击的良机……"
      },
      //剧照卡片的对象数组
      imgArray: [
        {
          id: 0,
          imgSrc: require("@/assets/pics/pic0.jpg"),
          link: "#"
        },
        {
          id: 1,
          imgSrc: require("@/assets/pics/pic1.jpg"),
          link: "#"
        },
        {
          id: 2,
          imgSrc: require("@/assets/pics/pic2.jpg"),
          link: "#"
        }
      ],
      newsArray: [
        {
          id: 0,
          linkText: "第52届台北金马影展金马奖 最佳动画长片（提名）；   第30届中国电影金鸡奖 最佳美术片；   第16届中国电影华表奖",
          link: "https://www.baidu.com",
          text: "（获奖情况）"
        },
        {
          id: 1,
          linkText: "大圣归来！国产动画的良心归来！它还带来了不可思议的票房奇迹！",
          link: "https://www.baidu.com",
          text: "（TA说）"
        },
        {
          id: 2,
          linkText: "从幻到大圣归来,这个人吹过的游戏,全口碑暴跌?",
          link: "https://www.baidu.com",
          text: "（社会我游哥）"
        }
      ]
    };
  }
};
</script>

<style>
/**把网页的边界去掉 */
body {
  margin: 0 0;
  background-color: #ecf0f3;
  font-size: 16px;
}

/**改变盒子模型 */
* {
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
  width: 100%;
}
/**吸顶的导航栏区域 */
.navbar_area {
  position: sticky;
  z-index: 1000;
  width: 100%;
  top: 0px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
</style>
