"use strict";(self["webpackChunktandoor"]=self["webpackChunktandoor"]||[]).push([[4738],{63078:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",[void 0!==t.user?a("div",[a("b-form-group",{attrs:{label:t.$t("Username")}},[a("b-form-input",{attrs:{disabled:""},on:{change:function(a){return t.updateUser(!1)}},model:{value:t.user.username,callback:function(a){t.$set(t.user,"username",a)},expression:"user.username"}})],1),a("b-form-group",{attrs:{label:t.$t("First_name")}},[a("b-form-input",{attrs:{placeholder:t.$t("First_name")},on:{change:function(a){return t.updateUser(!1)}},model:{value:t.user.first_name,callback:function(a){t.$set(t.user,"first_name",a)},expression:"user.first_name"}})],1),a("b-form-group",{attrs:{label:t.$t("Last_name")}},[a("b-form-input",{attrs:{placeholder:t.$t("Last_name")},on:{change:function(a){return t.updateUser(!1)}},model:{value:t.user.last_name,callback:function(a){t.$set(t.user,"last_name",a)},expression:"user.last_name"}})],1)],1):t._e(),a("b-button-toolbar",[a("b-button-group",{staticClass:"mx-1"},[a("a",{staticClass:"btn btn-primary",attrs:{href:t.resolveDjangoUrl("account_email")}},[t._v(t._s(t.$t("Manage_Emails")))])]),a("b-button-group",{staticClass:"mx-1"},[a("a",{staticClass:"btn btn-primary",attrs:{href:t.resolveDjangoUrl("account_change_password")}},[t._v(t._s(t.$t("Change_Password")))])]),a("b-button-group",{staticClass:"mx-1"},[a("a",{staticClass:"btn btn-primary",attrs:{href:t.resolveDjangoUrl("socialaccount_connections")}},[t._v(t._s(t.$t("Social_Authentication")))])])],1)],1)},r=[],n=e(6955),o=e(49665),i=e(5121);i.Z.defaults.xsrfCookieName="csrftoken",i.Z.defaults.xsrfHeaderName="X-CSRFTOKEN";var u={name:"AccountSettingsComponent",mixins:[o.ResolveUrlMixin],props:{user_id:Number},data(){return{user_preferences:void 0,user:void 0,languages:[]}},mounted(){this.user_preferences=this.preferences,this.languages=window.AVAILABLE_LANGUAGES,this.loadSettings()},methods:{loadSettings:function(){let t=new n.ApiApiFactory;t.retrieveUserPreference(this.user_id.toString()).then((t=>{this.user_preferences=t.data})).catch((t=>{o.StandardToasts.makeStandardToast(this,o.StandardToasts.FAIL_FETCH,t)})),t.retrieveUser(this.user_id.toString()).then((t=>{this.user=t.data})).catch((t=>{o.StandardToasts.makeStandardToast(this,o.StandardToasts.FAIL_FETCH,t)}))},updateSettings:function(t){let a=new n.ApiApiFactory;a.partialUpdateUserPreference(this.user_id.toString(),this.user_preferences).then((a=>{o.StandardToasts.makeStandardToast(this,o.StandardToasts.SUCCESS_UPDATE),void 0!==t&&location.reload()})).catch((t=>{o.StandardToasts.makeStandardToast(this,o.StandardToasts.FAIL_UPDATE,t)}))},updateUser:function(t){let a=new n.ApiApiFactory;a.partialUpdateUser(this.user_id.toString(),this.user).then((a=>{o.StandardToasts.makeStandardToast(this,o.StandardToasts.SUCCESS_UPDATE),t&&location.reload()})).catch((t=>{o.StandardToasts.makeStandardToast(this,o.StandardToasts.FAIL_UPDATE,t)}))}}},d=u,c=e(1001),l=(0,c.Z)(d,s,r,!1,null,"27f0fb14",null),m=l.exports}}]);