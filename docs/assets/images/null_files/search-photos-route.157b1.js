(window.webpackJsonp=window.webpackJsonp||[]).push([["search-photos-route"],{"7P6o":function(e,t,a){e.exports={headingXs:"_2uOAz _2956j _2jIq8 _1eXFm",colorWhite:"#fff",colorGrey400:"#d1d1d1",colorGrey700:"#767676",container:"_1koGJ",heading:"YLnkn _2uOAz _2956j _2jIq8 _1eXFm",body:"_1EXen",label:"pnpfj",ctaContainer:"_3PFBy"}},BbgX:function(e,t,a){e.exports={labelSmall:"Gehj1",container:"_2e1cS",text:"_3pRob",logoAndLabel:"_1bDgu",label:"_2b0DT Gehj1",textAndLinkSpacer:"_260ZB",link:"_1Ibiv",results:"_14A1s",imageContainer:"_2I8rV",image:"_19z32",imageImg:"_3VF3v"}},RhwO:function(e,t,a){e.exports={resetText:"_1eXFm",resetBtn:"_3d86A",truncate:"_1ByhS",colorWhite:"#fff",collectionsContainer:"_2f5Ws",heading:"_1YBF3",collectionTitle:"_2IA8r _1eXFm _1ByhS",details:"_1y1Td _1ByhS"}},SYQ3:function(e,t,a){e.exports={resetList:"_2Y-QM _1eXFm",truncate:"_1ByhS",heading:"rQtMp",keywordsList:"_296-Q _2Y-QM _1eXFm",keywordLinkIcon:"_1aT8y",keywordLink:"_2Ehsu",keyword:"SI5Tm _1ByhS"}},c5fr:function(e,t,a){e.exports={transitionSpeedBase:"0.1s",overlay:"_16--t",overlayContainer:"_11nq8",bgImg:"_2GF4Q"}},cve8:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var c=a("TSYQ"),r=a.n(c),n=a("SDew"),s=a("q1tI"),o=a.n(s),l=a("PCiO"),i=a("jRy8"),m=a("XdZB"),u=a("SqvM"),d=a("c5fr"),b=a.n(d);const h=({coverPhotoOption:e,className:t,children:a})=>{const c=Object(n.k)(e,i.B(e=>Object(l.d)({baseUrl:e.urls.raw,width:480,height:80})),i.B(e=>o.a.createElement(m.a,Object.assign({className:b.a.bgImg},e))),i.t(()=>o.a.createElement("div",{style:{height:80}})));return o.a.createElement(u.a,{behind:c,overlayClassName:r()(b.a.overlay,t),containerClassName:b.a.overlayContainer},a)}},osW8:function(e,t,a){e.exports={gridAndBottomFeedAffiliatesSpacer:"_1VL0A"}},pJjI:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ke}));var c,r=a("SDew"),n=a("cXg/"),s=a("B/Be"),o=a("15Rw"),l=a("q1tI"),i=a.n(l),m=a("/MKj"),u=a("b2r9"),d=a("acyj"),b=a("pq3u"),h=a("063O"),O=a("OM6L"),y=a("jRy8");!function(e){e.Editorial="editorial",e.KeywordSearch="keyword-search"}(c||(c={}));var k=a("mrSG"),j=a("I7gL"),p=a("55Ip"),E=a("aMqU"),g=a("C8EU"),f=a("acC3"),w=a("u+uw"),C=a("Ja2L"),_=a("RLZi"),q=a("Wdkd"),v=a("cve8"),I=a("TSYQ"),Q=a.n(I),S=(a("PCiO"),a("jNAd"),a("RC4B"),a("zCdt"),a("7P6o")),N=a.n(S);const B=({children:e,className:t})=>i.a.createElement("div",{className:Q()(N.a.container,t)},e),F=({children:e,className:t})=>i.a.createElement("h2",{className:Q()(N.a.heading,t)},e);var T=a("RhwO"),D=a.n(T);const R=({collectionId:e,onClick:t})=>{const a=i.a.useMemo(()=>Object(w.g)(),[]),c=i.a.useCallback(()=>{t(e)},[t,e]),r=Object(g.a)(t=>Object(w.a)(t,e)),n=Object(g.a)(e=>Object(C.a)(e,r.userId)),s=Object(g.a)(e=>a(e,r.id));return i.a.createElement(p.a,{to:q.b.collectionFromEntity(r),onClick:c},i.a.createElement(v.a,{key:r.id,coverPhotoOption:s},i.a.createElement("h3",{className:D.a.collectionTitle},r.title),i.a.createElement("span",{className:D.a.details},Object(E.d)(r.total_photos)," ",Object(E.h)(r.total_photos)," · Curated by ",n.name)))},L=({collectionIds:e,tracking:t})=>{const a=Object(h.a)(),c=i.a.useCallback(c=>{a(u.a.TrackGridPromptClick(Object.assign(Object.assign({},t),{items:e,clickedItem:c})))},[t,e,a]);return i.a.createElement(B,null,i.a.createElement(F,{className:D.a.heading},"Related collections"),i.a.createElement("div",{className:D.a.collectionsContainer},Object(r.k)(e,O.y(e=>i.a.createElement(R,{key:e,collectionId:e,onClick:c})))))},x=e=>{var{maximumCollections:t,routeData:a}=e,c=Object(k.d)(e,["maximumCollections","routeData"]);const n=Object(f.b)(a),s=i.a.useMemo(_.c,[]),o=Object(g.a)(e=>s(e,n)),l=i.a.useMemo(()=>Object(r.k)(o,y.e(Object(r.e)(O.M(t),j.e))),[o,t]);return Object(r.k)(l,y.D(e=>i.a.createElement(L,Object.assign({collectionIds:e},c))))};var P=a("FUCK"),A=a("+11Q"),X=a("zPuE"),K=a("SYQ3"),M=a.n(K);const G=({to:e,onClick:t,keyword:a})=>{const c=i.a.useCallback(()=>{t(a)},[a,t]);return i.a.createElement(p.a,{to:e,onClick:c,className:Q()(M.a.keywordLink,Object(X.b)({type:X.a.Outline}))},i.a.createElement(P.a,{className:M.a.keywordLinkIcon}),i.a.createElement("span",{className:M.a.keyword},a))},z=({keywords:e,tracking:t,makeSearchLink:a})=>{const c=Object(h.a)(),r=i.a.useCallback(a=>{c(u.a.TrackGridPromptClick(Object.assign(Object.assign({},t),{items:e,clickedItem:a})))},[c,e,t]);return i.a.createElement(B,null,i.a.createElement(F,{className:M.a.heading},"Related searches"),i.a.createElement("ul",{className:M.a.keywordsList},e.map(e=>i.a.createElement("li",{key:e},i.a.createElement(G,{to:a(e),onClick:r,keyword:e})))))},J=e=>{var{maximumKeywords:t,routeData:a}=e,c=Object(k.d)(e,["maximumKeywords","routeData"]);const{query:n,filters:s}=a,o=i.a.useMemo(A.a,[]),l=Object(g.a)(e=>o(e,n)),m=i.a.useCallback(e=>q.b.searchPhotos({query:e,filters:s}),[s]);return Object(r.k)(l,y.e(Object(r.e)(O.M(t),O.y(e=>e.title),j.e)),y.D(e=>i.a.createElement(z,Object.assign({keywords:e,makeSearchLink:m},c))))};var W=a("pdjq");const Y=({totalPhotos:e,routeData:t})=>a=>Object(r.k)([(()=>{const n=Object(r.k)(e,y.r(e=>e>=10),y.e(()=>Object(r.k)(a,Object(W.a)({List:y.E,TwoColumns:y.I({column:1,row:10}),ThreeColumns:y.I({column:2,row:5})}))));return Object(r.k)(n,y.B(e=>({position:e,key:"related-collections",element:i.a.createElement(x,{routeData:t,maximumCollections:3,tracking:{promptId:"related-collections",placement:c.KeywordSearch,layout:a,position:e}})})))})(),(()=>{const n=Object(r.k)(e,y.r(e=>e>=10),y.e(()=>Object(r.k)(a,Object(W.a)({List:y.E,TwoColumns:y.I({column:0,row:20}),ThreeColumns:y.I({column:0,row:10})}))));return Object(r.k)(n,y.B(e=>({position:e,key:"related-search-keywords",element:i.a.createElement(J,{routeData:t,maximumKeywords:8,tracking:{promptId:"related-search-keywords",placement:c.KeywordSearch,layout:a,position:e}})})))})()],O.d);var U=a("cHeK"),V=a("uFXZ"),Z=a("QH2T"),H=a("3q9+"),$=a("JzW6"),ee=a("kyXS"),te=a("D6yk"),ae=a("mjVK"),ce=a("Nebv"),re=a("x5qg"),ne=a("r9If"),se=a("JOe8"),oe=a("TN16"),le=a("jW5K"),ie=a.n(le),me=a("Tz5c"),ue=a("6nKx"),de=a("0Jzb"),be=a("BbgX"),he=a.n(be);const Oe=({imageOptionRequest:e})=>i.a.createElement("div",{className:he.a.imageContainer},i.a.createElement(oe.d,{imageOptionRequest:e,aspectRatio:{width:120,height:92},className:he.a.image,imgClassName:he.a.imageImg})),ye=({children:e})=>i.a.createElement("div",{className:he.a.results},e),ke=({request:e,searchQuery:t,onResultClick:a,placement:c})=>i.a.createElement(ye,null,Object(r.k)(e,me.w(3),O.z((e,n)=>{const s=Object(r.k)(n,me.z,y.m,y.B(e=>e.url),y.v(()=>e));return i.a.createElement(oe.e,{key:s,imageOptionRequest:n,searchQuery:t,onClick:a,placement:c},i.a.createElement(Oe,{imageOptionRequest:n}))}))),je=({searchQuery:e,placement:t})=>i.a.createElement("div",{className:he.a.text},i.a.createElement("div",{className:he.a.logoAndLabel},i.a.createElement(ue.a,null),i.a.createElement("div",{className:he.a.label},"Advertisement")),i.a.createElement(de.a,{height:16}),i.a.createElement(oe.f,null),i.a.createElement("div",{className:he.a.textAndLinkSpacer}),i.a.createElement(oe.b,{searchQuery:e,className:he.a.link,placement:t})),pe=({children:e})=>i.a.createElement(oe.a,{className:he.a.container},e),Ee=({request:e,searchQuery:t,onResultClick:a,placement:c})=>i.a.createElement(pe,null,i.a.createElement(je,{searchQuery:t,placement:c}),i.a.createElement(ke,{request:e,searchQuery:t,onResultClick:a,placement:c})),ge=e=>{var{response:t,searchQuery:a}=e,c=Object(k.d)(e,["response","searchQuery"]);const r=Object(h.a)();ie()(()=>{r(u.a.TrackBottomFeedAffiliatesImpression({searchQuery:a,resultIds:t.map(e=>e.id)}))});const n=Object(l.useCallback)(e=>{r(u.a.TrackBottomFeedAffiliatesResultClick({searchQuery:a,resultId:e.id}))},[r,a]);return i.a.createElement(Ee,Object.assign({request:me.y(t),searchQuery:a,onResultClick:n},c))},fe=({request:e,searchQuery:t,placement:a})=>Object(r.k)(e,me.z,y.n(()=>i.a.createElement(Ee,{request:e,searchQuery:t,placement:a}),e=>i.a.createElement(ge,{response:e,searchQuery:t,placement:a})));var we=a("SDRO"),Ce=a("KwrD"),_e=a("IVTL"),qe=a("sCUw");const ve=Object(r.k)(qe.f(),y.j(e=>Object(_e.f)(e,"force_bottom_feed_affiliates"))),Ie=e=>{var{children:t}=e,a=Object(k.d)(e,["children"]);return t(we.a(a))},Qe=({photos:e,children:t,searchQuery:a})=>(e=>{const t=oe.g(e);return Object(Ce.b)()&&ve||t})(e)?i.a.createElement(Ie,{query:a,pageSize:3},Object(r.e)(y.I,t)):t(y.E);var Se=a("Z14c"),Ne=a("lS9m"),Be=a("DDF0"),Fe=a("0K2+"),Te=a("V+UN"),De=a("G/bK"),Re=a("osW8"),Le=a.n(Re);const xe=e=>{const t=Object(r.k)(e,te.O(e=>e[0]),te.x()),a=Object(r.k)(e,te.O(e=>e[1]),te.x(ce.d)),c=Object(r.k)(e,te.O(e=>e[2]),te.x()),n=te.n([t,a]);return Object(r.k)(n,te.S(()=>Object(r.k)(c,te.o,te.D())))},Pe=({photos:e,inFeedAffiliatesRequestOption:t,routeData:a})=>{const{filters:c,query:s}=a,o=i.a.useCallback(e=>Object(r.k)(se.a.Union.Search(Object.assign(Object.assign({},e),{keywords:s,safety:!1,color:c.color,orderBy:c.orderBy,orientation:c.orientation})),y.I),[c.color,c.orderBy,c.orientation,s]),m=Object(l.useMemo)(()=>Object(r.k)([y.I(Y({totalPhotos:e.length,routeData:a})),Object(r.k)(t,y.B(Object(r.e)(e=>(({request:e,searchQuery:t})=>a=>({position:Object(r.k)(a,Object(W.b)({List:{column:0,row:2},TwoColumns:{column:1,row:1},ThreeColumns:{column:2,row:1}})),key:"in-feed-affiliates",element:i.a.createElement(Be.a,{request:e,searchQuery:t})}))({request:e,searchQuery:a.query}),ee.d(n.u))))],O.d,ee.e,ee.d(n.j)),[t,e.length,a]);return i.a.createElement(Te.a,{photos:e,makePlacement:o,getFixedPlacementsForLayout:m})},Ae=({filters:e,query:t,searchXps:a},c)=>({page:n,perPage:s})=>Object(r.k)(U.a.search.getPhotos(Object.assign(Object.assign({},ce.h(e)),{query:t,searchXps:a,page:n,perPage:s})),V.a(d.a),$.j(([e])=>e),te.ob(H.p(e=>{c(u.a.TrackGotSearchResults({startPosition:Object(Fe.e)({page:n,perPage:s}),photos:e.results.map(e=>e.id)}))}))),Xe=Object(b.d)()(()=>{const e=Object(re.d)();return(t,{routeData:a})=>{const c=Object(f.c)(a.query,a.filters);return{searchXps:Object(ne.b)(t),photoFeedOption:e(t,c)}}});var Ke=Object(r.k)(({routeData:e,searchXps:t,photoFeedOption:a})=>{const c=Object(h.a)(),{query:n,filters:l}=e,m=Object(f.c)(n,l),d=Object(s.a)(xe,[e.query,l,a]);return Object(o.a)(d,e=>{Object(r.k)([u.a.TrackGotInitialSearchResults(),u.a.TrackGotSearchResults({startPosition:1,photos:e.ids})],Object(b.a)(c))}),i.a.createElement("div",Object.assign({},Object(ae.a)(Z.y)),i.a.createElement(Ne.a,null,i.a.createElement(De.a,{feedId:m,fetchPhotos:Ae({query:n,searchXps:t,filters:l},c),getNoContentEl:()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Se.a,{type:"photos"}),i.a.createElement(Qe,{photos:[],searchQuery:e.query,children:y.D(t=>i.a.createElement(fe,{request:t,searchQuery:e.query,placement:oe.c.BottomFeedEmpty}))}))},({items:t,total:a,hasFetchedAllPages:c})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Be.b,{photos:t,feedTotal:a,searchQuery:e.query,children:a=>i.a.createElement(Pe,{photos:t,inFeedAffiliatesRequestOption:a,routeData:e})}),c&&i.a.createElement(Qe,{photos:t,searchQuery:e.query,children:y.D(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:Le.a.gridAndBottomFeedAffiliatesSpacer}),i.a.createElement(fe,{request:t,searchQuery:e.query,placement:oe.c.BottomFeed})))})))))},Object(m.c)(Xe))}}]);
//# sourceMappingURL=search-photos-route.157b1.js.map