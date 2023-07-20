(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4535],{5087:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formatters/pretty",function(){return r(2661)}])},2661:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),a=r(2688),i=r(1132),s=r(9216),l=r(4361),u=r(5317),c=r(3945),p=r.n(c);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){s=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=[{prettier:"postcss",prism:"css",name:"CSS"},{prettier:"graphql",prism:"graphql",name:"GraphQL"},{prettier:"html",prism:"html",name:"HTML"},{prettier:"babel",prism:"js",name:"Javascript"},{prettier:"babel",prism:"json",name:"JSON"},{prettier:"markdown",prism:"md",name:"Markdown"},{prettier:"typescript",prism:"ts",name:"TypeScript"},{prettier:"yaml",prism:"yml",name:"YAML"}];t.default=function(){var e=y((0,a._)("pretty-language",3),2),t=e[0],c=e[1],f=y((0,a._)("pretty-width",80),2),h=f[0],d=f[1],b=y((0,a._)("pretty-indent","tab"),2),v=b[0],j=b[1],w=y((0,a._)("pretty-semi",!1),2),S=w[0],k=w[1],_=y((0,a._)("pretty-quotes","single"),2),x=_[0],O=_[1],P=y((0,a._)("pretty-jsxquotes","single"),2),C=P[0],E=P[1],N=(0,o.useState)(""),I=N[0],T=N[1],q=(0,o.useState)(""),A=q[0],D=q[1],M={printWidth:h,useTabs:"tab"===v,tabWidth:"tab"!==v?parseInt(v):void 0,semi:S,singleQuote:"single"===x};return console.log(M),(0,o.useEffect)((function(){try{r(8129)("./parser-".concat(g[t].prettier,".js")).then((function(e){D(p().format(I,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({parser:g[t].prettier,plugins:[e]},M)))}))}catch(e){console.error(e)}}),[t,M,I]),(0,n.jsxs)(i.Z,{title:"Pretty print",children:[(0,n.jsx)(s.Z,{type:"config",items:[{icon:u.FI1,name:"Language",description:"",control:(0,n.jsx)(l.Ph,{value:t.toString(),options:g.map((function(e,t){return{key:t.toString(),value:e.name}})),onChange:function(e){return c(parseInt(e.target.value))}})},{icon:u.fW3,name:"Print width",description:"Roughly how long you\u2019d like lines to be (may be more or less)",control:(0,n.jsx)(l.Mr,{value:h.toString(),min:1,onChange:function(e){return d(parseInt(e.target.value))}})},{icon:u.GyR,name:"Indentation",description:"",control:(0,n.jsx)(l.Ph,{value:v,options:[{key:"2",value:"2 spaces"},{key:"4",value:"4 spaces"},{key:"tab",value:"Tab"}],onChange:function(e){return j(e.target.value)}})},{icon:"m11.189 14.65v1.8581c0 0.58824-0.06919 1.1557-0.20761 1.7024-0.13841 0.54671-0.3737 1.0623-0.70588 1.5467l1.1938 0.65398c0.29066-0.24913 0.54671-0.53287 0.76817-0.85121 0.22145-0.31834 0.4083-0.65398 0.56055-1.0069 0.15917-0.34602 0.27682-0.69896 0.35294-1.0588 0.08306-0.35294 0.12457-0.69204 0.12457-1.0173v-1.827zm2.5347-8.117a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z",name:"Semicolons",description:"Use semicolons everywhere or only where needed",control:(0,n.jsx)(l.ZD,{checked:S,onChange:function(e){return k(e.target.checked)}})},{icon:u.jGl,name:"Quotes",description:"Style of quote used when no other quotes are contained inside",control:(0,n.jsx)(l.Ph,{value:x,options:[{key:"single",value:"Single"},{key:"double",value:"Double"}],onChange:function(e){return O(e.target.value)}})},["js","ts"].includes(g[t].prism)?{icon:u.jGl,name:"JSX Quotes",description:"Style of quote used for JSX/TSX attributes",control:(0,n.jsx)(l.Ph,{value:C,options:[{key:"single",value:"Single"},{key:"double",value:"Double"}],onChange:function(e){return E(e.target.value)}})}:null]}),(0,n.jsx)(s.Z,{title:"Input",controls:[{type:"file",callback:function(e){return T(e)}},{type:"clear",onClick:function(){return T("")}}],body:(0,n.jsx)(l.EK,{value:I,language:g[t].prism,editable:!0,onChange:function(e){return T(e.target.value)},className:"grow"}),className:"grow flex flex-col basis-1/2 !m-0"}),(0,n.jsx)(s.Z,{title:"Output",controls:[{type:"copy",data:A}],body:(0,n.jsx)(l.EK,{value:A,language:g[t].prism,editable:!1,className:"grow"}),className:"grow flex flex-col basis-1/2 !m-0"})]})}},8129:function(e,t,r){var n={"./parser-angular.js":[9228,9228],"./parser-babel.js":[8182,2993],"./parser-espree.js":[3724,9958],"./parser-flow.js":[4424,4616],"./parser-glimmer.js":[1451,6702],"./parser-graphql.js":[214,214],"./parser-html.js":[2237,2596],"./parser-markdown.js":[6345,4990],"./parser-meriyah.js":[5089,73],"./parser-postcss.js":[5657,4234,3454],"./parser-typescript.js":[9070,2791,6291],"./parser-yaml.js":[893,893]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r.t(o,23)}))}o.keys=function(){return Object.keys(n)},o.id=8129,e.exports=o}},function(e){e.O(0,[7702,2054,3534,9922,7278,9774,2888,179],(function(){return t=5087,e(e.s=t);var t}));var t=e.O();_N_E=t}]);