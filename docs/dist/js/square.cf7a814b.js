(function(t){function e(e){for(var r,s,c=e[0],l=e[1],o=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={square:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([2,"chunk-vendors"]),a()})({"031f":function(t,e,a){"use strict";var r=a("f672"),n=a.n(r);n.a},1349:function(t,e,a){},2:function(t,e,a){t.exports=a("a6e7")},"21c3":function(t,e,a){"use strict";var r=a("f60d"),n=a.n(r);n.a},"325e":function(t,e,a){},"3ca9":function(t,e,a){"use strict";var r=a("cd04"),n=a.n(r);n.a},"4fc5":function(t,e,a){"use strict";var r=a("dacb"),n=a.n(r);n.a},"54dd":function(t,e,a){"use strict";var r=a("8d81"),n=a.n(r);n.a},"5ad2":function(t,e,a){"use strict";var r=a("325e"),n=a.n(r);n.a},"5e10":function(t,e,a){"use strict";var r=a("9a28"),n=a.n(r);n.a},"6f56":function(t,e,a){"use strict";var r=a("750e"),n=a.n(r);n.a},"750e":function(t,e,a){},"8d58":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar_outer",class:{transparent_outer:t.transparent,not_transparent_outer:!t.transparent}},[a("img",{staticClass:"navbar_logo",attrs:{src:"pic_res/logo.png"}}),a("ul",{staticClass:"navbar"},t._l(t.titleArray,(function(e){return a("li",{key:e.id},[a("a",{class:{active:e.id==t.selected},attrs:{href:e.link}},[t._v(t._s(e.title))])])})),0),t._m(0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar_button_outer"},[a("button",{staticClass:"navbar_button"},[t._v("登录/注册")])])}],i=(a("a9e3"),{name:"MyNavbar",data:function(){return{titleArray:[{id:0,title:"首页",link:"home.html"},{id:1,title:"国漫",link:"worklist.html"},{id:2,title:"广场",link:"square.html"},{id:3,title:"画板",link:"paintingboard.html"}]}},props:{selected:{type:Number,required:!0},transparent:{type:Boolean,default:!1}}}),s=i,c=(a("5ad2"),a("2877")),l=Object(c["a"])(s,r,n,!1,null,"0a60be2d",null);e["a"]=l.exports},"8d81":function(t,e,a){},"906e":function(t,e,a){},"9a28":function(t,e,a){},"9d8b":function(t,e,a){"use strict";var r=a("1349"),n=a.n(r);n.a},a6e7:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"navbar_area"},[a("my-navbar",{attrs:{selected:2}})],1),t.loadOK?a("square-swiper",{attrs:{items:t.swiperItems,id:"square_swiper"}}):t._e(),t.loadOK?a("content-area",{staticStyle:{"margin-top":"0px","margin-bottom":"30px"}},[a("group-header",{attrs:{link:"#","tag-text":"时下热门","link-text":"更多文章>>"}}),a("card-group",{staticStyle:{"margin-bottom":"30px"},attrs:{"is-right":!1},scopedSlots:t._u([{key:"main-card",fn:function(){return[0===t.bigCard.cardType?a("pic-text-card",{attrs:{item:t.bigCard}}):t._e(),1===t.bigCard.cardType?a("pic-text-card",{attrs:{item:t.bigCard}}):t._e()]},proxy:!0}],null,!1,3217043914)},t._l(t.cards,(function(e){return a("div",{key:e.id},[0===e.cardType?a("pic-text-card",{attrs:{item:e}}):t._e(),1===e.cardType?a("text-card",{attrs:{item:e}}):t._e()],1)})),0),a("group-header",{attrs:{link:"#","tag-text":"动漫新观察","link-text":"更多文章>>"}}),a("card-group",{attrs:{"is-right":!0},scopedSlots:t._u([{key:"main-card",fn:function(){return[0===t.bigCard2.cardType?a("pic-text-card",{attrs:{item:t.bigCard2}}):t._e(),1===t.bigCard2.cardType?a("pic-text-card",{attrs:{item:t.bigCard2}}):t._e()]},proxy:!0}],null,!1,1239405930)},t._l(t.cards2,(function(e){return a("div",{key:e.id},[0===e.cardType?a("pic-text-card",{attrs:{item:e}}):t._e(),1===e.cardType?a("text-card",{attrs:{item:e}}):t._e()],1)})),0)],1):t._e()],1)},i=[],s=a("8d58"),c=a("beb2"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group_grid",class:{left_grid:!t.isRight,right_grid:t.isRight}},[a("div",{staticClass:"big_area"},[t._t("main-card")],2),t._t("default")],2)},o=[],u={name:"CardGroupGrid",props:{isRight:{type:Boolean,default:!1}}},d=u,p=(a("6f56"),a("2877")),f=Object(p["a"])(d,l,o,!1,null,"f1e19b00",null),_=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("a",{staticClass:"inner",attrs:{href:t.item.link,target:"_blank"}},[a("div",{staticClass:"card_content"},[a("div",{staticClass:"pic_area"},[a("img",{staticClass:"card_pic",attrs:{src:t.item.imgLink}})]),a("div",{staticClass:"text_area"},[a("div",{staticClass:"text_wrapper_out"},[a("div",{staticClass:"text_wrapper_in"},[a("p",{staticClass:"title"},[t._v(t._s(t.item.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.item.description))])])])])])]),a("my-tag",[t._v(t._s(t.item.tag))])],1)},v=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag"},[t._t("default")],2)},b=[],C={name:"SquareCardTag"},h=C,y=(a("c2a2"),Object(p["a"])(h,g,b,!1,null,"5553bf30",null)),x=y.exports,w={name:"PicTextCard",components:{"my-tag":x},props:{item:Object}},k=w,O=(a("4fc5"),Object(p["a"])(k,m,v,!1,null,"92c0a33a",null)),S=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("a",{staticClass:"inner",attrs:{href:t.item.link,target:"_blank"}},[a("div",{staticClass:"card_content"},[a("div"),a("div",{staticClass:"wrap_area"},[a("p",{staticClass:"comment"},[t._v(t._s(t.item.comment))])]),a("div",{staticClass:"wrap_area"},[a("div",{staticClass:"user"},[a("img",{staticClass:"photo",attrs:{src:t.item.imgLink}}),a("p",{staticClass:"user_note"},[t._v(" 对 "),a("strong",[t._v(t._s(t.item.noteName))]),t._v(" 的评价 ")])])])])]),a("my-tag",{staticStyle:{"background-color":"#ff8889"}},[t._v(t._s(t.item.tag))])],1)},T=[],$={name:"SquareTextCard",props:{item:Object},components:{"my-tag":x}},E=$,q=(a("d6fc"),Object(p["a"])(E,j,T,!1,null,"a1414fae",null)),P=q.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("float-tag",{staticClass:"tag"},[t._v(" "+t._s(t.tagText)+" ")]),a("div"),a("a",{staticClass:"link",attrs:{href:t.link}},[t._v(" "+t._s(t.linkText)+" ")])],1)},A=[],B=a("aa10"),I={name:"CardGroupHeader",components:{"float-tag":B["a"]},props:{link:String,tagText:String,linkText:String}},K=I,G=(a("21c3"),Object(p["a"])(K,M,A,!1,null,"ecc3dd0e",null)),N=G.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"mySwiper",staticClass:"swiper-box",attrs:{options:t.swiperOption}},[t._l(t.items,(function(t){return a("swiper-slide",{key:t.id,staticClass:"slide_page"},[a("card",{attrs:{item:t}})],1)})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},J=[],L=(a("664d"),a("6fe8")),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"outer"},[a("a",{staticClass:"inner",attrs:{target:"_blank",href:t.item.link}},[a("div",{staticClass:"card_content"},[a("img",{staticClass:"bg_img",attrs:{src:t.item.imgSrc}}),a("div",{staticClass:"bottom_grey"},[t._v(t._s(t.item.text))])])])])},H=[],V={name:"SquareSwiperCard",props:{item:Object}},z=V,D=(a("3ca9"),Object(p["a"])(z,F,H,!1,null,"7f1f20dc",null)),Q=D.exports,U={name:"SquareSwiper",components:{swiper:L["swiper"],swiperSlide:L["swiperSlide"],card:Q},props:{items:Array},data:function(){return{swiperOption:{mousewheel:{releaseOnEdges:!0},keyboard:!0,spaceBetween:0,centeredSlides:!0,centeredSlidesBounds:!0,slidesPerView:1.3,pagination:{el:".swiper-pagination",clickable:!0}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}}},W=U,X=(a("5e10"),Object(p["a"])(W,R,J,!1,null,"1230def0",null)),Y=X.exports,Z=a("2427"),tt=a.n(Z),et={name:"app",components:{"my-navbar":s["a"],"content-area":c["a"],"card-group":_,"pic-text-card":S,"text-card":P,"group-header":N,"square-swiper":Y},mounted:function(){var t=this;tt.a.get("jsons/square_data/square.json").then((function(e){t.swiperItems=e.data.swiperItems,t.bigCard=e.data.bigCard,t.cards=e.data.cards,t.bigCard2=e.data.bigCard2,t.cards2=e.data.cards2,t.loadOK=!0})).catch((function(t){return alert(t)}))},data:function(){return{loadOK:!1,bigCard:null,cards:[],bigCard2:null,cards2:null,swiperItems:[]}}},at=et,rt=(a("9d8b"),Object(p["a"])(at,n,i,!1,null,null,null)),nt=rt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(nt)}}).$mount("#app")},aa10:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float_tag"},[t._t("default")],2)},n=[],i={name:"PinkFloatTag"},s=i,c=(a("54dd"),a("2877")),l=Object(c["a"])(s,r,n,!1,null,"183d482b",null);e["a"]=l.exports},beb2:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content_area"},[t._t("default")],2)},n=[],i={name:"MyContentArea"},s=i,c=(a("031f"),a("2877")),l=Object(c["a"])(s,r,n,!1,null,"60f65a9a",null);e["a"]=l.exports},c2a2:function(t,e,a){"use strict";var r=a("ddfd"),n=a.n(r);n.a},cd04:function(t,e,a){},d6fc:function(t,e,a){"use strict";var r=a("906e"),n=a.n(r);n.a},dacb:function(t,e,a){},ddfd:function(t,e,a){},f60d:function(t,e,a){},f672:function(t,e,a){}});
//# sourceMappingURL=square.cf7a814b.js.map