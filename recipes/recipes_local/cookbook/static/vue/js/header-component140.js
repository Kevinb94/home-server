"use strict";(self["webpackChunktandoor"]=self["webpackChunktandoor"]||[]).push([[1580],{15782:function(t,e,a){a.d(e,{I:function(){return d}});a(57658);var s=a(6955),n=a(49665),i=a(96086),r=a(70538);const l="meal_plan_store",o="MEAL_PLAN_CLIENT_SETTINGS",d=(0,i.Q_)(l,{state:()=>({plans:{},currently_updating:null,settings:null}),getters:{plan_list:function(){let t=[];for(let e in this.plans)t.push(this.plans[e]);return t},empty_meal_plan:function(){return{from_date:null,to_date:null,id:-1,meal_type:null,note:"",note_markdown:"",recipe:null,servings:1,shared:[],title:"",title_placeholder:"Title"}},client_settings:function(){return null===this.settings&&(this.settings=this.loadClientSettings()),this.settings}},actions:{refreshFromAPI(t,e){if(null==this.currently_updating||this.currently_updating[0]!==t||this.currently_updating[1]!==e){this.currently_updating=[t,e];let a=new s.ApiApiFactory;a.listMealPlans(t,e).then((t=>{t.data.forEach((t=>{r["default"].set(this.plans,t.id,t)})),this.currently_updating=null}))}},createObject(t){let e=new s.ApiApiFactory;return e.createMealPlan(t).then((t=>(r["default"].set(this.plans,t.data.id,t.data),t))).catch((t=>{n.StandardToasts.makeStandardToast(this,n.StandardToasts.FAIL_CREATE,t)}))},updateObject(t){let e=new s.ApiApiFactory;return e.updateMealPlan(t.id,t).then((e=>{r["default"].set(this.plans,t.id,t)})).catch((t=>{n.StandardToasts.makeStandardToast(this,n.StandardToasts.FAIL_UPDATE,t)}))},deleteObject(t){let e=new s.ApiApiFactory;return e.destroyMealPlan(t.id).then((e=>{r["default"].delete(this.plans,t.id)})).catch((t=>{n.StandardToasts.makeStandardToast(this,n.StandardToasts.FAIL_DELETE,t)}))},updateClientSettings(t){this.settings=t,localStorage.setItem(o,JSON.stringify(this.settings))},loadClientSettings(){let t=localStorage.getItem(o);return null===t?{displayPeriodUom:"week",displayPeriodCount:3,startingDayOfWeek:1,displayWeekNumbers:!0}:JSON.parse(t)}}})},1094:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return void 0!==t.user_preferences?e("div",[e("b-form-group",{attrs:{label:t.$t("Share"),description:t.$t("plan_share_desc")}},[e("generic-multiselect",{attrs:{model:t.Models.USER,initial_selection:t.user_preferences.plan_share,label:"display_name",multiple:!0,placeholder:t.$t("User")},on:{change:function(e){t.user_preferences.plan_share=e.val,t.updateSettings(!1)}}})],1),e("hr"),t.settings?e("b-form",[e("b-form-group",{attrs:{id:"UomInput",label:t.$t("Period"),description:t.$t("Plan_Period_To_Show"),"label-for":"UomInput"}},[e("b-form-select",{attrs:{id:"UomInput",options:t.calendar_options.displayPeriodUom},model:{value:t.settings.displayPeriodUom,callback:function(e){t.$set(t.settings,"displayPeriodUom",e)},expression:"settings.displayPeriodUom"}})],1),e("b-form-group",{attrs:{id:"PeriodInput",label:t.$t("Periods"),description:t.$t("Plan_Show_How_Many_Periods"),"label-for":"PeriodInput"}},[e("b-form-select",{attrs:{id:"PeriodInput",options:t.calendar_options.displayPeriodCount},model:{value:t.settings.displayPeriodCount,callback:function(e){t.$set(t.settings,"displayPeriodCount",e)},expression:"settings.displayPeriodCount"}})],1),e("b-form-group",{attrs:{id:"DaysInput",label:t.$t("Starting_Day"),description:t.$t("Starting_Day"),"label-for":"DaysInput"}},[e("b-form-select",{attrs:{id:"DaysInput",options:t.dayNames()},model:{value:t.settings.startingDayOfWeek,callback:function(e){t.$set(t.settings,"startingDayOfWeek",e)},expression:"settings.startingDayOfWeek"}})],1),e("b-form-group",{attrs:{id:"WeekNumInput",label:t.$t("Week_Numbers")}},[e("b-form-checkbox",{attrs:{name:"week_num"},model:{value:t.settings.displayWeekNumbers,callback:function(e){t.$set(t.settings,"displayWeekNumbers",e)},expression:"settings.displayWeekNumbers"}},[t._v(" "+t._s(t.$t("Show_Week_Numbers"))+" ")])],1)],1):t._e(),e("hr"),e("h5",[t._v(t._s(t.$t("Meal_Types"))+" "),e("button",{staticClass:"btn btn-success shadow-none float-right",attrs:{type:"button"},on:{click:function(e){t.generic_action=t.Actions.CREATE}}},[e("i",{staticClass:"fas fa-plus"})])]),e("draggable",{staticClass:"mt-4",attrs:{list:t.meal_types,group:"meal_types","empty-insert-threshold":10,"ghost-class":"ghost",handle:".handle"},on:{sort:function(e){return t.sortMealTypes()}}},t._l(t.meal_types,(function(a){return e("b-list-group-item",{key:a.id},[e("button",{staticClass:"btn handle shadow-none",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-arrows-alt-v"})]),e("b-badge",{style:{"background-color":a.color}},[e("i",{staticClass:"fas fa-palette"})]),e("span",[t._v(" "+t._s(a.name)+" ")]),a.default?e("b-badge",[t._v(t._s(t.$t("Default")))]):t._e(),e("div",{staticClass:"btn-group float-right"},[e("button",{staticClass:"btn btn-primary shadow-none",attrs:{type:"button"},on:{click:function(e){t.generic_action=t.Actions.UPDATE,t.editing_meal_type=a}}},[e("i",{staticClass:"fas fa-edit"})]),e("button",{staticClass:"btn btn-danger shadow-none",attrs:{type:"button"},on:{click:function(e){t.generic_action=t.Actions.DELETE,t.editing_meal_type=a}}},[e("i",{staticClass:"fas fa-trash-alt"})])])],1)})),1),e("b-list-group"),e("generic-modal-form",{attrs:{model:t.Models.MEAL_TYPE,action:t.generic_action,show:null!==t.generic_action,item1:t.editing_meal_type},on:{"finish-action":t.finishGenericAction}})],1):t._e()},n=[],i=(a(57658),a(6955)),r=a(49665),l=a(5121),o=a(26678),d=a(15782),c=a(68266),u=a(9980),p=a.n(u),h=a(45871);l.Z.defaults.xsrfCookieName="csrftoken",l.Z.defaults.xsrfHeaderName="X-CSRFTOKEN";var _={name:"MealPlanSettingsComponent",mixins:[r.ApiMixin,c.MQ],components:{GenericModalForm:h["default"],draggable:p(),GenericMultiselect:o["default"]},props:{user_id:Number},data(){return{user_preferences:void 0,languages:[],settings:void 0,calendar_options:{displayPeriodUom:[{text:this.$t("Week"),value:"week"},{text:this.$t("Month"),value:"month"},{text:this.$t("Year"),value:"year"}],displayPeriodCount:[1,2,3,4]},meal_types:[],generic_action:null,editing_meal_type:null}},watch:{settings:{handler(){(0,d.I)().updateClientSettings(this.settings)},deep:!0}},mounted(){this.user_preferences=this.preferences,this.languages=window.AVAILABLE_LANGUAGES,this.loadSettings(),this.settings=(0,d.I)().client_settings,this.loadMealTypes()},methods:{loadSettings:function(){let t=new i.ApiApiFactory;t.retrieveUserPreference(this.user_id.toString()).then((t=>{this.user_preferences=t.data})).catch((t=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.FAIL_FETCH,t)}))},updateSettings:function(t){let e=new i.ApiApiFactory;e.partialUpdateUserPreference(this.user_id.toString(),this.user_preferences).then((e=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.SUCCESS_UPDATE),t&&location.reload()})).catch((t=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.FAIL_UPDATE,t)}))},dayNames:function(){let t=[];return this.getFormattedWeekdayNames(this.getDefaultBrowserLocale(),"long",0).forEach(((e,a)=>{t.push({text:e,value:a})})),t},loadMealTypes:function(){let t=new i.ApiApiFactory;t.listMealTypes().then((t=>{this.meal_types=t.data})).catch((t=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.FAIL_FETCH,t)}))},sortMealTypes(){this.meal_types.forEach((function(t,e){t.order=e})),this.meal_types.forEach((t=>{let e=new i.ApiApiFactory;e.updateMealType(t.id,t).then((t=>{})).catch((t=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.FAIL_UPDATE,t)}))}))},finishGenericAction:function(t){"cancel"!==t&&this.loadMealTypes(),this.editing_meal_type=null,this.generic_action=null}}},g=_,f=a(1001),m=(0,f.Z)(g,s,n,!1,null,"1d774fec",null),y=m.exports}}]);