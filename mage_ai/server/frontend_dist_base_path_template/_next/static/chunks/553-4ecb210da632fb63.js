"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{46978:function(e,n,t){t.d(n,{Cl:function(){return u},Nk:function(){return c},ZG:function(){return l}});var o=t(38626),r=t(44897),i=t(70515),l=1.5*i.iI,u=1*l+i.iI/2,c=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||r.Z.interactive).hoverBackground,";\n    ")}))},10553:function(e,n,t){t.d(n,{Z:function(){return me}});var o=t(82394),r=t(75582),i=t(26304),l=t(82684),u=t(38626),c=t(69864),a=t(44425),d=t(70374),s=t(39867),f=t(89706),v=t(97618),p=t(30160),h=t(72473),m=t(46978),b=t(70515),g=t(85385),j=t(53808),y=t(55283),C=t(53005),w=t(86735),k=t(81728),x=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z="default_repo";var P=function e(n){var t=n.allowEmptyFolders,o=n.allowSelectingFolders,r=n.containerRef,i=n.disableContextMenu,u=n.file,c=n.isFileDisabled,d=n.level,O=n.onClickFile,P=n.onClickFolder,F=n.onSelectBlockFile,E=n.onlyShowChildren,_=n.openFile,I=n.openPipeline,S=n.openSidekickView,R=n.pipelineBlockUuids,L=n.renderAfterContent,T=n.selectFile,N=n.setContextItem,M=n.setCoordinates,A=n.setDraggingFile,U=n.setSelectedFile,B=n.theme,z=n.timeout,Y=n.uncollapsed,q=n.useRootFolder,$=u.children,G=u.disabled,Q=u.name,W=u.parent;Q||t||(u.name=Z);var H,X=q?(0,C.a9)(u):(0,C.jN)(u),J=(null===W||void 0===W?void 0:W.name)===f.oy,V=(0,l.useMemo)((function(){return $?(0,w.YC)($,(function(e){return e.children?0:1})):$}),[$]),K=c?c(X,V):G,ee=c?c(X,V):G,ne="".concat(d,"/").concat(Q),te=!!(Array.isArray(V)&&(null===V||void 0===V?void 0:V.length)>0)&&(0,j.U2)(ne,d>1),oe=(0,l.useState)("undefined"===typeof Y?te:!Y),re=oe[0],ie=oe[1],le=h.iU;1===d&&Q===f.oy?le=h.B_:Q===f.PF?le=h.er:V?le=h.gt:!Q&&t&&(le=h.mH),V&&a.$W.includes((0,k.C5)(Q))&&(0,k.C5)(Q)!==a.tf.CHART&&(H=(0,y.qn)((0,k.C5)(Q),{theme:B}).accent);var ue=(0,l.useMemo)((function(){return null===V||void 0===V?void 0:V.map((function(n){return(0,x.jsx)(e,{allowEmptyFolders:t,allowSelectingFolders:o,containerRef:r,disableContextMenu:i,file:D(D({},n),{},{parent:u}),isFileDisabled:c,level:E?d:d+1,onClickFile:O,onClickFolder:P,onSelectBlockFile:F,openFile:_,openPipeline:I,openSidekickView:S,pipelineBlockUuids:R,renderAfterContent:L,selectFile:T,setContextItem:N,setCoordinates:M,setDraggingFile:A,setSelectedFile:U,theme:B,timeout:z,uncollapsed:Y,useRootFolder:q},"".concat(ne,"/").concat((null===n||void 0===n?void 0:n.name)||Z))}))}),[t,o,V,r,i,u,c,d,O,P,F,E,_,I,S,R,L,T,N,M,A,U,B,z,Y,q,ne]),ce=(0,l.useMemo)((function(){var e=[];return(0,w.w6)(d).forEach((function(n,t){var o,r=m.Cl-1;e.push((0,x.jsx)("div",{style:{borderLeft:"1px solid ".concat(null===B||void 0===B||null===(o=B.content)||void 0===o?void 0:o.disabled),height:22,marginLeft:r/2-2,paddingLeft:r/2+2}},"line-".concat(ne,"-").concat(t)))})),e}),[d,B,ne]);return(0,x.jsxs)(x.Fragment,{children:[!E&&(0,x.jsxs)("div",{className:"row",onClick:function(e){if(e.preventDefault(),!ee){if((null===W||void 0===W?void 0:W.name)===f.PF){null===S||void 0===S||S(g.cH.CHARTS);var n=(0,C.lr)(u);n&&(null===F||void 0===F||F(n.uuid,n.type,(0,C.jN)(u)))}var t=(0,C.V3)(u);if(V)o?T(X):ie((function(e){return(0,j.t8)(ne,!e),!e})),null===P||void 0===P||P(X);else if(O)O(X);else if(t)null===F||void 0===F||F(t.uuid,t.type,(0,C.jN)(u),{file:u,path:X});else if(Q.match(f.xF))null===_||void 0===_||_(X);else{var r=(0,C.lr)(u);r&&(null===F||void 0===F||F(r.uuid,r.type,(0,C.jN)(u)))}}},onContextMenu:function(e){var n;clearTimeout(z.current),null!==r&&void 0!==r&&null!==(n=r.current)&&void 0!==n&&n.contains(e.target)&&!i&&(e.preventDefault(),M({x:e.pageX,y:e.pageY}),A(null),U(u))},onMouseDown:function(e){var n,t=u?(0,C.lr)(u,null,!0):null;null===r||void 0===r||null===(n=r.current)||void 0===n||!n.contains(e.target)||!t||(null===V||void 0===V?void 0:V.length)>=1||i||ee||J||(e.preventDefault(),clearTimeout(z.current),z.current=setTimeout((function(){M({x:e.pageX,y:e.pageY}),A(u),U(null)}),300))},style:{alignItems:"center",cursor:"default",display:"flex",minWidth:d*m.Cl+u.name.length*b.Fo+2*b.iI,paddingRight:b.iI/4},children:[(0,x.jsxs)(v.Z,{alignItems:"center",flex:1,children:[ce,V&&!re&&(0,x.jsx)(h._M,{muted:!0,size:m.ZG}),V&&re&&(0,x.jsx)(h._Q,{muted:!0,size:m.ZG}),!V&&(0,x.jsx)("div",{style:{width:m.ZG}}),(0,x.jsxs)("div",{style:{marginLeft:b.iI/2,marginRight:b.iI/2},children:[!H&&(0,x.jsx)(le,{disabled:K,size:m.ZG}),H&&(0,x.jsx)(s.Z,{color:H,size:m.ZG,square:!0})]}),(0,x.jsx)(p.ZP,{color:H,default:!H&&!ee,disabled:ee,monospace:!0,small:!0,children:Q})]}),L&&L(u)]}),(0,x.jsx)("div",{style:{display:re?"none":"block"},children:ue})]})},F=t(71180),E=t(55485),_=t(93369),I=t(65956),S=t(38276),R=t(17488),L=t(35686),T=t(42122),N=t(72619);var M=function(e){var n=e.fetchFileTree,t=e.file,o=e.moveFile,i=e.onCancel,u=e.onCreateFile,a=e.selectedFolder,d=e.setErrors,s=(0,l.useRef)(null),f=(0,T.Qr)(t)?null:t,v=(0,l.useState)(f?(0,C.jN)(f,null,!0):""),p=v[0],h=v[1],m=(0,l.useState)(f?null===f||void 0===f?void 0:f.name:""),b=m[0],g=m[1];(0,l.useEffect)((function(){var e;null===s||void 0===s||null===(e=s.current)||void 0===e||e.focus()}),[]),(0,l.useEffect)((function(){a&&h((0,C.jN)(a))}),[a]);var j=(0,c.Db)(L.ZP.files.useCreate(),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(e){var t=e.file;null===n||void 0===n||n(),i(),null===u||void 0===u||u(t)},onErrorCallback:function(e,n){return d({errors:n,response:e})}})}}),y=(0,r.Z)(j,1)[0],w=(0,c.Db)(L.ZP.files.useUpdate(f&&encodeURIComponent((0,C.jN)(f))),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){null===n||void 0===n||n(),i()},onErrorCallback:function(e,n){return d({errors:n,response:e})}})}}),k=(0,r.Z)(w,1)[0];return(0,x.jsxs)(I.Z,{footer:(0,x.jsxs)(E.ZP,{children:[(0,x.jsxs)(_.ZP,{bold:!0,disabled:!b,inline:!0,onClick:function(){return f?k({file:{dir_path:p,name:b},file_json_only:!0}):y({file:{dir_path:p,name:b,overwrite:!1},file_json_only:!0})},primary:!0,tabIndex:0,uuid:"NewFile/create_file",children:[f?o?"Move":"Rename":"Create"," file"]}),(0,x.jsx)(S.Z,{ml:1,children:(0,x.jsx)(F.ZP,{onClick:function(){return i()},tabIndex:0,children:"Cancel"})})]}),headerTitle:f?o?"Move file":"Rename file":"New file",children:[(0,x.jsx)(R.Z,{disabled:!!f&&!o,label:"Directory",monospace:!0,onChange:function(e){return h(e.target.value)},setContentOnMount:!0,value:p}),(0,x.jsx)(S.Z,{mt:2,children:(0,x.jsx)(R.Z,{disabled:!!o,label:"Filename",monospace:!0,onChange:function(e){return g(e.target.value)},ref:s,required:!0,value:b})})]})};var A=function(e){var n=e.fetchFileTree,t=e.file,o=e.moveFile,i=e.onCancel,u=e.onCreateFile,a=e.selectedFolder,d=e.setErrors,s=(0,l.useRef)(null),f=(0,T.Qr)(t)?null:t,v=(0,l.useState)(f?(0,C.jN)(f,null,!0):""),p=v[0],h=v[1],m=(0,l.useState)(f?null===f||void 0===f?void 0:f.name:""),b=m[0],g=m[1];(0,l.useEffect)((function(){var e;null===s||void 0===s||null===(e=s.current)||void 0===e||e.focus()}),[]),(0,l.useEffect)((function(){a&&h((0,C.jN)(a,null,!0))}),[a]);var j=(0,c.Db)(L.ZP.folders.useCreate(),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(e){var t=e.file;null===n||void 0===n||n(),i(),null===u||void 0===u||u(t)},onErrorCallback:function(e,n){return d({errors:n,response:e})}})}}),y=(0,r.Z)(j,1)[0],w=(0,c.Db)(L.ZP.folders.useUpdate(f&&encodeURIComponent((0,C.jN)(f))),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){null===n||void 0===n||n(),i()},onErrorCallback:function(e,n){return d({errors:n,response:e})}})}}),k=(0,r.Z)(w,1)[0];return(0,x.jsxs)(I.Z,{footer:(0,x.jsxs)(E.ZP,{children:[(0,x.jsxs)(_.ZP,{bold:!0,disabled:!b,inline:!0,onClick:function(){return f?k({folder:{name:b,path:p}}):y({folder:{name:b,overwrite:!1,path:p}})},primary:!0,tabIndex:0,uuid:"NewFolder/create_folder",children:[f?o?"Move":"Rename":"Create"," folder"]}),(0,x.jsx)(S.Z,{ml:1,children:(0,x.jsx)(F.ZP,{onClick:function(){return i()},tabIndex:0,children:"Cancel"})})]}),headerTitle:f?o?"Move folder":"Rename folder":"New folder",children:[(0,x.jsx)(R.Z,{disabled:!!f&&!o,label:"Directory",monospace:!0,onChange:function(e){return h(e.target.value)},setContentOnMount:!0,value:p}),(0,x.jsx)(S.Z,{mt:2,children:(0,x.jsx)(R.Z,{disabled:!!o,label:"Folder name",monospace:!0,onChange:function(e){return g(e.target.value)},ref:s,required:!0,value:b})})]})},U=t(57653),B=t(89515),z=t(17717),Y=t(77011);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var G=u.default.div.withConfig({displayName:"MultiFileInput__DropzoneStyle",componentId:"sc-1l6yd2y-0"})(["&:hover{cursor:pointer;}"]);var Q=function(e){var n=e.children,t=e.inputOnChange,o=e.inputProps,r=e.onDragActiveChange,i=e.setFiles,u=(0,l.useCallback)((function(e){i(e)}),[i]),c=(0,Y.uI)({onDrop:u}),a=c.getInputProps,d=c.getRootProps,s=c.isDragActive,f=a(),v=f.accept,p=f.autoComplete,h=f.multiple,m=f.onChange,b=f.onClick,g=f.ref,j=f.style,y=f.tabIndex,C=f.type,w=$($({},o),{},{accept:v,autoComplete:p,multiple:h,onChange:function(e){null===t||void 0===t||t(e),null===o||void 0===o||o.onChange(e),m(e)},onClick:b,ref:g,style:j,tabIndex:y,type:C});return(0,l.useEffect)((function(){null===r||void 0===r||r(s)}),[s,r]),(0,x.jsxs)(G,$($({},d()),{},{children:[(0,x.jsx)("input",$($({},w),{},{directory:"",webkitdirectory:""})),n]}))};function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var X=function(e){var n=e.children,t=e.directoryPath,i=e.onDragActiveChange,u=e.setFileUploadProgress,a=e.setUploadedFiles,d=(0,c.Db)(L.ZP.files.useCreate({onUploadProgress:function(e,n){var t,r=n.body,i=[null===r||void 0===r?void 0:r.dir_path,null===r||void 0===r||null===(t=r.file)||void 0===t?void 0:t.name].filter((function(e){return(null===e||void 0===e?void 0:e.length)>=1})).join(z.sep);null===u||void 0===u||u((function(n){return H(H({},n),{},(0,o.Z)({},i,e.loaded/e.total))}))}})),s=(0,r.Z)(d,1)[0],f=(0,l.useCallback)((function(e){e.forEach((function(e){var n=e.name,r=e.path,i=[t],l=r.split(z.sep).filter((function(e){return e&&e!==n})).join(z.sep);l&&i.push(l);var c=[],d=i.join(z.sep);(null===d||void 0===d?void 0:d.length)>=1&&i.push(d),c.push(n);var f=c.join(z.sep);s({dir_path:d,file:e,overwrite:!1}).then((function(e){var n=e.data,t=n.error,r=n.file;a((function(e){return H(H({},e),{},(0,o.Z)({},f,r||t))}))})),u((function(e){return H(H({},e),{},(0,o.Z)({},f,0))}))}))}),[s,t,u,a]);return(0,x.jsx)(Q,{onDragActiveChange:i,setFiles:f,children:n})},J=t(35185),V=t(75499),K=t(44897),ee=t(42631),ne=(b.iI,u.default.div.withConfig({displayName:"indexstyle__DropZoneStyle",componentId:"sc-1g3zz7z-0"})(["border-radius:","px;padding:","px;max-width:","px;min-width:","px;",""],ee.n_,8*b.iI,100*b.iI,55*b.iI,(function(e){return"\n    border: 1px dashed ".concat((e.theme.borders||K.Z.borders).contrast,";\n  ")}))),te=u.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1g3zz7z-1"})(["max-width:","px;min-width:","px;"],100*b.iI,55*b.iI);var oe=function(e){var n=e.fetchFileTree,t=e.onCancel,o=e.selectedFolder,i=(0,l.useState)(!1),u=i[0],c=i[1],a=(0,l.useState)({}),d=a[0],s=a[1],f=(0,l.useState)({}),v=f[0],h=f[1],m=!(0,T.Qr)(d),b=(0,l.useMemo)((function(){var e=[];return(0,w.YC)(Object.entries(d),(function(e){var n=(0,r.Z)(e,2),t=n[0];n[1];return t})).forEach((function(n){var t=(0,r.Z)(n,2),o=t[0],i=t[1],l=v[o],u=null===l||void 0===l?void 0:l.message;e.push([(0,x.jsxs)("div",{children:[(0,x.jsx)(p.ZP,{overflowWrap:!0,preWrap:!0,children:o}),u&&(0,x.jsx)(S.Z,{mt:1,children:(0,x.jsx)(p.ZP,{danger:!0,small:!0,children:u})})]},"name-".concat(o)),(0,x.jsx)(J.Z,{danger:!!u,progress:100*i},"progress-".concat(o))])})),(0,x.jsx)(V.Z,{columnFlex:[1,4],columns:[{uuid:"Filename"},{uuid:"Upload progress"}],rows:e,uuid:"block-runs"})}),[d,v]);return(0,x.jsxs)(I.Z,{footer:(0,x.jsxs)(E.ZP,{fullWidth:!0,children:[(0,x.jsx)(F.ZP,{onClick:function(){return t()},children:"Close"}),m&&(0,x.jsx)(S.Z,{ml:1,children:(0,x.jsx)(F.ZP,{onClick:function(){s({}),h({})},children:"Clear files and retry"})})]}),headerTitle:"Upload files",children:[m&&(0,x.jsx)(te,{children:b}),!m&&(0,x.jsx)(X,{directoryPath:o?(0,C.jN)(o):"",onDragActiveChange:c,setFileUploadProgress:s,setUploadedFiles:function(e){h(e),null===n||void 0===n||n()},children:(0,x.jsx)(ne,{children:(0,x.jsxs)(p.ZP,{center:!0,children:[u&&"Drop to upload",!u&&"Click or drop files and folders to upload"]})})})]})},re=t(19698),ie=t(31353),le=t(80330),ue=t(85202),ce=t(44952),ae=t(89538),de=["addNewBlock","blocks","deleteWidget","fetchAutocompleteItems","fetchFileTree","fetchPipeline","files","onCreateFile","pipeline","setErrors","setSelectedBlock","widgets"];function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?se(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ve,pe=20*b.iI;function he(e,n){var t=e.addNewBlock,o=e.blocks,s=void 0===o?[]:o,v=e.deleteWidget,h=e.fetchAutocompleteItems,g=e.fetchFileTree,j=e.fetchPipeline,y=e.files,k=e.onCreateFile,O=e.pipeline,D=e.setErrors,Z=e.setSelectedBlock,F=e.widgets,E=void 0===F?[]:F,_=(0,i.Z)(e,de),I=(0,l.useRef)(null),S=(0,l.useContext)(u.ThemeContext),R=(0,l.useState)(null),T=R[0],z=R[1],Y=(0,l.useState)(null),q=Y[0],$=Y[1],G=(0,l.useState)(null),Q=G[0],W=G[1],H=(0,re.Z)().status,X=(0,c.Db)((function(e){return L.ZP.downloads.files.useCreate(e)()}),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){var n=e.data.download.token;(0,ce.K)(n)},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),J=(0,r.Z)(X,1)[0],V=(0,c.Db)((function(e){return L.ZP.files.useDelete(e)()}),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){null===g||void 0===g||g()},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),K=(0,r.Z)(V,1)[0],ee=(0,c.Db)((function(e){return L.ZP.folders.useDelete(e)()}),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){null===g||void 0===g||g()},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),ne=(0,r.Z)(ee,1)[0],te=(0,ae.dd)((function(e){var n=e.block;return(0,x.jsx)(B.Z,{centerOnScreen:!0,danger:!0,onCancel:he,onClick:function(){return be({block:n,force:!0}).then((function(){return he()}))},subtitle:"Deleting this block file is dangerous. This block may have dependencies in active pipelines. Press confirm to delete this block anyway and remove it as a dependency from downstream blocks.",title:"Delete ".concat(n.uuid," anyway?"),width:34*b.iI})})),se=(0,r.Z)(te,2),ve=se[0],he=se[1],me=(0,c.Db)((function(e){var n=e.block,t=n.language,o=n.type,r=n.uuid,i=e.force,l=void 0!==i&&i,u="".concat(o,"/").concat(r);return t&&f.JD[t]&&(u="".concat(u,".").concat(f.JD[t].toLowerCase())),L.ZP.blocks.useDelete(encodeURIComponent(u),{force:l})()}),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){h(),j(),g()},onErrorCallback:function(e){var n=e.error,t=n.exception;n.message.includes("raise HasDownstreamDependencies")&&ve({block:xe,exception:t})}})}}),be=(0,r.Z)(me,1)[0],ge=(0,w.sE)(null===O||void 0===O?void 0:O.blocks,(function(e){var n=e.type;return a.tf.DATA_EXPORTER===n})),je=(0,c.Db)(L.ZP.blocks.pipelines.useUpdate(null===O||void 0===O?void 0:O.uuid,null===ge||void 0===ge?void 0:ge.uuid),{onSuccess:function(e){return(0,N.wD)(e,{callback:function(){null===j||void 0===j||j()},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),ye=(0,r.Z)(je,1)[0],Ce=(0,l.useCallback)((function(){return W(null)}),[W]);(0,l.useEffect)((function(){var e,o,r,i=function(e){if(clearTimeout(I.current),$(null),q&&O&&t){var o,r,i=(null===n||void 0===n||null===(o=n.current)||void 0===o||null===(r=o.getBoundingClientRect)||void 0===r?void 0:r.call(o))||{},l=i.width,u=i.x;if(e.pageX>u+l){var c=(null===O||void 0===O?void 0:O.type)===U.qL.INTEGRATION,a=(0,le.TU)(fe(fe({},q),{},{path:(0,C.jN)(q)}),H.repo_path,O);null===t||void 0===t||t(fe(fe({},a),{},{require_unique_name:!1}),(function(e){c&&ge&&ye({block:fe(fe({},ge),{},{upstream_blocks:[e.uuid]})}),null===Z||void 0===Z||Z(e)}))}}},l=function(e){q&&z({x:e.pageX,y:e.pageY})};return null===(e=document)||void 0===e||e.addEventListener("click",Ce),null===(o=document)||void 0===o||o.addEventListener("mousemove",l),null===(r=document)||void 0===r||r.addEventListener("mouseup",i),function(){var e,n,t;null===(e=document)||void 0===e||e.removeEventListener("click",Ce),null===(n=document)||void 0===n||n.removeEventListener("mousemove",l),null===(t=document)||void 0===t||t.removeEventListener("mouseup",i)}}),[t,ge,q,Ce,O,n,Z,H,I,ye]);var we=(0,l.useMemo)((function(){return s.concat(E).map((function(e){return e.uuid}))}),[s,E]),ke=(0,l.useMemo)((function(){return null===y||void 0===y?void 0:y.map((function(e){return(0,l.createElement)(P,fe(fe({},_),{},{containerRef:n,file:e,key:e.name,level:0,pipelineBlockUuids:we,setCoordinates:z,setDraggingFile:$,setSelectedFile:W,theme:S,timeout:I}))}))}),[y,we,_,n,S,I]),xe=(0,l.useMemo)((function(){return Q&&(0,C.lr)(Q)}),[Q]),Oe=(0,l.useMemo)((function(){return q&&(0,C.lr)(q)}),[q]),De=(0,l.useMemo)((function(){return Q&&"undefined"!==typeof(null===Q||void 0===Q?void 0:Q.children)&&Q}),[Q]),Ze=(0,ae.dd)((function(){return(0,x.jsx)(oe,{fetchFileTree:g,onCancel:Ee,selectedFolder:De})}),{},[g,De],{background:!0,uuid:"upload_files"}),Pe=(0,r.Z)(Ze,2),Fe=Pe[0],Ee=Pe[1],_e=(0,ae.dd)((function(e){return(0,x.jsx)(M,{fetchFileTree:g,file:null===e||void 0===e?void 0:e.file,moveFile:null===e||void 0===e?void 0:e.moveFile,onCancel:Re,onCreateFile:k,selectedFolder:De,setErrors:D})}),{},[g,k,De,D],{background:!0,disableClickOutside:!0,uuid:"new_file"}),Ie=(0,r.Z)(_e,2),Se=Ie[0],Re=Ie[1],Le=(0,ae.dd)((function(e){return(0,x.jsx)(A,{fetchFileTree:g,file:null===e||void 0===e?void 0:e.file,moveFile:null===e||void 0===e?void 0:e.moveFile,onCancel:Me,selectedFolder:De,setErrors:D})}),{},[g,De,D],{background:!0,disableClickOutside:!0,uuid:"new_folder"}),Te=(0,r.Z)(Le,2),Ne=Te[0],Me=Te[1],Ae=(0,l.useMemo)((function(){var e;if(!xe&&!Q&&!De)return(0,x.jsx)("div",{});var t=(null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect())||{},o=t.x,r=t.width,i=T||{},l=i.x,u=void 0===l?0:l,c=i.y,s=void 0===c?0:c,f=u+b.iI;u+pe>=o+r&&(f=o+r-(pe+b.iI)),f<0&&(f=0);var p=[];De?p.push.apply(p,[{label:function(){return"New folder"},onClick:function(){Ne()},uuid:"new_folder"},{label:function(){return"Rename folder"},onClick:function(){Ne({file:De})},uuid:"rename_folder"},{label:function(){return"Move folder"},onClick:function(){Ne({file:De,moveFile:!0})},uuid:"Move_folder"},{label:function(){return"Delete folder"},onClick:function(){var e=(0,C.jN)(De);window.confirm("Are you sure you want to delete folder ".concat(e," and all its subfolders and files?"))&&ne(encodeURIComponent(e))},uuid:"Delete_folder"},{label:function(){return"New file"},onClick:function(){Se({file:{}})},uuid:"new_file"},{label:function(){return"Upload files"},onClick:function(){Fe()},uuid:"upload_files"}]):Q&&(p.push.apply(p,[{label:function(){return"Rename file"},onClick:function(){Se({file:Q})},uuid:"rename_file"},{label:function(){return"Move file"},onClick:function(){Se({file:Q,moveFile:!0})},uuid:"move_file"},{label:function(){return"Download file"},onClick:function(){var e=(0,C.jN)(Q);J(encodeURIComponent(e))},uuid:"download_file"}]),xe?p.push({label:function(){return"Delete block file"},onClick:function(){xe.type===a.tf.CHART?window.confirm("Are you sure you want to delete widget ".concat(xe.uuid,"?"))&&v(xe):window.confirm("Are you sure you want to delete block ".concat(xe.uuid,"?"))&&be({block:xe})},uuid:"delete_block_file"}):p.push({label:function(){return"Delete file"},onClick:function(){var e=(0,C.jN)(Q);window.confirm("Are you sure you want to delete file ".concat(e,"?"))&&K(encodeURIComponent(e))},uuid:"delete_file"}));var h=s+b.iI/2,m=36*p.length;return s+m>=window.innerHeight&&(h=s-m),(0,ue.createPortal)((0,x.jsx)("div",{style:{left:f,position:"fixed",top:h,zIndex:ie.bf+100},children:(0,x.jsx)(d.Z,{items:p,open:!0,parentRef:void 0,uuid:"FileBrowser/ContextMenu",width:pe})}),document.body)}),[T,be,K,ne,v,J,n,Fe,Se,Ne,xe,Q,De]);return(0,x.jsxs)(m.Nk,{ref:n,children:[ke,(xe||Q||De)&&Ae,Oe&&(0,x.jsx)("div",{style:{left:(null===T||void 0===T?void 0:T.x)-b.iI,position:"fixed",top:(null===T||void 0===T?void 0:T.y)-b.iI,zIndex:ie.bf+100},children:(0,x.jsx)(p.ZP,{cursor:"grabbing",monospace:!0,children:null===Oe||void 0===Oe?void 0:Oe.uuid})})]})}!function(e){e.BLOCK_FILE="block_file",e.DISABLED="disabled",e.FILE="file",e.FOLDER="folder",e.PIPELINE="pipeline"}(ve||(ve={}));var me=l.forwardRef(he)},53005:function(e,n,t){t.d(n,{IO:function(){return v},V3:function(){return f},a9:function(){return c},jN:function(){return d},lr:function(){return s},u$:function(){return p}});var o=t(17717),r=t(44425),i=t(89706),l=t(81728),u=t(80330);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n||(t?null:null===e||void 0===e?void 0:e.name);if(null!==e&&void 0!==e&&e.parent){var i=[e.parent.name];return(null===r||void 0===r?void 0:r.length)>=1&&i.push(r),c(e.parent,i.join(o.sep))}return r}function a(e){return null===e||void 0===e?void 0:e.split(o.sep).slice(1).join(o.sep)}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c(e,n,t);return a(o)}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=c(e,n).split(o.sep);if(!l)return null;var a=(0,u.ck)(l);if(!l)return null;var d="";d=l.length>=3?l.slice(2,l.length).join(o.sep):l[l.length-1];var s=["\\.".concat(i.Lu.PY),"\\.".concat(i.Lu.R),"\\.".concat(i.Lu.SQL),"\\.".concat(i.Lu.YAML),"\\.".concat(i.Lu.YML)].join("|"),f=new RegExp("".concat(s,"$")),v=t?r.Q3:r.$W;if(v.concat(r.tf.DBT).includes(a)&&d.match(f)){var p=d.lastIndexOf("."),h=d.slice(p+1);return{language:i.nB[h],type:a,uuid:d.slice(0,p)}}}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=c(e,n).split(o.sep);if(t[1]){var u=(0,l.C5)(t[n?0:1]);t[1]===r.tf.DBT&&(u=r.tf.DBT);var a=t[t.length-1],d=new RegExp(".".concat(i.Lu.YAML,"$")),s=new RegExp(".".concat(i.Lu.R,"$")),f=new RegExp(".".concat(i.Lu.SQL,"$")),v=new RegExp(".".concat(i.Lu.MD,"$"));if(a.match(d)&&r.VZ.includes(u))return{type:u,uuid:a.replace(d,"")};if(a.match(s)&&r.J8.includes(u))return{type:u,uuid:a.replace(s,"")};if(a.match(f)&&r.HX.includes(u)){var p=a.replace(/[.]/g,"_"),h=u===r.tf.DBT?t.slice(2,-1).join("_").concat("_".concat(p)):a.replace(f,"");return{type:u,uuid:h}}return a.match(v)&&u===r.tf.MARKDOWN?{type:u,uuid:a.replace(v,"")}:void 0}}function v(e,n){var t=e.split("."),r=t[t.length-1];i.n6.includes(r)&&t.pop();var l=t.join("").split(o.sep),u=l.slice(1,l.length).join("");return n.find((function(e){return e.uuid===u}))}function p(e){var n=e||{},t=n.language,o=n.name,u=n.type;if(o&&t&&u){var c=u===r.tf.CUSTOM?u:"".concat(u,"s"),a=i.JD[t],d=(0,l.kE)(o);return"".concat(c,"/").concat(d,".").concat(a)}}},80330:function(e,n,t){t.d(n,{TU:function(){return p},lU:function(){return v},ck:function(){return f}});var o=t(21831),r=t(17717),i=t(44425),l=t(57653),u=t(89706),c=t(86735);function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=n||(t?null:null===e||void 0===e?void 0:e.name);if(null!==e&&void 0!==e&&e.parent){var i=[e.parent.name];return(null===o||void 0===o?void 0:o.length)>=1&&i.push(o),a(e.parent,i.join(r.sep))}return o}var d=t(81728),s=t(42122),f=function(e){var n;if(null===e||void 0===e||e.forEach((function(e){if((null===e||void 0===e?void 0:e.length)>=1){var t=null===e||void 0===e?void 0:e.toLowerCase();(t in i.qC||(t=(0,d.C5)(t))in i.GJ)&&(n=t)}})),!n){var t=["\\.".concat(u.Lu.SQL),"\\.".concat(u.Lu.YAML),"\\.".concat(u.Lu.YML)].join("|"),o=new RegExp("".concat(t,"$"));if(e.join(r.sep).match(o))return i.tf.DBT}return n};function v(){return new RegExp(Object.keys(u.nB).map((function(e){return".(".concat(e,")$")})).join("|"))}function p(e,n,t){var p,h,m=null===e||void 0===e||null===(p=e.path.match(v())[0])||void 0===p?void 0:p.split(".")[1],b=t.type===l.qL.INTEGRATION,g=(0,c.sE)(null===t||void 0===t?void 0:t.blocks,(function(e){var n=e.type;return i.tf.DATA_EXPORTER===n})),j=e.path.replace(n,"").split(r.sep),y=f(e.path.split(r.sep)),C=i.tf.DBT===y,w=(h=j)[0]===i.tf.DBT?h.slice(1).join(r.sep):function(e){return e.at(-1)}(h).split(".")[0];if(j.length>=3&&!C){var k=j.slice(1,j.length-1).join(r.sep);w="".concat(k,"/").concat(w)}var x=u.nB[m],O={configuration:(0,s.hB)({file_path:C&&i.t6.SQL===x?w:null,file_source:{path:a(e)}}),language:x,name:(0,d.wE)(w),type:y};if(y===i.tf.CUSTOM&&(O.color=i.Lq.TEAL),b){var D=(0,c.sE)(t.blocks,(function(e){var n=e.type;return i.tf.DATA_LOADER===n})),Z=(0,c.sE)(t.blocks,(function(e){var n=e.type;return i.tf.TRANSFORMER===n})),P=[];Z?P.push(Z.uuid):null!==g&&void 0!==g&&g.upstream_blocks?P.push.apply(P,(0,o.Z)(g.upstream_blocks)):D&&P.push(D.uuid),O.upstream_blocks=P}return O}},44952:function(e,n,t){t.d(n,{K:function(){return r}});var o=t(4383);function r(e){var n=(0,o.ZP)("downloads",e),t=document.createElement("a");t.href=n,document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(n),document.body.removeChild(t)}},19698:function(e,n,t){var o=t(82684),r=t(35686);n.Z=function(){var e=r.ZP.statuses.list().data;return{status:(0,o.useMemo)((function(){var n;return null===e||void 0===e||null===(n=e.statuses)||void 0===n?void 0:n[0]}),[e])}}}}]);