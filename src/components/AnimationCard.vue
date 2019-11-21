<template>
  <div class="outer">
    <div class="card">
      <img class="ani_img" :src="cardItem.imgSrc" />
      <div class="card_content_area">
        <div class="left_box">
          <div class="content">
            <p>{{cardItem.title}}</p>
            <p>{{cardItem.date}}</p>
          </div>
        </div>
        <div class="right_box">
          <div class="content">
            <p>{{cardItem.rate}}</p>
          </div>
        </div>
      </div>
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
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: 0.5s;
}

/*鼠标悬浮在卡片上*/
.card:hover {
  box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.2);
}

/**卡片里的图片 */
.ani_img {
  width: 100%;
}

/**图片下方的内容区域 */
/**必须设定height为固定值，否则子元素height:100%无法生效 */
/**必须设定font-size: 0px，否则子元素inline-block会自动换行 */
.card_content_area {
  width: 100%;
  height: 100px;
  font-size: 0px;
}

/**包裹左侧内容的wrapper */
/**font-size恢复为原来的大小 */
/**必须设置height: 100%，否则左右盒子无法对齐 */
/**该wrapper里只能有一个子元素，否则左右盒子无法对齐 */
.left_box {
  display: inline-block;
  font-size: 16px;
  height: 100%;
  width: 70%;
  /* background-color: red; */
}

/**包裹右侧内容的wrapper */
.right_box {
  display: inline-block;
  font-size: 16px;
  height: 100%;
  width: 30%;
  /* background-color: blue; */
}

/**wrapper中唯一的子元素 */
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>