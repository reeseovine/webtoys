(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{6415:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converters/json2yaml",function(){return e(1480)}])},1480:function(t,n,e){"use strict";e.r(n);var r=e(5893),o=e(7294),a=e(2688),l=e(1132),i=e(9216),c=e(4361),s=e(5317),u=e(5006),f=e.n(u);function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function m(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],l=!0,i=!1;try{for(e=e.call(t);!(l=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==e.return||e.return()}finally{if(i)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(){var t,n=m((0,a._)("json2yaml-mode","yaml"),2),e=n[0],u=n[1],y=m((0,a._)("json2yaml-pretty",!0),2),d=y[0],g=y[1],p=(0,o.useState)(""),h=p[0],v=p[1];try{0===h.length?t="":"yaml"===e?t=f().stringify(f().parse(h)):"json"===e&&(t=d?JSON.stringify(f().parse(h),null,"\t"):JSON.stringify(f().parse(h)))}catch(b){t="",console.error(b)}return(0,r.jsxs)(l.Z,{title:"Convert JSON to YAML and back",children:[(0,r.jsx)(i.Z,{type:"config",items:[{icon:s.p$j,name:"Conversion",description:"Select which conversion mode you want to use",control:(0,r.jsx)(c.Ph,{value:e,options:[{key:"yaml",value:"JSON to YAML"},{key:"json",value:"YAML to JSON"}],onChange:function(t){return u(t.target.value)}})},{icon:s.GyR,name:"Pretty print",description:"Format the result for readability",control:(0,r.jsx)(c.ZD,{checked:d,onChange:function(t){return g(t.target.checked)}})}]}),(0,r.jsxs)("div",{className:"\n\t\t\t\tgrow\n\t\t\t\tflex\n\t\t\t\tflex-col\n\t\t\t\tmd:flex-row\n\t\t\t\tlg:flex-col\n\t\t\t\txl:flex-row\n\n\t\t\t\titems-stretch\n\t\t\t\tgap-4\n\t\t\t",children:[(0,r.jsx)(i.Z,{title:"yaml"===e?"JSON":"YAML",controls:[{type:"file",callback:function(t){return v(t)}},{type:"clear",onClick:function(){return v("")}}],body:(0,r.jsx)(c.EK,{value:h,language:"yaml"===e?"json":"yaml",editable:!0,onChange:function(t){return v(t.target.value)},className:"grow"}),className:"grow flex flex-col basis-1/2 !m-0"}),(0,r.jsx)(i.Z,{title:"yaml"===e?"YAML":"JSON",controls:[{type:"copy",data:t}],body:(0,r.jsx)(c.EK,{value:t,language:e,editable:!1,className:"grow"}),className:"grow flex flex-col basis-1/2 !m-0"})]})]})}}},function(t){t.O(0,[702,534,922,6,278,774,888,179],(function(){return n=6415,t(t.s=n);var n}));var n=t.O();_N_E=n}]);