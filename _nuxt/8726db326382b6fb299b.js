(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{178:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},179:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce((function(e,t){return e[t]=source[t],e}),e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],m=c[d];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:d}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach((function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o})),t):Object.keys(source).reduce((function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t}),c)}}},180:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,c=r(179),l={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=c.assign({default:l.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},l)},181:function(e,t,r){var content=r(189);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("431d5f9c",content,!0,{sourceMap:!1})},183:function(e,t,r){"use strict";var n=r(179),o=r(180),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,m=function(e,t){d.apply(e,f(t)?t:[t])},h=Date.prototype.toISOString,v=o.default,y={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:v,formatter:o.formatters[v],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},w=function e(object,t,r,o,c,l,filter,d,h,v,w,_,S){var C,x=object;if("function"==typeof filter?x=filter(t,x):x instanceof Date?x=v(x):"comma"===r&&f(x)&&(x=x.join(",")),null===x){if(o)return l&&!_?l(t,y.encoder,S,"key"):t;x=""}if("string"==typeof(C=x)||"number"==typeof C||"boolean"==typeof C||"symbol"==typeof C||"bigint"==typeof C||n.isBuffer(x))return l?[w(_?t:l(t,y.encoder,S,"key"))+"="+w(l(x,y.encoder,S,"value"))]:[w(t)+"="+w(String(x))];var A,k=[];if(void 0===x)return k;if(f(filter))A=filter;else{var D=Object.keys(x);A=d?D.sort(d):D}for(var i=0;i<A.length;++i){var O=A[i];c&&null===x[O]||(f(x)?m(k,e(x[O],"function"==typeof r?r(t,O):t,r,o,c,l,filter,d,h,v,w,_,S)):m(k,e(x[O],t+(h?"."+O:"["+O+"]"),r,o,c,l,filter,d,h,v,w,_,S)))}return k};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return y;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||y.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=y.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:y.addQueryPrefix,allowDots:void 0===e.allowDots?y.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:y.charsetSentinel,delimiter:void 0===e.delimiter?y.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:y.encode,encoder:"function"==typeof e.encoder?e.encoder:y.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:y.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:y.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:y.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:y.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):f(n.filter)&&(t=n.filter);var d,h=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var v=l[d];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var _=t[i];n.skipNulls&&null===r[_]||m(h,w(r[_],_,v,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var S=h.join(n.delimiter),C=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?C+="utf8=%26%2310003%3B&":C+="utf8=%E2%9C%93&"),S.length>0?C+S:""}},184:function(e,t,r){"use strict";var n=r(179),o=Object.prototype.hasOwnProperty,c=Array.isArray,l={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},f=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=r.depth>0&&/(\[[^[\]]*])/.exec(n),f=l?n.slice(0,l.index):n,d=[];if(f){if(!r.plainObjects&&o.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;r.depth>0&&null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(o=[])[f]=n:o[l]=n:o={0:n}}n=o}return n}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return l;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?l.charset:e.charset;return{allowDots:void 0===e.allowDots?l.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:l.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:l.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:l.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:l.comma,decoder:"function"==typeof e.decoder?e.decoder:l.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:l.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:l.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:l.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:l.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:l.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var m="string"==typeof e?function(e,t){var i,r={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,m=t.parameterLimit===1/0?void 0:t.parameterLimit,h=d.split(t.delimiter,m),v=-1,y=t.charset;if(t.charsetSentinel)for(i=0;i<h.length;++i)0===h[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[i]?y="utf-8":"utf8=%26%2310003%3B"===h[i]&&(y="iso-8859-1"),v=i,i=h.length);for(i=0;i<h.length;++i)if(i!==v){var w,_,S=h[i],C=S.indexOf("]="),x=-1===C?S.indexOf("="):C+1;-1===x?(w=t.decoder(S,l.decoder,y,"key"),_=t.strictNullHandling?null:""):(w=t.decoder(S.slice(0,x),l.decoder,y,"key"),_=t.decoder(S.slice(x+1),l.decoder,y,"value")),_&&t.interpretNumericEntities&&"iso-8859-1"===y&&(_=f(_)),_&&"string"==typeof _&&t.comma&&_.indexOf(",")>-1&&(_=_.split(",")),S.indexOf("[]=")>-1&&(_=c(_)?[_]:_),o.call(r,w)?r[w]=n.combine(r[w],_):r[w]=_}return r}(e,r):e,h=r.plainObjects?Object.create(null):{},v=Object.keys(m),i=0;i<v.length;++i){var y=v[i],w=d(y,m[y],r);h=n.merge(h,w,r)}return n.compact(h)}},186:function(e,t,r){var content=r(212);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("6723cb3c",content,!0,{sourceMap:!1})},187:function(e,t,r){"use strict";var n=r(196),o=r(182),c={components:{FeedbackForm:n.a},methods:{goToRegister:function(){o.a.goToRegister()}}},l=(r(188),r(13)),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"common-form"}},[t("div",{staticClass:"common-form__content"},[t("feedback-form",[t("div",{staticClass:"img"},[t("button",{on:{click:this.goToRegister}},[this._v("\n          快速注册\n        ")])])])],1),this._v(" "),t("div",{staticClass:"common-form__bg"})])}),[],!1,null,null,null);t.a=component.exports},188:function(e,t,r){"use strict";var n=r(181);r.n(n).a},189:function(e,t,r){t=e.exports=r(37)(!1);var n=r(178),o=n(r(190)),c=n(r(191));t.push([e.i,"#common-form{position:relative;padding:5.15rem 0 6.15rem}#common-form .common-form__content{position:relative;z-index:10}#common-form .common-form__bg{width:96rem;height:43.3rem;background-image:url("+o+");background-size:contain;position:absolute;bottom:0;left:0}.img{width:30.85rem;height:22.15rem;background-image:url("+c+");background-size:contain;background-repeat:no-repeat;position:relative}.img button{width:11.55rem;height:2.45rem;background:#6788ff;border-radius:3rem;font-size:.9rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;text-align:center;line-height:2.45rem;position:absolute;top:7.95rem;right:0}",""])},190:function(e,t,r){e.exports=r.p+"img/1615af2.png"},191:function(e,t,r){e.exports=r.p+"img/f2a97eb.png"},194:function(e,t,r){var n,o;!function(c){if(void 0===(o="function"==typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=t+"="+r+f}}function l(e,r){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");r||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var d=t(l[0]);if(f=(n.read||n)(f,d)||t(f),r)try{f=JSON.parse(f)}catch(e){}if(o[d]=f,e===d)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,r){c(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},195:function(e,t,r){"use strict";var n=r(183),o=r(184),c=r(180);e.exports={formats:c,parse:o,stringify:n}},211:function(e,t,r){"use strict";var n=r(186);r.n(n).a},212:function(e,t,r){(e.exports=r(37)(!1)).push([e.i,".msg-card{height:19rem;width:53rem;margin:0 auto;display:-webkit-box;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between}.msg-card.imgDirectionIsRight{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.msg-card__content{width:21.45rem;margin-left:1.55rem}.msg-card__title{font-size:1.6rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:500;color:#1a212a;margin-top:4.2rem;margin-bottom:1rem}.msg-card__descs{width:21.45rem;font-size:.8rem;font-family:PingFangSC-Light,PingFang SC;font-weight:300;color:#677079;line-height:1.1rem}.msg-card__descs .msg-card__desc{display:-webkit-box;display:flex;margin-bottom:.4rem}.msg-card__descs .msg-card__desc-txt{width:20.45rem}.msg-card__descs .msg-card__point{width:8px;height:8px;border-radius:8px;background:rgba(255,208,124,.2);border:.05rem solid #ffd07c;margin:.4rem .4rem 0 .2rem}.msg-card__button{width:11.55rem;height:2.45rem;border-radius:3rem;text-align:center;line-height:2.45rem;font-size:.9rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;margin-top:2.65rem}.msg-card__img-wrapper{height:19.3rem}.msg-card__img-wrapper img{height:100%}",""])},213:function(e,t,r){var content=r(303);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("c2be0e06",content,!0,{sourceMap:!1})},214:function(e,t,r){var content=r(309);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("2dbf8613",content,!0,{sourceMap:!1})},215:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABMBAMAAADgq5hVAAAAD1BMVEVhr51HcExptaBkr5xjsZ+pUBFLAAAABXRSTlNmABcqU1B5/c8AAADqSURBVDjLdZXbFYMgEAXvSSwgaAqIJdiB/VcVfIDsY/icMwcRdu+q5EuBLPu0JXzepWmN/Ke6XoHPB9YU+KlLqzJd2pTqnjfd86a7/bvuztN1e/6uazO8629zP6M+8lEfuNEHbvSHW/3hVu/c6Z07vXGvN+71mwf95kG/eNQvHvWTJ/rJE/3gmX7wTK881StP9cr3TC9aUr3om+pFn1RnTvvQd+mc+F90D3RveM/0LviO9O5YJ1RXWIdUt1jn1BfYR9R32KfU15gDlBuYM5RLmGOUe5iTlKuYw5TbmPM0F3CO0NzBOUVz7V5/DmNUeYS7EOAAAAAASUVORK5CYII="},216:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABMBAMAAADgq5hVAAAAD1BMVEVhr51HcExptaBkr5xjsZ+pUBFLAAAABXRSTlNmABcqU1B5/c8AAADwSURBVDjLjZXrDYMwDAZdxAKBBcoGZQPYf6kSICZ+nNr8POlCcJzPUvIlpczbuCZ82kTGJfK3HGuIfKtcvCDTiYMg88W9oHwA7oS2vxfaebxwnz8IUvQDRjjq88mEWrdMOHgqVJ4JlWfCyRPh5Ilw8ShcPAo3D8LNg9C4Fxr3gnInKHfCw63wcCt03AgdN0LPe6HnvWC4CqPlj7BarsJuuQov4Pt/+8B36ZzwX1QHqBvVGe6F7hHunfoE+or6EPqW+hzeBb0jeHf0TuFdUw5AblDOQC5RjlHuQU5SrlIO/8rt5c+5QHME5w7NKZpr+foC4eFUuZo5rKAAAAAASUVORK5CYII="},217:function(e,t,r){var content=r(312);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("0d27bbdb",content,!0,{sourceMap:!1})},227:function(e,t,r){"use strict";var n={props:{imgDirection:{type:String,default:"left"},title:{type:String,default:""},imgSrc:{type:String,default:""},buttonColor:{type:String,default:""},buttonTxt:{type:String,default:""},descs:{type:Array,default:function(){return[]}},showPoint:{type:Boolean,default:!0}},data:function(){return{}},methods:{btnClick:function(){this.$emit("btnClick")}}},o=(r(211),r(13)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"msg-card",class:{imgDirectionIsRight:"left"===e.imgDirection}},[r("div",{staticClass:"msg-card__content"},[r("h2",{staticClass:"msg-card__title"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("div",{staticClass:"msg-card__descs"},e._l(e.descs,(function(desc){return r("div",{key:desc,staticClass:"msg-card__desc"},[e.showPoint?r("div",{staticClass:"msg-card__point"}):e._e(),e._v(" "),r("div",{staticClass:"msg-card__desc-txt"},[e._v("\n          "+e._s(desc)+"\n        ")])])})),0),e._v(" "),e.buttonTxt?r("div",[r("button",{staticClass:"msg-card__button",style:{backgroundColor:e.buttonColor},on:{click:e.btnClick}},[e._v("\n        "+e._s(e.buttonTxt)+"\n      ")])]):e._e()]),e._v(" "),r("div",{staticClass:"msg-card__img-wrapper"},[r("img",{attrs:{src:e.imgSrc}})])])}),[],!1,null,null,null);t.a=component.exports},234:function(e,t,r){e.exports=r.p+"img/5f186ea.png"},235:function(e,t,r){e.exports=r.p+"img/d76b98d.png"},298:function(e,t,r){e.exports=r.p+"img/f8cc92e.png"},299:function(e,t,r){e.exports=r.p+"img/6b30f18.png"},300:function(e,t,r){e.exports=r.p+"img/62a28aa.png"},301:function(e,t,r){e.exports=r.p+"img/ba0191a.png"},302:function(e,t,r){"use strict";var n=r(213);r.n(n).a},303:function(e,t,r){(e.exports=r(37)(!1)).push([e.i,".SDK-swiper-item[data-v-ef2b6586]{width:29.7em;height:18.6em;position:relative}.SDK-swiper-item .img-bg[data-v-ef2b6586]{width:43.1em;height:25.9em;top:-2.8em;left:-6.7em;opacity:0}.SDK-swiper-item .img-bg[data-v-ef2b6586],.SDK-swiper-item .img-content[data-v-ef2b6586]{position:absolute;-webkit-transition:opacity .5s;transition:opacity .5s}.SDK-swiper-item .img-content[data-v-ef2b6586]{width:29.7em;height:18.6em;top:0;left:0;z-index:2;opacity:1}.SDK-swiper-item.has-bg .img-bg[data-v-ef2b6586]{opacity:1}.SDK-swiper-item.has-bg .img-content[data-v-ef2b6586]{opacity:0}",""])},304:function(e,t,r){e.exports=r.p+"img/f7d4390.png"},305:function(e,t,r){e.exports=r.p+"img/d397f8f.png"},306:function(e,t,r){e.exports=r.p+"img/82e0892.png"},307:function(e,t,r){e.exports=r.p+"img/db0406c.png"},308:function(e,t,r){"use strict";var n=r(214);r.n(n).a},309:function(e,t,r){t=e.exports=r(37)(!1);var n=r(178),o=n(r(310)),c=n(r(215)),l=n(r(216));t.push([e.i,".SDK-swiper[data-v-407a7fc2]{height:54.05rem;background-image:url("+o+");background-size:contain;background-repeat:no-repeat;overflow:hidden}.SDK-swiper .SDK-swiper__title[data-v-407a7fc2]{height:3.3rem;font-size:1.9rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#1a212a;line-height:3.3rem;letter-spacing:3px;margin-top:3.85rem;text-align:center}.SDK-swiper .SDK-swiper__desc[data-v-407a7fc2]{width:19.2rem;height:2.2rem;font-size:.8rem;font-family:PingFangSC-Light,PingFang SC;font-weight:300;color:#677079;line-height:1.1rem;text-align:center;margin:.5rem auto 0}.SDK-swiper .SDK-swiper__content[data-v-407a7fc2]{width:65.4rem;height:18.6rem;position:relative;margin:7.7rem auto 0}.SDK-swiper .SDK-swiper__content .arrow-left[data-v-407a7fc2]{left:-3.5rem;background-image:url("+c+");background-position:0}.SDK-swiper .SDK-swiper__content .arrow-left[data-v-407a7fc2],.SDK-swiper .SDK-swiper__content .arrow-right[data-v-407a7fc2]{position:absolute;top:9.7rem;width:1.95rem;height:1.95rem;background-repeat:no-repeat;background-size:1.18rem 1.95rem}.SDK-swiper .SDK-swiper__content .arrow-right[data-v-407a7fc2]{left:67rem;background-image:url("+l+");background-position:100%}.SDK-swiper .SDK-swiper__content .SDK-swiper__content-item-left[data-v-407a7fc2]{font-size:.8rem;position:absolute;top:2.65rem;left:0;opacity:.8;-webkit-transition:all .5s;transition:all .5s}.SDK-swiper .SDK-swiper__content .SDK-swiper__content-item-center[data-v-407a7fc2]{font-size:1rem;position:absolute;top:0;left:17.7rem;z-index:99;-webkit-transition:all .5s;transition:all .5s}.SDK-swiper .SDK-swiper__content .SDK-swiper__content-item-right[data-v-407a7fc2]{font-size:.8rem;position:absolute;top:2.65rem;left:41.8rem;opacity:.8;-webkit-transition:all .5s;transition:all .5s}.SDK-swiper .SDK-swiper-name[data-v-407a7fc2]{margin-top:5.7rem;height:1.4rem;font-size:1rem;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#677079;line-height:1.4rem;text-align:center}.SDK-swiper .SDK-swiper-btn[data-v-407a7fc2]{width:11.55rem;height:2.45rem;background:#1db494;border-radius:3rem;font-size:.9rem;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;text-align:center;line-height:2.45rem;margin:3rem auto 0;cursor:pointer}",""])},310:function(e,t,r){e.exports=r.p+"img/1b6b496.png"},311:function(e,t,r){"use strict";var n=r(217);r.n(n).a},312:function(e,t,r){t=e.exports=r(37)(!1);var n=r(178)(r(313));t.push([e.i,".sdk-page__header{height:3.2rem;background:#fff;border-bottom:.1rem solid #e1e2e5}.sdk-page__msg-card1{margin-top:6rem;margin-bottom:5.25rem}.sdk-page__msg-card2{margin-top:3.15rem}.sdk-page__msg-card2,.sdk-page__msg-card3{margin-bottom:7.25rem}.sdk-page__msg-card4{margin-bottom:9.6rem}.sdk-page__banner{height:8.7rem;background-image:url("+n+");background-size:contain;background-repeat:no-repeat}.sdk-page__form{background:#fff}",""])},313:function(e,t,r){e.exports=r.p+"img/7340321.png"},409:function(e,t,r){"use strict";r.r(t);var n=r(193),o=r(192),c=r(227),l=r(187),f={props:{imgContent:{type:String,default:r(234)},imgBg:{type:String,default:r(235)},hasBg:{type:Boolean,default:!0}},data:function(){return{}}},d=(r(302),r(13)),m=Object(d.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"SDK-swiper-item",class:this.hasBg?"has-bg":""},[t("img",{staticClass:"img-content",attrs:{src:this.imgContent}}),this._v(" "),t("img",{staticClass:"img-bg",attrs:{src:this.imgBg}})])}),[],!1,null,"ef2b6586",null).exports,h=r(182),v={components:{SDKSwiperItem:m},data:function(){return{swipersImgs:[{imgContent:r(234),imgBg:r(235),title:"浙江慧优科技商业运营大数据平台"},{imgContent:r(304),imgBg:r(305),title:"云徙营销大数据平台"},{imgContent:r(306),imgBg:r(307),title:"印力地产数字化营销平台"}],classArray:["SDK-swiper__content-item-left","SDK-swiper__content-item-center","SDK-swiper__content-item-right"]}},computed:{currentTitle:function(){var e=this.classArray,t=this.swipersImgs,r=e.indexOf("SDK-swiper__content-item-center");return t[r]&&t[r].title}},methods:{preClick:function(){var e=this;this.preClickFlag||(this.preClickFlag=!0,this.timer=setTimeout((function(){e.preClickFlag=!1}),500),this.classArray=[this.classArray[2],this.classArray[0],this.classArray[1]])},nextClick:function(){var e=this;this.nextClickFlag||(this.nextClickFlag=!0,this.timer=setTimeout((function(){e.nextClickFlag=!1}),500),this.classArray=[this.classArray[1],this.classArray[2],this.classArray[0]])},goToAdviceForm:function(){h.a.goToAdviceForm()}}},y=(r(308),Object(d.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"SDK-swiper"},[r("div",{staticClass:"SDK-swiper__title"},[e._v("\n    他们已将24好玩集成嵌入到自有产品中\n  ")]),e._v(" "),r("div",{staticClass:"SDK-swiper__desc"},[e._v("\n    来自商业地产、智慧营销、电子金融、游乐场、区块链等各个行业的客户已完成对接，将自身产品增值\n  ")]),e._v(" "),r("div",{staticClass:"SDK-swiper__content"},[e._l(e.swipersImgs,(function(t,n){return r("div",{key:n,class:e.classArray[n]},[r("SDKSwiperItem",{attrs:{"has-bg":"SDK-swiper__content-item-center"===e.classArray[n],"img-content":t.imgContent,"img-bg":t.imgBg}})],1)})),e._v(" "),r("div",{staticClass:"arrow-left",on:{click:e.preClick}}),e._v(" "),r("div",{staticClass:"arrow-right",on:{click:e.nextClick}})],2),e._v(" "),r("div",{staticClass:"SDK-swiper-name"},[e._v("\n    "+e._s(e.currentTitle)+"\n  ")]),e._v(" "),r("div",{staticClass:"SDK-swiper-btn",on:{click:e.goToAdviceForm}},[e._v("\n    我要嵌入\n  ")])])}),[],!1,null,"407a7fc2",null).exports),w={components:{HomeFooter:n.a,HomeHeader:o.a,MsgCard:c.a,CommonForm:l.a,SDKSwiper:y}},_=(r(311),Object(d.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sdk-page"},[n("div",{staticClass:"sdk-page__header"},[n("home-header",{attrs:{"active-item":"sdk"}})],1),e._v(" "),n("div",{staticClass:"sdk-page__msg-card1"},[n("msg-card",{attrs:{"img-direction":"right",title:"系统级集成，让您的产品快速拥有互动营销活动能力",descs:["简单对接，无缝接入","完善产品矩阵，增强产品壁垒"],"button-color":"rgba(29, 180, 148, 1)","show-point":!1,"img-src":r(298)}})],1),e._v(" "),n("div",{staticClass:"sdk-page__banner"}),e._v(" "),n("div",{staticClass:"sdk-page__msg-card2"},[n("msg-card",{attrs:{"img-direction":"right",title:"模板化搭建  系统及嵌入",descs:["24好玩平台仅需上传素材配置奖品即可做出一款互动营销活动，系统级别的无缝嵌入让您的产品通过简单的对接也可以拥有这样的你能力"],"button-color":"rgba(103, 136, 255, 1)","show-point":!1,"img-src":r(299)}})],1),e._v(" "),n("div",{staticClass:"sdk-page__msg-card2"},[n("msg-card",{attrs:{"img-direction":"left",title:"对接会员数据 助力会员营销",descs:["可对接您的会员数据，作为您的会员系统中的会员运营/会员营销板块，每次营销活动都可提高注册率，将优惠券、奖品直接发放到账号下，提高转化率"],"button-color":"rgba(255, 167, 54, 1)","show-point":!1,"img-src":r(300)}})],1),e._v(" "),n("div",{staticClass:"sdk-page__msg-card3"},[n("msg-card",{attrs:{"img-direction":"right",title:"对接会员数据 助力会员营销",descs:["可对接您的会员数据，作为您的会员系统中的会员运营/会员营销板块，每次营销活动都可提高注册率，将优惠券、奖品直接发放到账号下，提高转化率"],"button-color":"rgba(29, 180, 148, 1)","show-point":!1,"img-src":r(301)}})],1),e._v(" "),n("SDKSwiper"),e._v(" "),n("div",{staticClass:"sdk-page__form"},[n("common-form")],1),e._v(" "),n("home-footer")],1)}),[],!1,null,null,null));t.default=_.exports}}]);