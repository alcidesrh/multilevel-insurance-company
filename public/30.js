(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{22:function(t,e,n){"use strict";var r=n(75);e.a=r.a},281:function(t,e,n){var r=n(282);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(8)(r,i);r.locals&&(t.exports=r.locals)},282:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after {\n  background: rgba(255, 255, 255, 0.12);\n}\n\n.v-sheet.v-alert {\n  border-radius: 4px;\n}\n.v-sheet.v-alert:not(.v-sheet--outlined) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-alert.v-sheet--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-alert {\n  display: block;\n  font-size: 16px;\n  margin-bottom: 16px;\n  padding: 16px;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-alert:not(.v-sheet--tile) {\n  border-radius: 4px;\n}\n.v-application--is-ltr .v-alert > .v-icon,\n.v-application--is-ltr .v-alert > .v-alert__content {\n  margin-right: 16px;\n}\n.v-application--is-rtl .v-alert > .v-icon,\n.v-application--is-rtl .v-alert > .v-alert__content {\n  margin-left: 16px;\n}\n.v-application--is-ltr .v-alert > .v-icon + .v-alert__content {\n  margin-right: 0;\n}\n.v-application--is-rtl .v-alert > .v-icon + .v-alert__content {\n  margin-left: 0;\n}\n.v-application--is-ltr .v-alert > .v-alert__content + .v-icon {\n  margin-right: 0;\n}\n.v-application--is-rtl .v-alert > .v-alert__content + .v-icon {\n  margin-left: 0;\n}\n\n.v-alert__border {\n  border-style: solid;\n  border-width: 4px;\n  content: "";\n  position: absolute;\n}\n.v-alert__border:not(.v-alert__border--has-color) {\n  opacity: 0.26;\n}\n.v-alert__border--left, .v-alert__border--right {\n  bottom: 0;\n  top: 0;\n}\n.v-alert__border--bottom, .v-alert__border--top {\n  left: 0;\n  right: 0;\n}\n.v-alert__border--bottom {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n  bottom: 0;\n}\n.v-application--is-ltr .v-alert__border--left {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n  left: 0;\n}\n.v-application--is-rtl .v-alert__border--left {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n  right: 0;\n}\n.v-application--is-ltr .v-alert__border--right {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n  right: 0;\n}\n.v-application--is-rtl .v-alert__border--right {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n  left: 0;\n}\n.v-alert__border--top {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  top: 0;\n}\n\n.v-alert__content {\n  flex: 1 1 auto;\n}\n\n.v-application--is-ltr .v-alert__dismissible {\n  margin: -16px -8px -16px 8px;\n}\n.v-application--is-rtl .v-alert__dismissible {\n  margin: -16px 8px -16px -8px;\n}\n\n.v-alert__icon {\n  align-self: flex-start;\n  border-radius: 50%;\n  height: 24px;\n  min-width: 24px;\n  position: relative;\n}\n.v-application--is-ltr .v-alert__icon {\n  margin-right: 16px;\n}\n.v-application--is-rtl .v-alert__icon {\n  margin-left: 16px;\n}\n.v-alert__icon.v-icon {\n  font-size: 24px;\n}\n\n.v-alert__wrapper {\n  align-items: center;\n  border-radius: inherit;\n  display: flex;\n}\n\n.v-alert--dense {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.v-alert--dense .v-alert__border {\n  border-width: medium;\n}\n\n.v-alert--outlined {\n  background: transparent !important;\n  border: thin solid currentColor !important;\n}\n.v-alert--outlined .v-alert__icon {\n  color: inherit !important;\n}\n\n.v-alert--prominent .v-alert__icon {\n  align-self: center;\n  height: 48px;\n  min-width: 48px;\n}\n.v-alert--prominent .v-alert__icon:after {\n  background: currentColor !important;\n  border-radius: 50%;\n  bottom: 0;\n  content: "";\n  left: 0;\n  opacity: 0.16;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.v-alert--prominent .v-alert__icon.v-icon {\n  font-size: 32px;\n}\n\n.v-alert--text {\n  background: transparent !important;\n}\n.v-alert--text:before {\n  background-color: currentColor;\n  border-radius: inherit;\n  bottom: 0;\n  content: "";\n  left: 0;\n  opacity: 0.12;\n  position: absolute;\n  pointer-events: none;\n  right: 0;\n  top: 0;\n}',""])},396:function(t,e,n){"use strict";n(98);var r=n(3),i=n.n(r),o=n(18),a=n(0);const l=["sm","md","lg","xl"],s=l.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),c=l.reduce((t,e)=>(t["offset"+Object(a.H)(e)]={type:[String,Number],default:null},t),{}),d=l.reduce((t,e)=>(t["order"+Object(a.H)(e)]={type:[String,Number],default:null},t),{}),p={col:Object.keys(s),offset:Object.keys(c),order:Object.keys(d)};function u(t,e,n){let r=t;if(null!=n&&!1!==n){if(e){r+="-"+e.replace(t,"")}return"col"!==t||""!==n&&!0!==n?(r+="-"+n,r.toLowerCase()):r.toLowerCase()}}const h=new Map;e.a=i.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:r,parent:i}){let a="";for(const t in e)a+=String(e[t]);let l=h.get(a);if(!l){let t;for(t in l=[],p)p[t].forEach(n=>{const r=e[n],i=u(t,n,r);i&&l.push(i)});const n=l.some(t=>t.startsWith("col-"));l.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(a,l)}return t(e.tag,Object(o.a)(n,{class:l}),r)}})},397:function(t,e,n){"use strict";n(98);var r=n(3),i=n.n(r),o=n(18),a=n(0);const l=["sm","md","lg","xl"],s=["start","end","center"];function c(t,e){return l.reduce((n,r)=>(n[t+Object(a.H)(r)]=e(),n),{})}const d=t=>[...s,"baseline","stretch"].includes(t),p=c("align",()=>({type:String,default:null,validator:d})),u=t=>[...s,"space-between","space-around"].includes(t),h=c("justify",()=>({type:String,default:null,validator:u})),v=t=>[...s,"space-between","space-around","stretch"].includes(t),g=c("alignContent",()=>({type:String,default:null,validator:v})),b={align:Object.keys(p),justify:Object.keys(h),alignContent:Object.keys(g)},f={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){let r=f[t];if(null!=n){if(e){r+="-"+e.replace(t,"")}return r+="-"+n,r.toLowerCase()}}const _=new Map;e.a=i.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...p,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:v},...g},render(t,{props:e,data:n,children:r}){let i="";for(const t in e)i+=String(e[t]);let a=_.get(i);if(!a){let t;for(t in a=[],b)b[t].forEach(n=>{const r=e[n],i=m(t,n,r);i&&a.push(i)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),_.set(i,a)}return t(e.tag,Object(o.a)(n,{staticClass:"row",class:a}),r)}})},398:function(t,e,n){"use strict";n(281);var r=n(38),i=n(22),o=n(13),a=n(21),l=n(5),s=n(3),c=n.n(s).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=n(2),p=n(4);e.a=Object(d.a)(r.a,a.a,c).extend({name:"v-alert",props:{border:{type:String,validator:t=>["top","right","bottom","left"].includes(t)},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:t=>"string"==typeof t||!1===t},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:t=>["info","error","success","warning"].includes(t)},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i.a,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.a,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...r.a.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||l.a.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(p.a)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){t=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},500:function(t,e,n){"use strict";n.r(e);var r=n(6),i=n(11),o=n.n(i),a=n(398),l=n(396),s=n(397),c=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[e("v-alert",{staticStyle:{width:"480px",left:"0px",top:"0px",opacity:"1"},attrs:{outlined:"",type:"warning",prominent:"",border:"left"}},[e("strong",[this._v("En desarrollo.")])])],1),this._v(" "),e("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[e("img",{staticStyle:{width:"480px",height:"402px",left:"0px",top:"0px",opacity:"1"},attrs:{src:"/images/giphy.gif",alt:"kipparchitecture architecture construction under construction kipp GIF"}})])],1)}),[],!1,null,null,null);e.default=c.exports;o()(c,{VAlert:a.a,VCol:l.a,VRow:s.a})}}]);