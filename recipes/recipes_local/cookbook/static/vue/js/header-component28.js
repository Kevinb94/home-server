"use strict";(self["webpackChunktandoor"]=self["webpackChunktandoor"]||[]).push([[762,2936],{68697:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=function(){var e=this,t=e._self._c;return t("div",[t(e.compiled,{tag:"component",attrs:{ingredient_factor:e.ingredient_factor,code:e.code}})],1)},l=[],o=n(70538),c=n(96059),r={name:"CompileComponent",props:["code","ingredient_factor"],data(){return{compiled:null}},mounted(){this.compiled=o["default"].component("compiled-component",{props:["ingredient_factor","code"],components:{ScalableNumber:c["default"]},template:`<div>${this.code}</div>`})}},u=r,s=n(1001),d=(0,s.Z)(u,a,l,!1,null,null,null),i=d.exports},96059:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("span",{staticClass:"step__scalable-num",class:[1===this.factor?"step__scalable-num_scaled_false":this.factor>1?"step__scalable-num_scaled_up":"step__scalable-num_scaled_down"],domProps:{innerHTML:e._s(e.calculateAmount(e.number))}})},l=[],o=n(49665),c={name:"ScalableNumber",props:{number:Number,factor:{type:Number,default:4}},methods:{calculateAmount:function(e){return(0,o.calculateAmount)(e,this.factor)}}},r=c,u=n(1001),s=(0,u.Z)(r,a,l,!1,null,null,null),d=s.exports}}]);