(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1221],{8666:function(e,n,i){"use strict";var t;i.d(n,{b:function(){return t}}),function(e){e.BLOCK="block",e.PIPELINE="pipeline"}(t||(t={}))},55620:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return De}});var t=i(77837),u=i(75582),o=i(21831),r=i(82394),l=i(38860),c=i.n(l),s=i(12691),d=i.n(s),a=i(82684),p=i(69864),f=i(34376),v=i(52749),h=i(60523),m=i(71180),g=i(90299),b=i(31882),j=i(94629),Z=i(97618),x=i(55485),_=i(85854),C=i(93369),w=i(65956),y=i(38276),k=i(30160),P=i(35576),I=i(17488),T=i(28598);var S=function(e){var n=e.description,i=e.isLoading,t=e.maxWidth,u=e.minWidth,o=e.noEmptyValue,r=e.onClose,l=e.onSave,c=e.textArea,s=e.title,d=e.value,p=(0,a.useRef)(null),f=(0,a.useState)(d),v=f[0],h=f[1],g=c?P.Z:I.Z;return(0,a.useEffect)((function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.focus()}),[]),(0,T.jsxs)(w.Z,{maxWidth:t,minWidth:u,children:[(0,T.jsx)(k.ZP,{bold:!0,children:s}),(0,T.jsx)(y.Z,{mt:1,children:(0,T.jsx)(g,{monospace:!0,onChange:function(e){return h(e.target.value)},ref:p,rows:c?7:null,value:v})}),n&&(0,T.jsx)(y.Z,{mt:2,children:(0,T.jsx)(k.ZP,{muted:!0,small:!0,children:n})}),(0,T.jsx)(y.Z,{mt:3,children:(0,T.jsxs)(x.ZP,{children:[(0,T.jsx)(C.ZP,{bold:!0,inline:!0,loading:i,onClick:function(){v===d||o&&!v?r():l(v)},outline:!0,primary:!0,uuid:"Inputs/InputModal/SaveInput",children:"Save"}),(0,T.jsx)(y.Z,{ml:1}),(0,T.jsx)(m.ZP,{onClick:r,children:"Cancel"})]})})]})},O=i(48670),E=i(55072),A=i(57653),D=i(55729),M=i(93808),R=i(82359),G=i(44085),U=i(4190),L=i(75499),N=i(48381),B=i(69650),H=i(85544),$=i(35686),Y=i(44897),F=i(77417),z=i(42631),V=i(44425),Q=i(72473),W=i(23780),q=i(8666),K=i(46684),X=i(53808),J="pipeline_list_filters",ee="pipeline_list_group_bys",ne="pipeline_list_sort_column_index",ie="pipeline_list_sort_direction",te="pipeline_list_selected_tab_uuid";function ue(e){return(0,X.t8)(J,e),e}function oe(e){return(0,X.t8)(ee,e),e}var re=i(11498),le=i(32929),ce=i(44898),se=i(70515),de=i(30229),ae=i(81655),pe=i(31608),fe=i(81728),ve=i(3917),he=i(72619),me=i(69419),ge=i(65458),be=i(15610),je=i(86735),Ze=i(42122),xe=i(95924),_e=i(70320),Ce=i(89538),we=i(44952);function ye(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function ke(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ye(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ye(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var Pe={Icon:Q.Schedule,label:function(){return"Recently viewed"},uuid:"recent"},Ie={Icon:Q.PipelineV3,label:function(e){return null!==e&&void 0!==e&&e.count?"All pipelines \u203a ".concat((null===e||void 0===e?void 0:e.count)||0):"All pipelines"},uuid:"all"},Te=[Ie,Pe],Se="tab",Oe=[A.$1.SEARCH],Ee={borderRadius:"".concat(z.BG,"px"),iconOnly:!0,noBackground:!0,noBorder:!0,outline:!0,padding:"4px"};function Ae(){var e,n,i,t,l=(0,f.useRouter)(),c=(0,a.useRef)(null),s=(0,a.useRef)(null),C=(0,a.useRef)(null),P=(0,a.useRef)(null),I=(0,F.Z)(),M=I.fetchProjects,z=I.project,ye=(0,a.useState)(null),Ae=ye[0],De=ye[1],Me=(0,a.useState)(null),Re=Me[0],Ge=Me[1],Ue=(0,a.useState)(null),Le=Ue[0],Ne=Ue[1],Be=(0,a.useState)(null),He=Be[0],$e=Be[1],Ye=(0,a.useState)(null),Fe=Ye[0],ze=Ye[1],Ve=(0,a.useCallback)((function(e){ze(e),clearTimeout(P.current),P.current=setTimeout((function(){return(0,be.u)((0,r.Z)({},A.$1.SEARCH,e))}),500)}),[ze]),Qe=(0,a.useState)({}),We=Qe[0],qe=Qe[1],Ke=(0,a.useState)(null),Xe=Ke[0],Je=Ke[1],en=(0,me.iV)(),nn=ke((0,r.Z)({},re.$D.LIMIT,E.Q),(0,me.DQ)(en,[A.$1.SEARCH,A.$1.STATUS,A.$1.TAG,A.$1.TYPE].concat((0,o.Z)(re.RG)))),tn=(0,a.useMemo)((function(){return null===en||void 0===en?void 0:en.tab}),[en]);(0,a.useEffect)((function(){var e;De(null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.getBoundingClientRect().height)}),[en,c]);var un=(0,a.useMemo)((function(){var e;return(0,_e.hY)(null===z||void 0===z||null===(e=z.features)||void 0===e?void 0:e[R.d.LOCAL_TIMEZONE])}),[null===z||void 0===z?void 0:z.features]),on=(0,a.useMemo)((function(){var e;return null===z||void 0===z||null===(e=z.features)||void 0===e?void 0:e[R.d.OPERATION_HISTORY]}),[z]),rn=(0,a.useMemo)((function(){return un?ae.O$:{}}),[un]),ln=$.ZP.pipelines.list(ke(ke({},nn),{},{include_schedules:1}),{revalidateOnFocus:!1}),cn=ln.data,sn=ln.mutate,dn=(0,a.useMemo)((function(){return(null===en||void 0===en?void 0:en[A.$1.HISTORY_DAYS])||7}),[en]),an=$.ZP.pipelines.list(ke(ke({},nn),{},(e={},(0,r.Z)(e,A.$1.HISTORY_DAYS,(0,fe.HW)(dn)?Number(dn):dn),(0,r.Z)(e,"include_schedules",1),e)),{},{pauseFetch:!on||!tn||Pe.uuid!==tn}),pn=an.data,fn=an.mutate,vn=(0,a.useCallback)((function(e){return e}),[Fe]),hn=(0,a.useMemo)((function(){var e=vn((null===cn||void 0===cn?void 0:cn.pipelines)||[]);if(null!==en&&void 0!==en&&en[A.$1.TAG]){var n=en[A.$1.TAG];e=e.filter((function(e){var i=e.tags;return i.some((function(e){return n.includes(e)}))||0===i.length&&n.includes(A.$1.NO_TAGS)}))}return e}),[cn,vn,en]),mn=(0,a.useMemo)((function(){return vn((null===pn||void 0===pn?void 0:pn.pipelines)||[])}),[pn,vn]),gn=(0,a.useMemo)((function(){return(0,je.HK)(hn,(function(e){return e.uuid}))}),[hn]),bn=(0,a.useMemo)((function(){return(0,je.HK)(mn,(function(e){return e.uuid}))}),[mn]),jn=(0,a.useCallback)((function(e){var n,i,t,u;return null===e||void 0===e||null===(n=e[2])||void 0===n||null===(i=n.props)||void 0===i||null===(t=i.children)||void 0===t||null===(u=t.props)||void 0===u?void 0:u.children}),[]),Zn=(0,a.useMemo)((function(){return(null===Le||void 0===Le?void 0:Le.length)>0?null===Le||void 0===Le?void 0:Le.map((function(e){var n=jn(e);return null===gn||void 0===gn?void 0:gn[n]})):hn}),[jn,Le,hn,gn]),xn=(0,a.useMemo)((function(){return(null===He||void 0===He?void 0:He.length)>0?null===He||void 0===He?void 0:He.map((function(e){var n=jn(e);return null===bn||void 0===bn?void 0:bn[n]})):mn}),[jn,He,mn,bn]),_n=(0,a.useMemo)((function(){return[1,2,3,4,5,6,8,9]}),[]),Cn=null===en||void 0===en?void 0:en[ae.lG.SORT_COL_IDX],wn=null===en||void 0===en?void 0:en[ae.lG.SORT_DIRECTION],yn=(0,a.useMemo)((function(){return Cn?{columnIndex:+Cn,sortDirection:wn||ae.sh.ASC}:void 0}),[Cn,wn]),kn=null===en||void 0===en?void 0:en[A.$1.GROUP],Pn=(0,p.Db)((function(e){var n=e.pipelineUUID,i=e.filesOnly,t=void 0!==i&&i;return $.ZP.downloads.pipelines.useCreate(n)({download:{ignore_folder_structure:t}})}),{onSuccess:function(e){return(0,he.wD)(e,{callback:function(){var n=e.data.download.token;(0,we.K)(n)},onErrorCallback:function(e,n){return Je({errors:n,response:e})}})}}),In=(0,u.Z)(Pn,1)[0];(0,a.useEffect)((function(){null!==nn&&void 0!==nn&&nn[A.$1.SEARCH]&&null===Fe&&ze(null===nn||void 0===nn?void 0:nn[A.$1.SEARCH])}),[nn,Fe,ze]),(0,a.useEffect)((function(){var e,n={};if(Cn&&_n.includes(+Cn))(0,X.t8)(ne,Cn),wn&&(0,X.t8)(ie,wn);else{var i=(0,X.U2)(ne,null),t=(0,X.U2)(ie,ae.sh.ASC);null!==i&&(n[ae.lG.SORT_COL_IDX]=i,n[ae.lG.SORT_DIRECTION]=t)}on&&(tn?(0,X.t8)(te,tn):n.tab=(0,X.U2)(te,null===Te||void 0===Te||null===(e=Te[0])||void 0===e?void 0:e.uuid));if(kn)oe((0,r.Z)({},kn,!0));else{var o,l=(0,X.U2)(ee,{});l&&Object.entries(l).forEach((function(e){var n=(0,u.Z)(e,2),i=n[0],t=n[1];!o&&t&&(o=i)})),o&&(n[A.$1.GROUP]=o)}if((0,Ze.Qr)(nn)){var c={},s=(0,X.U2)(J,{});s&&Object.entries(s).forEach((function(e){var n=(0,u.Z)(e,2),i=n[0],t=n[1];"undefined"!==typeof t&&null!==t&&(re.RG.includes(i)||Oe.includes(i)?c[i]=t:(c[i]=[],Object.entries(t).forEach((function(e){var n=(0,u.Z)(e,2),t=n[0];n[1]&&c[i].push(t)}))))})),(0,Ze.Qr)(c)||(n={},Object.entries(ke(ke({},n),c)||{}).forEach((function(e){var i=(0,u.Z)(e,2),t=i[0],o=i[1];"undefined"!==typeof o&&null!==o&&(n[t]=o)})))}else{var d={};Object.entries(nn).forEach((function(e){var n=(0,u.Z)(e,2),i=n[0],t=n[1];d[i]={};var o,r=t;"undefined"!==typeof t&&null!==t&&(re.RG.includes(i)||Oe.includes(i)?d[i]=r:(Array.isArray(r)||(r=[r]),r&&Array.isArray(r)&&(null===(o=r)||void 0===o||o.forEach((function(e){d[i][e]=!0})))))})),ue((0,Ze.hB)(d))}(0,Ze.Qr)(n)||(0,be.u)((0,Ze.hB)(n),{pushHistory:!1})}),[kn,on,nn,tn,_n,Cn,wn]),(0,a.useEffect)((function(){(0,he.bB)(cn,Je)}),[cn]);var Tn=function(e){return(0,p.Db)($.ZP.pipelines.useCreate(),{onSuccess:function(n){return(0,he.wD)(n,{callback:function(n){var i=n.pipeline.uuid;null===e||void 0===e||e(i)},onErrorCallback:function(e,n){return Je({errors:n,response:e})}})}})},Sn=Tn((function(e){return l.push("/pipelines/[pipeline]/edit","/pipelines/".concat(e,"/edit"))})),On=(0,u.Z)(Sn,2),En=On[0],An=On[1].isLoading,Dn=Tn((function(){null===sn||void 0===sn||sn(),null===fn||void 0===fn||fn()})),Mn=(0,u.Z)(Dn,2),Rn=Mn[0],Gn=Mn[1].isLoading,Un=(0,p.Db)((function(e){return $.ZP.pipelines.useUpdate(e.uuid)({pipeline:e})}),{onSuccess:function(e){return(0,he.wD)(e,{callback:function(e){var n=e.pipeline.uuid;qe((function(e){return ke(ke({},e),{},(0,r.Z)({},n,!1))})),sn(),null===fn||void 0===fn||fn(),null===Wn||void 0===Wn||Wn(),Ge(null)},onErrorCallback:function(e,n){var i,t=null===e||void 0===e||null===(i=e.url_parameters)||void 0===i?void 0:i.pk;qe((function(e){return ke(ke({},e),{},(0,r.Z)({},t,!1))})),Je({errors:n,response:e})}})}}),Ln=(0,u.Z)(Un,2),Nn=Ln[0],Bn=Ln[1].isLoading,Hn=(0,p.Db)((function(e){return $.ZP.pipelines.useDelete(e)()}),{onSuccess:function(e){return(0,he.wD)(e,{callback:function(){null===sn||void 0===sn||sn(),null===fn||void 0===fn||fn()},onErrorCallback:function(e,n){return Je({errors:n,response:e})}})}}),$n=(0,u.Z)(Hn,2),Yn=$n[0],Fn=$n[1].isLoading,zn=(0,Ce.dd)((function(e){var n=e.pipeline,i=e.pipelineDescription,t=e.pipelineName;return(0,T.jsx)(S,{isLoading:Bn,minWidth:55*se.iI,noEmptyValue:!!t,onClose:Wn,onSave:function(e){var i=n||Re;if(i){var u=i.uuid,o={uuid:u};t?o.name=e:o.description=e,qe((function(e){return ke(ke({},e),{},(0,r.Z)({},u,!0))})),Nn(o)}},textArea:!t,title:t?"Rename pipeline":"Edit description for ".concat(null===n||void 0===n?void 0:n.uuid),value:t||i})}),{},[Bn,Re],{background:!0,uuid:"rename_pipeline_and_save"}),Vn=(0,u.Z)(zn,2),Qn=Vn[0],Wn=Vn[1],qn=(0,Ce.dd)((function(){return(0,T.jsx)(W.BC,{children:(0,T.jsx)(h.Z,{contained:!0,onClickCustomTemplate:function(e){En({pipeline:{custom_template_uuid:null===e||void 0===e?void 0:e.template_uuid,name:(0,fe.Y6)()}}).then((function(){Jn()}))},showBreadcrumbs:!0,tabs:[le.A2]})})}),{},[En],{background:!0,uuid:"browse_templates"}),Kn=(0,u.Z)(qn,2),Xn=Kn[0],Jn=Kn[1],ei=(0,Ce.dd)((function(e){var n=e.cancelButtonText,i=(e.header,e.onCancel),t=e.onSaveSuccess;return(0,T.jsx)(W.BC,{children:(0,T.jsx)(D.Z,{cancelButtonText:n,contained:!0,header:(0,T.jsx)(y.Z,{mb:se.HN,children:(0,T.jsxs)(w.Z,{children:[(0,T.jsx)(k.ZP,{warning:!0,children:"You need to add an OpenAI API key to your project before you can generate pipelines using AI."}),(0,T.jsx)(y.Z,{mt:1,children:(0,T.jsxs)(k.ZP,{warning:!0,children:["Read ",(0,T.jsx)(O.Z,{href:"https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key",openNewWindow:!0,children:"OpenAI\u2019s documentation"})," to get your API key."]})})]})}),onCancel:function(){null===i||void 0===i||i(),ti()},onSaveSuccess:function(e){M(),ti(),null===t||void 0===t||t(e)}})})}),{},[M],{background:!0,uuid:"configure_project"}),ni=(0,u.Z)(ei,2),ii=ni[0],ti=ni[1],ui=(0,Ce.dd)((function(){return(0,T.jsx)(W.BC,{children:(0,T.jsx)(v.Z,{createPipeline:En,isLoading:An,onClose:li})})}),{},[En,An],{background:!0,disableClickOutside:!0,disableCloseButton:!0,uuid:"AI_modal"}),oi=(0,u.Z)(ui,2),ri=oi[0],li=oi[1],ci=(0,a.useMemo)((function(){return(0,ge.d)(En,{showAIModal:function(){null!==z&&void 0!==z&&z.openai_api_key?ri():ii({onSaveSuccess:function(){ri()}})},showBrowseTemplates:Xn})}),[En,z,ri,Xn,ii]),si=$.ZP.tags.list().data,di=(0,a.useMemo)((function(){return(0,je.YC)((null===si||void 0===si?void 0:si.tags)||[],(function(e){return e.uuid}))}),[si]),ai=(0,a.useMemo)((function(){return(0,T.jsx)(H.Z,{addButtonProps:{isLoading:An,label:"New",menuItems:ci},deleteRowProps:{confirmationMessage:"This is irreversible and will immediately delete everything associated           with the pipeline, including its blocks, triggers, runs, logs, and history.",isLoading:Fn,item:"pipeline",onDelete:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===Re||void 0===Re?void 0:Re.uuid,"?"))&&Yn(null===Re||void 0===Re?void 0:Re.uuid)}},extraActionButtonProps:{Icon:Q.Clone,confirmationDescription:"Cloning the selected pipeline will create a new pipeline with the same           configuration and code blocks. The blocks use the same block files as the original pipeline.           Pipeline triggers, runs, backfills, and logs are not copied over to the new pipeline.",confirmationMessage:"Do you want to clone the pipeline ".concat(null===Re||void 0===Re?void 0:Re.uuid,"?"),isLoading:Gn,onClick:function(){return Rn({pipeline:{clone_pipeline_uuid:null===Re||void 0===Re?void 0:Re.uuid}})},openConfirmationDialogue:!0,tooltip:"Clone pipeline"},filterOptions:{status:A.kA,tag:[A.$1.NO_TAGS].concat((0,o.Z)(di.map((function(e){return e.uuid})))),type:Object.values(A.qL)},filterValueLabelMapping:{status:A.kA.reduce((function(e,n){return ke(ke({},e),{},(0,r.Z)({},n,(0,fe.J3)((0,fe.kC)(n))))}),{}),tag:ke((0,r.Z)({},A.$1.NO_TAGS,"No tags"),di.reduce((function(e,n){var i=n.uuid;return ke(ke({},e),{},(0,r.Z)({},i,i))}),{})),type:A.G7},groupButtonProps:{groupByLabel:kn,menuItems:[{beforeIcon:kn===A.r0.STATUS?(0,T.jsx)(Q.Check,{fill:Y.Z.content.default,size:1.5*se.iI}):(0,T.jsx)(Q.Circle,{muted:!0,size:1.5*se.iI}),label:function(){return(0,fe.kC)(A.r0.STATUS)},onClick:function(){var e=kn===A.r0.STATUS?null:A.r0.STATUS;e||oe({}),(0,be.u)((0,r.Z)({},A.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Status"},{beforeIcon:kn===A.r0.TAG?(0,T.jsx)(Q.Check,{fill:Y.Z.content.default,size:1.5*se.iI}):(0,T.jsx)(Q.Circle,{muted:!0,size:1.5*se.iI}),label:function(){return(0,fe.kC)(A.r0.TAG)},onClick:function(){var e=kn===A.r0.TAG?null:A.r0.TAG;e||oe({}),(0,be.u)((0,r.Z)({},A.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Tag"},{beforeIcon:kn===A.r0.TYPE?(0,T.jsx)(Q.Check,{fill:Y.Z.content.default,size:1.5*se.iI}):(0,T.jsx)(Q.Circle,{muted:!0,size:1.5*se.iI}),label:function(){return(0,fe.kC)(A.r0.TYPE)},onClick:function(){var e=kn===A.r0.TYPE?null:A.r0.TYPE;e||oe({}),(0,be.u)((0,r.Z)({},A.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Type"}]},moreActionsMenuItems:[{label:function(){return"Rename pipeline"},onClick:function(){return Qn({pipelineName:null===Re||void 0===Re?void 0:Re.name})},uuid:"Pipelines/MoreActionsMenu/Rename"},{label:function(){return"Edit description"},onClick:function(){return Qn({pipeline:Re,pipelineDescription:null===Re||void 0===Re?void 0:Re.description})},uuid:"Pipelines/MoreActionsMenu/EditDescription"}],onClickFilterDefaults:function(){ue({}),l.push("/pipelines")},onFilterApply:function(e,n){Object.values(n).every((function(e){return!(null!==e&&void 0!==e&&e.length)}))&&ue({})},query:nn,resetLimitOnFilterApply:!0,searchProps:{onChange:Ve,value:Fe},selectedRowId:null===Re||void 0===Re?void 0:Re.uuid,setSelectedRow:Ge})}),[Rn,Yn,kn,Gn,An,Fn,ci,nn,l,Fe,Re,Ve,Qn,di]),pi=(0,W.VI)(null,{},[],{uuid:"pipelines/list"}),fi=(0,u.Z)(pi,1)[0],vi=(0,p.Db)($.ZP.projects.useUpdate(null===z||void 0===z?void 0:z.name),{onSuccess:function(e){return(0,he.wD)(e,{callback:function(){M()},onErrorCallback:function(e,n){return fi({errors:n,response:e})}})}}),hi=(0,u.Z)(vi,2),mi=hi[0],gi=hi[1].isLoading,bi=(0,a.useCallback)((function(e){return mi({project:e})}),[mi]),ji=(0,Ce.dd)((function(){return(0,T.jsxs)(w.Z,{maxWidth:60*se.iI,children:[(0,T.jsx)(y.Z,{mb:1,children:(0,T.jsx)(_.Z,{children:"Help improve Mage"})}),(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsx)(k.ZP,{default:!0,children:"Please contribute usage statistics to help improve the developer experience for you and everyone in the community \ud83e\udd1d."})}),(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsx)(w.Z,{success:!0,children:(0,T.jsxs)(x.ZP,{alignItems:"center",children:[(0,T.jsx)(Q.Secrets,{size:5*se.iI,success:!0}),(0,T.jsx)(y.Z,{mr:1}),(0,T.jsx)(Z.Z,{children:(0,T.jsx)(k.ZP,{children:"All usage statistics are completely anonymous. It\u2019s impossible for Mage to know which statistics belongs to whom."})})]})})}),(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsxs)(k.ZP,{default:!0,children:["By opting into sending usage statistics to ",(0,T.jsx)(O.Z,{href:"https://www.mage.ai",openNewWindow:!0,children:"Mage"}),", it\u2019ll help the team and community of contributors (",(0,T.jsx)(O.Z,{href:"https://www.mage.ai/chat",openNewWindow:!0,children:"Magers"}),") learn what\u2019s going wrong with the tool and what improvements can be made."]})}),(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsx)(k.ZP,{default:!0,children:"In addition to helping reduce potential errors, you\u2019ll help inform which features are useful and which need work."})}),(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsxs)(x.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,T.jsx)(k.ZP,{bold:!0,children:"I want to help make Mage more powerful for everyone"}),(0,T.jsx)(y.Z,{mr:se.cd}),(0,T.jsx)(B.Z,{checked:!0,onCheck:function(){window.confirm("Are you sure you don\u2019t want to help everyone in the community?")&&bi({help_improve_mage:!1}).then((function(){return _i()}))}})]})}),gi&&(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsx)(U.Z,{inverted:!0})}),(0,T.jsx)(y.Z,{mb:se.cd,children:(0,T.jsxs)(k.ZP,{muted:!0,small:!0,children:["To learn more about how this works, please check out the ",(0,T.jsx)(O.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,small:!0,children:"documentation"}),"."]})}),(0,T.jsx)(m.ZP,{onClick:function(){return bi({help_improve_mage:!0}).then((function(){return _i()}))},secondary:!0,children:"Close"})]})}),{},[z],{background:!0,hideCallback:function(){bi({help_improve_mage:!0})},uuid:"help_mage"}),Zi=(0,u.Z)(ji,2),xi=Zi[0],_i=Zi[1];(0,a.useEffect)((function(){z&&null===(null===z||void 0===z?void 0:z.help_improve_mage)&&xi()}),[z,xi]);var Ci=(0,a.useCallback)((function(e){var n={};null===e||void 0===e||e.forEach((function(e,i){var t=null===e||void 0===e?void 0:e[kn];if(A.r0.STATUS===kn){var u=(e||{}).schedules,o=void 0===u?[]:u,r=o.length;t=o.find((function(e){var n=e.status;return de.fq.ACTIVE===n}))?A.QK.ACTIVE:r>=1?A.QK.INACTIVE:A.QK.NO_SCHEDULES}else if(A.r0.TAG===kn){t=(null===e||void 0===e?void 0:e.tags)?(0,je.YC)(e.tags,(function(e){return e})).join(", "):""}n[t]||(n[t]=[]),n[t].push(i)}));var i=[],t=[];A.r0.STATUS===kn?Object.values(A.QK).forEach((function(e){i.push(n[e]),t.push((0,fe.vg)(e))})):A.r0.TAG===kn?(0,je.YC)(Object.keys(n),(function(e){return e})).forEach((function(e){i.push(n[e]),e?t.push(e.split(", ").map((function(e,n){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{style:{marginLeft:n>=1?4:0}},"".concat(e,"-").concat(n,"-spacing")),(0,T.jsx)(b.Z,{small:!0,children:(0,T.jsx)(k.ZP,{children:e})},"".concat(e,"-").concat(n))]})}))):t.push("No tags")})):A.r0.TYPE===kn&&Object.values(A.qL).forEach((function(e){i.push(n[e]),t.push(A.G7[e])}));var u=[],o=[];return null===i||void 0===i||i.forEach((function(e,n){"undefined"!==typeof e&&null!==e&&(null===e||void 0===e?void 0:e.length)>=1&&(o.push(e),u.push(null===t||void 0===t?void 0:t[n]))})),{rowGroupHeaders:u,rowsGroupedByIndex:o}}),[kn]),wi=(0,a.useMemo)((function(){return Ci(Zn)}),[Ci,Zn]),yi=wi.rowGroupHeaders,ki=wi.rowsGroupedByIndex,Pi=(0,a.useMemo)((function(){return Ci(xn)}),[Ci,xn]),Ii=Pi.rowGroupHeaders,Ti=Pi.rowsGroupedByIndex,Si=(0,a.useCallback)((function(e,n,i,t,u){return(0,T.jsx)(L.Z,{columnFlex:[null,null,null,2,null,null,null,1,null,null,null],columns:[{label:function(){return""},uuid:"action"},{uuid:(0,fe.kC)(A.r0.STATUS)},{uuid:"Name"},{uuid:"Description"},{uuid:(0,fe.kC)(A.r0.TYPE)},ke(ke({},rn),{},{uuid:"Updated at"}),ke(ke({},rn),{},{uuid:"Created at"}),{uuid:"Tags"},{uuid:"Blocks"},{uuid:"Triggers"},{center:!0,label:function(){return""},uuid:"Actions"}],defaultSortColumnIndex:2,getUniqueRowIdentifier:jn,isSelectedRow:function(e){var i;return(null===(i=n[e])||void 0===i?void 0:i.uuid)===(null===Re||void 0===Re?void 0:Re.uuid)},localStorageKeySortColIdx:ne,localStorageKeySortDirection:ie,onClickRow:function(e){return Ge((function(i){var t=n[e];return(null===i||void 0===i?void 0:i.uuid)!==(null===t||void 0===t?void 0:t.uuid)?t:null}))},onDoubleClickRow:function(e){l.push("/pipelines/[pipeline]/edit","/pipelines/".concat(n[e].uuid,"/edit"))},ref:s,renderRightClickMenuItems:function(e){var i=n[e];return[{label:function(){return"Edit description"},onClick:function(){return Qn({pipeline:i,pipelineDescription:null===i||void 0===i?void 0:i.description})},uuid:"edit_description"},{label:function(){return"Rename"},onClick:function(){return Qn({pipeline:i,pipelineName:null===i||void 0===i?void 0:i.name})},uuid:"rename"},{label:function(){return"Clone"},onClick:function(){return Rn({pipeline:{clone_pipeline_uuid:null===i||void 0===i?void 0:i.uuid}})},uuid:"clone"},{label:function(){return"Download (keep folder structure)"},onClick:function(){In({pipelineUUID:null===i||void 0===i?void 0:i.uuid,filesOnly:!1})},uuid:"download_keep_folder_structure"},{label:function(){return"Download (without folder structure)"},onClick:function(){In({pipelineUUID:null===i||void 0===i?void 0:i.uuid,filesOnly:!0})},uuid:"download_without_folder_structure"},{label:function(){return"Add/Remove tags"},onClick:function(){l.push("/pipelines/[pipeline]/settings","/pipelines/".concat(null===i||void 0===i?void 0:i.uuid,"/settings"))},uuid:"add_tags"},{label:function(){return"Create template"},onClick:function(){l.push("/templates?object_type=".concat(ce.R,"&new=1&pipeline_uuid=").concat(null===i||void 0===i?void 0:i.uuid))},uuid:"create_custom_template"},{label:function(){return"Create global data product"},onClick:function(){l.push("/global-data-products?object_type=".concat(q.b.PIPELINE,"&new=1&object_uuid=").concat(null===i||void 0===i?void 0:i.uuid))},uuid:"create_global_data_product"},{label:function(){return"Delete"},onClick:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===i||void 0===i?void 0:i.uuid,"?"))&&Yn(null===i||void 0===i?void 0:i.uuid)},uuid:"delete"}]},rightClickMenuHeight:252,rightClickMenuWidth:30*se.iI,rowGroupHeaders:i,rows:null===e||void 0===e?void 0:e.map((function(e,n){var i=e.blocks,t=e.created_at,u=e.description,o=e.schedules,c=e.tags,s=e.type,a=e.updated_at,p=e.uuid,f=i.filter((function(e){var n=e.type;return V.tf.SCRATCHPAD!==n})).length,v=o.length,h=o.find((function(e){var n=e.status;return de.fq.ACTIVE===n})),g=(0,T.jsx)("div",{children:(0,T.jsx)(N.Z,{tags:null===c||void 0===c?void 0:c.map((function(e){return{uuid:e}}))})},"pipeline_tags_".concat(n));return[v>=1||We[p]?(0,T.jsx)(m.ZP,{iconOnly:!0,loading:!!We[p],noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,xe.j)(n),qe((function(e){return ke(ke({},e),{},(0,r.Z)({},p,!0))})),Nn(ke(ke({},e),{},{status:h?de.fq.INACTIVE:de.fq.ACTIVE}))},children:h?(0,T.jsx)(Q.Pause,{muted:!0,size:2*se.iI}):(0,T.jsx)(Q.PlayButtonFilled,{default:!0,size:2*se.iI})}):null,(0,T.jsx)(k.ZP,{default:!h,monospace:!0,success:!!h,children:h?de.fq.ACTIVE:v>=1?de.fq.INACTIVE:"no schedules"},"pipeline_status_".concat(n)),(0,T.jsx)(d(),{as:"/pipelines/".concat(p),href:"/pipelines/[pipeline]",passHref:!0,children:(0,T.jsx)(O.Z,{sameColorAsText:!0,children:p})},"pipeline_name_".concat(n)),(0,T.jsx)(k.ZP,{default:!0,preWrap:!0,title:u,children:u},"pipeline_description_".concat(n)),(0,T.jsx)(k.ZP,{children:A.G7[s]},"pipeline_type_".concat(n)),(0,T.jsx)(k.ZP,{monospace:!0,small:!0,title:a?(0,ve._6)(a):null,children:a?(0,ve.XG)(a,un):(0,T.jsx)(T.Fragment,{children:"\u2014"})},"pipeline_updated_at_".concat(n)),(0,T.jsx)(k.ZP,{monospace:!0,small:!0,title:t?(0,ve._6)(t):null,children:t?(0,ve.XG)(t.slice(0,19),un):(0,T.jsx)(T.Fragment,{children:"\u2014"})},"pipeline_created_at_".concat(n)),g,(0,T.jsx)(k.ZP,{default:0===f,monospace:!0,children:f},"pipeline_block_count_".concat(n)),(0,T.jsx)(k.ZP,{default:0===v,monospace:!0,children:v},"pipeline_trigger_count_".concat(n)),(0,T.jsxs)(Z.Z,{flex:1,justifyContent:"flex-end",children:[(0,T.jsx)(m.ZP,ke(ke({},Ee),{},{onClick:function(){In({pipelineUUID:p})},title:"Download (keep folder structure)",children:(0,T.jsx)(Q.Save,{default:!0,size:2*se.iI})})),(0,T.jsx)(y.Z,{mr:1}),(0,T.jsx)(m.ZP,ke(ke({},Ee),{},{onClick:function(){l.push("/pipelines/[pipeline]","/pipelines/".concat(p))},title:"Detail",children:(0,T.jsx)(Q.Open,{default:!0,size:2*se.iI})})),(0,T.jsx)(y.Z,{mr:1}),(0,T.jsx)(m.ZP,ke(ke({},Ee),{},{onClick:function(){l.push("/pipelines/[pipeline]/logs","/pipelines/".concat(p,"/logs"))},title:"Logs",children:(0,T.jsx)(Q.File,{default:!0,size:2*se.iI})}))]},"chevron_icon_".concat(n))]})),rowsGroupedByIndex:t,setRowsSorted:u,sortableColumnIndexes:_n,sortedColumn:yn,stickyHeader:!0})}),[Rn,Yn,In,un,jn,We,l,Re,qe,Ge,Qn,_n,yn,rn,Nn]),Oi=(0,a.useMemo)((function(){return Si(hn,Zn,yi,ki,Ne)}),[hn,Zn,Si,yi,ki,Ne]),Ei=(0,a.useMemo)((function(){return Si(mn,xn,Ii,Ti,$e)}),[mn,xn,Si,Ii,Ti,$e]),Ai=(0,a.useMemo)((function(){return(null===hn||void 0===hn?void 0:hn.length)||0}),[hn]),Di=(0,a.useMemo)((function(){return(null===mn||void 0===mn?void 0:mn.length)||0}),[mn]),Mi=(0,a.useMemo)((function(){return(!on||Ie.uuid===tn)&&!Ai||on&&Pe.uuid===tn&&!Di}),[on,Ai,Di,tn]),Ri=(0,a.useMemo)((function(){var e=null===nn||void 0===nn?void 0:nn[re.$D.LIMIT];return(0,T.jsxs)(x.ZP,{alignItems:"center",children:[(0,T.jsx)(k.ZP,{muted:!0,small:!0,children:"Per page"}),(0,T.jsx)(y.Z,{mr:1}),(0,T.jsxs)(G.Z,{compact:!0,onChange:function(e){return(0,be.u)((0,r.Z)({},re.$D.LIMIT,e.target.value),{pushHistory:!0})},small:!0,value:e,children:[e&&(e>5*E.Q||e%E.Q)&&(0,T.jsx)("option",{value:e,children:e}),(0,je.w6)(5).map((function(e,n){var i=(n+1)*E.Q;return(0,T.jsx)("option",{value:i,children:i},i)}))]})]})}),[nn]),Gi=(0,a.useMemo)((function(){var e,n,i=cn;on&&Pe.uuid===tn&&(i=pn);var t=(null===(e=i)||void 0===e||null===(n=e.metadata)||void 0===n?void 0:n.count)||0,u=(null===nn||void 0===nn?void 0:nn[re.$D.LIMIT])||E.Q,o=(null===nn||void 0===nn?void 0:nn[re.$D.OFFSET])||0,l=Math.ceil(t/u);return(0,T.jsx)(y.Z,{p:se.cd,children:(0,T.jsx)(E.ZP,{maxPages:E.Et,onUpdate:function(e){var n=Number(e);(0,be.u)((0,r.Z)({},re.$D.OFFSET,n*u))},page:Math.floor(o/u),totalPages:l})})}),[cn,pn,on,nn,tn]);return(0,T.jsxs)(j.Z,{errors:Xe,setErrors:Je,subheaderChildren:(0,T.jsxs)(x.ZP,{alignItems:"center",justifyContent:"space-between",children:[ai,Ri]}),title:"Pipelines",uuid:"pipelines/index",children:[on&&(0,T.jsx)(y.Z,{px:se.cd,ref:c,children:(0,T.jsx)(g.Z,{noPadding:!0,onClickTab:function(e){var n,i=e.uuid;return(0,be.u)((n={},(0,r.Z)(n,Se,i),(0,r.Z)(n,re.$D.LIMIT,null),(0,r.Z)(n,re.$D.OFFSET,null),n),{pushHistory:!0})},regularSizeText:!0,selectedTabUUID:tn,tabs:Te.map((function(e){var n=e.Icon,i=e.label;return{Icon:n,label:function(){var e;return i({count:null===cn||void 0===cn||null===(e=cn.metadata)||void 0===e?void 0:e.count})},uuid:e.uuid}})),underlineStyle:!0})}),Mi?(0,T.jsx)(y.Z,{p:se.Mq,children:cn?(0,T.jsx)(k.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No pipelines available"}):(0,T.jsx)(U.Z,{inverted:!0,large:!0})}):null,(0,T.jsxs)(pe.cl,{hide:Mi,includePadding:!!kn,maxHeight:"calc(100vh - ".concat(K.Mz+74+(Ae||0)+(null===C||void 0===C||null===(n=C.current)||void 0===n||null===(i=n.getBoundingClientRect)||void 0===i||null===(t=i.call(n))||void 0===t?void 0:t.height),"px)"),children:[(!on||Ie.uuid===tn)&&Oi,on&&Pe.uuid===tn&&Ei]}),(0,T.jsx)("div",{ref:C,children:Gi})]})}Ae.getInitialProps=(0,t.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var De=(0,M.Z)(Ae)},44952:function(e,n,i){"use strict";i.d(n,{K:function(){return u}});var t=i(4383);function u(e){var n=(0,t.ZP)("downloads",e),i=document.createElement("a");i.href=n,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(n),document.body.removeChild(i)}},79274:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines",function(){return i(55620)}])},80022:function(e,n,i){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(n,{Z:function(){return t}})},15544:function(e,n,i){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}i.d(n,{Z:function(){return t}})},13692:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var t=i(61049);function u(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,t.Z)(e,n)}},93189:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(12539),u=i(80022);function o(e,n){if(n&&("object"===t(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(e)}},61049:function(e,n,i){"use strict";function t(e,n){return t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(e,n)}i.d(n,{Z:function(){return t}})}},function(e){e.O(0,[6085,1557,8038,9264,523,2474,3548,3951,9774,2888,179],(function(){return n=79274,e(e.s=n);var n}));var n=e.O();_N_E=n}]);