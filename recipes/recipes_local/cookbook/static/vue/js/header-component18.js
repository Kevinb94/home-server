"use strict";(self["webpackChunktandoor"]=self["webpackChunktandoor"]||[]).push([[3122],{72934:function(t,a,n){n.d(a,{s:function(){return e},x:function(){return s}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"fixed-bottom p-1 pt-2 pl-2 pr-2 border-top text-center d-lg-none d-print-none bottom-action-bar bg-white"},[t._t("custom_nav_content"),a("div",{staticClass:"d-flex flex-row justify-content-around"},[t.show_button_1?a("div",{staticClass:"flex-column"},[t._t("button_1",(function(){return[a("a",{staticClass:"nav-link bottom-nav-link p-0",class:{"bottom-nav-link-active":"view_search"===t.activeView},attrs:{href:t.resolveDjangoUrl("view_search")}},[a("i",{staticClass:"fas fa-fw fa-book",staticStyle:{"font-size":"1.4em"}}),a("br"),a("small",[t._v(t._s(t.$t("Recipes")))])])]}))],2):t._e(),t.show_button_2?a("div",{staticClass:"flex-column"},[t._t("button_2",(function(){return[a("a",{staticClass:"nav-link bottom-nav-link p-0",class:{"bottom-nav-link-active":"view_plan"===t.activeView},attrs:{href:t.resolveDjangoUrl("view_plan")}},[a("i",{staticClass:"fas fa-calendar-alt",staticStyle:{"font-size":"1.4em"}}),a("br"),a("small",[t._v(t._s(t.$t("Meal_Plan")))])])]}))],2):t._e(),t.show_button_create?a("div",{staticClass:"flex-column"},[t._t("button_create",(function(){return[a("div",{staticClass:"dropup"},[t._m(0),a("div",{staticClass:"dropdown-menu center-dropup",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:t.resolveDjangoUrl("new_recipe")}},[a("i",{staticClass:"fas fa-fw fa-plus"}),t._v(" "+t._s(t.$t("Create Recipe")))]),a("a",{staticClass:"dropdown-item",attrs:{href:t.resolveDjangoUrl("data_import_url")}},[a("i",{staticClass:"fas fa-fw fa-file-import"}),t._v(" "+t._s(t.$t("Import Recipe")))]),t.create_links.length>0?a("div",{staticClass:"dropdown-divider"}):t._e(),t._t("custom_create_functions"),t._l(t.create_links,(function(n){return a("a",{key:n.label,staticClass:"dropdown-item",attrs:{href:n.url}},[a("i",{class:n.icon+" fa-fw"}),t._v(" "+t._s(n.label)+" ")])}))],2)])]}))],2):t._e(),t.show_button_3?a("div",{staticClass:"flex-column"},[t._t("button_3",(function(){return[a("a",{staticClass:"nav-link bottom-nav-link p-0",class:{"bottom-nav-link-active":"view_shopping"===t.activeView},attrs:{href:t.resolveDjangoUrl("view_shopping")}},[a("i",{staticClass:"fas fa-shopping-cart",staticStyle:{"font-size":"1.4em"}}),a("br"),a("small",[t._v(t._s(t.$t("Shopping_list")))])])]}))],2):t._e(),a("div",{staticClass:"flex-column"},[t.show_button_4?t._t("button_4",(function(){return[a("a",{staticClass:"nav-link bottom-nav-link p-0",class:{"bottom-nav-link-active":"view_books"===t.activeView},attrs:{href:t.resolveDjangoUrl("view_books")}},[a("i",{staticClass:"fas fa-book-open",staticStyle:{"font-size":"1.4em"}}),a("br"),a("small",[t._v(t._s(t.$t("Books")))])])]})):t._e()],2)])],2)},s=[function(){var t=this,a=t._self._c;return a("a",{staticClass:"nav-link bottom-nav-link p-0",attrs:{href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-plus-circle fa-2x bottom-nav-link bottom-nav-link-active"})])}]},23652:function(t,a,n){n.r(a);var e=n(69770),s=n(25642),o=(n(21655),n(1001)),i=(0,o.Z)(s.Z,e.s,e.x,!1,null,"7d188138",null);a["default"]=i.exports},69770:function(t,a,n){n.d(a,{s:function(){return e.s},x:function(){return e.x}});var e=n(72934)},21655:function(t,a,n){n(40900)},25642:function(t,a,n){var e=n(62422);a.Z=e.Z},40900:function(){},62422:function(t,a,n){var e=n(49665);a.Z={name:"BottomNavigationBar",mixins:[e.ResolveUrlMixin],props:{create_links:{type:Array,default(){return[]}},show_button_1:{type:Boolean,default:!0},show_button_2:{type:Boolean,default:!0},show_button_3:{type:Boolean,default:!0},show_button_4:{type:Boolean,default:!0},show_button_create:{type:Boolean,default:!0},activeView:{type:String,default:""}}}}}]);