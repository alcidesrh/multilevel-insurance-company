(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{258:function(e,t,a){"use strict";var r=a(1),i=a.n(r),n={props:["time","min","label"],data:function(){return{value:null,modal:!1}},watch:{value:function(e){this.$emit("update:time",e)}},computed:{computedTimeFormattedMomentjs:{get:function(){return this.value?i()(this.value,"hh:mm").format("hh:mm A"):null},set:function(e){return this.value=e,e}}},created:function(){this.value=this.time||null}},o=a(6),l=a(11),s=a.n(l),c=a(75),d=a(396),m=a(456),u=a(26),v=a(433),f=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{ref:"dialog",attrs:{"return-value":e.value,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.value=t},"update:return-value":function(t){e.value=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{clearable:"",label:e.label,"prepend-icon":"mdi-clock-outline",readonly:""},model:{value:e.computedTimeFormattedMomentjs,callback:function(t){e.computedTimeFormattedMomentjs=t},expression:"computedTimeFormattedMomentjs"}},"v-text-field",i,!1),r))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),e.modal?a("v-time-picker",{attrs:{min:e.min,"full-width":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.value)}}},[e._v("OK")])],1):e._e()],1)}),[],!1,null,null,null);t.a=f.exports;s()(f,{VBtn:c.a,VDialog:d.a,VSpacer:m.a,VTextField:u.a,VTimePicker:v.a})},263:function(e,t,a){var r=a(386);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(8)(r,i);r.locals&&(e.exports=r.locals)},36:function(e,t,a){"use strict";var r={props:["dateParam","label","birthday","max","min","allowedDates"],data:function(){return{menu:!1,date:null}},computed:{computedDateFormattedMomentjs:function(){return this.date?this.$options.filters.dateFormat(this.date):""}},watch:{menu:function(e){var t=this;this.birthday&&e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))},date:function(e){this.$emit("update:dateParam",e)},dateParam:function(e){e||(this.date=null)}},created:function(){this.date=this.dateParam||null}},i=a(6),n=a(11),o=a.n(n),l=a(474),s=a(105),c=a(26),d=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{clearable:"",value:e.computedDateFormattedMomentjs,label:e.label,readonly:"","prepend-inner-icon":"mdi-calendar-month"},on:{"click:clear":function(t){e.date=null}}},"v-text-field",i,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),a("v-date-picker",{ref:"picker",attrs:{"allowed-dates":e.allowedDates,min:e.min||null,max:e.max||null},on:{input:function(t){e.menu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)}),[],!1,null,null,null);t.a=d.exports;o()(d,{VDatePicker:l.a,VMenu:s.a,VTextField:c.a})},385:function(e,t,a){"use strict";var r=a(263);a.n(r).a},386:function(e,t,a){(e.exports=a(7)(!1)).push([e.i,"\niframe {\n  border: 1px solid #949494;\n}\n",""])},490:function(e,t,a){"use strict";a.r(t);var r=a(15),i=a(10),n=a(36),o=a(17),l=a(258),s=a(1),c=a.n(s),d=a(14),m=a(86);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={components:{DatePicker:n.a,TimePicker:l.a,PaymentForm:m.a},data:function(){return{emailRequire:o.a,fieldRequire:o.b,showMore:!1,paymentDialog:null,pickerDialog:null,paymentLoading:null,subscription:null,nonce:null,loading:null,message:null,header:null,messageDialog:null,confirmDialog:null,pay:null}},filters:{timeFormat:function(e){return e?c()(e,"hh:mm A").format("hh:mm"):null}},computed:v(v({},Object(i.b)("recruitment",["item","items","loadingItem"])),{},{computedDateFormattedMomentjs:function(){return this.date?this.$options.filters.dateFormat(this.date):""}}),watch:{paymentDialog:function(e){e&&(this.pay=null)},pay:function(e){"no"==e&&(this.paymentDialog=!1,this.confirmDialog=!0)},pickerDialog:function(e){var t=this;e&&setTimeout((function(){return t.$refs.picker.activePicker="YEAR"}))},nonce:function(){this.item.nonce=this.nonce,this.sendCard()}},methods:v(v({},Object(r.b)({getItem:"recruitment/getItem",saveAction:"recruitment/save",getSubscription:"generic/getItemGenericTable"})),{},{hiredChange:function(){var e=this;this.item.hired&&(this.paymentDialog=!0,this.subscription||this.getSubscription({fields:["price"],table:"subscriptions",where:{active:1,type:"default",role_id:4}}).then((function(t){return e.subscription=t})))},getNonce:function(){this.loading=!0,this.$refs.payment.onGetCardNonce()},sendCard:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0,this.saveAction({endpoint:"recruitment",data:{nonce:this.nonce,recruitment:this.item.id,payment:!0,noPaid:t}}).then((function(a){a.data.error?d.a.$emit("alert",{text:a.data.error,color:"warning"}):(e.paymentDialog=e.confirmDialog=!1,e.message=a.data,e.header=t?"Correo enviado":"El pago se ha realizado",e.messageDialog=!0,e.save())})).finally((function(){return e.loading=!1}))},save:function(){var e=this;this.loading=!0,this.saveAction("recruitment").then((function(t){var a=0;e.items.filter((function(e,r){e.id==t.data.data.id&&(a=r)})),e.$set(e.items,a,t.data.data)})).finally((function(){return e.loading=!1}))}}),created:function(){this.getItem({endpoint:"recruitment-item",query:{id:decodeURIComponent(this.$route.params.id)}})},destroyed:function(){this.item=null}},_=a(6),b=a(11),h=a.n(b),g=a(75),x=a(262),y=a(16),k=a(469),w=a(397),$=a(453),C=a(396),D=a(102),P=a(384),q=a(394),j=a(395),V=a(398),F=a(39),T=a(456),O=a(26),R=a(393),E=Object(_.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item?a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"5",lg:"3"}},[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("DatePicker",{attrs:{label:"Primer Entrenamiento","date-param":e.item.first_training_date},on:{"update:dateParam":function(t){return e.$set(e.item,"first_training_date",t)},"update:date-param":function(t){return e.$set(e.item,"first_training_date",t)}}})],1),e._v(" "),a("v-col",{staticClass:"d-flex py-0",attrs:{cols:"12"}},[a("v-checkbox",{staticClass:"ma-0",attrs:{label:"Atendido"},model:{value:e.item.first_training_assisted,callback:function(t){e.$set(e.item,"first_training_assisted",t)},expression:"item.first_training_assisted"}})],1)],1)],1),e._v(" "),a("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"3",lg:"2"}},[a("v-checkbox",{staticClass:"ma-0",attrs:{label:"Contratado"},on:{change:e.hiredChange},model:{value:e.item.hired,callback:function(t){e.$set(e.item,"hired",t)},expression:"item.hired"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.$router.push({name:"recruitment"})}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{rounded:"",color:"primary",dark:"",loading:e.loadingItem},on:{click:function(t){return e.save("recruitment")}}},[e._v("Guardar")])],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-btn",{attrs:{rounded:"",color:"green",dark:"","min-width":"100%"},on:{click:function(t){e.showMore=!e.showMore}}},[e.showMore?a("span",[e._v("Mostrar menos")]):a("span",[e._v("Mostrar mas")])])],1)],1),e._v(" "),e.showMore?a("div",[a("v-row",[a("v-col",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Referido por",disabled:""},model:{value:e.item.referrer,callback:function(t){e.$set(e.item,"referrer",t)},expression:"item.referrer"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Número de referencia",disabled:""},model:{value:e.item.number,callback:function(t){e.$set(e.item,"number",t)},expression:"item.number"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre",rules:e.fieldRequire,required:""},model:{value:e.item.first_name,callback:function(t){e.$set(e.item,"first_name",t)},expression:"item.first_name"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Apellido",rules:e.fieldRequire,required:""},model:{value:e.item.last_name,callback:function(t){e.$set(e.item,"last_name",t)},expression:"item.last_name"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Email",rules:e.emailRequire,required:""},model:{value:e.item.email,callback:function(t){e.$set(e.item,"email",t)},expression:"item.email"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Númerico telefónico",rules:e.fieldRequire,required:""},model:{value:e.item.phone,callback:function(t){e.$set(e.item,"phone",t)},expression:"item.phone"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-text-field",{attrs:{label:"Dirección",rules:e.fieldRequire,required:""},model:{value:e.item.address,callback:function(t){e.$set(e.item,"address",t)},expression:"item.address"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Ciudadanía",rules:e.fieldRequire,required:""},model:{value:e.item.citizenship,callback:function(t){e.$set(e.item,"citizenship",t)},expression:"item.citizenship"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Ciudad",rules:e.fieldRequire,required:""},model:{value:e.item.city,callback:function(t){e.$set(e.item,"city",t)},expression:"item.city"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Código postal",rules:e.fieldRequire,required:""},model:{value:e.item.zip_code,callback:function(t){e.$set(e.item,"zip_code",t)},expression:"item.zip_code"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Profesión",rules:e.fieldRequire,required:""},model:{value:e.item.profession,callback:function(t){e.$set(e.item,"profession",t)},expression:"item.profession"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Trabajo preferido",rules:e.fieldRequire,required:""},model:{value:e.item.likejob,callback:function(t){e.$set(e.item,"likejob",t)},expression:"item.likejob"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Trabajo menospreciado",rules:e.fieldRequire,required:""},model:{value:e.item.dislikejob,callback:function(t){e.$set(e.item,"dislikejob",t)},expression:"item.dislikejob"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Ingresos deseables",rules:e.fieldRequire,required:""},model:{value:e.item.desireincome,callback:function(t){e.$set(e.item,"desireincome",t)},expression:"item.desireincome"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-radio-group",{attrs:{row:""},model:{value:e.item.attractivestatus,callback:function(t){e.$set(e.item,"attractivestatus",t)},expression:"item.attractivestatus"}},[a("v-radio",{attrs:{label:"Dueño(a) de negocio",value:"1"}}),e._v(" "),a("v-radio",{attrs:{label:"Empleado(a)",value:"2"}})],1)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{rows:"4",outlined:"",label:"Logro más grande",placeholder:" ",required:""},model:{value:e.item.bigachievement,callback:function(t){e.$set(e.item,"bigachievement",t)},expression:"item.bigachievement"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-select",{attrs:{label:"¿Dónde escuchó de nosotros?",items:[{text:"Web",value:"website"},{text:"Facebook",value:"facebook"},{text:"Instagram",value:"instagram"},{text:"LinkedIn",value:"linkedin"},{text:"Email",value:"email"},{text:"TV",value:"tv"},{text:"Radio",value:"radio"},{text:"Folleto",value:"brochure"},{text:"Periódico",value:"newspaper"},{text:"Amigos o familia",value:"friend"},{text:"Otros",value:"other"}]},model:{value:e.item.knowfrom,callback:function(t){e.$set(e.item,"knowfrom",t)},expression:"item.knowfrom"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"9"}},[a("v-radio-group",{attrs:{label:"¿Cuál es su mayor interés con nosotros?",row:e.$vuetify.breakpoint.lgOnly,required:"",rules:e.fieldRequire},model:{value:e.item.interested_us,callback:function(t){e.$set(e.item,"interested_us",t)},expression:"item.interested_us"}},[a("v-radio",{attrs:{label:"Ventas",value:"1"}}),e._v(" "),a("v-radio",{attrs:{label:"Equipo",value:"2"}})],1)],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[e._v("Disponibilidad")]),e._v(" "),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[e._v("Lunes")]),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Desde",time:e.item.monday1},on:{"update:time":function(t){return e.$set(e.item,"monday1",t)}}})],1),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Hasta",min:e.item.monday1,time:e.item.monday2},on:{"update:time":function(t){return e.$set(e.item,"monday2",t)}}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[e._v("Martes")]),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Desde",time:e.item.tuesday1},on:{"update:time":function(t){return e.$set(e.item,"tuesday1",t)}}})],1),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Hasta",min:e.item.tuesday1,time:e.item.tuesday2},on:{"update:time":function(t){return e.$set(e.item,"tuesday2",t)}}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[e._v("Miércoles")]),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Desde",time:e.item.wednesday1},on:{"update:time":function(t){return e.$set(e.item,"wednesday1",t)}}})],1),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Hasta",min:e.item.wednesday1,time:e.item.wednesday2},on:{"update:time":function(t){return e.$set(e.item,"wednesday2",t)}}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[e._v("Jueves")]),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Desde",time:e.item.thursday1},on:{"update:time":function(t){return e.$set(e.item,"thursday1",t)}}})],1),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Hasta",min:e._f("timeFormat")(e.item.thursday1),time:e.item.thursday2},on:{"update:time":function(t){return e.$set(e.item,"thursday2",t)}}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[e._v("Viernes")]),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Desde",time:e.item.friday1},on:{"update:time":function(t){return e.$set(e.item,"friday1",t)}}})],1),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Hasta",min:e.item.friday1,time:e.item.friday2},on:{"update:time":function(t){return e.$set(e.item,"friday2",t)}}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[e._v("Sábado")]),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Desde",time:e.item.saturday1},on:{"update:time":function(t){return e.$set(e.item,"saturday1",t)}}})],1),e._v(" "),a("v-col",[a("TimePicker",{attrs:{label:"Hasta",min:e.item.saturday1,time:e.item.saturday2},on:{"update:time":function(t){return e.$set(e.item,"saturday2",t)}}})],1)],1)],1)],1)],1)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[e._v("Tres personas recomendadas")])],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:e.item.referred_one_name,callback:function(t){e.$set(e.item,"referred_one_name",t)},expression:"item.referred_one_name"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.item.referred_one_email,callback:function(t){e.$set(e.item,"referred_one_email",t)},expression:"item.referred_one_email"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Número telefónico"},model:{value:e.item.referred_one_phone,callback:function(t){e.$set(e.item,"referred_one_phone",t)},expression:"item.referred_one_phone"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:e.item.referred_two_name,callback:function(t){e.$set(e.item,"referred_two_name",t)},expression:"item.referred_two_name"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.item.referred_two_email,callback:function(t){e.$set(e.item,"referred_two_email",t)},expression:"item.referred_two_email"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Número telefónico"},model:{value:e.item.referred_two_phone,callback:function(t){e.$set(e.item,"referred_two_phone",t)},expression:"item.referred_two_phone"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:e.item.referred_three_name,callback:function(t){e.$set(e.item,"referred_three_name",t)},expression:"item.referred_three_name"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Email"},model:{value:e.item.referred_three_email,callback:function(t){e.$set(e.item,"referred_three_email",t)},expression:"item.referred_three_email"}})],1),e._v(" "),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Número telefónico"},model:{value:e.item.referred_three_phone,callback:function(t){e.$set(e.item,"referred_three_phone",t)},expression:"item.referred_three_phone"}})],1)],1),e._v(" "),a("v-row",[a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-3",attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.$router.push({name:"recruitment"})}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{rounded:"",color:"primary",dark:"",loading:e.loadingItem},on:{click:function(t){return e.save("recruitment")}}},[e._v("Save")])],1)],1)],1):e._e(),e._v(" "),a("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.paymentDialog,callback:function(t){e.paymentDialog=t},expression:"paymentDialog"}},[a("v-card",["yes"!=e.pay?a("v-card-text",{staticClass:"py-5"},[a("v-radio-group",{model:{value:e.pay,callback:function(t){e.pay=t},expression:"pay"}},[a("v-radio",{attrs:{label:"Pagar con tarjeta",value:"yes"}}),e._v(" "),a("v-radio",{attrs:{label:"Enviar link de pago",value:"no"}})],1)],1):e._e(),e._v(" "),"yes"==e.pay?a("v-card-text",{staticClass:"py-5"},[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e._v("Pago de Membresia")]),e._v(" "),a("v-card-text",[a("p",[e._v("Usted va a pagar la membresía del nuevo representante. Una nueva cuenta será creada en el sistema y un correo será enviado al nuevo representante para que active su cuenta.")]),e._v(" "),a("strong",[e._v("\n            Membresia:\n            "),e.subscription?a("span",[e._v(e._s(e._f("money")(e.subscription.price)))]):e._e()])]),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("PaymentForm",{ref:"payment",attrs:{nonce:e.nonce,loading:e.loading,dialog:"true"},on:{"update:nonce":function(t){e.nonce=t},"update:loading":function(t){e.loading=t}}})],1)],1)],1):e._e(),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.item.hired=!1,e.paymentDialog=!1}}},[e._v("Cancelar")]),e._v(" "),e.pay?a("v-btn",{attrs:{text:"",color:"primary",loading:e.loading},on:{click:function(t){return e.getNonce()}}},[e._v("Confirmar & Pagar")]):e._e()],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.messageDialog,callback:function(t){e.messageDialog=t},expression:"messageDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e._v(e._s(e.header))]),e._v(" "),a("v-card-text",{staticClass:"my-5"},[a("p",{staticStyle:{"font-size":"16px"}},[e._v(e._s(e.message))])]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary",loading:e.loading},on:{click:function(t){e.messageDialog=null}}},[e._v("Ok")])],1)],1)],1),e._v(" "),a("v-dialog",{attrs:{width:"600",persistent:""},model:{value:e.confirmDialog,callback:function(t){e.confirmDialog=t},expression:"confirmDialog"}},[e.subscription?a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e._v("Enviar correo "+e._s(e.item.first_name))]),e._v(" "),a("v-card-text",{staticClass:"my-5"},[a("p",{staticStyle:{"font-size":"16px"}},[e._v("Se le enviará un correo a "+e._s(e.item.email)+" para que ingrese al sistema y pague su membresía de "+e._s(e._f("money")(e.subscription.price))+".")])]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.item.hired=!1,e.confirmDialog=!1}}},[e._v("Cancelar")]),e._v(" "),a("v-btn",{attrs:{text:"",color:"primary",loading:e.loading},on:{click:function(t){return e.sendCard(!0)}}},[e._v("Enviar")])],1)],1):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=E.exports;h()(E,{VBtn:g.a,VCard:x.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCheckbox:k.a,VCol:w.a,VContainer:$.a,VDialog:C.a,VDivider:D.a,VForm:P.a,VRadio:q.a,VRadioGroup:j.a,VRow:V.a,VSelect:F.a,VSpacer:T.a,VTextField:O.a,VTextarea:R.a})},86:function(e,t,a){"use strict";var r=a(63),i=a.n(r),n=a(14);function o(e,t,a,r,i,n,o){try{var l=e[n](o),s=l.value}catch(e){return void a(e)}l.done?t(s):Promise.resolve(s).then(r,i)}var l={props:["nonce","loading","dialog"],data:function(){return{paymentForm:null,loadingForm:!1}},methods:{onGetCardNonce:function(e){var t,a=this;return(t=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.paymentForm.requestCardNonce();case 2:case"end":return e.stop()}}),e)})),function(){var e=this,a=arguments;return new Promise((function(r,i){var n=t.apply(e,a);function l(e){o(n,r,i,l,s,"next",e)}function s(e){o(n,r,i,l,s,"throw",e)}l(void 0)}))})()}},mounted:function(){var e=this,t=new SqPaymentForm({applicationId:"sq0idp-o14s9Ua7LYz1EkUbOMP88g",inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",lineHeight:"24px",padding:"16px",placeholderColor:"#a0a0a0",backgroundColor:"transparent"}],cardNumber:{elementId:"sq-card-number",placeholder:"Número de la tarjeta"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY Fecha expiración"},postalCode:{elementId:"sq-postal-code",placeholder:"Zip Code"},callbacks:{cardNonceResponseReceived:function(t,a,r){if(e.$emit("update:loading",!1),t)return console.error("Encountered errors:"),void t.forEach((function(e){n.a.$emit("alert",{text:e.message,color:"warning"}),console.error("  "+e.message)}));e.$emit("update:nonce",a)},paymentFormLoaded:function(){e.loadingForm=!1}}});this.paymentForm=t,this.paymentForm&&(this.loadingForm=!0,this.paymentForm.build())}},s=(a(385),a(6)),c=a(11),d=a.n(c),m=a(397),u=a(101),v=a(398),f=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"form-container"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:e.dialog?12:5}},[a("div",{attrs:{id:"sq-card-number"}})]),e._v(" "),a("v-col",{attrs:{cols:"12",md:e.dialog?3:2}},[a("div",{staticClass:"third",attrs:{id:"sq-cvv"}})]),e._v(" "),a("v-col",{attrs:{cols:"12",md:e.dialog?6:3}},[a("div",{staticClass:"third",attrs:{id:"sq-expiration-date"}})]),e._v(" "),a("v-col",{attrs:{cols:"12",md:e.dialog?3:2}},[a("div",{staticClass:"third",attrs:{id:"sq-postal-code"}})])],1),e._v(" "),a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.loadingForm,expression:"loadingForm"}],attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.a=f.exports;d()(f,{VCol:m.a,VProgressLinear:u.a,VRow:v.a})}}]);