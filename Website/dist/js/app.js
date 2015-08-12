/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,W,s){'use strict';function I(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Va(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:L(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(K(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Wa.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Td(){return++mb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(F(g)||E(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var m=h[l],q=g[m];c&&F(q)?(F(b[m])||(b[m]=K(q)?[]:{}),Nb(b[m],
[q],!0)):b[m]=q}}qc(b,d);return b}function Q(b){return Nb(b,sa.call(arguments,1),!1)}function Ud(b){return Nb(b,sa.call(arguments,1),!0)}function X(b){return parseInt(b,10)}function Ob(b,a){return Q(Object.create(b),a)}function v(){}function Xa(b){return b}function ra(b){return function(){return b}}function w(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function F(b){return null!==b&&"object"===typeof b}function nc(b){return null!==b&&"object"===typeof b&&!rc(b)}function L(b){return"string"===
typeof b}function V(b){return"number"===typeof b}function da(b){return"[object Date]"===ta.call(b)}function E(b){return"function"===typeof b}function Ya(b){return"[object RegExp]"===ta.call(b)}function Va(b){return b&&b.window===b}function Za(b){return b&&b.$evalAsync&&b.$watch}function $a(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return G(b.nodeName||
b[0]&&b[0].nodeName)}function ab(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Va(b)||Za(b))throw Ea("cpws");if(tc.test(ta.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];F(b)&&(c.push(b),d.push(a));var e;if(K(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;K(a)?a.length=0:n(a,function(b,c){delete a[c]});if(nc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&
(a[e]=fa(b[e],null,c,d));else for(e in b)Wa.call(b,e)&&(a[e]=fa(b[e],null,c,d));qc(a,f)}}else if(a=b,F(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(K(b))return fa(b,[],c,d);if(tc.test(ta.call(b)))a=new b.constructor(b);else if(da(b))a=new Date(b.getTime());else if(Ya(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex;else return e=Object.create(rc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(K(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=
b[c]}else if(F(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(da(b))return da(a)?ka(b.getTime(),a.getTime()):!1;if(Ya(b))return Ya(a)?b.toString()==a.toString():!1;if(Za(b)||Za(a)||Va(b)||Va(a)||K(a)||da(a)||Ya(a))return!1;
c=ga();for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===s||E(a[d])))return!1;return!0}return!1}function bb(b,a,c){return b.concat(sa.call(a,c))}function uc(b,a){var c=2<arguments.length?sa.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,bb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wd(b,a){var c=
a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Va(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Za(a)&&(c="$SCOPE");return c}function cb(b,a){if("undefined"===typeof b)return s;V(a)||(a=a?2:null);return JSON.stringify(b,Wd,a)}function vc(b){return L(b)?JSON.parse(b):b}function wc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Pb(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+
b);return a}function va(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===Na?G(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+G(b)})}catch(d){return G(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}function yc(b){var a={},c,d;n((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=xc(c[0]),z(d)&&(b=z(c[1])?xc(c[1]):!0,Wa.call(a,d)?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}
function Qb(b){var a=[];n(b,function(b,d){K(b)?n(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function nb(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Xd(b,a){var c,d,e=Oa.length;for(d=0;d<
e;++d)if(c=Oa[d]+a,L(c=b.getAttribute(c)))return c;return null}function Yd(b,a){var c,d,e={};n(Oa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Oa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Xd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){F(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":va(b);throw Ea("btstrpd",
d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=db(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));
if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");$.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};E($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function Zd(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function $d(b){b=$.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(ae,function(b,d){return(d?a:"")+b.toLowerCase()})}function be(){var b;if(!Bc){var a=ob();la=O.jQuery;z(a)&&
(la=null===a?s:O[a]);la&&la.fn.on?(A=la,Q(la.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):A=R;$.element=A;Bc=!0}}function Sb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&K(b)&&(b=b[b.length-1]);Sb(E(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ra(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?uc(e,b):b}function pb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ga(){return Object.create(null)}function ce(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=I("$injector"),
d=I("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||I;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return C}}function b(a,c){return function(b,e){e&&E(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return C}}if(!g)throw c("nomod",f);var d=[],e=[],t=[],y=a("$injector","invoke","push",e),C=
{_invokeQueue:d,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:y,run:function(a){t.push(a);return this}};h&&y(h);return C})}})}
function de(b){Q(b,{bootstrap:zc,copy:fa,extend:Q,merge:Ud,equals:ka,element:A,forEach:n,injector:db,noop:v,bind:uc,toJson:cb,fromJson:vc,identity:Xa,isUndefined:w,isDefined:z,isString:L,isFunction:E,isObject:F,isNumber:V,isElement:sc,isArray:K,version:ee,isDate:da,lowercase:G,uppercase:qb,callbacks:{counter:0},getTestability:$d,$$minErr:I,$$csp:eb,reloadWithDebugInfo:Zd});fb=ce(O);try{fb("ngLocale")}catch(a){fb("ngLocale",[]).provider("$locale",fe)}fb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});
a.provider("$compile",Dc).directive({a:he,input:Ec,textarea:Ec,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,
ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(rb).directive(Jc);a.provider({$anchorScroll:Qe,$animate:Re,$$animateQueue:Se,$$AnimateRunner:Te,$browser:Ue,$cacheFactory:Ve,$controller:We,$document:Xe,$exceptionHandler:Ye,$filter:Kc,$interpolate:Ze,$interval:$e,$http:af,$httpParamSerializer:bf,$httpParamSerializerJQLike:cf,$httpBackend:df,$location:ef,$log:ff,$parse:gf,$rootScope:hf,$q:jf,$$q:kf,$sce:lf,$sceDelegate:mf,$sniffer:nf,$templateCache:of,
$templateRequest:pf,$$testability:qf,$timeout:rf,$window:sf,$$rAF:tf,$$asyncCallback:uf,$$jqLite:vf,$$HashMap:wf,$$cookieReader:xf})}])}function gb(b){return b.replace(yf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(zf,"Moz$1")}function Lc(b){b=b.nodeType;return b===qa||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Af.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Bf,"<$1></$2>")+
d[2];for(d=d[0];d--;)c=c.lastChild;f=bb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;L(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new R(b)}if(a){a=W;var c;b=(c=Cf.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Vb(b){return b.cloneNode(!0)}function sb(b,a){a||tb(b);
if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)tb(c[d])}function Oc(b,a,c,d){if(z(d))throw Ub("offargs");var e=(d=ub(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(z(c)){var d=e[a];ab(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function tb(b,a){var c=b.ng339,d=c&&hb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),
Oc(b)),delete hb[c],b.ng339=s))}function ub(b,a){var c=b.ng339,c=c&&hb[c];a&&!c&&(b.ng339=c=++Df,c=hb[c]={events:{},data:{},handle:s});return c}function Wb(b,a,c){if(Lc(b)){var d=z(c),e=!d&&a&&!F(a),f=!a;b=(b=ub(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function vb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function wb(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",T((" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function xb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return yb(b,
"$"+(a||"ngController")+"Controller")}function yb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=K(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(sb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||sb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ef(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Rc(b,a){var c=zb[a.toLowerCase()];
return c&&Sc[ua(b)]&&c}function Ff(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Tc[a]}function Gf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function vf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)}})}}function Fa(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Td)():
c+":"+b}function Sa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}n(b,this.put,this)}function Hf(b){return(b=b.toString().replace(Uc,"").match(Vc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(b,a){function c(a){return function(b,c){if(F(b))n(b,pc(a));else return a(b,c)}}function d(a,b){Ra(a,"service");if(E(b)||K(b))b=t.instantiate(b);if(!b.$get)throw Ga("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=C.invoke(b,this);if(w(c))throw Ga("undef",
a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{L(a)?(c=fb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(t.invoke(a)):K(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+
"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=db.$$annotate(b,a,g),l,t,m;t=0;for(l=h.length;t<l;t++){m=h[t];if("string"!==typeof m)throw Ga("itkn",m);k.push(f&&f.hasOwnProperty(m)?f[m]:d(m,g))}K(b)&&
(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return F(a)||E(a)?a:d},get:d,annotate:db.$$annotate,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Sa([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ra(b),!1)}),constant:c(function(a,
b){Ra(a,"constant");q[a]=b;y[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}}},t=q.$injector=h(q,function(a,b){$.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),y={},C=y.$injector=h(y,function(a,b){var c=t.get(a+"Provider",b);return C.invoke(c.$get,c,s,a)});n(g(b),function(a){a&&C.invoke(a)});return C}function Qe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):
f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ef(function(){d.$evalAsync(g)})});return g}]}function ib(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;K(b)&&(b=b.join(" "));K(a)&&(a=a.join(" "));return b+" "+a}function If(b){L(b)&&(b=b.split(" "));var a=ga();n(b,function(b){b.length&&(a[b]=!0)});return a}function Ha(b){return F(b)?b:{}}function uf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,
0,!1)}}]}function Jf(b,a,c,d){function e(a){try{a.apply(null,sa.call(arguments,1))}finally{if(C--,0===C)for(;N.length;)try{N.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=m.state;break a}catch(a){}u=void 0}u=w(u)?null:u;ka(u,D)&&(u=D);D=u}function h(){if(x!==l.url()||p!==u)x=l.url(),p=u,n(B,function(a){a(l.url(),u)})}var l=this,k=b.location,m=b.history,q=b.setTimeout,t=b.clearTimeout,y={};l.isMock=!1;var C=0,N=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
function(){C++};l.notifyWhenNoOutstandingRequests=function(a){0===C?a():N.push(a)};var u,p,x=k.href,r=a.find("base"),H=null;g();p=u;l.url=function(a,c,e){w(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(x===a&&(!d.history||f))return l;var h=x&&Ia(x)===Ia(a);x=a;p=e;if(!d.history||h&&f){if(!h||H)H=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):k.href=a}else m[c?"replaceState":"pushState"](e,"",a),g(),p=u;return l}return H||
k.href.replace(/%27/g,"'")};l.state=function(){return u};var B=[],M=!1,D=null;l.onUrlChange=function(a){if(!M){if(d.history)A(b).on("popstate",f);A(b).on("hashchange",f);M=!0}B.push(a);return a};l.$$applicationDestroyed=function(){A(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=r.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;C++;c=q(function(){delete y[c];e(a)},b||0);y[c]=!0;return c};l.defer.cancel=function(a){return y[a]?
(delete y[a],t(a),e(v),!0):!1}}function Ue(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Jf(b,d,a,c)}]}function Ve(){this.$get=function(){function b(b,d){function e(a){a!=q&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},q=null,t=null;return a[b]={put:function(a,b){if(!w(b)){if(k<Number.MAX_VALUE){var c=
m[a]||(m[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(t.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==q&&(q=b.p);b==t&&(t=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};q=t=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};
b.get=function(b){return a[b]};return b}}function of(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==G(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",
a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Vd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function t(a,f){Ra(a,"directive");L(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,g){try{var h=b.invoke(e);E(h)?h={compile:ra(h)}:!h.compile&&h.link&&(h.compile=ra(h.link));h.priority=h.priority||
0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,t=h.name,m={isolateScope:null,bindToController:null};F(l.scope)&&(!0===l.bindToController?(m.bindToController=c(l.scope,t,!0),m.isolateScope={}):m.isolateScope=c(l.scope,t,!1));F(l.bindToController)&&(m.bindToController=c(l.bindToController,t,!0));if(F(m.bindToController)){var C=l.controller,ba=l.controllerAs;if(!C)throw ea("noctrl",t);var ha;a:if(ba&&L(ba))ha=ba;else{if(L(C)){var n=Wc.exec(C);
if(n){ha=n[3];break a}}ha=void 0}if(!ha)throw ea("noident",t);}var r=k.$$bindings=m;F(r.isolateScope)&&(h.$$isolateBindings=r.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(s){d(s)}});return f}])),e[a].push(f)):n(a,pc(t));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var m=!0;this.debugInfoEnabled=function(a){return z(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,x,r,H,B,M){function D(a,b){try{a.addClass(b)}catch(c){}}function S(a,b,c,d,e){a instanceof A||(a=A(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=P(a,b,a,c,d,e);S.$$addScopeClass(a);
var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Yb(g,A("<div>").append(a).html())):c?Pa.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);S.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function P(a,b,c,d,e,f){function g(a,
c,d,e){var f,l,k,m,t,B,y;if(p)for(y=Array(c.length),m=0;m<h.length;m+=3)f=h[m],y[f]=c[f];else y=c;m=0;for(t=h.length;m<t;)if(l=y[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(k=a.$new(),S.$$addScopeInfo(A(l),k),B=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",B)}else k=a;B=c.transcludeOnThisElement?ba(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ba(a,b):null;c(f,k,l,d,B,c)}else f&&f(a,l.childNodes,s,e)}for(var h=[],l,k,m,t,p,B=0;B<a.length;B++){l=new $;k=ha(a[B],[],l,0===B?
d:s,e);(f=k.length?J(k,a[B],l,b,c,null,[],[],f):null)&&f.scope&&S.$$addScopeClass(l.$$element);l=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:P(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(B,f,l),t=!0,p=p||f;f=null}return t?g:null}function ba(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,l;switch(a.nodeType){case qa:w(b,
xa(ua(a)),"E",d,e);for(var k,m,t,p=a.attributes,B=0,y=p&&p.length;B<y;B++){var C=!1,N=!1;k=p[B];l=k.name;m=T(k.value);k=xa(l);if(t=ia.test(k))l=l.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var P=k.replace(/(Start|End)$/,"");I(P)&&k===P+"Start"&&(C=l,N=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=xa(l.toLowerCase());h[k]=l;if(t||!c.hasOwnProperty(k))c[k]=m,Rc(a,k)&&(c[k]=!0);V(a,b,m,k,t);w(b,k,"A",d,e,C,N)}a=a.className;F(a)&&(a=a.animVal);if(L(a)&&
""!==a)for(;l=g.exec(a);)k=xa(l[2]),w(b,k,"C",d,e)&&(c[k]=T(l[3])),a=a.substr(l.index+l[0].length);break;case Na:if(11===Ta)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);za(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=xa(l[1]),w(b,k,"M",d,e)&&(c[k]=T(l[2]))}catch(ba){}}b.sort(Ja);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,
c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function Xc(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function J(a,b,d,e,f,g,h,k,m){function t(a,b,c,d){if(a){c&&(a=Xc(a,c,d));a.require=J.require;a.directiveName=v;if(u===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Xc(b,c,d));b.require=J.require;b.directiveName=v;if(u===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});k.push(b)}}
function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function y(a,b,c,d,e,f){var g=ga(),h;for(h in d){var l=d[h],k={$scope:l===u||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);k=p(m,
k,!0,l.controllerAs);g[l.name]=k;r||a.data("$"+l.name+"Controller",k.instance)}return g}function N(a,c,e,f,g,l){function m(a,b,c){var d;Za(a)||(c=b,b=a,a=s);r&&(d=n);c||(c=r?ja.parent():ja);return g(a,b,d,c,J)}var t,p,C,P,n,ha,ja;b===e?(f=d,ja=d.$$element):(ja=A(e),f=new $(ja,d));u&&(P=c.$new(!0));g&&(ha=m,ha.$$boundTransclude=g);M&&(n=y(ja,f,ha,M,P,c));u&&(S.$$addScopeInfo(ja,P,!0,!(D&&(D===u||D===u.$$originalDirective))),S.$$addScopeClass(ja,!0),P.$$isolateBindings=u.$$isolateBindings,X(c,f,P,P.$$isolateBindings,
u,P));if(n){var x=u||ba,H;x&&n[x.name]&&(p=x.$$bindings.bindToController,(C=n[x.name])&&C.identifier&&p&&(H=C,l.$$destroyBindings=X(c,f,C.instance,p,x)));for(t in n){C=n[t];var wa=C();wa!==C.instance&&(C.instance=wa,ja.data("$"+t+"Controller",wa),C===H&&(l.$$destroyBindings(),l.$$destroyBindings=X(c,f,wa,p,x)))}}t=0;for(l=h.length;t<l;t++)p=h[t],Z(p,p.isolateScope?P:c,ja,f,p.require&&B(p.directiveName,p.require,ja,n),ha);var J=c;u&&(u.template||null===u.templateUrl)&&(J=P);a&&a(J,e.childNodes,s,g);
for(t=k.length-1;0<=t;t--)p=k[t],Z(p,p.isolateScope?P:c,ja,f,p.require&&B(p.directiveName,p.require,ja,n),ha)}m=m||{};for(var P=-Number.MAX_VALUE,ba,M=m.controllerDirectives,u=m.newIsolateScopeDirective,D=m.templateDirective,n=m.nonTlbTranscludeDirective,x=!1,H=!1,r=m.hasElementTranscludeDirective,aa=d.$$element=A(b),J,v,w,Ja=e,za,I=0,G=a.length;I<G;I++){J=a[I];var Ab=J.$$start,Q=J.$$end;Ab&&(aa=wa(b,Ab,Q));w=s;if(P>J.priority)break;if(w=J.scope)J.templateUrl||(F(w)?(O("new/isolated scope",u||ba,
J,aa),u=J):O("new/isolated scope",u,J,aa)),ba=ba||J;v=J.name;!J.templateUrl&&J.controller&&(w=J.controller,M=M||ga(),O("'"+v+"' controller",M[v],J,aa),M[v]=J);if(w=J.transclude)x=!0,J.$$tlb||(O("transclusion",n,J,aa),n=J),"element"==w?(r=!0,P=J.priority,w=aa,aa=d.$$element=A(W.createComment(" "+v+": "+d[v]+" ")),b=aa[0],U(f,sa.call(w,0),b),Ja=S(w,e,P,g&&g.name,{nonTlbTranscludeDirective:n})):(w=A(Vb(b)).contents(),aa.empty(),Ja=S(w,e));if(J.template)if(H=!0,O("template",D,J,aa),D=J,w=E(J.template)?
J.template(aa,d):J.template,w=fa(w),J.replace){g=J;w=Tb.test(w)?Zc(Yb(J.templateNamespace,T(w))):[];b=w[0];if(1!=w.length||b.nodeType!==qa)throw ea("tplrt",v,"");U(f,aa,b);G={$attr:{}};w=ha(b,[],G);var R=a.splice(I+1,a.length-(I+1));u&&z(w);a=a.concat(w).concat(R);$c(d,G);G=a.length}else aa.html(w);if(J.templateUrl)H=!0,O("template",D,J,aa),D=J,J.replace&&(g=J),N=Kf(a.splice(I,a.length-I),aa,d,f,x&&Ja,h,k,{controllerDirectives:M,newIsolateScopeDirective:u,templateDirective:D,nonTlbTranscludeDirective:n}),
G=a.length;else if(J.compile)try{za=J.compile(aa,d,Ja),E(za)?t(null,za,Ab,Q):za&&t(za.pre,za.post,Ab,Q)}catch(V){c(V,va(aa))}J.terminal&&(N.terminal=!0,P=Math.max(P,J.priority))}N.scope=ba&&!0===ba.scope;N.transcludeOnThisElement=x;N.templateOnThisElement=H;N.transclude=Ja;m.hasElementTranscludeDirective=r;return N}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function w(b,d,f,g,h,l,k){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");
for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===s||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(l&&(m=Ob(m,{$$start:l,$$end:k})),b.push(m),h=m)}catch(y){c(y)}}return h}function I(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(D(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Kf(a,b,c,e,f,g,h,l){var k=[],m,t,p=b[0],B=a.shift(),y=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),C=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,M=B.templateNamespace;b.empty();d(H.getTrustedResourceUrl(C)).then(function(d){var N,u;d=fa(d);if(B.replace){d=Tb.test(d)?Zc(Yb(M,
T(d))):[];N=d[0];if(1!=d.length||N.nodeType!==qa)throw ea("tplrt",B.name,C);d={$attr:{}};U(e,b,N);var x=ha(N,[],d);F(B.scope)&&z(x);a=x.concat(a);$c(c,d)}else N=p,b.html(d);a.unshift(y);m=J(a,N,c,f,b,B,g,h,l);n(e,function(a,c){a==N&&(e[c]=b[0])});for(t=P(b[0].childNodes,f);k.length;){d=k.shift();u=k.shift();var S=k.shift(),H=k.shift(),x=b[0];if(!d.$$destroyed){if(u!==p){var wa=u.className;l.hasElementTranscludeDirective&&B.replace||(x=Vb(N));U(S,A(u),x);D(A(x),wa)}u=m.transcludeOnThisElement?ba(d,
m.transclude,H):H;m(t,d,x,e,u,m)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(m.transcludeOnThisElement&&(a=ba(b,m.transclude,e)),m(t,b,c,d,a,m)))}}function Ja(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&S.$$addBindingClass(a);return function(a,c){var e=c.parent();b||S.$$addBindingClass(e);S.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=G(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return H.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return H.RESOURCE_URL}function V(a,c,d,e,f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ua(a))throw ea("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var m=h[e];m!==d&&(l=m&&b(m,!0,g,f),d=m);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A.hasData(d)&&(A(c).data(A(d).data()),la?(Rb=!0,la.cleanData([d])):delete A.cache[d[A.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,
b){return Q(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function X(a,c,d,e,f,g){var h;n(e,function(e,g){var l=e.attrName,k=e.optional,m=e.mode,t,p,B,C;Wa.call(c,l)||(c[l]=s);switch(m){case "@":c[l]||k||(d[g]=s);c.$observe(l,function(a){d[g]=a});c.$$observers[l].$$scope=a;c[l]&&(d[g]=b(c[l])(a));break;case "=":if(k&&!c[l])break;p=u(c[l]);C=p.literal?ka:function(a,b){return a===b||a!==a&&b!==b};B=p.assign||function(){t=d[g]=p(a);throw ea("nonassign",
c[l],f.name);};t=d[g]=p(a);k=function(b){C(b,d[g])||(C(b,t)?B(a,b=d[g]):d[g]=b);return t=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(u(c[l],k),null,p.literal);h=h||[];h.push(k);break;case "&":p=u(c[l]);if(p===v&&k)break;d[g]=function(b){return p(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var $=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=
a};$.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&B.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Rc(f,a),h=Ff(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,
"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var m=2*k,g=g+M(T(h[m]),!0),g=g+(" "+T(h[m+1]));h=T(h[2*k]).split(/\s/);g+=M(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===s?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[f],
function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){ab(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Xa:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;S.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;S.$$addBindingClass=
m?function(a){D(a,"ng-binding")}:v;S.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;S.$$addScopeClass=m?function(a,b){D(a,b?"ng-isolate-scope":"ng-scope")}:v;return S}]}function xa(b){return gb(b.replace(Yc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Zc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
b[a].nodeType&&Lf.call(b,a,1);return b}function We(){var b={},a=!1;this.register=function(a,d){Ra(a,"controller");F(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!F(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,m,q;h=!0===h;l&&L(l)&&(q=l);if(L(f)){l=f.match(Wc);if(!l)throw Mf("ctrlfmt",f);m=l[1];q=q||l[3];f=b.hasOwnProperty(m)?b[m]:Cc(g.$scope,m,!0)||(a?Cc(d,m,!0):s);Qa(f,
m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),q&&e(g,q,k,m||f.name),Q(function(){var a=c.invoke(f,k,g,m);a!==k&&(F(a)||E(a))&&(k=a,q&&e(g,q,k,m||f.name));return k},{instance:k,identifier:q});k=c.instantiate(f,g,m);q&&e(g,q,k,m||f.name);return k}}]}function Xe(){this.$get=["$window",function(b){return A(b.document)}]}function Ye(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b){return F(b)?da(b)?b.toISOString():cb(b):b}
function bf(){this.$get=function(){return function(b){if(!b)return"";var a=[];oc(b,function(b,d){null===b||w(b)||(K(b)?n(b,function(b,c){a.push(ma(d)+"="+ma(Zb(b)))}):a.push(ma(d)+"="+ma(Zb(b))))});return a.join("&")}}}function cf(){this.$get=function(){return function(b){function a(b,e,f){null===b||w(b)||(K(b)?n(b,function(b){a(b,e+"[]")}):F(b)&&!da(b)?oc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Zb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function $b(b,
a){if(L(b)){var c=b.replace(Nf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Of))&&Pf[d[0]].test(c));d&&(b=vc(c))}}return b}function cd(b){var a=ga(),c;L(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=G(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):F(b)&&n(b,function(b,c){var f=G(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?(c=a[G(c)],void 0===c&&(c=null),c):a}}function ed(b,
a,c,d){if(E(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function af(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return F(a)&&"[object File]"!==ta.call(a)&&"[object Blob]"!==ta.call(a)&&"[object FormData]"!==ta.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return z(b)?
(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};n(a,function(a,d){E(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!$.isObject(a))throw I("$http")("badreq",a);var e=Q({method:"get",transformRequest:b.transformRequest,
transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=Q({},a.headers),f,g,h,c=Q({},c.common,c[G(a.method)]);a:for(f in c){g=G(f);for(h in e)if(G(h)===g)continue a;e[f]=c[f]}return d(e,ia(a))}(a);e.method=qb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=ed(a.data,dd(d),s,a.transformRequest);w(e)&&n(d,function(a,b){"content-type"===G(b)&&delete d[b]});w(a.withCredentials)&&
!w(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},s],g=h.when(e);for(n(y,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Qa(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Qa(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}
function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}M&&(200<=b&&300>b?M.put(P,[b,c,cd(d),e]):M.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?H.resolve:H.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function y(a){m(a.data,a.status,ia(a.headers()),a.statusText)}function n(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var H=h.defer(),B=H.promise,M,D,S=c.headers,P=q(c.url,c.paramSerializer(c.params));
k.pendingRequests.push(c);B.then(n,n);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=F(c.cache)?c.cache:F(b.cache)?b.cache:t);M&&(D=M.get(P),z(D)?D&&E(D.then)?D.then(y,y):K(D)?m(D[1],D[0],ia(D[2]),D[3]):m(D,200,{},"OK"):M.put(P,B));w(D)&&((D=fd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:s)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));return B}function q(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);
return a}var t=f("$http");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var y=[];n(c,function(a){y.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){n(arguments,function(a){k[a]=function(b,c){return k(Q({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){k[a]=function(b,c,d){return k(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function Qf(){return new O.XMLHttpRequest}
function df(){this.$get=["$browser","$window","$document",function(b,a,c){return Rf(b,Qf,b.defer,a.angular.callbacks,c[0])}]}function Rf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,y="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),y=a.type,g="error"===a.type?404:200);c&&c(g,y)};f.addEventListener("load",
m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,q,t,y){function C(){p&&p();x&&x.abort()}function N(a,d,e,f,g){H!==s&&c.cancel(H);p=x=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==G(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){N(k,a,d[u].data,"",b);d[u]=v})}else{var x=a();x.open(e,
h,!0);n(m,function(a,b){z(a)&&x.setRequestHeader(b,a)});x.onload=function(){var a=x.statusText||"",b="response"in x?x.response:x.responseText,c=1223===x.status?204:x.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);N(k,c,b,x.getAllResponseHeaders(),a)};e=function(){N(k,-1,null,null,"")};x.onerror=e;x.onabort=e;t&&(x.withCredentials=!0);if(y)try{x.responseType=y}catch(r){if("json"!==y)throw r;}x.send(l)}if(0<q)var H=c(C,q);else q&&E(q.then)&&q.then(C)}}function Ze(){var b="{{",a="}}";this.startSymbol=
function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,b).replace(q,a)}function h(f,h,m,q){function u(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(q&&!z(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}q=!!q;for(var p,n,r=0,H=
[],B=[],M=f.length,D=[],S=[];r<M;)if(-1!=(p=f.indexOf(b,r))&&-1!=(n=f.indexOf(a,p+l)))r!==p&&D.push(g(f.substring(r,p))),r=f.substring(p+l,n),H.push(r),B.push(c(r,u)),r=n+k,S.push(D.length),D.push("");else{r!==M&&D.push(g(f.substring(r)));break}m&&1<D.length&&Ka.throwNoconcat(f);if(!h||H.length){var P=function(a){for(var b=0,c=H.length;b<c;b++){if(q&&w(a[b]))return;D[S[b]]=a[b]}return D.join("")};return Q(function(a){var b=0,c=H.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){d(Ka.interr(f,
g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=P(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),q=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function $e(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=4<arguments.length,q=m?sa.call(arguments,4):[],t=a.setInterval,y=a.clearInterval,
C=0,N=z(k)&&!k,u=(N?d:c).defer(),p=u.promise;l=z(l)?l:0;p.then(null,null,m?function(){e.apply(null,q)}:e);p.$$intervalId=t(function(){u.notify(C++);0<l&&C>=l&&(u.resolve(C),y(p.$$intervalId),delete f[p.$$intervalId]);N||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function fe(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function gd(b,a){var c=Aa(b);a.$$protocol=c.protocol;
a.$$host=c.hostname;a.$$port=X(c.port)||Sf[c.protocol]||null}function hd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ia(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,
"$1")}function cc(b){return b.substr(0,Ia(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);gd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb("ipthprfx",a,c);hd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=ya(b,d))!==s?(g=f,g=(f=ya(a,f))!==s?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);gd(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),w(e)&&(e=d)):e=this.$$html5?d:"";hd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?
"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ia(b)==Ia(a)?(this.$$parse(a),!0):!1}}function id(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ia(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):
"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function jd(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ef(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return $a(b)?(a.enabled=b,this):F(b)?($a(b.enabled)&&(a.enabled=b.enabled),$a(b.requireBase)&&(a.requireBase=b.requireBase),$a(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var q=d.url(),t;if(a.enabled){if(!m&&a.requireBase)throw Cb("nobase");t=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(m||"/");m=e.history?dc:id}else t=
Ia(q),m=ec;k=new m(t,"#"+b);k.$$parseLinkUrl(q,q);k.$$state=d.state();var y=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");F(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);y.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,
l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Bb(k.absUrl())!=Bb(q)&&d.url(k.absUrl(),!0);var C=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(C=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,
m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(C||m)C=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(m&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function ff(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Ba(b,a){if("__defineGetter__"===
b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function kd(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Tf||b===Uf||b===Vf)throw ca("isecff",a);}}function Wf(b,a){return"undefined"!==typeof b?
b:a}function ld(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case r.Program:c=!0;n(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case r.Literal:b.constant=!0;b.toWatch=[];break;case r.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case r.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);
break;case r.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case r.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case r.Identifier:b.constant=!1;b.toWatch=[b];break;case r.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=
[b];break;case r.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case r.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case r.ArrayExpression:c=!0;d=[];n(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=
d;break;case r.ObjectExpression:c=!0;d=[];n(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case r.ThisExpression:b.constant=!1,b.toWatch=[]}}function md(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:s}}function nd(b){return b.type===r.Identifier||b.type===r.MemberExpression}function od(b){if(1===b.body.length&&nd(b.body[0].expression))return{type:r.AssignmentExpression,
left:b.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function pd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===r.Literal||b.body[0].expression.type===r.ArrayExpression||b.body[0].expression.type===r.ObjectExpression)}function qd(b,a){this.astBuilder=b;this.$filter=a}function rd(b,a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){oa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=Ba(a.shift(),d);var g=oa(b[e],d);g||(g={},b[e]=g);b=g}e=Ba(a.shift(),
d);oa(b[e],d);return b[e]=c}function Fb(b){return"constructor"==b}function fc(b){return E(b.valueOf)?b.valueOf():Xf.call(b)}function gf(){var b=ga(),a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,l)||(h=d(a,s,s,[b]),l=b&&fc(b));return h},b,c,f)}for(var k=[],m=[],
q=0,n=g.length;q<n;q++)k[q]=e,m[q]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&fc(l)}b&&(h=d(a,s,s,m));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;n(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return z(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=
a.inputs?a.inputs:[a]);return c}var m={csp:d.csp,expensiveChecks:!1},q={csp:d.csp,expensiveChecks:!0};return function(d,e,C){var n,u,p;switch(typeof d){case "string":p=d=d.trim();var r=C?a:b;n=r[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),C=C?q:m,n=new gc(C),n=(new hc(n,c,C)).parse(d),n.constant?n.$$watchDelegate=l:u?n.$$watchDelegate=n.literal?h:g:n.inputs&&(n.$$watchDelegate=f),r[p]=n);return k(n,e);case "function":return k(d,e);default:return v}}}]}function jf(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return sd(function(a){b.$evalAsync(a)},a)}]}function kf(){this.$get=["$browser","$exceptionHandler",function(b,a){return sd(function(a){b.defer(a)},a)}]}function sd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=s;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=I("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(F(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return l(e,!1)}return d&&E(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function y(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof y))return new y(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;
b.reject(a);return b.promise};q.when=m;q.resolve=m;q.all=function(a){var b=new g,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function tf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<m.length;a++){var b=m[a];b&&(m[a]=null,b())}k=m.length=0}function d(a){var b=m.length;k++;m.push(a);0===b&&(l=h(c));return function(){0<=
b&&(b=m[b]=null,0===--k&&l&&(l(),l=null,m.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,m=[];return d}]}function hf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=I("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++mb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function q(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function t(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function y(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function s(){for(;H.length;)try{H.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=l.defer(function(){p.$apply(s)}))}m.prototype={constructor:m,
$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,l=g.$$watchers,k={fn:b,last:r,get:f,exp:e||a,eq:!!c};d=null;E(b)||(k.fn=v);l||
(l=g.$$watchers=[]);l.unshift(k);t(this,1);return function(){0<=ab(l,k)&&t(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(F(e))if(Da(e))for(f!==q&&(f=q,n=f.length=0,k++),a=e.length,n!==a&&(k++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==t&&(f=t={},n=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(n++,f[b]=g,k++));if(n>a)for(b in k++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<
b.length,k=0,m=h(a,c),q=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(F(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Wa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,t,n=a,y,u=[],H,w;q("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),s());d=null;do{t=!1;for(y=this;x.length;){try{w=x.shift(),w.scope.$eval(w.expression,w.locals)}catch(v){g(v)}d=null}a:do{if(k=y.$$watchers)for(m=
k.length;m--;)try{if(b=k[m])if((f=b.get(y))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))t=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===r?f:h,y),5>n&&(H=4-n,u[H]||(u[H]=[]),u[H].push({msg:E(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){t=!1;break a}}catch(A){g(A)}if(!(k=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(k=y.$$nextSibling);)y=y.$parent}while(y=k);if((t||x.length)&&!n--)throw p.$$phase=
null,c("infdig",a,u);}while(t||x.length);for(p.$$phase=null;z.length;)try{z.shift()()}catch(F){g(F)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();t(this,-this.$$watchersCount);for(var b in this.$$listenerCount)y(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||x.length||l.defer(function(){x.length&&p.$digest()});x.push({scope:this,
expression:a,locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{return q("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&H.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);
-1!==d&&(c[d]=null,y(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=bb([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(q){g(q)}else d.splice(k,1),k--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,
targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=bb([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,x=p.$$asyncQueue=[],z=p.$$postDigestQueue=
[],H=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Yf(b){if("self"===b)return b;if(L(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=td(b).replace("\\*\\*",
".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ya(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function ud(b){var a=[];z(b)&&n(b,function(b){a.push(Yf(b))});return a}function mf(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=ud(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=ud(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?fd(b):!!a.exec(b.href)}function e(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",
a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),q,t,n=!1;q=0;for(t=b.length;q<t;q++)if(d(b[q],g)){n=!0;break}if(n)for(q=0,t=a.length;q<t;q++)if(d(a[q],g)){n=!1;break}if(n)return e;throw Ca("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ca("unsafe");
},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function lf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ta)throw Ca("iequirks");var d=ia(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Xa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,
a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;n(pa,function(a,b){var c=G(b);d[gb("parse_as_"+c)]=function(b){return e(a,b)};d[gb("get_trusted_"+c)]=function(b){return f(a,b)};d[gb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function nf(){this.$get=["$window","$document",function(b,a){var c={},d=X((/android (\d+)/.exec(G((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var q in l)if(k=
h.exec(q)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=L(l.webkitTransition),m=L(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ta)return!1;if(w(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:eb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function pf(){this.$get=
["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;K(g)?g=g.filter(function(a){return a!==$b}):g===$b&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ea("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function qf(){this.$get=["$rootScope","$browser",
"$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var d=$.element(a).data("$binding");d&&n(d,function(d){c?(new RegExp("(^|\\s)"+td(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},
setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function rf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){E(f)||(k=l,l=f,f=v);var m=sa.call(arguments,3),q=z(k)&&!k,t=(q?d:c).defer(),n=t.promise,r;r=a.defer(function(){try{t.resolve(f.apply(null,m))}catch(a){t.reject(a),e(a)}finally{delete g[n.$$timeoutId]}q||b.$apply()},l);n.$$timeoutId=r;g[r]=t;return n}var g={};
f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ta&&(Y.setAttribute("href",b),b=Y.href);Y.setAttribute("href",b);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function fd(b){b=
L(b)?Aa(b):b;return b.protocol===vd.protocol&&b.host===vd.host}function sf(){this.$get=ra(O)}function wd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===s&&(d[k]=a(g.substring(l+1))));return d}}function xf(){this.$get=wd}function Kc(b){function a(c,d){if(F(c)){var e={};n(c,function(b,c){e[c]=
a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",xd);a("date",yd);a("filter",Zf);a("json",$f);a("limitTo",ag);a("lowercase",bg);a("number",zd);a("orderBy",Ad);a("uppercase",cg)}function Zf(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw I("filter")("notarray",b);}var d;switch(ic(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=
dg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function dg(b,a,c){var d=F(b)&&"$"in b;!0===a?a=ka:E(a)||(a=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;var c;!(c=F(b))&&(c=F(a))&&(c=a,c=!(E(c.toString)&&c.toString!==Object.prototype.toString));if(c)return!1;a=G(""+a);b=G(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!F(e)?La(e,b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if("string"===g&&"!"===a.charAt(0))return!La(b,
a.substring(1),c,d);if(K(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!E(e)&&!w(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function ic(b){return null===b?"null":typeof b}function xd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){w(d)&&(d=a.CURRENCY_SYM);w(e)&&(e=
a.PATTERNS[1].maxFrac);return null==b?b:Bd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function zd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Bd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Bd(b,a,c,d,e){if(F(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var q=h.match(/([\d\.]+)e(-?)(\d+)/);q&&"-"==q[2]&&q[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<
e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Cd)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Cd),h=g[0],g=g[1]||"",q=0,t=a.lgSize,n=a.gSize;if(h.length>=t+n)for(q=h.length-t,k=0;k<q;k++)0===(q-k)%n&&0!==k&&(l+=c),l+=h.charAt(k);for(k=q;k<h.length;k++)0===(h.length-k)%t&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,
l,f?a.negSuf:a.posSuf);return m.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=qb(a?"SHORT"+b:b);return d[f][e]}}function Dd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Ed(b){return function(a){var c=Dd(a.getFullYear());
a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function yd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));f=X(b[4]||0)-f;g=X(b[5]||0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,
h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=eg.test(c)?X(c):a(c));V(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;e;)(k=fg.exec(e))?(h=bb(h,k,1),e=h.pop()):(h.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=wc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(a){l=gg[a];g+=l?l(c,b.DATETIME_FORMATS,m):
a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function $f(){return function(b,a){w(a)&&(a=2);return cb(b,a)}}function ag(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):X(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!K(b)&&!L(b))return b;c=!c||isNaN(c)?0:X(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Ad(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:
a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Da(a))return a;c=K(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=
!1,d=a||Xa;if(L(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return sa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ma(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ra(b)}function Fd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||
Ib;f.$error={};f.$$success={};f.$pending=s;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a)};Gd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ua);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};
f.$setPristine=function(){d.setClass(b,Ua,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=G(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",
function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",
l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(da(c))return c;if(L(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(hg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(b,c){c<
a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,m){function q(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function t(a){return z(a)?da(a)?a:c(a):s}Hd(e,f,g,h);jb(e,f,g,h,l,k);var n=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),n&&(b=Pb(b,n)),b):s});h.$formatters.push(function(a){if(a&&!da(a))throw Lb("datefmt",
a);if(q(a))return(r=a)&&n&&(r=Pb(r,n,!0)),m("date")(a,d,n);r=null;return""});if(z(g.min)||g.ngMin){var N;h.$validators.min=function(a){return!q(a)||w(N)||c(a)>=N};g.$observe("min",function(a){N=t(a);h.$validate()})}if(z(g.max)||g.ngMax){var u;h.$validators.max=function(a){return!q(a)||w(u)||c(a)<=u};g.$observe("max",function(a){u=t(a);h.$validate()})}}}function Hd(b,a,c,d){(d.$$hasNativeValidators=F(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?
s:b})}function Id(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw I("ngModel")("constexpr",c,d);return b(a)}return e}function lc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(" "):F(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,
b){var c=g.data("$classCounts")||ga(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,1);h.$addClass(n)}else if(!ka(b,m)){var r=e(m),n=d(k,r),k=d(r,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(g,n);k&&k.length&&c.removeClass(g,k)}}m=ia(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,
d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Gd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(lb+b,!0===c);a(Jd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Jd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===s?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,
b,f),Kd(d.$pending)&&(d.$pending=s));$a(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Ld,!0),d.$valid=d.$invalid=s,c("",null)):(a(Ld,!1),d.$valid=Kd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Kd(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var ig=/^\/(.+)\/([a-z]*)$/,G=function(b){return L(b)?
b.toLowerCase():b},Wa=Object.prototype.hasOwnProperty,qb=function(b){return L(b)?b.toUpperCase():b},Ta,A,la,sa=[].slice,Lf=[].splice,jg=[].push,ta=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=I("ng"),$=O.angular||(O.angular={}),fb,mb=0;Ta=W.documentMode;v.$inject=[];Xa.$inject=[];var K=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return L(b)?b.trim():b},td=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},eb=function(){if(z(eb.isActive_))return eb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return eb.isActive_=b},ob=function(){if(z(ob.name_))return ob.name_;var b,a,c=Oa.length,d,e;for(a=0;a<c;++a)if(d=Oa[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return ob.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],ae=/[A-Z]/g,Bc=!1,Rb,qa=1,Na=3,ee={full:"1.4.1",
major:1,minor:4,dot:1,codeName:"hyperionic-illumination"};R.expando="ng339";var hb=R.cache={},Df=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var yf=/([\:\-\_]+(.))/g,zf=/^moz([A-Z])/,kg={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=I("jqLite"),Cf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Af=/<([\w:]+)/,Bf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,
"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Pa=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(O).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:jg,sort:[].sort,splice:[].splice},zb={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){zb[G(b)]=b});var Sc={};n("input select option textarea button form details".split(" "),function(b){Sc[b]=!0});var Tc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:tb,hasData:function(b){for(var a in hb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});n({data:Wb,
inheritedData:yb,scope:function(b){return A.data(b,"$scope")||yb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return yb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:vb,css:function(b,a,c){a=gb(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Na&&2!==d&&8!==d)if(d=G(a),zb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,
d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:s;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(w(b)){var d=a.nodeType;return d===qa||d===Na?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(w(a)){if(b.multiple&&"select"===ua(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(w(a))return b.innerHTML;sb(b,!0);b.innerHTML=a},empty:Qc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Qc&&(2==b.length&&b!==vb&&b!==Pc?a:d)===s){if(F(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});n({removeData:tb,
on:function a(c,d,e,f){if(z(f))throw Ub("onargs");if(Lc(c)){var g=ub(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Gf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,kg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,
c){var d,e=a.parentNode;sb(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;n(new R(c),function(c){a.insertBefore(c,d)})}},
wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:xb,removeClass:wb,toggleClass:function(a,c,d){c&&n(c.split(" "),function(c){var f=d;w(f)&&(f=!vb(a,c));(f?xb:wb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=ub(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=Q(e,
c)),c=ia(h),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)w(g)?(g=a(this[h],c,e,f),z(g)&&(g=A(g))):Nc(g,a(this[h],c,e,f));return z(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Sa.prototype={put:function(a,c){this[Fa(a,this.nextUid)]=c},get:function(a){return this[Fa(a,this.nextUid)]},remove:function(a){var c=this[a=Fa(a,this.nextUid)];delete this[a];
return c}};var wf=[function(){this.$get=[function(){return Sa}]}],Vc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lg=/,/,mg=/^\s*(_?)(\S+?)\1\s*$/,Uc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=I("$injector");db.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw L(d)&&d||(d=a.name||Hf(a)),Ga("strictdi",d);c=a.toString().replace(Uc,"");c=c.match(Vc);n(c[1].split(lg),function(a){a.replace(mg,function(a,c,d){e.push(d)})})}a.$inject=e}}else K(a)?(c=a.length-1,
Qa(a[c],"fn"),e=a.slice(0,c)):Qa(a,"fn",!0);return e};var Md=I("$animate"),Te=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Se=function(){var a=new Sa,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&n(f.split(" "),function(a){a&&(k[a]=!0)});l&&n(l.split(" "),
function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=If(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&xb(a,f);g&&wb(a,g)});a.remove(c)}});c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Re=["$provide",function(a){var c=
this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,
d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&A(g);h=h&&A(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ha(l))},move:function(f,g,h,l){g=g&&A(g);h=h&&A(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ha(l))},leave:function(c,e){return a.push(c,"leave",
Ha(e),function(){c.remove()})},addClass:function(c,e,h){h=Ha(h);h.addClass=ib(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ha(h);h.removeClass=ib(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ha(l);l.addClass=ib(l.addClass,e);l.removeClass=ib(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ha(k);k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=ib(k.tempClasses,l||"ng-inline-animate");return a.push(c,
"animate",k)}}}]}],ea=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Yc=/^((?:x|data)[\:\-_])/i,Mf=I("$controller"),Wc=/^(\S+)(\s+as\s+(\w+))?$/,bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},Of=/^\[|^\{(?!\{)/,Pf={"[":/]$/,"{":/}$/},Nf=/^\)\]\}',?\n/,Ka=$.$interpolateMinErr=I("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var ng=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Sf={http:80,https:443,
ftp:21},Cb=I("$location"),og={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(w(a))return this.$$url;var c=ng.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Db("$$protocol"),host:Db("$$host"),port:Db("$$port"),path:jd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||
V(a))a=a.toString(),this.$$search=yc(a);else if(F(a))a=fa(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb("isrcharg");break;default:w(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:jd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([id,ec,dc],function(a){a.prototype=Object.create(og);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb("nostate");
this.$$state=w(c)?null:c;return this}});var ca=I("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ga();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var pg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);
else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+
this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=G(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=pg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var r=function(a,c){this.lexer=a;this.options=c};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";
r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:r.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:r.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:r.Literal,value:!0},"false":{type:r.Literal,value:!1},"null":{type:r.Literal,
value:null},undefined:{type:r.Literal,value:s},"this":{type:r.ThisExpression}}};qd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=od(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=md(e.body);d.stage="inputs";n(g,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Ba,oa,kd,Wf,ld,a);this.state=
this.stage=s;f.literal=pd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,m,q;e=e||v;if(!g&&z(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case r.Program:n(a.body,function(c,d){k.recurse(c.expression,s,s,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case r.Literal:q=this.escape(a.value);this.assign(c,q);e(q);break;case r.UnaryExpression:this.recurse(a.argument,s,s,function(a){l=a});q=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,q);e(q);break;case r.BinaryExpression:this.recurse(a.left,s,s,function(a){h=a});this.recurse(a.right,s,s,function(a){l=a});q="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,q);e(q);break;case r.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case r.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case r.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ba(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case r.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,s,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),q=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,q),d&&(d.computed=!0,d.name=l);else{Ba(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));q=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))q=k.ensureSafeObject(q);k.assign(c,
q);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case r.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),q=l+"("+m.join(",")+")",k.assign(c,q),e(c)):(l=k.nextId(),h={},m=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),s,function(a){m.push(k.ensureSafeObject(a))})});
h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),q=k.member(h.context,h.name,h.computed)+"("+m.join(",")+")"):q=l+"("+m.join(",")+")";q=k.ensureSafeObject(q);k.assign(c,q)},function(){k.assign(c,"undefined")});e(c)}));break;case r.AssignmentExpression:l=this.nextId();h={};if(!nd(a.left))throw ca("lval");this.recurse(a.left,s,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));q=k.member(h.context,h.name,
h.computed)+a.operator+l;k.assign(c,q);e(c||q)})},1);break;case r.ArrayExpression:m=[];n(a.elements,function(a){k.recurse(a,k.nextId(),s,function(a){m.push(a)})});q="["+m.join(",")+"]";this.assign(c,q);e(q);break;case r.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),s,function(c){m.push(k.escape(a.key.type===r.Identifier?a.key.name:""+a.key.value)+":"+c)})});q="{"+m.join(",")+"}";this.assign(c,q);e(q);break;case r.ThisExpression:this.assign(c,"s");e("s");break;case r.NGValueParameter:this.assign(c,
"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=od(e))g=this.recurse(f);f=md(e.body);var h;f&&(h=[],n(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=pd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,c);case r.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case r.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case r.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case r.Identifier:return Ba(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case r.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ba(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case r.CallExpression:return h=[],n(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var n=[],r=0;r<h.length;++r)n.push(h[r](a,d,e,g));a=f.apply(s,n,g);return c?{context:s,name:s,value:a}:a}:function(a,d,e,q){var n=f(a,d,e,q),r;if(null!=n.value){oa(n.context,g.expression);kd(n.value,g.expression);r=[];for(var s=0;s<h.length;++s)r.push(oa(h[s](a,d,e,q),
g.expression));r=oa(n.value.apply(n.context,r),g.expression)}return c?{value:r}:r};case r.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,q){var n=e(a,d,h,q);a=f(a,d,h,q);oa(n.value,g.expression);n.context[n.name]=a;return c?{value:a}:a};case r.ArrayExpression:return h=[],n(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],n=0;n<h.length;++n)g.push(h[n](a,d,e,f));return c?{value:g}:g};case r.ObjectExpression:return h=[],n(a.properties,
function(a){h.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},n=0;n<h.length;++n)g[h[n].key]=h[n].value(a,d,e,f);return c?{value:g}:g};case r.ThisExpression:return function(a){return c?{value:a}:a};case r.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=z(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=z(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=ld(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(z(l)?l:0)-(z(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:s,name:s,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:s;c&&oa(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var m=a(g,h,l,k),n,t;null!=m&&(n=c(g,h,l,k),Ba(n,f),e&&1!==e&&m&&!m[n]&&(m[n]={}),t=m[n],oa(t,f));return d?{context:m,name:n,value:t}:t}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,m){h=a(h,l,k,m);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:s;(d||Fb(c))&&oa(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new r(this.lexer);this.astCompiler=d.csp?new rd(this.ast,c):new qd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Xf=Object.prototype.valueOf,Ca=I("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ea=I("$compile"),Y=W.createElement("a"),vd=Aa(O.location.href);wd.$inject=["$document"];Kc.$inject=["$provide"];xd.$inject=["$locale"];zd.$inject=["$locale"];
var Cd=".",gg={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":
"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},fg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,eg=/^\-?\d+$/;yd.$inject=["$locale"];var bg=ra(G),cg=ra(qb);Ad.$inject=["$parse"];var he=ra({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===ta.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),rb={};n(zb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=xa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});rb[e]=function(){return{restrict:"A",priority:100,link:f}}}});n(Tc,function(a,c){rb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(ig))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=xa("ng-"+a);rb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ta.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ta&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,
$setDirty:v,$setPristine:v,$setSubmitted:v};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fd,compile:function(d,e){d.addClass(Ua).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",
function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var n=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,s,k.$name),n.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){n.$removeControl(k);f&&Eb(a,e[f],s,k.$name);Q(k,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),hg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,qg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
rg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,sg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);kc(e)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,
"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,c){if(da(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Dd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Hd(a,
c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:sg.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb("numfmt",a);a=a.toString()}return a});if(z(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||w(h)||a>=h};d.$observe("min",function(a){z(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:s;e.$validate()})}if(z(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
w(l)||a<=l};d.$observe("max",function(a){z(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:s;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);kc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||qg.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);kc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||rg.test(d)}},radio:function(a,c,d,e){w(d.name)&&c.attr("name",++mb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Id(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Id(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:v,
button:v,submit:v,reset:v,file:v},Ec=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Sd[G(h.type)]||Sd.text)(f,g,h,l[0],c,a,d,e)}}}}],tg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return tg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===s?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===s?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=ra({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],Jc={},ug={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};ug[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",
function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=pb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:$.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,r,s){var w=0,u,p,x,v=function(){p&&(p.remove(),p=null);u&&(u.$destroy(),u=null);x&&(d.leave(x).then(function(){p=null}),p=x,x=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!z(k)||k&&!f.$eval(k)||c()},n=++w;e?(a(e,!0).then(function(a){if(n===w){var c=f.$new();r.template=a;a=s(c,function(a){v();d.enter(a,null,g).then(h)});u=c;x=
a;u.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){n===w&&(v(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(v(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,
c,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!w(a)){var c=[];a&&n(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return K(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Jd="ng-invalid",Ua="ng-pristine",Jb="ng-dirty",Ld="ng-pending",Lb=new I("ngModel"),vg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=s;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=m(d.name||"",!1)(a);var q=f(d.ngModel),
r=q.assign,y=q,C=r,N=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");y=function(a){var d=q(a);E(d)&&(d=c(a));return d};C=function(a,c){E(q(a))?g(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!q.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=v;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};var x=e.inheritedData("$formController")||Ib,A=0;Gd({ctrl:this,$element:e,set:function(a,c){a[c]=
!0},unset:function(a,c){delete a[c]},parentForm:x,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Ua)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Ua);g.addClass(e,Jb);x.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);
p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:s,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,
function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!E(k.then))throw Lb("$asyncValidators",k);g(h,s);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===A&&p.$setValidity(a,c)}function h(a){l===A&&d(a)}A++;var l=A;(function(){var a=p.$$parserName||"parse";if(u===s)g(a,null);else return u||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,
c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(N);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=w(c)?s:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),w(c)){u=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=y(a));var e=
p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:s,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){C(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};
this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&z(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=y(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;u=s;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=
p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:vg,priority:1,compile:function(c){c.addClass(Ua).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,
e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],wg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(wg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),xg=I("ngOptions"),yg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=
d;this.group=e;this.disabled=g}var m=a.match(yg);if(!m)throw xg("iexp",a,va(d));var n=m[5]||m[7],r=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];d=c(m[2]?m[1]:n);var w=a&&c(a)||d,v=s&&c(s),u=s?function(a,c){return v(e,c)}:function(a){return Fa(a)},p=function(a,c){return u(a,D(a,c))},x=c(m[2]||m[1]),A=c(m[3]||""),z=c(m[4]||""),B=c(m[8]),M={},D=r?function(a,c){M[r]=c;M[n]=a;return M}:function(a){M[n]=a;return M};return{trackBy:s,getTrackByValue:p,getWatchables:c(B,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){if("$"!==
d.charAt(0)){var f=D(a[d],d);d=u(a[d],f);c.push(d);if(m[2]||m[1])d=x(e,f),c.push(d);m[4]&&(f=z(e,f),c.push(f))}});return c}),getOptions:function(){var a=[],c={},d=B(e)||[],g;if(!r&&Da(d))g=d;else{g=[];for(var h in d)d.hasOwnProperty(h)&&"$"!==h.charAt(0)&&g.push(h)}h=g.length;for(var m=0;m<h;m++){var n=d===g?m:g[m],q=D(d[n],n),v=w(e,q),n=u(v,q),N=x(e,q),M=A(e,q),q=z(e,q),v=new f(n,v,N,M,q);a.push(v);c[n]=v}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[p(a)]},getViewValueFromOption:function(a){return s?
$.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function q(a,c,d,e){c&&G(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}
function s(a){var c=p&&p[0],d=M&&M[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function w(){var a=D&&u.readValue();D=E.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=s(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=q(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=q(g.groupElement,g.currentOptionElement,"option",e),m(a,k),g.currentOptionElement=k.nextSibling):(k=q(h[0],d,"option",
e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var g=u.readValue();(E.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var u=k[0];k=l.multiple;for(var p,x=0,z=h.children(),H=z.length;x<H;x++)if(""===z[x].value){p=z.eq(x);break}var B=!!p,M=A(e.cloneNode(!1));M.val("?");var D,E=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];n(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},E.trackBy&&c.$watchCollection(function(){if(K(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&
(M.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(M.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(M),h.val("?"),M.prop("selected",!0),M.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?(B||p.remove(),M.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&c.$watch(function(){return E.getTrackByValue(v.$viewValue)},
function(){v.$render()}));B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=A(e.cloneNode(!1));w();c.$watchCollection(E.getWatchables,w)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var m=l.count,q=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,s=g.$eval(q)||{},C={},z=c.startSymbol(),u=c.endSymbol(),p=z+m+"-"+r+u,x=$.noop,A;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+G(d[2]),s[d]=h.attr(l.$attr[c]))});
n(s,function(a,d){C[d]=c(a.replace(e,p))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===A||f&&V(A)&&isNaN(A)||(x(),f=C[e],w(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+q),x=v,k()):x=g.$watch(f,k),A=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=I("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],q=k[2],r=k[3],v=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var w=k[3]||k[1],z=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var u,p,x,E,H={$id:Fa};v?u=a(v):(x=function(a,c){return Fa(c)},E=function(a){return a});return function(a,f,g,k,m){u&&(p=function(c,d,e){z&&(H[z]=c);H[w]=d;H.$index=e;return u(a,H)});var v=ga();a.$watchCollection(q,function(g){var k,q,u=f[0],y,D=ga(),H,F,L,I,K,G,O;r&&(a[r]=g);if(Da(g))K=g,q=p||x;else for(O in q=p||E,K=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&K.push(O);H=K.length;O=Array(H);for(k=0;k<H;k++)if(F=g===K?k:K[k],L=g[F],I=q(F,L,k),v[I])G=v[I],delete v[I],D[I]=G,O[k]=G;else{if(D[I])throw n(O,
function(a){a&&a.scope&&(v[a.id]=a)}),d("dupes",h,I,L);O[k]={id:I,scope:s,clone:s};D[I]=!0}for(y in v){G=v[y];I=pb(G.clone);c.leave(I);if(I[0].parentNode)for(k=0,q=I.length;k<q;k++)I[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<H;k++)if(F=g===K?k:K[k],L=g[F],G=O[k],G.scope){y=u;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);G.clone[0]!=y&&c.move(pb(G.clone),null,A(u));u=G.clone[G.clone.length-1];e(G.scope,k,w,L,z,F,H)}else m(function(a,d){G.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(u));u=f;G.clone=a;D[G.id]=G;e(G.scope,k,w,L,z,F,H)});v=D})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=pb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&n(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],zg={$setViewValue:v,$render:v},Ag=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Sa;e.ngModelCtrl=zg;e.unknownOption=A(W.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ra(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=s)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ag,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});
if(d.multiple){g.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Sa(a);n(c.find("option"),function(a){a.selected=z(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",
priority:100,compile:function(d,e){if(w(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=ra({restrict:"E",
terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){L(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",g,a,va(c));f=a||s;e.$validate()});
e.$validators.pattern=function(a){return e.$isEmpty(a)||w(f)||f.test(a)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=X(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=X(a)||0;e.$validate()});e.$validators.minlength=function(a,
c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(be(),de($),A(W).ready(function(){Yd(W,zc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);

/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F, t, W) {
    'use strict'; function ua(a, b, c) { if (!a) throw ngMinErr("areq", b || "?", c || "required"); return a } function va(a, b) { if (!a && !b) return ""; if (!a) return b; if (!b) return a; X(a) && (a = a.join(" ")); X(b) && (b = b.join(" ")); return a + " " + b } function Ea(a) { var b = {}; a && (a.to || a.from) && (b.to = a.to, b.from = a.from); return b } function ba(a, b, c) { var d = ""; a = X(a) ? a : a && U(a) && a.length ? a.split(/\s+/) : []; u(a, function(a, s) { a && 0 < a.length && (d += 0 < s ? " " : "", d += c ? b + a : a + b) }); return d } function Fa(a) {
        if (a instanceof G) switch (a.length) {
            case 0: return [];
            case 1: if (1 === a[0].nodeType) return a; break; default: return G(ka(a))
        } if (1 === a.nodeType) return G(a)
    } function ka(a) { if (!a[0]) return a; for (var b = 0; b < a.length; b++) { var c = a[b]; if (1 == c.nodeType) return c } } function Ga(a, b, c) { u(b, function(b) { a.addClass(b, c) }) } function Ha(a, b, c) { u(b, function(b) { a.removeClass(b, c) }) } function ha(a) { return function(b, c) { c.addClass && (Ga(a, b, c.addClass), c.addClass = null); c.removeClass && (Ha(a, b, c.removeClass), c.removeClass = null) } } function ia(a) {
        a = a || {}; if (!a.$$prepared) {
            var b = a.domOperation ||
            H; a.domOperation = function() { a.$$domOperationFired = !0; b(); b = H }; a.$$prepared = !0
        } return a
    } function ca(a, b) { wa(a, b); xa(a, b) } function wa(a, b) { b.from && (a.css(b.from), b.from = null) } function xa(a, b) { b.to && (a.css(b.to), b.to = null) } function R(a, b, c) { var d = (b.addClass || "") + " " + (c.addClass || ""), e = (b.removeClass || "") + " " + (c.removeClass || ""); a = Ia(a.attr("class"), d, e); ya(b, c); b.addClass = a.addClass ? a.addClass : null; b.removeClass = a.removeClass ? a.removeClass : null; return b } function Ia(a, b, c) {
        function d(a) {
            U(a) && (a = a.split(" "));
            var b = {}; u(a, function(a) { a.length && (b[a] = !0) }); return b
        } var e = {}; a = d(a); b = d(b); u(b, function(a, b) { e[b] = 1 }); c = d(c); u(c, function(a, b) { e[b] = 1 === e[b] ? null : -1 }); var s = { addClass: "", removeClass: "" }; u(e, function(b, c) { var d, e; 1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]); e && (s[d].length && (s[d] += " "), s[d] += c) }); return s
    } function z(a) { return a instanceof t.element ? a[0] : a } function za(a, b, c) {
        var d = Object.create(null), e = a.getComputedStyle(b) || {}; u(c, function(a, b) {
            var c = e[a]; if (c) {
                var k = c.charAt(0);
                if ("-" === k || "+" === k || 0 <= k) c = Ja(c); 0 === c && (c = null); d[b] = c
            }
        }); return d
    } function Ja(a) { var b = 0; a = a.split(/\s*,\s*/); u(a, function(a) { "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)); a = parseFloat(a) || 0; b = b ? Math.max(a, b) : a }); return b } function la(a) { return 0 === a || null != a } function Aa(a, b) { var c = O, d = a + "s"; b ? c += "Duration" : d += " linear all"; return [c, d] } function ja(a, b) { var c = b ? "-" + b + "s" : ""; da(a, [ea, c]); return [ea, c] } function ma(a, b) { var c = b ? "paused" : "", d = V + "PlayState"; da(a, [d, c]); return [d, c] } function da(a,
    b) { a.style[b[0]] = b[1] } function Ba() { var a = Object.create(null); return { flush: function() { a = Object.create(null) }, count: function(b) { return (b = a[b]) ? b.total : 0 }, get: function(b) { return (b = a[b]) && b.value }, put: function(b, c) { a[b] ? a[b].total++ : a[b] = { total: 1, value: c } } } } var H = t.noop, ya = t.extend, G = t.element, u = t.forEach, X = t.isArray, U = t.isString, na = t.isObject, Ka = t.isUndefined, La = t.isDefined, Ca = t.isFunction, oa = t.isElement, O, pa, V, qa; F.ontransitionend === W && F.onwebkittransitionend !== W ? (O = "WebkitTransition", pa = "webkitTransitionEnd transitionend") :
    (O = "transition", pa = "transitionend"); F.onanimationend === W && F.onwebkitanimationend !== W ? (V = "WebkitAnimation", qa = "webkitAnimationEnd animationend") : (V = "animation", qa = "animationend"); var ra = V + "Delay", sa = V + "Duration", ea = O + "Delay"; F = O + "Duration"; var Ma = { transitionDuration: F, transitionDelay: ea, transitionProperty: O + "Property", animationDuration: sa, animationDelay: ra, animationIterationCount: V + "IterationCount" }, Na = { transitionDuration: F, transitionDelay: ea, animationDuration: sa, animationDelay: ra }; t.module("ngAnimate",
    []).directive("ngAnimateChildren", [function() { return function(a, b, c) { a = c.ngAnimateChildren; t.isString(a) && 0 === a.length ? b.data("$$ngAnimateChildren", !0) : c.$observe("ngAnimateChildren", function(a) { b.data("$$ngAnimateChildren", "on" === a || "true" === a) }) } }]).factory("$$rAFMutex", ["$$rAF", function(a) { return function() { var b = !1; a(function() { b = !0 }); return function(c) { b ? c() : a(c) } } }]).factory("$$rAFScheduler", ["$$rAF", function(a) {
        function b(a) { d.push([].concat(a)); c() } function c() {
            if (d.length) {
                for (var b = [], n =
                0; n < d.length; n++) { var h = d[n]; h.shift()(); h.length && b.push(h) } d = b; e || a(function() { e || c() })
            }
        } var d = [], e; b.waitUntilQuiet = function(b) { e && e(); e = a(function() { e = null; b(); c() }) }; return b
    }]).factory("$$AnimateRunner", ["$q", "$$rAFMutex", function(a, b) {
        function c(a) { this.setHost(a); this._doneCallbacks = []; this._runInAnimationFrame = b(); this._state = 0 } c.chain = function(a, b) { function c() { if (n === a.length) b(!0); else a[n](function(a) { !1 === a ? b(!1) : (n++, c()) }) } var n = 0; c() }; c.all = function(a, b) {
            function c(s) {
                h = h && s; ++n ===
                a.length && b(h)
            } var n = 0, h = !0; u(a, function(a) { a.done(c) })
        }; c.prototype = {
            setHost: function(a) { this.host = a || {} }, done: function(a) { 2 === this._state ? a() : this._doneCallbacks.push(a) }, progress: H, getPromise: function() { if (!this.promise) { var b = this; this.promise = a(function(a, c) { b.done(function(b) { !1 === b ? c() : a() }) }) } return this.promise }, then: function(a, b) { return this.getPromise().then(a, b) }, "catch": function(a) { return this.getPromise()["catch"](a) }, "finally": function(a) { return this.getPromise()["finally"](a) }, pause: function() {
                this.host.pause &&
                this.host.pause()
            }, resume: function() { this.host.resume && this.host.resume() }, end: function() { this.host.end && this.host.end(); this._resolve(!0) }, cancel: function() { this.host.cancel && this.host.cancel(); this._resolve(!1) }, complete: function(a) { var b = this; 0 === b._state && (b._state = 1, b._runInAnimationFrame(function() { b._resolve(a) })) }, _resolve: function(a) { 2 !== this._state && (u(this._doneCallbacks, function(b) { b(a) }), this._doneCallbacks.length = 0, this._state = 2) }
        }; return c
    }]).provider("$$animateQueue", ["$animateProvider",
    function(a) {
        function b(a, b, c, h) { return d[a].some(function(a) { return a(b, c, h) }) } function c(a, b) { a = a || {}; var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length; return b ? c && d : c || d } var d = this.rules = { skip: [], cancel: [], join: [] }; d.join.push(function(a, b, d) { return !b.structural && c(b.options) }); d.skip.push(function(a, b, d) { return !b.structural && !c(b.options) }); d.skip.push(function(a, b, c) { return "leave" == c.event && b.structural }); d.skip.push(function(a, b, c) { return c.structural && !b.structural }); d.cancel.push(function(a,
        b, c) { return c.structural && b.structural }); d.cancel.push(function(a, b, c) { return 2 === c.state && b.structural }); d.cancel.push(function(a, b, c) { a = b.options; c = c.options; return a.addClass && a.addClass === c.removeClass || a.removeClass && a.removeClass === c.addClass }); this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", function(d, s, n, h, k, D, A, Z, I) {
            function w(a, b) {
                var c = z(a), f = [], m = l[b]; m && u(m, function(a) { a.node.contains(c) && f.push(a.callback) });
                return f
            } function B(a, b, c, f) { d(function() { u(w(b, a), function(a) { a(b, c, f) }) }) } function r(a, S, p) {
                function d(b, c, f, p) { B(c, a, f, p); b.progress(c, f, p) } function g(b) { Da(a, p); ca(a, p); p.domOperation(); l.complete(!b) } var P, E; if (a = Fa(a)) P = z(a), E = a.parent(); p = ia(p); var l = new A; if (!P) return g(), l; X(p.addClass) && (p.addClass = p.addClass.join(" ")); X(p.removeClass) && (p.removeClass = p.removeClass.join(" ")); p.from && !na(p.from) && (p.from = null); p.to && !na(p.to) && (p.to = null); var e = [P.className, p.addClass, p.removeClass].join(" ");
                if (!v(e)) return g(), l; var M = 0 <= ["enter", "move", "leave"].indexOf(S), h = !x || L.get(P), e = !h && m.get(P) || {}, k = !!e.state; h || k && 1 == e.state || (h = !ta(a, E, S)); if (h) return g(), l; M && K(a); h = { structural: M, element: a, event: S, close: g, options: p, runner: l }; if (k) {
                    if (b("skip", a, h, e)) { if (2 === e.state) return g(), l; R(a, e.options, p); return e.runner } if (b("cancel", a, h, e)) 2 === e.state ? e.runner.end() : e.structural ? e.close() : R(a, h.options, e.options); else if (b("join", a, h, e)) if (2 === e.state) R(a, p, {}); else return S = h.event = e.event, p = R(a,
                    e.options, h.options), l
                } else R(a, p, {}); (k = h.structural) || (k = "animate" === h.event && 0 < Object.keys(h.options.to || {}).length || c(h.options)); if (!k) return g(), C(a), l; M && f(E); var r = (e.counter || 0) + 1; h.counter = r; ga(a, 1, h); s.$$postDigest(function() {
                    var b = m.get(P), v = !b, b = b || {}, e = a.parent() || [], E = 0 < e.length && ("animate" === b.event || b.structural || c(b.options)); if (v || b.counter !== r || !E) { v && (Da(a, p), ca(a, p)); if (v || M && b.event !== S) p.domOperation(), l.end(); E || C(a) } else S = !b.structural && c(b.options, !0) ? "setClass" : b.event,
                    b.structural && f(e), ga(a, 2), b = D(a, S, b.options), b.done(function(b) { g(!b); (b = m.get(P)) && b.counter === r && C(z(a)); d(l, S, "close", {}) }), l.setHost(b), d(l, S, "start", {})
                }); return l
            } function K(a) { a = z(a).querySelectorAll("[data-ng-animate]"); u(a, function(a) { var b = parseInt(a.getAttribute("data-ng-animate")), c = m.get(a); switch (b) { case 2: c.runner.end(); case 1: c && m.remove(a) } }) } function C(a) { a = z(a); a.removeAttribute("data-ng-animate"); m.remove(a) } function E(a, b) { return z(a) === z(b) } function f(a) {
                a = z(a); do {
                    if (!a || 1 !==
                    a.nodeType) break; var b = m.get(a); if (b) { var f = a; !b.structural && c(b.options) && (2 === b.state && b.runner.end(), C(f)) } a = a.parentNode
                } while (1)
            } function ta(a, b, c) { var f = c = !1, d = !1, v; for ((a = a.data("$ngAnimatePin")) && (b = a) ; b && b.length;) { f || (f = E(b, n)); a = b[0]; if (1 !== a.nodeType) break; var e = m.get(a) || {}; d || (d = e.structural || L.get(a)); if (Ka(v) || !0 === v) a = b.data("$$ngAnimateChildren"), La(a) && (v = a); if (d && !1 === v) break; f || (f = E(b, n), f || (a = b.data("$ngAnimatePin")) && (b = a)); c || (c = E(b, g)); b = b.parent() } return (!d || v) && f && c } function ga(a,
            b, c) { c = c || {}; c.state = b; a = z(a); a.setAttribute("data-ng-animate", b); c = (b = m.get(a)) ? ya(b, c) : c; m.put(a, c) } var m = new k, L = new k, x = null, M = s.$watch(function() { return 0 === Z.totalPendingRequests }, function(a) { a && (M(), s.$$postDigest(function() { s.$$postDigest(function() { null === x && (x = !0) }) })) }), g = G(h[0].body), l = {}, P = a.classNameFilter(), v = P ? function(a) { return P.test(a) } : function() { return !0 }, Da = ha(I); return {
                on: function(a, b, c) { b = ka(b); l[a] = l[a] || []; l[a].push({ node: b, callback: c }) }, off: function(a, b, c) {
                    function f(a,
                    b, c) { var d = ka(b); return a.filter(function(a) { return !(a.node === d && (!c || a.callback === c)) }) } var d = l[a]; d && (l[a] = 1 === arguments.length ? null : f(d, b, c))
                }, pin: function(a, b) { ua(oa(a), "element", "not an element"); ua(oa(b), "parentElement", "not an element"); a.data("$ngAnimatePin", b) }, push: function(a, b, c, f) { c = c || {}; c.domOperation = f; return r(a, b, c) }, enabled: function(a, b) { var c = arguments.length; if (0 === c) b = !!x; else if (oa(a)) { var f = z(a), d = L.get(f); 1 === c ? b = !d : (b = !!b) ? d && L.remove(f) : L.put(f, !0) } else b = x = !!a; return b }
            }
        }]
    }]).provider("$$animation",
    ["$animateProvider", function(a) {
        function b(a) { return a.data("$$animationRunner") } var c = this.drivers = []; this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$rAFScheduler", function(a, e, s, n, h) {
            var k = [], D = ha(a), A = 0, Z = 0, I = []; return function(w, B, r) {
                function K(a) { a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]"); var b = []; u(a, function(a) { var c = a.getAttribute("ng-animate-ref"); c && c.length && b.push(a) }); return b } function C(a) {
                    var b = [], c = {}; u(a, function(a, f) {
                        var d = z(a.element),
                        m = 0 <= ["enter", "move"].indexOf(a.event), d = a.structural ? K(d) : []; if (d.length) { var g = m ? "to" : "from"; u(d, function(a) { var b = a.getAttribute("ng-animate-ref"); c[b] = c[b] || {}; c[b][g] = { animationID: f, element: G(a) } }) } else b.push(a)
                    }); var f = {}, d = {}; u(c, function(c, m) {
                        var g = c.from, e = c.to; if (g && e) {
                            var l = a[g.animationID], h = a[e.animationID], x = g.animationID.toString(); if (!d[x]) {
                                var B = d[x] = {
                                    structural: !0, beforeStart: function() { l.beforeStart(); h.beforeStart() }, close: function() { l.close(); h.close() }, classes: E(l.classes, h.classes),
                                    from: l, to: h, anchors: []
                                }; B.classes.length ? b.push(B) : (b.push(l), b.push(h))
                            } d[x].anchors.push({ out: g.element, "in": e.element })
                        } else g = g ? g.animationID : e.animationID, e = g.toString(), f[e] || (f[e] = !0, b.push(a[g]))
                    }); return b
                } function E(a, b) { a = a.split(" "); b = b.split(" "); for (var c = [], f = 0; f < a.length; f++) { var d = a[f]; if ("ng-" !== d.substring(0, 3)) for (var g = 0; g < b.length; g++) if (d === b[g]) { c.push(d); break } } return c.join(" ") } function f(a) { for (var b = c.length - 1; 0 <= b; b--) { var f = c[b]; if (s.has(f) && (f = s.get(f)(a))) return f } }
                function ta(a, c) { a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c) } function ga() { var a = b(w); !a || "leave" === B && r.$$domOperationFired || a.end() } function m(b) { w.off("$destroy", ga); w.removeData("$$animationRunner"); D(w, r); ca(w, r); r.domOperation(); g && a.removeClass(w, g); w.removeClass("ng-animate"); x.complete(!b) } r = ia(r); var L = 0 <= ["enter", "move", "leave"].indexOf(B), x = new n({ end: function() { m() }, cancel: function() { m(!0) } }); if (!c.length) return m(), x; w.data("$$animationRunner",
                x); var M = va(w.attr("class"), va(r.addClass, r.removeClass)), g = r.tempClasses; g && (M += " " + g, r.tempClasses = null); var l; L || (l = A, A += 1); k.push({ element: w, classes: M, event: B, classBasedIndex: l, structural: L, options: r, beforeStart: function() { w.addClass("ng-animate"); g && a.addClass(w, g) }, close: m }); w.on("$destroy", ga); if (1 < k.length) return x; e.$$postDigest(function() {
                    Z = A; A = 0; I.length = 0; var a = []; u(k, function(c) { b(c.element) && a.push(c) }); k.length = 0; u(C(a), function(a) {
                        function c() {
                            a.beforeStart(); var d, g = a.close, e = a.anchors ?
                            a.from.element || a.to.element : a.element; b(e) && z(e).parentNode && (e = f(a)) && (d = e.start); d ? (d = d(), d.done(function(a) { g(!a) }), ta(a, d)) : g()
                        } a.structural ? c() : (I.push({ node: z(a.element), fn: c }), a.classBasedIndex === Z - 1 && (I = I.sort(function(a, b) { return b.node.contains(a.node) }).map(function(a) { return a.fn }), h(I)))
                    })
                }); return x
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function(a) {
        var b = Ba(), c = Ba(); this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$document", "$sniffer", "$$rAFScheduler", function(a,
        e, s, n, h, k, D) {
            function A(a, b) { var c = a.parentNode; return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++r)) + "-" + a.getAttribute("class") + "-" + b } function Z(h, f, B, k) { var m; 0 < b.count(B) && (m = c.get(B), m || (f = ba(f, "-stagger"), e.addClass(h, f), m = za(a, h, k), m.animationDuration = Math.max(m.animationDuration, 0), m.transitionDuration = Math.max(m.transitionDuration, 0), e.removeClass(h, f), c.put(B, m))); return m || {} } function I(a) {
                C.push(a); D.waitUntilQuiet(function() {
                    b.flush(); c.flush(); for (var a = K.offsetWidth + 1, d = 0; d <
                    C.length; d++) C[d](a); C.length = 0
                })
            } function w(c, f, e) { f = b.get(e); f || (f = za(a, c, Ma), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1)); b.put(e, f); c = f; e = c.animationDelay; f = c.transitionDelay; c.maxDelay = e && f ? Math.max(e, f) : e || f; c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration); return c } var B = ha(e), r = 0, K = z(h).body, C = []; return function(a, c) {
                function d() { m() } function h() { m(!0) } function m(b) {
                    if (!(K || C && D)) {
                        K = !0; D = !1; e.removeClass(a, Y); e.removeClass(a,
                        W); ma(g, !1); ja(g, !1); u(l, function(a) { g.style[a[0]] = "" }); B(a, c); ca(a, c); if (c.onDone) c.onDone(); p && p.complete(!b)
                    }
                } function L(a) { q.blockTransition && ja(g, a); q.blockKeyframeAnimation && ma(g, !!a) } function x() { p = new s({ end: d, cancel: h }); m(); return { $$willAnimate: !1, start: function() { return p }, end: d } } function M() {
                    function b() {
                        if (!K) {
                            L(!1); u(l, function(a) { g.style[a[0]] = a[1] }); B(a, c); e.addClass(a, W); if (q.recalculateTimingStyles) {
                                fa = g.className + " " + Y; $ = A(g, fa); y = w(g, fa, $); Q = y.maxDelay; H = Math.max(Q, 0); J = y.maxDuration;
                                if (0 === J) { m(); return } q.hasTransitions = 0 < y.transitionDuration; q.hasAnimations = 0 < y.animationDuration
                            } if (q.applyTransitionDelay || q.applyAnimationDelay) { Q = "boolean" !== typeof c.delay && la(c.delay) ? parseFloat(c.delay) : Q; H = Math.max(Q, 0); var k; q.applyTransitionDelay && (y.transitionDelay = Q, k = [ea, Q + "s"], l.push(k), g.style[k[0]] = k[1]); q.applyAnimationDelay && (y.animationDelay = Q, k = [ra, Q + "s"], l.push(k), g.style[k[0]] = k[1]) } F = 1E3 * H; G = 1E3 * J; if (c.easing) {
                                var r = c.easing; q.hasTransitions && (k = O + "TimingFunction", l.push([k,
                                r]), g.style[k] = r); q.hasAnimations && (k = V + "TimingFunction", l.push([k, r]), g.style[k] = r)
                            } y.transitionDuration && p.push(pa); y.animationDuration && p.push(qa); x = Date.now(); a.on(p.join(" "), h); n(d, F + 1.5 * G); xa(a, c)
                        }
                    } function d() { m() } function h(a) { a.stopPropagation(); var b = a.originalEvent || a; a = b.$manualTimeStamp || b.timeStamp || Date.now(); b = parseFloat(b.elapsedTime.toFixed(3)); Math.max(a - x, 0) >= F && b >= J && (C = !0, m()) } if (!K) if (g.parentNode) {
                        var x, p = [], k = function(a) {
                            if (C) D && a && (D = !1, m()); else if (D = !a, y.animationDuration) if (a =
                            ma(g, D), D) l.push(a); else { var b = l, c = b.indexOf(a); 0 <= a && b.splice(c, 1) }
                        }, r = 0 < U && (y.transitionDuration && 0 === T.transitionDuration || y.animationDuration && 0 === T.animationDuration) && Math.max(T.animationDelay, T.transitionDelay); r ? n(b, Math.floor(r * U * 1E3), !1) : b(); t.resume = function() { k(!0) }; t.pause = function() { k(!1) }
                    } else m()
                } var g = z(a); if (!g || !g.parentNode) return x(); c = ia(c); var l = [], r = a.attr("class"), v = Ea(c), K, D, C, p, t, H, F, J, G; if (0 === c.duration || !k.animations && !k.transitions) return x(); var aa = c.event && X(c.event) ?
                c.event.join(" ") : c.event, R = "", N = ""; aa && c.structural ? R = ba(aa, "ng-", !0) : aa && (R = aa); c.addClass && (N += ba(c.addClass, "-add")); c.removeClass && (N.length && (N += " "), N += ba(c.removeClass, "-remove")); c.applyClassesEarly && N.length && (B(a, c), N = ""); var Y = [R, N].join(" ").trim(), fa = r + " " + Y, W = ba(Y, "-active"), r = v.to && 0 < Object.keys(v.to).length; if (!(0 < (c.keyframeStyle || "").length || r || Y)) return x(); var $, T; 0 < c.stagger ? (v = parseFloat(c.stagger), T = { transitionDelay: v, animationDelay: v, transitionDuration: 0, animationDuration: 0 }) :
                ($ = A(g, fa), T = Z(g, Y, $, Na)); e.addClass(a, Y); c.transitionStyle && (v = [O, c.transitionStyle], da(g, v), l.push(v)); 0 <= c.duration && (v = 0 < g.style[O].length, v = Aa(c.duration, v), da(g, v), l.push(v)); c.keyframeStyle && (v = [V, c.keyframeStyle], da(g, v), l.push(v)); var U = T ? 0 <= c.staggerIndex ? c.staggerIndex : b.count($) : 0; (aa = 0 === U) && ja(g, 9999); var y = w(g, fa, $), Q = y.maxDelay; H = Math.max(Q, 0); J = y.maxDuration; var q = {}; q.hasTransitions = 0 < y.transitionDuration; q.hasAnimations = 0 < y.animationDuration; q.hasTransitionAll = q.hasTransitions &&
                "all" == y.transitionProperty; q.applyTransitionDuration = r && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions); q.applyAnimationDuration = c.duration && q.hasAnimations; q.applyTransitionDelay = la(c.delay) && (q.applyTransitionDuration || q.hasTransitions); q.applyAnimationDelay = la(c.delay) && q.hasAnimations; q.recalculateTimingStyles = 0 < N.length; if (q.applyTransitionDuration || q.applyAnimationDuration) J = c.duration ? parseFloat(c.duration) : J, q.applyTransitionDuration && (q.hasTransitions = !0, y.transitionDuration =
                J, v = 0 < g.style[O + "Property"].length, l.push(Aa(J, v))), q.applyAnimationDuration && (q.hasAnimations = !0, y.animationDuration = J, l.push([sa, J + "s"])); if (0 === J && !q.recalculateTimingStyles) return x(); null == c.duration && 0 < y.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || aa); F = 1E3 * H; G = 1E3 * J; c.skipBlocking || (q.blockTransition = 0 < y.transitionDuration, q.blockKeyframeAnimation = 0 < y.animationDuration && 0 < T.animationDelay && 0 === T.animationDuration); wa(a, c); q.blockTransition || ja(g, !1); L(J); return {
                    $$willAnimate: !0,
                    end: d, start: function() { if (!K) return t = { end: d, cancel: h, resume: null, pause: null }, p = new s(t), I(M), p }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function(a) {
        a.drivers.push("$$animateCssDriver"); this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$document", "$sniffer", function(a, c, d, e, s, n) {
            function h(a) { return a.replace(/\bng-\S+\b/g, "") } function k(a, b) { U(a) && (a = a.split(" ")); U(b) && (b = b.split(" ")); return a.filter(function(a) { return -1 === b.indexOf(a) }).join(" ") } function D(c,
            e, A) {
                function D(a) { var b = {}, c = z(a).getBoundingClientRect(); u(["width", "height", "top", "left"], function(a) { var d = c[a]; switch (a) { case "top": d += I.scrollTop; break; case "left": d += I.scrollLeft } b[a] = Math.floor(d) + "px" }); return b } function s() { var c = h(A.attr("class") || ""), d = k(c, t), c = k(t, c), d = a(n, { to: D(A), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 }); return d.$$willAnimate ? d : null } function f() { n.remove(); e.removeClass("ng-animate-shim"); A.removeClass("ng-animate-shim") } var n = G(z(e).cloneNode(!0)),
                t = h(n.attr("class") || ""); e.addClass("ng-animate-shim"); A.addClass("ng-animate-shim"); n.addClass("ng-anchor"); w.append(n); var m; c = function() { var c = a(n, { addClass: "ng-anchor-out", delay: !0, from: D(e) }); return c.$$willAnimate ? c : null }(); if (!c && (m = s(), !m)) return f(); var L = c || m; return { start: function() { function a() { c && c.end() } var b, c = L.start(); c.done(function() { c = null; if (!m && (m = s())) return c = m.start(), c.done(function() { c = null; f(); b.complete() }), c; f(); b.complete() }); return b = new d({ end: a, cancel: a }) } }
            } function A(a,
            b, c, e) { var h = t(a), f = t(b), k = []; u(e, function(a) { (a = D(c, a.out, a["in"])) && k.push(a) }); if (h || f || 0 !== k.length) return { start: function() { function a() { u(b, function(a) { a.end() }) } var b = []; h && b.push(h.start()); f && b.push(f.start()); u(k, function(a) { b.push(a.start()) }); var c = new d({ end: a, cancel: a }); d.all(b, function(a) { c.complete(a) }); return c } } } function t(c) {
                var d = c.element, e = c.options || {}; c.structural ? (e.structural = e.applyClassesEarly = !0, e.event = c.event, "leave" === e.event && (e.onDone = e.domOperation)) : e.event = null;
                c = a(d, e); return c.$$willAnimate ? c : null
            } if (!n.animations && !n.transitions) return H; var I = z(s).body; c = z(e); var w = G(I.parentNode === c ? I : c); return function(a) { return a.from && a.to ? A(a.from, a.to, a.classes, a.anchors) : t(a) }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function(a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$rAFMutex", "$$jqLite", function(b, c, d, e) {
            function s(c) {
                c = X(c) ? c : c.split(" "); for (var d = [], e = {}, A = 0; A < c.length; A++) {
                    var n = c[A], s = a.$$registeredAnimations[n]; s && !e[n] && (d.push(b.get(s)), e[n] =
                    !0)
                } return d
            } var n = ha(e); return function(a, b, d, e) {
                function t() { e.domOperation(); n(a, e) } function z(a, b, d, e, g) { switch (d) { case "animate": b = [b, e.from, e.to, g]; break; case "setClass": b = [b, r, K, g]; break; case "addClass": b = [b, r, g]; break; case "removeClass": b = [b, K, g]; break; default: b = [b, g] } b.push(e); if (a = a.apply(a, b)) if (Ca(a.start) && (a = a.start()), a instanceof c) a.done(g); else if (Ca(a)) return a; return H } function w(a, b, d, e, g) {
                    var f = []; u(e, function(e) {
                        var h = e[g]; h && f.push(function() {
                            var e, g, f = !1, l = function(a) {
                                f ||
                                (f = !0, (g || H)(a), e.complete(!a))
                            }; e = new c({ end: function() { l() }, cancel: function() { l(!0) } }); g = z(h, a, b, d, function(a) { l(!1 === a) }); return e
                        })
                    }); return f
                } function B(a, b, d, e, g) {
                    var f = w(a, b, d, e, g); if (0 === f.length) { var h, k; "beforeSetClass" === g ? (h = w(a, "removeClass", d, e, "beforeRemoveClass"), k = w(a, "addClass", d, e, "beforeAddClass")) : "setClass" === g && (h = w(a, "removeClass", d, e, "removeClass"), k = w(a, "addClass", d, e, "addClass")); h && (f = f.concat(h)); k && (f = f.concat(k)) } if (0 !== f.length) return function(a) {
                        var b = []; f.length &&
                        u(f, function(a) { b.push(a()) }); b.length ? c.all(b, a) : a(); return function(a) { u(b, function(b) { a ? b.cancel() : b.end() }) }
                    }
                } 3 === arguments.length && na(d) && (e = d, d = null); e = ia(e); d || (d = a.attr("class") || "", e.addClass && (d += " " + e.addClass), e.removeClass && (d += " " + e.removeClass)); var r = e.addClass, K = e.removeClass, C = s(d), E, f; if (C.length) { var F, G; "leave" == b ? (G = "leave", F = "afterLeave") : (G = "before" + b.charAt(0).toUpperCase() + b.substr(1), F = b); "enter" !== b && "move" !== b && (E = B(a, b, e, C, G)); f = B(a, b, e, C, F) } if (E || f) return {
                    start: function() {
                        function b(c) {
                            n =
                            !0; t(); ca(a, e); g.complete(c)
                        } var d, k = []; E && k.push(function(a) { d = E(a) }); k.length ? k.push(function(a) { t(); a(!0) }) : t(); f && k.push(function(a) { d = f(a) }); var n = !1, g = new c({ end: function() { n || ((d || H)(void 0), b(void 0)) }, cancel: function() { n || ((d || H)(!0), b(!0)) } }); c.chain(k, b); return g
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function(a) {
        a.drivers.push("$$animateJsDriver"); this.$get = ["$$animateJs", "$$AnimateRunner", function(a, c) {
            function d(c) { return a(c.element, c.event, c.classes, c.options) }
            return function(a) { if (a.from && a.to) { var b = d(a.from), n = d(a.to); if (b || n) return { start: function() { function a() { return function() { u(d, function(a) { a.end() }) } } var d = []; b && d.push(b.start()); n && d.push(n.start()); c.all(d, function(a) { e.complete(a) }); var e = new c({ end: a(), cancel: a() }); return e } } } else return d(a) }
        }]
    }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map
(function() {
  'use strict';

  angular.module('toastr', [])
    .factory('toastr', toastr);

  toastr.$inject = ['$animate', '$injector', '$document', '$rootScope', '$sce', 'toastrConfig', '$q'];

  function toastr($animate, $injector, $document, $rootScope, $sce, toastrConfig, $q) {
    var container;
    var index = 0;
    var toasts = [];

    var previousToastMessage = '';
    var openToasts = {};

    var containerDefer = $q.defer();

    var toast = {
      clear: clear,
      error: error,
      info: info,
      remove: remove,
      success: success,
      warning: warning
    };

    return toast;

    /* Public API */
    function clear(toast) {
      if (toast) {
        remove(toast.toastId);
      } else {
        for (var i = 0; i < toasts.length; i++) {
          remove(toasts[i].toastId);
        }
      }
    }

    function error(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.error;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function info(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.info;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function success(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.success;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function warning(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.warning;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function remove(toastId, wasClicked) {
      var toast = findToast(toastId);

      if (toast && ! toast.deleting) { // Avoid clicking when fading out
        toast.deleting = true;
        toast.isOpened = false;
        $animate.leave(toast.el).then(function() {
          if (toast.scope.options.onHidden) {
            toast.scope.options.onHidden(wasClicked);
          }
          toast.scope.$destroy();
          var index = toasts.indexOf(toast);
          delete openToasts[toast.scope.message];
          toasts.splice(index, 1);
          var maxOpened = toastrConfig.maxOpened;
          if (maxOpened && toasts.length >= maxOpened) {
            toasts[maxOpened - 1].open.resolve();
          }
          if (lastToast()) {
            container.remove();
            container = null;
            containerDefer = $q.defer();
          }
        });
      }

      function findToast(toastId) {
        for (var i = 0; i < toasts.length; i++) {
          if (toasts[i].toastId === toastId) {
            return toasts[i];
          }
        }
      }

      function lastToast() {
        return !toasts.length;
      }
    }

    /* Internal functions */
    function _buildNotification(type, message, title, optionsOverride)
    {
      if (angular.isObject(title)) {
        optionsOverride = title;
        title = null;
      }

      return _notify({
        iconClass: type,
        message: message,
        optionsOverride: optionsOverride,
        title: title
      });
    }

    function _getOptions() {
      return angular.extend({}, toastrConfig);
    }

    function _createOrGetContainer(options) {
      if(container) { return containerDefer.promise; }

      container = angular.element('<div></div>');
      container.attr('id', options.containerId);
      container.addClass(options.positionClass);
      container.css({'pointer-events': 'auto'});

      var target = angular.element(document.querySelector(options.target));

      if ( ! target || ! target.length) {
        throw 'Target for toasts doesn\'t exist';
      }

      $animate.enter(container, target).then(function() {
        containerDefer.resolve();
      });

      return containerDefer.promise;
    }

    function _notify(map) {
      var options = _getOptions();

      if (shouldExit()) { return; }

      var newToast = createToast();

      toasts.push(newToast);

      if (options.autoDismiss && options.maxOpened > 0) {
        var oldToasts = toasts.slice(0, (toasts.length - options.maxOpened));
        for (var i = 0, len = oldToasts.length; i < len; i++) {
          remove(oldToasts[i].toastId);
        }
      }

      if (maxOpenedNotReached()) {
        newToast.open.resolve();
      }

      newToast.open.promise.then(function() {
        _createOrGetContainer(options).then(function() {
          newToast.isOpened = true;
          if (options.newestOnTop) {
            $animate.enter(newToast.el, container).then(function() {
              newToast.scope.init();
            });
          } else {
            var sibling = container[0].lastChild ? angular.element(container[0].lastChild) : null;
            $animate.enter(newToast.el, container, sibling).then(function() {
              newToast.scope.init();
            });
          }
        });
      });

      return newToast;

      function createScope(toast, map, options) {
        if (options.allowHtml) {
          toast.scope.allowHtml = true;
          toast.scope.title = $sce.trustAsHtml(map.title);
          toast.scope.message = $sce.trustAsHtml(map.message);
        } else {
          toast.scope.title = map.title;
          toast.scope.message = map.message;
        }

        toast.scope.toastType = toast.iconClass;
        toast.scope.toastId = toast.toastId;

        toast.scope.options = {
          extendedTimeOut: options.extendedTimeOut,
          messageClass: options.messageClass,
          onHidden: options.onHidden,
          onShown: options.onShown,
          progressBar: options.progressBar,
          tapToDismiss: options.tapToDismiss,
          timeOut: options.timeOut,
          titleClass: options.titleClass,
          toastClass: options.toastClass
        };

        if (options.closeButton) {
          toast.scope.options.closeHtml = options.closeHtml;
        }
      }

      function createToast() {
        var newToast = {
          toastId: index++,
          isOpened: false,
          scope: $rootScope.$new(),
          open: $q.defer()
        };
        newToast.iconClass = map.iconClass;
        if (map.optionsOverride) {
          options = angular.extend(options, cleanOptionsOverride(map.optionsOverride));
          newToast.iconClass = map.optionsOverride.iconClass || newToast.iconClass;
        }

        createScope(newToast, map, options);

        newToast.el = createToastEl(newToast.scope);

        return newToast;

        function cleanOptionsOverride(options) {
          var badOptions = ['containerId', 'iconClasses', 'maxOpened', 'newestOnTop',
                            'positionClass', 'preventDuplicates', 'preventOpenDuplicates', 'templates'];
          for (var i = 0, l = badOptions.length; i < l; i++) {
            delete options[badOptions[i]];
          }

          return options;
        }
      }

      function createToastEl(scope) {
        var angularDomEl = angular.element('<div toast></div>'),
          $compile = $injector.get('$compile');
        return $compile(angularDomEl)(scope);
      }

      function maxOpenedNotReached() {
        return options.maxOpened && toasts.length <= options.maxOpened || !options.maxOpened;
      }

      function shouldExit() {
        var isDuplicateOfLast = options.preventDuplicates && map.message === previousToastMessage;
        var isDuplicateOpen = options.preventOpenDuplicates && openToasts[map.message];

        if (isDuplicateOfLast || isDuplicateOpen) {
          return true;
        }

        previousToastMessage = map.message;
        openToasts[map.message] = true;

        return false;
      }
    }
  }
}());

(function() {
  'use strict';

  angular.module('toastr')
    .constant('toastrConfig', {
      allowHtml: false,
      autoDismiss: false,
      closeButton: false,
      closeHtml: '<button>&times;</button>',
      containerId: 'toast-container',
      extendedTimeOut: 1000,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      maxOpened: 0,
      messageClass: 'toast-message',
      newestOnTop: true,
      onHidden: null,
      onShown: null,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      progressBar: false,
      tapToDismiss: true,
      target: 'body',
      templates: {
        toast: 'directives/toast/toast.html',
        progressbar: 'directives/progressbar/progressbar.html'
      },
      timeOut: 5000,
      titleClass: 'toast-title',
      toastClass: 'toast'
    });
}());

(function() {
  'use strict';

  angular.module('toastr')
    .directive('progressBar', progressBar);

  progressBar.$inject = ['toastrConfig'];

  function progressBar(toastrConfig) {
    return {
      replace: true,
      require: '^toast',
      templateUrl: function() {
        return toastrConfig.templates.progressbar;
      },
      link: linkFunction
    };

    function linkFunction(scope, element, attrs, toastCtrl) {
      var intervalId, currentTimeOut, hideTime;

      toastCtrl.progressBar = scope;

      scope.start = function(duration) {
        if (intervalId) {
          clearInterval(intervalId);
        }

        currentTimeOut = parseFloat(duration);
        hideTime = new Date().getTime() + currentTimeOut;
        intervalId = setInterval(updateProgress, 10);
      };

      scope.stop = function() {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };

      function updateProgress() {
        var percentage = ((hideTime - (new Date().getTime())) / currentTimeOut) * 100;
        element.css('width', percentage + '%');
      }

      scope.$on('$destroy', function() {
        // Failsafe stop
        clearInterval(intervalId);
      });
    }
  }
}());

(function() {
  'use strict';

  angular.module('toastr')
    .controller('ToastController', ToastController);

  function ToastController() {
    this.progressBar = null;

    this.startProgressBar = function(duration) {
      if (this.progressBar) {
        this.progressBar.start(duration);
      }
    };

    this.stopProgressBar = function() {
      if (this.progressBar) {
        this.progressBar.stop();
      }
    };
  }
}());

(function() {
  'use strict';

  angular.module('toastr')
    .directive('toast', toast);

  toast.$inject = ['$injector', '$interval', 'toastrConfig', 'toastr'];

  function toast($injector, $interval, toastrConfig, toastr) {
    return {
      replace: true,
      templateUrl: function() {
        return toastrConfig.templates.toast;
      },
      controller: 'ToastController',
      link: toastLinkFunction
    };

    function toastLinkFunction(scope, element, attrs, toastCtrl) {
      var timeout;

      scope.toastClass = scope.options.toastClass;
      scope.titleClass = scope.options.titleClass;
      scope.messageClass = scope.options.messageClass;
      scope.progressBar = scope.options.progressBar;

      if (wantsCloseButton()) {
        var button = angular.element(scope.options.closeHtml),
          $compile = $injector.get('$compile');
        button.addClass('toast-close-button');
        button.attr('ng-click', 'close()');
        $compile(button)(scope);
        element.prepend(button);
      }

      scope.init = function() {
        if (scope.options.timeOut) {
          timeout = createTimeout(scope.options.timeOut);
        }
        if (scope.options.onShown) {
          scope.options.onShown();
        }
      };

      element.on('mouseenter', function() {
        hideAndStopProgressBar();
        if (timeout) {
          $interval.cancel(timeout);
        }
      });

      scope.tapToast = function () {
        if (scope.options.tapToDismiss) {
          scope.close(true);
        }
      };

      scope.close = function (wasClicked) {
        toastr.remove(scope.toastId, wasClicked);
      };

      element.on('mouseleave', function() {
        if (scope.options.timeOut === 0 && scope.options.extendedTimeOut === 0) { return; }
        scope.$apply(function() {
          scope.progressBar = scope.options.progressBar;
        });
        timeout = createTimeout(scope.options.extendedTimeOut);
      });

      function createTimeout(time) {
        toastCtrl.startProgressBar(time);
        return $interval(function() {
          toastCtrl.stopProgressBar();
          toastr.remove(scope.toastId);
        }, time, 1);
      }

      function hideAndStopProgressBar() {
        scope.progressBar = false;
        toastCtrl.stopProgressBar();
      }

      function wantsCloseButton() {
        return scope.options.closeHtml;
      }
    }
  }
}());

angular.module("toastr").run(["$templateCache", function($templateCache) {$templateCache.put("directives/progressbar/progressbar.html","<div class=\"toast-progress\"></div>\n");
$templateCache.put("directives/toast/toast.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\n  <div ng-switch on=\"allowHtml\">\n    <div ng-switch-default ng-if=\"title\" class=\"{{titleClass}}\">{{title}}</div>\n    <div ng-switch-default class=\"{{messageClass}}\">{{message}}</div>\n    <div ng-switch-when=\"true\" ng-if=\"title\" class=\"{{titleClass}}\" ng-bind-html=\"title\"></div>\n    <div ng-switch-when=\"true\" class=\"{{messageClass}}\" ng-bind-html=\"message\"></div>\n  </div>\n  <progress-bar ng-if=\"progressBar\"></progress-bar>\n</div>\n");}]);
!function(e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var f; "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.io = e() } }(function() {
    var define, module, exports; return (function e(t, n, r) { function s(o, u) { if (!n[o]) { if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); throw new Error("Cannot find module '" + o + "'") } var f = n[o] = { exports: {} }; t[o][0].call(f.exports, function(e) { var n = t[o][1][e]; return s(n ? n : e) }, f, f.exports, e, t, n, r) } return n[o].exports } var i = typeof require == "function" && require; for (var o = 0; o < r.length; o++) s(r[o]); return s })({
        1: [function(_dereq_, module, exports) {

            module.exports = _dereq_('./lib/');

        }, { "./lib/": 2 }], 2: [function(_dereq_, module, exports) {

            /**
             * Module dependencies.
             */

            var url = _dereq_('./url');
            var parser = _dereq_('socket.io-parser');
            var Manager = _dereq_('./manager');
            var debug = _dereq_('debug')('socket.io-client');

            /**
             * Module exports.
             */

            module.exports = exports = lookup;

            /**
             * Managers cache.
             */

            var cache = exports.managers = {};

            /**
             * Looks up an existing `Manager` for multiplexing.
             * If the user summons:
             *
             *   `io('http://localhost/a');`
             *   `io('http://localhost/b');`
             *
             * We reuse the existing instance based on same scheme/port/host,
             * and we initialize sockets for each namespace.
             *
             * @api public
             */

            function lookup(uri, opts) {
                if (typeof uri == 'object') {
                    opts = uri;
                    uri = undefined;
                }

                opts = opts || {};

                var parsed = url(uri);
                var source = parsed.source;
                var id = parsed.id;
                var path = parsed.path;
                var sameNamespace = (cache[id] && cache[id].nsps[path] &&
                                     path == cache[id].nsps[path].nsp);
                var newConnection = opts.forceNew || opts['force new connection'] ||
                                    false === opts.multiplex || sameNamespace;

                var io;

                if (newConnection) {
                    debug('ignoring socket cache for %s', source);
                    io = Manager(source, opts);
                } else {
                    if (!cache[id]) {
                        debug('new io instance for %s', source);
                        cache[id] = Manager(source, opts);
                    }
                    io = cache[id];
                }

                return io.socket(parsed.path);
            }

            /**
             * Protocol version.
             *
             * @api public
             */

            exports.protocol = parser.protocol;

            /**
             * `connect`.
             *
             * @param {String} uri
             * @api public
             */

            exports.connect = lookup;

            /**
             * Expose constructors for standalone build.
             *
             * @api public
             */

            exports.Manager = _dereq_('./manager');
            exports.Socket = _dereq_('./socket');

        }, { "./manager": 3, "./socket": 5, "./url": 6, "debug": 10, "socket.io-parser": 46 }], 3: [function(_dereq_, module, exports) {

            /**
             * Module dependencies.
             */

            var url = _dereq_('./url');
            var eio = _dereq_('engine.io-client');
            var Socket = _dereq_('./socket');
            var Emitter = _dereq_('component-emitter');
            var parser = _dereq_('socket.io-parser');
            var on = _dereq_('./on');
            var bind = _dereq_('component-bind');
            var object = _dereq_('object-component');
            var debug = _dereq_('debug')('socket.io-client:manager');
            var indexOf = _dereq_('indexof');
            var Backoff = _dereq_('backo2');

            /**
             * Module exports
             */

            module.exports = Manager;

            /**
             * `Manager` constructor.
             *
             * @param {String} engine instance or engine uri/opts
             * @param {Object} options
             * @api public
             */

            function Manager(uri, opts) {
                if (!(this instanceof Manager)) return new Manager(uri, opts);
                if (uri && ('object' == typeof uri)) {
                    opts = uri;
                    uri = undefined;
                }
                opts = opts || {};

                opts.path = opts.path || '/socket.io';
                this.nsps = {};
                this.subs = [];
                this.opts = opts;
                this.reconnection(opts.reconnection !== false);
                this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
                this.reconnectionDelay(opts.reconnectionDelay || 1000);
                this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
                this.randomizationFactor(opts.randomizationFactor || 0.5);
                this.backoff = new Backoff({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                });
                this.timeout(null == opts.timeout ? 20000 : opts.timeout);
                this.readyState = 'closed';
                this.uri = uri;
                this.connected = [];
                this.encoding = false;
                this.packetBuffer = [];
                this.encoder = new parser.Encoder();
                this.decoder = new parser.Decoder();
                this.autoConnect = opts.autoConnect !== false;
                if (this.autoConnect) this.open();
            }

            /**
             * Propagate given event to sockets and emit on `this`
             *
             * @api private
             */

            Manager.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var nsp in this.nsps) {
                    this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
                }
            };

            /**
             * Update `socket.id` of all sockets
             *
             * @api private
             */

            Manager.prototype.updateSocketIds = function() {
                for (var nsp in this.nsps) {
                    this.nsps[nsp].id = this.engine.id;
                }
            };

            /**
             * Mix in `Emitter`.
             */

            Emitter(Manager.prototype);

            /**
             * Sets the `reconnection` config.
             *
             * @param {Boolean} true/false if it should automatically reconnect
             * @return {Manager} self or value
             * @api public
             */

            Manager.prototype.reconnection = function(v) {
                if (!arguments.length) return this._reconnection;
                this._reconnection = !!v;
                return this;
            };

            /**
             * Sets the reconnection attempts config.
             *
             * @param {Number} max reconnection attempts before giving up
             * @return {Manager} self or value
             * @api public
             */

            Manager.prototype.reconnectionAttempts = function(v) {
                if (!arguments.length) return this._reconnectionAttempts;
                this._reconnectionAttempts = v;
                return this;
            };

            /**
             * Sets the delay between reconnections.
             *
             * @param {Number} delay
             * @return {Manager} self or value
             * @api public
             */

            Manager.prototype.reconnectionDelay = function(v) {
                if (!arguments.length) return this._reconnectionDelay;
                this._reconnectionDelay = v;
                this.backoff && this.backoff.setMin(v);
                return this;
            };

            Manager.prototype.randomizationFactor = function(v) {
                if (!arguments.length) return this._randomizationFactor;
                this._randomizationFactor = v;
                this.backoff && this.backoff.setJitter(v);
                return this;
            };

            /**
             * Sets the maximum delay between reconnections.
             *
             * @param {Number} delay
             * @return {Manager} self or value
             * @api public
             */

            Manager.prototype.reconnectionDelayMax = function(v) {
                if (!arguments.length) return this._reconnectionDelayMax;
                this._reconnectionDelayMax = v;
                this.backoff && this.backoff.setMax(v);
                return this;
            };

            /**
             * Sets the connection timeout. `false` to disable
             *
             * @return {Manager} self or value
             * @api public
             */

            Manager.prototype.timeout = function(v) {
                if (!arguments.length) return this._timeout;
                this._timeout = v;
                return this;
            };

            /**
             * Starts trying to reconnect if reconnection is enabled and we have not
             * started reconnecting yet
             *
             * @api private
             */

            Manager.prototype.maybeReconnectOnOpen = function() {
                // Only try to reconnect if it's the first time we're connecting
                if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
                    // keeps reconnection from firing twice for the same reconnection loop
                    this.reconnect();
                }
            };


            /**
             * Sets the current transport `socket`.
             *
             * @param {Function} optional, callback
             * @return {Manager} self
             * @api public
             */

            Manager.prototype.open =
            Manager.prototype.connect = function(fn) {
                debug('readyState %s', this.readyState);
                if (~this.readyState.indexOf('open')) return this;

                debug('opening %s', this.uri);
                this.engine = eio(this.uri, this.opts);
                var socket = this.engine;
                var self = this;
                this.readyState = 'opening';
                this.skipReconnect = false;

                // emit `open`
                var openSub = on(socket, 'open', function() {
                    self.onopen();
                    fn && fn();
                });

                // emit `connect_error`
                var errorSub = on(socket, 'error', function(data) {
                    debug('connect_error');
                    self.cleanup();
                    self.readyState = 'closed';
                    self.emitAll('connect_error', data);
                    if (fn) {
                        var err = new Error('Connection error');
                        err.data = data;
                        fn(err);
                    } else {
                        // Only do this if there is no fn to handle the error
                        self.maybeReconnectOnOpen();
                    }
                });

                // emit `connect_timeout`
                if (false !== this._timeout) {
                    var timeout = this._timeout;
                    debug('connect attempt will timeout after %d', timeout);

                    // set timer
                    var timer = setTimeout(function() {
                        debug('connect attempt timed out after %d', timeout);
                        openSub.destroy();
                        socket.close();
                        socket.emit('error', 'timeout');
                        self.emitAll('connect_timeout', timeout);
                    }, timeout);

                    this.subs.push({
                        destroy: function() {
                            clearTimeout(timer);
                        }
                    });
                }

                this.subs.push(openSub);
                this.subs.push(errorSub);

                return this;
            };

            /**
             * Called upon transport open.
             *
             * @api private
             */

            Manager.prototype.onopen = function() {
                debug('open');

                // clear old subs
                this.cleanup();

                // mark as open
                this.readyState = 'open';
                this.emit('open');

                // add new subs
                var socket = this.engine;
                this.subs.push(on(socket, 'data', bind(this, 'ondata')));
                this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
                this.subs.push(on(socket, 'error', bind(this, 'onerror')));
                this.subs.push(on(socket, 'close', bind(this, 'onclose')));
            };

            /**
             * Called with data.
             *
             * @api private
             */

            Manager.prototype.ondata = function(data) {
                this.decoder.add(data);
            };

            /**
             * Called when parser fully decodes a packet.
             *
             * @api private
             */

            Manager.prototype.ondecoded = function(packet) {
                this.emit('packet', packet);
            };

            /**
             * Called upon socket error.
             *
             * @api private
             */

            Manager.prototype.onerror = function(err) {
                debug('error', err);
                this.emitAll('error', err);
            };

            /**
             * Creates a new socket for the given `nsp`.
             *
             * @return {Socket}
             * @api public
             */

            Manager.prototype.socket = function(nsp) {
                var socket = this.nsps[nsp];
                if (!socket) {
                    socket = new Socket(this, nsp);
                    this.nsps[nsp] = socket;
                    var self = this;
                    socket.on('connect', function() {
                        socket.id = self.engine.id;
                        if (!~indexOf(self.connected, socket)) {
                            self.connected.push(socket);
                        }
                    });
                }
                return socket;
            };

            /**
             * Called upon a socket close.
             *
             * @param {Socket} socket
             */

            Manager.prototype.destroy = function(socket) {
                var index = indexOf(this.connected, socket);
                if (~index) this.connected.splice(index, 1);
                if (this.connected.length) return;

                this.close();
            };

            /**
             * Writes a packet.
             *
             * @param {Object} packet
             * @api private
             */

            Manager.prototype.packet = function(packet) {
                debug('writing packet %j', packet);
                var self = this;

                if (!self.encoding) {
                    // encode, then write to engine with result
                    self.encoding = true;
                    this.encoder.encode(packet, function(encodedPackets) {
                        for (var i = 0; i < encodedPackets.length; i++) {
                            self.engine.write(encodedPackets[i]);
                        }
                        self.encoding = false;
                        self.processPacketQueue();
                    });
                } else { // add packet to the queue
                    self.packetBuffer.push(packet);
                }
            };

            /**
             * If packet buffer is non-empty, begins encoding the
             * next packet in line.
             *
             * @api private
             */

            Manager.prototype.processPacketQueue = function() {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var pack = this.packetBuffer.shift();
                    this.packet(pack);
                }
            };

            /**
             * Clean up transport subscriptions and packet buffer.
             *
             * @api private
             */

            Manager.prototype.cleanup = function() {
                var sub;
                while (sub = this.subs.shift()) sub.destroy();

                this.packetBuffer = [];
                this.encoding = false;

                this.decoder.destroy();
            };

            /**
             * Close the current socket.
             *
             * @api private
             */

            Manager.prototype.close =
            Manager.prototype.disconnect = function() {
                this.skipReconnect = true;
                this.backoff.reset();
                this.readyState = 'closed';
                this.engine && this.engine.close();
            };

            /**
             * Called upon engine close.
             *
             * @api private
             */

            Manager.prototype.onclose = function(reason) {
                debug('close');
                this.cleanup();
                this.backoff.reset();
                this.readyState = 'closed';
                this.emit('close', reason);
                if (this._reconnection && !this.skipReconnect) {
                    this.reconnect();
                }
            };

            /**
             * Attempt a reconnection.
             *
             * @api private
             */

            Manager.prototype.reconnect = function() {
                if (this.reconnecting || this.skipReconnect) return this;

                var self = this;

                if (this.backoff.attempts >= this._reconnectionAttempts) {
                    debug('reconnect failed');
                    this.backoff.reset();
                    this.emitAll('reconnect_failed');
                    this.reconnecting = false;
                } else {
                    var delay = this.backoff.duration();
                    debug('will wait %dms before reconnect attempt', delay);

                    this.reconnecting = true;
                    var timer = setTimeout(function() {
                        if (self.skipReconnect) return;

                        debug('attempting reconnect');
                        self.emitAll('reconnect_attempt', self.backoff.attempts);
                        self.emitAll('reconnecting', self.backoff.attempts);

                        // check again for the case socket closed in above events
                        if (self.skipReconnect) return;

                        self.open(function(err) {
                            if (err) {
                                debug('reconnect attempt error');
                                self.reconnecting = false;
                                self.reconnect();
                                self.emitAll('reconnect_error', err.data);
                            } else {
                                debug('reconnect success');
                                self.onreconnect();
                            }
                        });
                    }, delay);

                    this.subs.push({
                        destroy: function() {
                            clearTimeout(timer);
                        }
                    });
                }
            };

            /**
             * Called upon successful reconnect.
             *
             * @api private
             */

            Manager.prototype.onreconnect = function() {
                var attempt = this.backoff.attempts;
                this.reconnecting = false;
                this.backoff.reset();
                this.updateSocketIds();
                this.emitAll('reconnect', attempt);
            };

        }, { "./on": 4, "./socket": 5, "./url": 6, "backo2": 7, "component-bind": 8, "component-emitter": 9, "debug": 10, "engine.io-client": 11, "indexof": 42, "object-component": 43, "socket.io-parser": 46 }], 4: [function(_dereq_, module, exports) {

            /**
             * Module exports.
             */

            module.exports = on;

            /**
             * Helper for subscriptions.
             *
             * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
             * @param {String} event name
             * @param {Function} callback
             * @api public
             */

            function on(obj, ev, fn) {
                obj.on(ev, fn);
                return {
                    destroy: function() {
                        obj.removeListener(ev, fn);
                    }
                };
            }

        }, {}], 5: [function(_dereq_, module, exports) {

            /**
             * Module dependencies.
             */

            var parser = _dereq_('socket.io-parser');
            var Emitter = _dereq_('component-emitter');
            var toArray = _dereq_('to-array');
            var on = _dereq_('./on');
            var bind = _dereq_('component-bind');
            var debug = _dereq_('debug')('socket.io-client:socket');
            var hasBin = _dereq_('has-binary');

            /**
             * Module exports.
             */

            module.exports = exports = Socket;

            /**
             * Internal events (blacklisted).
             * These events can't be emitted by the user.
             *
             * @api private
             */

            var events = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1
            };

            /**
             * Shortcut to `Emitter#emit`.
             */

            var emit = Emitter.prototype.emit;

            /**
             * `Socket` constructor.
             *
             * @api public
             */

            function Socket(io, nsp) {
                this.io = io;
                this.nsp = nsp;
                this.json = this; // compat
                this.ids = 0;
                this.acks = {};
                if (this.io.autoConnect) this.open();
                this.receiveBuffer = [];
                this.sendBuffer = [];
                this.connected = false;
                this.disconnected = true;
            }

            /**
             * Mix in `Emitter`.
             */

            Emitter(Socket.prototype);

            /**
             * Subscribe to open, close and packet events
             *
             * @api private
             */

            Socket.prototype.subEvents = function() {
                if (this.subs) return;

                var io = this.io;
                this.subs = [
                  on(io, 'open', bind(this, 'onopen')),
                  on(io, 'packet', bind(this, 'onpacket')),
                  on(io, 'close', bind(this, 'onclose'))
                ];
            };

            /**
             * "Opens" the socket.
             *
             * @api public
             */

            Socket.prototype.open =
            Socket.prototype.connect = function() {
                if (this.connected) return this;

                this.subEvents();
                this.io.open(); // ensure open
                if ('open' == this.io.readyState) this.onopen();
                return this;
            };

            /**
             * Sends a `message` event.
             *
             * @return {Socket} self
             * @api public
             */

            Socket.prototype.send = function() {
                var args = toArray(arguments);
                args.unshift('message');
                this.emit.apply(this, args);
                return this;
            };

            /**
             * Override `emit`.
             * If the event is in `events`, it's emitted normally.
             *
             * @param {String} event name
             * @return {Socket} self
             * @api public
             */

            Socket.prototype.emit = function(ev) {
                if (events.hasOwnProperty(ev)) {
                    emit.apply(this, arguments);
                    return this;
                }

                var args = toArray(arguments);
                var parserType = parser.EVENT; // default
                if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
                var packet = { type: parserType, data: args };

                // event ack callback
                if ('function' == typeof args[args.length - 1]) {
                    debug('emitting packet with ack id %d', this.ids);
                    this.acks[this.ids] = args.pop();
                    packet.id = this.ids++;
                }

                if (this.connected) {
                    this.packet(packet);
                } else {
                    this.sendBuffer.push(packet);
                }

                return this;
            };

            /**
             * Sends a packet.
             *
             * @param {Object} packet
             * @api private
             */

            Socket.prototype.packet = function(packet) {
                packet.nsp = this.nsp;
                this.io.packet(packet);
            };

            /**
             * Called upon engine `open`.
             *
             * @api private
             */

            Socket.prototype.onopen = function() {
                debug('transport is open - connecting');

                // write connect packet if necessary
                if ('/' != this.nsp) {
                    this.packet({ type: parser.CONNECT });
                }
            };

            /**
             * Called upon engine `close`.
             *
             * @param {String} reason
             * @api private
             */

            Socket.prototype.onclose = function(reason) {
                debug('close (%s)', reason);
                this.connected = false;
                this.disconnected = true;
                delete this.id;
                this.emit('disconnect', reason);
            };

            /**
             * Called with socket packet.
             *
             * @param {Object} packet
             * @api private
             */

            Socket.prototype.onpacket = function(packet) {
                if (packet.nsp != this.nsp) return;

                switch (packet.type) {
                    case parser.CONNECT:
                        this.onconnect();
                        break;

                    case parser.EVENT:
                        this.onevent(packet);
                        break;

                    case parser.BINARY_EVENT:
                        this.onevent(packet);
                        break;

                    case parser.ACK:
                        this.onack(packet);
                        break;

                    case parser.BINARY_ACK:
                        this.onack(packet);
                        break;

                    case parser.DISCONNECT:
                        this.ondisconnect();
                        break;

                    case parser.ERROR:
                        this.emit('error', packet.data);
                        break;
                }
            };

            /**
             * Called upon a server event.
             *
             * @param {Object} packet
             * @api private
             */

            Socket.prototype.onevent = function(packet) {
                var args = packet.data || [];
                debug('emitting event %j', args);

                if (null != packet.id) {
                    debug('attaching ack callback to event');
                    args.push(this.ack(packet.id));
                }

                if (this.connected) {
                    emit.apply(this, args);
                } else {
                    this.receiveBuffer.push(args);
                }
            };

            /**
             * Produces an ack callback to emit with an event.
             *
             * @api private
             */

            Socket.prototype.ack = function(id) {
                var self = this;
                var sent = false;
                return function() {
                    // prevent double callbacks
                    if (sent) return;
                    sent = true;
                    var args = toArray(arguments);
                    debug('sending ack %j', args);

                    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
                    self.packet({
                        type: type,
                        id: id,
                        data: args
                    });
                };
            };

            /**
             * Called upon a server acknowlegement.
             *
             * @param {Object} packet
             * @api private
             */

            Socket.prototype.onack = function(packet) {
                debug('calling ack %s with %j', packet.id, packet.data);
                var fn = this.acks[packet.id];
                fn.apply(this, packet.data);
                delete this.acks[packet.id];
            };

            /**
             * Called upon server connect.
             *
             * @api private
             */

            Socket.prototype.onconnect = function() {
                this.connected = true;
                this.disconnected = false;
                this.emit('connect');
                this.emitBuffered();
            };

            /**
             * Emit buffered events (received and emitted).
             *
             * @api private
             */

            Socket.prototype.emitBuffered = function() {
                var i;
                for (i = 0; i < this.receiveBuffer.length; i++) {
                    emit.apply(this, this.receiveBuffer[i]);
                }
                this.receiveBuffer = [];

                for (i = 0; i < this.sendBuffer.length; i++) {
                    this.packet(this.sendBuffer[i]);
                }
                this.sendBuffer = [];
            };

            /**
             * Called upon server disconnect.
             *
             * @api private
             */

            Socket.prototype.ondisconnect = function() {
                debug('server disconnect (%s)', this.nsp);
                this.destroy();
                this.onclose('io server disconnect');
            };

            /**
             * Called upon forced client/server side disconnections,
             * this method ensures the manager stops tracking us and
             * that reconnections don't get triggered for this.
             *
             * @api private.
             */

            Socket.prototype.destroy = function() {
                if (this.subs) {
                    // clean subscriptions to avoid reconnections
                    for (var i = 0; i < this.subs.length; i++) {
                        this.subs[i].destroy();
                    }
                    this.subs = null;
                }

                this.io.destroy(this);
            };

            /**
             * Disconnects the socket manually.
             *
             * @return {Socket} self
             * @api public
             */

            Socket.prototype.close =
            Socket.prototype.disconnect = function() {
                if (this.connected) {
                    debug('performing disconnect (%s)', this.nsp);
                    this.packet({ type: parser.DISCONNECT });
                }

                // remove socket from pool
                this.destroy();

                if (this.connected) {
                    // fire events
                    this.onclose('io client disconnect');
                }
                return this;
            };

        }, { "./on": 4, "component-bind": 8, "component-emitter": 9, "debug": 10, "has-binary": 38, "socket.io-parser": 46, "to-array": 50 }], 6: [function(_dereq_, module, exports) {
            (function(global) {

                /**
                 * Module dependencies.
                 */

                var parseuri = _dereq_('parseuri');
                var debug = _dereq_('debug')('socket.io-client:url');

                /**
                 * Module exports.
                 */

                module.exports = url;

                /**
                 * URL parser.
                 *
                 * @param {String} url
                 * @param {Object} An object meant to mimic window.location.
                 *                 Defaults to window.location.
                 * @api public
                 */

                function url(uri, loc) {
                    var obj = uri;

                    // default to window.location
                    var loc = loc || global.location;
                    if (null == uri) uri = loc.protocol + '//' + loc.host;

                    // relative path support
                    if ('string' == typeof uri) {
                        if ('/' == uri.charAt(0)) {
                            if ('/' == uri.charAt(1)) {
                                uri = loc.protocol + uri;
                            } else {
                                uri = loc.hostname + uri;
                            }
                        }

                        if (!/^(https?|wss?):\/\//.test(uri)) {
                            debug('protocol-less url %s', uri);
                            if ('undefined' != typeof loc) {
                                uri = loc.protocol + '//' + uri;
                            } else {
                                uri = 'https://' + uri;
                            }
                        }

                        // parse
                        debug('parse %s', uri);
                        obj = parseuri(uri);
                    }

                    // make sure we treat `localhost:80` and `localhost` equally
                    if (!obj.port) {
                        if (/^(http|ws)$/.test(obj.protocol)) {
                            obj.port = '80';
                        }
                        else if (/^(http|ws)s$/.test(obj.protocol)) {
                            obj.port = '443';
                        }
                    }

                    obj.path = obj.path || '/';

                    // define unique id
                    obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
                    // define href
                    obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

                    return obj;
                }

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "debug": 10, "parseuri": 44 }], 7: [function(_dereq_, module, exports) {

            /**
             * Expose `Backoff`.
             */

            module.exports = Backoff;

            /**
             * Initialize backoff timer with `opts`.
             *
             * - `min` initial timeout in milliseconds [100]
             * - `max` max timeout [10000]
             * - `jitter` [0]
             * - `factor` [2]
             *
             * @param {Object} opts
             * @api public
             */

            function Backoff(opts) {
                opts = opts || {};
                this.ms = opts.min || 100;
                this.max = opts.max || 10000;
                this.factor = opts.factor || 2;
                this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
                this.attempts = 0;
            }

            /**
             * Return the backoff duration.
             *
             * @return {Number}
             * @api public
             */

            Backoff.prototype.duration = function() {
                var ms = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var rand = Math.random();
                    var deviation = Math.floor(rand * this.jitter * ms);
                    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
                }
                return Math.min(ms, this.max) | 0;
            };

            /**
             * Reset the number of attempts.
             *
             * @api public
             */

            Backoff.prototype.reset = function() {
                this.attempts = 0;
            };

            /**
             * Set the minimum duration
             *
             * @api public
             */

            Backoff.prototype.setMin = function(min) {
                this.ms = min;
            };

            /**
             * Set the maximum duration
             *
             * @api public
             */

            Backoff.prototype.setMax = function(max) {
                this.max = max;
            };

            /**
             * Set the jitter
             *
             * @api public
             */

            Backoff.prototype.setJitter = function(jitter) {
                this.jitter = jitter;
            };


        }, {}], 8: [function(_dereq_, module, exports) {
            /**
             * Slice reference.
             */

            var slice = [].slice;

            /**
             * Bind `obj` to `fn`.
             *
             * @param {Object} obj
             * @param {Function|String} fn or string
             * @return {Function}
             * @api public
             */

            module.exports = function(obj, fn) {
                if ('string' == typeof fn) fn = obj[fn];
                if ('function' != typeof fn) throw new Error('bind() requires a function');
                var args = slice.call(arguments, 2);
                return function() {
                    return fn.apply(obj, args.concat(slice.call(arguments)));
                }
            };

        }, {}], 9: [function(_dereq_, module, exports) {

            /**
             * Expose `Emitter`.
             */

            module.exports = Emitter;

            /**
             * Initialize a new `Emitter`.
             *
             * @api public
             */

            function Emitter(obj) {
                if (obj) return mixin(obj);
            };

            /**
             * Mixin the emitter properties.
             *
             * @param {Object} obj
             * @return {Object}
             * @api private
             */

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key];
                }
                return obj;
            }

            /**
             * Listen on the given `event` with `fn`.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.on =
            Emitter.prototype.addEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || [])
                  .push(fn);
                return this;
            };

            /**
             * Adds an `event` listener that will be invoked a single
             * time then automatically removed.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.once = function(event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};

                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments);
                }

                on.fn = fn;
                this.on(event, on);
                return this;
            };

            /**
             * Remove the given callback for `event` or all
             * registered callbacks.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.off =
            Emitter.prototype.removeListener =
            Emitter.prototype.removeAllListeners =
            Emitter.prototype.removeEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};

                // all
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }

                // specific event
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;

                // remove all handlers
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this;
                }

                // remove specific handler
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
                return this;
            };

            /**
             * Emit `event` with the given args.
             *
             * @param {String} event
             * @param {Mixed} ...
             * @return {Emitter}
             */

            Emitter.prototype.emit = function(event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1)
                  , callbacks = this._callbacks[event];

                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args);
                    }
                }

                return this;
            };

            /**
             * Return array of callbacks for `event`.
             *
             * @param {String} event
             * @return {Array}
             * @api public
             */

            Emitter.prototype.listeners = function(event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || [];
            };

            /**
             * Check if this emitter has `event` handlers.
             *
             * @param {String} event
             * @return {Boolean}
             * @api public
             */

            Emitter.prototype.hasListeners = function(event) {
                return !!this.listeners(event).length;
            };

        }, {}], 10: [function(_dereq_, module, exports) {

            /**
             * Expose `debug()` as the module.
             */

            module.exports = debug;

            /**
             * Create a debugger with the given `name`.
             *
             * @param {String} name
             * @return {Type}
             * @api public
             */

            function debug(name) {
                if (!debug.enabled(name)) return function() { };

                return function(fmt) {
                    fmt = coerce(fmt);

                    var curr = new Date;
                    var ms = curr - (debug[name] || curr);
                    debug[name] = curr;

                    fmt = name
                      + ' '
                      + fmt
                      + ' +' + debug.humanize(ms);

                    // This hackery is required for IE8
                    // where `console.log` doesn't have 'apply'
                    window.console
                      && console.log
                      && Function.prototype.apply.call(console.log, console, arguments);
                }
            }

            /**
             * The currently active debug mode names.
             */

            debug.names = [];
            debug.skips = [];

            /**
             * Enables a debug mode by name. This can include modes
             * separated by a colon and wildcards.
             *
             * @param {String} name
             * @api public
             */

            debug.enable = function(name) {
                try {
                    localStorage.debug = name;
                } catch (e) { }

                var split = (name || '').split(/[\s,]+/)
                  , len = split.length;

                for (var i = 0; i < len; i++) {
                    name = split[i].replace('*', '.*?');
                    if (name[0] === '-') {
                        debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
                    }
                    else {
                        debug.names.push(new RegExp('^' + name + '$'));
                    }
                }
            };

            /**
             * Disable debug output.
             *
             * @api public
             */

            debug.disable = function() {
                debug.enable('');
            };

            /**
             * Humanize the given `ms`.
             *
             * @param {Number} m
             * @return {String}
             * @api private
             */

            debug.humanize = function(ms) {
                var sec = 1000
                  , min = 60 * 1000
                  , hour = 60 * min;

                if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
                if (ms >= min) return (ms / min).toFixed(1) + 'm';
                if (ms >= sec) return (ms / sec | 0) + 's';
                return ms + 'ms';
            };

            /**
             * Returns true if the given mode name is enabled, false otherwise.
             *
             * @param {String} name
             * @return {Boolean}
             * @api public
             */

            debug.enabled = function(name) {
                for (var i = 0, len = debug.skips.length; i < len; i++) {
                    if (debug.skips[i].test(name)) {
                        return false;
                    }
                }
                for (var i = 0, len = debug.names.length; i < len; i++) {
                    if (debug.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            };

            /**
             * Coerce `val`.
             */

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val;
            }

            // persist

            try {
                if (window.localStorage) debug.enable(localStorage.debug);
            } catch (e) { }

        }, {}], 11: [function(_dereq_, module, exports) {

            module.exports = _dereq_('./lib/');

        }, { "./lib/": 12 }], 12: [function(_dereq_, module, exports) {

            module.exports = _dereq_('./socket');

            /**
             * Exports parser
             *
             * @api public
             *
             */
            module.exports.parser = _dereq_('engine.io-parser');

        }, { "./socket": 13, "engine.io-parser": 25 }], 13: [function(_dereq_, module, exports) {
            (function(global) {
                /**
                 * Module dependencies.
                 */

                var transports = _dereq_('./transports');
                var Emitter = _dereq_('component-emitter');
                var debug = _dereq_('debug')('engine.io-client:socket');
                var index = _dereq_('indexof');
                var parser = _dereq_('engine.io-parser');
                var parseuri = _dereq_('parseuri');
                var parsejson = _dereq_('parsejson');
                var parseqs = _dereq_('parseqs');

                /**
                 * Module exports.
                 */

                module.exports = Socket;

                /**
                 * Noop function.
                 *
                 * @api private
                 */

                function noop() { }

                /**
                 * Socket constructor.
                 *
                 * @param {String|Object} uri or options
                 * @param {Object} options
                 * @api public
                 */

                function Socket(uri, opts) {
                    if (!(this instanceof Socket)) return new Socket(uri, opts);

                    opts = opts || {};

                    if (uri && 'object' == typeof uri) {
                        opts = uri;
                        uri = null;
                    }

                    if (uri) {
                        uri = parseuri(uri);
                        opts.host = uri.host;
                        opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
                        opts.port = uri.port;
                        if (uri.query) opts.query = uri.query;
                    }

                    this.secure = null != opts.secure ? opts.secure :
                      (global.location && 'https:' == location.protocol);

                    if (opts.host) {
                        var pieces = opts.host.split(':');
                        opts.hostname = pieces.shift();
                        if (pieces.length) {
                            opts.port = pieces.pop();
                        } else if (!opts.port) {
                            // if no port is specified manually, use the protocol default
                            opts.port = this.secure ? '443' : '80';
                        }
                    }

                    this.agent = opts.agent || false;
                    this.hostname = opts.hostname ||
                      (global.location ? location.hostname : 'localhost');
                    this.port = opts.port || (global.location && location.port ?
                         location.port :
                         (this.secure ? 443 : 80));
                    this.query = opts.query || {};
                    if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
                    this.upgrade = false !== opts.upgrade;
                    this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
                    this.forceJSONP = !!opts.forceJSONP;
                    this.jsonp = false !== opts.jsonp;
                    this.forceBase64 = !!opts.forceBase64;
                    this.enablesXDR = !!opts.enablesXDR;
                    this.timestampParam = opts.timestampParam || 't';
                    this.timestampRequests = opts.timestampRequests;
                    this.transports = opts.transports || ['polling', 'websocket'];
                    this.readyState = '';
                    this.writeBuffer = [];
                    this.callbackBuffer = [];
                    this.policyPort = opts.policyPort || 843;
                    this.rememberUpgrade = opts.rememberUpgrade || false;
                    this.binaryType = null;
                    this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;

                    // SSL options for Node.js client
                    this.pfx = opts.pfx || null;
                    this.key = opts.key || null;
                    this.passphrase = opts.passphrase || null;
                    this.cert = opts.cert || null;
                    this.ca = opts.ca || null;
                    this.ciphers = opts.ciphers || null;
                    this.rejectUnauthorized = opts.rejectUnauthorized || null;

                    this.open();
                }

                Socket.priorWebsocketSuccess = false;

                /**
                 * Mix in `Emitter`.
                 */

                Emitter(Socket.prototype);

                /**
                 * Protocol version.
                 *
                 * @api public
                 */

                Socket.protocol = parser.protocol; // this is an int

                /**
                 * Expose deps for legacy compatibility
                 * and standalone browser access.
                 */

                Socket.Socket = Socket;
                Socket.Transport = _dereq_('./transport');
                Socket.transports = _dereq_('./transports');
                Socket.parser = _dereq_('engine.io-parser');

                /**
                 * Creates transport of the given type.
                 *
                 * @param {String} transport name
                 * @return {Transport}
                 * @api private
                 */

                Socket.prototype.createTransport = function(name) {
                    debug('creating transport "%s"', name);
                    var query = clone(this.query);

                    // append engine.io protocol identifier
                    query.EIO = parser.protocol;

                    // transport name
                    query.transport = name;

                    // session id if we already have one
                    if (this.id) query.sid = this.id;

                    var transport = new transports[name]({
                        agent: this.agent,
                        hostname: this.hostname,
                        port: this.port,
                        secure: this.secure,
                        path: this.path,
                        query: query,
                        forceJSONP: this.forceJSONP,
                        jsonp: this.jsonp,
                        forceBase64: this.forceBase64,
                        enablesXDR: this.enablesXDR,
                        timestampRequests: this.timestampRequests,
                        timestampParam: this.timestampParam,
                        policyPort: this.policyPort,
                        socket: this,
                        pfx: this.pfx,
                        key: this.key,
                        passphrase: this.passphrase,
                        cert: this.cert,
                        ca: this.ca,
                        ciphers: this.ciphers,
                        rejectUnauthorized: this.rejectUnauthorized
                    });

                    return transport;
                };

                function clone(obj) {
                    var o = {};
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            o[i] = obj[i];
                        }
                    }
                    return o;
                }

                /**
                 * Initializes transport to use and starts probe.
                 *
                 * @api private
                 */
                Socket.prototype.open = function() {
                    var transport;
                    if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
                        transport = 'websocket';
                    } else if (0 == this.transports.length) {
                        // Emit error on next tick so it can be listened to
                        var self = this;
                        setTimeout(function() {
                            self.emit('error', 'No transports available');
                        }, 0);
                        return;
                    } else {
                        transport = this.transports[0];
                    }
                    this.readyState = 'opening';

                    // Retry with the next transport if the transport is disabled (jsonp: false)
                    var transport;
                    try {
                        transport = this.createTransport(transport);
                    } catch (e) {
                        this.transports.shift();
                        this.open();
                        return;
                    }

                    transport.open();
                    this.setTransport(transport);
                };

                /**
                 * Sets the current transport. Disables the existing one (if any).
                 *
                 * @api private
                 */

                Socket.prototype.setTransport = function(transport) {
                    debug('setting transport %s', transport.name);
                    var self = this;

                    if (this.transport) {
                        debug('clearing existing transport %s', this.transport.name);
                        this.transport.removeAllListeners();
                    }

                    // set up transport
                    this.transport = transport;

                    // set up transport listeners
                    transport
                    .on('drain', function() {
                        self.onDrain();
                    })
                    .on('packet', function(packet) {
                        self.onPacket(packet);
                    })
                    .on('error', function(e) {
                        self.onError(e);
                    })
                    .on('close', function() {
                        self.onClose('transport close');
                    });
                };

                /**
                 * Probes a transport.
                 *
                 * @param {String} transport name
                 * @api private
                 */

                Socket.prototype.probe = function(name) {
                    debug('probing transport "%s"', name);
                    var transport = this.createTransport(name, { probe: 1 })
                      , failed = false
                      , self = this;

                    Socket.priorWebsocketSuccess = false;

                    function onTransportOpen() {
                        if (self.onlyBinaryUpgrades) {
                            var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                            failed = failed || upgradeLosesBinary;
                        }
                        if (failed) return;

                        debug('probe transport "%s" opened', name);
                        transport.send([{ type: 'ping', data: 'probe' }]);
                        transport.once('packet', function(msg) {
                            if (failed) return;
                            if ('pong' == msg.type && 'probe' == msg.data) {
                                debug('probe transport "%s" pong', name);
                                self.upgrading = true;
                                self.emit('upgrading', transport);
                                if (!transport) return;
                                Socket.priorWebsocketSuccess = 'websocket' == transport.name;

                                debug('pausing current transport "%s"', self.transport.name);
                                self.transport.pause(function() {
                                    if (failed) return;
                                    if ('closed' == self.readyState) return;
                                    debug('changing transport and sending upgrade packet');

                                    cleanup();

                                    self.setTransport(transport);
                                    transport.send([{ type: 'upgrade' }]);
                                    self.emit('upgrade', transport);
                                    transport = null;
                                    self.upgrading = false;
                                    self.flush();
                                });
                            } else {
                                debug('probe transport "%s" failed', name);
                                var err = new Error('probe error');
                                err.transport = transport.name;
                                self.emit('upgradeError', err);
                            }
                        });
                    }

                    function freezeTransport() {
                        if (failed) return;

                        // Any callback called by transport should be ignored since now
                        failed = true;

                        cleanup();

                        transport.close();
                        transport = null;
                    }

                    //Handle any error that happens while probing
                    function onerror(err) {
                        var error = new Error('probe error: ' + err);
                        error.transport = transport.name;

                        freezeTransport();

                        debug('probe transport "%s" failed because of error: %s', name, err);

                        self.emit('upgradeError', error);
                    }

                    function onTransportClose() {
                        onerror("transport closed");
                    }

                    //When the socket is closed while we're probing
                    function onclose() {
                        onerror("socket closed");
                    }

                    //When the socket is upgraded while we're probing
                    function onupgrade(to) {
                        if (transport && to.name != transport.name) {
                            debug('"%s" works - aborting "%s"', to.name, transport.name);
                            freezeTransport();
                        }
                    }

                    //Remove all listeners on the transport and on self
                    function cleanup() {
                        transport.removeListener('open', onTransportOpen);
                        transport.removeListener('error', onerror);
                        transport.removeListener('close', onTransportClose);
                        self.removeListener('close', onclose);
                        self.removeListener('upgrading', onupgrade);
                    }

                    transport.once('open', onTransportOpen);
                    transport.once('error', onerror);
                    transport.once('close', onTransportClose);

                    this.once('close', onclose);
                    this.once('upgrading', onupgrade);

                    transport.open();

                };

                /**
                 * Called when connection is deemed open.
                 *
                 * @api public
                 */

                Socket.prototype.onOpen = function() {
                    debug('socket open');
                    this.readyState = 'open';
                    Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
                    this.emit('open');
                    this.flush();

                    // we check for `readyState` in case an `open`
                    // listener already closed the socket
                    if ('open' == this.readyState && this.upgrade && this.transport.pause) {
                        debug('starting upgrade probes');
                        for (var i = 0, l = this.upgrades.length; i < l; i++) {
                            this.probe(this.upgrades[i]);
                        }
                    }
                };

                /**
                 * Handles a packet.
                 *
                 * @api private
                 */

                Socket.prototype.onPacket = function(packet) {
                    if ('opening' == this.readyState || 'open' == this.readyState) {
                        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

                        this.emit('packet', packet);

                        // Socket is live - any packet counts
                        this.emit('heartbeat');

                        switch (packet.type) {
                            case 'open':
                                this.onHandshake(parsejson(packet.data));
                                break;

                            case 'pong':
                                this.setPing();
                                break;

                            case 'error':
                                var err = new Error('server error');
                                err.code = packet.data;
                                this.emit('error', err);
                                break;

                            case 'message':
                                this.emit('data', packet.data);
                                this.emit('message', packet.data);
                                break;
                        }
                    } else {
                        debug('packet received with socket readyState "%s"', this.readyState);
                    }
                };

                /**
                 * Called upon handshake completion.
                 *
                 * @param {Object} handshake obj
                 * @api private
                 */

                Socket.prototype.onHandshake = function(data) {
                    this.emit('handshake', data);
                    this.id = data.sid;
                    this.transport.query.sid = data.sid;
                    this.upgrades = this.filterUpgrades(data.upgrades);
                    this.pingInterval = data.pingInterval;
                    this.pingTimeout = data.pingTimeout;
                    this.onOpen();
                    // In case open handler closes socket
                    if ('closed' == this.readyState) return;
                    this.setPing();

                    // Prolong liveness of socket on heartbeat
                    this.removeListener('heartbeat', this.onHeartbeat);
                    this.on('heartbeat', this.onHeartbeat);
                };

                /**
                 * Resets ping timeout.
                 *
                 * @api private
                 */

                Socket.prototype.onHeartbeat = function(timeout) {
                    clearTimeout(this.pingTimeoutTimer);
                    var self = this;
                    self.pingTimeoutTimer = setTimeout(function() {
                        if ('closed' == self.readyState) return;
                        self.onClose('ping timeout');
                    }, timeout || (self.pingInterval + self.pingTimeout));
                };

                /**
                 * Pings server every `this.pingInterval` and expects response
                 * within `this.pingTimeout` or closes connection.
                 *
                 * @api private
                 */

                Socket.prototype.setPing = function() {
                    var self = this;
                    clearTimeout(self.pingIntervalTimer);
                    self.pingIntervalTimer = setTimeout(function() {
                        debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
                        self.ping();
                        self.onHeartbeat(self.pingTimeout);
                    }, self.pingInterval);
                };

                /**
                * Sends a ping packet.
                *
                * @api public
                */

                Socket.prototype.ping = function() {
                    this.sendPacket('ping');
                };

                /**
                 * Called on `drain` event
                 *
                 * @api private
                 */

                Socket.prototype.onDrain = function() {
                    for (var i = 0; i < this.prevBufferLen; i++) {
                        if (this.callbackBuffer[i]) {
                            this.callbackBuffer[i]();
                        }
                    }

                    this.writeBuffer.splice(0, this.prevBufferLen);
                    this.callbackBuffer.splice(0, this.prevBufferLen);

                    // setting prevBufferLen = 0 is very important
                    // for example, when upgrading, upgrade packet is sent over,
                    // and a nonzero prevBufferLen could cause problems on `drain`
                    this.prevBufferLen = 0;

                    if (this.writeBuffer.length == 0) {
                        this.emit('drain');
                    } else {
                        this.flush();
                    }
                };

                /**
                 * Flush write buffers.
                 *
                 * @api private
                 */

                Socket.prototype.flush = function() {
                    if ('closed' != this.readyState && this.transport.writable &&
                      !this.upgrading && this.writeBuffer.length) {
                        debug('flushing %d packets in socket', this.writeBuffer.length);
                        this.transport.send(this.writeBuffer);
                        // keep track of current length of writeBuffer
                        // splice writeBuffer and callbackBuffer on `drain`
                        this.prevBufferLen = this.writeBuffer.length;
                        this.emit('flush');
                    }
                };

                /**
                 * Sends a message.
                 *
                 * @param {String} message.
                 * @param {Function} callback function.
                 * @return {Socket} for chaining.
                 * @api public
                 */

                Socket.prototype.write =
                Socket.prototype.send = function(msg, fn) {
                    this.sendPacket('message', msg, fn);
                    return this;
                };

                /**
                 * Sends a packet.
                 *
                 * @param {String} packet type.
                 * @param {String} data.
                 * @param {Function} callback function.
                 * @api private
                 */

                Socket.prototype.sendPacket = function(type, data, fn) {
                    if ('closing' == this.readyState || 'closed' == this.readyState) {
                        return;
                    }

                    var packet = { type: type, data: data };
                    this.emit('packetCreate', packet);
                    this.writeBuffer.push(packet);
                    this.callbackBuffer.push(fn);
                    this.flush();
                };

                /**
                 * Closes the connection.
                 *
                 * @api private
                 */

                Socket.prototype.close = function() {
                    if ('opening' == this.readyState || 'open' == this.readyState) {
                        this.readyState = 'closing';

                        var self = this;

                        function close() {
                            self.onClose('forced close');
                            debug('socket closing - telling transport to close');
                            self.transport.close();
                        }

                        function cleanupAndClose() {
                            self.removeListener('upgrade', cleanupAndClose);
                            self.removeListener('upgradeError', cleanupAndClose);
                            close();
                        }

                        function waitForUpgrade() {
                            // wait for upgrade to finish since we can't send packets while pausing a transport
                            self.once('upgrade', cleanupAndClose);
                            self.once('upgradeError', cleanupAndClose);
                        }

                        if (this.writeBuffer.length) {
                            this.once('drain', function() {
                                if (this.upgrading) {
                                    waitForUpgrade();
                                } else {
                                    close();
                                }
                            });
                        } else if (this.upgrading) {
                            waitForUpgrade();
                        } else {
                            close();
                        }
                    }

                    return this;
                };

                /**
                 * Called upon transport error
                 *
                 * @api private
                 */

                Socket.prototype.onError = function(err) {
                    debug('socket error %j', err);
                    Socket.priorWebsocketSuccess = false;
                    this.emit('error', err);
                    this.onClose('transport error', err);
                };

                /**
                 * Called upon transport close.
                 *
                 * @api private
                 */

                Socket.prototype.onClose = function(reason, desc) {
                    if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
                        debug('socket close with reason: "%s"', reason);
                        var self = this;

                        // clear timers
                        clearTimeout(this.pingIntervalTimer);
                        clearTimeout(this.pingTimeoutTimer);

                        // clean buffers in next tick, so developers can still
                        // grab the buffers on `close` event
                        setTimeout(function() {
                            self.writeBuffer = [];
                            self.callbackBuffer = [];
                            self.prevBufferLen = 0;
                        }, 0);

                        // stop event from firing again for transport
                        this.transport.removeAllListeners('close');

                        // ensure transport won't stay open
                        this.transport.close();

                        // ignore further transport communication
                        this.transport.removeAllListeners();

                        // set ready state
                        this.readyState = 'closed';

                        // clear session id
                        this.id = null;

                        // emit close event
                        this.emit('close', reason, desc);
                    }
                };

                /**
                 * Filters upgrades, returning only those matching client transports.
                 *
                 * @param {Array} server upgrades
                 * @api private
                 *
                 */

                Socket.prototype.filterUpgrades = function(upgrades) {
                    var filteredUpgrades = [];
                    for (var i = 0, j = upgrades.length; i < j; i++) {
                        if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
                    }
                    return filteredUpgrades;
                };

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "./transport": 14, "./transports": 15, "component-emitter": 9, "debug": 22, "engine.io-parser": 25, "indexof": 42, "parsejson": 34, "parseqs": 35, "parseuri": 36 }], 14: [function(_dereq_, module, exports) {
            /**
             * Module dependencies.
             */

            var parser = _dereq_('engine.io-parser');
            var Emitter = _dereq_('component-emitter');

            /**
             * Module exports.
             */

            module.exports = Transport;

            /**
             * Transport abstract constructor.
             *
             * @param {Object} options.
             * @api private
             */

            function Transport(opts) {
                this.path = opts.path;
                this.hostname = opts.hostname;
                this.port = opts.port;
                this.secure = opts.secure;
                this.query = opts.query;
                this.timestampParam = opts.timestampParam;
                this.timestampRequests = opts.timestampRequests;
                this.readyState = '';
                this.agent = opts.agent || false;
                this.socket = opts.socket;
                this.enablesXDR = opts.enablesXDR;

                // SSL options for Node.js client
                this.pfx = opts.pfx;
                this.key = opts.key;
                this.passphrase = opts.passphrase;
                this.cert = opts.cert;
                this.ca = opts.ca;
                this.ciphers = opts.ciphers;
                this.rejectUnauthorized = opts.rejectUnauthorized;
            }

            /**
             * Mix in `Emitter`.
             */

            Emitter(Transport.prototype);

            /**
             * A counter used to prevent collisions in the timestamps used
             * for cache busting.
             */

            Transport.timestamps = 0;

            /**
             * Emits an error.
             *
             * @param {String} str
             * @return {Transport} for chaining
             * @api public
             */

            Transport.prototype.onError = function(msg, desc) {
                var err = new Error(msg);
                err.type = 'TransportError';
                err.description = desc;
                this.emit('error', err);
                return this;
            };

            /**
             * Opens the transport.
             *
             * @api public
             */

            Transport.prototype.open = function() {
                if ('closed' == this.readyState || '' == this.readyState) {
                    this.readyState = 'opening';
                    this.doOpen();
                }

                return this;
            };

            /**
             * Closes the transport.
             *
             * @api private
             */

            Transport.prototype.close = function() {
                if ('opening' == this.readyState || 'open' == this.readyState) {
                    this.doClose();
                    this.onClose();
                }

                return this;
            };

            /**
             * Sends multiple packets.
             *
             * @param {Array} packets
             * @api private
             */

            Transport.prototype.send = function(packets) {
                if ('open' == this.readyState) {
                    this.write(packets);
                } else {
                    throw new Error('Transport not open');
                }
            };

            /**
             * Called upon open
             *
             * @api private
             */

            Transport.prototype.onOpen = function() {
                this.readyState = 'open';
                this.writable = true;
                this.emit('open');
            };

            /**
             * Called with data.
             *
             * @param {String} data
             * @api private
             */

            Transport.prototype.onData = function(data) {
                var packet = parser.decodePacket(data, this.socket.binaryType);
                this.onPacket(packet);
            };

            /**
             * Called with a decoded packet.
             */

            Transport.prototype.onPacket = function(packet) {
                this.emit('packet', packet);
            };

            /**
             * Called upon close.
             *
             * @api private
             */

            Transport.prototype.onClose = function() {
                this.readyState = 'closed';
                this.emit('close');
            };

        }, { "component-emitter": 9, "engine.io-parser": 25 }], 15: [function(_dereq_, module, exports) {
            (function(global) {
                /**
                 * Module dependencies
                 */

                var XMLHttpRequest = _dereq_('xmlhttprequest');
                var XHR = _dereq_('./polling-xhr');
                var JSONP = _dereq_('./polling-jsonp');
                var websocket = _dereq_('./websocket');

                /**
                 * Export transports.
                 */

                exports.polling = polling;
                exports.websocket = websocket;

                /**
                 * Polling transport polymorphic constructor.
                 * Decides on xhr vs jsonp based on feature detection.
                 *
                 * @api private
                 */

                function polling(opts) {
                    var xhr;
                    var xd = false;
                    var xs = false;
                    var jsonp = false !== opts.jsonp;

                    if (global.location) {
                        var isSSL = 'https:' == location.protocol;
                        var port = location.port;

                        // some user agents have empty `location.port`
                        if (!port) {
                            port = isSSL ? 443 : 80;
                        }

                        xd = opts.hostname != location.hostname || port != opts.port;
                        xs = opts.secure != isSSL;
                    }

                    opts.xdomain = xd;
                    opts.xscheme = xs;
                    xhr = new XMLHttpRequest(opts);

                    if ('open' in xhr && !opts.forceJSONP) {
                        return new XHR(opts);
                    } else {
                        if (!jsonp) throw new Error('JSONP disabled');
                        return new JSONP(opts);
                    }
                }

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "./polling-jsonp": 16, "./polling-xhr": 17, "./websocket": 19, "xmlhttprequest": 20 }], 16: [function(_dereq_, module, exports) {
            (function(global) {

                /**
                 * Module requirements.
                 */

                var Polling = _dereq_('./polling');
                var inherit = _dereq_('component-inherit');

                /**
                 * Module exports.
                 */

                module.exports = JSONPPolling;

                /**
                 * Cached regular expressions.
                 */

                var rNewline = /\n/g;
                var rEscapedNewline = /\\n/g;

                /**
                 * Global JSONP callbacks.
                 */

                var callbacks;

                /**
                 * Callbacks count.
                 */

                var index = 0;

                /**
                 * Noop.
                 */

                function empty() { }

                /**
                 * JSONP Polling constructor.
                 *
                 * @param {Object} opts.
                 * @api public
                 */

                function JSONPPolling(opts) {
                    Polling.call(this, opts);

                    this.query = this.query || {};

                    // define global callbacks array if not present
                    // we do this here (lazily) to avoid unneeded global pollution
                    if (!callbacks) {
                        // we need to consider multiple engines in the same page
                        if (!global.___eio) global.___eio = [];
                        callbacks = global.___eio;
                    }

                    // callback identifier
                    this.index = callbacks.length;

                    // add callback to jsonp global
                    var self = this;
                    callbacks.push(function(msg) {
                        self.onData(msg);
                    });

                    // append to query string
                    this.query.j = this.index;

                    // prevent spurious errors from being emitted when the window is unloaded
                    if (global.document && global.addEventListener) {
                        global.addEventListener('beforeunload', function() {
                            if (self.script) self.script.onerror = empty;
                        }, false);
                    }
                }

                /**
                 * Inherits from Polling.
                 */

                inherit(JSONPPolling, Polling);

                /*
                 * JSONP only supports binary as base64 encoded strings
                 */

                JSONPPolling.prototype.supportsBinary = false;

                /**
                 * Closes the socket.
                 *
                 * @api private
                 */

                JSONPPolling.prototype.doClose = function() {
                    if (this.script) {
                        this.script.parentNode.removeChild(this.script);
                        this.script = null;
                    }

                    if (this.form) {
                        this.form.parentNode.removeChild(this.form);
                        this.form = null;
                        this.iframe = null;
                    }

                    Polling.prototype.doClose.call(this);
                };

                /**
                 * Starts a poll cycle.
                 *
                 * @api private
                 */

                JSONPPolling.prototype.doPoll = function() {
                    var self = this;
                    var script = document.createElement('script');

                    if (this.script) {
                        this.script.parentNode.removeChild(this.script);
                        this.script = null;
                    }

                    script.async = true;
                    script.src = this.uri();
                    script.onerror = function(e) {
                        self.onError('jsonp poll error', e);
                    };

                    var insertAt = document.getElementsByTagName('script')[0];
                    insertAt.parentNode.insertBefore(script, insertAt);
                    this.script = script;

                    var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

                    if (isUAgecko) {
                        setTimeout(function() {
                            var iframe = document.createElement('iframe');
                            document.body.appendChild(iframe);
                            document.body.removeChild(iframe);
                        }, 100);
                    }
                };

                /**
                 * Writes with a hidden iframe.
                 *
                 * @param {String} data to send
                 * @param {Function} called upon flush.
                 * @api private
                 */

                JSONPPolling.prototype.doWrite = function(data, fn) {
                    var self = this;

                    if (!this.form) {
                        var form = document.createElement('form');
                        var area = document.createElement('textarea');
                        var id = this.iframeId = 'eio_iframe_' + this.index;
                        var iframe;

                        form.className = 'socketio';
                        form.style.position = 'absolute';
                        form.style.top = '-1000px';
                        form.style.left = '-1000px';
                        form.target = id;
                        form.method = 'POST';
                        form.setAttribute('accept-charset', 'utf-8');
                        area.name = 'd';
                        form.appendChild(area);
                        document.body.appendChild(form);

                        this.form = form;
                        this.area = area;
                    }

                    this.form.action = this.uri();

                    function complete() {
                        initIframe();
                        fn();
                    }

                    function initIframe() {
                        if (self.iframe) {
                            try {
                                self.form.removeChild(self.iframe);
                            } catch (e) {
                                self.onError('jsonp polling iframe removal error', e);
                            }
                        }

                        try {
                            // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
                            var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                            iframe = document.createElement(html);
                        } catch (e) {
                            iframe = document.createElement('iframe');
                            iframe.name = self.iframeId;
                            iframe.src = 'javascript:0';
                        }

                        iframe.id = self.iframeId;

                        self.form.appendChild(iframe);
                        self.iframe = iframe;
                    }

                    initIframe();

                    // escape \n to prevent it from being converted into \r\n by some UAs
                    // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
                    data = data.replace(rEscapedNewline, '\\\n');
                    this.area.value = data.replace(rNewline, '\\n');

                    try {
                        this.form.submit();
                    } catch (e) { }

                    if (this.iframe.attachEvent) {
                        this.iframe.onreadystatechange = function() {
                            if (self.iframe.readyState == 'complete') {
                                complete();
                            }
                        };
                    } else {
                        this.iframe.onload = complete;
                    }
                };

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "./polling": 18, "component-inherit": 21 }], 17: [function(_dereq_, module, exports) {
            (function(global) {
                /**
                 * Module requirements.
                 */

                var XMLHttpRequest = _dereq_('xmlhttprequest');
                var Polling = _dereq_('./polling');
                var Emitter = _dereq_('component-emitter');
                var inherit = _dereq_('component-inherit');
                var debug = _dereq_('debug')('engine.io-client:polling-xhr');

                /**
                 * Module exports.
                 */

                module.exports = XHR;
                module.exports.Request = Request;

                /**
                 * Empty function
                 */

                function empty() { }

                /**
                 * XHR Polling constructor.
                 *
                 * @param {Object} opts
                 * @api public
                 */

                function XHR(opts) {
                    Polling.call(this, opts);

                    if (global.location) {
                        var isSSL = 'https:' == location.protocol;
                        var port = location.port;

                        // some user agents have empty `location.port`
                        if (!port) {
                            port = isSSL ? 443 : 80;
                        }

                        this.xd = opts.hostname != global.location.hostname ||
                          port != opts.port;
                        this.xs = opts.secure != isSSL;
                    }
                }

                /**
                 * Inherits from Polling.
                 */

                inherit(XHR, Polling);

                /**
                 * XHR supports binary
                 */

                XHR.prototype.supportsBinary = true;

                /**
                 * Creates a request.
                 *
                 * @param {String} method
                 * @api private
                 */

                XHR.prototype.request = function(opts) {
                    opts = opts || {};
                    opts.uri = this.uri();
                    opts.xd = this.xd;
                    opts.xs = this.xs;
                    opts.agent = this.agent || false;
                    opts.supportsBinary = this.supportsBinary;
                    opts.enablesXDR = this.enablesXDR;

                    // SSL options for Node.js client
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;

                    return new Request(opts);
                };

                /**
                 * Sends data.
                 *
                 * @param {String} data to send.
                 * @param {Function} called upon flush.
                 * @api private
                 */

                XHR.prototype.doWrite = function(data, fn) {
                    var isBinary = typeof data !== 'string' && data !== undefined;
                    var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
                    var self = this;
                    req.on('success', fn);
                    req.on('error', function(err) {
                        self.onError('xhr post error', err);
                    });
                    this.sendXhr = req;
                };

                /**
                 * Starts a poll cycle.
                 *
                 * @api private
                 */

                XHR.prototype.doPoll = function() {
                    debug('xhr poll');
                    var req = this.request();
                    var self = this;
                    req.on('data', function(data) {
                        self.onData(data);
                    });
                    req.on('error', function(err) {
                        self.onError('xhr poll error', err);
                    });
                    this.pollXhr = req;
                };

                /**
                 * Request constructor
                 *
                 * @param {Object} options
                 * @api public
                 */

                function Request(opts) {
                    this.method = opts.method || 'GET';
                    this.uri = opts.uri;
                    this.xd = !!opts.xd;
                    this.xs = !!opts.xs;
                    this.async = false !== opts.async;
                    this.data = undefined != opts.data ? opts.data : null;
                    this.agent = opts.agent;
                    this.isBinary = opts.isBinary;
                    this.supportsBinary = opts.supportsBinary;
                    this.enablesXDR = opts.enablesXDR;

                    // SSL options for Node.js client
                    this.pfx = opts.pfx;
                    this.key = opts.key;
                    this.passphrase = opts.passphrase;
                    this.cert = opts.cert;
                    this.ca = opts.ca;
                    this.ciphers = opts.ciphers;
                    this.rejectUnauthorized = opts.rejectUnauthorized;

                    this.create();
                }

                /**
                 * Mix in `Emitter`.
                 */

                Emitter(Request.prototype);

                /**
                 * Creates the XHR object and sends the request.
                 *
                 * @api private
                 */

                Request.prototype.create = function() {
                    var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

                    // SSL options for Node.js client
                    opts.pfx = this.pfx;
                    opts.key = this.key;
                    opts.passphrase = this.passphrase;
                    opts.cert = this.cert;
                    opts.ca = this.ca;
                    opts.ciphers = this.ciphers;
                    opts.rejectUnauthorized = this.rejectUnauthorized;

                    var xhr = this.xhr = new XMLHttpRequest(opts);
                    var self = this;

                    try {
                        debug('xhr open %s: %s', this.method, this.uri);
                        xhr.open(this.method, this.uri, this.async);
                        if (this.supportsBinary) {
                            // This has to be done after open because Firefox is stupid
                            // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
                            xhr.responseType = 'arraybuffer';
                        }

                        if ('POST' == this.method) {
                            try {
                                if (this.isBinary) {
                                    xhr.setRequestHeader('Content-type', 'application/octet-stream');
                                } else {
                                    xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                                }
                            } catch (e) { }
                        }

                        // ie6 check
                        if ('withCredentials' in xhr) {
                            xhr.withCredentials = true;
                        }

                        if (this.hasXDR()) {
                            xhr.onload = function() {
                                self.onLoad();
                            };
                            xhr.onerror = function() {
                                self.onError(xhr.responseText);
                            };
                        } else {
                            xhr.onreadystatechange = function() {
                                if (4 != xhr.readyState) return;
                                if (200 == xhr.status || 1223 == xhr.status) {
                                    self.onLoad();
                                } else {
                                    // make sure the `error` event handler that's user-set
                                    // does not throw in the same tick and gets caught here
                                    setTimeout(function() {
                                        self.onError(xhr.status);
                                    }, 0);
                                }
                            };
                        }

                        debug('xhr data %s', this.data);
                        xhr.send(this.data);
                    } catch (e) {
                        // Need to defer since .create() is called directly fhrom the constructor
                        // and thus the 'error' event can only be only bound *after* this exception
                        // occurs.  Therefore, also, we cannot throw here at all.
                        setTimeout(function() {
                            self.onError(e);
                        }, 0);
                        return;
                    }

                    if (global.document) {
                        this.index = Request.requestsCount++;
                        Request.requests[this.index] = this;
                    }
                };

                /**
                 * Called upon successful response.
                 *
                 * @api private
                 */

                Request.prototype.onSuccess = function() {
                    this.emit('success');
                    this.cleanup();
                };

                /**
                 * Called if we have data.
                 *
                 * @api private
                 */

                Request.prototype.onData = function(data) {
                    this.emit('data', data);
                    this.onSuccess();
                };

                /**
                 * Called upon error.
                 *
                 * @api private
                 */

                Request.prototype.onError = function(err) {
                    this.emit('error', err);
                    this.cleanup(true);
                };

                /**
                 * Cleans up house.
                 *
                 * @api private
                 */

                Request.prototype.cleanup = function(fromError) {
                    if ('undefined' == typeof this.xhr || null === this.xhr) {
                        return;
                    }
                    // xmlhttprequest
                    if (this.hasXDR()) {
                        this.xhr.onload = this.xhr.onerror = empty;
                    } else {
                        this.xhr.onreadystatechange = empty;
                    }

                    if (fromError) {
                        try {
                            this.xhr.abort();
                        } catch (e) { }
                    }

                    if (global.document) {
                        delete Request.requests[this.index];
                    }

                    this.xhr = null;
                };

                /**
                 * Called upon load.
                 *
                 * @api private
                 */

                Request.prototype.onLoad = function() {
                    var data;
                    try {
                        var contentType;
                        try {
                            contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
                        } catch (e) { }
                        if (contentType === 'application/octet-stream') {
                            data = this.xhr.response;
                        } else {
                            if (!this.supportsBinary) {
                                data = this.xhr.responseText;
                            } else {
                                data = 'ok';
                            }
                        }
                    } catch (e) {
                        this.onError(e);
                    }
                    if (null != data) {
                        this.onData(data);
                    }
                };

                /**
                 * Check if it has XDomainRequest.
                 *
                 * @api private
                 */

                Request.prototype.hasXDR = function() {
                    return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
                };

                /**
                 * Aborts the request.
                 *
                 * @api public
                 */

                Request.prototype.abort = function() {
                    this.cleanup();
                };

                /**
                 * Aborts pending requests when unloading the window. This is needed to prevent
                 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
                 * emitted.
                 */

                if (global.document) {
                    Request.requestsCount = 0;
                    Request.requests = {};
                    if (global.attachEvent) {
                        global.attachEvent('onunload', unloadHandler);
                    } else if (global.addEventListener) {
                        global.addEventListener('beforeunload', unloadHandler, false);
                    }
                }

                function unloadHandler() {
                    for (var i in Request.requests) {
                        if (Request.requests.hasOwnProperty(i)) {
                            Request.requests[i].abort();
                        }
                    }
                }

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "./polling": 18, "component-emitter": 9, "component-inherit": 21, "debug": 22, "xmlhttprequest": 20 }], 18: [function(_dereq_, module, exports) {
            /**
             * Module dependencies.
             */

            var Transport = _dereq_('../transport');
            var parseqs = _dereq_('parseqs');
            var parser = _dereq_('engine.io-parser');
            var inherit = _dereq_('component-inherit');
            var debug = _dereq_('debug')('engine.io-client:polling');

            /**
             * Module exports.
             */

            module.exports = Polling;

            /**
             * Is XHR2 supported?
             */

            var hasXHR2 = (function() {
                var XMLHttpRequest = _dereq_('xmlhttprequest');
                var xhr = new XMLHttpRequest({ xdomain: false });
                return null != xhr.responseType;
            })();

            /**
             * Polling interface.
             *
             * @param {Object} opts
             * @api private
             */

            function Polling(opts) {
                var forceBase64 = (opts && opts.forceBase64);
                if (!hasXHR2 || forceBase64) {
                    this.supportsBinary = false;
                }
                Transport.call(this, opts);
            }

            /**
             * Inherits from Transport.
             */

            inherit(Polling, Transport);

            /**
             * Transport name.
             */

            Polling.prototype.name = 'polling';

            /**
             * Opens the socket (triggers polling). We write a PING message to determine
             * when the transport is open.
             *
             * @api private
             */

            Polling.prototype.doOpen = function() {
                this.poll();
            };

            /**
             * Pauses polling.
             *
             * @param {Function} callback upon buffers are flushed and transport is paused
             * @api private
             */

            Polling.prototype.pause = function(onPause) {
                var pending = 0;
                var self = this;

                this.readyState = 'pausing';

                function pause() {
                    debug('paused');
                    self.readyState = 'paused';
                    onPause();
                }

                if (this.polling || !this.writable) {
                    var total = 0;

                    if (this.polling) {
                        debug('we are currently polling - waiting to pause');
                        total++;
                        this.once('pollComplete', function() {
                            debug('pre-pause polling complete');
                            --total || pause();
                        });
                    }

                    if (!this.writable) {
                        debug('we are currently writing - waiting to pause');
                        total++;
                        this.once('drain', function() {
                            debug('pre-pause writing complete');
                            --total || pause();
                        });
                    }
                } else {
                    pause();
                }
            };

            /**
             * Starts polling cycle.
             *
             * @api public
             */

            Polling.prototype.poll = function() {
                debug('polling');
                this.polling = true;
                this.doPoll();
                this.emit('poll');
            };

            /**
             * Overloads onData to detect payloads.
             *
             * @api private
             */

            Polling.prototype.onData = function(data) {
                var self = this;
                debug('polling got data %s', data);
                var callback = function(packet, index, total) {
                    // if its the first message we consider the transport open
                    if ('opening' == self.readyState) {
                        self.onOpen();
                    }

                    // if its a close packet, we close the ongoing requests
                    if ('close' == packet.type) {
                        self.onClose();
                        return false;
                    }

                    // otherwise bypass onData and handle the message
                    self.onPacket(packet);
                };

                // decode payload
                parser.decodePayload(data, this.socket.binaryType, callback);

                // if an event did not trigger closing
                if ('closed' != this.readyState) {
                    // if we got data we're not polling
                    this.polling = false;
                    this.emit('pollComplete');

                    if ('open' == this.readyState) {
                        this.poll();
                    } else {
                        debug('ignoring poll - transport state "%s"', this.readyState);
                    }
                }
            };

            /**
             * For polling, send a close packet.
             *
             * @api private
             */

            Polling.prototype.doClose = function() {
                var self = this;

                function close() {
                    debug('writing close packet');
                    self.write([{ type: 'close' }]);
                }

                if ('open' == this.readyState) {
                    debug('transport open - closing');
                    close();
                } else {
                    // in case we're trying to close while
                    // handshaking is in progress (GH-164)
                    debug('transport not open - deferring close');
                    this.once('open', close);
                }
            };

            /**
             * Writes a packets payload.
             *
             * @param {Array} data packets
             * @param {Function} drain callback
             * @api private
             */

            Polling.prototype.write = function(packets) {
                var self = this;
                this.writable = false;
                var callbackfn = function() {
                    self.writable = true;
                    self.emit('drain');
                };

                var self = this;
                parser.encodePayload(packets, this.supportsBinary, function(data) {
                    self.doWrite(data, callbackfn);
                });
            };

            /**
             * Generates uri for connection.
             *
             * @api private
             */

            Polling.prototype.uri = function() {
                var query = this.query || {};
                var schema = this.secure ? 'https' : 'http';
                var port = '';

                // cache busting is forced
                if (false !== this.timestampRequests) {
                    query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
                }

                if (!this.supportsBinary && !query.sid) {
                    query.b64 = 1;
                }

                query = parseqs.encode(query);

                // avoid port if default for schema
                if (this.port && (('https' == schema && this.port != 443) ||
                   ('http' == schema && this.port != 80))) {
                    port = ':' + this.port;
                }

                // prepend ? to query
                if (query.length) {
                    query = '?' + query;
                }

                return schema + '://' + this.hostname + port + this.path + query;
            };

        }, { "../transport": 14, "component-inherit": 21, "debug": 22, "engine.io-parser": 25, "parseqs": 35, "xmlhttprequest": 20 }], 19: [function(_dereq_, module, exports) {
            /**
             * Module dependencies.
             */

            var Transport = _dereq_('../transport');
            var parser = _dereq_('engine.io-parser');
            var parseqs = _dereq_('parseqs');
            var inherit = _dereq_('component-inherit');
            var debug = _dereq_('debug')('engine.io-client:websocket');

            /**
             * `ws` exposes a WebSocket-compatible interface in
             * Node, or the `WebSocket` or `MozWebSocket` globals
             * in the browser.
             */

            var WebSocket = _dereq_('ws');

            /**
             * Module exports.
             */

            module.exports = WS;

            /**
             * WebSocket transport constructor.
             *
             * @api {Object} connection options
             * @api public
             */

            function WS(opts) {
                var forceBase64 = (opts && opts.forceBase64);
                if (forceBase64) {
                    this.supportsBinary = false;
                }
                Transport.call(this, opts);
            }

            /**
             * Inherits from Transport.
             */

            inherit(WS, Transport);

            /**
             * Transport name.
             *
             * @api public
             */

            WS.prototype.name = 'websocket';

            /*
             * WebSockets support binary
             */

            WS.prototype.supportsBinary = true;

            /**
             * Opens socket.
             *
             * @api private
             */

            WS.prototype.doOpen = function() {
                if (!this.check()) {
                    // let probe timeout
                    return;
                }

                var self = this;
                var uri = this.uri();
                var protocols = void (0);
                var opts = { agent: this.agent };

                // SSL options for Node.js client
                opts.pfx = this.pfx;
                opts.key = this.key;
                opts.passphrase = this.passphrase;
                opts.cert = this.cert;
                opts.ca = this.ca;
                opts.ciphers = this.ciphers;
                opts.rejectUnauthorized = this.rejectUnauthorized;

                this.ws = new WebSocket(uri, protocols, opts);

                if (this.ws.binaryType === undefined) {
                    this.supportsBinary = false;
                }

                this.ws.binaryType = 'arraybuffer';
                this.addEventListeners();
            };

            /**
             * Adds event listeners to the socket
             *
             * @api private
             */

            WS.prototype.addEventListeners = function() {
                var self = this;

                this.ws.onopen = function() {
                    self.onOpen();
                };
                this.ws.onclose = function() {
                    self.onClose();
                };
                this.ws.onmessage = function(ev) {
                    self.onData(ev.data);
                };
                this.ws.onerror = function(e) {
                    self.onError('websocket error', e);
                };
            };

            /**
             * Override `onData` to use a timer on iOS.
             * See: https://gist.github.com/mloughran/2052006
             *
             * @api private
             */

            if ('undefined' != typeof navigator
              && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
                WS.prototype.onData = function(data) {
                    var self = this;
                    setTimeout(function() {
                        Transport.prototype.onData.call(self, data);
                    }, 0);
                };
            }

            /**
             * Writes data to socket.
             *
             * @param {Array} array of packets.
             * @api private
             */

            WS.prototype.write = function(packets) {
                var self = this;
                this.writable = false;
                // encodePacket efficient as it uses WS framing
                // no need for encodePayload
                for (var i = 0, l = packets.length; i < l; i++) {
                    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
                        //Sometimes the websocket has already been closed but the browser didn't
                        //have a chance of informing us about it yet, in that case send will
                        //throw an error
                        try {
                            self.ws.send(data);
                        } catch (e) {
                            debug('websocket closed before onclose event');
                        }
                    });
                }

                function ondrain() {
                    self.writable = true;
                    self.emit('drain');
                }
                // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                setTimeout(ondrain, 0);
            };

            /**
             * Called upon close
             *
             * @api private
             */

            WS.prototype.onClose = function() {
                Transport.prototype.onClose.call(this);
            };

            /**
             * Closes socket.
             *
             * @api private
             */

            WS.prototype.doClose = function() {
                if (typeof this.ws !== 'undefined') {
                    this.ws.close();
                }
            };

            /**
             * Generates uri for connection.
             *
             * @api private
             */

            WS.prototype.uri = function() {
                var query = this.query || {};
                var schema = this.secure ? 'wss' : 'ws';
                var port = '';

                // avoid port if default for schema
                if (this.port && (('wss' == schema && this.port != 443)
                  || ('ws' == schema && this.port != 80))) {
                    port = ':' + this.port;
                }

                // append timestamp to URI
                if (this.timestampRequests) {
                    query[this.timestampParam] = +new Date;
                }

                // communicate binary support capabilities
                if (!this.supportsBinary) {
                    query.b64 = 1;
                }

                query = parseqs.encode(query);

                // prepend ? to query
                if (query.length) {
                    query = '?' + query;
                }

                return schema + '://' + this.hostname + port + this.path + query;
            };

            /**
             * Feature detection for WebSocket.
             *
             * @return {Boolean} whether this transport is available.
             * @api public
             */

            WS.prototype.check = function() {
                return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
            };

        }, { "../transport": 14, "component-inherit": 21, "debug": 22, "engine.io-parser": 25, "parseqs": 35, "ws": 37 }], 20: [function(_dereq_, module, exports) {
            // browser shim for xmlhttprequest module
            var hasCORS = _dereq_('has-cors');

            module.exports = function(opts) {
                var xdomain = opts.xdomain;

                // scheme must be same when usign XDomainRequest
                // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
                var xscheme = opts.xscheme;

                // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
                // https://github.com/Automattic/engine.io-client/pull/217
                var enablesXDR = opts.enablesXDR;

                // XMLHttpRequest can be disabled on IE
                try {
                    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
                        return new XMLHttpRequest();
                    }
                } catch (e) { }

                // Use XDomainRequest for IE8 if enablesXDR is true
                // because loading bar keeps flashing when using jsonp-polling
                // https://github.com/yujiosaka/socke.io-ie8-loading-example
                try {
                    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
                        return new XDomainRequest();
                    }
                } catch (e) { }

                if (!xdomain) {
                    try {
                        return new ActiveXObject('Microsoft.XMLHTTP');
                    } catch (e) { }
                }
            }

        }, { "has-cors": 40 }], 21: [function(_dereq_, module, exports) {

            module.exports = function(a, b) {
                var fn = function() { };
                fn.prototype = b.prototype;
                a.prototype = new fn;
                a.prototype.constructor = a;
            };
        }, {}], 22: [function(_dereq_, module, exports) {

            /**
             * This is the web browser implementation of `debug()`.
             *
             * Expose `debug()` as the module.
             */

            exports = module.exports = _dereq_('./debug');
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;

            /**
             * Colors.
             */

            exports.colors = [
              'lightseagreen',
              'forestgreen',
              'goldenrod',
              'dodgerblue',
              'darkorchid',
              'crimson'
            ];

            /**
             * Currently only WebKit-based Web Inspectors, Firefox >= v31,
             * and the Firebug extension (any Firefox version) are known
             * to support "%c" CSS customizations.
             *
             * TODO: add a `localStorage` variable to explicitly enable/disable colors
             */

            function useColors() {
                // is webkit? http://stackoverflow.com/a/16459606/376773
                return ('WebkitAppearance' in document.documentElement.style) ||
                  // is firebug? http://stackoverflow.com/a/398120/376773
                  (window.console && (console.firebug || (console.exception && console.table))) ||
                  // is firefox >= v31?
                  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                  (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
            }

            /**
             * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
             */

            exports.formatters.j = function(v) {
                return JSON.stringify(v);
            };


            /**
             * Colorize log arguments if enabled.
             *
             * @api public
             */

            function formatArgs() {
                var args = arguments;
                var useColors = this.useColors;

                args[0] = (useColors ? '%c' : '')
                  + this.namespace
                  + (useColors ? ' %c' : ' ')
                  + args[0]
                  + (useColors ? '%c ' : ' ')
                  + '+' + exports.humanize(this.diff);

                if (!useColors) return args;

                var c = 'color: ' + this.color;
                args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

                // the final "%c" is somewhat tricky, because there could be other
                // arguments passed either before or after the %c, so we need to
                // figure out the correct index to insert the CSS into
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-z%]/g, function(match) {
                    if ('%' === match) return;
                    index++;
                    if ('%c' === match) {
                        // we only are interested in the *last* %c
                        // (the user may have provided their own)
                        lastC = index;
                    }
                });

                args.splice(lastC, 0, c);
                return args;
            }

            /**
             * Invokes `console.log()` when available.
             * No-op when `console.log` is not a "function".
             *
             * @api public
             */

            function log() {
                // This hackery is required for IE8,
                // where the `console.log` function doesn't have 'apply'
                return 'object' == typeof console
                  && 'function' == typeof console.log
                  && Function.prototype.apply.call(console.log, console, arguments);
            }

            /**
             * Save `namespaces`.
             *
             * @param {String} namespaces
             * @api private
             */

            function save(namespaces) {
                try {
                    if (null == namespaces) {
                        localStorage.removeItem('debug');
                    } else {
                        localStorage.debug = namespaces;
                    }
                } catch (e) { }
            }

            /**
             * Load `namespaces`.
             *
             * @return {String} returns the previously persisted debug modes
             * @api private
             */

            function load() {
                var r;
                try {
                    r = localStorage.debug;
                } catch (e) { }
                return r;
            }

            /**
             * Enable namespaces listed in `localStorage.debug` initially.
             */

            exports.enable(load());

        }, { "./debug": 23 }], 23: [function(_dereq_, module, exports) {

            /**
             * This is the common logic for both the Node.js and web browser
             * implementations of `debug()`.
             *
             * Expose `debug()` as the module.
             */

            exports = module.exports = debug;
            exports.coerce = coerce;
            exports.disable = disable;
            exports.enable = enable;
            exports.enabled = enabled;
            exports.humanize = _dereq_('ms');

            /**
             * The currently active debug mode names, and names to skip.
             */

            exports.names = [];
            exports.skips = [];

            /**
             * Map of special "%n" handling functions, for the debug "format" argument.
             *
             * Valid key names are a single, lowercased letter, i.e. "n".
             */

            exports.formatters = {};

            /**
             * Previously assigned color.
             */

            var prevColor = 0;

            /**
             * Previous log timestamp.
             */

            var prevTime;

            /**
             * Select a color.
             *
             * @return {Number}
             * @api private
             */

            function selectColor() {
                return exports.colors[prevColor++ % exports.colors.length];
            }

            /**
             * Create a debugger with the given `namespace`.
             *
             * @param {String} namespace
             * @return {Function}
             * @api public
             */

            function debug(namespace) {

                // define the `disabled` version
                function disabled() {
                }
                disabled.enabled = false;

                // define the `enabled` version
                function enabled() {

                    var self = enabled;

                    // set `diff` timestamp
                    var curr = +new Date();
                    var ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;

                    // add the `color` if not set
                    if (null == self.useColors) self.useColors = exports.useColors();
                    if (null == self.color && self.useColors) self.color = selectColor();

                    var args = Array.prototype.slice.call(arguments);

                    args[0] = exports.coerce(args[0]);

                    if ('string' !== typeof args[0]) {
                        // anything else let's inspect with %o
                        args = ['%o'].concat(args);
                    }

                    // apply any `formatters` transformations
                    var index = 0;
                    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
                        // if we encounter an escaped % then don't increase the array index
                        if (match === '%') return match;
                        index++;
                        var formatter = exports.formatters[format];
                        if ('function' === typeof formatter) {
                            var val = args[index];
                            match = formatter.call(self, val);

                            // now we need to remove `args[index]` since it's inlined in the `format`
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    });

                    if ('function' === typeof exports.formatArgs) {
                        args = exports.formatArgs.apply(self, args);
                    }
                    var logFn = enabled.log || exports.log || console.log.bind(console);
                    logFn.apply(self, args);
                }
                enabled.enabled = true;

                var fn = exports.enabled(namespace) ? enabled : disabled;

                fn.namespace = namespace;

                return fn;
            }

            /**
             * Enables a debug mode by namespaces. This can include modes
             * separated by a colon and wildcards.
             *
             * @param {String} namespaces
             * @api public
             */

            function enable(namespaces) {
                exports.save(namespaces);

                var split = (namespaces || '').split(/[\s,]+/);
                var len = split.length;

                for (var i = 0; i < len; i++) {
                    if (!split[i]) continue; // ignore empty strings
                    namespaces = split[i].replace(/\*/g, '.*?');
                    if (namespaces[0] === '-') {
                        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                    } else {
                        exports.names.push(new RegExp('^' + namespaces + '$'));
                    }
                }
            }

            /**
             * Disable debug output.
             *
             * @api public
             */

            function disable() {
                exports.enable('');
            }

            /**
             * Returns true if the given mode name is enabled, false otherwise.
             *
             * @param {String} name
             * @return {Boolean}
             * @api public
             */

            function enabled(name) {
                var i, len;
                for (i = 0, len = exports.skips.length; i < len; i++) {
                    if (exports.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = exports.names.length; i < len; i++) {
                    if (exports.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }

            /**
             * Coerce `val`.
             *
             * @param {Mixed} val
             * @return {Mixed}
             * @api private
             */

            function coerce(val) {
                if (val instanceof Error) return val.stack || val.message;
                return val;
            }

        }, { "ms": 24 }], 24: [function(_dereq_, module, exports) {
            /**
             * Helpers.
             */

            var s = 1000;
            var m = s * 60;
            var h = m * 60;
            var d = h * 24;
            var y = d * 365.25;

            /**
             * Parse or format the given `val`.
             *
             * Options:
             *
             *  - `long` verbose formatting [false]
             *
             * @param {String|Number} val
             * @param {Object} options
             * @return {String|Number}
             * @api public
             */

            module.exports = function(val, options) {
                options = options || {};
                if ('string' == typeof val) return parse(val);
                return options.long
                  ? long(val)
                  : short(val);
            };

            /**
             * Parse the given `str` and return milliseconds.
             *
             * @param {String} str
             * @return {Number}
             * @api private
             */

            function parse(str) {
                var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
                if (!match) return;
                var n = parseFloat(match[1]);
                var type = (match[2] || 'ms').toLowerCase();
                switch (type) {
                    case 'years':
                    case 'year':
                    case 'y':
                        return n * y;
                    case 'days':
                    case 'day':
                    case 'd':
                        return n * d;
                    case 'hours':
                    case 'hour':
                    case 'h':
                        return n * h;
                    case 'minutes':
                    case 'minute':
                    case 'm':
                        return n * m;
                    case 'seconds':
                    case 'second':
                    case 's':
                        return n * s;
                    case 'ms':
                        return n;
                }
            }

            /**
             * Short format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */

            function short(ms) {
                if (ms >= d) return Math.round(ms / d) + 'd';
                if (ms >= h) return Math.round(ms / h) + 'h';
                if (ms >= m) return Math.round(ms / m) + 'm';
                if (ms >= s) return Math.round(ms / s) + 's';
                return ms + 'ms';
            }

            /**
             * Long format for `ms`.
             *
             * @param {Number} ms
             * @return {String}
             * @api private
             */

            function long(ms) {
                return plural(ms, d, 'day')
                  || plural(ms, h, 'hour')
                  || plural(ms, m, 'minute')
                  || plural(ms, s, 'second')
                  || ms + ' ms';
            }

            /**
             * Pluralization helper.
             */

            function plural(ms, n, name) {
                if (ms < n) return;
                if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
                return Math.ceil(ms / n) + ' ' + name + 's';
            }

        }, {}], 25: [function(_dereq_, module, exports) {
            (function(global) {
                /**
                 * Module dependencies.
                 */

                var keys = _dereq_('./keys');
                var hasBinary = _dereq_('has-binary');
                var sliceBuffer = _dereq_('arraybuffer.slice');
                var base64encoder = _dereq_('base64-arraybuffer');
                var after = _dereq_('after');
                var utf8 = _dereq_('utf8');

                /**
                 * Check if we are running an android browser. That requires us to use
                 * ArrayBuffer with polling transports...
                 *
                 * http://ghinda.net/jpeg-blob-ajax-android/
                 */

                var isAndroid = navigator.userAgent.match(/Android/i);

                /**
                 * Check if we are running in PhantomJS.
                 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
                 * https://github.com/ariya/phantomjs/issues/11395
                 * @type boolean
                 */
                var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

                /**
                 * When true, avoids using Blobs to encode payloads.
                 * @type boolean
                 */
                var dontSendBlobs = isAndroid || isPhantomJS;

                /**
                 * Current protocol version.
                 */

                exports.protocol = 3;

                /**
                 * Packet types.
                 */

                var packets = exports.packets = {
                    open: 0    // non-ws
                  , close: 1    // non-ws
                  , ping: 2
                  , pong: 3
                  , message: 4
                  , upgrade: 5
                  , noop: 6
                };

                var packetslist = keys(packets);

                /**
                 * Premade error packet.
                 */

                var err = { type: 'error', data: 'parser error' };

                /**
                 * Create a blob api even for blob builder when vendor prefixes exist
                 */

                var Blob = _dereq_('blob');

                /**
                 * Encodes a packet.
                 *
                 *     <packet type id> [ <data> ]
                 *
                 * Example:
                 *
                 *     5hello world
                 *     3
                 *     4
                 *
                 * Binary is encoded in an identical principle
                 *
                 * @api private
                 */

                exports.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
                    if ('function' == typeof supportsBinary) {
                        callback = supportsBinary;
                        supportsBinary = false;
                    }

                    if ('function' == typeof utf8encode) {
                        callback = utf8encode;
                        utf8encode = null;
                    }

                    var data = (packet.data === undefined)
                      ? undefined
                      : packet.data.buffer || packet.data;

                    if (global.ArrayBuffer && data instanceof ArrayBuffer) {
                        return encodeArrayBuffer(packet, supportsBinary, callback);
                    } else if (Blob && data instanceof global.Blob) {
                        return encodeBlob(packet, supportsBinary, callback);
                    }

                    // might be an object with { base64: true, data: dataAsBase64String }
                    if (data && data.base64) {
                        return encodeBase64Object(packet, callback);
                    }

                    // Sending data as a utf-8 string
                    var encoded = packets[packet.type];

                    // data fragment is optional
                    if (undefined !== packet.data) {
                        encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
                    }

                    return callback('' + encoded);

                };

                function encodeBase64Object(packet, callback) {
                    // packet data is an object { base64: true, data: dataAsBase64String }
                    var message = 'b' + exports.packets[packet.type] + packet.data.data;
                    return callback(message);
                }

                /**
                 * Encode packet helpers for binary types
                 */

                function encodeArrayBuffer(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback);
                    }

                    var data = packet.data;
                    var contentArray = new Uint8Array(data);
                    var resultBuffer = new Uint8Array(1 + data.byteLength);

                    resultBuffer[0] = packets[packet.type];
                    for (var i = 0; i < contentArray.length; i++) {
                        resultBuffer[i + 1] = contentArray[i];
                    }

                    return callback(resultBuffer.buffer);
                }

                function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback);
                    }

                    var fr = new FileReader();
                    fr.onload = function() {
                        packet.data = fr.result;
                        exports.encodePacket(packet, supportsBinary, true, callback);
                    };
                    return fr.readAsArrayBuffer(packet.data);
                }

                function encodeBlob(packet, supportsBinary, callback) {
                    if (!supportsBinary) {
                        return exports.encodeBase64Packet(packet, callback);
                    }

                    if (dontSendBlobs) {
                        return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
                    }

                    var length = new Uint8Array(1);
                    length[0] = packets[packet.type];
                    var blob = new Blob([length.buffer, packet.data]);

                    return callback(blob);
                }

                /**
                 * Encodes a packet with binary data in a base64 string
                 *
                 * @param {Object} packet, has `type` and `data`
                 * @return {String} base64 encoded message
                 */

                exports.encodeBase64Packet = function(packet, callback) {
                    var message = 'b' + exports.packets[packet.type];
                    if (Blob && packet.data instanceof Blob) {
                        var fr = new FileReader();
                        fr.onload = function() {
                            var b64 = fr.result.split(',')[1];
                            callback(message + b64);
                        };
                        return fr.readAsDataURL(packet.data);
                    }

                    var b64data;
                    try {
                        b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
                    } catch (e) {
                        // iPhone Safari doesn't let you apply with typed arrays
                        var typed = new Uint8Array(packet.data);
                        var basic = new Array(typed.length);
                        for (var i = 0; i < typed.length; i++) {
                            basic[i] = typed[i];
                        }
                        b64data = String.fromCharCode.apply(null, basic);
                    }
                    message += global.btoa(b64data);
                    return callback(message);
                };

                /**
                 * Decodes a packet. Changes format to Blob if requested.
                 *
                 * @return {Object} with `type` and `data` (if any)
                 * @api private
                 */

                exports.decodePacket = function(data, binaryType, utf8decode) {
                    // String data
                    if (typeof data == 'string' || data === undefined) {
                        if (data.charAt(0) == 'b') {
                            return exports.decodeBase64Packet(data.substr(1), binaryType);
                        }

                        if (utf8decode) {
                            try {
                                data = utf8.decode(data);
                            } catch (e) {
                                return err;
                            }
                        }
                        var type = data.charAt(0);

                        if (Number(type) != type || !packetslist[type]) {
                            return err;
                        }

                        if (data.length > 1) {
                            return { type: packetslist[type], data: data.substring(1) };
                        } else {
                            return { type: packetslist[type] };
                        }
                    }

                    var asArray = new Uint8Array(data);
                    var type = asArray[0];
                    var rest = sliceBuffer(data, 1);
                    if (Blob && binaryType === 'blob') {
                        rest = new Blob([rest]);
                    }
                    return { type: packetslist[type], data: rest };
                };

                /**
                 * Decodes a packet encoded in a base64 string
                 *
                 * @param {String} base64 encoded message
                 * @return {Object} with `type` and `data` (if any)
                 */

                exports.decodeBase64Packet = function(msg, binaryType) {
                    var type = packetslist[msg.charAt(0)];
                    if (!global.ArrayBuffer) {
                        return { type: type, data: { base64: true, data: msg.substr(1) } };
                    }

                    var data = base64encoder.decode(msg.substr(1));

                    if (binaryType === 'blob' && Blob) {
                        data = new Blob([data]);
                    }

                    return { type: type, data: data };
                };

                /**
                 * Encodes multiple messages (payload).
                 *
                 *     <length>:data
                 *
                 * Example:
                 *
                 *     11:hello world2:hi
                 *
                 * If any contents are binary, they will be encoded as base64 strings. Base64
                 * encoded strings are marked with a b before the length specifier
                 *
                 * @param {Array} packets
                 * @api private
                 */

                exports.encodePayload = function(packets, supportsBinary, callback) {
                    if (typeof supportsBinary == 'function') {
                        callback = supportsBinary;
                        supportsBinary = null;
                    }

                    var isBinary = hasBinary(packets);

                    if (supportsBinary && isBinary) {
                        if (Blob && !dontSendBlobs) {
                            return exports.encodePayloadAsBlob(packets, callback);
                        }

                        return exports.encodePayloadAsArrayBuffer(packets, callback);
                    }

                    if (!packets.length) {
                        return callback('0:');
                    }

                    function setLengthHeader(message) {
                        return message.length + ':' + message;
                    }

                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
                            doneCallback(null, setLengthHeader(message));
                        });
                    }

                    map(packets, encodeOne, function(err, results) {
                        return callback(results.join(''));
                    });
                };

                /**
                 * Async array map using after
                 */

                function map(ary, each, done) {
                    var result = new Array(ary.length);
                    var next = after(ary.length, done);

                    var eachWithIndex = function(i, el, cb) {
                        each(el, function(error, msg) {
                            result[i] = msg;
                            cb(error, result);
                        });
                    };

                    for (var i = 0; i < ary.length; i++) {
                        eachWithIndex(i, ary[i], next);
                    }
                }

                /*
                 * Decodes data when a payload is maybe expected. Possible binary contents are
                 * decoded from their base64 representation
                 *
                 * @param {String} data, callback method
                 * @api public
                 */

                exports.decodePayload = function(data, binaryType, callback) {
                    if (typeof data != 'string') {
                        return exports.decodePayloadAsBinary(data, binaryType, callback);
                    }

                    if (typeof binaryType === 'function') {
                        callback = binaryType;
                        binaryType = null;
                    }

                    var packet;
                    if (data == '') {
                        // parser error - ignoring payload
                        return callback(err, 0, 1);
                    }

                    var length = ''
                      , n, msg;

                    for (var i = 0, l = data.length; i < l; i++) {
                        var chr = data.charAt(i);

                        if (':' != chr) {
                            length += chr;
                        } else {
                            if ('' == length || (length != (n = Number(length)))) {
                                // parser error - ignoring payload
                                return callback(err, 0, 1);
                            }

                            msg = data.substr(i + 1, n);

                            if (length != msg.length) {
                                // parser error - ignoring payload
                                return callback(err, 0, 1);
                            }

                            if (msg.length) {
                                packet = exports.decodePacket(msg, binaryType, true);

                                if (err.type == packet.type && err.data == packet.data) {
                                    // parser error in individual packet - ignoring payload
                                    return callback(err, 0, 1);
                                }

                                var ret = callback(packet, i + n, l);
                                if (false === ret) return;
                            }

                            // advance cursor
                            i += n;
                            length = '';
                        }
                    }

                    if (length != '') {
                        // parser error - ignoring payload
                        return callback(err, 0, 1);
                    }

                };

                /**
                 * Encodes multiple messages (payload) as binary.
                 *
                 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
                 * 255><data>
                 *
                 * Example:
                 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
                 *
                 * @param {Array} packets
                 * @return {ArrayBuffer} encoded payload
                 * @api private
                 */

                exports.encodePayloadAsArrayBuffer = function(packets, callback) {
                    if (!packets.length) {
                        return callback(new ArrayBuffer(0));
                    }

                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, true, true, function(data) {
                            return doneCallback(null, data);
                        });
                    }

                    map(packets, encodeOne, function(err, encodedPackets) {
                        var totalLength = encodedPackets.reduce(function(acc, p) {
                            var len;
                            if (typeof p === 'string') {
                                len = p.length;
                            } else {
                                len = p.byteLength;
                            }
                            return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
                        }, 0);

                        var resultArray = new Uint8Array(totalLength);

                        var bufferIndex = 0;
                        encodedPackets.forEach(function(p) {
                            var isString = typeof p === 'string';
                            var ab = p;
                            if (isString) {
                                var view = new Uint8Array(p.length);
                                for (var i = 0; i < p.length; i++) {
                                    view[i] = p.charCodeAt(i);
                                }
                                ab = view.buffer;
                            }

                            if (isString) { // not true binary
                                resultArray[bufferIndex++] = 0;
                            } else { // true binary
                                resultArray[bufferIndex++] = 1;
                            }

                            var lenStr = ab.byteLength.toString();
                            for (var i = 0; i < lenStr.length; i++) {
                                resultArray[bufferIndex++] = parseInt(lenStr[i]);
                            }
                            resultArray[bufferIndex++] = 255;

                            var view = new Uint8Array(ab);
                            for (var i = 0; i < view.length; i++) {
                                resultArray[bufferIndex++] = view[i];
                            }
                        });

                        return callback(resultArray.buffer);
                    });
                };

                /**
                 * Encode as Blob
                 */

                exports.encodePayloadAsBlob = function(packets, callback) {
                    function encodeOne(packet, doneCallback) {
                        exports.encodePacket(packet, true, true, function(encoded) {
                            var binaryIdentifier = new Uint8Array(1);
                            binaryIdentifier[0] = 1;
                            if (typeof encoded === 'string') {
                                var view = new Uint8Array(encoded.length);
                                for (var i = 0; i < encoded.length; i++) {
                                    view[i] = encoded.charCodeAt(i);
                                }
                                encoded = view.buffer;
                                binaryIdentifier[0] = 0;
                            }

                            var len = (encoded instanceof ArrayBuffer)
                              ? encoded.byteLength
                              : encoded.size;

                            var lenStr = len.toString();
                            var lengthAry = new Uint8Array(lenStr.length + 1);
                            for (var i = 0; i < lenStr.length; i++) {
                                lengthAry[i] = parseInt(lenStr[i]);
                            }
                            lengthAry[lenStr.length] = 255;

                            if (Blob) {
                                var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                                doneCallback(null, blob);
                            }
                        });
                    }

                    map(packets, encodeOne, function(err, results) {
                        return callback(new Blob(results));
                    });
                };

                /*
                 * Decodes data when a payload is maybe expected. Strings are decoded by
                 * interpreting each byte as a key code for entries marked to start with 0. See
                 * description of encodePayloadAsBinary
                 *
                 * @param {ArrayBuffer} data, callback method
                 * @api public
                 */

                exports.decodePayloadAsBinary = function(data, binaryType, callback) {
                    if (typeof binaryType === 'function') {
                        callback = binaryType;
                        binaryType = null;
                    }

                    var bufferTail = data;
                    var buffers = [];

                    var numberTooLong = false;
                    while (bufferTail.byteLength > 0) {
                        var tailArray = new Uint8Array(bufferTail);
                        var isString = tailArray[0] === 0;
                        var msgLength = '';

                        for (var i = 1; ; i++) {
                            if (tailArray[i] == 255) break;

                            if (msgLength.length > 310) {
                                numberTooLong = true;
                                break;
                            }

                            msgLength += tailArray[i];
                        }

                        if (numberTooLong) return callback(err, 0, 1);

                        bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
                        msgLength = parseInt(msgLength);

                        var msg = sliceBuffer(bufferTail, 0, msgLength);
                        if (isString) {
                            try {
                                msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                            } catch (e) {
                                // iPhone Safari doesn't let you apply to typed arrays
                                var typed = new Uint8Array(msg);
                                msg = '';
                                for (var i = 0; i < typed.length; i++) {
                                    msg += String.fromCharCode(typed[i]);
                                }
                            }
                        }

                        buffers.push(msg);
                        bufferTail = sliceBuffer(bufferTail, msgLength);
                    }

                    var total = buffers.length;
                    buffers.forEach(function(buffer, i) {
                        callback(exports.decodePacket(buffer, binaryType, true), i, total);
                    });
                };

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "./keys": 26, "after": 27, "arraybuffer.slice": 28, "base64-arraybuffer": 29, "blob": 30, "has-binary": 31, "utf8": 33 }], 26: [function(_dereq_, module, exports) {

            /**
             * Gets the keys for an object.
             *
             * @return {Array} keys
             * @api private
             */

            module.exports = Object.keys || function keys(obj) {
                var arr = [];
                var has = Object.prototype.hasOwnProperty;

                for (var i in obj) {
                    if (has.call(obj, i)) {
                        arr.push(i);
                    }
                }
                return arr;
            };

        }, {}], 27: [function(_dereq_, module, exports) {
            module.exports = after

            function after(count, callback, err_cb) {
                var bail = false
                err_cb = err_cb || noop
                proxy.count = count

                return (count === 0) ? callback() : proxy

                function proxy(err, result) {
                    if (proxy.count <= 0) {
                        throw new Error('after called too many times')
                    }
                    --proxy.count

                    // after first error, rest are passed to err_cb
                    if (err) {
                        bail = true
                        callback(err)
                        // future error callbacks will go to error handler
                        callback = err_cb
                    } else if (proxy.count === 0 && !bail) {
                        callback(null, result)
                    }
                }
            }

            function noop() { }

        }, {}], 28: [function(_dereq_, module, exports) {
            /**
             * An abstraction for slicing an arraybuffer even when
             * ArrayBuffer.prototype.slice is not supported
             *
             * @api public
             */

            module.exports = function(arraybuffer, start, end) {
                var bytes = arraybuffer.byteLength;
                start = start || 0;
                end = end || bytes;

                if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

                if (start < 0) { start += bytes; }
                if (end < 0) { end += bytes; }
                if (end > bytes) { end = bytes; }

                if (start >= bytes || start >= end || bytes === 0) {
                    return new ArrayBuffer(0);
                }

                var abv = new Uint8Array(arraybuffer);
                var result = new Uint8Array(end - start);
                for (var i = start, ii = 0; i < end; i++, ii++) {
                    result[ii] = abv[i];
                }
                return result.buffer;
            };

        }, {}], 29: [function(_dereq_, module, exports) {
            /*
             * base64-arraybuffer
             * https://github.com/niklasvh/base64-arraybuffer
             *
             * Copyright (c) 2012 Niklas von Hertzen
             * Licensed under the MIT license.
             */
            (function(chars) {
                "use strict";

                exports.encode = function(arraybuffer) {
                    var bytes = new Uint8Array(arraybuffer),
                    i, len = bytes.length, base64 = "";

                    for (i = 0; i < len; i += 3) {
                        base64 += chars[bytes[i] >> 2];
                        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
                        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
                        base64 += chars[bytes[i + 2] & 63];
                    }

                    if ((len % 3) === 2) {
                        base64 = base64.substring(0, base64.length - 1) + "=";
                    } else if (len % 3 === 1) {
                        base64 = base64.substring(0, base64.length - 2) + "==";
                    }

                    return base64;
                };

                exports.decode = function(base64) {
                    var bufferLength = base64.length * 0.75,
                    len = base64.length, i, p = 0,
                    encoded1, encoded2, encoded3, encoded4;

                    if (base64[base64.length - 1] === "=") {
                        bufferLength--;
                        if (base64[base64.length - 2] === "=") {
                            bufferLength--;
                        }
                    }

                    var arraybuffer = new ArrayBuffer(bufferLength),
                    bytes = new Uint8Array(arraybuffer);

                    for (i = 0; i < len; i += 4) {
                        encoded1 = chars.indexOf(base64[i]);
                        encoded2 = chars.indexOf(base64[i + 1]);
                        encoded3 = chars.indexOf(base64[i + 2]);
                        encoded4 = chars.indexOf(base64[i + 3]);

                        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
                    }

                    return arraybuffer;
                };
            })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

        }, {}], 30: [function(_dereq_, module, exports) {
            (function(global) {
                /**
                 * Create a blob builder even when vendor prefixes exist
                 */

                var BlobBuilder = global.BlobBuilder
                  || global.WebKitBlobBuilder
                  || global.MSBlobBuilder
                  || global.MozBlobBuilder;

                /**
                 * Check if Blob constructor is supported
                 */

                var blobSupported = (function() {
                    try {
                        var b = new Blob(['hi']);
                        return b.size == 2;
                    } catch (e) {
                        return false;
                    }
                })();

                /**
                 * Check if BlobBuilder is supported
                 */

                var blobBuilderSupported = BlobBuilder
                  && BlobBuilder.prototype.append
                  && BlobBuilder.prototype.getBlob;

                function BlobBuilderConstructor(ary, options) {
                    options = options || {};

                    var bb = new BlobBuilder();
                    for (var i = 0; i < ary.length; i++) {
                        bb.append(ary[i]);
                    }
                    return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
                };

                module.exports = (function() {
                    if (blobSupported) {
                        return global.Blob;
                    } else if (blobBuilderSupported) {
                        return BlobBuilderConstructor;
                    } else {
                        return undefined;
                    }
                })();

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}], 31: [function(_dereq_, module, exports) {
            (function(global) {

                /*
                 * Module requirements.
                 */

                var isArray = _dereq_('isarray');

                /**
                 * Module exports.
                 */

                module.exports = hasBinary;

                /**
                 * Checks for binary data.
                 *
                 * Right now only Buffer and ArrayBuffer are supported..
                 *
                 * @param {Object} anything
                 * @api public
                 */

                function hasBinary(data) {

                    function _hasBinary(obj) {
                        if (!obj) return false;

                        if ((global.Buffer && global.Buffer.isBuffer(obj)) ||
                             (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
                             (global.Blob && obj instanceof Blob) ||
                             (global.File && obj instanceof File)
                            ) {
                            return true;
                        }

                        if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                if (_hasBinary(obj[i])) {
                                    return true;
                                }
                            }
                        } else if (obj && 'object' == typeof obj) {
                            if (obj.toJSON) {
                                obj = obj.toJSON();
                            }

                            for (var key in obj) {
                                if (obj.hasOwnProperty(key) && _hasBinary(obj[key])) {
                                    return true;
                                }
                            }
                        }

                        return false;
                    }

                    return _hasBinary(data);
                }

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "isarray": 32 }], 32: [function(_dereq_, module, exports) {
            module.exports = Array.isArray || function(arr) {
                return Object.prototype.toString.call(arr) == '[object Array]';
            };

        }, {}], 33: [function(_dereq_, module, exports) {
            (function(global) {
                /*! http://mths.be/utf8js v2.0.0 by @mathias */
                ; (function(root) {

                    // Detect free variables `exports`
                    var freeExports = typeof exports == 'object' && exports;

                    // Detect free variable `module`
                    var freeModule = typeof module == 'object' && module &&
                        module.exports == freeExports && module;

                    // Detect free variable `global`, from Node.js or Browserified code,
                    // and use it as `root`
                    var freeGlobal = typeof global == 'object' && global;
                    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                        root = freeGlobal;
                    }

                    /*--------------------------------------------------------------------------*/

                    var stringFromCharCode = String.fromCharCode;

                    // Taken from http://mths.be/punycode
                    function ucs2decode(string) {
                        var output = [];
                        var counter = 0;
                        var length = string.length;
                        var value;
                        var extra;
                        while (counter < length) {
                            value = string.charCodeAt(counter++);
                            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                                // high surrogate, and there is a next character
                                extra = string.charCodeAt(counter++);
                                if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                                } else {
                                    // unmatched surrogate; only append this code unit, in case the next
                                    // code unit is the high surrogate of a surrogate pair
                                    output.push(value);
                                    counter--;
                                }
                            } else {
                                output.push(value);
                            }
                        }
                        return output;
                    }

                    // Taken from http://mths.be/punycode
                    function ucs2encode(array) {
                        var length = array.length;
                        var index = -1;
                        var value;
                        var output = '';
                        while (++index < length) {
                            value = array[index];
                            if (value > 0xFFFF) {
                                value -= 0x10000;
                                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                                value = 0xDC00 | value & 0x3FF;
                            }
                            output += stringFromCharCode(value);
                        }
                        return output;
                    }

                    /*--------------------------------------------------------------------------*/

                    function createByte(codePoint, shift) {
                        return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
                    }

                    function encodeCodePoint(codePoint) {
                        if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
                            return stringFromCharCode(codePoint);
                        }
                        var symbol = '';
                        if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
                            symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
                        }
                        else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
                            symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
                            symbol += createByte(codePoint, 6);
                        }
                        else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
                            symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
                            symbol += createByte(codePoint, 12);
                            symbol += createByte(codePoint, 6);
                        }
                        symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
                        return symbol;
                    }

                    function utf8encode(string) {
                        var codePoints = ucs2decode(string);

                        // console.log(JSON.stringify(codePoints.map(function(x) {
                        // 	return 'U+' + x.toString(16).toUpperCase();
                        // })));

                        var length = codePoints.length;
                        var index = -1;
                        var codePoint;
                        var byteString = '';
                        while (++index < length) {
                            codePoint = codePoints[index];
                            byteString += encodeCodePoint(codePoint);
                        }
                        return byteString;
                    }

                    /*--------------------------------------------------------------------------*/

                    function readContinuationByte() {
                        if (byteIndex >= byteCount) {
                            throw Error('Invalid byte index');
                        }

                        var continuationByte = byteArray[byteIndex] & 0xFF;
                        byteIndex++;

                        if ((continuationByte & 0xC0) == 0x80) {
                            return continuationByte & 0x3F;
                        }

                        // If we end up here, it’s not a continuation byte
                        throw Error('Invalid continuation byte');
                    }

                    function decodeSymbol() {
                        var byte1;
                        var byte2;
                        var byte3;
                        var byte4;
                        var codePoint;

                        if (byteIndex > byteCount) {
                            throw Error('Invalid byte index');
                        }

                        if (byteIndex == byteCount) {
                            return false;
                        }

                        // Read first byte
                        byte1 = byteArray[byteIndex] & 0xFF;
                        byteIndex++;

                        // 1-byte sequence (no continuation bytes)
                        if ((byte1 & 0x80) == 0) {
                            return byte1;
                        }

                        // 2-byte sequence
                        if ((byte1 & 0xE0) == 0xC0) {
                            var byte2 = readContinuationByte();
                            codePoint = ((byte1 & 0x1F) << 6) | byte2;
                            if (codePoint >= 0x80) {
                                return codePoint;
                            } else {
                                throw Error('Invalid continuation byte');
                            }
                        }

                        // 3-byte sequence (may include unpaired surrogates)
                        if ((byte1 & 0xF0) == 0xE0) {
                            byte2 = readContinuationByte();
                            byte3 = readContinuationByte();
                            codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
                            if (codePoint >= 0x0800) {
                                return codePoint;
                            } else {
                                throw Error('Invalid continuation byte');
                            }
                        }

                        // 4-byte sequence
                        if ((byte1 & 0xF8) == 0xF0) {
                            byte2 = readContinuationByte();
                            byte3 = readContinuationByte();
                            byte4 = readContinuationByte();
                            codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
                                (byte3 << 0x06) | byte4;
                            if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                                return codePoint;
                            }
                        }

                        throw Error('Invalid UTF-8 detected');
                    }

                    var byteArray;
                    var byteCount;
                    var byteIndex;
                    function utf8decode(byteString) {
                        byteArray = ucs2decode(byteString);
                        byteCount = byteArray.length;
                        byteIndex = 0;
                        var codePoints = [];
                        var tmp;
                        while ((tmp = decodeSymbol()) !== false) {
                            codePoints.push(tmp);
                        }
                        return ucs2encode(codePoints);
                    }

                    /*--------------------------------------------------------------------------*/

                    var utf8 = {
                        'version': '2.0.0',
                        'encode': utf8encode,
                        'decode': utf8decode
                    };

                    // Some AMD build optimizers, like r.js, check for specific condition patterns
                    // like the following:
                    if (
                        typeof define == 'function' &&
                        typeof define.amd == 'object' &&
                        define.amd
                    ) {
                        define(function() {
                            return utf8;
                        });
                    } else if (freeExports && !freeExports.nodeType) {
                        if (freeModule) { // in Node.js or RingoJS v0.8.0+
                            freeModule.exports = utf8;
                        } else { // in Narwhal or RingoJS v0.7.0-
                            var object = {};
                            var hasOwnProperty = object.hasOwnProperty;
                            for (var key in utf8) {
                                hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                            }
                        }
                    } else { // in Rhino or a web browser
                        root.utf8 = utf8;
                    }

                }(this));

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}], 34: [function(_dereq_, module, exports) {
            (function(global) {
                /**
                 * JSON parse.
                 *
                 * @see Based on jQuery#parseJSON (MIT) and JSON2
                 * @api private
                 */

                var rvalidchars = /^[\],:{}\s]*$/;
                var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
                var rtrimLeft = /^\s+/;
                var rtrimRight = /\s+$/;

                module.exports = function parsejson(data) {
                    if ('string' != typeof data || !data) {
                        return null;
                    }

                    data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

                    // Attempt to parse using the native JSON parser first
                    if (global.JSON && JSON.parse) {
                        return JSON.parse(data);
                    }

                    if (rvalidchars.test(data.replace(rvalidescape, '@')
                        .replace(rvalidtokens, ']')
                        .replace(rvalidbraces, ''))) {
                        return (new Function('return ' + data))();
                    }
                };
            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}], 35: [function(_dereq_, module, exports) {
            /**
             * Compiles a querystring
             * Returns string representation of the object
             *
             * @param {Object}
             * @api private
             */

            exports.encode = function(obj) {
                var str = '';

                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        if (str.length) str += '&';
                        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
                    }
                }

                return str;
            };

            /**
             * Parses a simple querystring into an object
             *
             * @param {String} qs
             * @api private
             */

            exports.decode = function(qs) {
                var qry = {};
                var pairs = qs.split('&');
                for (var i = 0, l = pairs.length; i < l; i++) {
                    var pair = pairs[i].split('=');
                    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                }
                return qry;
            };

        }, {}], 36: [function(_dereq_, module, exports) {
            /**
             * Parses an URI
             *
             * @author Steven Levithan <stevenlevithan.com> (MIT license)
             * @api private
             */

            var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

            var parts = [
                'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
            ];

            module.exports = function parseuri(str) {
                var src = str,
                    b = str.indexOf('['),
                    e = str.indexOf(']');

                if (b != -1 && e != -1) {
                    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
                }

                var m = re.exec(str || ''),
                    uri = {},
                    i = 14;

                while (i--) {
                    uri[parts[i]] = m[i] || '';
                }

                if (b != -1 && e != -1) {
                    uri.source = src;
                    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
                    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
                    uri.ipv6uri = true;
                }

                return uri;
            };

        }, {}], 37: [function(_dereq_, module, exports) {

            /**
             * Module dependencies.
             */

            var global = (function() { return this; })();

            /**
             * WebSocket constructor.
             */

            var WebSocket = global.WebSocket || global.MozWebSocket;

            /**
             * Module exports.
             */

            module.exports = WebSocket ? ws : null;

            /**
             * WebSocket constructor.
             *
             * The third `opts` options object gets ignored in web browsers, since it's
             * non-standard, and throws a TypeError if passed to the constructor.
             * See: https://github.com/einaros/ws/issues/227
             *
             * @param {String} uri
             * @param {Array} protocols (optional)
             * @param {Object) opts (optional)
             * @api public
             */

            function ws(uri, protocols, opts) {
                var instance;
                if (protocols) {
                    instance = new WebSocket(uri, protocols);
                } else {
                    instance = new WebSocket(uri);
                }
                return instance;
            }

            if (WebSocket) ws.prototype = WebSocket.prototype;

        }, {}], 38: [function(_dereq_, module, exports) {
            (function(global) {

                /*
                 * Module requirements.
                 */

                var isArray = _dereq_('isarray');

                /**
                 * Module exports.
                 */

                module.exports = hasBinary;

                /**
                 * Checks for binary data.
                 *
                 * Right now only Buffer and ArrayBuffer are supported..
                 *
                 * @param {Object} anything
                 * @api public
                 */

                function hasBinary(data) {

                    function _hasBinary(obj) {
                        if (!obj) return false;

                        if ((global.Buffer && global.Buffer.isBuffer(obj)) ||
                             (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
                             (global.Blob && obj instanceof Blob) ||
                             (global.File && obj instanceof File)
                            ) {
                            return true;
                        }

                        if (isArray(obj)) {
                            for (var i = 0; i < obj.length; i++) {
                                if (_hasBinary(obj[i])) {
                                    return true;
                                }
                            }
                        } else if (obj && 'object' == typeof obj) {
                            if (obj.toJSON) {
                                obj = obj.toJSON();
                            }

                            for (var key in obj) {
                                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                                    return true;
                                }
                            }
                        }

                        return false;
                    }

                    return _hasBinary(data);
                }

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "isarray": 39 }], 39: [function(_dereq_, module, exports) {
            module.exports = _dereq_(32)
        }, {}], 40: [function(_dereq_, module, exports) {

            /**
             * Module dependencies.
             */

            var global = _dereq_('global');

            /**
             * Module exports.
             *
             * Logic borrowed from Modernizr:
             *
             *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
             */

            try {
                module.exports = 'XMLHttpRequest' in global &&
                  'withCredentials' in new global.XMLHttpRequest();
            } catch (err) {
                // if XMLHttp support is disabled in IE then it will throw
                // when trying to create
                module.exports = false;
            }

        }, { "global": 41 }], 41: [function(_dereq_, module, exports) {

            /**
             * Returns `this`. Execute this without a "context" (i.e. without it being
             * attached to an object of the left-hand side), and `this` points to the
             * "global" scope of the current JS execution.
             */

            module.exports = (function() { return this; })();

        }, {}], 42: [function(_dereq_, module, exports) {

            var indexOf = [].indexOf;

            module.exports = function(arr, obj) {
                if (indexOf) return arr.indexOf(obj);
                for (var i = 0; i < arr.length; ++i) {
                    if (arr[i] === obj) return i;
                }
                return -1;
            };
        }, {}], 43: [function(_dereq_, module, exports) {

            /**
             * HOP ref.
             */

            var has = Object.prototype.hasOwnProperty;

            /**
             * Return own keys in `obj`.
             *
             * @param {Object} obj
             * @return {Array}
             * @api public
             */

            exports.keys = Object.keys || function(obj) {
                var keys = [];
                for (var key in obj) {
                    if (has.call(obj, key)) {
                        keys.push(key);
                    }
                }
                return keys;
            };

            /**
             * Return own values in `obj`.
             *
             * @param {Object} obj
             * @return {Array}
             * @api public
             */

            exports.values = function(obj) {
                var vals = [];
                for (var key in obj) {
                    if (has.call(obj, key)) {
                        vals.push(obj[key]);
                    }
                }
                return vals;
            };

            /**
             * Merge `b` into `a`.
             *
             * @param {Object} a
             * @param {Object} b
             * @return {Object} a
             * @api public
             */

            exports.merge = function(a, b) {
                for (var key in b) {
                    if (has.call(b, key)) {
                        a[key] = b[key];
                    }
                }
                return a;
            };

            /**
             * Return length of `obj`.
             *
             * @param {Object} obj
             * @return {Number}
             * @api public
             */

            exports.length = function(obj) {
                return exports.keys(obj).length;
            };

            /**
             * Check if `obj` is empty.
             *
             * @param {Object} obj
             * @return {Boolean}
             * @api public
             */

            exports.isEmpty = function(obj) {
                return 0 == exports.length(obj);
            };
        }, {}], 44: [function(_dereq_, module, exports) {
            /**
             * Parses an URI
             *
             * @author Steven Levithan <stevenlevithan.com> (MIT license)
             * @api private
             */

            var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

            var parts = [
                'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
              , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
            ];

            module.exports = function parseuri(str) {
                var m = re.exec(str || '')
                  , uri = {}
                  , i = 14;

                while (i--) {
                    uri[parts[i]] = m[i] || '';
                }

                return uri;
            };

        }, {}], 45: [function(_dereq_, module, exports) {
            (function(global) {
                /*global Blob,File*/

                /**
                 * Module requirements
                 */

                var isArray = _dereq_('isarray');
                var isBuf = _dereq_('./is-buffer');

                /**
                 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
                 * Anything with blobs or files should be fed through removeBlobs before coming
                 * here.
                 *
                 * @param {Object} packet - socket.io event packet
                 * @return {Object} with deconstructed packet and list of buffers
                 * @api public
                 */

                exports.deconstructPacket = function(packet) {
                    var buffers = [];
                    var packetData = packet.data;

                    function _deconstructPacket(data) {
                        if (!data) return data;

                        if (isBuf(data)) {
                            var placeholder = { _placeholder: true, num: buffers.length };
                            buffers.push(data);
                            return placeholder;
                        } else if (isArray(data)) {
                            var newData = new Array(data.length);
                            for (var i = 0; i < data.length; i++) {
                                newData[i] = _deconstructPacket(data[i]);
                            }
                            return newData;
                        } else if ('object' == typeof data && !(data instanceof Date)) {
                            var newData = {};
                            for (var key in data) {
                                newData[key] = _deconstructPacket(data[key]);
                            }
                            return newData;
                        }
                        return data;
                    }

                    var pack = packet;
                    pack.data = _deconstructPacket(packetData);
                    pack.attachments = buffers.length; // number of binary 'attachments'
                    return { packet: pack, buffers: buffers };
                };

                /**
                 * Reconstructs a binary packet from its placeholder packet and buffers
                 *
                 * @param {Object} packet - event packet with placeholders
                 * @param {Array} buffers - binary buffers to put in placeholder positions
                 * @return {Object} reconstructed packet
                 * @api public
                 */

                exports.reconstructPacket = function(packet, buffers) {
                    var curPlaceHolder = 0;

                    function _reconstructPacket(data) {
                        if (data && data._placeholder) {
                            var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
                            return buf;
                        } else if (isArray(data)) {
                            for (var i = 0; i < data.length; i++) {
                                data[i] = _reconstructPacket(data[i]);
                            }
                            return data;
                        } else if (data && 'object' == typeof data) {
                            for (var key in data) {
                                data[key] = _reconstructPacket(data[key]);
                            }
                            return data;
                        }
                        return data;
                    }

                    packet.data = _reconstructPacket(packet.data);
                    packet.attachments = undefined; // no longer useful
                    return packet;
                };

                /**
                 * Asynchronously removes Blobs or Files from data via
                 * FileReader's readAsArrayBuffer method. Used before encoding
                 * data as msgpack. Calls callback with the blobless data.
                 *
                 * @param {Object} data
                 * @param {Function} callback
                 * @api private
                 */

                exports.removeBlobs = function(data, callback) {
                    function _removeBlobs(obj, curKey, containingObject) {
                        if (!obj) return obj;

                        // convert any blob
                        if ((global.Blob && obj instanceof Blob) ||
                            (global.File && obj instanceof File)) {
                            pendingBlobs++;

                            // async filereader
                            var fileReader = new FileReader();
                            fileReader.onload = function() { // this.result == arraybuffer
                                if (containingObject) {
                                    containingObject[curKey] = this.result;
                                }
                                else {
                                    bloblessData = this.result;
                                }

                                // if nothing pending its callback time
                                if (! --pendingBlobs) {
                                    callback(bloblessData);
                                }
                            };

                            fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
                        } else if (isArray(obj)) { // handle array
                            for (var i = 0; i < obj.length; i++) {
                                _removeBlobs(obj[i], i, obj);
                            }
                        } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
                            for (var key in obj) {
                                _removeBlobs(obj[key], key, obj);
                            }
                        }
                    }

                    var pendingBlobs = 0;
                    var bloblessData = data;
                    _removeBlobs(bloblessData);
                    if (!pendingBlobs) {
                        callback(bloblessData);
                    }
                };

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, { "./is-buffer": 47, "isarray": 48 }], 46: [function(_dereq_, module, exports) {

            /**
             * Module dependencies.
             */

            var debug = _dereq_('debug')('socket.io-parser');
            var json = _dereq_('json3');
            var isArray = _dereq_('isarray');
            var Emitter = _dereq_('component-emitter');
            var binary = _dereq_('./binary');
            var isBuf = _dereq_('./is-buffer');

            /**
             * Protocol version.
             *
             * @api public
             */

            exports.protocol = 4;

            /**
             * Packet types.
             *
             * @api public
             */

            exports.types = [
              'CONNECT',
              'DISCONNECT',
              'EVENT',
              'BINARY_EVENT',
              'ACK',
              'BINARY_ACK',
              'ERROR'
            ];

            /**
             * Packet type `connect`.
             *
             * @api public
             */

            exports.CONNECT = 0;

            /**
             * Packet type `disconnect`.
             *
             * @api public
             */

            exports.DISCONNECT = 1;

            /**
             * Packet type `event`.
             *
             * @api public
             */

            exports.EVENT = 2;

            /**
             * Packet type `ack`.
             *
             * @api public
             */

            exports.ACK = 3;

            /**
             * Packet type `error`.
             *
             * @api public
             */

            exports.ERROR = 4;

            /**
             * Packet type 'binary event'
             *
             * @api public
             */

            exports.BINARY_EVENT = 5;

            /**
             * Packet type `binary ack`. For acks with binary arguments.
             *
             * @api public
             */

            exports.BINARY_ACK = 6;

            /**
             * Encoder constructor.
             *
             * @api public
             */

            exports.Encoder = Encoder;

            /**
             * Decoder constructor.
             *
             * @api public
             */

            exports.Decoder = Decoder;

            /**
             * A socket.io Encoder instance
             *
             * @api public
             */

            function Encoder() { }

            /**
             * Encode a packet as a single string if non-binary, or as a
             * buffer sequence, depending on packet type.
             *
             * @param {Object} obj - packet object
             * @param {Function} callback - function to handle encodings (likely engine.write)
             * @return Calls callback with Array of encodings
             * @api public
             */

            Encoder.prototype.encode = function(obj, callback) {
                debug('encoding packet %j', obj);

                if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
                    encodeAsBinary(obj, callback);
                }
                else {
                    var encoding = encodeAsString(obj);
                    callback([encoding]);
                }
            };

            /**
             * Encode packet as string.
             *
             * @param {Object} packet
             * @return {String} encoded
             * @api private
             */

            function encodeAsString(obj) {
                var str = '';
                var nsp = false;

                // first is type
                str += obj.type;

                // attachments if we have them
                if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
                    str += obj.attachments;
                    str += '-';
                }

                // if we have a namespace other than `/`
                // we append it followed by a comma `,`
                if (obj.nsp && '/' != obj.nsp) {
                    nsp = true;
                    str += obj.nsp;
                }

                // immediately followed by the id
                if (null != obj.id) {
                    if (nsp) {
                        str += ',';
                        nsp = false;
                    }
                    str += obj.id;
                }

                // json data
                if (null != obj.data) {
                    if (nsp) str += ',';
                    str += json.stringify(obj.data);
                }

                debug('encoded %j as %s', obj, str);
                return str;
            }

            /**
             * Encode packet as 'buffer sequence' by removing blobs, and
             * deconstructing packet into object with placeholders and
             * a list of buffers.
             *
             * @param {Object} packet
             * @return {Buffer} encoded
             * @api private
             */

            function encodeAsBinary(obj, callback) {

                function writeEncoding(bloblessData) {
                    var deconstruction = binary.deconstructPacket(bloblessData);
                    var pack = encodeAsString(deconstruction.packet);
                    var buffers = deconstruction.buffers;

                    buffers.unshift(pack); // add packet info to beginning of data list
                    callback(buffers); // write all the buffers
                }

                binary.removeBlobs(obj, writeEncoding);
            }

            /**
             * A socket.io Decoder instance
             *
             * @return {Object} decoder
             * @api public
             */

            function Decoder() {
                this.reconstructor = null;
            }

            /**
             * Mix in `Emitter` with Decoder.
             */

            Emitter(Decoder.prototype);

            /**
             * Decodes an ecoded packet string into packet JSON.
             *
             * @param {String} obj - encoded packet
             * @return {Object} packet
             * @api public
             */

            Decoder.prototype.add = function(obj) {
                var packet;
                if ('string' == typeof obj) {
                    packet = decodeString(obj);
                    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
                        this.reconstructor = new BinaryReconstructor(packet);

                        // no attachments, labeled binary but no binary data to follow
                        if (this.reconstructor.reconPack.attachments === 0) {
                            this.emit('decoded', packet);
                        }
                    } else { // non-binary full packet
                        this.emit('decoded', packet);
                    }
                }
                else if (isBuf(obj) || obj.base64) { // raw binary data
                    if (!this.reconstructor) {
                        throw new Error('got binary data when not reconstructing a packet');
                    } else {
                        packet = this.reconstructor.takeBinaryData(obj);
                        if (packet) { // received final buffer
                            this.reconstructor = null;
                            this.emit('decoded', packet);
                        }
                    }
                }
                else {
                    throw new Error('Unknown type: ' + obj);
                }
            };

            /**
             * Decode a packet String (JSON data)
             *
             * @param {String} str
             * @return {Object} packet
             * @api private
             */

            function decodeString(str) {
                var p = {};
                var i = 0;

                // look up type
                p.type = Number(str.charAt(0));
                if (null == exports.types[p.type]) return error();

                // look up attachments if type binary
                if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
                    var buf = '';
                    while (str.charAt(++i) != '-') {
                        buf += str.charAt(i);
                        if (i == str.length) break;
                    }
                    if (buf != Number(buf) || str.charAt(i) != '-') {
                        throw new Error('Illegal attachments');
                    }
                    p.attachments = Number(buf);
                }

                // look up namespace (if any)
                if ('/' == str.charAt(i + 1)) {
                    p.nsp = '';
                    while (++i) {
                        var c = str.charAt(i);
                        if (',' == c) break;
                        p.nsp += c;
                        if (i == str.length) break;
                    }
                } else {
                    p.nsp = '/';
                }

                // look up id
                var next = str.charAt(i + 1);
                if ('' !== next && Number(next) == next) {
                    p.id = '';
                    while (++i) {
                        var c = str.charAt(i);
                        if (null == c || Number(c) != c) {
                            --i;
                            break;
                        }
                        p.id += str.charAt(i);
                        if (i == str.length) break;
                    }
                    p.id = Number(p.id);
                }

                // look up json data
                if (str.charAt(++i)) {
                    try {
                        p.data = json.parse(str.substr(i));
                    } catch (e) {
                        return error();
                    }
                }

                debug('decoded %s as %j', str, p);
                return p;
            }

            /**
             * Deallocates a parser's resources
             *
             * @api public
             */

            Decoder.prototype.destroy = function() {
                if (this.reconstructor) {
                    this.reconstructor.finishedReconstruction();
                }
            };

            /**
             * A manager of a binary event's 'buffer sequence'. Should
             * be constructed whenever a packet of type BINARY_EVENT is
             * decoded.
             *
             * @param {Object} packet
             * @return {BinaryReconstructor} initialized reconstructor
             * @api private
             */

            function BinaryReconstructor(packet) {
                this.reconPack = packet;
                this.buffers = [];
            }

            /**
             * Method to be called when binary data received from connection
             * after a BINARY_EVENT packet.
             *
             * @param {Buffer | ArrayBuffer} binData - the raw binary data received
             * @return {null | Object} returns null if more binary data is expected or
             *   a reconstructed packet object if all buffers have been received.
             * @api private
             */

            BinaryReconstructor.prototype.takeBinaryData = function(binData) {
                this.buffers.push(binData);
                if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
                    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
                    this.finishedReconstruction();
                    return packet;
                }
                return null;
            };

            /**
             * Cleans up binary packet reconstruction variables.
             *
             * @api private
             */

            BinaryReconstructor.prototype.finishedReconstruction = function() {
                this.reconPack = null;
                this.buffers = [];
            };

            function error(data) {
                return {
                    type: exports.ERROR,
                    data: 'parser error'
                };
            }

        }, { "./binary": 45, "./is-buffer": 47, "component-emitter": 9, "debug": 10, "isarray": 48, "json3": 49 }], 47: [function(_dereq_, module, exports) {
            (function(global) {

                module.exports = isBuf;

                /**
                 * Returns true if obj is a buffer or an arraybuffer.
                 *
                 * @api private
                 */

                function isBuf(obj) {
                    return (global.Buffer && global.Buffer.isBuffer(obj)) ||
                           (global.ArrayBuffer && obj instanceof ArrayBuffer);
                }

            }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}], 48: [function(_dereq_, module, exports) {
            module.exports = _dereq_(32)
        }, {}], 49: [function(_dereq_, module, exports) {
            /*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
            ; (function(window) {
                // Convenience aliases.
                var getClass = {}.toString, isProperty, forEach, undef;

                // Detect the `define` function exposed by asynchronous module loaders. The
                // strict `define` check is necessary for compatibility with `r.js`.
                var isLoader = typeof define === "function" && define.amd;

                // Detect native implementations.
                var nativeJSON = typeof JSON == "object" && JSON;

                // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
                // available.
                var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

                if (JSON3 && nativeJSON) {
                    // Explicitly delegate to the native `stringify` and `parse`
                    // implementations in CommonJS environments.
                    JSON3.stringify = nativeJSON.stringify;
                    JSON3.parse = nativeJSON.parse;
                } else {
                    // Export for web browsers, JavaScript engines, and asynchronous module
                    // loaders, using the global `JSON` object if available.
                    JSON3 = window.JSON = nativeJSON || {};
                }

                // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
                var isExtended = new Date(-3509827334573292);
                try {
                    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
                    // results for certain dates in Opera >= 10.53.
                    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
                      // Safari < 2.0.2 stores the internal millisecond time value correctly,
                      // but clips the values returned by the date methods to the range of
                      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
                      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
                } catch (exception) { }

                // Internal: Determines whether the native `JSON.stringify` and `parse`
                // implementations are spec-compliant. Based on work by Ken Snyder.
                function has(name) {
                    if (has[name] !== undef) {
                        // Return cached feature test result.
                        return has[name];
                    }

                    var isSupported;
                    if (name == "bug-string-char-index") {
                        // IE <= 7 doesn't support accessing string characters using square
                        // bracket notation. IE 8 only supports this for primitives.
                        isSupported = "a"[0] != "a";
                    } else if (name == "json") {
                        // Indicates whether both `JSON.stringify` and `JSON.parse` are
                        // supported.
                        isSupported = has("json-stringify") && has("json-parse");
                    } else {
                        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        // Test `JSON.stringify`.
                        if (name == "json-stringify") {
                            var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
                            if (stringifySupported) {
                                // A test function object with a custom `toJSON` method.
                                (value = function() {
                                    return 1;
                                }).toJSON = value;
                                try {
                                    stringifySupported =
                                      // Firefox 3.1b1 and b2 serialize string, number, and boolean
                                      // primitives as object literals.
                                      stringify(0) === "0" &&
                                      // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                                      // literals.
                                      stringify(new Number()) === "0" &&
                                      stringify(new String()) == '""' &&
                                      // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                                      // does not define a canonical JSON representation (this applies to
                                      // objects with `toJSON` properties as well, *unless* they are nested
                                      // within an object or array).
                                      stringify(getClass) === undef &&
                                      // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                                      // FF 3.1b3 pass this test.
                                      stringify(undef) === undef &&
                                      // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                                      // respectively, if the value is omitted entirely.
                                      stringify() === undef &&
                                      // FF 3.1b1, 2 throw an error if the given value is not a number,
                                      // string, array, object, Boolean, or `null` literal. This applies to
                                      // objects with custom `toJSON` methods as well, unless they are nested
                                      // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                                      // methods entirely.
                                      stringify(value) === "1" &&
                                      stringify([value]) == "[1]" &&
                                      // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                                      // `"[null]"`.
                                      stringify([undef]) == "[null]" &&
                                      // YUI 3.0.0b1 fails to serialize `null` literals.
                                      stringify(null) == "null" &&
                                      // FF 3.1b1, 2 halts serialization if an array contains a function:
                                      // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                                      // elides non-JSON values from objects and arrays, unless they
                                      // define custom `toJSON` methods.
                                      stringify([undef, getClass, null]) == "[null,null,null]" &&
                                      // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                                      // where character escape codes are expected (e.g., `\b` => `\u0008`).
                                      stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                                      // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                                      stringify(null, value) === "1" &&
                                      stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                                      // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                                      // serialize extended years.
                                      stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                                      // The milliseconds are optional in ES 5, but required in 5.1.
                                      stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                                      // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                                      // four-digit years instead of six-digit years. Credits: @Yaffle.
                                      stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                                      // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                                      // values less than 1000. Credits: @Yaffle.
                                      stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                                } catch (exception) {
                                    stringifySupported = false;
                                }
                            }
                            isSupported = stringifySupported;
                        }
                        // Test `JSON.parse`.
                        if (name == "json-parse") {
                            var parse = JSON3.parse;
                            if (typeof parse == "function") {
                                try {
                                    // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                                    // Conforming implementations should also coerce the initial argument to
                                    // a string prior to parsing.
                                    if (parse("0") === 0 && !parse(false)) {
                                        // Simple parsing test.
                                        value = parse(serialized);
                                        var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                                        if (parseSupported) {
                                            try {
                                                // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                                                parseSupported = !parse('"\t"');
                                            } catch (exception) { }
                                            if (parseSupported) {
                                                try {
                                                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                                                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                                                    // certain octal literals.
                                                    parseSupported = parse("01") !== 1;
                                                } catch (exception) { }
                                            }
                                            if (parseSupported) {
                                                try {
                                                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                                                    // points. These environments, along with FF 3.1b1 and 2,
                                                    // also allow trailing commas in JSON objects and arrays.
                                                    parseSupported = parse("1.") !== 1;
                                                } catch (exception) { }
                                            }
                                        }
                                    }
                                } catch (exception) {
                                    parseSupported = false;
                                }
                            }
                            isSupported = parseSupported;
                        }
                    }
                    return has[name] = !!isSupported;
                }

                if (!has("json")) {
                    // Common `[[Class]]` name aliases.
                    var functionClass = "[object Function]";
                    var dateClass = "[object Date]";
                    var numberClass = "[object Number]";
                    var stringClass = "[object String]";
                    var arrayClass = "[object Array]";
                    var booleanClass = "[object Boolean]";

                    // Detect incomplete support for accessing string characters by index.
                    var charIndexBuggy = has("bug-string-char-index");

                    // Define additional utility methods if the `Date` methods are buggy.
                    if (!isExtended) {
                        var floor = Math.floor;
                        // A mapping between the months of the year and the number of days between
                        // January 1st and the first of the respective month.
                        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        // Internal: Calculates the number of days between the Unix epoch and the
                        // first day of the given month.
                        var getDay = function(year, month) {
                            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                        };
                    }

                    // Internal: Determines if a property is a direct property of the given
                    // object. Delegates to the native `Object#hasOwnProperty` method.
                    if (!(isProperty = {}.hasOwnProperty)) {
                        isProperty = function(property) {
                            var members = {}, constructor;
                            if ((members.__proto__ = null, members.__proto__ = {
                                // The *proto* property cannot be set multiple times in recent
                                // versions of Firefox and SeaMonkey.
                              "toString": 1
                            }, members).toString != getClass) {
                                // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
                                // supports the mutable *proto* property.
                                isProperty = function(property) {
                                    // Capture and break the object's prototype chain (see section 8.6.2
                                    // of the ES 5.1 spec). The parenthesized expression prevents an
                                    // unsafe transformation by the Closure Compiler.
                                    var original = this.__proto__, result = property in (this.__proto__ = null, this);
                                    // Restore the original prototype chain.
                                    this.__proto__ = original;
                                    return result;
                                };
                            } else {
                                // Capture a reference to the top-level `Object` constructor.
                                constructor = members.constructor;
                                // Use the `constructor` property to simulate `Object#hasOwnProperty` in
                                // other environments.
                                isProperty = function(property) {
                                    var parent = (this.constructor || constructor).prototype;
                                    return property in this && !(property in parent && this[property] === parent[property]);
                                };
                            }
                            members = null;
                            return isProperty.call(this, property);
                        };
                    }

                    // Internal: A set of primitive types used by `isHostType`.
                    var PrimitiveTypes = {
                        'boolean': 1,
                        'number': 1,
                        'string': 1,
                        'undefined': 1
                    };

                    // Internal: Determines if the given object `property` value is a
                    // non-primitive.
                    var isHostType = function(object, property) {
                        var type = typeof object[property];
                        return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
                    };

                    // Internal: Normalizes the `for...in` iteration algorithm across
                    // environments. Each enumerated key is yielded to a `callback` function.
                    forEach = function(object, callback) {
                        var size = 0, Properties, members, property;

                        // Tests for bugs in the current environment's `for...in` algorithm. The
                        // `valueOf` property inherits the non-enumerable flag from
                        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
                        (Properties = function() {
                            this.valueOf = 0;
                        }).prototype.valueOf = 0;

                        // Iterate over a new instance of the `Properties` class.
                        members = new Properties();
                        for (property in members) {
                            // Ignore all properties inherited from `Object.prototype`.
                            if (isProperty.call(members, property)) {
                                size++;
                            }
                        }
                        Properties = members = null;

                        // Normalize the iteration algorithm.
                        if (!size) {
                            // A list of non-enumerable properties inherited from `Object.prototype`.
                            members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
                            // properties.
                            forEach = function(object, callback) {
                                var isFunction = getClass.call(object) == functionClass, property, length;
                                var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
                                for (property in object) {
                                    // Gecko <= 1.0 enumerates the `prototype` property of functions under
                                    // certain conditions; IE does not.
                                    if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                                        callback(property);
                                    }
                                }
                                // Manually invoke the callback for each non-enumerable property.
                                for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                            };
                        } else if (size == 2) {
                            // Safari <= 2.0.4 enumerates shadowed properties twice.
                            forEach = function(object, callback) {
                                // Create a set of iterated properties.
                                var members = {}, isFunction = getClass.call(object) == functionClass, property;
                                for (property in object) {
                                    // Store each property name to prevent double enumeration. The
                                    // `prototype` property of functions is not enumerated due to cross-
                                    // environment inconsistencies.
                                    if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                                        callback(property);
                                    }
                                }
                            };
                        } else {
                            // No bugs detected; use the standard `for...in` algorithm.
                            forEach = function(object, callback) {
                                var isFunction = getClass.call(object) == functionClass, property, isConstructor;
                                for (property in object) {
                                    if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                                        callback(property);
                                    }
                                }
                                // Manually invoke the callback for the `constructor` property due to
                                // cross-environment inconsistencies.
                                if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                                    callback(property);
                                }
                            };
                        }
                        return forEach(object, callback);
                    };

                    // Public: Serializes a JavaScript `value` as a JSON string. The optional
                    // `filter` argument may specify either a function that alters how object and
                    // array members are serialized, or an array of strings and numbers that
                    // indicates which properties should be serialized. The optional `width`
                    // argument may be either a string or number that specifies the indentation
                    // level of the output.
                    if (!has("json-stringify")) {
                        // Internal: A map of control characters and their escaped equivalents.
                        var Escapes = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };

                        // Internal: Converts `value` into a zero-padded string such that its
                        // length is at least equal to `width`. The `width` must be <= 6.
                        var leadingZeroes = "000000";
                        var toPaddedString = function(width, value) {
                            // The `|| 0` expression is necessary to work around a bug in
                            // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                            return (leadingZeroes + (value || 0)).slice(-width);
                        };

                        // Internal: Double-quotes a string `value`, replacing all ASCII control
                        // characters (characters with code unit values between 0 and 31) with
                        // their escaped equivalents. This is an implementation of the
                        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
                        var unicodePrefix = "\\u00";
                        var quote = function(value) {
                            var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
                            if (isLarge) {
                                symbols = value.split("");
                            }
                            for (; index < length; index++) {
                                var charCode = value.charCodeAt(index);
                                // If the character is a control character, append its Unicode or
                                // shorthand escape sequence; otherwise, append the character as-is.
                                switch (charCode) {
                                    case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                                        result += Escapes[charCode];
                                        break;
                                    default:
                                        if (charCode < 32) {
                                            result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                                            break;
                                        }
                                        result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
                                }
                            }
                            return result + '"';
                        };

                        // Internal: Recursively serializes an object. Implements the
                        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
                        var serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                            try {
                                // Necessary for host object support.
                                value = object[property];
                            } catch (exception) { }
                            if (typeof value == "object" && value) {
                                className = getClass.call(value);
                                if (className == dateClass && !isProperty.call(value, "toJSON")) {
                                    if (value > -1 / 0 && value < 1 / 0) {
                                        // Dates are serialized according to the `Date#toJSON` method
                                        // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                                        // for the ISO 8601 date time string format.
                                        if (getDay) {
                                            // Manually compute the year, month, date, hours, minutes,
                                            // seconds, and milliseconds if the `getUTC*` methods are
                                            // buggy. Adapted from @Yaffle's `date-shim` project.
                                            date = floor(value / 864e5);
                                            for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                            for (month = floor((date - getDay(year, 0)) / 30.42) ; getDay(year, month + 1) <= date; month++);
                                            date = 1 + date - getDay(year, month);
                                            // The `time` value specifies the time within the day (see ES
                                            // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                                            // to compute `A modulo B`, as the `%` operator does not
                                            // correspond to the `modulo` operation for negative numbers.
                                            time = (value % 864e5 + 864e5) % 864e5;
                                            // The hours, minutes, seconds, and milliseconds are obtained by
                                            // decomposing the time within the day. See section 15.9.1.10.
                                            hours = floor(time / 36e5) % 24;
                                            minutes = floor(time / 6e4) % 60;
                                            seconds = floor(time / 1e3) % 60;
                                            milliseconds = time % 1e3;
                                        } else {
                                            year = value.getUTCFullYear();
                                            month = value.getUTCMonth();
                                            date = value.getUTCDate();
                                            hours = value.getUTCHours();
                                            minutes = value.getUTCMinutes();
                                            seconds = value.getUTCSeconds();
                                            milliseconds = value.getUTCMilliseconds();
                                        }
                                        // Serialize extended years correctly.
                                        value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                                          "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                                          // Months, dates, hours, minutes, and seconds should have two
                                          // digits; milliseconds should have three.
                                          "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                                          // Milliseconds are optional in ES 5.0, but required in 5.1.
                                          "." + toPaddedString(3, milliseconds) + "Z";
                                    } else {
                                        value = null;
                                    }
                                } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
                                    // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                                    // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                                    // ignores all `toJSON` methods on these objects unless they are
                                    // defined directly on an instance.
                                    value = value.toJSON(property);
                                }
                            }
                            if (callback) {
                                // If a replacement function was provided, call it to obtain the value
                                // for serialization.
                                value = callback.call(object, property, value);
                            }
                            if (value === null) {
                                return "null";
                            }
                            className = getClass.call(value);
                            if (className == booleanClass) {
                                // Booleans are represented literally.
                                return "" + value;
                            } else if (className == numberClass) {
                                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                                // `"null"`.
                                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                            } else if (className == stringClass) {
                                // Strings are double-quoted and escaped.
                                return quote("" + value);
                            }
                            // Recursively serialize objects and arrays.
                            if (typeof value == "object") {
                                // Check for cyclic structures. This is a linear search; performance
                                // is inversely proportional to the number of unique nested objects.
                                for (length = stack.length; length--;) {
                                    if (stack[length] === value) {
                                        // Cyclic structures cannot be serialized by `JSON.stringify`.
                                        throw TypeError();
                                    }
                                }
                                // Add the object to the stack of traversed objects.
                                stack.push(value);
                                results = [];
                                // Save the current indentation level and indent one additional level.
                                prefix = indentation;
                                indentation += whitespace;
                                if (className == arrayClass) {
                                    // Recursively serialize array elements.
                                    for (index = 0, length = value.length; index < length; index++) {
                                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                                        results.push(element === undef ? "null" : element);
                                    }
                                    result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
                                } else {
                                    // Recursively serialize object members. Members are selected from
                                    // either a user-specified list of property names, or the object
                                    // itself.
                                    forEach(properties || value, function(property) {
                                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                        if (element !== undef) {
                                            // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                                            // is not the empty string, let `member` {quote(property) + ":"}
                                            // be the concatenation of `member` and the `space` character."
                                            // The "`space` character" refers to the literal space
                                            // character, not the `space` {width} argument provided to
                                            // `JSON.stringify`.
                                            results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                                        }
                                    });
                                    result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
                                }
                                // Remove the object from the traversed object stack.
                                stack.pop();
                                return result;
                            }
                        };

                        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
                        JSON3.stringify = function(source, filter, width) {
                            var whitespace, callback, properties, className;
                            if (typeof filter == "function" || typeof filter == "object" && filter) {
                                if ((className = getClass.call(filter)) == functionClass) {
                                    callback = filter;
                                } else if (className == arrayClass) {
                                    // Convert the property names array into a makeshift set.
                                    properties = {};
                                    for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
                                }
                            }
                            if (width) {
                                if ((className = getClass.call(width)) == numberClass) {
                                    // Convert the `width` to an integer and create a string containing
                                    // `width` number of space characters.
                                    if ((width -= width % 1) > 0) {
                                        for (whitespace = "", width > 10 && (width = 10) ; whitespace.length < width; whitespace += " ");
                                    }
                                } else if (className == stringClass) {
                                    whitespace = width.length <= 10 ? width : width.slice(0, 10);
                                }
                            }
                            // Opera <= 7.54u2 discards the values associated with empty string keys
                            // (`""`) only if they are used directly within an object member list
                            // (e.g., `!("" in { "": 1})`).
                            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                        };
                    }

                    // Public: Parses a JSON source string.
                    if (!has("json-parse")) {
                        var fromCharCode = String.fromCharCode;

                        // Internal: A map of escaped control characters and their unescaped
                        // equivalents.
                        var Unescapes = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };

                        // Internal: Stores the parser state.
                        var Index, Source;

                        // Internal: Resets the parser state and throws a `SyntaxError`.
                        var abort = function() {
                            Index = Source = null;
                            throw SyntaxError();
                        };

                        // Internal: Returns the next token, or `"$"` if the parser has reached
                        // the end of the source string. A token may be a string, number, `null`
                        // literal, or Boolean literal.
                        var lex = function() {
                            var source = Source, length = source.length, value, begin, position, isSigned, charCode;
                            while (Index < length) {
                                charCode = source.charCodeAt(Index);
                                switch (charCode) {
                                    case 9: case 10: case 13: case 32:
                                        // Skip whitespace tokens, including tabs, carriage returns, line
                                        // feeds, and space characters.
                                        Index++;
                                        break;
                                    case 123: case 125: case 91: case 93: case 58: case 44:
                                        // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                                        // the current position.
                                        value = charIndexBuggy ? source.charAt(Index) : source[Index];
                                        Index++;
                                        return value;
                                    case 34:
                                        // `"` delimits a JSON string; advance to the next character and
                                        // begin parsing the string. String tokens are prefixed with the
                                        // sentinel `@` character to distinguish them from punctuators and
                                        // end-of-string tokens.
                                        for (value = "@", Index++; Index < length;) {
                                            charCode = source.charCodeAt(Index);
                                            if (charCode < 32) {
                                                // Unescaped ASCII control characters (those with a code unit
                                                // less than the space character) are not permitted.
                                                abort();
                                            } else if (charCode == 92) {
                                                // A reverse solidus (`\`) marks the beginning of an escaped
                                                // control character (including `"`, `\`, and `/`) or Unicode
                                                // escape sequence.
                                                charCode = source.charCodeAt(++Index);
                                                switch (charCode) {
                                                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                                                        // Revive escaped control characters.
                                                        value += Unescapes[charCode];
                                                        Index++;
                                                        break;
                                                    case 117:
                                                        // `\u` marks the beginning of a Unicode escape sequence.
                                                        // Advance to the first character and validate the
                                                        // four-digit code point.
                                                        begin = ++Index;
                                                        for (position = Index + 4; Index < position; Index++) {
                                                            charCode = source.charCodeAt(Index);
                                                            // A valid sequence comprises four hexdigits (case-
                                                            // insensitive) that form a single hexadecimal value.
                                                            if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                                                // Invalid Unicode escape sequence.
                                                                abort();
                                                            }
                                                        }
                                                        // Revive the escaped character.
                                                        value += fromCharCode("0x" + source.slice(begin, Index));
                                                        break;
                                                    default:
                                                        // Invalid escape sequence.
                                                        abort();
                                                }
                                            } else {
                                                if (charCode == 34) {
                                                    // An unescaped double-quote character marks the end of the
                                                    // string.
                                                    break;
                                                }
                                                charCode = source.charCodeAt(Index);
                                                begin = Index;
                                                // Optimize for the common case where a string is valid.
                                                while (charCode >= 32 && charCode != 92 && charCode != 34) {
                                                    charCode = source.charCodeAt(++Index);
                                                }
                                                // Append the string as-is.
                                                value += source.slice(begin, Index);
                                            }
                                        }
                                        if (source.charCodeAt(Index) == 34) {
                                            // Advance to the next character and return the revived string.
                                            Index++;
                                            return value;
                                        }
                                        // Unterminated string.
                                        abort();
                                    default:
                                        // Parse numbers and literals.
                                        begin = Index;
                                        // Advance past the negative sign, if one is specified.
                                        if (charCode == 45) {
                                            isSigned = true;
                                            charCode = source.charCodeAt(++Index);
                                        }
                                        // Parse an integer or floating-point value.
                                        if (charCode >= 48 && charCode <= 57) {
                                            // Leading zeroes are interpreted as octal literals.
                                            if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                                                // Illegal octal literal.
                                                abort();
                                            }
                                            isSigned = false;
                                            // Parse the integer component.
                                            for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57) ; Index++);
                                            // Floats cannot contain a leading decimal point; however, this
                                            // case is already accounted for by the parser.
                                            if (source.charCodeAt(Index) == 46) {
                                                position = ++Index;
                                                // Parse the decimal component.
                                                for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57) ; position++);
                                                if (position == Index) {
                                                    // Illegal trailing decimal.
                                                    abort();
                                                }
                                                Index = position;
                                            }
                                            // Parse exponents. The `e` denoting the exponent is
                                            // case-insensitive.
                                            charCode = source.charCodeAt(Index);
                                            if (charCode == 101 || charCode == 69) {
                                                charCode = source.charCodeAt(++Index);
                                                // Skip past the sign following the exponent, if one is
                                                // specified.
                                                if (charCode == 43 || charCode == 45) {
                                                    Index++;
                                                }
                                                // Parse the exponential component.
                                                for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57) ; position++);
                                                if (position == Index) {
                                                    // Illegal empty exponent.
                                                    abort();
                                                }
                                                Index = position;
                                            }
                                            // Coerce the parsed value to a JavaScript number.
                                            return +source.slice(begin, Index);
                                        }
                                        // A negative sign may only precede numbers.
                                        if (isSigned) {
                                            abort();
                                        }
                                        // `true`, `false`, and `null` literals.
                                        if (source.slice(Index, Index + 4) == "true") {
                                            Index += 4;
                                            return true;
                                        } else if (source.slice(Index, Index + 5) == "false") {
                                            Index += 5;
                                            return false;
                                        } else if (source.slice(Index, Index + 4) == "null") {
                                            Index += 4;
                                            return null;
                                        }
                                        // Unrecognized token.
                                        abort();
                                }
                            }
                            // Return the sentinel `$` character if the parser has reached the end
                            // of the source string.
                            return "$";
                        };

                        // Internal: Parses a JSON `value` token.
                        var get = function(value) {
                            var results, hasMembers;
                            if (value == "$") {
                                // Unexpected end of input.
                                abort();
                            }
                            if (typeof value == "string") {
                                if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                                    // Remove the sentinel `@` character.
                                    return value.slice(1);
                                }
                                // Parse object and array literals.
                                if (value == "[") {
                                    // Parses a JSON array, returning a new JavaScript array.
                                    results = [];
                                    for (; ; hasMembers || (hasMembers = true)) {
                                        value = lex();
                                        // A closing square bracket marks the end of the array literal.
                                        if (value == "]") {
                                            break;
                                        }
                                        // If the array literal contains elements, the current token
                                        // should be a comma separating the previous element from the
                                        // next.
                                        if (hasMembers) {
                                            if (value == ",") {
                                                value = lex();
                                                if (value == "]") {
                                                    // Unexpected trailing `,` in array literal.
                                                    abort();
                                                }
                                            } else {
                                                // A `,` must separate each array element.
                                                abort();
                                            }
                                        }
                                        // Elisions and leading commas are not permitted.
                                        if (value == ",") {
                                            abort();
                                        }
                                        results.push(get(value));
                                    }
                                    return results;
                                } else if (value == "{") {
                                    // Parses a JSON object, returning a new JavaScript object.
                                    results = {};
                                    for (; ; hasMembers || (hasMembers = true)) {
                                        value = lex();
                                        // A closing curly brace marks the end of the object literal.
                                        if (value == "}") {
                                            break;
                                        }
                                        // If the object literal contains members, the current token
                                        // should be a comma separator.
                                        if (hasMembers) {
                                            if (value == ",") {
                                                value = lex();
                                                if (value == "}") {
                                                    // Unexpected trailing `,` in object literal.
                                                    abort();
                                                }
                                            } else {
                                                // A `,` must separate each object member.
                                                abort();
                                            }
                                        }
                                        // Leading commas are not permitted, object property names must be
                                        // double-quoted strings, and a `:` must separate each property
                                        // name and value.
                                        if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                                            abort();
                                        }
                                        results[value.slice(1)] = get(lex());
                                    }
                                    return results;
                                }
                                // Unexpected token encountered.
                                abort();
                            }
                            return value;
                        };

                        // Internal: Updates a traversed object member.
                        var update = function(source, property, callback) {
                            var element = walk(source, property, callback);
                            if (element === undef) {
                                delete source[property];
                            } else {
                                source[property] = element;
                            }
                        };

                        // Internal: Recursively traverses a parsed JSON object, invoking the
                        // `callback` function for each value. This is an implementation of the
                        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
                        var walk = function(source, property, callback) {
                            var value = source[property], length;
                            if (typeof value == "object" && value) {
                                // `forEach` can't be used to traverse an array in Opera <= 8.54
                                // because its `Object#hasOwnProperty` implementation returns `false`
                                // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                                if (getClass.call(value) == arrayClass) {
                                    for (length = value.length; length--;) {
                                        update(value, length, callback);
                                    }
                                } else {
                                    forEach(value, function(property) {
                                        update(value, property, callback);
                                    });
                                }
                            }
                            return callback.call(source, property, value);
                        };

                        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
                        JSON3.parse = function(source, callback) {
                            var result, value;
                            Index = 0;
                            Source = "" + source;
                            result = get(lex());
                            // If a JSON string contains multiple tokens, it is invalid.
                            if (lex() != "$") {
                                abort();
                            }
                            // Reset the parser state.
                            Index = Source = null;
                            return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                        };
                    }
                }

                // Export for asynchronous module loaders.
                if (isLoader) {
                    define(function() {
                        return JSON3;
                    });
                }
            }(this));

        }, {}], 50: [function(_dereq_, module, exports) {
            module.exports = toArray

            function toArray(list, index) {
                var array = []

                index = index || 0

                for (var i = index || 0; i < list.length; i++) {
                    array[i - index] = list[i]
                }

                return array
            }

        }, {}]
    }, {}, [1])
    (1)
});
(function() {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngAnimate', 'toastr']);
}());

(function() {
    'use strict';

    angular
    .module('app')

    .filter('searchTickets', function() {

        return function(list, query) {

            if (!query) {
                return list;
            }

            var result = [];

            query = query.toLowerCase();

            angular.forEach(list, function(item) {

                if (item.title.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
                else if (item.content.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
                else if (item.priority.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
                else if (item.category.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
            });

            return result;
        };
    })

    .filter('searchCategories', function() {

        return function(list, query) {

            if (!query) {
                return list;
            }

            var result = [];

            query = query.toLowerCase();

            angular.forEach(list, function(item) {

                if (item.name.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
            });

            return result;
        };
    })

    .filter('searchAccounts', function() {

        return function(list, query) {

            if (!query) {
                return list;
            }

            var result = [];

            query = query.toLowerCase();

            angular.forEach(list, function(item) {

                var fullName = item.firstName + ' ' + item.lastName;

                if (fullName.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
                else if (fullName.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
            });

            return result;
        };
    })

    //.filter('searchMessages', function() {

    //    return function(list, query) {

    //        if (!query) {
    //            return list;
    //        }

    //        var result = [];

    //        query = query.toLowerCase();

    //        angular.forEach(list, function(item) {

    //            if (item.title.toLowerCase().indexOf(query) !== -1) {
    //                result.push(item);
    //            }
    //            else if (item.content.toLowerCase().indexOf(query) !== -1) {
    //                result.push(item);
    //            }
    //            else if (item.priority.toLowerCase().indexOf(query) !== -1) {
    //                result.push(item);
    //            }
    //            else if (item.category.toLowerCase().indexOf(query) !== -1) {
    //                result.push(item);
    //            }
    //        });

    //        return result;
    //    };
    //});

}());
(function() {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(check);

    config.$inject = ['$routeProvider', '$locationProvider', 'toastrConfig'];

    function config($routeProvider, $locationProvider, toastrConfig) {
        $routeProvider
        .when('/app/dashboard', {
            templateUrl: '/app/dashboard/dashboard.html'
        })
        .when('/app/tickets', {
            templateUrl: '/app/tickets/tickets.html',
            controller: 'ticketsController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/new', {
            templateUrl: '/app/tickets/newTicket.html',
            controller: 'newTicketController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/:ticketId', {
            templateUrl: '/app/tickets/ticket.html',
            controller: 'ticketController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/:ticketId/edit', {
            templateUrl: '/app/tickets/editTicket.html',
            controller: 'editTicketController',
            controllerAs: 'vm'
        })
        .when('/app/tickets/:ticketId/update', {
            templateUrl: '/app/tickets/updateTicket.html',
            controller: 'ticketController',
            controllerAs: 'vm'
        })
        .when('/app/categories', {
            templateUrl: '/app/categories/categories.html',
            controller: 'categoriesController',
            controllerAs: 'vm'
        })
        .when('/app/categories/new', {
            templateUrl: '/app/categories/newCategory.html',
            controller: 'newCategoryController',
            controllerAs: 'vm'
        })
        .when('/app/categories/:categoryId', {
            templateUrl: '/app/categories/category.html',
            controller: 'categoryController',
            controllerAs: 'vm'
        })
        .when('/app/categories/:categoryId/edit', {
            templateUrl: '/app/categories/editCategory.html',
            controller: 'editCategoryController',
            controllerAs: 'vm'
        })
        .when('/app/accounts', {
            templateUrl: '/app/accounts/accounts.html',
            controller: 'accountsController',
            controllerAs: 'vm'
        })
        .when('/app/accounts/new', {
            templateUrl: '/app/accounts/newAccount.html',
            controller: 'newAccountController',
            controllerAs: 'vm'
        })
        .when('/app/accounts/:accountId', {
            templateUrl: '/app/accounts/account.html',
            controller: 'accountController',
            controllerAs: 'vm'
        })
        .when('/app/accounts/:accountId/edit', {
            templateUrl: '/app/accounts/editAccount.html',
            controller: 'editAccountController',
            controllerAs: 'vm'
        })
        .when('/app/messages', {
            templateUrl: '/app/messages/messages.html',
            controller: 'accountsController',
            controllerAs: 'vm'
        })
        .when('/app/messages/:recipientId', {
            templateUrl: '/app/messages/message.html',
            controller: 'messageController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/app/dashboard'
        });

        $locationProvider.html5Mode(true);

        angular.extend(toastrConfig, {
            allowHtml: true,
            autoDismiss: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            maxOpened: 0,    
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            progressBar: false,
            tapToDismiss: true,
            target: 'body',
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    }

    check.$inject = ['$rootScope', '$location', 'authenticationService'];

    function check($rootScope, $location, authenticationService) {
        $rootScope.$on('$routeChangeStart', function() {
            var account = authenticationService.getAuthenticatedAccount();

            if (account === null && (window.location.href.indexOf('app') > -1)) {
                window.location.href = "/";
                console.log('Route Unauthenticated');
            } else {
                console.log('Route Authenticated');
            }
        });
    }
}());

(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$rootScope', 'authenticationService', 'messageService', 'toastr'];

    function mainController($rootScope, authenticationService, messageService, toastr) {
        var main = this;
        // Account
        main.account = {};
        main.logout = authenticationService.logout;
        main.mySocket = {};

        // Navigation
        main.toggleNav = toggleNav;
        main.displayNav = false;

        activate();

        function activate() {
            main.account = authenticationService.getAuthenticatedAccount();
            messageService.connectToChat(main.account);
            main.mySocket = messageService.socket;
            main.mySocket.on('private message', function(message) {
                messageService.addNewMessage(message);
                toastr.info('From ' + message.sender, 'New Message');
            });

            $rootScope.$on("$locationChangeStart", function() {
                main.displayNav = false;
            });
        };

        function toggleNav() {
            main.displayNav = !main.displayNav;
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('accountController', accountController);

    accountController.$inject = ['$routeParams', '$window', 'accountService', 'authenticationService'];

    function accountController($routeParams, $window, accountService, authenticationService) {
        var vm = this;
        vm.account = {};
        vm.deleteAccount = deleteAccount;

        activate();

        function deleteAccount() {
            accountService.deleteAccount($routeParams.accountId)
            .then(function() { $window.location.href = '/app/accounts'; });
        }

        function activate() {
            accountService.getAccount($routeParams.accountId)
                .then(function(response) {
                    vm.account = response;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .factory('accountService', accountService);

    accountService.$inject = ['$http'];

    function accountService($http) {
        var service = {
            getAccounts: getAccounts,
            getAccount: getAccount,
            editAccountInfo: editAccountInfo,
            createAccount: createAccount,
            deleteAccount: deleteAccount
        };
        return service;

        function getAccounts() {
            return $http.get('http://localhost:3001/accounts')
            .then(function(response) { return response.data; });
        }

        function getAccount(accountId) {
            return $http.get('http://localhost:3001/accounts/' + accountId)
            .then(function(response) { return response.data; });
        }

        function editAccountInfo(accountId, account) {
            return $http.put('http://localhost:3001/accounts/' + accountId, account)
            .then(function(response) { return response.data; });
        }

        function createAccount(account) {
            return $http.post('http://localhost:3001/accounts', account)
            .then(function(response) { return response.data; });
        }

        function deleteAccount(accountId) {
            return $http.delete('http://localhost:3001/accounts/' + accountId)
            .then(function(response) { return response.data; });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('accountsController', accountsController);

    accountsController.$inject = ['accountService'];

    function accountsController(accountService) {
        var vm = this;
        vm.accounts = {};

        activate();

        function activate() {
            accountService.getAccounts()
                .then(function(response) {
                    vm.accounts = response;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('editAccountController', editAccountController);

    editAccountController.$inject = ['$routeParams', '$window', 'authenticationService', 'accountService'];

    function editAccountController($routeParams, $window, authenticationService, accountService) {
        var vm = this;
        vm.editAccount = editAccount;
        vm.account = {};
        vm.accountBeingEdited = {};

        activate();

        function editAccount() {
            return accountService.editAccountInfo($routeParams.accountId, { 'firstName': vm.accountBeingEdited.firstName, 'lastName': vm.accountBeingEdited.lastName, 'ticketUpdates': vm.accountBeingEdited.ticketUpdates, 'email': vm.accountBeingEdited.email, 'password': vm.accountBeingEdited.password, 'admin': vm.accountBeingEdited.admin })
            .then(function() { $window.location.href = '/app/accounts/' + vm.accountBeingEdited.id; });
        }

        function activate() {
            vm.account = authenticationService.getAuthenticatedAccount()
            accountService.getAccount($routeParams.accountId)
                .then(function(account) {
                    vm.accountBeingEdited = account;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('newAccountController', newAccountController);

    newAccountController.$inject = ['$window', 'accountService', 'authenticationService'];

    function newAccountController($window, accountService, authenticationService) {
        var vm = this;
        vm.createNewUser = createNewUser;

        activate();

        function createNewUser() {
            var account = authenticationService.getAuthenticatedAccount();
            return accountService.createAccount({ 'firstName': vm.account.firstName, 'lastName': vm.account.lastName, 'email': vm.account.email, 'password': vm.account.password, 'businessId': account.businessId })
            .then(function() { $window.location.href = '/app/accounts'; });
        }

        function activate() {
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http'];

    function authenticationService($http) {

        var service = {
            login: login,
            logout: logout,
            getAuthenticatedAccount: getAuthenticatedAccount,
        };
        return service;

        function login(email, password) {
            return $http.get('http://localhost:3001/accounts?email=' + email + '&password=' + password)
            .then(onSuccess, onFail);

            function onSuccess(response) {
                var account = response.data;
                sessionStorage.setItem('account', angular.toJson(account));
                return account;
            }

            function onFail(response) {
                sessionStorage.setItem('account', null);
                return null;
            }
        }

        function getAuthenticatedAccount() {
            return angular.fromJson(sessionStorage.getItem('account'));
        }

        function logout() {
            sessionStorage.setItem('account', null);
            window.location.href = "/";
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginFormController', loginFormController);

    loginFormController.$inject = ['$window', 'authenticationService', 'toastr'];

    function loginFormController($window, authenticationService, toastr) {
        var vm = this;
        vm.email;
        vm.password;
        vm.submit = submit;

        function submit() {
            authenticationService.login(vm.email, vm.password).then(onSuccess, onFail);

            function onSuccess(account) {
                if (account === null) {
                    toastr.error('Please try again.', 'Login Unsuccessful');
                }
                else {
                    $window.location.href = '/app/dashboard';
                }
            }

            function onFail() {
                toastr.error('Server Error');
            }
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('registerFormController', registerFormController);

    registerFormController.$inject = ['$scope', 'authenticationService', '$location'];

    function registerFormController($scope, authenticationService, $location) {
        $scope.email;
        $scope.password;
        $scope.submit = submit;

        function submit() {
            authenticationService.login($scope.email, $scope.password).then(onSuccess, onFail);

            function onSuccess(account) {
                if (account == null) {
                    console.error('Account was not authenticated.');
                }
                else {
                    $location.path('/app/dashboard');
                }
            }

            function onFail() {
                console.error('Server error.');
            }
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categoryService'];

    function categoriesController(categoryService) {
        var vm = this;
        vm.categories = {};

        activate();

        function activate() {
            categoryService.getCategories()
                .then(function(response) {
                    vm.categories = response;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('categoryController', categoryController);

    categoryController.$inject = ['$routeParams', '$route', '$window', 'categoryService'];

    function categoryController($routeParams, $route, $window, categoryService) {
        var vm = this;
        vm.category = {};
        vm.deleteCategory = deleteCategory;
        vm.updateCategory = updateCategory;

        activate();

        function updateCategory(name) {
            categoryService.updateCategory($routeParams.categoryId, {'name': name})
            .then(function() { $route.reload(); });
        }

        function deleteCategory() {
            categoryService.deleteCategory($routeParams.categoryId)
            .then(function() { $window.location.href = '/app/categories'; });
        }

        function activate() {
            categoryService.getCategory($routeParams.categoryId)
                .then(function(response) {
                    vm.category = response;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .factory('categoryService', categoryService);

    categoryService.$inject = ['$http'];

    function categoryService($http) {
        var service = {
            getCategories: getCategories,
            getCategory: getCategory,
            createCategory: createCategory,
            editCategory: editCategory,
            deleteCategory: deleteCategory
        };
        return service;

        function getCategories() {
            return $http.get('http://localhost:3001/categories')
            .then(function(response) { return response.data; });
        }

        function getCategory(categoryId) {
            return $http.get('http://localhost:3001/categories/' + categoryId)
            .then(function(response) { return response.data; });
        }

        function createCategory(category) {
            return $http.post('http://localhost:3001/categories', category)
            .then(function(response) { return response.data; });
        }

        function editCategory(categoryId, category) {
            return $http.put('http://localhost:3001/categories/' + categoryId, category)
            .then(function(response) { return response.data; });
        }

        function deleteCategory(categoryId) {
            return $http.delete('http://localhost:3001/categories/' + categoryId)
            .then(function(response) { return response.data; });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('editCategoryController', editCategoryController);

    editCategoryController.$inject = ['$window', '$routeParams', 'ticketService', 'categoryService', 'authenticationService'];

    function editCategoryController($window, $routeParams, ticketService, categoryService, authenticationService) {
        var vm = this;
        vm.category = {};
        vm.editCategory = editCategory;

        activate();

        function editCategory(name) {
            var account = authenticationService.getAuthenticatedAccount();
            return categoryService.editCategory(vm.category.id, { 'name': name })
            .then(function() { $window.location.href = '/app/categories/' + vm.category.id; });
        }

        function activate() { } {
            categoryService.getCategory($routeParams.categoryId)
            .then(function(response) {
                vm.category = response;
            })
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('newCategoryController', newCategoryController);

    newCategoryController.$inject = ['$window', 'categoryService', 'authenticationService'];

    function newCategoryController($window, categoryService, authenticationService) {
        var vm = this;
        vm.businessId;
        vm.createNewCategory = createNewCategory;

        function createNewCategory() {
            var account = authenticationService.getAuthenticatedAccount();
                categoryService.createCategory({ 'name': vm.name, 'businessId': account.businessId })
                .then(function() { $window.location.href = '/app/categories'; });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('messageController', messageController);

    messageController.$inject = ['$scope', '$routeParams', 'authenticationService', 'messageService', 'accountService'];

    function messageController($scope, $routeParams, authenticationService, messageService, accountService) {
        var vm = this;
        vm.socket = {};
        vm.account = {};
        vm.recipient = null;
        vm.messages = [];
        vm.message = '';
        vm.sendMessage = sendMessage;

        activate();

        function sendMessage() {
            var message = { recipientId: vm.recipient.id, senderId: vm.account.id, sender: vm.account.userName, content: vm.message };
            messageService.sendMessage(message);
            vm.message = '';
            scrollToBottom();
        }

        function scrollToBottom() {
            setTimeout(function() {
                var textarea = document.getElementById('messageBox');
                textarea.scrollTop = textarea.scrollHeight;
            }, 0);
        }

        function activate() {
            // Get This Users Socket
            vm.socket = messageService.socket;

            // Get This Users Account
            vm.account = authenticationService.getAuthenticatedAccount();
            vm.account.userName = vm.account.firstName + ' ' + vm.account.lastName;
            delete vm.account.firstName;
            delete vm.account.lastName;

            // Get Recipients Account
            accountService.getAccount($routeParams.recipientId)
            .then(function(account) {
                vm.recipient = account;
                vm.recipient.userName = vm.recipient.firstName + ' ' + vm.recipient.lastName;
                delete vm.recipient.firstName;
                delete vm.recipient.lastName;
            });

            // Get Messages In This Conversation
            messageService.getConversation(vm.account.id, $routeParams.recipientId)
            .then(function(messages) {
                vm.messages = messages;
                scrollToBottom();
            });

            vm.socket.on('private message', function(message) {
                scrollToBottom();
            });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .factory('messageService', messageService);

    messageService.$inject = ['$http', '$q', 'authenticationService'];

    function messageService($http, $q, authenticationService) {
        var service = {
            connectToChat: connectToChat,
            getConversation: getConversation,
            addNewMessage: addNewMessage,
            sendMessage: sendMessage,
            socket: null,
            allMessages: null
        };
        return service;

        function connectToChat(account) {
            if (service.socket === null) {
                service.socket = io.connect('http://localhost:3002');
                service.socket.emit('add account to chat', account);
                service.allMessages = {};
            }
        }

        function getConversation(senderId, recipientId) {
            if (recipientId in service.allMessages) {
                var deferred = $q.defer();
                deferred.resolve(service.allMessages[recipientId]);
                return deferred.promise;
            }
            else {
                return $http.get('http://localhost:3001/messages/' + senderId + '/' + recipientId)
                .then(function(response) {
                    service.allMessages[recipientId] = response.data;
                    return response.data;
                });
            }
        }

        function addNewMessage(message) {
            if (message.senderId in service.allMessages) {
                service.allMessages[message.senderId].push(message);
            }
            else {
                $http.get('http://localhost:3001/messages/' + message.recipientId + '/' + message.senderId)
                .then(function(response) {
                    service.allMessages[message.senderId] = response.data;
                    service.allMessages[message.senderId].push(message);
                });
            }
        }

        function sendMessage(message) {
            // Save message locally to keep allMessages up to date
            service.allMessages[message.recipientId].push(message);
            // Save message on node server
            service.socket.emit('private message', message);

            // Send Message to Database
            // IDEA: We could send the message to the database from the node server in batches
            return $http.post('http://localhost:3001/messages', message);
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('editTicketController', editTicketController);

    editTicketController.$inject = ['$window', '$routeParams', 'ticketService', 'categoryService', 'authenticationService'];

    function editTicketController($window, $routeParams, ticketService, categoryService, authenticationService) {
        var vm = this;
        vm.ticket = {};
        vm.selectedCategory = {};
        vm.categories = [];
        vm.editTicket = editTicket;

        activate();

        function editTicket(title, content, priority, categoryId) {
            var account = authenticationService.getAuthenticatedAccount();
            return ticketService.editTicket(vm.ticket.id, { 'title': title, 'content' : content, 'priority': priority, 'categoryId': categoryId, 'content': content, 'status': vm.ticket.status })
            .then(function() { $window.location.href = '/app/tickets/' + vm.ticket.id; });
        }

        function activate() { } {
            ticketService.getTicket($routeParams.ticketId)
                .then(function(response) {
                    vm.ticket = response;

                    return categoryService.getCategories();
                }).then(function(categories) {
                    vm.categories = categories;
                    vm.categories.forEach(function(category) {
                        if (category.id === vm.ticket.categoryId) {
                            vm.selectedCategory = category;
                        }
                    })
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('newTicketController', newTicketController);

    newTicketController.$inject = ['$window', 'ticketService', 'categoryService', 'authenticationService'];

    function newTicketController($window, ticketService, categoryService, authenticationService) {
        var vm = this;
        vm.categories = {};
        vm.createNewTicket = createNewTicket;

        activate();

        function createNewTicket() {
            var account = authenticationService.getAuthenticatedAccount();
            return ticketService.createTicket({ 'title': vm.title, 'priority': vm.priority, 'categoryId': vm.category.id, 'content': vm.content, 'creatorId': account.id })
            .then(function() { $window.location.href = '/app/tickets'; });
        }

        function activate() {
            categoryService.getCategories()
                .then(function(response) {
                    vm.categories = response;
                });
        }
    }
}());
(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('ticketController', ticketController);

    ticketController.$inject = ['$routeParams', '$window', '$route', 'ticketService', 'authenticationService'];

    function ticketController($routeParams, $window, $route, ticketService, authenticationService) {
        var vm = this;
        vm.filters = [];
        vm.ticket = {};
        vm.updates = {};
        vm.updateTicket = updateTicket;
        vm.closeTicket = closeTicket;

        activate();

        function updateTicket(content) {
            var account = authenticationService.getAuthenticatedAccount();
            return ticketService.updateTicket($routeParams.ticketId, { 'content': content, 'creatorId': account.id })
            .then(function() { $route.reload(); });
        }

        function closeTicket() {
            ticketService.closeTicket($routeParams.ticketId)
            .then(function() { $window.location.href = '/app/tickets'; });
        }

        function activate() {
            ticketService.getTicket($routeParams.ticketId)
                .then(function(response) {
                    vm.ticket = response;
                });
            ticketService.getTicketUpdates($routeParams.ticketId)
                .then(function(response) {
                    vm.updates = response;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .factory('ticketService', ticketService);

    ticketService.$inject = ['$http'];

    function ticketService($http) {
        var service = {
            getTickets: getTickets,
            getTicket: getTicket,
            getTicketUpdates: getTicketUpdates,
            updateTicket: updateTicket,
            editTicket: editTicket,
            createTicket: createTicket,
            closeTicket: closeTicket
        };
        return service;

        function getTickets() {
            return $http.get('http://localhost:3001/tickets')
            .then(function(response) { return response.data; });
        }

        function getTicket(ticketId) {
            return $http.get('http://localhost:3001/tickets/' + ticketId)
            .then(function(response) { return response.data; });
        }

        function getTicketUpdates(ticketId) {
            return $http.get('http://localhost:3001/tickets/' + ticketId + '/updates')
            .then(function(response) { return response.data; });
        }

        function updateTicket(ticketId, update) {
            return $http.post('http://localhost:3001/tickets/' + ticketId + '/updates', update)
            .then(function(response) { return response.data; });
        }

        function editTicket(ticketId, ticket) {
            return $http.put('http://localhost:3001/tickets/' + ticketId, ticket)
            .then(function(response) { return response.data; });
        }

        function createTicket(ticket) {
            return $http.post('http://localhost:3001/tickets', ticket)
            .then(function(response) { return response.data; });
        }

        function closeTicket(ticketId, userId) {
            return $http.delete('http://localhost:3001/tickets/' + ticketId)
            .then(function(response) { return response.data; });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ticketFormController', ticketFormController);

    ticketFormController.$inject = ['$routeParams', 'ticketService'];

    function ticketFormController($routeParams, ticketService) {
        var vm = this;
        vm.tickets = {};

        activate();

        function activate() {
            ticketService.getTickets()
                .then(function(response) {
                    vm.tickets = response;
                });
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .controller('ticketsController', ticketsController);

    ticketsController.$inject = ['ticketService', 'categoryService'];

    function ticketsController(ticketService, categoryService) {
        var vm = this;
        vm.tickets = [];
        vm.categories = [];

        // Sorting Variables
        vm.options = {};
        vm.options.categories = {};
        vm.options.status = {};
        vm.options.sort = {};
        vm.values = {};
        vm.values.categories = {};
        vm.values.status = {};
        vm.values.sort = {};

        activate();

        function activate() {
            ticketService.getTickets()
            .then(function(response) {
                vm.tickets = response;
            });

            categoryService.getCategories()
            .then(function(response) {
                vm.categories = response;

                vm.options.categories = [];
                vm.options.categories.push({ name: 'All Categories', value: -1 });
                vm.categories.forEach(function(category) { vm.options.categories.push({ name: category.name, value: category.id }) });
                vm.values.categories = vm.options.categories[0];
            });

            vm.options.status = [{ name: 'All Tickets', value: 'all' }, { name: 'Open Tickets Only', value: 'open' }, { name: 'Closed Tickets Only', value: 'closed' }];
            vm.options.sort = [{ name: 'Newest First' }, { name: 'Oldest First' }, { name: 'Most Important First' }, { name: 'Least Important First' }];

            vm.values.status = vm.options.status[0];
            vm.values.sort = vm.options.sort[0];
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .directive('accountListItem', accountListItem);

    function accountListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/accounts/directives/account-list-item.directive.html',
            scope: {
                account: '='
            }
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .directive('categoryListItem', categoryListItem);

    function categoryListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/categories/directives/category-list-item.directive.html',
            scope: {
                category: '='
            }
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .directive('messageListItem', messageListItem);

    function messageListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/messages/directives/message-list-item.directive.html',
            scope: {
                account: '='
            }
        }
    }
}());
(function() {
    'use strict';

    angular
        .module('app')
        .directive('ticketListItem', ticketListItem);

    function ticketListItem() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/app/tickets/directives/ticket-list-item.directive.html',
            scope: {
                ticket: '='
            }
        }
    }
}());
//# sourceMappingURL=app.js.map