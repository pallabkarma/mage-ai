"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2474],{81066:function(n,e,t){t.d(e,{B:function(){return f}});var o=t(82394),r=t(46732),i=t(93369),l=t(72473),c=t(8059),u=t(70515),d=t(28598);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};e.Z=function(n){var e=n.addButtonMenuOpen,t=n.addButtonMenuRef,o=n.isLoading,a=n.label,p=n.menuItems,b=n.onClick,h=n.onClickCallback;return(0,d.jsx)(r.Z,{disableKeyboardShortcuts:!0,items:p,onClickCallback:h,onClickOutside:h,open:e,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,d.jsx)(i.ZP,s(s({},f),{},{background:c.eW,beforeElement:(0,d.jsx)(l.mm,{size:2.5*u.iI}),loading:o,onClick:function(n){n.preventDefault(),null===b||void 0===b||b()},uuid:"shared/AddButton/index",children:a}))})}},55072:function(n,e,t){t.d(e,{Et:function(){return f},Q:function(){return s}});t(82684);var o=t(71180),r=t(55485),i=t(38276),l=t(31748),c=t(72473),u=t(79633),d=t(70515),a=t(28598),s=30,f=9;e.ZP=function(n){var e=n.page,t=n.maxPages,s=n.onUpdate,f=n.totalPages,p=[],b=t;if(b>f)p=Array.from({length:f},(function(n,e){return e}));else{var h=Math.floor(b/2),g=e-h;e+h>=f?(g=f-b+2,b-=2):e-h<=0?(g=0,b-=2):(b-=4,g=e-Math.floor(b/2)),p=Array.from({length:b},(function(n,e){return e+g}))}return(0,a.jsx)(a.Fragment,{children:f>0&&(0,a.jsxs)(r.ZP,{alignItems:"center",children:[(0,a.jsx)(o.ZP,{disabled:0===e,onClick:function(){return s(e-1)},children:(0,a.jsx)(c.Hd,{size:1.5*d.iI,stroke:l.Av})}),!p.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(o.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return s(0)},children:1})},0),!p.includes(1)&&(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(o.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(n){return(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(o.ZP,{backgroundColor:n===e&&u.a$,borderLess:!0,noBackground:!0,notClickable:n===e,onClick:function(){n!==e&&s(n)},children:n+1})},n)})),!p.includes(f-1)&&(0,a.jsxs)(a.Fragment,{children:[!p.includes(f-2)&&(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(o.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(o.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return s(f-1)},children:f})},f-1)]}),(0,a.jsx)(i.Z,{ml:1}),(0,a.jsx)(o.ZP,{disabled:e===f-1,onClick:function(){return s(e+1)},children:(0,a.jsx)(c.Kw,{size:1.5*d.iI,stroke:l.Av})})]})})}},35526:function(n,e,t){t.d(e,{Au:function(){return a},I6:function(){return u},Nb:function(){return o},OK:function(){return d},hZ:function(){return f},k2:function(){return s}});var o,r=t(42631),i=t(72473),l=t(70515),c=t(28598),u="".concat(1.5*l.iI,"px"),d=40*l.iI,a=58;!function(n){n[n.FIRST=1]="FIRST",n[n.SECOND=2]="SECOND"}(o||(o={}));var s={autoHide:!0,size:null,widthFitContent:!0},f={afterIconSize:1.5*l.iI,beforeIcon:(0,c.jsx)(i.HN,{}),borderRadius:r.n_,defaultColor:!0,fullWidth:!0,greyBorder:!0,maxWidth:40*l.iI}},85544:function(n,e,t){t.d(e,{Z:function(){return Y}});var o=t(82394),r=t(75582),i=t(82684),l=t(81066),c=t(79757),u=t(50724),d=t(97618),a=t(55485),s=t(46732),f=t(93369),p=t(89515),b=t(38276),h=t(30160),g=t(17488),m=t(71180),j=t(69650),x=t(38626),y=t(44897),v=t(42631),k=t(47041),O=t(70515),C=74*O.iI,Z=48*O.iI,P=x.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-18n432u-0"})(["position:absolute;border-radius:","px;overflow:hidden;width:","px;display:none;"," "," "," "," ",""],v.n_,C,(function(n){return"\n    background-color: ".concat((n.theme||y.Z).background.panel,";\n    border: ").concat(v.mP,"px ").concat(v.M8," ").concat((n.theme||y.Z).interactive.defaultBackground,";\n    box-shadow: ").concat((n.theme.shadow||y.Z.shadow).window,";\n  ")}),(function(n){return n.display&&"\n    display: block;\n  "}),(function(n){return n.compact&&"\n    width: ".concat(.75*C,"px;\n  ")}),(function(n){return"undefined"!==typeof n.left&&"\n    left: ".concat(n.left,"px;\n  ")}),(function(n){return"undefined"!==typeof n.top&&"\n    top: ".concat(n.top,"px;\n  ")})),I=x.default.div.withConfig({displayName:"indexstyle__MainStyle",componentId:"sc-18n432u-1"})(["display:flex;border-radius:","px;overflow:hidden;height:","px;"," ",""],v.n_,Z,(function(n){return"\n    background-color: ".concat((n.theme||y.Z).background.content,";\n    border: ").concat(v.YF,"px ").concat(v.M8," ").concat((n.theme||y.Z).interactive.defaultBackground,";\n  ")}),(function(n){return n.compact&&"\n    height: ".concat(Z/2,"px;\n  ")})),w=x.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-18n432u-2"})(["width:100%;overflow:auto;"," ",""],k.w5,(function(n){return"\n    border-right: ".concat(v.YF,"px ").concat(v.M8," ").concat((n.theme||y.Z).background.panel,";\n  ")})),S=x.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-18n432u-3"})(["width:100%;overflow:auto;",""],k.w5),B=(0,x.css)(["display:flex;align-items:center;justify-content:space-between;padding:","px ","px;"],O.iI,2*O.iI),M=x.default.div.withConfig({displayName:"indexstyle__OptionStyle",componentId:"sc-18n432u-4"})([""," padding-top:","px;padding-bottom:","px;&:hover{cursor:pointer;","}",""],B,1.5*O.iI,1.5*O.iI,(function(n){return"\n      background-color: ".concat((n.theme||y.Z).monotone.black,";\n    ")}),(function(n){return n.highlighted&&"\n    background-color: ".concat((n.theme||y.Z).monotone.black,";\n  ")})),D=x.default.div.withConfig({displayName:"indexstyle__ToggleValueStyle",componentId:"sc-18n432u-5"})([""," ",""],B,(function(n){return"\n    border-bottom: ".concat(v.YF,"px ").concat(v.M8," ").concat((n.theme||y.Z).borders.medium2,";\n  ")})),T=t(72473),A=t(15610),E=t(11498),R=t(81728),F=t(28598);function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var L=function(n){var e,t,l,c=n.children,s=n.compact,f=n.onClickCallback,p=n.onClickOutside,g=n.onSecondaryClick,x=n.open,y=n.options,v=void 0===y?{}:y,k=n.parentRef,O=n.query,C=n.resetLimitOnApply,Z=n.resetPageOnApply,B=n.setOpen,_=n.toggleValueMapping,L=(0,i.useState)(null),z=L[0],K=L[1],V=(0,i.useState)(v),H=V[0],G=V[1];(0,i.useEffect)((function(){G(v)}),[v]);var q=((null===k||void 0===k||null===(e=k.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e))||{}).top,W=void 0===q?0:q,Y=Object.keys(v);return(0,F.jsxs)(u.Z,{onClickOutside:p,open:!0,children:[(0,F.jsx)("div",{ref:k,children:c}),(0,F.jsxs)(P,{compact:s,display:x,top:W-5,children:[(0,F.jsxs)(I,{compact:s,children:[(0,F.jsx)(d.Z,{flex:"1",children:(0,F.jsx)(w,{children:Y.map((function(n){return(0,F.jsxs)(M,{highlighted:z===n,onMouseEnter:function(){return K(n)},children:[(0,F.jsx)(h.ZP,{children:(0,R.J3)((0,R.kC)(n))}),(0,F.jsx)(T._Q,{})]},n)}))})}),(0,F.jsx)(d.Z,{flex:"2",children:(0,F.jsx)(S,{children:z&&Object.entries((null===(l=H||v)||void 0===l?void 0:l[z])||{}).map((function(n){var e,t=(0,r.Z)(n,2),i=t[0],l=t[1],c=null===_||void 0===_?void 0:_[z],u=("function"===typeof(null===c||void 0===c?void 0:c[i])?(0,R.kC)(null===c||void 0===c||null===(e=c[i])||void 0===e?void 0:e.call(c)):null===c||void 0===c?void 0:c[i])||i;return(0,F.jsxs)(D,{children:[(0,F.jsx)(h.ZP,{title:c?null:u,width:200,children:u}),(0,F.jsx)(j.Z,{checked:l,onCheck:function(){return G((function(n){return N(N({},n),{},(0,o.Z)({},z,N(N({},null===n||void 0===n?void 0:n[z]),{},(0,o.Z)({},i,!l))))}))}})]},i)}))})})]}),(0,F.jsx)(b.Z,{m:1,children:(0,F.jsxs)(a.ZP,{children:[(0,F.jsx)(m.ZP,{onClick:function(){var n=Object.entries(H).reduce((function(n,e){var t=(0,r.Z)(e,2),o=t[0],i=t[1],l=[];return Object.entries(i).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0];return e[1]&&l.push(t)})),n[o]=l,n}),{});null===f||void 0===f||f(O,n);var e={addingMultipleValues:!0,pushHistory:!0,resetLimitParams:C,resetPage:Z};null!==O&&void 0!==O&&O[E.$D.LIMIT]&&(e.itemsPerPage=+(null===O||void 0===O?void 0:O[E.$D.LIMIT])),(0,A.g)(O,n,e)},secondary:!0,children:"Apply"}),(0,F.jsx)(b.Z,{mr:1}),(0,F.jsx)(m.ZP,{noBackground:!0,onClick:function(){B(!1),null===g||void 0===g||g()},children:"Defaults"})]})})]})]})},z=t(12468),K=t(35526),V=t(24944),H=t(42122),G=t(50178);function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function W(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?q(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Y=function(n){var e=n.addButtonProps,t=n.children,o=n.deleteRowProps,m=n.extraActionButtonProps,j=n.filterOptions,x=void 0===j?{}:j,y=n.filterValueLabelMapping,v=n.groupButtonProps,k=n.moreActionsMenuItems,C=n.onClickFilterDefaults,Z=n.onFilterApply,P=n.query,I=void 0===P?{}:P,w=n.resetLimitOnFilterApply,S=n.resetPageOnFilterApply,B=n.secondaryButtonProps,M=n.searchProps,D=n.selectedRowId,A=n.setSelectedRow,E=n.showDivider,R=(0,G.Ct)(),_=(0,i.useRef)(null),N=(0,i.useRef)(null),q=(0,i.useRef)(null),Y=(0,i.useRef)(null),$=(0,i.useRef)(null),Q=(0,i.useState)(!1),J=Q[0],U=Q[1],X=(0,i.useState)(!1),nn=X[0],en=X[1],tn=(0,i.useState)(!1),on=tn[0],rn=tn[1],ln=(0,i.useState)(!1),cn=ln[0],un=ln[1],dn=(0,i.useState)(null),an=dn[0],sn=dn[1],fn=!D,pn=(0,i.useCallback)((function(){return U(!1)}),[]),bn=(0,i.useCallback)((function(){return en(!1)}),[]),hn=(0,i.useCallback)((function(){return rn(!1)}),[]),gn=(0,i.useCallback)((function(){return un(null)}),[]),mn=(0,i.useCallback)((function(){return sn(null)}),[]),jn=m||{},xn=jn.Icon,yn=jn.confirmationDescription,vn=jn.confirmationMessage,kn=jn.isLoading,On=jn.label,Cn=jn.onClick,Zn=jn.openConfirmationDialogue,Pn=jn.tooltip,In=o||{},wn=In.confirmationMessage,Sn=In.isLoading,Bn=In.item,Mn=In.onDelete,Dn=M||{},Tn=Dn.placeholder,An=Dn.onChange,En=Dn.value,Rn=(0,i.useMemo)((function(){return Object.entries(x).reduce((function(n,e){var t=(0,r.Z)(e,2),o=t[0],i=t[1];return n[o]={},i.forEach((function(e){var t,r=(null===(t=I["".concat(o,"[]")])||void 0===t?void 0:t.includes(e))||!1;n[o][e]=r})),n}),{})}),[x,I]),Fn=e||{},_n=Fn.label,Nn=Fn.menuItems,Ln=Fn.onClick,zn=Fn.isLoading,Kn=(0,i.useMemo)((function(){return(0,F.jsx)(l.Z,{addButtonMenuOpen:J,addButtonMenuRef:_,isLoading:zn,label:_n,menuItems:Nn,onClick:Ln||function(){return U((function(n){return!n}))},onClickCallback:pn})}),[_n,Nn,J,pn,zn,Ln]),Vn=B||{},Hn=Vn.beforeIcon,Gn=Vn.disabled,qn=Vn.label,Wn=Vn.onClick,Yn=Vn.isLoading,$n=Vn.tooltip,Qn=(0,i.useMemo)((function(){return(0,F.jsx)(f.ZP,{beforeElement:Hn,bold:!0,disabled:Gn,greyBorder:!0,loading:Yn,onClick:Wn,outline:!0,paddingBottom:9,paddingTop:9,title:$n,uuid:"Table/Toolbar/SecondaryButton",children:qn})}),[Yn,Wn,Hn,Gn,qn,$n]),Jn=(0,i.useMemo)((function(){return(0,H.dw)(Rn)}),[Rn]),Un=(0,i.useMemo)((function(){return(0,F.jsx)(L,{compact:!0,onClickCallback:function(n,e){Z&&(null===Z||void 0===Z||Z(n,e)),bn&&(null===bn||void 0===bn||bn())},onClickOutside:bn,onSecondaryClick:C,open:nn,options:Rn,parentRef:N,query:I,resetLimitOnApply:w,resetPageOnApply:S,setOpen:en,toggleValueMapping:y,children:(0,F.jsx)(f.ZP,W(W({},l.B),{},{afterElement:Jn>0?(0,F.jsx)(c.Z,{cyan:!0,noVerticalPadding:!0,children:(0,F.jsx)(h.ZP,{bold:!0,inverted:!0,children:Jn})}):null,beforeElement:(0,F.jsx)(T.wn,{size:2*O.iI}),onClick:function(){return en((function(n){return!n}))},uuid:"Table/Toolbar/FilterButton",children:"Filter"}))})}),[bn,nn,Rn,y,Jn,C,Z,I,w,S]),Xn=v||{},ne=Xn.groupByLabel,ee=Xn.menuItems,te=(0,i.useMemo)((function(){return(0,F.jsx)(s.Z,{disableKeyboardShortcuts:!0,items:ee,onClickCallback:hn,onClickOutside:hn,open:on,parentRef:q,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/GroupMenu",children:(0,F.jsx)(f.ZP,W(W({},l.B),{},{beforeElement:(0,F.jsx)(T.ZA,{size:2.5*O.iI}),onClick:function(){rn((function(n){return!n}))},uuid:"Table/Toolbar/GroupButton",children:ne?"Grouped by ".concat(ne):"Group"}))})}),[hn,on,ne,ee]),oe=(0,i.useMemo)((function(){return(0,F.jsx)(s.Z,{disableKeyboardShortcuts:!0,items:k,onClickCallback:gn,onClickOutside:gn,open:cn,parentRef:Y,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/MoreActionsMenu",children:(0,F.jsx)(z.Z,W(W({},K.k2),{},{label:"More actions",children:(0,F.jsx)(f.ZP,{Icon:T.mH,bold:!0,disabled:fn,greyBorder:!0,onClick:function(){return un((function(n){return!n}))},smallIcon:!0,uuid:"Table/Toolbar/MoreActionsButton"})}))})}),[gn,fn,cn,k]);return(0,F.jsxs)(a.ZP,{alignItems:"center",children:[e&&Kn,B&&(0,F.jsx)(b.Z,{ml:1,children:Qn}),t,E&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(b.Z,{ml:"12px"}),(0,F.jsx)(V.lZ,{})]}),(e||B||t)&&(0,F.jsx)(b.Z,{mr:K.I6}),Un,(null===ee||void 0===ee?void 0:ee.length)>0&&(0,F.jsx)(b.Z,{ml:K.I6,children:te}),!R&&Cn&&(0,F.jsxs)(b.Z,{ml:K.I6,children:[(0,F.jsx)(z.Z,W(W({},K.k2),{},{label:Pn,children:(0,F.jsx)(f.ZP,{Icon:!kn&&xn,bold:!0,disabled:fn,greyBorder:!0,loading:kn,onClick:Zn?function(){return sn(K.Nb.FIRST)}:Cn,smallIcon:!0,uuid:"Table/Toolbar/ExtraActionButton",children:On})})),(0,F.jsx)(u.Z,{onClickOutside:mn,open:an===K.Nb.FIRST,children:(0,F.jsx)(p.Z,{onCancel:mn,onClick:function(){null===Cn||void 0===Cn||Cn(),mn(),null===A||void 0===A||A(null)},subtitle:yn,title:vn,top:K.Au,width:K.OK})})]}),!R&&Mn&&(0,F.jsxs)(b.Z,{ml:K.I6,children:[(0,F.jsx)(z.Z,W(W({},K.k2),{},{label:"Delete ".concat(Bn),children:(0,F.jsx)(f.ZP,{Icon:!Sn&&T.rF,bold:!0,disabled:fn,greyBorder:!0,loading:Sn,onClick:function(){return sn(K.Nb.SECOND)},smallIcon:!0,uuid:"Table/Toolbar/DeleteButton"})})),(0,F.jsx)(u.Z,{onClickOutside:mn,open:an===K.Nb.SECOND,children:(0,F.jsx)(p.Z,{danger:!0,onCancel:mn,onClick:function(){null===Mn||void 0===Mn||Mn(D),mn(),null===A||void 0===A||A(null)},subtitle:wn,title:"Are you sure you want to delete the ".concat(Bn," ").concat(D,"?"),top:K.Au,width:K.OK})})]}),!R&&(null===k||void 0===k?void 0:k.length)>0&&(0,F.jsx)(b.Z,{ml:K.I6,children:oe}),An&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(b.Z,{ml:K.I6}),(0,F.jsx)(d.Z,{flex:1,children:(0,F.jsx)(g.Z,W(W({},K.hZ),{},{afterIcon:En?(0,F.jsx)(T.x8,{}):null,afterIconClick:function(){var n;An(""),null===$||void 0===$||null===(n=$.current)||void 0===n||n.focus()},onChange:function(n){return An(n.target.value)},paddingVertical:9,placeholder:Tn||null,ref:$,value:En}))})]})]})}}}]);