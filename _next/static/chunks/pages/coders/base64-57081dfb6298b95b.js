(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{2652:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coders/base64",function(){return t(6815)}])},6815:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7294),u=t(2688),a=t(1132),c=t(9216),i=t(4361),l=t(5317);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);a=!0);}catch(i){c=!0,o=i}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return u}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(){var e=f((0,u._)("base64-mode","encode"),2),n=e[0],t=e[1],s=f((0,u._)("base64-encoding","utf-8"),2),d=s[0],y=s[1],h=(0,o.useState)(""),p=h[0],v=h[1],b=function(){try{if("encode"===n)return btoa(p);if("decode"===n)return atob(p)}catch(e){}return""}();return(0,r.jsxs)(a.Z,{title:"Base 64 Encoder & Decoder",children:[(0,r.jsx)(c.Z,{type:"config",items:[{icon:l.p$j,name:"Conversion",description:"Select which conversion mode you want to use",control:(0,r.jsx)(i.Ph,{value:n,options:[{key:"encode",value:"Encode"},{key:"decode",value:"Decode"}],onChange:function(e){return t(e.target.value)}})},{icon:l.Giz,name:"Encoding",description:"Select which character encoding you want to use",control:(0,r.jsx)(i.Ph,{options:[{key:"utf-8",value:"UTF-8"}],value:d,onChange:function(e){return y(e.target.value)}})}]}),(0,r.jsx)(c.Z,{title:"Input",controls:[{type:"file",callback:function(e){return v(e)}},{type:"clear",onClick:function(){return v("")}}],body:(0,r.jsx)(i.Kx,{value:p,onChange:function(e){return v(e.target.value)},rows:5})}),(0,r.jsx)(c.Z,{title:"Output",controls:[{type:"copy",data:b}],body:(0,r.jsx)(i.Kx,{value:b,disabled:!0,rows:5})})]})}}},function(e){e.O(0,[702,534,922,278,774,888,179],(function(){return n=2652,e(e.s=n);var n}));var n=e.O();_N_E=n}]);