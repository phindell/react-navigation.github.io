/*! For license information please see 2636.54a8db65.js.LICENSE.txt */
(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2636],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),y=o,d=f["".concat(l,".").concat(y)]||f[y]||p[y]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44436:function(e,t,r){"use strict";r.d(t,{ft:function(){return n},cT:function(){return p}});r(67294);function n(e,t){var r,n;const a=t?o(t):{},i=null!=e.index?e.routes.slice(0,e.index+1):e.routes;if(0===i.length)return;if(!(1===i.length&&void 0===i[0].key||2===i.length&&void 0===i[0].key&&i[0].name===(null==a?void 0:a.initialRouteName)&&void 0===i[1].key))return{type:"RESET",payload:e};const s=e.routes[null!==(r=e.index)&&void 0!==r?r:e.routes.length-1];let l=null==s?void 0:s.state,c=null==a||null===(n=a.screens)||void 0===n?void 0:n[null==s?void 0:s.name],u={...s.params},p=s?{name:s.name,path:s.path,params:u}:void 0;for(;l;){var f,y,d;if(0===l.routes.length)return;const e=null!=l.index?l.routes.slice(0,l.index+1):l.routes,t=e[e.length-1];if(Object.assign(u,{initial:void 0,screen:void 0,params:void 0,state:void 0}),1===e.length&&void 0===e[0].key)u.initial=!0,u.screen=t.name;else{if(2!==e.length||void 0!==e[0].key||e[0].name!==(null===(f=c)||void 0===f?void 0:f.initialRouteName)||void 0!==e[1].key){u.state=l;break}u.initial=!1,u.screen=t.name}t.state?(u.params={...t.params},u=u.params):(u.path=t.path,u.params=t.params),l=t.state,c=null===(y=c)||void 0===y||null===(d=y.screens)||void 0===d?void 0:d[t.name]}return p?{type:"NAVIGATE",payload:p}:void 0}const o=e=>"object"==typeof e&&null!=e?{initialRouteName:e.initialRouteName,screens:null!=e.screens?a(e.screens):void 0}:{},a=e=>Object.entries(e).reduce(((e,[t,r])=>(e[t]=o(r),e)),{});Symbol("CHILD_STATE");var i=r(17563);var s=r(43287),l=r.n(s);const c=e=>e.map((e=>`- ${e}`)).join("\n");function u(e,t=!0){const r=["initialRouteName","screens"];t||r.push("path","exact","stringify","parse");const n=Object.keys(e).filter((e=>!r.includes(e)));if(n.length)throw new Error(`Found invalid properties in the configuration:\n${c(n)}\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n${c(r)}\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.`);e.screens&&Object.entries(e.screens).forEach((([e,t])=>{"string"!=typeof t&&u(t,!1)}))}function p(e,t){t&&u(t);let r=[];null!=t&&t.initialRouteName&&r.push({initialRouteName:t.initialRouteName,parentScreens:[]});const n=null==t?void 0:t.screens;let o=e.replace(/\/+/g,"/").replace(/^\//,"").replace(/\?.*$/,"");if(o=o.endsWith("/")?o:`${o}/`,void 0===n){const t=o.split("/").filter(Boolean).map((e=>({name:decodeURIComponent(e)})));return t.length?v(e,t,r):void 0}const a=[].concat(...Object.keys(n).map((e=>d(e,n,[],r,[])))).sort(((e,t)=>{if(e.pattern===t.pattern)return t.routeNames.join(">").localeCompare(e.routeNames.join(">"));if(e.pattern.startsWith(t.pattern))return-1;if(t.pattern.startsWith(e.pattern))return 1;const r=e.pattern.split("/"),n=t.pattern.split("/");for(let o=0;o<Math.max(r.length,n.length);o++){if(null==r[o])return 1;if(null==n[o])return-1;const e="*"===r[o]||r[o].startsWith(":"),t="*"===n[o]||n[o].startsWith(":");if(!e||!t){if(e)return 1;if(t)return-1}}return n.length-r.length}));if(a.reduce(((e,t)=>{if(e[t.pattern]){const r=e[t.pattern].routeNames,n=t.routeNames;if(!(r.length>n.length?n.every(((e,t)=>r[t]===e)):r.every(((e,t)=>n[t]===e))))throw new Error(`Found conflicting screens with the same pattern. The pattern '${t.pattern}' resolves to both '${r.join(" > ")}' and '${n.join(" > ")}'. Patterns must be unique and cannot resolve to more than one screen.`)}return Object.assign(e,{[t.pattern]:t})}),{}),"/"===o){const t=a.find((e=>""===e.path&&e.routeNames.every((e=>{var t;return!(null!==(t=a.find((t=>t.screen===e)))&&void 0!==t&&t.path)}))));return t?v(e,t.routeNames.map((e=>({name:e}))),r,a):void 0}let i,s;const{routes:l,remainingPath:c}=y(o,a.map((e=>({...e,regex:e.regex?new RegExp(e.regex.source+"$"):void 0}))));if(void 0!==l&&(s=v(e,l,r,a),o=c,i=s),null!=s&&null!=i)return i}const f=(...e)=>[].concat(...e.map((e=>e.split("/")))).filter(Boolean).join("/"),y=(e,t)=>{let r,n=e;for(const a of t){if(!a.regex)continue;const e=n.match(a.regex);if(e){var o;const i=null===(o=a.pattern)||void 0===o?void 0:o.split("/").filter((e=>e.startsWith(":"))).reduce(((t,r,n)=>Object.assign(t,{[r]:e[2*(n+1)].replace(/\//,"")})),{});r=a.routeNames.map((e=>{var r;const n=t.find((t=>t.screen===e)),o=null==n||null===(r=n.path)||void 0===r?void 0:r.split("/").filter((e=>e.startsWith(":"))).reduce(((e,t)=>{const r=i[t];if(r){var o;const a=t.replace(/^:/,"").replace(/\?$/,"");e[a]=null!==(o=n.parse)&&void 0!==o&&o[a]?n.parse[a](r):r}return e}),{});return o&&Object.keys(o).length?{name:e,params:o}:{name:e}})),n=n.replace(e[1],"");break}}return{routes:r,remainingPath:n}},d=(e,t,r=[],n,o,a)=>{const i=[];r.push(e),o.push(e);const s=t[e];if("string"==typeof s){const t=a?f(a,s):s;i.push(h(e,r,t,s))}else if("object"==typeof s){let t;if("string"==typeof s.path){if(s.exact&&void 0===s.path)throw new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");t=!0!==s.exact?f(a||"",s.path||""):s.path||"",i.push(h(e,r,t,s.path,s.parse))}s.screens&&(s.initialRouteName&&n.push({initialRouteName:s.initialRouteName,parentScreens:o}),Object.keys(s.screens).forEach((e=>{var l;const c=d(e,s.screens,r,n,[...o],null!==(l=t)&&void 0!==l?l:a);i.push(...c)})))}return r.pop(),i},h=(e,t,r,n,o)=>({screen:e,regex:(r=r.split("/").filter(Boolean).join("/"))?new RegExp(`^(${r.split("/").map((e=>e.startsWith(":")?`(([^/]+\\/)${e.endsWith("?")?"?":""})`:`${"*"===e?".*":l()(e)}\\/`)).join("")})`):void 0,pattern:r,path:n,routeNames:[...t],parse:o}),g=(e,t,r)=>{for(const n of r)if(t.length===n.parentScreens.length){let r=!0;for(let e=0;e<t.length;e++)if(0!==t[e].localeCompare(n.parentScreens[e])){r=!1;break}if(r)return e!==n.initialRouteName?n.initialRouteName:void 0}},m=(e,t,r)=>r?e?{index:1,routes:[{name:e},t]}:{routes:[t]}:e?{index:1,routes:[{name:e},{...t,state:{routes:[]}}]}:{routes:[{...t,state:{routes:[]}}]},v=(e,t,r,n)=>{let o,a=t.shift();const i=[];let s=g(a.name,i,r);if(i.push(a.name),o=m(s,a,0===t.length),t.length>0){let e=o;for(;a=t.shift();){s=g(a.name,i,r);const n=e.index||e.routes.length-1;e.routes[n].state=m(s,a,0===t.length),t.length>0&&(e=e.routes[n].state),i.push(a.name)}}a=function(e){var t,r,n;let o=e;for(;null!=(null===(a=o)||void 0===a?void 0:a.routes[null!==(i=o.index)&&void 0!==i?i:0].state);){var a,i,s;o=o.routes[null!==(s=o.index)&&void 0!==s?s:0].state}return null===(t=o)||void 0===t?void 0:t.routes[null!==(r=null===(n=o)||void 0===n?void 0:n.index)&&void 0!==r?r:0]}(o),a.path=e;const l=b(e,n?((e,t)=>{for(const r of t)if(e===r.routeNames[r.routeNames.length-1])return r.parse})(a.name,n):void 0);return l&&(a.params={...a.params,...l}),o},b=(e,t)=>{const r=e.split("?")[1],n=i.parse(r);return t&&Object.keys(n).forEach((e=>{t[e]&&"string"==typeof n[e]&&(n[e]=t[e](n[e]))})),Object.keys(n).length?n:void 0};r(35856);Symbol("VISITED_ROUTE_KEYS")},43287:function(e){"use strict";e.exports=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}},73017:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,k=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case p:case a:case s:case i:case y:return e;default:switch(e=e&&e.$$typeof){case c:case f:case g:case h:case l:return e;default:return t}}case o:return t}}}function x(e){return _(e)===p}},35856:function(e,t,r){"use strict";r(73017)},82924:function(e,t,r){"use strict";var n=r(67294).createContext(void 0);t.Z=n},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="\ufffd";for(var s=Object.keys(r),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},95573:function(e){"use strict";var t=/["'&<>]/;e.exports=function(e){var r,n=""+e,o=t.exec(n);if(!o)return n;var a="",i=0,s=0;for(i=o.index;i<n.length;i++){switch(n.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}s!==i&&(a+=n.substring(s,i)),s=i+1,a+=r}return s!==i?a+n.substring(s,i):a}},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],s=e[i];(o?-1!==t.indexOf(i):t(i,s,e))&&(r[i]=s)}return r}},24544:function(e,t,r){"use strict";r.d(t,{ZP:function(){return d},lG:function(){return i}});var n=r(87410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=r(67294),i={Prism:n.Z,theme:o};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},f=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=l({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=l({},r,{backgroundColor:null}),o};function y(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var d=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?f(e.theme,e.language):void 0;return t.themeDict=r})),s(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=l({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),s(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var i=n?{display:"inline-block"}:{},s=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,i=l({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,i=0,s=[],l=[s];i>-1;){for(;(a=n[i]++)<o[i];){var f=void 0,y=t[i],d=r[i][a];if("string"==typeof d?(y=i>0?y:["plain"],f=d):(y=p(y,d.type),d.alias&&(y=p(y,d.alias)),f=d.content),"string"==typeof f){var h=f.split(c),g=h.length;s.push({types:y,content:h[0]});for(var m=1;m<g;m++)u(s),l.push(s=[]),s.push({types:y,content:h[m]})}else i++,t.push(y),r.push(f),n.push(0),o.push(f.length)}i--,t.pop(),r.pop(),n.pop(),o.pop()}return u(s),l}(void 0!==i?t.tokenize(n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:function(e,t){"use strict";t.Z={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:function(e,t){"use strict";t.Z={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}},17563:function(e,t,r){"use strict";const n=r(70610),o=r(44020),a=r(80500),i=r(92806),s=Symbol("encodeFragmentIdentifier");function l(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function f(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function y(e){const t=(e=f(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){l((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:u(i,t),r(u(e,t),i,n)}for(const o of Object.keys(n)){const e=n[o];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=d(e[r],t);else n[o]=d(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=y,t.parse=h,t.stringify=(e,t)=>{if(!e)return"";l((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[c(r,e),t,c(o,e)].join("")]:[[n,c(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),o={};for(const i of Object.keys(e))r(i)||(o[i]=e[i]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?c(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?c(r,t)+"[]":o.reduce(n(r),[]).join("&"):c(r,t)+"="+c(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:h(y(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const n=f(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query);let l=t.stringify(i,r);l&&(l=`?${l}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[s]?c(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${l}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[s]:!1},n);const{url:o,query:a,fragmentIdentifier:l}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:i(a,r),fragmentIdentifier:l},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},40460:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(67294));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=90,c=219,u=222,p=192,f=100,y=3e3,d="navigator"in r.g&&/Win/i.test(navigator.platform),h="navigator"in r.g&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),g="npm__react-simple-code-editor__textarea",m=function(e){function t(){var e,r,o;i(this,t);for(var a=arguments.length,g=Array(a),m=0;m<a;m++)g[m]=arguments[m];return r=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(g))),o.state={capture:!0},o._recordCurrentState=function(){var e=o._input;if(e){var t=e.value,r=e.selectionStart,n=e.selectionEnd;o._recordChange({value:t,selectionStart:r,selectionEnd:n})}},o._getLines=function(e,t){return e.substring(0,t).split("\n")},o._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o._history,a=r.stack,i=r.offset;if(a.length&&i>-1){o._history.stack=a.slice(0,i+1);var s=o._history.stack.length;if(s>f){var l=s-f;o._history.stack=a.slice(l,s),o._history.offset=Math.max(o._history.offset-l,0)}}var c=Date.now();if(t){var u=o._history.stack[o._history.offset];if(u&&c-u.timestamp<y){var p=/[^a-z0-9]([a-z0-9]+)$/i,d=o._getLines(u.value,u.selectionStart).pop().match(p),h=o._getLines(e.value,e.selectionStart).pop().match(p);if(d&&h&&h[1].startsWith(d[1]))return void(o._history.stack[o._history.offset]=n({},e,{timestamp:c}))}}o._history.stack.push(n({},e,{timestamp:c})),o._history.offset++},o._updateInput=function(e){var t=o._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,o.props.onValueChange(e.value))},o._applyEdits=function(e){var t=o._input,r=o._history.stack[o._history.offset];r&&t&&(o._history.stack[o._history.offset]=n({},r,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),o._recordChange(e),o._updateInput(e)},o._undoEdit=function(){var e=o._history,t=e.stack,r=e.offset,n=t[r-1];n&&(o._updateInput(n),o._history.offset=Math.max(r-1,0))},o._redoEdit=function(){var e=o._history,t=e.stack,r=e.offset,n=t[r+1];n&&(o._updateInput(n),o._history.offset=Math.min(r+1,t.length-1))},o._handleKeyDown=function(e){var t=o.props,r=t.tabSize,n=t.insertSpaces,a=t.ignoreTabKey,i=t.onKeyDown;if(!i||(i(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var s=e.target,f=s.value,y=s.selectionStart,g=s.selectionEnd,m=(n?" ":"\t").repeat(r);if(9===e.keyCode&&!a&&o.state.capture)if(e.preventDefault(),e.shiftKey){var v=o._getLines(f,y),b=v.length-1,k=o._getLines(f,g).length-1,_=f.split("\n").map((function(e,t){return t>=b&&t<=k&&e.startsWith(m)?e.substring(m.length):e})).join("\n");if(f!==_){var x=v[b];o._applyEdits({value:_,selectionStart:x.startsWith(m)?y-m.length:y,selectionEnd:g-(f.length-_.length)})}}else if(y!==g){var S=o._getLines(f,y),O=S.length-1,j=o._getLines(f,g).length-1,w=S[O];o._applyEdits({value:f.split("\n").map((function(e,t){return t>=O&&t<=j?m+e:e})).join("\n"),selectionStart:/\S/.test(w)?y+m.length:y,selectionEnd:g+m.length*(j-O+1)})}else{var E=y+m.length;o._applyEdits({value:f.substring(0,y)+m+f.substring(g),selectionStart:E,selectionEnd:E})}else if(8===e.keyCode){var C=y!==g;if(f.substring(0,y).endsWith(m)&&!C){e.preventDefault();var N=y-m.length;o._applyEdits({value:f.substring(0,y-m.length)+f.substring(g),selectionStart:N,selectionEnd:N})}}else if(13===e.keyCode){if(y===g){var F=o._getLines(f,y).pop().match(/^\s+/);if(F&&F[0]){e.preventDefault();var T="\n"+F[0],P=y+T.length;o._applyEdits({value:f.substring(0,y)+T+f.substring(g),selectionStart:P,selectionEnd:P})}}}else if(57===e.keyCode||e.keyCode===c||e.keyCode===u||e.keyCode===p){var I=void 0;57===e.keyCode&&e.shiftKey?I=["(",")"]:e.keyCode===c?I=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===u?I=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==p||e.shiftKey||(I=["`","`"]),y!==g&&I&&(e.preventDefault(),o._applyEdits({value:f.substring(0,y)+I[0]+f.substring(y,g)+I[1]+f.substring(g),selectionStart:y,selectionEnd:g+2}))}else!(h?e.metaKey&&e.keyCode===l:e.ctrlKey&&e.keyCode===l)||e.shiftKey||e.altKey?(h?e.metaKey&&e.keyCode===l&&e.shiftKey:d?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===l&&e.shiftKey)&&!e.altKey?(e.preventDefault(),o._redoEdit()):77!==e.keyCode||!e.ctrlKey||h&&!e.shiftKey||(e.preventDefault(),o.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),o._undoEdit())}},o._handleChange=function(e){var t=e.target,r=t.value,n=t.selectionStart,a=t.selectionEnd;o._recordChange({value:r,selectionStart:n,selectionEnd:a},!0),o.props.onValueChange(r)},o._history={stack:[],offset:-1},s(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,r=t.value,o=t.style,i=t.padding,s=t.highlight,l=t.textareaId,c=t.textareaClassName,u=t.autoFocus,p=t.disabled,f=t.form,y=t.maxLength,d=t.minLength,h=t.name,m=t.placeholder,b=t.readOnly,k=t.required,_=t.onClick,x=t.onFocus,S=t.onBlur,O=t.onKeyUp,j=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),w=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),E={paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i},C=s(r);return a.createElement("div",n({},w,{style:n({},v.container,o)}),a.createElement("textarea",{ref:function(t){return e._input=t},style:n({},v.editor,v.textarea,E),className:g+(c?" "+c:""),id:l,value:r,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:_,onKeyUp:O,onFocus:x,onBlur:S,disabled:p,form:f,maxLength:y,minLength:d,name:h,placeholder:m,readOnly:b,required:k,autoFocus:u,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),a.createElement("pre",n({className:j,"aria-hidden":"true",style:n({},v.editor,v.highlight,E)},"string"==typeof C?{dangerouslySetInnerHTML:{__html:C+"<br />"}}:{children:C})),a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(a.Component);m.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.Z=m;var v={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}},80500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);