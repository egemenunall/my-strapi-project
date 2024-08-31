"use strict";(self.webpackChunkmy_strapi_project=self.webpackChunkmy_strapi_project||[]).push([[2510],{12510:($,W,s)=>{s.d(W,{ProtectedEditView:()=>Q,w:()=>F});var t=s(92132),D=s(21272),C=s(38413),p=s(4198),R=s(83997),K=s(94061),u=s(30893),T=s(90151),e=s(68074),M=s(55356),E=s(85963),a=s(2129),Y=s(54514),G=s(61535),y=s(54894),j=s(17703),g=s(12083),I=s(41525),x=s(55167),h=s(99831),O=s(60247),as=s(15126),rs=s(63299),os=s(67014),_s=s(59080),is=s(79275),Es=s(14718),ds=s(82437),ls=s(5790),Ts=s(35223),Ms=s(5409),Ps=s(74930),Ds=s(2600),Os=s(48940),ms=s(41286),fs=s(56336),cs=s(13426),gs=s(84624),hs=s(77965),vs=s(54257),As=s(71210),Ls=s(51187),Cs=s(39404),ps=s(58692),Rs=s(501),Is=s(57646),Bs=s(23120),Us=s(44414),Ws=s(25962),Ks=s(14664),us=s(42588),ys=s(90325),js=s(62785),xs=s(87443),ks=s(41032),Ss=s(22957),Fs=s(93179),Vs=s(73055),zs=s(15747),Ns=s(85306),$s=s(26509),Ys=s(32058),Gs=s(81185),Js=s(82261);const J=g.Ik().shape({name:g.Yj().max(100).required(a.iW.required),description:g.Yj().nullable(),lifespan:g.ai().integer().min(0).nullable().defined(a.iW.required),permissions:g.Yj().required(a.iW.required)}),F=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:_,unlockApp:v}=(0,a.MA)(),d=(0,a.hN)(),m=(0,j.W6)(),{state:A}=(0,j.zy)(),[r,f]=D.useState(A&&"accessKey"in A.transferToken?{...A.transferToken}:null),{trackUsage:P}=(0,a.z1)(),{setCurrentStep:Z}=(0,a.Cx)(),w=(0,I.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.ec)(w),B=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,l=B==="create",{_unstableFormatAPIError:U,_unstableFormatValidationErrors:V}=(0,a.wq)();D.useEffect(()=>{P(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:h.T})},[l,P]);const{data:k,error:S}=(0,x.u)(B,{skip:l||r!==null||!B});D.useEffect(()=>{S&&d({type:"warning",message:U(S)})},[S,U,d]),D.useEffect(()=>{k&&f(k)},[k]);const[ts]=(0,x.a)(),[es]=(0,x.b)(),ns=async(i,c)=>{P(l?"willCreateToken":"willEditToken",{tokenType:h.T}),_();const L=i.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(L))try{if(l){const n=await ts({...i,lifespan:i?.lifespan||null,permissions:L});if("error"in n){(0,I.x)(n.error)&&n.error.name==="ValidationError"?c.setErrors(V(n.error)):d({type:"warning",message:U(n.error)});return}f(n.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),P("didCreateToken",{type:r?.permissions,tokenType:h.T}),m.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),Z("transferTokens.success")}else{const n=await es({id:B,name:i.name,description:i.description,permissions:L});if("error"in n){(0,I.x)(n.error)&&n.error.name==="ValidationError"?c.setErrors(V(n.error)):d({type:"warning",message:U(n.error)});return}f(n.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P("didEditToken",{type:r?.permissions,tokenType:h.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{v()}},z=q&&!l||b&&l;return!l&&!r?(0,t.jsx)(X,{}):(0,t.jsxs)(C.g,{children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(G.l1,{validationSchema:J,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan||null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ns(i,c),children:({errors:i,handleChange:c,isSubmitting:L,values:N})=>(0,t.jsxs)(a.lV,{children:[(0,t.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:z,canRegenerate:ss,isSubmitting:L,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(p.s,{children:(0,t.jsxs)(R.s,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,t.jsx)(O.c,{token:r.accessKey,tokenType:h.T}),(0,t.jsx)(H,{errors:i,onChange:c,canEditInputs:z,isCreating:l,values:N,transferToken:r})]})})]})})]})},Q=()=>{const o=(0,I.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.kz,{permissions:o,children:(0,t.jsx)(F,{})})},H=({errors:o={},onChange:_,canEditInputs:v,isCreating:d,values:m,transferToken:A={}})=>{const{formatMessage:r}=(0,y.A)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(K.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(R.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(u.o,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(T.x,{gap:5,children:[(0,t.jsx)(e.E,{col:6,xs:12,children:(0,t.jsx)(O.T,{error:o.name,value:m.name,canEditInputs:v,onChange:_})},"name"),(0,t.jsx)(e.E,{col:6,xs:12,children:(0,t.jsx)(O.a,{error:o.description,value:m.description,canEditInputs:v,onChange:_})},"description"),(0,t.jsx)(e.E,{col:6,xs:12,children:(0,t.jsx)(O.L,{isCreating:d,error:o.lifespan,value:m.lifespan,onChange:_,token:A})},"lifespan"),(0,t.jsx)(e.E,{col:6,xs:12,children:(0,t.jsx)(O.b,{name:"permissions",value:m.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{_({target:{name:"permissions",value:P}})},options:f,canEditInputs:v})},"permissions")]})]})})},X=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.A)();return(0,a.L4)(),(0,t.jsxs)(C.g,{"aria-busy":"true",children:[(0,t.jsx)(a.x7,{name:"Transfer Tokens"}),(0,t.jsx)(M.Q,{primaryAction:(0,t.jsx)(E.$,{disabled:!0,startIcon:(0,t.jsx)(Y.A,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(p.s,{children:(0,t.jsx)(a.Bl,{})})]})}},55167:($,W,s)=>{s.d(W,{a:()=>R,b:()=>u,c:()=>C,d:()=>K,u:()=>p});var t=s(41525);const D=t.n.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:e=>e.data,providesTags:(e,M)=>[...e?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:e=>`/admin/transfer/tokens/${e}`,transformResponse:e=>e.data,providesTags:(e,M,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:e=>({url:"/admin/transfer/tokens",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:e=>({url:`/admin/transfer/tokens/${e}`,method:"DELETE"}),transformResponse:e=>e.data,invalidatesTags:(e,M,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:e,...M})=>({url:`/admin/transfer/tokens/${e}`,method:"PUT",data:M}),transformResponse:e=>e.data,invalidatesTags:(e,M,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:C,useGetTransferTokenQuery:p,useCreateTransferTokenMutation:R,useDeleteTransferTokenMutation:K,useUpdateTransferTokenMutation:u}=D}}]);
