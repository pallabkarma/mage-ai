(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5935],{5508:function(e,n,t){"use strict";t.r(n);t(82684);var r=t(46042),u=t(84104),o=t(40062),i=t(30210),l=t(9518),c=t(62088),d=t(28598);n.default=function(e){var n=e.children,t=e.main,s=e.router,a=e.theme,f=new o.S;return(0,d.jsx)(l.ThemeProvider,{theme:a,children:(0,d.jsx)(u.aM,{router:s,theme:a,children:(0,d.jsx)(i.aH,{client:f,children:(0,d.jsx)(r.sp,{children:(0,d.jsx)(c.pn,{main:t,children:n})})})})})}},90477:function(e,n,t){"use strict";t.d(n,{AR:function(){return r},Jm:function(){return u},Mg:function(){return o},Ri:function(){return i},d8:function(){return c},lL:function(){return d}});var r,u,o,i,l=t(82684);!function(e){e.DOWN="down",e.LEFT="left",e.RIGHT="right",e.UP="up"}(r||(r={})),function(e){e.CENTER="center",e.END="end",e.START="start"}(u||(u={})),function(e){e.CENTER="center",e.END="end",e.START="start"}(o||(o={})),function(e){e.BLUR="blur",e.CLICK="click",e.ESCAPE="escape",e.LEAVE="leave"}(i||(i={}));var c=(0,l.createContext)(null),d=function(){var e=(0,l.useContext)(c);if(!e)throw new Error("useTooltip must be used within a TooltipProvider");return e}},62088:function(e,n,t){"use strict";t.d(n,{Mg:function(){return r.Mg},AR:function(){return r.AR},Jm:function(){return r.Jm},pn:function(){return R},pf:function(){return w}});var r=t(90477),u=t(82684),o=t(82394),i=t(85253),l=t.n(i),c=t(28598);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){var t,r,u,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,l=(t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,u=window.pageYOffset||document.documentElement.scrollTop,{pageX:t.left+r,pageY:t.top+u,width:t.width,height:t.height}),c=l.pageX,d=l.pageY;c&&(c-=o),d&&(d-=i);var s=c,a=d+l.height;n.style.position="absolute",n.style.left="".concat(s,"px"),n.style.top="".concat(a,"px")}function f(e,n){var t=e.children,o=e.layout,i=e.offset,d=e.options,f=(e.optionsPrev,d.event),v=d.style,h=d.wrapperRef,p=o.align,m=void 0===p?r.Mg.START:p,g=o.justify,R=void 0===g?r.Jm.START:g,w=o.position,E=o.horizontalDirection,T=void 0===E?r.AR.RIGHT:E,y=o.verticalDirection,O=void 0===y?r.AR.UP:y;return(0,u.useEffect)((function(){if(null!=n&&n.current&&null!=h&&h.current){var e,t,u,o=null!=f?f:{},c=(o.pageX,o.pageY,null==n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect()),d=c.height,s=(c.left,c.top,c.width),v=null!==(t=null==h||null===(u=h.current)||void 0===u?void 0:u.getBoundingClientRect())&&void 0!==t?t:{},p=v.height,g=void 0===p?0:p,E=(v.left,v.top,v.width),y=void 0===E?0:E,C=window.innerWidth,x=window.innerHeight,j=0,b=0;m===r.Mg.START?j=r.AR.RIGHT===T?0:-s:m===r.Mg.CENTER?j=-Math.abs(y-s)/2:m===r.Mg.END&&(j=r.AR.LEFT===T?-(s-y):y),R===r.Jm.START?b=r.AR.UP===O?-(d+g):-d:R===r.Jm.CENTER?b=-(g+(d-g)/2):R===r.Jm.END&&(b=0),(null==w?void 0:w.x)+j<0?j=0-w.x:(null==w?void 0:w.x)+j>C&&(j=C-w.x),(null==w?void 0:w.y)+b<0?b=0-w.y:(null==w?void 0:w.y)+b>x&&(b=x-w.y),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;a(e,n,t,r);var u=function(){a(e,n,t,r)};window.addEventListener("scroll",u)}(h.current,n.current,null==i?void 0:i.x,null==i?void 0:i.y),n.current.style.transform="translate(".concat(j,"px, ").concat(b,"px)"),n.current.classList.remove(l().hide)}}),[m,R]),(0,c.jsx)("div",{className:[l().tooltipContent,l().hide].join(" "),ref:n,style:s({},v),children:t})}var v=u.forwardRef(f),h=t(51774),p=t.n(h),m=t(78050),g=t(9518),R=function(e){var n=e.children,o=(e.main,(0,u.useContext)(g.ThemeContext)),i=(0,u.useRef)(null),l=(0,u.useRef)(null),d=(0,u.useRef)(null),s=(0,u.useRef)(null),a=(0,u.useRef)(null),f=(0,u.useRef)(null),h=(0,u.useRef)(!1);function R(){clearTimeout(i.current),clearTimeout(l.current),i.current=null,l.current=null}function w(e){i.current=setTimeout((function(){R(),d.current&&d.current.render(null),a.current=null,f.current=null,h.current=!1}),null!=e?e:1e3)}return(0,u.useEffect)((function(){var e=function(e){var n,t,r,u,o,i=(null!==(n=a.current)&&void 0!==n?n:{}).wrapperRef;if(!i)return!1;var l=null!==(t=null==i||null===(r=i.current)||void 0===r?void 0:r.getBoundingClientRect())&&void 0!==t?t:{},c=l.height,d=l.left,s=l.top,v=l.width,h=null!==(u=null==f||null===(o=f.current)||void 0===o?void 0:o.getBoundingClientRect())&&void 0!==u?u:{},p=h.height,m=h.left,g=h.top,R=h.width,w=e.pageX,E=e.pageY;return w>=d&&w<=d+v&&E>=s&&E<=s+c||w>=m&&w<=m+R&&E>=g&&E<=g+p},n=function(n){var t,u,o,c;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(u=t.hideOn)&&void 0!==u&&u.length&&null!=a&&null!==(o=a.current)&&void 0!==o&&null!==(c=o.hideOn)&&void 0!==c&&c.includes(r.Ri.LEAVE)&&(e(n)||i.current||(l.current=null,w()))},t=function(n){var t,u;clearTimeout(l.current),null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(t=a.current)&&void 0!==t&&null!==(u=t.hideOn)&&void 0!==u&&u.includes(r.Ri.CLICK)&&(e(n)||w(0))},u=function(e){var n,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(n=a.current)&&void 0!==n&&null!==(t=n.hideOn)&&void 0!==t&&t.includes(r.Ri.ESCAPE)&&"Escape"===e.key&&w(0)};document.addEventListener("focusout",(function(e){var n,t;null!=h&&h.current&&null!=a&&a.current&&null!=a&&null!==(n=a.current)&&void 0!==n&&null!==(t=n.hideOn)&&void 0!==t&&t.includes(r.Ri.BLUR)&&([a.current.wrapperRef,f].some((function(n){return(null==n?void 0:n.current)&&!(null!=n&&n.current.contains(e.relatedTarget))}))&&w(0))}),!0),document.addEventListener("keydown",u,!0),document.addEventListener("mousedown",t,!0),document.addEventListener("mousemove",n,!0);var o=d.current,c=s.current;return function(){document.removeEventListener("focusout",n),document.removeEventListener("keydown",u),document.removeEventListener("mousedown",t),document.removeEventListener("mousemove",n),o&&o.unmount(),c&&document.body.removeChild(c)}}),[]),(0,c.jsx)(r.d8.Provider,{value:{hideTooltip:w,showTooltip:function(e,n,r){R();var u=a.current;a.current=r;var i=p()((function(){return Promise.resolve().then(t.bind(t,5508))}),{loadableGenerated:{webpack:function(){return[5508]}}});null!=s&&s.current||(s.current=document.createElement("div"),s.current.className="tooltip-root",s.current.id=String(Number(new Date)),document.body.appendChild(s.current)),d.current||(d.current=(0,m.createRoot)(s.current)),l.current=setTimeout((function(){R(),d.current.render((0,c.jsx)(i,{theme:o,children:(0,c.jsx)(v,{layout:n,options:r,optionsPrev:u,ref:f,children:e})})),h.current=!0}),h.current?0:2e3)}},children:n})};function w(e){var n=e.align,t=e.children,o=e.hide,i=e.justify,l=e.position,d=e.showOnClick,s=e.showOnHover,a=e.style,f=e.tooltip,v=e.tooltipStyle,h=e.horizontalDirection,p=e.verticalDirection,m=(0,r.lL)(),g=(m.hideTooltip,m.showTooltip),R=(0,u.useRef)(null),w=(0,u.useCallback)((function(e){var t=e.target;if(t instanceof HTMLElement){var u=t.getBoundingClientRect(),o=u.left,c=u.top,s=[r.Ri.BLUR,r.Ri.CLICK,r.Ri.ESCAPE];d||s.push(r.Ri.LEAVE),g(f,{align:n,horizontalDirection:h,justify:i,position:null!=l?l:{x:o,y:c},verticalDirection:p},{event:e,hideOn:s,renderOnMouseMove:!0,style:v,wrapperRef:R})}}),[n,i,l,d,g,f,v,h,p]);return o?t:(0,c.jsx)("div",{onClick:d?w:void 0,onMouseEnter:s||!d?w:void 0,ref:R,style:a,children:t})}},75502:function(e,n,t){"use strict";t.d(n,{I:function(){return i},Z:function(){return l}});var r=t(53860),u=t(82684),o=t(28598);function i(e){var n=e.children,t=e.onMount,i=e.uuid,l=e.waitUntil,c=e.maxAttempts,d=void 0===c?10:c,s=e.pollInterval,a=void 0===s?100:s,f=e.withRef,v=(0,u.useRef)(0),h=(0,u.useRef)(0),p=(0,u.useRef)(null),m=(0,u.useRef)(null);return(0,u.useEffect)((function(){if(!(h.current>=d)){r.e.hooks.withOnMount&&console.log("[WithOnMount:".concat(i,":").concat(v.current,"]")),0===v.current&&(p.current=setTimeout((function e(){clearTimeout(p.current),h.current+=1,h.current>=d?r.e.hooks.withOnMount&&console.log("[WithOnMount]: maxAttempts reached"):0!==v.current||!t||l&&!l(f?m:null)||f&&(null==m||!m.current)?p.current=setTimeout(e,a):(r.e.hooks.withOnMount&&console.log("[WithOnMount:".concat(i,":").concat(v.current,"]")),f?t(m):t(),v.current+=1)}),a));var e=p.current;return function(){clearTimeout(e),h.current=0,v.current=0,p.current=null}}}),[d,t,a]),f?(0,o.jsx)("div",{ref:m,children:n}):(0,o.jsx)(o.Fragment,{children:n})}function l(e){var n=e.children,t=e.onMount,i=e.waitUntil,l=e.maxAttempts,c=void 0===l?10:l,d=e.pollInterval,s=void 0===d?100:d,a=(0,u.useRef)(0),f=(0,u.useRef)(0),v=(0,u.useRef)(null);return r.e.hooks.withOnMount&&console.log("[useWithOnMount] rendering...",null==a?void 0:a.current),(0,u.useEffect)((function(){if(!(f.current>=c)){0===a.current&&(v.current=setTimeout((function e(){clearTimeout(v.current),f.current>=c||(f.current+=1,0!==a.current||!t||i&&!i()?v.current=setTimeout(e,s):(t(),a.current+=1))}),s));var e=v.current;return function(){clearTimeout(e),a.current=0,v.current=null,f.current=0}}}),[c,t,s]),(0,o.jsx)(o.Fragment,{children:n})}},85253:function(e){e.exports={tooltipContent:"TooltipContent_tooltipContent__jwrVy",hide:"TooltipContent_hide__q3_7w"}}}]);