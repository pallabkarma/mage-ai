(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1709],{81066:function(e,n,t){"use strict";t.d(n,{B:function(){return p}});var r=t(82394),i=t(46732),o=t(68562),c=t(72473),u=t(8059),a=t(70515),l=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,r=e.isLoading,s=e.label,f=e.menuItems,h=e.onClick,b=e.onClickCallback;return(0,l.jsx)(i.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:b,onClickOutside:b,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,l.jsx)(o.ZP,d(d({},p),{},{background:u.eW,beforeElement:(0,l.jsx)(c.Add,{size:2.5*a.iI}),loading:r,onClick:function(e){e.preventDefault(),null==h||h()},uuid:"shared/AddButton/index",children:s}))})}},46568:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(33591)),c=t(28598),u=["children","fullHeight","gutter","style"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,a=e.style,s=void 0===a?{}:a,d=(0,i.Z)(e,u),p=l({},s);return r&&(p.paddingLeft=r,p.paddingRight=p.paddingLeft),t&&(p.height="100%"),(0,c.jsx)(o.Col,l(l({},d),{},{style:p,children:n}))}},82682:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=t(82684),c=t(33591),u=t(28598),a=["children","fullHeight","gutter","justifyContent","style"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.fullHeight,r=e.gutter,l=e.justifyContent,d=e.style,p=void 0===d?{}:d,f=(0,i.Z)(e,a),h=s({},p);return r&&(h.marginLeft=-1*r,h.marginRight=h.marginLeft),t&&(h.height="100%"),(0,u.jsx)(c.Row,s(s({},f),{},{justifyContent:l,style:h,children:o.Children.map(n,(function(e,n){return e&&o.cloneElement(e,{gutter:r,key:n})}))}))}},94542:function(e,n,t){"use strict";t.d(n,{J:function(){return o},X:function(){return c}});var r=t(46568),i=t(82682),o=r.Z,c=i.Z},29241:function(e,n,t){"use strict";var r=t(9518),i=t(44897),o=r.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:3;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||i.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n  ")}));n.Z=o},96348:function(e,n,t){"use strict";t.d(n,{g:function(){return g},Z:function(){return y}});var r=t(82684),i=t(9518),o=t(44897),c=t(42631),u=t(47041),a=t(70515),l=1.5*a.iI,s=1.5*a.iI,d=i.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-13p7y8j-0"})(["border-radius:","px;overflow:hidden;width:100%;"," "," "," ",""],c.n_,(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}),(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.page,";\n    border: ").concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((e.theme||o.Z).shadow.frame,";\n  ")}),(function(e){return e.noBackground&&"\n    background-color: transparent;\n  "}),(function(e){return e.noBoxShadow&&"\n    box-shadow: none;\n  "})),p=i.default.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-1"})(["overflow:auto;border-bottom-left-radius:","px;border-bottom-right-radius:","px;"," "," "," ",""],c.n_,c.n_,u.w5,(function(e){return e.maxHeight>0&&"\n    max-height: ".concat(e.maxHeight,"px;\n  ")}),(function(e){return e.minHeight>0&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")}),(function(e){return e.scrollable&&"\n    margin-bottom: ".concat(a.iI,"px;\n    overflow-y: auto;\n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),f=i.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-13p7y8j-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,l,2*a.iI,(function(e){return"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")})),h=i.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-3"})(["padding:","px ","px;"," "," "," "," "," ",""],s,2*a.iI,(function(e){return"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")}),(function(e){return e.sameColorBorders&&"\n    border-bottom-color: ".concat((e.theme||o.Z).interactive.defaultBorder,";\n  ")}),(function(e){return e.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(e){return e.condensed&&"\n    padding-top: ".concat(9,"px;\n    padding-bottom: ").concat(9,"px;\n  ")}),(function(e){return e.secondary&&"\n    background-color: ".concat((e.theme.background||o.Z.background).row2,";\n  ")}),(function(e){return e.last&&e.noBorder&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom: none;\n  ")})),b=i.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-13p7y8j-4"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;padding:","px ","px;",""],c.n_,c.n_,l,2*a.iI,(function(e){return"\n    border-top: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")})),m=t(28598),g=h;var y=function(e){var n=e.alternating,t=e.children,i=e.footer,o=e.header,c=e.maxHeight,u=e.minHeight,a=e.noBackground,l=e.noBoxShadow,s=e.sameColorBorders,h=e.scrollable,g=e.width,y=[].concat(t).filter((function(e){return null!==e}));return(0,m.jsxs)(d,{noBackground:a,noBoxShadow:l,width:g,children:[o&&(0,m.jsx)(f,{children:o}),(0,m.jsx)(p,{maxHeight:c,minHeight:u,scrollable:h,children:r.Children.map(y,(function(e,t){return e&&r.cloneElement(e,{last:t===y.length-1,sameColorBorders:s,secondary:n&&t%2==1})}))}),i&&(0,m.jsx)(b,{children:i})]})}},17380:function(e,n,t){"use strict";t.d(n,{i:function(){return s}});t(82684);var r=t(9518),i=(t(97618),t(55485),t(48670),t(38276),t(47329)),o=t.n(i);o().node,o().node,o().node.isRequired,o().bool,o().string.isRequired;t(30160);var c=t(70987),u=t(95363),a=t(70515),l=t(42631),s=(t(28598),"tab");r.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(e){return e.containerWidthPercentage&&"\n    width: ".concat(e.containerWidthPercentage,"%;\n  ")})),r.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],l.BG,l.BG,6*a.iI,(function(e){return e.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(e){return e.active&&"\n    border-bottom: ".concat(a.cd,"px solid;\n    border-color: ").concat((e.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),r.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(e){return e.bold&&"\n    font-family: ".concat(u.nF,";\n  ")}),(function(e){return e.fullWidth&&"\n    justify-content: center;\n  "}),(function(e){return!e.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((e.theme.content||c.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}))},98941:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ge}});var r=t(77837),i=t(82394),o=t(75582),c=t(38860),u=t.n(c),a=t(83455),l=t(69419),s=t(82684),d=t(34376),p=t(92083),f=t.n(p),h=t(43406),b=t(52749),m=t(81066),g=t(53998),y=t(36065),x=t(60523),j=t(90299),v=t(76111),Z=t(94629),O=t(55485),_=t(85854),w=t(48670),P=t(97618),C=t(38276),k=t(30160),I=t(9518),T=t(44897),E=t(42631),D=t(70515),N=12.5*D.iI,S=8*D.iI,R=5*D.iI,M=3*D.iI,A=I.default.div.withConfig({displayName:"indexstyle__TileContainerStyle",componentId:"sc-c3nc3q-0"})(["padding:","px;border-radius:","px;height:","px;width:","px;"," ",""],2.5*D.iI,E.TR,N,N,(function(e){return"\n    background-color: ".concat((e.theme||T.Z).background.chartBlock,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(S,"px;\n    width: ").concat(S,"px;\n  ")})),L=t(28598);var B=function(e){var n=e.Icon,t=e.compact,r=e.label;return(0,L.jsx)(A,{compact:t,children:(0,L.jsxs)(O.ZP,{alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,L.jsx)(n,{size:t?M:R}),(0,L.jsx)(C.Z,{mb:"4px"}),(0,L.jsx)(k.ZP,{bold:!0,small:t,children:r})]})})},H=t(12468),Y=I.default.div.withConfig({displayName:"indexstyle__MetricsSummaryContainerStyle",componentId:"sc-nu65g1-0"})(["width:100%;padding:","px;border-radius:","px;",""],2*D.iI,E.n_,(function(e){return"\n    border: ".concat(E.YF,"px ").concat(E.M8," ").concat((e.theme||T.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((e.theme||T.Z).shadow.frame,";\n  ")})),F=I.default.div.withConfig({displayName:"indexstyle__MetricContainerStyle",componentId:"sc-nu65g1-1"})(["display:flex;flex:1;align-items:center;justify-content:space-between;",""],(function(e){return e.includeLeftBorder&&"\n    @media (min-width: 1200px) {\n      padding-left: 24px;\n      border-left: ".concat(E.YF,"px ").concat(E.M8," ").concat((e.theme||T.Z).interactive.defaultBorder,";\n    }\n  ")})),U=t(57653),q=t(94542),V=t(41143),G={muted:!0,size:t(72191)._k,widthFitContent:!0},X=t(81728),W=t(48277),z=t(79221),J=t(70320),K=t(86735);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ee=function(e){var n=e.pipelineRunCountByPipelineType,t=(0,J.qB)(),r=(0,s.useMemo)((function(){if(!n)return[];var e=JSON.parse(JSON.stringify(n)),t=e[U.qL.PYTHON]||{};return Object.entries(e[U.qL.PYSPARK]||{}).forEach((function(e){var n=(0,o.Z)(e,2),r=n[0],i=n[1];t[r]?t[r]+=i:t[r]=i})),e[U.qL.PYTHON]=t,delete e[U.qL.PYSPARK],(0,K.mr)(Object.entries(e).filter((function(e){var n=(0,o.Z)(e,2),t=(n[0],n[1]);return 0!==Object.keys(t).length})))}),[n]),i=(0,s.useMemo)((function(){return t?(0,L.jsx)(C.Z,{ml:"4px",children:(0,L.jsx)(H.Z,Q(Q({},G),{},{label:"Please note that these metrics are based on UTC time."}))}):null}),[t]);return(0,L.jsxs)(Y,{children:[(0,L.jsxs)(O.ZP,{alignItems:"center",children:[(0,L.jsx)(k.ZP,{bold:!0,large:!0,children:"Pipeline run metrics"}),i]}),(0,L.jsx)(C.Z,{mb:2}),(0,L.jsx)(q.X,{style:{gap:"16px"},children:r.map((function(e,n){var t=(0,o.Z)(e,2),i=t[0],c=t[1];return(0,L.jsxs)(F,{includeLeftBorder:0!==n,children:[(0,L.jsx)(B,{Icon:U.Mj[i],label:U.G7[i]}),(0,K.mr)(Object.entries(c)).map((function(e,n){var t=(0,o.Z)(e,2),r=t[0],i=t[1];return(0,L.jsx)(C.Z,{px:1,children:(0,L.jsxs)(P.Z,{flexDirection:"column",children:[(0,L.jsx)(k.ZP,{children:(0,X.kC)(r)}),(0,L.jsx)(k.ZP,{bold:!0,danger:r===V.V.FAILED&&i>0,title:(0,W.uf)(i),xlarge:!0,children:(0,z.P5)(i,{maxFractionDigits:1,minAmount:1e3})})]})},"".concat(r,"_").concat(n))})),(0,L.jsx)(C.Z,{pr:n!==r.length-1?2:0})]},"".concat(i,"_metric"))}))})]})},ne=t(29241),te=t(65956),re=t(55729),ie=t(93808),oe=t(82359),ce=t(4190),ue=t(12691),ae=t.n(ue),le=t(71180),se=t(96348),de=t(68899),pe=t(17380),fe=t(3917);function he(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?he(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var me=40*D.iI,ge=40*D.iI;var ye=function(e){var n=e.pipelineType,t=e.pipelineRuns,r=void 0===t?[]:t,i=(0,d.useRouter)(),o=(0,l.iV)(),c=(null==o?void 0:o[pe.i])||fe.vk.TODAY,u=(0,J.qB)(),a=n===U.LM,p=a?U.LM:U.G7[n],f=U.Mj[n],h=r.length,b=0===h?"":"(".concat(h,")"),m=(0,s.useMemo)((function(){return u?(0,L.jsx)(C.Z,{ml:"4px",children:(0,L.jsx)(H.Z,be(be({},G),{},{label:"The pipeline run failures are displayed in local time.",maxWidth:24*D.iI,widthFitContent:!1}))}):null}),[u]);return(0,L.jsx)(se.Z,{footer:(0,L.jsx)(O.ZP,{alignItems:"center",justifyContent:"center",children:(0,L.jsx)(ae(),{as:"/pipeline-runs?status=failed",href:"/pipeline-runs",passHref:!0,children:(0,L.jsx)(w.Z,{sameColorAsText:!0,children:"View more"})})}),header:(0,L.jsxs)(O.ZP,{alignItems:"center",children:[(0,L.jsx)(le.ZP,{beforeIcon:(0,L.jsx)(f,{size:2.5*D.iI}),compact:!0,notClickable:!0,children:(0,X.kC)(p)}),(0,L.jsx)(C.Z,{ml:2}),(0,L.jsxs)(k.ZP,{bold:!0,children:["Latest ",a?"":"".concat((0,X.wX)(p)," "),"pipeline run failures ",b]}),m]}),maxHeight:me,minHeight:ge,children:0===h?(0,L.jsx)(O.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,L.jsx)(C.Z,{px:5,py:10,children:(0,L.jsxs)(O.ZP,{alignItems:"center",flexDirection:"column",children:[(0,L.jsx)(de.Hn,{imageUrl:"".concat(i.basePath,"/images/blocks/grey_block.webp")}),(0,L.jsx)(C.Z,{mb:3}),(0,L.jsxs)(k.ZP,{large:!0,children:["No ",a?"":"".concat((0,X.wX)(p)," "),"pipeline run failures for ",fe.s8[c]]})]})})}):r.map((function(e){var n=e.created_at,t=e.id,r=e.pipeline_uuid;return(0,L.jsx)(se.g,{children:(0,L.jsxs)(O.ZP,{alignItems:"center",children:[(0,L.jsx)(ae(),{as:"/pipelines/".concat(r),href:"/pipelines/[pipeline]",passHref:!0,children:(0,L.jsx)(w.Z,{monospace:!0,sameColorAsText:!0,small:!0,children:r})}),(0,L.jsx)(k.ZP,{monospace:!0,small:!0,children:" > "}),(0,L.jsx)(ae(),{as:"/pipelines/".concat(r,"/runs/").concat(t),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,L.jsxs)(w.Z,{danger:!0,monospace:!0,sameColorAsText:!0,small:!0,children:["Run created on ",u?(0,fe.XG)(n,u):n]})})]})},"pipeline_run_".concat(t))}))})},xe=t(22271),je=t(35058),ve=t(64657),Ze=t(44425),Oe=t(75399),_e=t(23780),we=t(46684),Pe=t(61556),Ce=t(32929),ke=t(72473),Ie={Icon:ke.Smiley,label:function(){return(0,X.kC)(fe.s8[fe.vk.TODAY])},uuid:fe.vk.TODAY},Te={Icon:ke.WeekDots,label:function(){return(0,X.kC)(fe.s8[fe.vk.WEEK])},uuid:fe.vk.WEEK},Ee={Icon:ke.CalendarRounded,label:function(){return(0,X.kC)(fe.s8[fe.vk.MONTH])},uuid:fe.vk.MONTH},De={Icon:ke.NavDashboard,label:function(){return"Dashboard"},uuid:"Dashboard"},Ne=[Ie,Te,Ee],Se=t(24491),Re=t(65458),Me=t(15610),Ae=t(72619),Le=t(89538),Be=t(70026),He=t(53808);function Ye(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ye(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Ue={mt:2,mx:3},qe={refreshInterval:6e4,revalidateOnFocus:!1};function Ve(e){var n,t,r=e.tab,c=(0,s.useRef)(null),u=(0,s.useRef)(!1),p=(0,s.useRef)(null),P=((0,l.iV)(),(0,d.useRouter)()),I=(0,s.useRef)(null),E=(0,s.useMemo)((function(){return Ne.concat(De)}),[]),N=(0,s.useState)(E.find((function(e){var n;return e.uuid===(r||(null===(n=(0,He.U2)(He.Xq))||void 0===n?void 0:n.uuid))}))||Ie),S=N[0],R=N[1],M=(0,s.useState)(!1),A=M[0],B=M[1],Y=(0,s.useState)(null),F=Y[0],q=Y[1],z=null==S?void 0:S.uuid,$=(0,s.useMemo)((function(){return(0,fe.jV)(z,{isoString:!0})}),[z]),Q=(0,s.useMemo)((function(){return{group_by_pipeline_type:1,start_time:$}}),[$]),ie=(0,s.useState)(),ue=ie[0],ae=ie[1],le=(0,a.Db)((function(){var e,n;return null===(e=xe.ZP.monitor_stats)||void 0===e?void 0:e.detailAsync(Pe.h.PIPELINE_RUN_COUNT,Q,{signal:null==c||null===(n=c.current)||void 0===n?void 0:n.signal})}),{onSuccess:function(e){return(0,Ae.wD)(e,{callback:function(e){var n=e.monitor_stat.stats;ae(n)}})}}),se=(0,o.Z)(le,2),he=se[0],be=se[1].isLoading,me=(0,s.useCallback)((function(e){var n;null!==(null==c?void 0:c.current)&&(null==c||null===(n=c.current)||void 0===n||n.abort());c.current=new AbortController,R((function(n){var t="function"==typeof e?e(n):e;return(null==n?void 0:n.uuid)!==(null==t?void 0:t.uuid)&&((0,Me.u)((0,i.Z)({},pe.i,null==t?void 0:t.uuid),{replaceParams:!0}),he()),(0,He.t8)(He.Xq,t),t}))}),[he]);(0,s.useEffect)((function(){var e;(null!=u&&u.current||(u.current=!0,he()),r)||(0,Me.u)((0,i.Z)({},pe.i,S?null==S?void 0:S.uuid:null==E||null===(e=E[0])||void 0===e?void 0:e.uuid),{pushHistory:!1})}),[E,he,S,r]);var ge,ke=xe.ZP.pipeline_runs.list({_limit:50,include_pipeline_type:1,"order_by[]":"created_at desc",start_timestamp:(0,fe.A5)($),status:V.V.FAILED},Fe({},qe)).data,Te=(0,s.useMemo)((function(){return((null==ke?void 0:ke.pipeline_runs)||[]).filter((function(e){return null!==e.pipeline_type}))}),[null==ke?void 0:ke.pipeline_runs]),Ee=(0,s.useMemo)((function(){return(0,K.vM)(Te,(function(e){return e.pipeline_type}))}),[Te]),Ye=Ee.integration,Ve=void 0===Ye?[]:Ye,Ge=Ee.python,Xe=void 0===Ge?[]:Ge,We=Ee.streaming,ze=void 0===We?[]:We,Je=(0,s.useMemo)((function(){return(0,fe.Y_)(fe.yD[z]+1)}),[z]),Ke=(0,s.useMemo)((function(){return(0,Se.i)(ue,Je)}),[ue,Je]),$e=Ke.pipelineRunCountByPipelineType,Qe=Ke.totalPipelineRunCount,en=Ke.ungroupedPipelineRunData,nn=(0,s.useMemo)((function(){return(0,fe.Ro)(fe.yD[z],{endDateOnly:z===fe.vk.TODAY})}),[z]),tn=(ge=function(e){return P.push("/pipelines/[pipeline]/edit","/pipelines/".concat(e,"/edit"))},(0,a.Db)(xe.ZP.pipelines.useCreate(),{onSuccess:function(e){return(0,Ae.wD)(e,{callback:function(e){var n=e.pipeline.uuid;null==ge||ge(n)},onErrorCallback:function(e,n){return q({errors:n,response:e})}})}})),rn=(0,o.Z)(tn,2),on=rn[0],cn=rn[1].isLoading,un=xe.ZP.projects.list(),an=un.data,ln=un.mutate,sn=(0,s.useMemo)((function(){var e;return null==an||null===(e=an.projects)||void 0===e?void 0:e[0]}),[an]),dn=(0,s.useMemo)((function(){var e;return(0,J.hY)(null==sn||null===(e=sn.features)||void 0===e?void 0:e[oe.d.LOCAL_TIMEZONE])}),[null==sn?void 0:sn.features]),pn=(0,Le.dd)((function(e){var n=e.pipelineType;return(0,L.jsx)(v.Z,{onClose:bn,onSave:function(e){var t=e.name,r=e.description,i=e.tags;on({pipeline:{description:r,name:t,tags:i,type:n}})},pipelineType:n})}),{},[on],{background:!0,disableEscape:!0,uuid:"overview/create_pipeline"}),fn=(0,o.Z)(pn,2),hn=fn[0],bn=fn[1],mn=(0,Le.dd)((function(){return(0,L.jsx)(_e.BC,{children:(0,L.jsx)(x.Z,{contained:!0,onClickCustomTemplate:function(e){on({pipeline:{custom_template_uuid:null==e?void 0:e.template_uuid,name:(0,X.Y6)()}}).then((function(){xn()}))},showBreadcrumbs:!0,tabs:[Ce.A2]})})}),{},[],{background:!0,uuid:"browse_templates"}),gn=(0,o.Z)(mn,2),yn=gn[0],xn=gn[1],jn=(0,Le.dd)((function(){return(0,L.jsx)(Be.Z,{onCancel:On})}),{},[,],{background:!0,uuid:"import_pipeline"}),vn=(0,o.Z)(jn,2),Zn=vn[0],On=vn[1],_n=(0,Le.dd)((function(e){var n=e.cancelButtonText,t=(e.header,e.onCancel),r=e.onSaveSuccess;return(0,L.jsx)(_e.BC,{children:(0,L.jsx)(re.Z,{cancelButtonText:n,contained:!0,header:(0,L.jsx)(C.Z,{mb:D.HN,children:(0,L.jsxs)(te.Z,{children:[(0,L.jsx)(k.ZP,{warning:!0,children:"You need to add an OpenAI API key to your project before you can generate pipelines using AI."}),(0,L.jsx)(C.Z,{mt:1,children:(0,L.jsxs)(k.ZP,{warning:!0,children:["Read"," ",(0,L.jsx)(w.Z,{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",openNewWindow:!0,children:"OpenAI’s documentation"})," ","to get your API key."]})})]})}),onCancel:function(){null==t||t(),Cn()},onSaveSuccess:function(e){ln(),Cn(),null==r||r(e)}})})}),{},[ln],{background:!0,uuid:"configure_project"}),wn=(0,o.Z)(_n,2),Pn=wn[0],Cn=wn[1],kn=(0,Le.dd)((function(){return(0,L.jsx)(_e.BC,{children:(0,L.jsx)(b.Z,{createPipeline:on,isLoading:cn,onClose:En})})}),{},[on,cn],{background:!0,disableClickOutside:!0,disableCloseButton:!0,uuid:"AI_modal"}),In=(0,o.Z)(kn,2),Tn=In[0],En=In[1],Dn=(0,a.Db)((function(e){return xe.ZP.pipelines.execution_frameworks.useCreate(h.q6.RAG)(e)}),{onSuccess:function(e){return(0,Ae.wD)(e,{callback:function(e){var n=e.pipeline;P.push("/v2/pipelines/".concat((0,l.wL)(n.uuid),"/").concat((0,l.wL)(n.execution_framework)))},onErrorCallback:function(e,n){return q({errors:n,response:e})}})}}),Nn=(0,o.Z)(Dn,1)[0],Sn=(0,s.useMemo)((function(){return(0,Re.d)(on,{createRAG:Nn,showAIModal:function(){null!=sn&&sn.openai_api_key?Tn():Pn({onSaveSuccess:function(){Tn()}})},showBrowseTemplates:yn,showCreatePipelineModal:hn,showImportPipelineModal:Zn})}),[on,Nn,sn,Tn,yn,Pn,hn,Zn]),Rn=(0,s.useMemo)((function(){return(0,L.jsx)(m.Z,{addButtonMenuOpen:A,addButtonMenuRef:I,isLoading:cn,label:"New pipeline",menuItems:Sn,onClick:function(){return B((function(e){return!e}))},onClickCallback:function(){return B(!1)}})}),[A,cn,Sn]),Mn=(0,s.useMemo)((function(){return dn?(0,L.jsx)(C.Z,{ml:"4px",children:(0,L.jsx)(H.Z,Fe(Fe({},G),{},{label:"Please note that these counts are based on UTC time."}))}):null}),[dn]),An=(0,s.useMemo)((function(){var e,n,t,r,o,c,u="Pipelines",a=(0,X.kE)("".concat(u,"_overview_dashboard_").concat((0,X.Lo)())),l="Trigger active status",s=(0,X.kE)("".concat(l,"_overview_dashboard_").concat((0,X.Lo)())),d="Pipeline run status",p=(0,X.kE)("".concat(d,"_overview_dashboard_").concat((0,X.Lo)())),f="Pipeline runs daily",h=(0,X.kE)("".concat(f,"_overview_dashboard_").concat((0,X.Lo)())),b="Completed pipeline runs daily",m=(0,X.kE)("".concat(b,"_overview_dashboard_").concat((0,X.Lo)())),g="Failed pipeline runs daily",y=(0,X.kE)("".concat(g,"_overview_dashboard_").concat((0,X.Lo)())),x="Running pipelines",j=(0,X.kE)("".concat(x,"_overview_dashboard_").concat((0,X.Lo)())),v={type:Oe.XO.PIPELINE_SCHEDULES},Z={type:Oe.XO.PIPELINE_RUNS},O={configuration:(e={},(0,i.Z)(e,je.eN,["execution_date"]),(0,i.Z)(e,je.bE,[{aggregation:je.os.COUNT_DISTINCT,column:"id"}]),(0,i.Z)(e,je.Yg,je.aE.DAY),(0,i.Z)(e,"chart_type",je.oV.TIME_SERIES_LINE_CHART),e),data_source:Z,type:Ze.tf.CHART};return{blocks:(c={},(0,i.Z)(c,a,{configuration:(n={},(0,i.Z)(n,je.eN,["type"]),(0,i.Z)(n,je.bE,[{aggregation:je.os.COUNT_DISTINCT,column:"uuid"}]),(0,i.Z)(n,je.$1,je.MP.DESCENDING),(0,i.Z)(n,"chart_style",je.JT.HORIZONTAL),(0,i.Z)(n,"chart_type",je.oV.BAR_CHART),n),data_source:{type:Oe.XO.PIPELINES},name:u,type:Ze.tf.CHART,uuid:a}),(0,i.Z)(c,s,{configuration:(t={},(0,i.Z)(t,je.eN,["status"]),(0,i.Z)(t,je.bE,[{aggregation:je.os.COUNT_DISTINCT,column:"id"}]),(0,i.Z)(t,je.$1,je.MP.DESCENDING),(0,i.Z)(t,"chart_type",je.oV.BAR_CHART),t),data_source:v,name:l,type:Ze.tf.CHART,uuid:s}),(0,i.Z)(c,p,{configuration:(r={},(0,i.Z)(r,je.eN,["status"]),(0,i.Z)(r,je.bE,[{aggregation:je.os.COUNT_DISTINCT,column:"id"}]),(0,i.Z)(r,je.$1,je.MP.DESCENDING),(0,i.Z)(r,"chart_style",je.JT.HORIZONTAL),(0,i.Z)(r,"chart_type",je.oV.BAR_CHART),r),data_source:Z,name:d,type:Ze.tf.CHART,uuid:p}),(0,i.Z)(c,h,Fe(Fe({},O),{},{name:f,uuid:h})),(0,i.Z)(c,m,Fe(Fe({},O),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(V.V.COMPLETED,"']\n"),name:b,uuid:m})),(0,i.Z)(c,y,Fe(Fe({},O),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(V.V.FAILED,"']\n"),name:g,uuid:y})),(0,i.Z)(c,j,{configuration:(o={},(0,i.Z)(o,je.eN,["backfill_id","completed_at","created_at","execution_date","executor_type","id","pipeline_schedule_id","pipeline_uuid","started_at","status"]),(0,i.Z)(o,"chart_type",je.oV.TABLE),o),content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(V.V.RUNNING,"']\n"),data_source:Z,name:x,type:Ze.tf.CHART,uuid:j}),c),layout:[[{block_uuid:a,width:1},{block_uuid:s,width:1}],[{block_uuid:p,width:1},{block_uuid:h,width:2}],[{block_uuid:m,width:1},{block_uuid:y,width:1}],[{block_uuid:j,width:1}]]}}),[]);return(0,L.jsxs)(Z.Z,{errors:F,setErrors:q,title:"Overview",uuid:"overview/index",children:[(0,L.jsx)(ne.Z,{backgroundColor:T.Z.background.panel,ref:p,children:(0,L.jsx)(C.Z,{py:2,children:(0,L.jsxs)(O.ZP,{alignItems:"center",children:[(0,L.jsx)(C.Z,{ml:3,children:Rn}),(0,L.jsx)(j.Z,{onClickTab:function(e){var n=e.uuid;me((function(){return E.find((function(e){return n===e.uuid}))}))},regularSizeText:!0,selectedTabUUID:z,tabs:E})]})})}),De.uuid===(null==S?void 0:S.uuid)&&(0,L.jsx)(y.Z,{leftOffset:de.k1-1,pageBlockLayoutTemplate:An,topOffset:we.Mz+(null==p||null===(n=p.current)||void 0===n||null===(t=n.getBoundingClientRect())||void 0===t?void 0:t.height),uuid:"overview/dashboard"}),De.uuid!==(null==S?void 0:S.uuid)&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(C.Z,{mx:3,my:2,children:[(0,L.jsxs)(_.Z,{level:4,children:[z===fe.vk.TODAY&&"".concat((0,X.kC)(fe.vk.TODAY)," (UTC): ").concat(nn),z!==fe.vk.TODAY&&"".concat((0,X.kC)(fe.s8[z])," (UTC): ").concat(nn)]}),(0,L.jsx)(C.Z,{mt:2,children:be?(0,L.jsx)(C.Z,{mx:2,my:11,children:(0,L.jsx)(ce.Z,{inverted:!0})}):(0,L.jsx)(ee,{pipelineRunCountByPipelineType:$e})}),(0,L.jsxs)(C.Z,{mt:2,children:[(0,L.jsx)(C.Z,{ml:2,children:(0,L.jsxs)(O.ZP,{alignItems:"center",children:[(0,L.jsxs)(k.ZP,{bold:!0,large:!0,children:[be?"--":(0,W.uf)(Qe)," total pipeline runs"]}),Mn]})}),(0,L.jsx)(C.Z,{mt:1,children:(0,L.jsx)(g.Z,{backgroundColor:T.Z.background.panel,colors:ve.NU,data:en,getXValue:function(e){return e.date},height:200,keys:ve.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:ve.CD,xLabelFormat:function(e){return f()(e).format("MMM DD")}})})]})]}),(0,L.jsx)(C.Z,Fe(Fe({},Ue),{},{children:(0,L.jsxs)(O.ZP,{alignItems:"center",justifyContent:"center",children:[(0,L.jsx)(ye,{pipelineRuns:Te,pipelineType:U.LM}),(0,L.jsx)(C.Z,{ml:2}),(0,L.jsx)(ye,{pipelineRuns:Xe,pipelineType:U.qL.PYTHON})]})})),(0,L.jsx)(C.Z,Fe(Fe({},Ue),{},{children:(0,L.jsxs)(O.ZP,{alignItems:"center",justifyContent:"center",children:[(0,L.jsx)(ye,{pipelineRuns:Ve,pipelineType:U.qL.INTEGRATION}),(0,L.jsx)(C.Z,{ml:2}),(0,L.jsx)(ye,{pipelineRuns:ze,pipelineType:U.qL.STREAMING})]})})),(0,L.jsx)(C.Z,{mb:2})]})]})}Ve.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{tab:null!=n&&null!==(t=n.query)&&void 0!==t&&t.tab?null==n||null===(r=n.query)||void 0===r?void 0:r.tab:null});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Ge=(0,ie.Z)(Ve)},56655:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return t(98941)}])}},function(e){e.O(0,[3662,125,1799,2714,140,2996,1557,8095,4241,4168,8023,523,6065,3548,5627,5831,9774,2888,179],(function(){return n=56655,e(e.s=n);var n}));var n=e.O();_N_E=n}]);