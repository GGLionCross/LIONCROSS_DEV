(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"2a3f":function(e,t,a){"use strict";a("f2c5")},"7b22":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("project-dialog",e._g(e._b({},"project-dialog",e.$attrs,!1),e.$listeners))},o=[],l=a("e4fd"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dialog-layout",e._g(e._b({on:{hide:e.handleDialogHide}},"dialog-layout",e.$attrs,!1),e.$listeners),[a("dialog-header",{attrs:{"dialog-title":e.projectTitle}}),a("dialog-content",[e.projectHighlights.length?a("q-carousel",{attrs:{animated:"",arrows:"","transition-next":"slide-left","transition-prev":"slide-right",infinite:"",navigation:"","control-color":"accent","control-type":"push"},model:{value:e.highlightChoice,callback:function(t){e.highlightChoice=t},expression:"highlightChoice"}},e._l(e.projectHighlights,(function(e,t){return a("q-carousel-slide",{key:e,attrs:{name:t,"img-src":e}})})),1):e._e(),a("q-card",{attrs:{square:""}},[a("q-card-section",{staticClass:"text-center text-h3 text-bold text-accent"},[e._v("\n        Cannot provide samples.\n      ")])],1),e.projectResponsibilities.length?a("q-card",{staticClass:"q-ma-md"},[a("q-list",{attrs:{bordered:"",padding:""}},[a("q-item-label",{staticClass:"text-accent text-uppercase text-bold text-underline",attrs:{header:""}},[e._v("\n          Responsibilities\n        ")]),e._l(e.projectResponsibilities,(function(t,n){return a("q-item",{key:n,attrs:{dense:""}},[a("q-item-section",{staticClass:"text-accent"},[e._v(e._s(t))])],1)}))],2)],1):e._e(),e._t("default")],2)],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",e._g(e._b({attrs:{"data-theme":e.theme}},"q-dialog",e.$attrs,!1),e.$listeners),[a("q-layout",{staticClass:"bg-primary",attrs:{container:""}},[e._t("default")],2)],1)},c=[],u=a("24d1"),d=a("8d7e"),p=Object(l["defineComponent"])({name:"DialogLayout",setup(){const e=Object(d["b"])([u["b"]]),t=e[u["b"]];return{theme:t}}}),g=p,h=a("2877"),m=a("24e8"),b=a("4d5a"),f=a("eebe"),_=a.n(f),C=Object(h["a"])(g,s,c,!1,null,null,null),j=C.exports;_()(C,"components",{QDialog:m["a"],QLayout:b["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-header",{staticClass:"bg-accent text-header"},[a("q-toolbar",[a("q-toolbar-title",[e._v("\n      "+e._s(e.dialogTitle)+"\n    ")])],1)],1)},v=[],x=Object(l["defineComponent"])({name:"DialogHeader",props:{dialogTitle:{type:String,required:!0}}}),y=x,Q=a("e359"),D=a("65c6"),O=a("6ac5"),$=Object(h["a"])(y,q,v,!1,null,null,null),H=$.exports;_()($,"components",{QHeader:Q["a"],QToolbar:D["a"],QToolbarTitle:O["a"]});var w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page-container",{attrs:{"data-component":"dialog-content"}},[a("q-page",{staticClass:"column"},[a("q-scroll-area",{staticClass:"column col"},[e._t("default")],2)],1)],1)},S=[],T=Object(l["defineComponent"])({name:"DialogContent",setup(){return{}}}),k=T,E=(a("2a3f"),a("09e3")),L=a("9989"),P=a("4983"),R=Object(h["a"])(k,w,S,!1,null,null,null),A=R.exports;_()(R,"components",{QPageContainer:E["a"],QPage:L["a"],QScrollArea:P["a"]});var I=Object(l["defineComponent"])({name:"ProjectDialog",components:{DialogLayout:j,DialogHeader:H,DialogContent:A},props:{projectTitle:{type:String,required:!0},projectHighlights:{type:Array,default:()=>[]},projectResponsibilities:{type:Array,default:()=>[]}},setup(){const e=Object(l["ref"])(0);function t(){e.value=0}return{highlightChoice:e,handleDialogHide:t}}}),J=I,z=a("880c"),B=a("62cd"),F=a("f09f"),G=a("a370"),K=a("1c1c"),M=a("0170"),N=a("66e5"),U=a("4074"),V=Object(h["a"])(J,i,r,!1,null,null,null),W=V.exports;_()(V,"components",{QCarousel:z["a"],QCarouselSlide:B["a"],QCard:F["a"],QCardSection:G["a"],QList:K["a"],QItemLabel:M["a"],QItem:N["a"],QItemSection:U["a"]});var X=Object(l["defineComponent"])({name:"StatboostDialog",components:{ProjectDialog:W}}),Y=X,Z=Object(h["a"])(Y,n,o,!1,null,null,null);t["default"]=Z.exports},f2c5:function(e,t,a){}}]);