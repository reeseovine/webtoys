(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9203],{488:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generators/uuid",function(){return n(1413)}])},1413:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return $}});var e=n(5893),a=n(7294),o=n(2688),u=n(1132),i=n(9216),c=n(4361),s=n(5317),l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=function(t){return"string"===typeof t&&l.test(t)},v=[],d=0;d<256;++d)v.push((d+256).toString(16).substr(1));var p=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(v[t[r+0]]+v[t[r+1]]+v[t[r+2]]+v[t[r+3]]+"-"+v[t[r+4]]+v[t[r+5]]+"-"+v[t[r+6]]+v[t[r+7]]+"-"+v[t[r+8]]+v[t[r+9]]+"-"+v[t[r+10]]+v[t[r+11]]+v[t[r+12]]+v[t[r+13]]+v[t[r+14]]+v[t[r+15]]).toLowerCase();if(!f(n))throw TypeError("Stringified UUID is invalid");return n};var y=function(t){if(!f(t))throw TypeError("Invalid UUID");var r,n=new Uint8Array(16);return n[0]=(r=parseInt(t.slice(0,8),16))>>>24,n[1]=r>>>16&255,n[2]=r>>>8&255,n[3]=255&r,n[4]=(r=parseInt(t.slice(9,13),16))>>>8,n[5]=255&r,n[6]=(r=parseInt(t.slice(14,18),16))>>>8,n[7]=255&r,n[8]=(r=parseInt(t.slice(19,23),16))>>>8,n[9]=255&r,n[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=r/4294967296&255,n[12]=r>>>24&255,n[13]=r>>>16&255,n[14]=r>>>8&255,n[15]=255&r,n};function h(t,r,n){function e(t,e,a,o){if("string"===typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var r=[],n=0;n<t.length;++n)r.push(t.charCodeAt(n));return r}(t)),"string"===typeof e&&(e=y(e)),16!==e.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+t.length);if(u.set(e),u.set(t,e.length),(u=n(u))[6]=15&u[6]|r,u[8]=63&u[8]|128,a){o=o||0;for(var i=0;i<16;++i)a[o+i]=u[i];return a}return p(u)}try{e.name=t}catch(a){}return e.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",e.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",e}function m(t){return 14+(t+64>>>9<<4)+1}function g(t,r){var n=(65535&t)+(65535&r);return(t>>16)+(r>>16)+(n>>16)<<16|65535&n}function w(t,r,n,e,a,o){return g((u=g(g(r,t),g(e,o)))<<(i=a)|u>>>32-i,n);var u,i}function b(t,r,n,e,a,o,u){return w(r&n|~r&e,t,r,a,o,u)}function A(t,r,n,e,a,o,u){return w(r&e|n&~e,t,r,a,o,u)}function U(t,r,n,e,a,o,u){return w(r^n^e,t,r,a,o,u)}function I(t,r,n,e,a,o,u){return w(n^(r|~e),t,r,a,o,u)}var C=function(t){if("string"===typeof t){var r=unescape(encodeURIComponent(t));t=new Uint8Array(r.length);for(var n=0;n<r.length;++n)t[n]=r.charCodeAt(n)}return function(t){for(var r=[],n=32*t.length,e="0123456789abcdef",a=0;a<n;a+=8){var o=t[a>>5]>>>a%32&255,u=parseInt(e.charAt(o>>>4&15)+e.charAt(15&o),16);r.push(u)}return r}(function(t,r){t[r>>5]|=128<<r%32,t[m(r)-1]=r;for(var n=1732584193,e=-271733879,a=-1732584194,o=271733878,u=0;u<t.length;u+=16){var i=n,c=e,s=a,l=o;n=b(n,e,a,o,t[u],7,-680876936),o=b(o,n,e,a,t[u+1],12,-389564586),a=b(a,o,n,e,t[u+2],17,606105819),e=b(e,a,o,n,t[u+3],22,-1044525330),n=b(n,e,a,o,t[u+4],7,-176418897),o=b(o,n,e,a,t[u+5],12,1200080426),a=b(a,o,n,e,t[u+6],17,-1473231341),e=b(e,a,o,n,t[u+7],22,-45705983),n=b(n,e,a,o,t[u+8],7,1770035416),o=b(o,n,e,a,t[u+9],12,-1958414417),a=b(a,o,n,e,t[u+10],17,-42063),e=b(e,a,o,n,t[u+11],22,-1990404162),n=b(n,e,a,o,t[u+12],7,1804603682),o=b(o,n,e,a,t[u+13],12,-40341101),a=b(a,o,n,e,t[u+14],17,-1502002290),n=A(n,e=b(e,a,o,n,t[u+15],22,1236535329),a,o,t[u+1],5,-165796510),o=A(o,n,e,a,t[u+6],9,-1069501632),a=A(a,o,n,e,t[u+11],14,643717713),e=A(e,a,o,n,t[u],20,-373897302),n=A(n,e,a,o,t[u+5],5,-701558691),o=A(o,n,e,a,t[u+10],9,38016083),a=A(a,o,n,e,t[u+15],14,-660478335),e=A(e,a,o,n,t[u+4],20,-405537848),n=A(n,e,a,o,t[u+9],5,568446438),o=A(o,n,e,a,t[u+14],9,-1019803690),a=A(a,o,n,e,t[u+3],14,-187363961),e=A(e,a,o,n,t[u+8],20,1163531501),n=A(n,e,a,o,t[u+13],5,-1444681467),o=A(o,n,e,a,t[u+2],9,-51403784),a=A(a,o,n,e,t[u+7],14,1735328473),n=U(n,e=A(e,a,o,n,t[u+12],20,-1926607734),a,o,t[u+5],4,-378558),o=U(o,n,e,a,t[u+8],11,-2022574463),a=U(a,o,n,e,t[u+11],16,1839030562),e=U(e,a,o,n,t[u+14],23,-35309556),n=U(n,e,a,o,t[u+1],4,-1530992060),o=U(o,n,e,a,t[u+4],11,1272893353),a=U(a,o,n,e,t[u+7],16,-155497632),e=U(e,a,o,n,t[u+10],23,-1094730640),n=U(n,e,a,o,t[u+13],4,681279174),o=U(o,n,e,a,t[u],11,-358537222),a=U(a,o,n,e,t[u+3],16,-722521979),e=U(e,a,o,n,t[u+6],23,76029189),n=U(n,e,a,o,t[u+9],4,-640364487),o=U(o,n,e,a,t[u+12],11,-421815835),a=U(a,o,n,e,t[u+15],16,530742520),n=I(n,e=U(e,a,o,n,t[u+2],23,-995338651),a,o,t[u],6,-198630844),o=I(o,n,e,a,t[u+7],10,1126891415),a=I(a,o,n,e,t[u+14],15,-1416354905),e=I(e,a,o,n,t[u+5],21,-57434055),n=I(n,e,a,o,t[u+12],6,1700485571),o=I(o,n,e,a,t[u+3],10,-1894986606),a=I(a,o,n,e,t[u+10],15,-1051523),e=I(e,a,o,n,t[u+1],21,-2054922799),n=I(n,e,a,o,t[u+8],6,1873313359),o=I(o,n,e,a,t[u+15],10,-30611744),a=I(a,o,n,e,t[u+6],15,-1560198380),e=I(e,a,o,n,t[u+13],21,1309151649),n=I(n,e,a,o,t[u+4],6,-145523070),o=I(o,n,e,a,t[u+11],10,-1120210379),a=I(a,o,n,e,t[u+2],15,718787259),e=I(e,a,o,n,t[u+9],21,-343485551),n=g(n,i),e=g(e,c),a=g(a,s),o=g(o,l)}return[n,e,a,o]}(function(t){if(0===t.length)return[];for(var r=8*t.length,n=new Uint32Array(m(r)),e=0;e<r;e+=8)n[e>>5]|=(255&t[e/8])<<e%32;return n}(t),8*t.length))},j=h("v3",48,C);function x(t,r,n,e){switch(t){case 0:return r&n^~r&e;case 1:case 3:return r^n^e;case 2:return r&n^r&e^n&e}}function S(t,r){return t<<r|t>>>32-r}var _,k,E,N=function(t){var r=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof t){var e=unescape(encodeURIComponent(t));t=[];for(var a=0;a<e.length;++a)t.push(e.charCodeAt(a))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,u=Math.ceil(o/16),i=new Array(u),c=0;c<u;++c){for(var s=new Uint32Array(16),l=0;l<16;++l)s[l]=t[64*c+4*l]<<24|t[64*c+4*l+1]<<16|t[64*c+4*l+2]<<8|t[64*c+4*l+3];i[c]=s}i[u-1][14]=8*(t.length-1)/Math.pow(2,32),i[u-1][14]=Math.floor(i[u-1][14]),i[u-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<u;++f){for(var v=new Uint32Array(80),d=0;d<16;++d)v[d]=i[f][d];for(var p=16;p<80;++p)v[p]=S(v[p-3]^v[p-8]^v[p-14]^v[p-16],1);for(var y=n[0],h=n[1],m=n[2],g=n[3],w=n[4],b=0;b<80;++b){var A=Math.floor(b/20),U=S(y,5)+x(A,h,m,g)+w+r[A]+v[b]>>>0;w=g,g=m,m=S(h,30)>>>0,h=y,y=U}n[0]=n[0]+y>>>0,n[1]=n[1]+h>>>0,n[2]=n[2]+m>>>0,n[3]=n[3]+g>>>0,n[4]=n[4]+w>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]},R=h("v5",80,N),D=new Uint8Array(16);function T(){if(!_&&!(_="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _(D)}var M=0,V=0;var O=function(t,r,n){var e=r&&n||0,a=r||new Array(16),o=(t=t||{}).node||k,u=void 0!==t.clockseq?t.clockseq:E;if(null==o||null==u){var i=t.random||(t.rng||T)();null==o&&(o=k=[1|i[0],i[1],i[2],i[3],i[4],i[5]]),null==u&&(u=E=16383&(i[6]<<8|i[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),s=void 0!==t.nsecs?t.nsecs:V+1,l=c-M+(s-V)/1e4;if(l<0&&void 0===t.clockseq&&(u=u+1&16383),(l<0||c>M)&&void 0===t.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");M=c,V=s,E=u;var f=(1e4*(268435455&(c+=122192928e5))+s)%4294967296;a[e++]=f>>>24&255,a[e++]=f>>>16&255,a[e++]=f>>>8&255,a[e++]=255&f;var v=c/4294967296*1e4&268435455;a[e++]=v>>>8&255,a[e++]=255&v,a[e++]=v>>>24&15|16,a[e++]=v>>>16&255,a[e++]=u>>>8|128,a[e++]=255&u;for(var d=0;d<6;++d)a[e+d]=o[d];return r||p(a)};var q=function(t,r,n){var e=(t=t||{}).random||(t.rng||T)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){n=n||0;for(var a=0;a<16;++a)r[n+a]=e[a];return r}return p(e)};function P(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function Z(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,a,o=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(e=n.next()).done)&&(o.push(e.value),!r||o.length!==r);u=!0);}catch(c){i=!0,a=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,r)||X(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t){return function(t){if(Array.isArray(t))return P(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||X(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(t,r){if(t){if("string"===typeof t)return P(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,r):void 0}}var $=function(){var t=Z((0,o._)("uuid-version","4"),2),r=t[0],n=t[1],l=Z((0,o._)("uuid-count",1),2),f=l[0],v=l[1],d=Z((0,o._)("uuid-namespace",""),2),p=d[0],y=d[1],h=(0,a.useState)(""),m=h[0],g=h[1],w=(0,a.useState)(0),b=(w[0],w[1]),A="";try{if("3"===r)A=j(m,p);else if("5"===r)A=R(m,p);else for(var U=0;U<f;U++)"1"===r?A+=O():"4"===r&&(A+=q()),U<f-1&&(A+="\n")}catch(I){console.error(I)}return(0,e.jsxs)(u.Z,{title:"UUID Generator",children:[(0,e.jsx)(i.Z,{type:"config",items:[{icon:s.voh,name:"Version",description:"Select which UUID variant to use",control:(0,e.jsx)(c.Ph,{value:r,options:[{key:"1",value:"1 (timestamp)"},{key:"3",value:"3 (namespace md5)"},{key:"4",value:"4 (random)"},{key:"5",value:"5 (namespace sha-1)"}],onChange:function(t){return n(t.target.value)}})}].concat(L("3"===r||"5"===r?[{icon:s.m5Y,name:"Namespace UUID",control:(0,e.jsx)(c.nv,{className:"\n\t\t\t\t\t\t\t\t\t\t\t\t!w-auto\n\t\t\t\t\t\t\t\t\t\t\t\tmax-w-48\n\t\t\t\t\t\t\t\t\t\t\t",value:p,onChange:function(t){return y(t.target.value)}})},{icon:s.rI3,name:"Name",control:(0,e.jsx)(c.nv,{className:"\n\t\t\t\t\t\t\t\t\t\t\t\t!w-auto\n\t\t\t\t\t\t\t\t\t\t\t\tmax-w-48\n\t\t\t\t\t\t\t\t\t\t\t",value:m,onChange:function(t){return g(t.target.value)}})}]:[{icon:s.tkb,name:"Count",description:"How many UUIDs to generate",control:(0,e.jsx)(c.Mr,{value:f,min:1,onChange:function(t){return v(parseInt(t.target.value))}})}]))}),(0,e.jsx)(i.Z,{title:"Output",controls:["1"===r||"4"===r?(0,e.jsx)(c.zx,{icon:s.ifN,hint:"Regenerate",onClick:function(){return b((new Date).getTime())}}):null,{type:"copy",data:A}],body:"3"===r||"5"===r?(0,e.jsx)(c.nv,{value:A,disabled:!0}):(0,e.jsx)(c.Kx,{value:A,disabled:!0,rows:f})})]})}}},function(t){t.O(0,[7702,3534,9922,7278,9774,2888,179],(function(){return r=488,t(t.s=r);var r}));var r=t.O();_N_E=r}]);