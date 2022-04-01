(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{9499:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converters/base",function(){return e(3179)}])},3179:function(t,n,e){"use strict";e.r(n);var r=e(5893),i=e(7294),o=e(2688),a=e(1132),u=e(9216),l=e(4361),c=e(5317),s=e(8185);function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,i,o=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){u=!0,i=l}finally{try{a||null==e.return||e.return()}finally{if(u)throw i}}return o}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p={bin:2,oct:8,dec:10,hex:16},y=function(t){var n=[];if(t.length>1){for(var e=t.length;e>0;e-=4)n.unshift(t.slice(e-4>=0?e-4:0,e));return n.join(" ")}return t},v=function(t){var n=[];if(t.length>1){for(var e=t.length;e>0;e-=3)n.unshift(t.slice(e-3>=0?e-3:0,e));return n.join(" ")}return t},d=function(t){var n=[];if(t.length>1){for(var e=t.length;e>0;e-=3)n.unshift(t.slice(e-3>=0?e-3:0,e));return n.join(",")}return t},b=function(t){var n=[];if(t.length>1){for(var e=t.length;e>0;e-=2)n.unshift(t.slice(e-2>=0?e-2:0,e));return n.join(" ")}return t};n.default=function(){var t=h((0,o._)("base-pretty",!0),2),n=t[0],e=t[1],f=h((0,o._)("base-base","dec"),2),g=f[0],j=f[1],m=(0,i.useState)(""),w=m[0],x=m[1],S=h(function(t,n,e){var r=(0,s.Iz)(t,p[n]);return isNaN(r)?["","","",""]:e?[y(r.toString(2)),v(r.toString(8)),d(r.toString(10)),b(r.toString(16))]:[r.toString(2),r.toString(8),r.toString(10),r.toString(16)]}(w,g,n),4),_=S[0],k=S[1],M=S[2],I=S[3];return(0,r.jsxs)(a.Z,{title:"Number Base Converter",children:[(0,r.jsx)(u.Z,{type:"config",items:[{icon:c.tkb,name:"Pretty print",description:"Format the results for readability",control:(0,r.jsx)(l.ZD,{checked:n,onChange:function(t){return e(t.target.checked)}})},{icon:c.btK,name:"Input base",description:"Select which base your input is in",control:(0,r.jsx)(l.Ph,{value:g,options:[{key:"hex",value:"Hexadecimal"},{key:"dec",value:"Decimal"},{key:"oct",value:"Octal"},{key:"bin",value:"Binary"}],onChange:function(t){return j(t.target.value)}})}]}),(0,r.jsx)(u.Z,{type:"inline",title:"Input",controls:[{type:"clear",onClick:function(){return x("")}}],body:(0,r.jsx)(l.nv,{value:w,onChange:function(t){return x(t.target.value)}})}),(0,r.jsx)(u.Z,{type:"inline",title:"Hexadecimal",controls:[{type:"copy",data:I}],body:(0,r.jsx)(l.nv,{value:I,disabled:!0})}),(0,r.jsx)(u.Z,{type:"inline",title:"Decimal",controls:[{type:"copy",data:M}],body:(0,r.jsx)(l.nv,{value:M,disabled:!0})}),(0,r.jsx)(u.Z,{type:"inline",title:"Octal",controls:[{type:"copy",data:k}],body:(0,r.jsx)(l.nv,{value:k,disabled:!0})}),(0,r.jsx)(u.Z,{type:"inline",title:"Binary",controls:[{type:"copy",data:_}],body:(0,r.jsx)(l.nv,{value:_,disabled:!0})})]})}},8185:function(t,n,e){"use strict";e.d(n,{aI:function(){return o},Iz:function(){return a}});var r=function(t,n,e){return e(t*(n=Math.pow(10,n||0)))/n},i=function(t,n){return r(t,n,Math.round)},o=function(t){return t<1e3?t+" B":t<Math.pow(1e3,2)?i(t/1e3,2)+" KB":t<Math.pow(1e3,3)?i(t/Math.pow(1e3,2),2)+" MB":t<Math.pow(1e3,4)?i(t/Math.pow(1e3,3),2)+" GB":t<Math.pow(1e3,5)?i(t/Math.pow(1e3,4),2)+" TB":"that's HUGE!!!"},a=function(t,n){var e=t.split(/\./).map((function(t){return t.trim()}));if(""==e[0]&&(e[0]="0"),e.length>1&&""!=e[1]){var r=e[1].length,i=parseInt(e[1],n)*Math.pow(n,-r);return parseInt(e[0],n)+i}return parseInt(e[0],n)}}},function(t){t.O(0,[7702,3534,9922,7278,9774,2888,179],(function(){return n=9499,t(t.s=n);var n}));var n=t.O();_N_E=n}]);