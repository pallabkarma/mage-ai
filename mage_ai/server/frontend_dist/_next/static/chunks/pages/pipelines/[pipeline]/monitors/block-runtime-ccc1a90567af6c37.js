(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4947],{46978:function(e,n,t){"use strict";t.d(n,{Cl:function(){return a},Nk:function(){return c},ZG:function(){return l}});var i=t(38626),r=t(44897),o=t(70515),l=1.5*o.iI,a=1*l+o.iI/2,c=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||r.Z.interactive).hoverBackground,";\n    ")}))},64657:function(e,n,t){"use strict";t.d(n,{CD:function(){return a},NU:function(){return o},a_:function(){return i},hu:function(){return l}});var i,r=t(44897);!function(e){e.BLOCK_RUNS="block_runs",e.BLOCK_RUNTIME="block_runtime",e.PIPELINE_RUNS="pipeline_runs"}(i||(i={}));var o=[r.Z.accent.warning,r.Z.background.success,r.Z.accent.negative,r.Z.content.active,r.Z.interactive.linkPrimary],l=["cancelled","completed","failed","initial","running"],a=-50},7116:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});t(82684);var i=t(34376),r=t(85854),o=t(75457),l=t(38276),a=t(30160),c=t(74395),u=t(38626),s=t(44897),d=t(70515),f=u.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],d.iI,d.tr,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||s.Z.interactive).checked,";\n  ")}),(function(e){return!e.selected&&"\n    cursor: pointer;\n  "})),p=t(64657),m=t(28795),h=t(28598);var v=function(e){var n=e.breadcrumbs,t=e.children,u=e.errors,s=e.monitorType,v=e.pipeline,y=e.setErrors,g=e.subheader,x=(0,i.useRouter)();return(0,h.jsx)(o.Z,{before:(0,h.jsxs)(c.M,{children:[(0,h.jsx)(l.Z,{p:d.cd,children:(0,h.jsx)(r.Z,{level:4,muted:!0,children:"Insights"})}),(0,h.jsx)(f,{onClick:function(e){e.preventDefault(),x.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors"))},selected:p.a_.PIPELINE_RUNS==s,children:(0,h.jsx)(a.ZP,{children:"Pipeline runs"})}),(0,h.jsx)(f,{onClick:function(e){e.preventDefault(),x.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors/block-runs"))},selected:p.a_.BLOCK_RUNS==s,children:(0,h.jsx)(a.ZP,{children:"Block runs"})}),(0,h.jsx)(f,{onClick:function(e){e.preventDefault(),x.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors/block-runtime"))},selected:p.a_.BLOCK_RUNTIME==s,children:(0,h.jsx)(a.ZP,{children:"Block runtime"})})]}),breadcrumbs:n,errors:u,pageName:m.M.MONITOR,pipeline:v,setErrors:y,subheader:g,uuid:"pipeline/monitor",children:t})}},74395:function(e,n,t){"use strict";t.d(n,{M:function(){return l},W:function(){return o}});var i=t(38626),r=t(46684),o=34*t(70515).iI,l=i.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],r.Mz)},74168:function(e,n,t){"use strict";var i=t(26304),r=t(21831),o=t(82394),l=t(82684),a=t(26226),c=t(38626),u=t(90948),s=t(84969),d=t(65743),f=t(85587),p=t(79487),m=t(52136),h=t(67778),v=t(29989),y=t(17066),g=t(84482),x=t(76771),b=t(98889),j=t(65376),k=t(61655),Z=t(97745),_=t(48072),O=t(10103),w=t(84181),I=t(24903),P=t(55485),N=t(30160),E=t(94035),M=t(44897),S=t(8454),C=t(79633),L=t(95363),T=t(61896),D=t(70515),F=t(86735),A=t(79221),R=t(98684),U=t(28598),z=["areaBetweenLines","data","events","height","lineLegendNames","margin","width","xAxisLabel","xLabelFormat","yAxisLabel","yLabelFormat"];function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var X=B(B({},j.j),{},{backgroundColor:M.Z.background.muted,border:"none"}),Y=(0,k.Z)((function(e){var n=e.areaBetweenLines,t=e.data,i=e.events,o=void 0!==i&&i,a=e.getX,k=e.getY,P=e.getYScaleValues,E=e.gridProps,z=void 0===E?{}:E,H=e.height,Y=e.hideGridX,V=e.hideTooltip,K=e.increasedXTicks,W=e.lineLegendNames,q=e.margin,J=e.noCurve,G=e.numYTicks,Q=e.renderXTooltipContent,$=e.renderYTooltipContent,ee=e.showTooltip,ne=e.thickStroke,te=e.tooltipData,ie=e.tooltipLeft,re=void 0===ie?0:ie,oe=e.tooltipTop,le=void 0===oe?[]:oe,ae=e.width,ce=e.xLabelFormat,ue=e.xLabelRotate,se=void 0===ue||ue,de=e.yLabelFormat,fe=(0,l.useContext)(c.ThemeContext),pe=a||function(e){return null===e||void 0===e?void 0:e.x},me=k||function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return null===e||void 0===e||null===(n=e.y)||void 0===n?void 0:n[t]},he=M.Z.monotone.gray,ve=M.Z.brand.wind200,ye=M.Z.content.muted,ge=M.Z.monotone.gray,xe=t.map((function(e){return Number(pe(e))}));if(ae<10)return null;var be=ae-q.left-q.right,je=H-q.top-q.bottom,ke=be/2,Ze=0===t.length?0:Math.max.apply(Math,(0,r.Z)(t.map((function(e){var n=e.y;return(null===n||void 0===n?void 0:n.length)||0})))),_e=(0,l.useMemo)((function(){return(0,w.Z)({domain:[Math.min.apply(Math,(0,r.Z)(xe)),Math.max.apply(Math,(0,r.Z)(xe))],range:[0,be]})}),[be,xe]),Oe=Math.min.apply(Math,(0,r.Z)(t.map((function(e){var n=e.y;return Math.min.apply(Math,(0,r.Z)(P?P(n):n||[]))})))),we=Math.max.apply(Math,(0,r.Z)(t.map((function(e){var n=e.y;return Math.max.apply(Math,(0,r.Z)(P?P(n):n||[]))})))),Ie=(0,l.useMemo)((function(){return(0,w.Z)({domain:[Oe,we],nice:!0,range:[je,0]})}),[je,we,Oe]),Pe=ae>520?K?20:10:K?10:5,Ne=(0,R.K)(fe),Ee=ye,Me=Ne.map((function(e){return{stroke:e}})),Se=(0,I.Z)({domain:W||[],range:Me.map((function(e){return e.stroke}))}),Ce=(0,l.useCallback)((function(e){var n=((0,_.Z)(e)||{x:0}).x,i=_e.invert(n-q.left),r=(0,F.ry)(xe,(function(e){return i>=e})),o=t[r-1],l=t[r],a=o;l&&(i-pe(o)>pe(l)-i?a=l:(a=o,r-=1));var c=(0,O.range)(0,Ze).map((function(e){return Ie(me(a,e))})),u=c.some((function(e){return"undefined"===typeof e}));(me(a)||P&&!u)&&ee({tooltipData:B(B({},a),{},{index:r}),tooltipLeft:n,tooltipTop:c})}),[t,pe,me,P,q,ee,_e,xe,Ie]),Le={};return J||(Le.curve=Z.ZP),(0,U.jsxs)(U.Fragment,{children:[W&&(0,U.jsx)("div",{style:{marginLeft:null===q||void 0===q?void 0:q.left},children:(0,U.jsx)(y.Z,{labelFormat:function(e){return e},scale:Se,children:function(e){return(0,U.jsx)("div",{style:{display:"flex",flexDirection:S.qs.ROW},children:e.map((function(e,n){return(0,U.jsxs)(g.Z,{margin:"0 5px",onClick:function(){o&&alert("clicked: ".concat(JSON.stringify(e)))},children:[(0,U.jsx)("svg",{height:15,width:15,children:(0,U.jsx)("rect",{fill:e.value,height:15,width:15})}),(0,U.jsx)(x.Z,{align:"left",margin:"0 0 0 4px",children:(0,U.jsx)(N.ZP,{small:!0,children:e.text})})]},"legend-quantile-".concat(n))}))})}})}),(0,U.jsxs)("svg",{height:H,width:ae,children:[!n&&(0,U.jsx)(d.Z,{fill:"transparent",height:H,onMouseLeave:function(){return V()},onMouseMove:Ce,onTouchMove:Ce,onTouchStart:Ce,rx:14,width:ae-(q.left+q.right),x:q.left,y:0}),(0,U.jsxs)(v.Z,{left:q.left,top:q.top,children:[!Y&&(0,U.jsx)(m.Z,B({height:je,pointerEvents:"none",scale:_e,stroke:he,strokeDasharray:"3,3",strokeOpacity:.4,width:be},z)),(0,U.jsx)(h.Z,B({height:je,pointerEvents:"none",scale:Ie,stroke:he,strokeDasharray:"3,3",strokeOpacity:.4,width:be},z)),(0,U.jsx)("line",{stroke:he,x1:be,x2:be,y1:0,y2:je}),(0,U.jsx)(u.Z,{numTicks:Pe,scale:_e,stroke:Ee,tickFormat:function(e){return ce?ce(e):e},tickLabelProps:function(e){return{fill:ye,fontFamily:L.ry,fontSize:T.J5,textAnchor:"middle",transform:se&&"rotate(-45, ".concat(_e(e),", 0) translate(-32, 4)")}},tickStroke:Ee,top:je}),(0,U.jsx)(s.Z,{hideTicks:!0,numTicks:G,scale:Ie,stroke:Ee,tickFormat:function(e){return de?de(e):(0,A.P5)(e)},tickLabelProps:function(e){return{dx:String(e).length>4?3:0,fill:ye,fontFamily:L.ry,fontSize:T.J5,textAnchor:"end",transform:"translate(0,2.5)"}},tickStroke:Ee}),n&&n.map((function(e){var n=e[0],i=e[1];return(0,l.createElement)(b.Z,B(B({},Le),{},{aboveAreaProps:{fill:M.Z.brand.earth400,fillOpacity:.3},belowAreaProps:{fill:ve,fillOpacity:.2},clipAboveTo:0,clipBelowTo:je,data:t,id:"".concat(Math.random()),key:"".concat(n,"-").concat(i),x:function(e){return _e(pe(e))},y0:function(e){return Ie("undefined"===typeof i?Oe:me(e,i))},y1:function(e){return Ie(me(e,n))}}))})),(0,O.range)(0,Ze).map((function(e){return(0,l.createElement)(f.Z,B(B({},Le),{},{data:t.filter((function(e){return void 0!=e.y})),key:e,pointerEvents:"none",strokeWidth:ne?2:1,x:function(e){return _e(pe(e))},y:function(n){return Ie(n.y&&(e>=n.y.length?Oe:me(n,e)))}},Me[e]))}))]}),te&&(0,U.jsxs)("g",{children:[(0,U.jsx)(p.Z,{from:{x:re,y:q.top},pointerEvents:"none",stroke:C.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:re,y:je+q.top}}),le.map((function(e,n){return(0,U.jsx)("circle",{cx:re,cy:e+1+q.top,fill:Me[n].stroke,fillOpacity:.1,pointerEvents:"none",r:4,stroke:ge,strokeOpacity:.1,strokeWidth:1},n)})),le.map((function(e,n){return(0,U.jsx)("circle",{cx:re,cy:e+q.top,fill:Me[n].stroke,pointerEvents:"none",r:4,stroke:Me[n].stroke,strokeWidth:2},n)}))]})]}),te&&(0,U.jsxs)("div",{children:[le.map((function(e,n){var t=me(te,n);return n>=1&&Math.abs(le[n-1]-e)<5*D.iI&&(e+=3*D.iI),(0,U.jsxs)(j.Z,{left:re>ke?re-(0,A.Vs)($,te,n)*D.iI:re+D.iI,style:X,top:e-2*D.iI,children:[$&&$(te,n),!$&&(0,U.jsxs)(N.ZP,{center:!0,small:!0,children:[t.toFixed?t.toFixed(3):t," ",null===W||void 0===W?void 0:W[n]]})]},n)})),(0,U.jsxs)(j.Z,{left:re>ke?re-4*(0,A.Vs)(Q,te):re,style:B(B({},X),{},{transform:"translateX(-65%)"}),top:je+q.top,children:[Q&&Q(te),!Q&&(0,U.jsx)(N.ZP,{center:!0,small:!0,children:pe(te).toFixed(3)})]})]})]})}));n.Z=function(e){var n=e.areaBetweenLines,t=e.data,r=(e.events,e.height),o=e.lineLegendNames,l=e.margin,c=void 0===l?{}:l,u=e.width,s=e.xAxisLabel,d=e.xLabelFormat,f=e.yAxisLabel,p=e.yLabelFormat,m=(0,i.Z)(e,z),h=B(B({},{bottom:3*D.iI,left:5*D.iI,right:3*D.iI,top:3*D.iI}),c);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)("div",{style:{display:"flex",height:r,marginBottom:D.iI,width:"100%"},children:[f&&(0,U.jsx)(P.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,U.jsx)(E.Z,{children:(0,U.jsx)(N.ZP,{center:!0,muted:!0,small:!0,children:f})})}),(0,U.jsx)("div",{style:{height:r,width:"undefined"===typeof u?"100%":u},children:(0,U.jsx)(a.Z,{children:function(e){var i=e.width,r=e.height;return(0,U.jsx)(Y,B(B({},m),{},{areaBetweenLines:n,data:t,height:r,lineLegendNames:o,margin:h,width:i,xLabelFormat:d,yLabelFormat:p}))}})})]}),s&&(0,U.jsx)("div",{style:{paddingLeft:f?36:0,paddingTop:4},children:(0,U.jsx)(N.ZP,{center:!0,muted:!0,small:!0,children:s})})]})}},98684:function(e,n,t){"use strict";t.d(n,{K:function(){return r}});var i=t(70987),r=function(e){var n=e||i.Z,t=n.brand,r=t.earth200,o=t.earth300,l=t.earth400,a=t.energy200,c=t.energy300,u=t.energy400,s=t.fire200,d=t.fire300,f=t.fire400,p=t.water200,m=t.water300,h=t.water400,v=t.wind200,y=t.wind300,g=t.wind400,x=n.chart;return[x.backgroundPrimary,x.backgroundSecondary,x.backgroundTertiary].concat([g,h,f,u,l,y,m,d,c,o,v,p,s,a,r])}},94035:function(e,n,t){"use strict";var i=t(38626).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);n.Z=i},79221:function(e,n,t){"use strict";t.d(n,{P5:function(){return i},Vs:function(){return r}});t(81728);function i(e,n){var t=n||{},i=t.maxFractionDigits,r=t.minAmount,o=Intl.NumberFormat("en-US",{maximumFractionDigits:i||2,notation:"compact"});return"number"!==typeof e?e:e>=(r||1e4)?o.format(e):e.toString()}function r(e,n,t){var i,r;if("undefined"===typeof e||"undefined"===typeof n)return 0;var o=null===e||void 0===e||null===(i=e(n,t))||void 0===i||null===(r=i.props)||void 0===r?void 0:r.children;return(Array.isArray(o)?o:[o]).join("").length}},8454:function(e,n,t){"use strict";var i,r,o,l;t.d(n,{Q0:function(){return i},qs:function(){return r}}),function(e){e.ADD="add",e.AVERAGE="average",e.CLEAN_COLUMN_NAME="clean_column_name",e.COUNT="count",e.COUNT_DISTINCT="count_distinct",e.CUSTOM="custom",e.DIFF="diff",e.DROP_DUPLICATE="drop_duplicate",e.EXPAND_COLUMN="expand_column",e.EXPLODE="explode",e.FILTER="filter",e.FIRST="first",e.FIX_SYNTAX_ERRORS="fix_syntax_errors",e.GROUP="group",e.IMPUTE="impute",e.JOIN="join",e.LAST="last",e.LIMIT="limit",e.MAX="max",e.MEDIAN="median",e.MIN="min",e.MODE="mode",e.NORMALIZE="normalize",e.REFORMAT="reformat",e.REMOVE="remove",e.REMOVE_OUTLIERS="remove_outliers",e.SCALE="scale",e.SELECT="select",e.SHIFT_DOWN="shift_down",e.SHIFT_UP="shift_up",e.SORT="sort",e.STANDARDIZE="standardize",e.SUM="sum",e.UNION="union",e.UPDATE_TYPE="update_type",e.UPDATE_VALUE="update_value"}(i||(i={})),function(e){e.COLUMN="column",e.ROW="row"}(r||(r={})),function(e){e.NOT_APPLIED="not_applied",e.COMPLETED="completed"}(o||(o={})),function(e){e.FEATURE="feature"}(l||(l={}))},85854:function(e,n,t){"use strict";var i,r,o,l,a,c,u,s,d=t(82394),f=t(26304),p=t(26653),m=t(38626),h=t(33591),v=t(44897),y=t(95363),g=t(61896),x=t(30160),b=t(70515),j=t(38276),k=t(28598),Z=["children","condensed","inline","level","marketing","spacingBelow"];function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=(0,m.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],x.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||v.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(y.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(y.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(y.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(y.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(y.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(y.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(e){return e.strikethrough&&"\n    text-decoration: line-through;\n  "})),I=m.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||v.Z.content).active,";\n  ")})),P=m.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],w,h.media.md(i||(i=(0,p.Z)(["\n    ","\n  "])),g.aQ),h.media.lg(r||(r=(0,p.Z)(["\n    ","\n  "])),g.aQ),h.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),g.aQ)),N=m.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],w,g.MJ),E=m.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],w,h.media.xs(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.sm(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.md(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.lg(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI)),M=m.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],w,g.BL),S=m.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],w),C=m.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],w),L=m.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],w),T=m.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],w,(function(e){return 1===e.level&&"\n    ".concat(g.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(g.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),D=function(e){var n,t=e.children,i=e.condensed,r=e.inline,o=e.level,l=e.marketing,a=e.spacingBelow,c=(0,f.Z)(e,Z);r?n=T:0===Number(o)?n=P:1===Number(o)?n=l?E:N:2===Number(o)?n=M:3===Number(o)?n=S:4===Number(o)?n=C:5===Number(o)&&(n=L);var u=(0,k.jsxs)(n,O(O({},c),{},{level:o,children:[a&&(0,k.jsx)(j.Z,{mb:i?2:3,children:t}),!a&&t]}));return r?u:(0,k.jsx)(I,{children:u})};D.defaultProps={level:3,weightStyle:6},n.Z=D},82864:function(e,n,t){"use strict";t.r(n);var i=t(77837),r=t(75582),o=t(82394),l=t(38860),a=t.n(l),c=t(82684),u=t(92083),s=t.n(u),d=t(39867),f=t(55485),p=t(85854),m=t(74168),h=t(7116),v=t(93808),y=t(38276),g=t(44085),x=t(30160),b=t(35686),j=t(44897),k=t(42631),Z=t(46978),_=t(64657),O=t(38626),w=t(81728),I=t(55283),P=t(3917),N=t(86735),E=t(28598);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C="all_blocks";function L(e){var n,t=e.pipeline,i=(0,c.useContext)(O.ThemeContext),l=(0,c.useState)(null),a=l[0],u=l[1],v=t.uuid,M=b.ZP.pipelines.detail(v,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,L=(0,c.useMemo)((function(){return S(S({},null===M||void 0===M?void 0:M.pipeline),{},{uuid:v})}),[M,v]),T=b.ZP.pipeline_schedules.pipelines.list(v).data,D=(0,c.useMemo)((function(){return null===T||void 0===T?void 0:T.pipeline_schedules}),[T]),F=(0,c.useMemo)((function(){return(0,N.HK)(null===L||void 0===L?void 0:L.blocks,(function(e){return e.uuid}))||{}}),[L]),A={pipeline_uuid:v};(a||0===a)&&(A.pipeline_schedule_id=Number(a));var R=b.ZP.monitor_stats.detail("block_run_time",A),U=R.data,z=R.mutate;(0,c.useEffect)((function(){z(a)}),[z,a]);var H=((null===U||void 0===U?void 0:U.monitor_stat)||{}).stats,B=(0,c.useMemo)((function(){return(0,P.Y_)()}),[]),X=(0,c.useMemo)((function(){var e,n;return H&&(e=(0,o.Z)({},C,[]),n={},Object.entries(H).forEach((function(t){var i=(0,r.Z)(t,2),o=i[0],l=i[1].data;n[o]=[],B.forEach((function(t,i){n[o].push({x:t,y:t in l?[l[t]]:null}),e.all_blocks[i]||(e.all_blocks[i]={x:t,y:null}),t in l&&(e.all_blocks[i].y||(e.all_blocks[i].y=[]),e.all_blocks[i].y.push({blockUUID:o,runtime:l[t]}))}))}))),S(S({},e),n)}),[B,H]),Y=(0,c.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[]);return(0,E.jsx)(h.Z,{breadcrumbs:Y,monitorType:_.a_.BLOCK_RUNTIME,pipeline:L,subheader:(0,E.jsx)(f.ZP,{children:(0,E.jsxs)(g.Z,{backgroundColor:j.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(e){var n=e.target.value;"initial"!==n?(u(n),z(n)):(z(),u(null))},value:a||"initial",children:[(0,E.jsx)("option",{value:"initial",children:"All"}),D&&D.map((function(e){return(0,E.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),children:(0,E.jsx)(y.Z,{mx:2,children:(null===X||void 0===X||null===(n=X.all_blocks)||void 0===n?void 0:n.length)>0&&Object.entries(X).map((function(e,n){var t,o,l=(0,r.Z)(e,2),a=l[0],c=l[1];return(0,E.jsxs)(y.Z,{mt:2,children:[(0,E.jsxs)(f.ZP,{alignItems:"center",children:[(0,E.jsx)(y.Z,{mx:1,children:(0,E.jsx)(d.Z,{color:(0,I.qn)(null===(t=F[a])||void 0===t?void 0:t.type,{blockColor:null===(o=F[a])||void 0===o?void 0:o.color,theme:i}).accent,size:Z.ZG,square:!0})}),(0,E.jsx)(p.Z,{level:4,children:a===C?(0,w.J3)((0,w.kC)(a)):a})]}),(0,E.jsx)("div",{style:{backgroundColor:j.Z.background.chartBlock,borderRadius:"".concat(k.TR,"px"),marginTop:"8px"},children:(0,E.jsx)(m.Z,{data:c,getX:function(e){return s()(e.x).valueOf()},getY:a===C?function(e,n){var t,i;return null===e||void 0===e||null===(t=e.y)||void 0===t||null===(i=t[n])||void 0===i?void 0:i.runtime}:null,getYScaleValues:a===C?function(e){return(null===e||void 0===e?void 0:e.map((function(e){return null===e||void 0===e?void 0:e.runtime})))||[]}:null,gridProps:{stroke:"black",strokeDasharray:null,strokeOpacity:.2},height:a===C?800:200,hideGridX:!0,margin:{bottom:30,left:35,right:-1,top:10},noCurve:!0,renderXTooltipContent:function(e){return(0,E.jsx)(x.ZP,{center:!0,inverted:!0,small:!0,children:s()(e.x).format("MMM DD")})},renderYTooltipContent:function(e,n){var t,i=null===e||void 0===e||null===(t=e.y)||void 0===t?void 0:t[n];if(a===C){var r=null===i||void 0===i?void 0:i.blockUUID,o=null===i||void 0===i?void 0:i.runtime;return void 0!==o&&(0,E.jsxs)(x.ZP,{center:!0,inverted:!0,small:!0,children:[r||"",": ",o.toFixed?o.toFixed(3):o,"s"]})}return void 0!==i&&(0,E.jsxs)(x.ZP,{center:!0,inverted:!0,small:!0,children:[i.toFixed?i.toFixed(3):i,"s"]})},thickStroke:!0,xLabelFormat:function(e){return s()(e).format("MMM DD")},xLabelRotate:!1,yLabelFormat:function(e){return e%1===0?e:e.toFixed(1)}})})]},"".concat(a,"_").concat(n))}))})})}L.getInitialProps=function(){var e=(0,i.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=(0,v.Z)(L)},76017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runtime",function(){return t(82864)}])}},function(e){e.O(0,[2678,3662,1154,844,5896,2714,6285,4267,9266,9626,8264,5283,5457,9774,2888,179],(function(){return n=76017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);