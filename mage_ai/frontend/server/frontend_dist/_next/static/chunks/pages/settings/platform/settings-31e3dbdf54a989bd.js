(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3112],{80754:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(77837),o=r(38860),i=r.n(o),c=r(93808),u=r(82394),s=r(75582),l=r(82684),a=r(83455),d=r(21764),f=r(32013),p=r(98777),j=r(71180),h=r(15338),v=r(55485),g=r(88543),m=r(38276),b=r(30160),Z=r(22271),x=r(77417),O=r(72473),P=r(70515),y=r(81728),w=r(42122),S=r(72619),_=r(23780),k=r(28598);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(){var e,t=(0,_.VI)(null,{},[],{uuid:"Platform/Settings"}),r=((0,s.Z)(t,1)[0],(0,x.Z)()),n=r.project,o=r.rootProject,i=(0,l.useState)(null),c=i[0],I=i[1],E=(0,l.useState)(!1),T=(E[0],E[1]),N=(0,l.useState)(null),R=N[0],D=N[1],B=(0,l.useCallback)((function(e){I(e),T(!0)}),[I,T]);(0,l.useEffect)((function(){o&&!c&&I(null==o?void 0:o.platform_settings),n&&!R&&D(null==n?void 0:n.name)}),[o]);var A=(0,l.useMemo)((function(){var e=(0,y.RA)((0,y.Y6)());return(0,k.jsx)(j.ZP,{beforeIcon:(0,k.jsx)(O.Add,{}),compact:!0,onClick:function(){return B((function(t){return C(C({},t),{},{projects:C(C({},null==c?void 0:c.projects),{},(0,u.Z)({},e,{}))})}))},secondary:!0,small:!0,children:"Register project"})}),[c]),F=(0,a.Db)(Z.ZP.projects.useUpdate(null==o?void 0:o.name),{onSuccess:function(e){return(0,S.wD)(e,{callback:function(e){var t=e.project;B((function(e){return C(C(C({},e),t),{},{features:C(C({},null==e?void 0:e.features),{},{override:!(null==t||!t.features_override||(0,w.Qr)(null==t?void 0:t.features_override))})})})),d.Am.success("Platform settings successfully saved.",{position:d.Am.POSITION.BOTTOM_RIGHT,toastId:"platform-settings-success-".concat(null==t?void 0:t.name)})}})}}),M=(0,s.Z)(F,2),H=M[0],W=M[1].isLoading;return(0,k.jsxs)(m.Z,{p:P.cd,children:[(0,k.jsx)(g.Z,{headerChildren:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,{ml:P.cd}),A]}),title:"Projects",children:(0,k.jsx)(f.Z,{noBorder:!0,noBoxShadow:!0,visibleMappingForced:Object.keys((null==c?void 0:c.projects)||{}).reduce((function(e,t,r){return C(C({},e),{},(0,u.Z)({},String(r),!0))}),{}),children:Object.entries((null==c?void 0:c.projects)||{}).map((function(e){var t=(0,s.Z)(e,2),r=t[0],n=t[1],o=n.path,i=n.uuid;return(0,k.jsxs)(p.Z,{noBorderRadius:!0,noPaddingContent:!0,title:(0,k.jsx)(v.ZP,{alignItems:"center",children:(0,k.jsx)(b.ZP,{large:!0,monospace:!0,children:r})}),titleXPadding:P.cd*P.iI,titleYPadding:P.cd*P.iI,children:[(0,k.jsx)(g.S,{description:"Unique name of project.",textInput:{fullWidth:!1,monospace:!0,onChange:function(e){return B((function(t){return C(C({},t),{},{projects:C(C({},null==c?void 0:c.projects),{},(0,u.Z)({},r,C(C({},n),{},{uuid:e.target.value})))})}))},placeholder:r,value:i},title:"Name"}),(0,k.jsx)(g.S,{description:(0,k.jsxs)(b.ZP,{muted:!0,small:!0,children:["Relative path to the project directory starting from the root project directory.",(0,k.jsx)("br",{}),"If blank, the default path will be the project name."]}),textInput:{fullWidth:!1,monospace:!0,onChange:function(e){return B((function(t){return C(C({},t),{},{projects:C(C({},null==c?void 0:c.projects),{},(0,u.Z)({},r,C(C({},n),{},{path:e.target.value})))})}))},placeholder:r,value:o||""},title:"Path"}),(0,k.jsx)(g.S,{description:"The currently selected project.",title:"Currently selected project",toggleSwitch:{checked:r===R,onCheck:function(){return D(r===R?null:r)}}}),(0,k.jsx)(h.Z,{light:!0}),(0,k.jsx)(g.S,{children:(0,k.jsx)(j.ZP,{compact:!0,noBorder:!0,onClick:function(){B((function(e){return C(C({},e),{},{projects:(0,w.gR)(null==c?void 0:c.projects,[r])})}))},small:!0,children:"Deregister project"})})]},r)}))})}),(0,k.jsx)(m.Z,{mt:P.HN}),(0,k.jsx)(g.Z,{title:"Features",children:(0,k.jsx)(g.S,{description:(0,k.jsxs)(b.ZP,{muted:!0,small:!0,children:["If this setting is toggled, the feature flags that are set from the root project",(0,k.jsx)("br",{}),"will override the feature flags of all sub-projects."]}),title:"Override all project features",toggleSwitch:{checked:null==c||null===(e=c.features)||void 0===e?void 0:e.override,onCheck:function(){return B((function(e){var t;return C(C({},e),{},{features:C(C({},null==e?void 0:e.features),{},{override:!(null!=c&&null!==(t=c.features)&&void 0!==t&&t.override)})})}))}}})}),(0,k.jsx)(m.Z,{my:P.HN,children:(0,k.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)("div",{}),(0,k.jsx)(j.ZP,{beforeIcon:(0,k.jsx)(O.Save,{}),loading:W,onClick:function(){return H({project:{activate_project:R,platform_settings:c,root_project:!0}})},primary:!0,children:"Save settings"})]})})]})},T=r(28274),N=r(24755);function R(){return(0,k.jsx)(T.Z,{uuidItemSelected:N.B2.SETTINGS,uuidWorkspaceSelected:N.Pl.PROJECT_PLATFORM,children:(0,k.jsx)(E,{})})}R.getInitialProps=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var D=(0,c.Z)(R)},39863:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/platform/settings",function(){return r(80754)}])},80022:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},15544:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:function(){return n}})},13692:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(61049);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,n.Z)(e,t)}},93189:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(12539),o=r(80022);function i(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[1557,5699,9774,2888,179],(function(){return t=39863,e(e.s=t);var t}));var t=e.O();_N_E=t}]);