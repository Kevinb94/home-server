"use strict";(self["webpackChunktandoor"]=self["webpackChunktandoor"]||[]).push([[3470,7362,3591,4634],{91515:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ingredients",class:{"card border-primary no-border":e.header}},[t("div",{class:{"card-body":e.header,"p-0":e.header}},[e.header?t("div",{staticClass:"card-header"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("h4",{staticClass:"card-title"},[t("i",{staticClass:"fas fa-pepper-hot"}),e._v(" "+e._s(e.$t("Ingredients")))])])])]):e._e(),t("div",{staticClass:"card-body p-1 p-md-3"},[t("div",{staticClass:"row no-gutter"},[t("div",{staticClass:"col-12 m-0",class:{"p-0":!e.header}},[t("table",{staticClass:"table table-sm mb-0"},[e._l(e.steps,(function(i){return[i.show_as_header&&""!==i.name&&e.steps.length>1?t("tr",{key:i.id,staticClass:"ingredients__header-step-name"},[t("td",{attrs:{colspan:"5"}},[t("b",[e._v(e._s(i.name))])])]):e._e(),e._l(i.ingredients,(function(i){return[t("ingredient-component",{key:i.id,attrs:{ingredient:i,ingredient_factor:e.ingredient_factor,detailed:e.detailed},on:{"checked-state-changed":function(t){return e.$emit("checked-state-changed",t)}}})]}))]}))],2)])])])])])},s=[],r=i(70538),n=i(12120),l=(i(57024),i(40841)),o=i(49665);r["default"].use(n.XG7);var c={name:"IngredientCard",mixins:[o.ApiMixin],components:{IngredientComponent:l["default"]},props:{steps:{type:Array,default(){return[]}},recipe:{type:Number},ingredient_factor:{type:Number,default:1},servings:{type:Number,default:1},detailed:{type:Boolean,default:!0},header:{type:Boolean,default:!1},recipe_list:{type:Number,default:void 0}},data(){return{}},computed:{},watch:{},mounted(){},methods:{}},d=c,p=i(1001),u=(0,p.Z)(d,a,s,!1,null,null,null),_=u.exports},32825:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return e.recipe.keywords.length>0?t("div",{staticClass:"keywords"},e._l(e.recipe.keywords.slice(0,e.keyword_splice).filter((e=>e.show||void 0===e.show)),(function(i){return t("span",{key:i.id,staticClass:"keywords__item pl-1",class:e.keywordClass(i)},[e.enable_keyword_links?[t("a",{attrs:{href:`${e.resolveDjangoUrl("view_search")}?keyword=${i.id}`}},[t("b-badge",{staticClass:"font-weight-normal",attrs:{pill:"",variant:"light"}},[e._v(e._s(i.label))])],1)]:[t("b-badge",{staticClass:"font-weight-normal",attrs:{pill:"",variant:"light"}},[e._v(e._s(i.label))])]],2)})),0):e._e()},s=[],r=i(49665),n={name:"KeywordsComponent",mixins:[r.ResolveUrlMixin,r.EscapeCSSMixin],props:{recipe:Object,limit:Number,enable_keyword_links:{type:Boolean,default:!0}},computed:{keyword_splice:function(){return this.limit?this.limit:this.recipe.keywords.length}},methods:{keywordClass:function(e){return this.escapeCSS("_keywordname-"+e.label)}}},l=n,o=i(1001),c=(0,o.Z)(l,a,s,!1,null,null,null),d=c.exports},92077:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"last-cooked"},[void 0!==e.recipe.last_cooked&&null!==e.recipe.last_cooked?t("span",{staticClass:"pl-1"},[t("b-badge",{staticClass:"font-weight-normal",attrs:{pill:"",variant:"primary"}},[t("i",{staticClass:"fas fa-utensils"}),e._v(" "+e._s(e.formatDate(e.recipe.last_cooked)))])],1):e._e()])},s=[],r=i(30381),n=i.n(r),l={name:"LastCooked",props:{recipe:Object},methods:{formatDate:function(e){return n().locale(window.navigator.language),n()(e).format("L")}}},o=l,c=i(1001),d=(0,c.Z)(o,a,s,!1,null,"5a23d523",null),p=d.exports},13470:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=function(){var e=this,t=e._self._c;return t("div",[e.recipe&&e.recipe.loading?[t("b-card",{directives:[{name:"hover",rawName:"v-hover"}],staticStyle:{height:"100%"},attrs:{"no-body":""}},[t("b-card-img-lazy",{staticStyle:{height:"15vh","object-fit":"cover"},attrs:{src:e.placeholder_image,alt:e.$t("Recipe_Image"),top:""}}),t("b-card-body",{staticClass:"p-4"},[t("h6",[t("b-skeleton",{attrs:{width:"95%"}})],1),t("b-card-text",[t("b-skeleton",{attrs:{height:"12px",width:"65%"}}),t("b-skeleton",{attrs:{height:"12px",width:"45%"}}),t("b-skeleton",{attrs:{height:"12px",width:"55%"}})],1)],1)],1)]:[e.recipe?t("b-card",{directives:[{name:"hover",rawName:"v-hover"}],staticStyle:{height:"100%"},attrs:{"no-body":""}},[t("a",{attrs:{href:e.recipe_link}},[t("div",{staticClass:"content"},[null!==e.recipe.description&&""!==e.recipe.description?t("div",{staticClass:"content-overlay"}):e._e(),t("b-card-img-lazy",{staticStyle:{height:"15vh","object-fit":"cover"},attrs:{src:e.recipe_image,alt:e.$t("Recipe_Image"),top:""}}),t("div",{staticClass:"content-details"},[t("p",{staticClass:"content-text"},[e._v(" "+e._s(e.recipe.description)+" ")])]),t("b-row",{staticClass:"card-img-overlay pt-1"},[t("b-col",{attrs:{cols:"6"}},[0!==e.recipe.working_time||0!==e.recipe.waiting_time?t("div",[0!==e.recipe.working_time&&void 0!==e.recipe.working_time?t("b-badge",{staticClass:"mt-1 font-weight-normal",attrs:{pill:"",variant:"light"}},[t("i",{staticClass:"fa fa-clock"}),e._v(" "+e._s(e.working_time)+" ")]):e._e(),0!==e.recipe.waiting_time&&void 0!==e.recipe.waiting_time?t("b-badge",{staticClass:"mt-1 font-weight-normal",attrs:{pill:"",variant:"secondary"}},[t("i",{staticClass:"fa fa-pause"}),e._v(" "+e._s(e.waiting_time)+" ")]):e._e()],1):e._e()]),t("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[t("recipe-rating",{attrs:{recipe:e.recipe,pill:!0}})],1)],1)],1)]),t("b-card-body",{staticClass:"p-2 pl-3 pr-3"},[t("div",{staticClass:"d-flex flex-row"},[t("div",{staticClass:"flex-grow-1"},[t("a",{staticClass:"text-body font-weight-bold two-row-text",attrs:{href:e.recipe_link}},[null!==e.recipe?[e._v(e._s(e.recipe.name))]:[e._v(e._s(e.meal_plan.title))]],2)]),t("div",{staticClass:"justify-content-end"},[null!==e.recipe&&e.show_context_menu?t("recipe-context-menu",{staticClass:"justify-content-end float-right align-items-end pr-0",attrs:{recipe:e.recipe,disabled_options:e.context_disabled_options}}):e._e()],1)]),t("b-card-text",{staticStyle:{"text-overflow":"ellipsis"}},[null!==e.recipe?[e.show_detail?t("div",[e._v(" "+e._s(e.recipe.description)+" ")]):e._e(),t("p",{staticClass:"mt-1 mb-1"},[t("last-cooked",{attrs:{recipe:e.recipe}}),t("keywords-component",{staticStyle:{"margin-top":"4px",position:"relative","z-index":"3"},attrs:{recipe:e.recipe,limit:3,enable_keyword_links:e.enable_keyword_links}})],1),t("transition",{attrs:{name:"fade",mode:"in-out"}},[e.show_detail?t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-md-12"},[t("h6",{staticClass:"card-title"},[t("i",{staticClass:"fas fa-pepper-hot"}),e._v(" "+e._s(e.$t("Ingredients")))]),t("ingredients-card",{attrs:{steps:e.recipe.steps,header:!1,detailed:!1,servings:e.recipe.servings}})],1)]):e._e()]),void 0===e.recipe.internal||e.recipe.internal?e._e():t("b-badge",{attrs:{pill:"",variant:"info"}},[e._v(e._s(e.$t("External")))])]:e._e()],2)],1)],1):e._e()]],2)},s=[],r=i(91515),n=i(32825),l=i(92077),o=i(21956),c=i(11840),d=i(49665),p=i(30381),u=i.n(p),_=i(70538);_["default"].prototype.moment=u();var f={name:"RecipeCard",mixins:[d.ResolveUrlMixin],components:{LastCooked:l["default"],KeywordsComponent:n["default"],"recipe-context-menu":o["default"],IngredientsCard:r["default"],RecipeRating:c["default"]},props:{recipe:Object,meal_plan:Object,footer_text:String,footer_icon:String,detailed:{type:Boolean,default:!0},show_context_menu:{type:Boolean,default:!0},context_disabled_options:Object,open_recipe_on_click:{type:Boolean,default:!0},enable_keyword_links:{type:Boolean,default:!0}},data(){return{placeholder_image:window.IMAGE_PLACEHOLDER}},mounted(){},computed:{show_detail:function(){return void 0!==this.recipe?.steps&&this.detailed},recipe_image:function(){return null==this.recipe||null===this.recipe.image?window.IMAGE_PLACEHOLDER:this.recipe.image},working_time:function(){return(0,d.calculateHourMinuteSplit)(this.recipe.working_time)},waiting_time:function(){return(0,d.calculateHourMinuteSplit)(this.recipe.waiting_time)},recipe_link:function(){return this.open_recipe_on_click?void 0!==this.recipe.id?(0,d.resolveDjangoUrl)("view_recipe",this.recipe.id):null:"#"}},methods:{},directives:{hover:{inserted:function(e){e.addEventListener("mouseenter",(()=>{e.classList.add("shadow")})),e.addEventListener("mouseleave",(()=>{e.classList.remove("shadow")}))}}}},h=f,m=i(1001),v=(0,m.Z)(h,a,s,!1,null,"8dba8f0c",null),g=v.exports},11840:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"rating"},[e.recipe.rating>0?t("span",{staticClass:"d-inline"},[e.pill?t("div",[t("b-badge",{staticClass:"mt-1 font-weight-normal",attrs:{pill:"",variant:"light"}},[e._l(Math.floor(e.recipe.rating),(function(e){return t("i",{key:e,staticClass:"fas fa-star fa-xs text-dark"})})),e.recipe.rating%1>0?t("i",{staticClass:"fas fa-star-half-alt fa-xs text-dark"}):e._e(),e._l(5-Math.ceil(e.recipe.rating),(function(e){return t("i",{key:e+10,staticClass:"far fa-star fa-xs text-dark"})}))],2)],1):t("div",[e._l(Math.floor(e.recipe.rating),(function(e){return t("i",{key:e,staticClass:"fas fa-star fa-xs text-primary"})})),e.recipe.rating%1>0?t("i",{staticClass:"fas fa-star-half-alt fa-xs text-primary"}):e._e(),e._l(5-Math.ceil(e.recipe.rating),(function(e){return t("i",{key:e+10,staticClass:"far fa-star fa-xs text-secondary"})}))],2)]):e._e()])},s=[],r={name:"RecipeRating",props:{recipe:Object,pill:{required:!1,type:Boolean,default:!1}}},n=r,l=i(1001),o=(0,l.Z)(n,a,s,!1,null,"b597b90a",null),c=o.exports}}]);