"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8095],{33795:function(t,e,n){n.d(e,{Vd:function(){return y},ew:function(){return Z},zq:function(){return O}});var r=n(82394),o=n(21831),i=n(82684),a=n(9518),c=n(48072),l=n(24903),u=n(98677),d=n(84181),f=n(44897),s=n(79633),h=n(70515),p=n(61896),g=n(81728);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y="__y",b=50,x=20,j={bottom:h.iI*(3+h.cd),left:h.iI*h.cd,right:h.iI*h.cd,top:h.iI*h.cd};function w(t,e){return Math.max.apply(Math,(0,o.Z)(t.map(e)))}function O(){var t=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})||{}).flat,e=[[s.a$,s.Ej,s.hM,s.ZA,s.$R,s.X_,s.er,s.hl],["#8E73E5","#4F7EFF","#FF5A7A","#56E06B","#FFD64A","#CBA9B2","#4F86FF","#FF6FFB"],["#5338AA","#1E4BCC","#CB1035","#209A3C","#E6AB00","#836970","#0C3BCC","#CB00C6"]];return t?e.reduce((function(t,e){return t.concat(e)}),[]):e.reduce((function(t,e,n){return e.forEach((function(e,n){var r;t[n]||(t[n]=[]),null===(r=t[n])||void 0===r||r.push(e)})),t}),[])}function Z(t){var e=t.data,n=t.height,r=t.keyForYData,s=t.large,h=t.margin,m=void 0===h?{}:h,y=t.orientationVertical,Z=void 0!==y&&y,k=t.showTooltip,A=t.width,P=t.yLabelFormat,S=(0,i.useContext)(a.ThemeContext),C=(0,i.useCallback)((function(t){return t[r]}),[r]),F=P;F||(F=function(t){return t.length>x?"".concat(t.substring(0,x),"..."):t});var D=s?p.iD:p.J5,M=v(v({},j),m),I=e.slice(Math.max(0,e.length-b)),L=(0,i.useMemo)((function(){return Object.keys((null==I?void 0:I[0])||{}).filter((function(t){return t!==r}))}),[I,r]),T=O(),E=(0,l.Z)({domain:L,range:[].concat((0,o.Z)(T.map((function(t){return t[0]}))),(0,o.Z)(T.map((function(t){return t[1]}))),(0,o.Z)(T.map((function(t){return t[2]}))))}),B=(0,i.useMemo)((function(){return I.map(C)}),[I,C]),R=(0,u.Z)({domain:B,padding:.1}),N=(0,u.Z)({domain:L,padding:.1}),z=(0,d.Z)({domain:[0,w(I,(function(t){return w(L,(function(e){return Number(t[e])}))}))]}),_={active:(null==S?void 0:S.content.default)||f.Z.content.default,backgroundPrimary:(null==S?void 0:S.chart.backgroundPrimary)||f.Z.chart.backgroundPrimary,backgroundSecondary:(null==S?void 0:S.chart.backgroundSecondary)||f.Z.chart.backgroundSecondary,muted:(null==S?void 0:S.content.muted)||f.Z.content.muted,primary:(null==S?void 0:S.chart.primary)||f.Z.chart.primary,tooltipBackground:(null==S?void 0:S.background.navigation)||f.Z.background.navigation},V=B;Z&&(V=I.reduce((function(t,e){return t.concat(L.map((function(t){var n=e[t];return(0,g.HW)(n)?parseInt(String(n)):n})))}),[]));var J=Math.min(Math.max.apply(Math,(0,o.Z)(V.map((function(t){return String(t).length})))),x);M.left+=7*J;var K=A-(M.left+M.right),Y=n-(M.top+M.bottom);Z?(R.rangeRound([0,K]),z.rangeRound([Y,0])):(R.rangeRound([Y,0]),z.rangeRound([0,K])),N.rangeRound([0,R.bandwidth()]);var q=I.map(C).length,X=0;Z||(X=R(V[q-1]));var H=(0,i.useCallback)((function(t){var e=(0,c.Z)(t)||{x:0,y:0},n=e.x,r=e.y,o=n-M.left,i=r-M.top,a=0;a=Z?(o-X/2)/(K-X):1-(i-X/2)/(Y-X);var l=Math.floor(a*q),u=I[l];void 0===u&&(u=I[l-1]),Z?o>X&&o<K+M.left-X&&k({tooltipData:u,tooltipLeft:n,tooltipTop:r}):i>X&&i<Y-X&&k({tooltipData:u,tooltipLeft:n,tooltipTop:r})}),[I,q,M.left,M.top,Z,k,X,K,Y]);return{colorScale:E,colors:_,data:I,fontSize:D,handleTooltip:H,margin:M,tempScale:z,tickValues:V,xKeys:L,xMax:K,y1Scale:N,yLabelFormat:F,yMax:Y,yScale:R,ySerialize:C}}},52729:function(t,e,n){n.d(e,{Z:function(){return J}});var r=n(26304),o=n(75582),i=n(21831),a=n(82394),c=n(82684),l=n(26226),u=n(84969),d=n(90948),f=n(65743),s=n(29989),h=n(9518),p=n(61655),g=n(16853),m=n(65376),v=n(48072),y=n(98677),b=n(84181),x=n(55485),j=n(4190),w=n(30160),O=n(94035),Z=n(70987),k=n(79633),A=n(89370),P=n(95363),S=n(61896),C=n(70515),F=n(38469),D=n(15817),M=function(t){return t.slice(0,10)},I=function(t,e){var n=t.toISOString().slice(0,10),r=e.toISOString().slice(0,10);return"".concat(n,":").concat(r)},L=n(79221),T=n(98684),E=n(3917),B=n(28598),R=["height","loading","selected","width","xAxisLabel","yAxisLabel"];function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={bottom:C.iI,left:3*C.iI,right:0,top:1*C.iI},V=(0,p.Z)((function(t){var e=t.columnType,n=t.data,r=void 0===n?[]:n,a=t.getBarColor,l=t.getXValue,p=t.getYValue,x=t.height,j=t.hideTooltip,O=t.large,R=t.margin,N=void 0===R?{}:R,V=t.muted,J=t.noPadding,K=t.numberOfXTicks,Y=t.renderTooltipContent,q=t.selected,X=t.showAxisLabels,H=t.showTooltip,U=t.showYAxisLabels,W=t.showZeroes,$=t.sortData,G=t.tooltipData,Q=t.yTooltipFormat,tt=t.tooltipLeft,et=t.tooltipOpen,nt=t.tooltipTop,rt=t.width,ot=t.xLabelFormat,it=t.yLabelFormat,at=O?S.J5:S.VK,ct=(0,c.useCallback)((function(t){return l?l(t):t[0]}),[l]),lt=(0,c.useCallback)((function(t){return p?p(t):t[1]}),[p]),ut=(0,c.useContext)(h.ThemeContext),dt=e===A.RL.DATETIME,ft=z(z({},_),N);X&&(ft=z(z({},ft),{},{left:ft.left+C.iI}));var st=$?$(r):r.sort((function(t,e){return e[1]-t[1]})),ht=dt?r.sort((function(t,e){return new Date(t[0])-new Date(e[0])})).filter((function(t){return!!t[0]})):st.slice(0,60),pt=rt-(ft.left+ft.right),gt=x-(ft.bottom+ft.top),mt=dt?function(t,e){var n,r=t.map((function(t){return new Date(t[0])})).sort((function(t,e){return t-e}));return(0,D.Z)({domain:(n=r,[(0,F.Z)(n[0]),(0,F.Z)(n[n.length-1])]),nice:!0,range:[0,e]})}(ht,pt):null,vt=function(t,e){if(null===e)return{};var n=e.ticks().map((function(t){return t.toISOString()})),r={},o=0,i=1;return t.forEach((function(t){var e=new Date(t[0]),a=t[1],c=n[o],l=n[i];if(c&&l){var u=new Date(c),d=new Date(l),f=I(u,d);if(e>=u&&e<d)r[f]=(r[f]||0)+a;else for(;i<n.length||!r[f];)if(o+=1,i+=1,u=new Date(n[o]),d=new Date(n[i]),f=I(u,d),e>=u&&e<d)return void(r[f]=(r[f]||0)+a)}})),n.reduce((function(t,e,n,r){if(0===n)return t;var o=M(e),i=M(r[n-1]);return t.push("".concat(i,":").concat(o)),t}),[]).forEach((function(t){r[t]=r[t]||0})),r}(ht,mt);ht=mt?Object.entries(vt).sort((function(t,e){return new Date(M(t[0])).getTime()-new Date(M(e[0])).getTime()})):ht;var yt=mt?Math.max.apply(Math,(0,i.Z)(Object.values(vt))):0,bt=ht.reduce((function(t,e){return(0!==lt(e)||dt||W)&&t.push(ct(e)),t}),[]),xt=bt.length,jt=function(t,e,n){return n?.05:t>=30&&e<300?.5:t>=15?.3:t>=5?.1:t>2?.05:2===t?.025:0}(xt,rt,dt),wt=(0,y.Z)({domain:bt,paddingInner:J?null:jt,range:[0,pt],round:!1}),Ot=(0,b.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(ht.map(lt)))],range:[gt,0],round:!0}),Zt=(0,T.K)(ut),kt={active:((null==ut?void 0:ut.content)||Z.Z.content).active,default:Zt[0],muted:((null==ut?void 0:ut.monotone)||Z.Z.monotone).gray,selected:((null==ut?void 0:ut.elevation)||Z.Z.elevation).visualizationAccent},At=kt.default;V?At=kt.muted:q&&(At=kt.selected);var Pt=xt?dt?yt:Math.max.apply(Math,(0,i.Z)(ht.map((function(t){return lt(t)})))):0,St=Math.floor(Pt/6),Ct=[0],Ft=0;if(Pt>6)for(;Ft<Pt;)Ct.push(Ft+St),Ft+=St;else for(;Ft<=Pt;)Ct.push(Ft+1),Ft+=1;Pt>9999?ft=z(z({},ft),{},{left:O?8*C.iI:4.1*C.iI}):Pt>999&&(ft=z(z({},ft),{},{left:O?5*C.iI:3.6*C.iI}));var Dt=dt?2.25:0,Mt=xt<10||e===A.RL.NUMBER||e===A.RL.NUMBER_WITH_DECIMALS||dt||U,It=(0,c.useCallback)((function(t){var e,n=(0,v.Z)(t)||{x:0,y:0},r=n.x,i=n.y,a=(r-(X?ft.left:0))/pt,c=Math.floor(xt*a),l=ht[c];void 0===l&&(l=ht[0]);var u=ct(l);u=(null===(e=u)||void 0===e?void 0:e.length)>15?"".concat(u.slice(0,21)):u;var d=l,f=(0,o.Z)(d,3),s=f[0],h=f[1],p=f[2],g=Y?Y(h,c,{values:[s,p]}):Q?Q(h,c,{values:[s,p]}):"".concat(u," (").concat(lt(l),")");H({tooltipData:g,tooltipLeft:r,tooltipTop:i})}),[ht,xt,ct,lt,ft.left,Y,X,H,Q,pt]);return rt<10||!r.length?null:(0,B.jsxs)("div",{children:[(0,B.jsxs)("svg",{height:x+ft.bottom*(dt?7.5:3),width:rt,children:[(0,B.jsx)(s.Z,{left:X?ft.left:0,top:ft.top+Dt,children:ht.reduce((function(t,e){var n=ct(e),r=lt(e);if(0!==r){var o,i=wt.bandwidth(),c=gt-(null!==(o=Ot(r))&&void 0!==o?o:0),l=wt(n),u=gt-c;t.push((0,B.jsx)(f.Z,{fill:a?a(e):At,height:c,onMouseLeave:function(){return j()},onMouseMove:It,onTouchMove:It,onTouchStart:It,width:i,x:l,y:u},"bar-".concat(n)))}return t}),[])}),X&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(u.Z,{left:ft.left,scale:Ot,stroke:kt.muted,tickFormat:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return it?it.apply(void 0,[t].concat(n)):(0,L.P5)(t)},tickLabelProps:function(){return{fill:kt.active,fontFamily:P.ry,fontSize:at,textAnchor:"end",transform:"translate(-2,2.5)"}},tickStroke:kt.muted,tickValues:Ct,top:ft.top+Dt}),(0,B.jsx)(d.Z,{left:ft.left,numTicks:dt?void 0:K||6,orientation:"top",scale:mt||wt,stroke:kt.muted,tickFormat:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ot?ot.apply(void 0,[t].concat(n)):(0,E.J_)(t)?function(t){return t.toISOString().slice(0,10)}(t):t.toString()},tickLabelProps:function(t){return{fill:Mt?kt.active:"transparent",fontFamily:P.ry,fontSize:at,textAnchor:"middle",transform:dt?"rotate(-90,".concat(mt(t),",0) translate(-33,10)"):"translate(0, ".concat(3*ft.bottom,")")}},tickLineProps:{transform:"translate(0,".concat(C.iI,")")},tickStroke:Mt?kt.muted:"transparent",top:gt+ft.top+Dt})]})]}),et&&G&&(0,B.jsx)(g.Z,{left:tt,style:m.j,top:nt,children:(0,B.jsx)(w.ZP,{color:k.E5,small:!0,children:G})})]})}));var J=function(t){var e=t.height,n=t.loading,o=t.selected,i=t.width,a=t.xAxisLabel,c=t.yAxisLabel,u=(0,r.Z)(t,R);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("div",{style:{display:"flex",height:e,marginBottom:C.iI,width:"100%"},children:[c&&(0,B.jsx)(x.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,B.jsx)(O.Z,{children:(0,B.jsx)(w.ZP,{center:!0,muted:!0,small:!0,children:c})})}),(0,B.jsxs)("div",{style:{height:e,width:c?0===i?i:i-28:i},children:[n&&(0,B.jsx)(j.Z,{}),!n&&(0,B.jsx)(l.Z,{children:function(t){var e=t.height,n=t.width;return(0,B.jsx)(V,z(z({},u),{},{height:e,selected:o,width:n}))}})]})]}),a&&(0,B.jsx)("div",{style:{paddingLeft:c?36:0,paddingTop:4},children:(0,B.jsx)(w.ZP,{center:!0,muted:!0,small:!0,children:a})})]})}},87862:function(t,e,n){n.d(e,{Z:function(){return S}});var r=n(26304),o=n(82394),i=n(75582),a=n(26226),c=n(28940),l=n(82684),u=n(29989),d=n(9518),f=n(98788),s=n(24903),h=n(30160),p=n(44897),g=n(95363),m=n(61896),v=n(70515),y=n(33795),b=n(28598),x=["height","width","xAxisLabel"];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={bottom:0,left:0,right:0,top:0},Z=function(t){var e=t.endAngle;return{endAngle:e>Math.PI?2*Math.PI:0,opacity:0,startAngle:e>Math.PI?2*Math.PI:0}},k=function(t){var e=t.startAngle;return{endAngle:t.endAngle,opacity:1,startAngle:e}};function A(t){var e=t.animate,n=t.arcs,r=t.path,o=t.getKey,a=t.getColor,c=t.onClickDatum,l=t.textColor,u=t.xLabelFormat,d=t.yLabelFormat;return(0,f.Yz)(n,{enter:k,from:e?Z:k,keys:o,leave:e?Z:k,update:k})((function(t,e,n){var s,h,p,v,y=n.key,x=r.centroid(e),j=(0,i.Z)(x,2),O=j[0],Z=j[1],k=e.endAngle-e.startAngle>=.1,A=u||d?u?u(null==e||null===(s=e.data)||void 0===s?void 0:s[0],null==e||null===(h=e.data)||void 0===h?void 0:h[1],[{index:null==e?void 0:e.index}]):d(null==e||null===(p=e.data)||void 0===p?void 0:p[1],null==e||null===(v=e.data)||void 0===v?void 0:v[0],[{index:null==e?void 0:e.index}]):o(e);return(0,b.jsxs)("g",{children:[(0,b.jsx)(f.q.path,{d:(0,f.to)([t.startAngle,t.endAngle],(function(t,n){return r(w(w({},e),{},{endAngle:n,startAngle:t}))})),fill:a(e),onClick:function(){return c(e)},onTouchStart:function(){return c(e)}}),k&&(0,b.jsx)(f.q.g,{style:{opacity:t.opacity},children:(0,b.jsx)("text",{dy:".33em",fill:l,fontFamily:g.ry,fontSize:m.J5,pointerEvents:"none",textAnchor:"middle",x:O,y:Z,children:A})})]},y)}))}function P(t){var e=t.animate,n=void 0===e||e,r=t.data,o=t.getX,i=t.getY,a=t.height,f=t.margin,h=void 0===f?O:f,g=t.textColor,m=t.thickness,x=t.xLabelFormat,j=t.yLabelFormat,Z=t.width,k=(0,l.useState)(null),P=k[0],S=k[1],C=(0,l.useContext)(d.ThemeContext),F=g||(null==C?void 0:C.content.active)||p.Z.content.active;if(Z<10)return null;var D=(0,s.Z)({domain:r.map((function(t){return o(t)})),range:(0,y.zq)({flat:!0})}),M=Z-h.left-h.right,I=a-h.top-h.bottom,L=Math.min(M,I)/2,T=I/2,E=M/2,B=m?Math.min(M,I)/2*m:Math.min(M/4,12*v.iI);return(0,b.jsx)("svg",{height:a,width:Z,children:(0,b.jsx)(u.Z,{left:E+h.left,top:T+h.top,children:(0,b.jsx)(c.Z,{cornerRadius:v.iI/2,data:P?r.filter((function(t){return JSON.stringify(t)===JSON.stringify(P)})):r,innerRadius:Math.max(L-B,12.25),outerRadius:L,padAngle:.005,pieValue:i,children:function(t){return(0,b.jsx)(A,w(w({},t),{},{animate:n,getColor:function(t){var e=t.data;return D(o(e))},getKey:function(t){var e=t.data;return o(e)},onClickDatum:function(t){var e=t.data;return n&&S(P&&JSON.stringify(P)===JSON.stringify(e)?null:e)},textColor:F,xLabelFormat:x,yLabelFormat:j}))}})})})}function S(t){var e=t.height,n=t.width,o=t.xAxisLabel,i=(0,r.Z)(t,x),c={};return void 0!==e&&(c.height=e),void 0!==n&&(c.width=n),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:c,children:(0,b.jsx)(a.Z,{children:function(t){var e=t.width,n=t.height;return(0,b.jsx)(P,w(w({},i),{},{height:n,width:e}))}})}),o&&(0,b.jsx)("div",{style:{paddingTop:4},children:(0,b.jsx)(h.ZP,{center:!0,muted:!0,small:!0,children:o})})]})}},98684:function(t,e,n){n.d(e,{K:function(){return o}});var r=n(70987),o=function(t){var e=t||r.Z,n=e.brand,o=n.earth200,i=n.earth300,a=n.earth400,c=n.energy200,l=n.energy300,u=n.energy400,d=n.fire200,f=n.fire300,s=n.fire400,h=n.water200,p=n.water300,g=n.water400,m=n.wind200,v=n.wind300,y=n.wind400,b=e.chart;return[b.backgroundPrimary,b.backgroundSecondary,b.backgroundTertiary].concat([y,g,s,u,a,v,p,f,l,i,m,h,d,c,o])}},94035:function(t,e,n){var r=n(9518).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);e.Z=r},79221:function(t,e,n){n.d(e,{P5:function(){return r},Vs:function(){return o}});n(81728);function r(t,e){var n=e||{},r=n.maxFractionDigits,o=n.minAmount,i=Intl.NumberFormat("en-US",{maximumFractionDigits:r||2,notation:"compact"});return"number"!=typeof t?t:t>=(o||1e4)?i.format(t):t.toString()}function o(t){var e,n;if(void 0===t)return 0;var r=null==t||null===(e=t())||void 0===e||null===(n=e.props)||void 0===n?void 0:n.children;return(Array.isArray(r)?r:[r]).join("").length}}}]);