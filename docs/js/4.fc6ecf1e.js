(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("app-header"),n("app-drawer"),n("q-page-container",[n("router-view")],1)],1)},r=[],o=n("e4fd"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-header",{staticClass:"bg-accent text-header"},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:e.toggleDrawer}}),n("q-toolbar-title",[e._v("\n      "+e._s(e.title)),n("span",{staticClass:"blinking-cursor"},[e._v("_")])]),n("q-toggle",{attrs:{value:e.theme,"false-value":e.LIGHT_THEME,"true-value":e.DARK_THEME,color:"info"},on:{input:e.toggleTheme}})],1)],1)},c=[],s=n("8d7e"),i=n("48ba"),u=n("24d1"),b=n("6fdf"),p=Object(o["defineComponent"])({name:"AppHeader",props:{},setup(){const e=Object(s["a"])([i["a"],i["b"]]),t=Object(s["b"])([u["b"]]),n="lioncross.dev",a=t[u["b"]];function r(){const t=a.value===b["b"]?b["a"]:b["b"];e[i["a"]](t)}function o(){e[i["b"]]()}return{LIGHT_THEME:b["b"],DARK_THEME:b["a"],title:n,theme:a,toggleTheme:r,toggleDrawer:o}}}),d=p,f=(n("d098"),n("2877")),m=n("e359"),v=n("65c6"),g=n("9c40"),w=n("6ac5"),_=n("9564"),h=n("eebe"),T=n.n(h),E=Object(f["a"])(d,l,c,!1,null,"65899cfb",null),j=E.exports;T()(E,"components",{QHeader:m["a"],QToolbar:v["a"],QBtn:g["a"],QToolbarTitle:w["a"],QToggle:_["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-drawer",{attrs:{value:e.visible,"content-class":"bg-secondary"},on:{input:e.setDrawerVisible}})},O=[],D=n("4d79"),q=Object(o["defineComponent"])({name:"AppDrawer",setup(){const e=Object(s["b"])([u["a"]]),t=e[u["a"]],n=Object(s["c"])([D["a"]]);function a(e){n[D["a"]](e)}return{visible:t,setDrawerVisible:a}}}),Q=q,A=n("9404"),C=Object(f["a"])(Q,H,O,!1,null,null,null),M=C.exports;T()(C,"components",{QDrawer:A["a"]});var L=Object(o["defineComponent"])({name:"MainLayout",components:{AppHeader:j,AppDrawer:M},setup(){return{}}}),k=L,x=n("4d5a"),y=n("09e3"),$=Object(f["a"])(k,a,r,!1,null,null,null);t["default"]=$.exports;T()($,"components",{QLayout:x["a"],QPageContainer:y["a"]})},d098:function(e,t,n){"use strict";n("e53e")},e53e:function(e,t,n){}}]);