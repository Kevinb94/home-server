"use strict";(self["webpackChunktandoor"]=self["webpackChunktandoor"]||[]).push([[9077],{69033:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{cursor:"pointer"}},[t.button?t._e():e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.downloadFile}},[e("i",{class:t.icon}),t._v(" "+t._s(t.label))]),t.button?e("b-button",{on:{click:t.downloadFile}},[t._v(t._s(t.label))]):t._e()],1)},l=[],i={name:"DownloadCSV",props:{items:{type:Array},name:{type:String},icon:{type:String},label:{type:String},button:{type:Boolean,default:!1},delim:{type:String,default:","}},methods:{downloadFile(){let t="data:text/csv;charset=utf-8,";t+=[Object.keys(this.items[0]).join(this.delim),...this.items.map((t=>Object.values(t).join(this.delim)))].join("\n").replace(/(^\[)|(\]$)/gm,"");const e=encodeURI(t),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download","export.csv"),n.click()}}},a=i,s=n(1001),r=(0,s.Z)(a,o,l,!1,null,null,null),c=r.exports}}]);