(function(){"use strict";var t={2949:function(t,e,s){var r=s(8935),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"form-step"},[s("FormStepGroup")],1)])},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"progress-boder"},[s("div",{staticClass:"proress-content",style:"width:"+t.steper})]),s("div",{staticClass:"form-step-wrap"},[s("div",{staticClass:"form-step-title"},[s("div",{staticClass:"title",class:{active:t.step}},[s("span",{staticClass:"number"},[t._v("1")]),s("span",{staticClass:"text"},[t._v("About you")])]),s("div",{staticClass:"title",class:{active:2===t.step||3===t.step}},[s("span",{staticClass:"number"},[t._v("2")]),s("span",{staticClass:"text"},[t._v("About your Company")])]),s("div",{staticClass:"title",class:{active:3===t.step}},[s("span",{staticClass:"number"},[t._v("3")]),s("span",{staticClass:"text"},[t._v("Finishing Up")])])])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"form-step-group"},[s("form",[1===t.step?s("div",{staticClass:"form-control"},[s("label",[t._v(" Full name ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],class:{"is-invalid":t.$v.firstname.$error},attrs:{type:"text"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}}),s("div",{staticClass:"eror"},[t.$v.firstname.$error?s("span",{staticStyle:{color:"red"}},[t._v("Please fill the name")]):t._e()])]):t._e(),1===t.step?s("div",{staticClass:"form-control"},[s("label",[t._v(" Your Email ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{"is-invalid":t.$v.email.$error},attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("div",{staticClass:"eror"},[t.$v.email.$error?s("span",{staticStyle:{color:"red"}},[t._v(" Email is required ")]):t._e(),t.$v.email.email?t._e():s("span",{staticStyle:{color:"red"}},[t._v(" format")])])]):t._e(),2===t.step?s("div",{staticClass:"form-control"},[s("label",[t._v(" Your Company Name ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],class:{"is-invalid":t.$v.company.$error},attrs:{type:"text"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}}),s("div",{staticClass:"eror"},[t.$v.company.$error?s("span",{staticStyle:{color:"red"}},[t._v("Company is required")]):t._e()])]):t._e(),2===t.step?s("div",{staticClass:"form-control"},[s("label",[t._v(" Number of Employees ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],class:{"is-invalid":t.$v.phone.$error,"is-valid":t.$v.phone.$invalid},attrs:{type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),s("div",{staticClass:"eror"},[t.$v.phone.$error?s("span",{staticStyle:{color:"red"}},[t._v("Phone is required")]):t._e(),t.$v.phone.numeric?t._e():s("span",{staticStyle:{color:"red"}},[t._v(" number")])])]):t._e(),3===t.step?s("div",{staticClass:"form-control"},[s("label",[t._v(" From Where did you hear about us ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.from,expression:"from"}],staticClass:"select_wrap",class:{"is-invalid":t.$v.from.$error},staticStyle:{"font-size":"18px"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.from=e.target.multiple?s:s[0]}}},[s("option",{staticClass:"select-title",staticStyle:{"font-size":"18px"},attrs:{value:"Friend"}},[t._v("Friend")]),s("option",{staticClass:"select-title",attrs:{value:"Facebook"}},[t._v("FaceBook")]),s("option",{staticClass:"select-title",attrs:{value:"Website"}},[t._v("Website")])]),s("div",{staticClass:"eror"},[t.$v.from.$error?s("span",{staticStyle:{color:"red","font-size":"12px"}},[t._v("From is required")]):t._e()])]):t._e(),3===t.step?s("div",{staticClass:"check-term"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.accept,expression:"accept"}],staticClass:"checkbox",class:{"is-invalid":!t.$v.accept.$error,"is-valid":t.$v.accept.$invalid},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.accept)?t._i(t.accept,null)>-1:t.accept},on:{change:function(e){var s=t.accept,r=e.target,a=!!r.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);r.checked?o<0&&(t.accept=s.concat([i])):o>-1&&(t.accept=s.slice(0,o).concat(s.slice(o+1)))}else t.accept=a}}}),s("label",[t._v(" Checked of Employees ")]),s("div",{staticClass:"eror"},[t.$v.accept.$error?s("span",{staticStyle:{color:"red",display:"flex"}},[t._v("The field is required!")]):t._e()])]):t._e()])])]),s("div",{staticClass:"form-step-btn"},[3!==t.step?s("button",{staticClass:"btn prev",attrs:{disabled:1===t.step},on:{click:t.prevStep}},[t._v(" Prev Step ")]):t._e(),t.step!==t.totalSteps?s("button",{staticClass:"btn next",on:{click:t.nextStep}},[t._v(" Next Step ")]):t._e(),3===t.step?s("button",{staticClass:"btn next",staticStyle:{"margin-right":"20px"},on:{click:function(e){return e.preventDefault(),t.reset()}}},[t._v(" Reset ")]):t._e(),3===t.step?s("button",{staticClass:"btn next",on:{click:t.sendRequired}},[t._v(" Send ")]):t._e()])])},n=[],l=s(6409),c={name:"FormStepGroup",components:{},data(){return{step:1,totalSteps:3,isActive:"is-invalid"}},validations:{firstname:{required:l.C1,minLength:(0,l.Ei)(3),maxLength:(0,l.BS)(13)},email:{required:l.C1,email:l.Do},company:{required:l.C1,minLength:(0,l.Ei)(3),maxLength:(0,l.BS)(13)},phone:{required:l.C1,numeric:l.uR},from:{required:l.C1,minLength:(0,l.Ei)(3),maxLength:(0,l.BS)(13)},accept:{required:l.C1,minLength:(0,l.Ei)(3),maxLength:(0,l.BS)(13)}},computed:{steper(){return 100/3*this.step+"%"},formData(){return this.$store.state.formData},firstname:{get(){return this.$store.state.formData.firstname},set(t){this.$store.commit("setName",t)}},email:{get(){return this.$store.state.formData.email},set(t){this.$store.commit("setEmail",t)}},company:{get(){return this.$store.state.formData.company},set(t){this.$store.commit("setCompany",t)}},phone:{get(){return this.$store.state.formData.phone},set(t){this.$store.commit("setPhone",t)}},from:{get(){return this.$store.state.formData.from},set(t){this.$store.commit("setFrom",t)}},accept:{get(){return this.$store.state.formData.accept},set(t){this.$store.commit("setAccept",t)}}},methods:{nextStep(){return this.isActive="active",this.$v.$touch(),(1!==this.step||!this.$v.firstname.$error)&&((1!==this.step||!this.$v.email.$error)&&((2!==this.step||!this.$v.company.$error)&&((2!==this.step||!this.$v.phone.$error)&&void this.step++)))},prevStep(){this.step--},sendRequired(){return this.$v.$touch(),(3!==this.step||!this.$v.from.$error)&&((3!==this.step||!this.$v.accept.$error)&&void console.log(this.formData))},reset(){this.step=1,this.$v.$reset(),this.$store.state.formData.firstname=null,this.$store.state.formData.email=null,this.$store.state.formData.company=null,this.$store.state.formData.phone=null,this.$store.state.formData.from=null,this.$store.state.formData.accept=null}}},p=c,m=s(3736),u=(0,m.Z)(p,o,n,!1,null,"35a0e965",null),v=u.exports,f={name:"App",components:{FormStepGroup:v}},d=f,h=(0,m.Z)(d,a,i,!1,null,null,null),$=h.exports,_=s(2424),y=s(4665);r.Z.use(y.ZP);var C=new y.ZP.Store({state:{formData:{firstname:"",email:null,company:null,phone:null,from:null,accept:null}},mutations:{setName(t,e){t.formData.firstname=e},setEmail(t,e){t.formData.email=e},setCompany(t,e){t.formData.company=e},setPhone(t,e){t.formData.phone=e},setFrom(t,e){t.formData.from=e},setAccept(t,e){t.formData.accept=e}}});r.Z.use(y.ZP),r.Z.config.productionTip=!1,r.Z.use(_.ZP),new r.Z({store:C,render:t=>t($)}).$mount("#app")}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,r,a,i){if(!r){var o=1/0;for(p=0;p<t.length;p++){r=t[p][0],a=t[p][1],i=t[p][2];for(var n=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(n=!1,i<o&&(o=i));if(n){t.splice(p--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[r,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],n=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(l)var p=l(s)}for(e&&e(r);c<o.length;c++)i=o[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(p)},r=self["webpackChunkstep_form"]=self["webpackChunkstep_form"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(2949)}));r=s.O(r)})();
//# sourceMappingURL=app.81fcbaf7.js.map