(this.webpackJsonp=this.webpackJsonp||[]).push([[22],{35:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(14),u=n(8),i=n(28),c=function(e,t,n,a){return new(n||(n=Promise))((function(o,u){function i(e){try{l(a.next(e))}catch(e){u(e)}}function c(e){try{l(a.throw(e))}catch(e){u(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};const l=new i.a("page-chats",!1,()=>(o.default.pushToState("authState",{_:"authStateSignedIn"}),Promise.resolve().then(n.bind(null,9)).then(e=>{e.default.broadcast("im_mount")}),u.default.requestedServerLanguage||u.default.getCacheLangPack().then(e=>{e.local&&u.default.getLangPack(e.lang_code)}),Object(a.c)(),new Promise(e=>{window.requestAnimationFrame(()=>{Promise.all([n.e(4),n.e(11)]).then(n.bind(null,66)).finally(()=>c(void 0,void 0,void 0,(function*(){e()})))})})));t.default=l}}]);