(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{472:function(e,t,a){"use strict";a.r(t);var r=a(15),i=a(10),n=a(17),s=a(20),l=a.n(s),o={props:{user:{required:!0}},data:function(){return{dialog:!0,email:{},fieldRequire:n.b,loading:!1}},methods:{send:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,l.a.post("/api/send-email",{email:this.user.email,subject:this.email.subject,message:this.email.message}).then((function(t){"sent"==t.data&&e.$emit("close")})).finally((function(){return e.loading=!1})))}}},c=a(6),v=a(11),u=a.n(v),m=a(75),d=a(262),p=a(16),_=a(396),f=a(395),b=a(102),g=a(383),h=a(397),y=a(453),C=a(26),w=a(392),x=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("p",[e._v("Enviar email a "+e._s(e.user.name))])]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}})],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",label:"Asunto",rules:e.fieldRequire,required:""},model:{value:e.email.subect,callback:function(t){e.$set(e.email,"subect",t)},expression:"email.subect"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{rules:e.fieldRequire,required:"",outlined:"",name:"input-7-4",label:"Mensaje"},model:{value:e.email.message,callback:function(t){e.$set(e.email,"message",t)},expression:"email.message"}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"primary",rounded:""},on:{click:function(t){return e.$emit("close")}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{color:"primary",rounded:"",loading:e.loading},on:{click:e.send}},[e._v("Enviar")])],1)],1)],1)}),[],!1,null,null,null),V=x.exports;function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){O(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}u()(x,{VBtn:m.a,VCard:d.a,VCardActions:p.a,VCardText:p.b,VCardTitle:p.c,VCol:_.a,VDialog:f.a,VDivider:b.a,VForm:g.a,VRow:h.a,VSpacer:y.a,VTextField:C.a,VTextarea:w.a});var $={components:{EmailDialog:V},data:function(){return{tab:0,tree:[],user:null}},computed:k(k({},Object(i.b)("user",["item","loadingItem"])),{},{role:function(){return decodeURIComponent(this.$route.params.role)}}),methods:k(k({},Object(r.b)({getItem:"user/getItem"})),{},{preview:function(e){this.getItem({endpoint:"user-profile",query:{id:e}})}}),created:function(){this.getItem({endpoint:"user-profile",query:{id:decodeURIComponent(this.$route.params.id)}})},destroyed:function(){this.item=null}},I=a(398),D=a(106),P=a(450),T=a(463),z=a(84),q=a(469),E=a(508),R=a(499),S=a(381),A=a(507),U=Object(c.a)($,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item?a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"px-0",attrs:{cols:"12",lg:"3","order-lg":"12"}},[a("v-card",{staticClass:"mx-auto px-3",attrs:{"min-height":"100%",outlined:"",elevation:"5"}},[a("v-row",{staticClass:"justify-center mt-3"},[a("v-avatar",{attrs:{color:"grey",size:"80"}},[e.item.image?a("img",{attrs:{src:e.item.image.url}}):a("v-icon",{attrs:{dark:"",size:"80"}},[e._v("mdi-account")])],1)],1),e._v(" "),a("v-row",{staticClass:"justify-center mt-3 headline"},[e._v(e._s(e.item.full_name))]),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex justify-center"},[a("v-icon",{staticClass:"mr-2",attrs:{size:"15",color:e.item.active?"teal":"error"}},[e._v("mdi-checkbox-blank-circle")]),e._v("\n            "+e._s(e.item.active?"Activo":"Inactivo")+"\n          ")],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex justify-center"},[a("v-btn",{staticClass:"ml-2 mr-1",attrs:{icon:""},on:{click:function(t){e.user={email:e.item.email,name:e.item.full_name}}}},[a("v-icon",{attrs:{color:"orange"}},[e._v("mdi-email")])],1),e._v(" "),e.$can("edit",e.item)?a("span",[a("v-btn",{staticClass:"mr-2 ml-1",attrs:{icon:""}},[a("v-icon",{attrs:{color:"teal"},on:{click:function(t){e.$router.push({name:"edit-user",params:{user:e.item}},(function(){}))}}},[e._v("mdi-pencil")])],1),e._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"red"}},[e._v("mdi-delete")])],1)],1):e._e()],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex justify-center px-0"},[a("v-row",[a("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[e._v("Venta total")]),e._v(" "),a("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[e._v("$0")])],1)],1),e._v(" "),a("v-col",{staticClass:"d-flex justify-center px-0"},[a("v-row",[a("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[e._v("Comisión total")]),e._v(" "),a("v-col",{staticClass:"py-0 justify-center d-flex",attrs:{cols:"12"}},[e._v("$0")])],1)],1)],1),e._v(" "),a("v-divider"),e._v(" "),a("v-row",{staticClass:"mt-3"},[a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-email")]),e._v("\n            "+e._s(e.item.email)+"\n          ")],1),e._v(" "),e.item.phone?a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-phone")]),e._v("\n            "+e._s(e.item.phone)+"\n          ")],1):e._e(),e._v(" "),e.item.birthday?a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-calendar-month")]),e._v("\n            "+e._s(e.item.birthday)+"\n          ")],1):e._e(),e._v(" "),e.item.address?a("v-col",{attrs:{cols:"12"}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-map-marker")]),e._v("\n            "+e._s(e.item.address)+"\n          ")],1):e._e()],1)],1)],1),e._v(" "),a("v-col",{attrs:{cols:"12",lg:"9","order-lg":"1"}},[a("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",{attrs:{href:"#downlines"}},[e._v("Downline")]),e._v(" "),a("v-tab",[e._v("Clientes")]),e._v(" "),a("v-tab",[e._v("Póliza")]),e._v(" "),a("v-tab",[e._v("Subscripción")])],1),e._v(" "),e.item?a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",{attrs:{value:"downlines"}},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-card-text",[e.item.parent&&e.$can("list","all")?a("div",{staticClass:"mb-5 black--text cursor-pointer",on:{click:function(t){return e.$router.push({name:"elite_profile",params:{id:e.item.id}})}}},[a("strong",[e._v("Upline:")]),e._v(" "),a("v-avatar",{staticClass:"ml-2",attrs:{size:"40",color:"grey"}},[e.item.parent.image?a("img",{attrs:{src:e.item.parent.image.url,width:"40"}}):a("v-icon",{attrs:{dark:"",size:"40"}},[e._v("mdi-account")])],1),e._v("\n                "+e._s(e.item.parent.name)+"\n                "),a("v-btn",{attrs:{small:"",color:"teal",icon:""},on:{click:function(t){return e.$router.push({name:"elite_profile",params:{id:e.item.parent.id}})}}},[a("v-icon",[e._v("mdi-eye")])],1)],1):e._e(),e._v(" "),e.item.children.length?a("v-treeview",{attrs:{"open-all":"",items:[e.item],activatable:"","open-on-click":""},scopedSlots:e._u([{key:"prepend",fn:function(t){var r=t.item;return[a("v-avatar",{attrs:{size:"40",color:"grey"},on:{click:function(t){return e.$router.push({name:"elite_profile",params:{id:r.id}})}}},[r.image?a("img",{attrs:{src:r.image.url,width:"40"}}):a("v-icon",{attrs:{dark:"",size:"40"}},[e._v("mdi-account")])],1)]}},{key:"label",fn:function(t){var r=t.item;return[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.hover;return[a("div",[e._v("\n                      "+e._s(r.name)+"\n                      "),i?a("v-btn",{attrs:{small:"",color:"teal",icon:""},on:{click:function(t){return e.$router.push({name:"elite_profile",params:{id:r.id}})}}},[a("v-icon",[e._v("mdi-eye")])],1):e._e()],1)]}}],null,!0)})]}}],null,!1,4025372432),model:{value:e.tree,callback:function(t){e.tree=t},expression:"tree"}}):a("v-alert",{attrs:{type:"info"}},[e._v("No tiene descendientes")])],1)],1)],1)],1):e._e()],1)],1),e._v(" "),e.user?a("EmailDialog",{attrs:{user:e.user},on:{close:function(t){e.user=null}}}):e._e()],1):e._e()}),[],!1,null,null,null);t.default=U.exports;u()(U,{VAlert:I.a,VAvatar:D.a,VBtn:m.a,VCard:d.a,VCardText:p.b,VCol:_.a,VContainer:P.a,VDivider:b.a,VHover:T.a,VIcon:z.a,VRow:h.a,VTab:q.a,VTabItem:E.a,VTabs:R.a,VTabsItems:S.a,VTreeview:A.a})}}]);