/*! For license information please see 61e1236a106a38dc82a7eb1f58acdecc58f037a4-56f0ba74762a364ad336.js.LICENSE.txt */
(self.webpackChunkcatatan_bayu=self.webpackChunkcatatan_bayu||[]).push([[886],{2993:function(d){var u="undefined"!=typeof Element,e="function"==typeof Map,f="function"==typeof Set,t="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function c(d,n){if(d===n)return!0;if(d&&n&&"object"==typeof d&&"object"==typeof n){if(d.constructor!==n.constructor)return!1;var r,a,o,i;if(Array.isArray(d)){if((r=d.length)!=n.length)return!1;for(a=r;0!=a--;)if(!c(d[a],n[a]))return!1;return!0}if(e&&d instanceof Map&&n instanceof Map){if(d.size!==n.size)return!1;for(i=d.entries();!(a=i.next()).done;)if(!n.has(a.value[0]))return!1;for(i=d.entries();!(a=i.next()).done;)if(!c(a.value[1],n.get(a.value[0])))return!1;return!0}if(f&&d instanceof Set&&n instanceof Set){if(d.size!==n.size)return!1;for(i=d.entries();!(a=i.next()).done;)if(!n.has(a.value[0]))return!1;return!0}if(t&&ArrayBuffer.isView(d)&&ArrayBuffer.isView(n)){if((r=d.length)!=n.length)return!1;for(a=r;0!=a--;)if(d[a]!==n[a])return!1;return!0}if(d.constructor===RegExp)return d.source===n.source&&d.flags===n.flags;if(d.valueOf!==Object.prototype.valueOf)return d.valueOf()===n.valueOf();if(d.toString!==Object.prototype.toString)return d.toString()===n.toString();if((r=(o=Object.keys(d)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;if(u&&d instanceof Element)return!1;for(a=r;0!=a--;)if(("_owner"!==o[a]&&"__v"!==o[a]&&"__o"!==o[a]||!d.$$typeof)&&!c(d[o[a]],n[o[a]]))return!1;return!0}return d!=d&&n!=n}d.exports=function(d,u){try{return c(d,u)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1046:function(d,u,e){"use strict";e.d(u,{w_:function(){return o}});var f=e(7294),t={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=f.createContext&&f.createContext(t),n=function(){return n=Object.assign||function(d){for(var u,e=1,f=arguments.length;e<f;e++)for(var t in u=arguments[e])Object.prototype.hasOwnProperty.call(u,t)&&(d[t]=u[t]);return d},n.apply(this,arguments)},r=function(d,u){var e={};for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&u.indexOf(f)<0&&(e[f]=d[f]);if(null!=d&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(f=Object.getOwnPropertySymbols(d);t<f.length;t++)u.indexOf(f[t])<0&&Object.prototype.propertyIsEnumerable.call(d,f[t])&&(e[f[t]]=d[f[t]])}return e};function a(d){return d&&d.map((function(d,u){return f.createElement(d.tag,n({key:u},d.attr),a(d.child))}))}function o(d){return function(u){return f.createElement(i,n({attr:n({},d.attr)},u),a(d.child))}}function i(d){var u=function(u){var e,t=d.attr,c=d.size,a=d.title,o=r(d,["attr","size","title"]),i=c||u.size||"1em";return u.className&&(e=u.className),d.className&&(e=(e?e+" ":"")+d.className),f.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,t,o,{className:e,style:n(n({color:d.color||u.color},u.style),d.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),a&&f.createElement("title",null,a),d.children)};return void 0!==c?f.createElement(c.Consumer,null,(function(d){return u(d)})):u(t)}},4839:function(d,u,e){"use strict";var f,t=e(7294),c=(f=t)&&"object"==typeof f&&"default"in f?f.default:f;function n(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}var r=!("undefined"==typeof window||!window.document||!window.document.createElement);d.exports=function(d,u,e){if("function"!=typeof d)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof u)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==e&&"function"!=typeof e)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(f){if("function"!=typeof f)throw new Error("Expected WrappedComponent to be a React component.");var a,o=[];function i(){a=d(o.map((function(d){return d.props}))),s.canUseDOM?u(a):e&&(a=e(a))}var s=function(d){var u,e;function t(){return d.apply(this,arguments)||this}e=d,(u=t).prototype=Object.create(e.prototype),u.prototype.constructor=u,u.__proto__=e,t.peek=function(){return a},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var d=a;return a=void 0,o=[],d};var n=t.prototype;return n.UNSAFE_componentWillMount=function(){o.push(this),i()},n.componentDidUpdate=function(){i()},n.componentWillUnmount=function(){var d=o.indexOf(this);o.splice(d,1),i()},n.render=function(){return c.createElement(f,this.props)},t}(t.PureComponent);return n(s,"displayName","SideEffect("+function(d){return d.displayName||d.name||"Component"}(f)+")"),n(s,"canUseDOM",r),s}}},8632:function(d,u,e){"use strict";e.d(u,{Z:function(){return o}});var f=e(6125),t=e(7294),c=e(5444),n=e(3201);function r(){return t.createElement("div",null,t.createElement("header",{className:"global-header"},t.createElement(c.Link,{to:"/"},t.createElement(f.S,{src:"../images/favicon.png",alt:"logo",className:"logo",__imageData:e(1026)}),"Catatan Bayu"),t.createElement("div",{className:"sidebar"},t.createElement("ul",null,t.createElement("li",{className:"search"},t.createElement(c.Link,{to:"/search"},t.createElement(n.U41,null)))))))}var a=function(){var d={base:"https://twemoji.maxcdn.com/v/13.1.0/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;if(u<65536)return r(u);return r(55296+((u-=65536)>>10),56320+(1023&u))},toCodePoint:y},onerror:function(){this.parentNode&&this.parentNode.replaceChild(a(this.alt,!1),this)},parse:function(u,e){e&&"function"!=typeof e||(e={callback:e});return("string"==typeof u?b:l)(u,{callback:e.callback||o,attributes:"function"==typeof e.attributes?e.attributes:m,base:"string"==typeof e.base?e.base:d.base,ext:e.ext||d.ext,size:e.folder||(f=e.size||d.size,"number"==typeof f?f+"x"+f:f),className:e.className||d.className,onerror:e.onerror||d.onerror});var f},replace:h,test:function(d){e.lastIndex=0;var u=e.test(d);return e.lastIndex=0,u}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},e=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,f=/\uFE0F/g,t=String.fromCharCode(8205),c=/[&<>'"]/g,n=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,r=String.fromCharCode;return d;function a(d,u){return document.createTextNode(u?d.replace(f,""):d)}function o(d,u){return"".concat(u.base,u.size,"/",d,u.ext)}function i(d,u){for(var e,f,t=d.childNodes,c=t.length;c--;)3===(f=(e=t[c]).nodeType)?u.push(e):1!==f||"ownerSVGElement"in e||n.test(e.nodeName.toLowerCase())||i(e,u);return u}function s(d){return y(d.indexOf(t)<0?d.replace(f,""):d)}function l(d,u){for(var f,t,c,n,r,o,l,b,p,m,h,y,g,v=i(d,[]),w=v.length;w--;){for(c=!1,n=document.createDocumentFragment(),o=(r=v[w]).nodeValue,b=0;l=e.exec(o);){if((p=l.index)!==b&&n.appendChild(a(o.slice(b,p),!0)),y=s(h=l[0]),b=p+h.length,g=u.callback(y,u),y&&g){for(t in(m=new Image).onerror=u.onerror,m.setAttribute("draggable","false"),f=u.attributes(h,y))f.hasOwnProperty(t)&&0!==t.indexOf("on")&&!m.hasAttribute(t)&&m.setAttribute(t,f[t]);m.className=u.className,m.alt=h,m.src=g,c=!0,n.appendChild(m)}m||n.appendChild(a(h,!1)),m=null}c&&(b<o.length&&n.appendChild(a(o.slice(b),!0)),r.parentNode.replaceChild(n,r))}return d}function b(d,u){return h(d,(function(d){var e,f,t=d,n=s(d),r=u.callback(n,u);if(n&&r){for(f in t="<img ".concat('class="',u.className,'" ','draggable="false" ','alt="',d,'"',' src="',r,'"'),e=u.attributes(d,n))e.hasOwnProperty(f)&&0!==f.indexOf("on")&&-1===t.indexOf(" "+f+"=")&&(t=t.concat(" ",f,'="',e[f].replace(c,p),'"'));t=t.concat("/>")}return t}))}function p(d){return u[d]}function m(){return null}function h(d,u){return String(d).replace(e,u)}function y(d,u){for(var e=[],f=0,t=0,c=0;c<d.length;)f=d.charCodeAt(c++),t?(e.push((65536+(t-55296<<10)+(f-56320)).toString(16)),t=0):55296<=f&&f<=56319?t=f:e.push(f.toString(16));return e.join(u||"-")}}(),o=function(d){var u=d.children,e=d.img,c=t.useRef(),n=!!e&&(0,f.d)(e);return t.useEffect((function(){c.current&&a.parse(c.current)}),[c]),t.createElement("div",{ref:c},t.createElement("div",{className:"global-wrapper"},t.createElement(r,null)),!!n&&t.createElement("div",{className:"picture"},t.createElement(f.G,{image:n,alt:"Banner Picture"})),t.createElement("div",{className:"article"},t.createElement("main",null,u),t.createElement("footer",null,"Dibuat dengan ",t.createElement("span",{style:{margin:"3px"}},"❤️")," oleh Bayu Samudra, ",(new Date).getFullYear())))}},3751:function(d,u,e){"use strict";e.d(u,{Z:function(){return gd}});var f,t,c,n,r=e(7294),a=e(5697),o=e.n(a),i=e(4839),s=e.n(i),l=e(2993),b=e.n(l),p=e(6494),m=e.n(p),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(d){return v[d]})),"charset"),T="cssText",C="href",O="http-equiv",E="innerHTML",A="itemprop",S="name",x="property",j="rel",k="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",M="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",z=Object.keys(N).reduce((function(d,u){return d[N[u]]=u,d}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(d){return typeof d}:function(d){return d&&"function"==typeof Symbol&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},q=function(d,u){if(!(d instanceof u))throw new TypeError("Cannot call a class as a function")},H=function(){function d(d,u){for(var e=0;e<u.length;e++){var f=u[e];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(d,f.key,f)}}return function(u,e,f){return e&&d(u.prototype,e),f&&d(u,f),u}}(),Y=Object.assign||function(d){for(var u=1;u<arguments.length;u++){var e=arguments[u];for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(d[f]=e[f])}return d},U=function(d,u){var e={};for(var f in d)u.indexOf(f)>=0||Object.prototype.hasOwnProperty.call(d,f)&&(e[f]=d[f]);return e},K=function(d,u){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||"object"!=typeof u&&"function"!=typeof u?d:u},V=function(d){var u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===u?String(d):String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(d){var u=Q(d,v.TITLE),e=Q(d,_);if(e&&u)return e.replace(/%s/g,(function(){return Array.isArray(u)?u.join(""):u}));var f=Q(d,I);return u||f||void 0},$=function(d){return Q(d,R)||function(){}},G=function(d,u){return u.filter((function(u){return void 0!==u[d]})).map((function(u){return u[d]})).reduce((function(d,u){return Y({},d,u)}),{})},Z=function(d,u){return u.filter((function(d){return void 0!==d[v.BASE]})).map((function(d){return d[v.BASE]})).reverse().reduce((function(u,e){if(!u.length)for(var f=Object.keys(e),t=0;t<f.length;t++){var c=f[t].toLowerCase();if(-1!==d.indexOf(c)&&e[c])return u.concat(e)}return u}),[])},J=function(d,u,e){var f={};return e.filter((function(u){return!!Array.isArray(u[d])||(void 0!==u[d]&&fd("Helmet: "+d+' should be of type "Array". Instead found type "'+F(u[d])+'"'),!1)})).map((function(u){return u[d]})).reverse().reduce((function(d,e){var t={};e.filter((function(d){for(var e=void 0,c=Object.keys(d),n=0;n<c.length;n++){var r=c[n],a=r.toLowerCase();-1===u.indexOf(a)||e===j&&"canonical"===d[e].toLowerCase()||a===j&&"stylesheet"===d[a].toLowerCase()||(e=a),-1===u.indexOf(r)||r!==E&&r!==T&&r!==A||(e=r)}if(!e||!d[e])return!1;var o=d[e].toLowerCase();return f[e]||(f[e]={}),t[e]||(t[e]={}),!f[e][o]&&(t[e][o]=!0,!0)})).reverse().forEach((function(u){return d.push(u)}));for(var c=Object.keys(t),n=0;n<c.length;n++){var r=c[n],a=m()({},f[r],t[r]);f[r]=a}return d}),[]).reverse()},Q=function(d,u){for(var e=d.length-1;e>=0;e--){var f=d[e];if(f.hasOwnProperty(u))return f[u]}return null},X=(f=Date.now(),function(d){var u=Date.now();u-f>16?(f=u,d(u)):setTimeout((function(){X(d)}),0)}),dd=function(d){return clearTimeout(d)},ud="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.g.requestAnimationFrame||X,ed="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||dd:e.g.cancelAnimationFrame||dd,fd=function(d){return console&&"function"==typeof console.warn&&console.warn(d)},td=null,cd=function(d,u){var e=d.baseTag,f=d.bodyAttributes,t=d.htmlAttributes,c=d.linkTags,n=d.metaTags,r=d.noscriptTags,a=d.onChangeClientState,o=d.scriptTags,i=d.styleTags,s=d.title,l=d.titleAttributes;ad(v.BODY,f),ad(v.HTML,t),rd(s,l);var b={baseTag:od(v.BASE,e),linkTags:od(v.LINK,c),metaTags:od(v.META,n),noscriptTags:od(v.NOSCRIPT,r),scriptTags:od(v.SCRIPT,o),styleTags:od(v.STYLE,i)},p={},m={};Object.keys(b).forEach((function(d){var u=b[d],e=u.newTags,f=u.oldTags;e.length&&(p[d]=e),f.length&&(m[d]=b[d].oldTags)})),u&&u(),a(d,p,m)},nd=function(d){return Array.isArray(d)?d.join(""):d},rd=function(d,u){void 0!==d&&document.title!==d&&(document.title=nd(d)),ad(v.TITLE,u)},ad=function(d,u){var e=document.getElementsByTagName(d)[0];if(e){for(var f=e.getAttribute(B),t=f?f.split(","):[],c=[].concat(t),n=Object.keys(u),r=0;r<n.length;r++){var a=n[r],o=u[a]||"";e.getAttribute(a)!==o&&e.setAttribute(a,o),-1===t.indexOf(a)&&t.push(a);var i=c.indexOf(a);-1!==i&&c.splice(i,1)}for(var s=c.length-1;s>=0;s--)e.removeAttribute(c[s]);t.length===c.length?e.removeAttribute(B):e.getAttribute(B)!==n.join(",")&&e.setAttribute(B,n.join(","))}},od=function(d,u){var e=document.head||document.querySelector(v.HEAD),f=e.querySelectorAll(d+"["+"data-react-helmet]"),t=Array.prototype.slice.call(f),c=[],n=void 0;return u&&u.length&&u.forEach((function(u){var e=document.createElement(d);for(var f in u)if(u.hasOwnProperty(f))if(f===E)e.innerHTML=u.innerHTML;else if(f===T)e.styleSheet?e.styleSheet.cssText=u.cssText:e.appendChild(document.createTextNode(u.cssText));else{var r=void 0===u[f]?"":u[f];e.setAttribute(f,r)}e.setAttribute(B,"true"),t.some((function(d,u){return n=u,e.isEqualNode(d)}))?t.splice(n,1):c.push(e)})),t.forEach((function(d){return d.parentNode.removeChild(d)})),c.forEach((function(d){return e.appendChild(d)})),{oldTags:t,newTags:c}},id=function(d){return Object.keys(d).reduce((function(u,e){var f=void 0!==d[e]?e+'="'+d[e]+'"':""+e;return u?u+" "+f:f}),"")},sd=function(d){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(d).reduce((function(u,e){return u[N[e]||e]=d[e],u}),u)},ld=function(d,u,e){switch(d){case v.TITLE:return{toComponent:function(){return d=u.title,e=u.titleAttributes,(f={key:d})[B]=!0,t=sd(e,f),[r.createElement(v.TITLE,t,d)];var d,e,f,t},toString:function(){return function(d,u,e,f){var t=id(e),c=nd(u);return t?"<"+d+' data-react-helmet="true" '+t+">"+V(c,f)+"</"+d+">":"<"+d+' data-react-helmet="true">'+V(c,f)+"</"+d+">"}(d,u.title,u.titleAttributes,e)}};case h:case y:return{toComponent:function(){return sd(u)},toString:function(){return id(u)}};default:return{toComponent:function(){return function(d,u){return u.map((function(u,e){var f,t=((f={key:e})[B]=!0,f);return Object.keys(u).forEach((function(d){var e=N[d]||d;if(e===E||e===T){var f=u.innerHTML||u.cssText;t.dangerouslySetInnerHTML={__html:f}}else t[e]=u[d]})),r.createElement(d,t)}))}(d,u)},toString:function(){return function(d,u,e){return u.reduce((function(u,f){var t=Object.keys(f).filter((function(d){return!(d===E||d===T)})).reduce((function(d,u){var t=void 0===f[u]?u:u+'="'+V(f[u],e)+'"';return d?d+" "+t:t}),""),c=f.innerHTML||f.cssText||"",n=-1===D.indexOf(d);return u+"<"+d+' data-react-helmet="true" '+t+(n?"/>":">"+c+"</"+d+">")}),"")}(d,u,e)}}}},bd=function(d){var u=d.baseTag,e=d.bodyAttributes,f=d.encode,t=d.htmlAttributes,c=d.linkTags,n=d.metaTags,r=d.noscriptTags,a=d.scriptTags,o=d.styleTags,i=d.title,s=void 0===i?"":i,l=d.titleAttributes;return{base:ld(v.BASE,u,f),bodyAttributes:ld(h,e,f),htmlAttributes:ld(y,t,f),link:ld(v.LINK,c,f),meta:ld(v.META,n,f),noscript:ld(v.NOSCRIPT,r,f),script:ld(v.SCRIPT,a,f),style:ld(v.STYLE,o,f),title:ld(v.TITLE,{title:s,titleAttributes:l},f)}},pd=s()((function(d){return{baseTag:Z([C,P],d),bodyAttributes:G(h,d),defer:Q(d,L),encode:Q(d,M),htmlAttributes:G(y,d),linkTags:J(v.LINK,[j,C],d),metaTags:J(v.META,[S,w,O,x,A],d),noscriptTags:J(v.NOSCRIPT,[E],d),onChangeClientState:$(d),scriptTags:J(v.SCRIPT,[k,E],d),styleTags:J(v.STYLE,[T],d),title:W(d),titleAttributes:G(g,d)}}),(function(d){td&&ed(td),d.defer?td=ud((function(){cd(d,(function(){td=null}))})):(cd(d),td=null)}),bd)((function(){return null})),md=(t=pd,n=c=function(d){function u(){return q(this,u),K(this,d.apply(this,arguments))}return function(d,u){if("function"!=typeof u&&null!==u)throw new TypeError("Super expression must either be null or a function, not "+typeof u);d.prototype=Object.create(u&&u.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(d,u):d.__proto__=u)}(u,d),u.prototype.shouldComponentUpdate=function(d){return!b()(this.props,d)},u.prototype.mapNestedChildrenToProps=function(d,u){if(!u)return null;switch(d.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:u};case v.STYLE:return{cssText:u}}throw new Error("<"+d.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},u.prototype.flattenArrayTypeChildren=function(d){var u,e=d.child,f=d.arrayTypeChildren,t=d.newChildProps,c=d.nestedChildren;return Y({},f,((u={})[e.type]=[].concat(f[e.type]||[],[Y({},t,this.mapNestedChildrenToProps(e,c))]),u))},u.prototype.mapObjectTypeChildren=function(d){var u,e,f=d.child,t=d.newProps,c=d.newChildProps,n=d.nestedChildren;switch(f.type){case v.TITLE:return Y({},t,((u={})[f.type]=n,u.titleAttributes=Y({},c),u));case v.BODY:return Y({},t,{bodyAttributes:Y({},c)});case v.HTML:return Y({},t,{htmlAttributes:Y({},c)})}return Y({},t,((e={})[f.type]=Y({},c),e))},u.prototype.mapArrayTypeChildrenToProps=function(d,u){var e=Y({},u);return Object.keys(d).forEach((function(u){var f;e=Y({},e,((f={})[u]=d[u],f))})),e},u.prototype.warnOnInvalidChildren=function(d,u){return!0},u.prototype.mapChildrenToProps=function(d,u){var e=this,f={};return r.Children.forEach(d,(function(d){if(d&&d.props){var t=d.props,c=t.children,n=function(d){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(d).reduce((function(u,e){return u[z[e]||e]=d[e],u}),u)}(U(t,["children"]));switch(e.warnOnInvalidChildren(d,c),d.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:f=e.flattenArrayTypeChildren({child:d,arrayTypeChildren:f,newChildProps:n,nestedChildren:c});break;default:u=e.mapObjectTypeChildren({child:d,newProps:u,newChildProps:n,nestedChildren:c})}}})),u=this.mapArrayTypeChildrenToProps(f,u)},u.prototype.render=function(){var d=this.props,u=d.children,e=U(d,["children"]),f=Y({},e);return u&&(f=this.mapChildrenToProps(u,f)),r.createElement(t,f)},H(u,null,[{key:"canUseDOM",set:function(d){t.canUseDOM=d}}]),u}(r.Component),c.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=t.peek,c.rewind=function(){var d=t.rewind();return d||(d=bd({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),d},n);md.renderStatic=md.rewind;var hd=e(5444),yd=function(d){var u,e,f,t=d.description,c=d.lang,n=d.meta,a=d.title,o=(0,hd.useStaticQuery)("2841359383").site,i=t||o.siteMetadata.description,s=null===(u=o.siteMetadata)||void 0===u?void 0:u.title;return r.createElement(md,{htmlAttributes:{lang:c},title:a,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:i},{property:"og:title",content:a},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(e=o.siteMetadata)||void 0===e||null===(f=e.social)||void 0===f?void 0:f.twitter)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:i}].concat(n)})};yd.defaultProps={lang:"id",meta:[],description:""};var gd=yd},1026:function(d){"use strict";d.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#087878","images":{"fallback":{"src":"/static/ad9d88d21dcab799231fcaf33846b2ff/57241/favicon.png","srcSet":"/static/ad9d88d21dcab799231fcaf33846b2ff/b8352/favicon.png 112w,\\n/static/ad9d88d21dcab799231fcaf33846b2ff/d8461/favicon.png 225w,\\n/static/ad9d88d21dcab799231fcaf33846b2ff/57241/favicon.png 449w","sizes":"(min-width: 449px) 449px, 100vw"},"sources":[{"srcSet":"/static/ad9d88d21dcab799231fcaf33846b2ff/65bf6/favicon.webp 112w,\\n/static/ad9d88d21dcab799231fcaf33846b2ff/252a0/favicon.webp 225w,\\n/static/ad9d88d21dcab799231fcaf33846b2ff/0c914/favicon.webp 449w","type":"image/webp","sizes":"(min-width: 449px) 449px, 100vw"}]},"width":449,"height":449}')}}]);
//# sourceMappingURL=61e1236a106a38dc82a7eb1f58acdecc58f037a4-56f0ba74762a364ad336.js.map