<template>
  <div class="outer">
    <div class="card">
      <a :href="(cardItem.link==undefined||cardItem.link==null) ? '#' : cardItem.link" class="card_link">
        <img class="ani_img" :src="cardItem.imgSrc" />
        <div class="card_content_area">
          <div class="left_content">
            <div>
              <div class="title_area">
                <img src="pic_res/icon/movie.svg" class="icon" />
                <div class="title">{{cardItem.title}}</div>
              </div>
              <div class="date">{{cardItem.date}}</div>
            </div>
          </div>
          <div class="right_content">
            <div class="star_area">
              <img src="pic_res/icon/star_icon/1.svg" class="star_icon" />
              <div class="rate">{{cardItem.rate}}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationCard",
  props: {
    //{imgSrc:String,title:String,date:String,rate:Number}
    cardItem: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**包裹在卡片外面的一层div */
/**在这里设置margin，否则卡片会挤出去 */
.outer {
  margin: 0px;
}

/**卡片 */
/**在这里设置width: 100% */
.card {
  width: 100%;
  padding: 5px;
  background-color: white;
  border-radius: 4px;
  border: 0px solid;
  box-shadow: 0px 2px 20px 3px rgba(68, 84, 106, 0.227);
  overflow: hidden;
  transition: 0.5s;
}

/*鼠标悬浮在卡片上*/
.card:hover {
  box-shadow: 0px 2px 20px 6px rgba(68, 84, 106, 0.322);
}

.card_link {
  text-decoration: none;
  color: black;
}

/**卡片里的图片 */
.ani_img {
  width: 100%;
}

/**图片下方的内容区域 */
/**必须设定height为固定值，否则子元素height:100%无法生效 */
/**必须设定font-size: 0px，否则子元素inline-block会自动换行 */
/* .card_content_area {
  width: 100%;
  height: 80px;
  font-size: 0px;
} */
/**包裹左侧内容的wrapper */
/**font-size恢复为原来的大小 */
/**必须设置height: 100%，否则左右盒子无法对齐 */
/**该wrapper里只能有一个子元素，否则左右盒子无法对齐 */
/* .left_box {
  display: inline-block;
  font-size: 16px;
  height: 100%;
  width: 70%;
} */
/**包裹右侧内容的wrapper */
/* .right_box {
  display: inline-block;
  font-size: 16px;
  height: 100%;
  width: 30%;
} */

.card_content_area {
  margin: 2px 5px;
  /* height: 80px; */
  display: grid;
  grid-template-columns: 7fr 3fr;
}

.left_content,
.right_content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left_content {
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
}
.right_content {
  display: grid;
  grid-template-columns: 100%;
  justify-items: right;
  align-items: center;
}
.title_area {
  display: grid;
  grid-template-columns: 17px auto;
  align-items: center;
  column-gap: 5px;
  word-break: keep-all;
}
.icon {
  display: inline-block;
  width: 100%;
}
.title {
  display: inline-block;
  font-size: 16px;
  color: #484848;
  overflow: hidden;
}
.date {
  font-size: 14px;
  color: #A6A6A6;
  margin-top: 5px;
}
.star_area {
  display: grid;
  grid-template-columns: 20px auto;
  column-gap: 5px;
  justify-items: center;
  align-items: center;
}
.star_icon {
  width: 100%;
}
.rate {
  font-size: 16px;
  color: #f5a33c;
}
</style>