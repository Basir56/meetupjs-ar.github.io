(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{373:function(e,t,a){__NEXT_REGISTER_PAGE("/blog.html",function(){return e.exports=a(437),{page:e.exports.default}})},437:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),o=a(0),c=a.n(o),l=a(7),i=a(89),m=a(32),u=a(153),s=a(154),p=a(155),f=a(156),b=a(157),E=a(150),y=a(158),d=a(151),g=a(152);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=[u.metadata,s.metadata,p.metadata,f.metadata,d.metadata,y.metadata,E.metadata,b.metadata,g.metadata].sort(function(e,t){return t.publishedDay-e.publishedDay}),j=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=_(this,A(t).call(this,e))).articlesMetadata=w(O),a}var a,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,o["Component"]),a=t,(n=[{key:"render",value:function(){return c.a.createElement(l.a,null,c.a.createElement("h1",{className:"mv0 tc"},"Blog"),this.articlesMetadata.map(function(e){return c.a.createElement("div",{className:"mt4",key:e.title},c.a.createElement(r.a,{href:e.relativeUrl,passHref:!0},c.a.createElement("a",{href:"#!",className:"black-alternative bg-animate br2 db bg-white hover-bg-washed-yellow no-underline overflow-hidden"},e.coverUrl&&c.a.createElement("img",{src:e.coverUrl,alt:e.coverAlt,className:"v-btm"}),c.a.createElement("div",{className:"".concat(e.coverUrl?"bb bl br":"ba"," b--black-10 bw1 pa3")},c.a.createElement("h2",{className:"f4 f3-ns mb3 mt0"},e.title),c.a.createElement("p",{className:"black-alternative-light f6 mb0 mt3"},c.a.createElement("span",null,"Por "),c.a.createElement("strong",null,Object(i.a)(e.authors)),c.a.createElement("span",null,". Publicado el "),c.a.createElement(m.a,{date:e.publishedDay}),c.a.createElement("span",null,".")),c.a.createElement("p",{className:"mv3"},e.description)))))}))}}])&&v(a.prototype,n),u&&v(a,u),t}(),S=a(3),T=a.n(S),C=a(5),N=a.n(C),R=T()().publicRuntimeConfig,k={description:"En este blog compartimos información relevante para la comunidad.",title:"Blog - ".concat(R.REACT_APP_TITLE),url:"".concat(R.REACT_APP_URL,"blog.html")};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,null,c.a.createElement("title",null,k.title),c.a.createElement("meta",{name:"description",content:k.description}),c.a.createElement("meta",{property:"og:url",content:k.url}),c.a.createElement("meta",{property:"og:type",content:"website"}),c.a.createElement("meta",{property:"og:title",content:k.title}),c.a.createElement("meta",{property:"og:description",content:k.description}),c.a.createElement("meta",{property:"og:image",content:R.REACT_APP_SOCIAL_IMAGE}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:site",content:"@meetupjs_ar"}),c.a.createElement("meta",{name:"twitter:creator",content:"@meetupjs_ar"}),c.a.createElement("meta",{name:"twitter:title",content:k.title}),c.a.createElement("meta",{name:"twitter:description",content:k.description}),c.a.createElement("meta",{name:"twitter:image",content:R.REACT_APP_SOCIAL_IMAGE})),c.a.createElement(j,null))}}},[[373,1,0]]]);