webpackJsonp([13],{"/U78":function(e,t,n){"use strict";var o=function(e){return n.e(1).then(function(){return e(n("YcPh"))}.bind(null,n)).catch(n.oe)};t.a=[{name:"ukhome",path:"/ukhome",component:o}]},"0xDb":function(e,t,n){"use strict";var o=n("TuU3"),a=n("4/BI"),r=n("3pLw"),c=n("w3CS"),i=n("UOkk"),s=n("jg9f"),u=n("sOXZ"),l=n("8Zuf"),d={cache:o.a,format:a.a,http:r.a,validator:c.a,nativeHandler:i.a,ui:s.a,help:u.a,popup:l.a};t.a=d},"1lyH":function(e,t,n){"use strict";var o=n("fZjL"),a=n.n(o),r=n("bxLB"),c=n("BdJT"),i={JdFooter:r.a,N22Highlight:c.a},s=function(e){a()(i).forEach(function(t){e.component(i[t].name,i[t])})};"undefined"!=typeof window&&window.Vue&&s(window.Vue),i.install=s,t.a=i},"2ZO0":function(e,t,n){"use strict";var o=function(e){return n.e(0).then(function(){return e(n("Lcgu"))}.bind(null,n)).catch(n.oe)},a=function(e){return n.e(7).then(function(){return e(n("v+aG"))}.bind(null,n)).catch(n.oe)},r=function(e){return n.e(6).then(function(){return e(n("/Aut"))}.bind(null,n)).catch(n.oe)},c=function(e){return n.e(4).then(function(){return e(n("dsmF"))}.bind(null,n)).catch(n.oe)},i=function(e){return n.e(5).then(function(){return e(n("RW4e"))}.bind(null,n)).catch(n.oe)},s=function(e){return n.e(2).then(function(){return e(n("NjIi"))}.bind(null,n)).catch(n.oe)},u=function(e){return n.e(3).then(function(){return e(n("B4D3"))}.bind(null,n)).catch(n.oe)};t.a=[{name:"phoneHome",path:"/phoneHome",component:o,children:[{name:"phoneMain",path:"/phoneMain",component:a},{name:"n22Address",path:"/n22Address",component:r},{name:"n22Input",path:"/n22Input",component:c},{name:"n22Field",path:"/n22Field",component:i},{name:"n22TempLate",path:"/n22TempLate",component:s},{name:"n22Switch",path:"/n22Switch",component:u}]}]},"3S+H":function(e,t,n){"use strict";var o=n("V33R"),a=n.n(o),r=n("70Rd"),c=n.n(r),i=n("IZDm"),s=n.n(i),u=n("izbv"),l=n.n(u),d=n("G7c8"),g=n.n(d),f=n("6STP"),p=n.n(f),m=n("Z09n");n.n(m);t.a={name:"n22Highlight",components:{},data:function(){return{code:{},isMibile:"native"===window.globalConfig.platform}},props:{height:{default:""},lang:{type:String,default:""}},methods:{init:function(){var e=this;c.a.registerLanguage("javascript",s.a),c.a.registerLanguage("xml",p.a),c.a.registerLanguage("bash",g.a),c.a.registerLanguage("css",l.a),this.code=this.$refs.copy_content,this.code.textContent=this.format(),c.a.highlightBlock(this.code);var t=new a.a(this.$refs.btn_copy);t.on("success",function(t){alert("复制成功"),console.log("复制成功"),e.chooseText()}),t.on("error",function(e){console.log("复制失败")})},format:function(){var e=this.code.textContent.split("\n"),t=void 0;""===e[0]&&e.shift();var n=null!==(t=/^[\s\t]+/.exec(e[0]))?t[0]:null;if(n){e=e.map(function(e){return e=e.replace(n,""),e.replace(/\t/g,"  ")});return e.join("\n").trim()}},clearSelection:function(){var e=window.getSelection();try{e.removeAllRanges()}catch(e){document.body.createTextRange().select(),document.selection.empty()}},chooseText:function(){this.clearSelection(),this.code=this.$refs.copy_content,this.code.appendChild(document.createTextNode(""));var e=document.createRange();e.setStart(this.code,0),e.setEnd(this.code.lastChild,0),window.getSelection().addRange(e),document.execCommand("copy")}},watch:{},mounted:function(){!this.isMibile&&this.init()}}},"3pLw":function(e,t,n){"use strict";function o(){d.Indicator.close(),l.a.commit("LOADING",{loading:!1}),l.a.commit("TOGGLE_TOAST",{toast:!0,toastMsg:"网络异常,请检查网络"})}var a=n("//Fk"),r=n.n(a),c=n("mvHQ"),i=n.n(c),s=n("mtWM"),u=n.n(s),l=n("YtJ0"),d=n("Au9i"),g=(n.n(d),u.a.create({timeout:5e4,method:"post",headers:{post:{"Content-Type":""}}})),f=0;g.interceptors.request.use(function(e){f++,l.a.state.common.loadingDisabled||d.Indicator.open({text:"",spinnerType:"fading-circle"}),window.utils.cache.get("token");var t={packageList:{packages:{header:{requestType:e.url,comId:window.globalConfig.comId,from:window.globalConfig.from,sendTime:(new Date).format("yyyy-MM-dd HH:mm:ss"),orderSerial:"orderId",comSerial:"comSerial",productCode:window.utils.cache.get("token")},request:window.DES3.encrypt("",i()({requestPayload:window.Base64.encode(i()(e.data))}).replace(/\s/g,""))}}},n=i()(t),o=window.hex_hmac_md5(window.globalConfig.transfer,n);return e.url=window.globalConfig.rootUrl+"interfaceChannel?sign="+o+"&com_id="+window.globalConfig.comId,e.data=n,e},function(e){return r.a.reject({isLogicError:!1,errorMessage:"网络异常,请检查网络"})}),g.interceptors.response.use(function(e){f--;var t=void 0;d.Indicator.close(),0==f&&l.a.commit("LOADING_DISABLED",!1),-1==location.href.indexOf("page/access")&&(l.a.commit("LOADING_DISABLED",!1),l.a.commit("LOADING",{loading:!1}));try{if(e.data.packageList.packages.response=JSON.parse(window.DES3.decrypt("",e.data.packageList.packages.response)),t=e.data.packageList.packages.response.responsePayload,console.log("%c 返回数据>>>>>>>","color:green",e),"string"==typeof t.data)try{""!=t.data&&(t.data=JSON.parse(t.data))}catch(e){console.error(e)}if(!t.result){var n=t.data&&t.data.ErrorMessage||t.msg||"网络异常";return r.a.reject({isLogicError:!0,errorMessage:n,data:t})}}catch(e){return console.error(e),o(),r.a.reject({isLogicError:!1,errorMessage:"网络异常,请检查网络"})}return e.data=t.data,e},function(e){return l.a.commit("LOADING_DISABLED",!1),o(),r.a.reject({isLogicError:!1,errorMessage:"网络异常,请检查网络"})}),t.a={axios:u.a,post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("%c 请求数据>>>>>>>","color:green",JSON.parse(i()(t||{}))),g.post(e,t)}}},"3x7a":function(e,t,n){"use strict";var o=function(e){return n.e(9).then(function(){return e(n("8too"))}.bind(null,n)).catch(n.oe)},a=function(e){return n.e(8).then(function(){return e(n("BvTf"))}.bind(null,n)).catch(n.oe)};t.a=[{name:"main",path:"/main",component:o,children:[{name:"mainHome",path:"/mainHome",component:a}]}]},"4/BI":function(e,t,n){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var o={toDate:function(e,t){return t||(t="yyyy-MM-dd HH:mm:ss"),"string"==typeof e&&(e=o.parseDate(e)),e.format(t)},parseDate:function(e){return e?new Date(e.replace(/-/g,"/")):null}};t.a=o},"7/Nf":function(e,t,n){"use strict";var o={certCode:[{code:0,desc:"身份证"}],insureCode:[{code:"50000",desc:"5万元"},{code:"100000",desc:"10万元"},{code:"150000",desc:"15万元"},{code:"200000",desc:"20万元"},{code:"250000",desc:"25万元"},{code:"300000",desc:"30万元"}],sexCode:[{code:"m",desc:"男"},{code:"f",desc:"女"}],insuredTimeCode:[{code:"20",desc:"20年"},{code:"30",desc:"30年"},{code:"40",desc:"40年"},{code:"50",desc:"50年"},{code:"60",desc:"60年"},{code:"all",desc:"终身"}],typeCode:[{code:"12",desc:"年缴"},{code:"0",desc:"趸缴"}],termCode:[{code:"5",desc:"5年"},{code:"10",desc:"10年"},{code:"15",desc:"15年"},{code:"20",desc:"20年"}],orderCode:[{code:"01",desc:"待生效"},{code:"02",desc:"已失效"},{code:"03",desc:"继续投保"},{code:"06",desc:"去支付"},{code:"08",desc:"已生效"}],insuranceCode:[{code:"0",desc:"带承保"},{code:"1",desc:"已承保"},{code:"4",desc:"已失效"}],relationCode:[{code:0,desc:"本人"},{code:31,desc:"父母"},{code:32,desc:"子女"},{code:33,desc:"配偶"}],feedbackCode:[{code:"1",desc:"建议"},{code:"2",desc:"投诉"}]};t.a=o},"7afc":function(e,t,n){"use strict";var o=n("nb29"),a=n("LF/y"),r=n("VU/8"),c=r(o.a,a.a,!1,null,null,null);t.a=c.exports},"7zck":function(e,t){},"8Zuf":function(e,t,n){"use strict";var o=n("woOf"),a=n.n(o),r=n("7+uW"),c={},i=document.createElement("div");c.init=function(e){c=r.default.extend(e)},c.show=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};document.body.appendChild(i),e.type="inform";var t=a()({},e);new c({propsData:t}).$mount(i).show()},c.confirm=function(e){document.body.appendChild(i),e.type="confirm";var t=a()({},e);new c({propsData:t}).$mount(i).show()},t.a=c},"8qvv":function(e,t){},"9pdN":function(e,t,n){"use strict";var o=function(e){return n.e(11).then(function(){return e(n("nU8l"))}.bind(null,n)).catch(n.oe)},a=function(e){return n.e(10).then(function(){return e(n("hbF8"))}.bind(null,n)).catch(n.oe)};t.a=[{name:"home",path:"/home",component:o,children:[{name:"homeShow",path:"/homeShow",component:a}]}]},BWW0:function(e,t,n){"use strict";var o=n("7+uW"),a=n("7/Nf"),r={};for(var c in a.a){r[c]||(r[c]={});for(var i in a.a[c])r[c][a.a[c][i].code]=a.a[c][i].desc}o.default.filter("commonFilter",function(e,t,n){return r[t][e]||n||"没有配置值"}),o.default.filter("dateFilter",function(e){var t=new Date(e),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,o=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),c=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return t.getFullYear()+"-"+n+"-"+o+" "+a+":"+r+":"+c})},BdJT:function(e,t,n){"use strict";var o=n("OVL2");t.a=o.a},C9LJ:function(e,t,n){"use strict";var o,a=n("bOdI"),r=n.n(a),c=n("0xDb"),i={LOADING:"LOADING",LOADING_DISABLED:"LOADING_DISABLED",LOGIN:"LOGIN",LOCK_SCREEN:"LOCK_SCREEN",TOGGLE_TAB:"TOGGLE_TAB",TOGGLE_TOAST:"TOGGLE_TOAST",TOGGLE_SNACKBAR:"TOGGLE_SNACKBAR",TOGGLE_DIALOG:"TOGGLE_DIALOG",TOGGLE_POPUP:"TOGGLE_POPUP",WX_USERINFO:"WX_USERINFO",ACTIVE_ROUTER:"ACTIVE_ROUTER"},s={contentHeight:0,user:c.a.cache.get("user"),lockScreen:!1,loading:!1,loadingMsg:null,loadingDisabled:!1,hasFooter:!0,toast:!1,toastMsg:"",snackbar:!1,snackbarMsg:"",dialog:!1,dialogMsg:"",dialogImg:"",dialogButtons:[],dialogCallback:null,popup:!1,popupMsg:"",popupTitle:"",popupCallback:null,wxUserInfo:null,activeRouter:"phoneMain"},u={getUser:function(){return s.user},isLockScreen:function(){return s.lockScreen},isShowFooter:function(){return s.hasFooter},loading:function(){return s.loading},getWxUser:function(){return s.wxUserInfo}},l={add:function(e,t){var n=e.commit;e.state;n(i.ADD_PRODUCT,t)},toggleTab:function(e,t){var n=e.commit;e.state;alert("toggleTab"),n(i.TOGGLE_TAB,t)}},d=(o={},r()(o,i.LOADING,function(e,t){e.loading=t.loading,e.loadingMsg=t.msg||""}),r()(o,i.LOADING_DISABLED,function(e,t){e.loadingDisabled=t}),r()(o,i.LOGIN,function(e,t){e.user=t}),r()(o,i.LOCK_SCREEN,function(e,t){e.lockScreen=t}),r()(o,i.TOGGLE_TAB,function(e,t){e.hasFooter=t}),r()(o,i.TOGGLE_TOAST,function(e,t){e.toast=t.toast,e.toastMsg=t.toastMsg,e.toastImg=t.toastImg||"",e.toast&&setTimeout(function(){e.toast=!1},3e3)}),r()(o,i.TOGGLE_SNACKBAR,function(e,t){e.snackbar=t.snackbar,e.snackbarMsg=t.snackbarMsg,e.snackbar&&setTimeout(function(){e.snackbar=!1},3e3)}),r()(o,i.TOGGLE_DIALOG,function(e,t){e.dialog=t.dialog,e.dialogMsg=t.dialogMsg,e.dialogImg=t.dialogImg,e.dialogButtons=t.dialogButtons,e.dialogCallback=t.dialogCallback}),r()(o,i.TOGGLE_POPUP,function(e,t){e.popup=t.popup,e.popupTitle=t.popupTitle,e.popupMsg=t.popupMsg,e.popupCallback=t.popupCallback}),r()(o,i.WX_USERINFO,function(e,t){e.wxUserInfo=t}),r()(o,i.ACTIVE_ROUTER,function(e,t){e.activeRouter=t}),o);t.a={state:s,getters:u,actions:l,mutations:d}},DYry:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"highlight free-code",style:{"max-width":e.screenWidth+"px"},attrs:{lang:e.lang}},[e.isMibile?e._e():n("pre",{ref:"copy_content",staticStyle:{"max-width":"100vw"},style:{"max-height":e.height?e.height+"px":e.screenHeight-40+"px","min-height":"100px"},attrs:{id:"text"}},[e._v("      "),n("code",{staticClass:"hljs",class:e.lang,staticStyle:{width:"100%"}},[e._v("\n        "),n("div",[e._v("\n          "),e._t("default"),e._v("\n        ")],2),e._v("\n      ")]),e._v("\n    ")]),e._v(" "),n("div",{staticClass:"btns"},[n("button",{staticClass:"copy",on:{click:e.chooseText}},[e._v("\n        全选\n      ")]),e._v(" "),n("button",{ref:"btn_copy",staticClass:"copy",attrs:{"data-clipboard-text":e.code.textContent,size:"small"}},[e._v("\n        复制\n      ")])])])},a=[],r={render:o,staticRenderFns:a};t.a=r},EsKv:function(e,t,n){"use strict";var o={isID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";null==e&&(e="");var t=e;e=e.toUpperCase();var n={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},o=!0;if(e&&(/^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e)||/^[1-9]\d{7}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}$/i.test(e)))if(n[e.substr(0,2)]){if(18==e.length){e=e.split("");for(var a=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],c=0,i=0,s=0,u=0;u<17;u++)i=e[u],s=a[u],c+=i*s;r[c%11]!=e[17]&&(o=!1)}}else o=!1;else o=!1;if(o){var l=15==t.length?t.substr(14,1)%2:t.substr(16,1)%2;l=0==l?2:1;var d=15==t.length?"19"+t.substr(6,2)+"-"+t.substr(8,2)+"-"+t.substr(10,2):t.substr(6,4)+"-"+t.substr(10,2)+"-"+t.substr(12,2);return{cityCode:t.substr(0,4),cityDesc:n[t.substr(0,2)],birthDay:d,sex:l}}return!1}};t.a=o},"LF/y":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},a=[],r={render:o,staticRenderFns:a};t.a=r},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("7afc"),r=n("YtJ0"),c=n("Q3uA"),i=n("7zck"),s=(n.n(i),n("3EgV")),u=n.n(s),l=n("1lyH"),d=n("8qvv"),g=(n.n(d),n("BWW0"),n("DRgf")),f=n("WwqC"),p=n.n(f),m=n("0xDb");window.globalConfig={rootUrl:"http://10.0.16.28:8080/com.ifp.ipartner/",iosUrl:"",env:"int",isDebug:!0,plat:"WEB",timeout:18e4},o.default.use(l.a),o.default.use(u.a),window.utils=m.a,o.default.use(g.a,{router:c.a,store:r.a,moduleName:"policy",keyName:"RH"}),o.default.config.productionTip=!1,o.default.use(p.a,{router:c.a}),o.default.mixin({data:function(){return{screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:{go:function(e){this.$router.push(e)},back:function(e){c.a.goBack(e)}}}),new o.default({el:"#app",router:c.a,store:r.a,template:"<App/>",components:{App:a.a}})},OVL2:function(e,t,n){"use strict";function o(e){n("xHEc")}var a=n("3S+H"),r=n("DYry"),c=n("VU/8"),i=o,s=c(a.a,r.a,!1,i,"data-v-168352cb",null);t.a=s.exports},Q3uA:function(e,t,n){"use strict";var o=n("Gu7T"),a=n.n(o),r=n("7+uW"),c=n("/ocq"),i=n("YtJ0"),s=n("3x7a"),u=n("9pdN"),l=n("/U78"),d=n("2ZO0");r.default.use(c.a);var g=new c.a({routes:[{path:"/",redirect:"/phoneMain"}].concat(a()(s.a),a()(u.a),a()(l.a),a()(d.a))});g.beforeEach(function(e,t,n){document.title=e.meta.title||document.title,i.a.commit("ACTIVE_ROUTER",e.name),n()}),c.a.prototype.goBack=function(e){this.isBack=!0,"string"==typeof e?g.push(e):window.history.go(-1)},t.a=g},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),cache={set:function(e,t){"string"==typeof t?localStorage.setItem(e,t):localStorage.setItem(e,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t))},get:function get(key){var value=localStorage.getItem(key);if(value&&("{"===value.substr(0,1)||"["===value.substr(0,1)))try{value=eval("("+value+")")}catch(e){console.error("error in get cache key:"+key+", value:"+value)}return value},getDisposable:function getDisposable(key){var value=localStorage.getItem(key);if(value&&("{"===value.substr(0,1)||"["===value.substr(0,1)))try{value=eval("("+value+")")}catch(e){console.error("error in get cache key:"+key+", value:"+value)}return localStorage.removeItem(key),value},removeItem:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},Tuv8:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"footer"},[n("div",[n("a",{attrs:{href:"https://github.com/jdfdcc"}},[e._v("https://www.jdf.com.cn")])])])}],r={render:o,staticRenderFns:a};t.a=r},UOkk:function(e,t,n){"use strict";var o=n("//Fk"),a=n.n(o),r={uploadImg:function(){return new a.a}};t.a=r},Wkjr:function(e,t,n){"use strict";t.a={name:"jdFooter",props:{},components:{},data:function(){return{}},methods:{},computed:{}}},YtJ0:function(e,t,n){"use strict";var o=n("7+uW"),a=n("NYxO"),r=n("C9LJ");o.default.use(a.a),t.a=new a.a.Store({modules:{common:r.a}})},Z09n:function(e,t){},bxLB:function(e,t,n){"use strict";var o=n("vUEW");t.a=o.a},jg9f:function(e,t,n){"use strict";var o=n("YtJ0"),a=n("Au9i"),r=(n.n(a),{toast:function(e,t){console.log(e)},snackbar:function(e,t,n){o.a.commit("TOGGLE_SNACKBAR",{snackbar:!0,snackbarMsg:e,snackbarImg:t})},dialog:function(e,t,n,a){o.a.commit("TOGGLE_DIALOG",{dialog:!0,dialogMsg:e,dialogImg:t,dialogButtons:n,dialogCallback:a})},popup:function(e,t,n){o.a.commit("TOGGLE_POPUP",{popup:!0,popupMsg:t,popupTitle:e,popupCallback:n})},alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){};n.i(a.Toast)({message:e instanceof Array?e[0]:e,position:"top",duration:3e3}),setTimeout(function(){t()},3e3)}});t.a=r},nb29:function(e,t,n){"use strict";t.a={name:"app",created:function(){}}},sOXZ:function(e,t,n){"use strict";var o=n("BO1k"),a=n.n(o),r=n("mvHQ"),c=n.n(r),i={scrollAnchor:function(e,t){t||(t=document.querySelector(".mu-content-block"));var n=document.querySelector("#"+e);t.scrollTop=n.offsetTop},getScrollTop:function(e){return e||(e=document.querySelector(".mu-content-block")),e.scrollTop},scrollPosition:function(e,t){t||(t=document.querySelector(".mu-content-block")),t.scrollTop=e},uuid:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")),t=[],n=void 0,o=void 0;for(t[8]=t[13]=t[18]=t[23]="",t[14]="4",n=0;n<26;n++)t[n]||(o=0|16*Math.random(),t[n]=e[19==n?3&o|8:o]);return t.join("")},copy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.parse(c()(e))},hasAccessTo:function(e,t){if(t.id==e&&"1"==t.status)return!0;if(t.children){var n=!0,o=!1,r=void 0;try{for(var c,s=a()(t.children);!(n=(c=s.next()).done);n=!0){var u=c.value;if(i.hasAccessTo(e,u))return!0}}catch(e){o=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}}return!1},birthdayToAge:function(e){if(e){var t,n=e.split("-"),o=n[0],a=n[1],r=n[2],c=new Date,i=c.getFullYear(),s=c.getMonth()+1,u=c.getDate();if(i==o)t=0;else{var l=i-o;if(l>0)if(s==a){var d=u-r;t=d<0?l-1:l}else{var g=s-a;t=g<0?l-1:l}else t=-1}return t}},disabled:function(e){document.body.style.overflow=e?"hidden":"auto"}};t.a=i,function(){document.getElementsByTagName("body")[0].onresize=i.sizeChange}()},vUEW:function(e,t,n){"use strict";function o(e){n("zhGT")}var a=n("Wkjr"),r=n("Tuv8"),c=n("VU/8"),i=o,s=c(a.a,r.a,!1,i,"data-v-e70625a4",null);t.a=s.exports},w3CS:function(e,t,n){"use strict";var o=n("BO1k"),a=n.n(o),r=n("EsKv"),c={reg:{require:/\S/,Positive:/^([1-9]\d*|[0]{1,1})$/,positive:/^[0-9]*[1-9][0-9]*$/,Negative:/^((-d+)|(0+))$/,negative:/^-[0-9]*[1-9][0-9]*$/,realNumber:/^-?\d+\.?\d*$/,integer:/^-?d+$/,PositiveFloat:/^d+(.d+)?$/,positiveFloat:/^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/,NegativeFloat:/^((-d+(.d+)?)|(0+(.0+)?))$/,negativeFloat:/^(-(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,letter:/^[A-Za-z]+$/,numberLetter:/^[A-Za-z0-9]+$/,mobile:/^(13|14|15|16|17|18|19)\d{9}$/,mobileOrEmpty:/^\s*$|^(13|14|15|17|18)\d{9}$/,telephone:/^((0\d{2,3})-?)(\d{7,8})(-?(\d{3,}))?$/,chineseLetter:/^[a-z A-Z\u4E00-\u9FA5]+$/,name:/^[a-zA-Z\u4E00-\u9FA5·.]+$/,chinese:/^[\u4E00-\u9FA5]+$/,email:/^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/,carNO:/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/,pwd:/^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/,passport:/^[G|E][0-9]{8}$|^[S|P|D][0-9]{7}$/,bankCode:/^[0-9]+$/,numberStr:/^[0-9]+$/},judge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=t,o=!0,a=[];for(var r in e)n.indexOf(r)<0&&!e[r].status&&(o=!1,a.push(e[r].msg));return{status:o,rules:a}},validate:function(e,t){for(var n={status:!0,msg:"验证通过",results:[]},o=arguments.length,r=Array(o>2?o-2:0),c=2;c<o;c++)r[c-2]=arguments[c];var i=!0,s=!1,u=void 0;try{for(var l,d=a()(r);!(i=(l=d.next()).done);i=!0){var g=l.value,f={status:!0,reg:g.reg,msg:"验证通过"};if(g.isMethods){if(t&&!g.methods(t)){n.status=!1,f.status=!1;var p=null;p="function"==typeof g.msg?g.msg(e):g.msg,0==n.results.length&&(n.msg=p),f.msg=p}else f.status=!0,f.data=g.methods(t);n.results.push(f)}else{var m=!1;if("require"!=g.name?t&&(m=!g.reg.test(t)):m=!g.reg.test(t),m){n.status=!1,f.status=!1;var h=null;h="function"==typeof g.msg?g.msg(e):g.msg,0==n.results.length&&(n.msg=h),f.msg=h,n.results.push(f)}}}}catch(e){s=!0,u=e}finally{try{!i&&d.return&&d.return()}finally{if(s)throw u}}return n}};c.rules={require:{reg:c.reg.require,msg:function(e){return(e||"")+"必填项"}},chinese:{reg:c.reg.chinese,msg:function(e){return(e||"")+"中文格式不匹配"}},number:{reg:c.reg.Positive,msg:function(e){return(e||"")+"数字格式不匹配"}},mobile:{reg:c.reg.mobile,msg:function(e){return(e||"")+"手机号格式不匹配"}},mobileOrEmpty:{reg:c.reg.mobileOrEmpty,msg:function(e){return(e||"")+"手机号格式不匹配"}},email:{reg:c.reg.email,msg:function(e){return(e||"")+"电子邮箱格式不匹配"}},pwd:{reg:c.reg.pwd,msg:function(e){return(e||"")+"密码不正确"}},name:{reg:c.reg.name,msg:function(e){return(e||"")+"姓名格式不匹配"}},idcard:{isMethods:!0,methods:r.a.isID,msg:function(e){return(e||"")+"身份证格式不匹配"}},passport:{reg:c.reg.passport,msg:function(e){return(e||"")+"护照格式不匹配"}},bank:{reg:c.reg.bankCode,msg:function(e){return(e||"")+"格式不为整数"}},telephone:{reg:c.reg.telephone,msg:function(e){return(e||"")+"格式不为整数"}},realNumber:{reg:c.reg.realNumber,msg:function(e){return(e||"")+"正浮点数"}}},t.a=c},xHEc:function(e,t){},zhGT:function(e,t){}},["NHnr"]);