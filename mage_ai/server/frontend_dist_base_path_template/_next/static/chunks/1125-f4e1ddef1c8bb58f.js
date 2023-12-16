"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1125],{65557:function(e,n,t){var i=t(21831),o=t(75582),r=t(82684),l=t(80329);n.Z=function(e){var n=e.children,t=e.uuid,c=e.uuids,u=void 0===c?[]:c,a=(0,l.j)("apiReloads"),s=(0,o.Z)(a,1)[0],d=(0,i.Z)(u);t&&d.push(t);var f=d.map((function(e){return String(s[e])||"-"})).join("_");return r.cloneElement(n,{key:f})}},29618:function(e,n,t){t.d(n,{Z:function(){return L}});var i=t(82394),o=t(75582),r=t(17717),l=t(82684),c=t(80329),u=t(69864),a=t(40761),s=t(44425),d=t(71180),f=t(38626),p=t(97618),v=t(55485),h=t(28598),b=f.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),m=f.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]),g=function(e){var n=e.children,t=e.divider,i=l.Children.toArray(n).length;return(0,h.jsx)(b,{children:(0,h.jsx)(v.ZP,{children:l.Children.map(n,(function(e,n){return e&&(0,h.jsxs)(p.Z,{children:[n>=1&&t&&(0,h.jsx)(m,{}),l.cloneElement(e,{borderRadiusLeft:i>=2&&0===n,borderRadiusRight:i>=2&&n===i-1,halfPaddingLeft:i>=2&&0!==n,halfPaddingRight:i>=2&&n!==i-1,noBorder:i>=2&&n>0&&n<i-1,noBorderRight:i>=2&&n!==i-1})]},"button-group-child-".concat(n))}))})})},y=t(75810),j=t(89706),x=t(93369),P=t(57653),C=t(38276),k=t(35686),Z=t(39643),O=t(11498),w=t(85385),S=t(80330),_=t(86735),I=t(53005),E=t(81728),T=t(72619),D=t(42041),R=t(44688);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L=function(e){var n=e.active,t=e.addNewBlock,f=e.disableRefreshWarning,p=e.fetchPipeline,b=e.fetchVariables,m=e.filePath,N=e.hideHeaderButtons,L=e.onContentChange,U=e.onUpdateFileSuccess,A=e.openSidekickView,M=e.pipeline,H=e.saveFile,z=e.selectedFilePath,B=e.sendTerminalMessage,V=e.setDisableShortcuts,G=e.setErrors,X=e.setFilesTouched,W=e.setSelectedBlock,q=(0,c.j)("apiReloads"),J=(0,o.Z)(q,2)[1],K=(0,l.useState)(null),Q=K[0],Y=K[1],$=(0,l.useState)(!1),ee=$[0],ne=($[1],(0,l.useRef)(null)),te=(0,l.useMemo)((function(){return new a.Z}),[]),ie=(0,l.useMemo)((function(){return{api_key:O.lG,token:te.decodedToken.token}}),[te]),oe=k.ZP.statuses.list().data,re=(0,l.useMemo)((function(){var e,n;return null===oe||void 0===oe||null===(e=oe.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.repo_path}),[oe]),le=k.ZP.file_contents.detail(m).data;(0,l.useEffect)((function(){null!==le&&void 0!==le&&le.file_content?Y(le.file_content):null!==le&&void 0!==le&&le.error&&(0,T.h$)(le,{onErrorCallback:function(e,n){return G({errors:n,response:e})}})}),[le,G]);var ce=(0,l.useState)(null===Q||void 0===Q?void 0:Q.content),ue=ce[0],ae=ce[1],se=(0,l.useCallback)((function(e){ae(e),L&&(null===L||void 0===L||L(e))}),[L]),de=(0,l.useState)(!1),fe=de[0],pe=de[1];(0,l.useEffect)((function(){n&&V&&(null===V||void 0===V||V(!0))}),[n,V]),(0,l.useEffect)((function(){var e;z&&(null===ne||void 0===ne||null===(e=ne.current)||void 0===e||e.scrollIntoView())}),[z]);var ve=(0,u.Db)(k.ZP.file_contents.useUpdate((null===Q||void 0===Q?void 0:Q.path)&&encodeURIComponent(null===Q||void 0===Q?void 0:Q.path)),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(e){var n=e.file_content;J((function(e){return F(F({},e),{},(0,i.Z)({},"FileVersions/".concat(null===Q||void 0===Q?void 0:Q.path),Number(new Date)))})),U&&(null===U||void 0===U||U(n))},onErrorCallback:function(e,n){return null===G||void 0===G?void 0:G({errors:n,response:e})}})}}),he=(0,o.Z)(ve,1)[0],be=(0,l.useCallback)((function(e,n){if(H)return H(e,n);he({file_content:F(F({},n),{},{content:e})}).then((function(){decodeURIComponent(m).split(r.sep).pop()===j.dT.METADATA_YAML&&b&&(null===b||void 0===b||b())})),X((function(e){return F(F({},e),{},(0,i.Z)({},null===n||void 0===n?void 0:n.path,!1))})),pe(!1)}),[b,m,H,X,he]),me=(0,l.useMemo)((function(){return(0,S.lU)()}),[]),ge=(0,l.useMemo)((function(){var e,n,t,i;return null===(null===Q||void 0===Q||null===(e=Q.path)||void 0===e?void 0:e.match(me))?j.Lu.TXT:null===Q||void 0===Q||null===(n=Q.path)||void 0===n||null===(t=n.match(me))||void 0===t||null===(i=t[0])||void 0===i?void 0:i.split(".")[1]}),[me,Q]),ye=(0,l.useMemo)((function(){if(null!==Q&&void 0!==Q&&Q.path)return(0,h.jsx)(y.Z,{autoHeight:!0,language:j.nB[ge],onChange:function(e){se(e),X((function(e){return F(F({},e),{},(0,i.Z)({},null===Q||void 0===Q?void 0:Q.path,!0))})),pe(!0)},onSave:function(e){be(e,Q)},padding:10,selected:!0,textareaFocused:!0,value:(0,E.Pb)(null===Q||void 0===Q?void 0:Q.content)?JSON.stringify(JSON.parse(null===Q||void 0===Q?void 0:Q.content),null,2):null===Q||void 0===Q?void 0:Q.content,width:"100%"})}),[Q,ge,be,se,X]),je=null!==M&&void 0!==M&&M.blocks?(0,_.sE)(null===M||void 0===M?void 0:M.blocks,(function(e){var n=e.type;return s.tf.DATA_EXPORTER===n})):null,xe=(0,u.Db)(k.ZP.blocks.pipelines.useUpdate(null===M||void 0===M?void 0:M.uuid,null===je||void 0===je?void 0:je.uuid),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(){null===p||void 0===p||p()}})}}),Pe=(0,o.Z)(xe,1)[0],Ce=t&&M&&(ge===j.Lu.PY||ge===j.Lu.SQL||(ge===j.Lu.YAML||ge===j.Lu.R)&&(0,I.V3)(Q,null===Q||void 0===Q?void 0:Q.path))&&(0,S.ck)(Q.path.split(r.sep))!==s.tf.SCRATCHPAD&&(0,I.lr)(Q)&&(0,h.jsx)(d.ZP,{onClick:function(){var e=(null===M||void 0===M?void 0:M.type)===P.qL.INTEGRATION,n=(0,S.TU)(Q,re,M);t(n,(function(n){e&&je&&Pe({block:F(F({},je),{},{upstream_blocks:[n.uuid]})}),null===W||void 0===W||W(n)}))},primary:!0,children:"Add to current pipeline"}),ke=B&&(0,h.jsx)(C.Z,{m:2,children:(0,h.jsx)(x.ZP,{disabled:!re,inline:!0,loading:ee,onClick:function(){null===A||void 0===A||A(w.cH.TERMINAL),null===B||void 0===B||B(JSON.stringify(F(F({},ie),{},{command:["stdin","pip install -r ".concat(re,"/requirements.txt\r")]})))},title:re?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),Ze="FileEditor/".concat(null===Q||void 0===Q?void 0:Q.path),Oe=(0,R.y)(),we=Oe.registerOnKeyDown,Se=Oe.unregisterOnKeyDown;return(0,l.useEffect)((function(){return function(){Se(Ze)}}),[Se,Ze]),we(Ze,(function(e,t){if(n&&!f)if((0,D.y)([Z.zX,Z.Um],t)||(0,D.y)([Z.PQ,Z.Um],t))e.preventDefault(),be(ue,Q);else if(fe&&(0,D.y)([Z.zX,Z.hS],t)){e.preventDefault();var i="".concat(Q.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(i)&&location.reload()}}),[n,ue,f,Q,be,fe]),(0,h.jsxs)("div",{ref:ne,children:[!N&&(0,h.jsx)(C.Z,{p:2,children:(0,h.jsxs)(v.ZP,{justifyContent:"space-between",children:[(0,h.jsxs)(g,{children:[Ce,(0,h.jsx)(d.ZP,{disabled:!ue,onClick:function(e){e.preventDefault(),be(ue,Q)},title:ue?null:"No changes have been made to this file.",children:"Save file content"})]}),A&&(0,h.jsx)(g,{children:(0,h.jsx)(d.ZP,{compact:!0,onClick:function(){A(w.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),ye,m===j.dT.REQS_TXT&&ke]})}},90758:function(e,n,t){t.d(n,{Z:function(){return Z}});var i=t(82394),o=t(26304),r=t(82684),l=t(38626),c=t(39867),u=t(55485),a=t(48670),s=t(38276),d=t(30160),f=t(12468),p=t(44897),v=t(72473),h=t(97133),b=t(70515),m=t(15610),g=t(3314),y=t(28598);var j=function(e){var n=e.filePath,t=e.filesTouched,i=void 0===t?{}:t,o=e.isLast,l=e.onClickTab,j=e.onClickTabClose,x=e.renderTabTitle,P=e.savePipelineContent,C=e.selected,k=e.themeContext,Z=(0,r.useState)(!1),O=Z[0],w=Z[1];return(0,y.jsx)(u.ZP,{flexDirection:"column",fullHeight:!0,onClick:function(e){e.preventDefault(),C||(l?l(n):(null===P||void 0===P||P(),(0,m.u)({file_path:encodeURIComponent(n)})))},onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)},children:(0,y.jsx)(h.Gb,{last:o,selected:C,children:(0,y.jsxs)(u.ZP,{alignItems:"center",fullHeight:!0,children:[(0,y.jsx)(f.Z,{appearAbove:!0,appearBefore:!0,label:n,size:null,widthFitContent:!0,children:(0,y.jsxs)(u.ZP,{alignItems:"center",fullHeight:!0,children:[!i[n]&&(0,y.jsx)(v.iU,{muted:!C,size:1.5*b.iI}),i[n]&&(0,y.jsx)(f.Z,{label:"Unsaved changes",size:null,widthFitContent:!0,children:(0,y.jsx)("div",{style:{padding:1},children:(0,y.jsx)(c.Z,{borderColor:(k||p.Z).borders.danger,size:1.25*b.iI})})}),(0,y.jsx)(s.Z,{mr:1}),(0,y.jsx)(d.ZP,{muted:!C,children:x?x(n):n})]})}),(0,y.jsx)(s.Z,{mr:2}),(0,y.jsx)(f.Z,{label:"Close",size:null,widthFitContent:!0,children:(0,y.jsxs)(a.Z,{autoHeight:!0,block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(e){(0,g.j)(e),null===j||void 0===j||j(n)},preventDefault:!0,children:[(O||C)&&(0,y.jsx)(v.x8,{muted:!C,size:1.25*b.iI}),!O&&!C&&(0,y.jsx)("div",{style:{width:1.25*b.iI}})]})})]})})})},x=t(86735),P=["filePaths","isSelectedFilePath","onClickTabClose","selectedFilePath"];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=function(e){var n=e.filePaths,t=e.isSelectedFilePath,i=e.onClickTabClose,c=e.selectedFilePath,a=(0,o.Z)(e,P),s=(0,r.useContext)(l.ThemeContext),d=(0,r.useMemo)((function(){return n.map((function(e){return decodeURIComponent(e)}))}),[n]),f=(0,r.useMemo)((function(){return null===d||void 0===d?void 0:d.length}),[d]);return(0,y.jsx)(u.ZP,{alignItems:"center",justifyContent:"flex-start",children:null===d||void 0===d?void 0:d.map((function(e,n){var o=t?t(e,c):c===encodeURIComponent(e);return(0,r.createElement)(j,k(k({},a),{},{filePath:e,isLast:n===f-1,key:e,onClickTabClose:function(e){if(i)i(e);else{var n=(0,x.Od)(d,(function(n){return n===e})).map((function(e){return encodeURIComponent(e)}));(0,m.u)({file_path:n[n.length-1]||null,"file_paths[]":n},{pushHistory:!0})}},selected:o,themeContext:s}))}))})}},97133:function(e,n,t){t.d(n,{Gb:function(){return f},fm:function(){return s},lO:function(){return a},rK:function(){return d},zn:function(){return u}});var i=t(38626),o=t(44897),r=t(2842),l=t(70515),c=t(47041),u=300,a=i.default.div.withConfig({displayName:"indexstyle__PipelineContainerStyle",componentId:"sc-1sv9513-0"})([".pipeline-detail-enter-active{opacity:1;transition:opacity ","ms linear;}.pipeline-detail-enter-done{opacity:0;transition:opacity ","ms linear;}"],u,u),s=i.default.div.withConfig({displayName:"indexstyle__OverlayStyle",componentId:"sc-1sv9513-1"})(["height:100vh;opacity:1;position:fixed;width:100vw;z-index:9999;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeArea,";\n  ")})),d=i.default.div.withConfig({displayName:"indexstyle__PipelineHeaderStyle",componentId:"sc-1sv9513-2"})(["height:","px;position:sticky;top:","px;width:100%;z-index:5;"," "," "," ",""],r.Wi,r.Wi,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||o.Z.borders).medium,";\n  ")}),(function(e){return e.relativePosition&&"\n    position: relative;\n  "}),(function(e){return e.secondary&&"\n    height: ".concat(37,"px;\n    top: ").concat(r.Wi,"px;\n    overflow-x: auto;\n    z-index: 3;\n  ")}),(0,c.y$)()),f=i.default.div.withConfig({displayName:"indexstyle__FileTabStyle",componentId:"sc-1sv9513-3"})(["border-right:1px solid transparent;height:100%;padding:","px ","px;"," "," ",""],l.iI,l.cd*l.iI,(function(e){return"\n    &:hover {\n      cursor: default;\n\n      p {\n        color: ".concat((e.theme.content||o.Z.content).active," !important;\n        cursor: default;\n      }\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||o.Z.interactive).hoverBackground,";\n  ")}),(function(e){return!e.selected&&!e.last&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).light," !important;\n  ")}));i.default.div.withConfig({displayName:"indexstyle__HeaderViewOptionsStyle",componentId:"sc-1sv9513-4"})(["left:50%;position:absolute;transform:translateX(-50%);"])},80329:function(e,n,t){t.d(n,{j:function(){return i}});var i=(0,t(44152).r)({apiReloads:{}}).useGlobalState}}]);