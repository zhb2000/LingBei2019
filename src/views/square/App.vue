<template>
  <div id="app">
    <div class="navbar_area">
      <my-navbar :selected="2" />
    </div>
    <content-area style="margin-top:30px; margin-bottom:30px;">
      <group-header link="#" tag-text="时下热门" link-text="更多文章>>" />
      <card-group>
        <template #main-card>
          <pic-text-card :item="picTextCards[0]" />
        </template>
        <pic-text-card :item="picTextCards[1]" />
        <pic-text-card :item="picTextCards[2]" />
        <text-card :item="textCards[0]" />
        <text-card :item="textCards[1]" />
      </card-group>
    </content-area>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import MyContentArea from "@/components/MyContentArea.vue";
import CardGroupGrid from "@/components/CardGroupGrid.vue";
import PicTextCard from "@/components/PicTextCard.vue";
import SquareTextCard from "@/components/SquareTextCard.vue";
import CardGroupHeader from "@/components/CardGroupHeader.vue";

export default {
  name: "app",
  components: {
    "my-navbar": MyNavbar,
    "content-area": MyContentArea,
    "card-group": CardGroupGrid,
    "pic-text-card": PicTextCard,
    "text-card": SquareTextCard,
    "group-header": CardGroupHeader
  },
  data: function() {
    return {
      picTextCards: [
        {
          link: "#",
          imgLink: require("@/assets/square/s哪吒.jpg"),
          title: "哪吒的幕后故事：六年打磨剧本，投资方靠它改命",
          description: "荔枝娱乐特报 · 2019年07月26日",
          tag: "幕后"
        },
        {
          link: "#",
          imgLink: require("@/assets/square/s白蛇幕后起底.jpg"),
          title: "《白蛇：缘起》幕后起底",
          description: "wuhu动画人空间 · 2019-01-15",
          tag: "幕后"
        },
        {
          link: "#",
          imgLink: require("@/assets/square/s罗小黑战记.jpg"),
          title: "是营销还是实力？《罗小黑战记》凭什么这么火！",
          description: "whu动画评论 · 2019-11-20",
          tag: "幕后"
        }
      ],
      textCards: [
        {
          link: "detail.html",
          imgLink: require("@/assets/profile_photo/头像-18.jpg"),
          comment:
            "比我预想的还！要！好！看！画面够美打斗也够流畅，剧情不复杂，笑泪皆具，大圣三百六十度无死角的帅",
          noteName: "西游记之大圣归来",
          tag: "热评"
        },
        {
          link: "detail.html",
          imgLink: require("@/assets/profile_photo/头像-2.jpg"),
          comment:
            "意外的好看！！！制作精良，有让人眼前一亮的小细节，笑点布置得还算密集，本土味道极浓的民乐bgm上花了很大的心思。",
          noteName: "西游记之大圣归来",
          tag: "热评"
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
  background-color: #ecf0f2;
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
  width: 100%;
  top: 0px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>
