(function(t){function a(a){for(var r,i,c=a[0],o=a[1],l=a[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(a);while(d.length)d.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={detail:0},s=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;s.push([3,"chunk-vendors"]),e()})({1179:function(t,a,e){"use strict";var r=e("8c7f"),n=e.n(r);n.a},2207:function(t,a,e){"use strict";var r=e("8b25"),n=e.n(r);n.a},3:function(t,a,e){t.exports=e("83dc")},"325e":function(t,a,e){},3461:function(t,a,e){},"54dd":function(t,a,e){"use strict";var r=e("8d81"),n=e.n(r);n.a},"5ad2":function(t,a,e){"use strict";var r=e("325e"),n=e.n(r);n.a},"6f43":function(t,a,e){"use strict";var r=e("c94a"),n=e.n(r);n.a},"82dd":function(t,a,e){"use strict";var r=e("8412"),n=e.n(r);n.a},"83dc":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=e("c478"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"navbar_area"},[e("my-navbar",{attrs:{selected:1}})],1),e("content-area",{staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[t.loadOK?e("my-grid",{scopedSlots:t._u([{key:"introduction",fn:function(){return[e("introduction-card",{attrs:{item:t.pageInfo.introductionItem}})]},proxy:!0},{key:"pictures",fn:function(){return[e("picture-card",{attrs:{"img-array":t.pageInfo.imgArray}})]},proxy:!0},{key:"comments",fn:function(){return[e("comment-card",{attrs:{"comment-array":t.pageInfo.commentArray}})]},proxy:!0},{key:"news",fn:function(){return[e("news-card",{attrs:{"news-array":t.pageInfo.newsArray}})]},proxy:!0}],null,!1,3250976676)}):t._e()],1)],1)},i=[],c=(e("b0c0"),e("8d58")),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content_area"},[t._t("default")],2)},l=[],u={name:"ContentAreaWide"},f=u,d=(e("ae27"),e("2877")),m=Object(d["a"])(f,o,l,!1,null,"a148ce80",null),p=m.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my_grid"},[e("div",{staticClass:"introduction_area"},[t._t("introduction")],2),e("div",{staticClass:"pictures_area"},[t._t("pictures")],2),e("div",{staticClass:"comments_area"},[t._t("comments")],2),e("div",{staticClass:"news_area"},[t._t("news")],2)])},v=[],g={name:"DetailGrid"},b=g,y=(e("1179"),Object(d["a"])(b,_,v,!1,null,"3a722bcc",null)),h=y.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card_outer"},[e("div",{staticClass:"card_grid"},[e("div",{staticClass:"img_area"},[e("img",{staticClass:"image",attrs:{src:t.item.imgSrc}})]),e("div",{staticClass:"text_area"},[e("div",{staticClass:"brief"},[e("div",{staticClass:"left_brief"},[e("p",{staticClass:"title"},[t._v(t._s(t.item.title))]),e("p",{staticClass:"info"},[t._v("导演："+t._s(t.item.director))]),e("p",{staticClass:"info"},[t._v("上映日期："+t._s(t.item.date))]),e("p",{staticClass:"info"},[t._v("类型："+t._s(t.item.type))])]),e("div",{staticClass:"right_brief"},[e("div",{staticClass:"rate_box"},[e("span",[t._v("评分")]),e("span",{staticClass:"rate_number"},[t._v(t._s(" "+t.item.rate))]),e("five-star",{staticClass:"rate_star",attrs:{rate:t.item.rate,"has-space":!0}})],1)])]),e("div",{staticClass:"grey_card"},[e("div",{staticClass:"text_wrapper"},[e("div",{staticClass:"detail_text"},[t._v(t._s(t.item.detail))])]),e("float-tag",{staticClass:"float_tag"},[t._v("简介")])],1)])])])},x=[],O=e("aa10"),w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"star_grid",class:{space_col:t.hasSpace}},t._l(t.rangeArray,(function(a){return e("img",{key:a,staticClass:"star_img",attrs:{src:t.starSrc(a)}})})),0)},j=[],k=(e("a9e3"),{name:"FiveStarDisplay",props:{rate:Number,hasSpace:{type:Boolean,default:!1}},data:function(){return{fiveRate:this.rate/2,rangeArray:[0,1,2,3,4]}},methods:{starSrc:function(t){return this.fiveRate-t>.5?"pic_res/icon/star_icon/1.svg":this.fiveRate-t>0?"pic_res/icon/star_icon/0.5.svg":"pic_res/icon/star_icon/0.svg"}}}),A=k,S=(e("f636"),Object(d["a"])(A,w,j,!1,null,"f9bbde36",null)),$=S.exports,E={name:"DetailIntroduction",props:{item:Object},components:{"float-tag":O["a"],"five-star":$}},P=E,I=(e("6f43"),Object(d["a"])(P,C,x,!1,null,"90d05138",null)),N=I.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("float-tag",{staticClass:"float_tag"},[t._v("剧照")]),e("div",{staticClass:"group_wrapper"},[e("div",{staticClass:"image_group"},t._l(t.imgArray,(function(t){return e("a",{key:t.id,attrs:{target:"_blank",href:t.link}},[e("img",{staticClass:"image",attrs:{src:t.imgSrc}})])})),0)])],1)},M=[],T={name:"DetailPictureCard",components:{"float-tag":O["a"]},props:{imgArray:Array}},q=T,K=(e("afab"),Object(d["a"])(q,D,M,!1,null,"c2f07dcc",null)),R=K.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("float-tag",{staticClass:"float_tag"},[t._v("用户评论")]),t._l(t.commentArray,(function(t){return e("my-comment",{key:t.id,staticClass:"comment_item",attrs:{item:t}})}))],2)},F=[],J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"comment_card"},[e("div",{staticClass:"pic_star_area"},[e("img",{staticClass:"profile",attrs:{src:t.item.imgSrc}}),e("star-rate",{staticClass:"star_rate",attrs:{rate:t.item.rate}})],1),e("div",{staticClass:"comment_grey_area"},[e("div",{staticClass:"grey_card"},[t._v(" "+t._s(t.item.text)+" ")])])])},G=[],W={name:"Comment",props:{item:Object},components:{"star-rate":$}},z=W,H=(e("82dd"),Object(d["a"])(z,J,G,!1,null,"1c0d8ee1",null)),L=H.exports,Q={name:"DetailComment",components:{"float-tag":O["a"],"my-comment":L},props:{commentArray:Array}},U=Q,V=(e("2207"),Object(d["a"])(U,B,F,!1,null,"669c6fda",null)),X=V.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("float-tag",{staticClass:"float_tag"},[t._v("相关资讯")]),e("div",{staticClass:"grey_card"},t._l(t.newsArray,(function(a){return e("div",{key:a.id,staticClass:"news_item"},[e("a",{attrs:{href:a.link}},[t._v(t._s(a.linkText))]),e("div",[t._v(t._s(a.text))])])})),0)],1)},Z=[],tt={name:"DetailNews",props:{newsArray:Array},components:{"float-tag":O["a"]}},at=tt,et=(e("b893"),Object(d["a"])(at,Y,Z,!1,null,"a632a326",null)),rt=et.exports,nt=e("2427"),st=e.n(nt),it={name:"app",components:{"my-navbar":c["a"],"content-area":p,"my-grid":h,"introduction-card":N,"picture-card":R,"comment-card":X,"news-card":rt},created:function(){this.$route.query.name?this.theName=this.$route.query.name:this.theName="大圣归来"},mounted:function(){var t=this,a="./jsons/detail_data/"+this.theName+".json";st.a.get(a).then((function(a){t.pageInfo=a.data,t.loadOK=!0})).catch((function(t){return alert(t)}))},data:function(){return{theName:null,pageInfo:null,loadOK:!1}}},ct=it,ot=(e("c0e6"),Object(d["a"])(ct,s,i,!1,null,null,null)),lt=ot.exports;r["a"].config.productionTip=!1,r["a"].use(n["a"]);var ut=[{path:"/App.vue",component:lt}],ft=new n["a"]({routes:ut});new r["a"]({router:ft,render:function(t){return t(lt)}}).$mount("#app")},8412:function(t,a,e){},"8b25":function(t,a,e){},"8c7f":function(t,a,e){},"8d58":function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar_outer",class:{transparent_outer:t.transparent,not_transparent_outer:!t.transparent}},[e("img",{staticClass:"navbar_logo",attrs:{src:"pic_res/logo.png"}}),e("ul",{staticClass:"navbar"},t._l(t.titleArray,(function(a){return e("li",{key:a.id},[e("a",{class:{active:a.id==t.selected},attrs:{href:a.link}},[t._v(t._s(a.title))])])})),0),t._m(0)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar_button_outer"},[e("button",{staticClass:"navbar_button"},[t._v("登录/注册")])])}],s=(e("a9e3"),{name:"MyNavbar",data:function(){return{titleArray:[{id:0,title:"首页",link:"home.html"},{id:1,title:"国漫",link:"worklist.html"},{id:2,title:"广场",link:"square.html"},{id:3,title:"画板",link:"paintingboard.html"}]}},props:{selected:{type:Number,required:!0},transparent:{type:Boolean,default:!1}}}),i=s,c=(e("5ad2"),e("2877")),o=Object(c["a"])(i,r,n,!1,null,"0a60be2d",null);a["a"]=o.exports},"8d81":function(t,a,e){},"8e93":function(t,a,e){},aa10:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"float_tag"},[t._t("default")],2)},n=[],s={name:"PinkFloatTag"},i=s,c=(e("54dd"),e("2877")),o=Object(c["a"])(i,r,n,!1,null,"183d482b",null);a["a"]=o.exports},ae27:function(t,a,e){"use strict";var r=e("cebd"),n=e.n(r);n.a},afab:function(t,a,e){"use strict";var r=e("d0ca"),n=e.n(r);n.a},b2a0:function(t,a,e){},b893:function(t,a,e){"use strict";var r=e("b2a0"),n=e.n(r);n.a},c0e6:function(t,a,e){"use strict";var r=e("8e93"),n=e.n(r);n.a},c94a:function(t,a,e){},cebd:function(t,a,e){},d0ca:function(t,a,e){},f636:function(t,a,e){"use strict";var r=e("3461"),n=e.n(r);n.a}});
//# sourceMappingURL=detail.d8b96139.js.map