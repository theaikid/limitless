(window.webpackJsonp=window.webpackJsonp||[]).push([["collection-route~editorial-route~explore-route~following-route~search-photos-route~topics-route~user~47450b1a"],{"3i7T":function(e,t,a){e.exports={colorGrey700:"#767676",photo:"_3oSvn",infoItem:"_1GZli",photoInfo:"_3jytJ _1GZli",leftActions:"_32IyT",collectionButtonContainer:"_1ll8L",editPhotoButton:"_1XAJT",userLinkContainer:"_3oRYq _1GZli",userLinkSecondaryLabel:"_3hC2J",extraInfoClassname:"_2z3zc _1GZli"}},"V+UN":function(e,t,a){"use strict";a.d(t,"a",(function(){return he}));var o=a("SDew"),n=a("q1tI"),r=a.n(n),c=a("/MKj"),s=a("wOEu"),l=a("jRy8"),i=a("IVTL"),d=a("QK6j"),m=a("A75h"),u=a("JOe8"),h=a("vosR"),p=a("ezCO"),b=a("OM6L"),O=a("XJg7"),j=a("mrSG"),v=a("NbrK"),y=a("pq3u"),E=a("HYc2"),I=a("QH2T"),k=a("wmOD"),g=a("Jekn"),w=a("M9j0"),x=a("KPJC"),C=a("35id"),_=a("dkli"),L=a("l/G7"),f=a("k0lW"),M=a("EqpS"),N=a("5dpl"),F=a("x4cj"),G=a("Tm5Z"),B=a("+nE3"),D=a("zT06"),P=a("kK5m"),S=a("GI5D"),T=a("SqvM"),q=a("YqFJ"),U=a("xrCS"),J=a.n(U);const V=({sponsorship:e,photo:t,children:a})=>r.a.createElement(T.a,{behind:a,overlayClassName:J.a.sponsorOverlay},r.a.createElement("div",{className:J.a.sponsorshipLabelContainer},r.a.createElement(q.a,{sponsorship:e,photoUserId:t.userId}))),z=Object(y.d)()(()=>{const e=Object(G.a)();return(t,a)=>({photo:Object(g.a)(t,a.photoId),showHiddenFromProfileOverlay:e(t,{photoId:a.photoId,routeData:a.routeData})})});var A=Object(o.k)(({children:e,photo:t,showHiddenFromProfileOverlay:a})=>{const n=Object(o.k)(t,l.r(B.d),l.B(e=>e.evaluation_status),l.L);if("dmca_requested"===n)return r.a.createElement(D.a,null,e);{const c=Object(o.k)(n,P.b,l.B(e=>t=>r.a.createElement(P.a,{overlayClassName:J.a.overlayBase,status:e,withBackground:!1===a},t))),s=l.q(t.sponsorship),i=a?l.I(e=>r.a.createElement(S.a,{overlayClassName:J.a.overlayBase},e)):Object(o.k)(s,l.B(e=>a=>r.a.createElement(V,{sponsorship:e,photo:t},a))),d=b.d([i,c]);return Object(o.k)(e,Object(F.a)(d))}},Object(c.c)(z),s.b),K=a("3i7T"),Y=a.n(K);const Z=e=>{var{photoId:t,isVisible:a,photo:n,authUserOption:c,dispatch:s,children:i}=e,d=Object(j.d)(e,["photoId","isVisible","photo","authUserOption","dispatch","children"]);const m=Object(o.k)(c,l.j(e=>e.id===n.userId));return r.a.createElement(M.a,{photoId:t},r.a.createElement(L.a,{photoId:t,extraInfoClassname:Y.a.extraInfoClassname},r.a.createElement("div",{className:Y.a.userLinkContainer},r.a.createElement(N.b,{isAvatarVisible:a,photo:n,type:"emphasiseUsername"})),r.a.createElement(A,{photoId:t},r.a.createElement(f.a,Object.assign({photoId:t,testAttr:I.q.SINGLE_COL_IMG,isVisible:a,containerClassName:Y.a.photo},d))),r.a.createElement("div",{className:Y.a.photoInfo},r.a.createElement("div",{className:Y.a.leftActions},m&&r.a.createElement(C.a,{photoId:t,type:"default",className:Y.a.editPhotoButton}),r.a.createElement(_.a,{photoId:t}),r.a.createElement("div",{className:Y.a.collectionButtonContainer},r.a.createElement(w.a,{photoId:t}))),r.a.createElement("div",null,r.a.createElement(x.a,{photoId:n.id,label:"Download",showSizesDropdown:!0})))))},H=Object(y.c)()((e,t)=>({photo:Object(g.a)(e,t.photoId),authUserOption:Object(k.g)(e)})),X=Object(o.k)(Z,Object(c.c)(H));var Q=Object(o.k)(X,Object(E.a)({rootMargin:v.j(200)}),e=>r.a.memo(e)),R=a("Xxxd"),W=a.n(R);const $=()=>[],ee=Object(p.a)(({grid:e,enqueueUpdateFunction:t,photos:a,getFixedPlacementsForLayout:c=$})=>{const s=Object(n.useMemo)(()=>({enqueueUpdateFunction:t}),[t]),l=r.a.useMemo(()=>Object(o.k)(a,b.z((t,a)=>({key:a.id,element:r.a.createElement(Q,{index:t,linkProps:s,grid:e,photoId:a.id,shouldDetectVisibility:Object(h.b)(t)})}))),[a,s,e]),i=r.a.useMemo(()=>{const e=d.a.List();return[...c(e),...l]},[c,l]);return r.a.createElement("div",{className:W.a.container},r.a.createElement(O.a,{columnGutter:e.columnGutter,items:i,rowGutter:50,columnCount:1}))});var te=a("TSYQ"),ae=a.n(te),oe=a("CdAG"),ne=a("zPcV"),re=a.n(ne);const ce=Object(i.e)()([{tag:"Two"},{tag:"Three"}]),se=m.a.match({Phone:()=>d.d,Tablet:()=>d.d,Desktop:()=>d.c}),le=d.e.match({Two:()=>re.a.showUntilSmMax,Three:()=>re.a.showFromMdMin}),ie=Object(y.e)()({maybeDevice:m.d});var de=Object(o.k)(e=>{var{maybeDevice:t}=e,a=Object(j.d)(e,["maybeDevice"]);const n=({isUnenhanced:e})=>t=>r.a.createElement("div",{className:ae()(e&&le(t)),key:t.tag},r.a.createElement(oe.a,Object.assign({columnCount:t},a))),c=Object(o.e)(se,n({isUnenhanced:!1})),s=Object(o.k)(t,l.B(c),l.t(()=>ce.map(n({isUnenhanced:!0}))));return r.a.createElement(r.a.Fragment,null,s)},Object(c.c)(ie)),me=a("oWYe");const ue={mobileLayout:d.b.Masonry(),columnGutter:24},he=Object(o.k)(({photos:e,getFixedPlacementsForLayout:t,makePlacement:a,maybeDevice:n,shouldShowExtraInfo:c})=>{const s=()=>r.a.createElement(ee,{photos:e,getFixedPlacementsForLayout:t,grid:ue}),m=()=>r.a.createElement(de,{photos:e,getFixedPlacementsForLayout:t,grid:ue,rowGutter:c?40:24}),h=({layoutMode:e,className:t})=>r.a.createElement("div",{className:t,key:e.tag},d.b.match({List:m,Masonry:s})(e)),p=Object(i.e)()([{tag:"List"},{tag:"Masonry"}]),b=Object(o.k)(n,l.B(me.c)),O=Object(o.k)(b,l.B(e=>h({layoutMode:e})),l.t(()=>p.map(e=>h({layoutMode:e,className:Object(me.b)({layoutMode:e})})))),j=r.a.useMemo(()=>l.I({make:a}),[a]);return r.a.createElement(u.a.Context.Provider,{value:j},O)},Object(c.c)((e,t)=>({maybeDevice:Object(m.d)(e),shouldShowExtraInfo:Object(me.a)(e,t.routeData)})),s.b)},Xxxd:function(e,t,a){e.exports={container:"_2F9v7"}},xrCS:function(e,t,a){e.exports={enablePointerEvents:"_1LcrN",overlayBase:"_2lang",sponsorOverlay:"_2W2Sq _2lang",sponsorshipLabelContainer:"_1BFfj _1LcrN"}}}]);
//# sourceMappingURL=collection-route~editorial-route~explore-route~following-route~search-photos-route~topics-route~user~47450b1a.0e0ad.js.map