(this["webpackJsonppodcast-player"]=this["webpackJsonppodcast-player"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),n=c(17),r=c.n(n),o=(c(72),c(6)),i=c(14);var l=function(e){return Object(s.jsx)("svg",Object(i.a)(Object(i.a)({width:70,height:22,xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(s.jsx)("text",{fontFamily:"BigNoodleTitling",fontSize:14,letterSpacing:1.711,fill:"#000",children:Object(s.jsx)("tspan",{x:24,y:17,children:"Podlife"})}),Object(s.jsxs)("g",{transform:"translate(-.265 4.398)",children:[Object(s.jsx)("path",{d:"M5 12c2.424 2.667 5.091 2.667 8 0",stroke:"#000"}),Object(s.jsx)("circle",{fill:"#000",cx:6.265,cy:7.602,r:2}),Object(s.jsx)("path",{d:"M1 6.571h0z",stroke:"#979797"}),Object(s.jsx)("circle",{fill:"#000",cx:12.265,cy:7.602,r:2}),Object(s.jsx)("path",{d:"M1.064 8.495C3.703 4.07-.059 0 9.104 0c9.161 0 5.914 3.833 8.039 8.561",stroke:"#000"}),Object(s.jsx)("rect",{fill:"#000",x:.265,y:5.602,width:3,height:4,rx:1}),Object(s.jsx)("rect",{fill:"#000",x:15.265,y:5.602,width:3,height:4,rx:1})]})]})}))},d=c(21),j=c(22),h=c(24),b=c(23),p=c(18),u=(c(79),"SEARCH_PODCAST"),O="FETCH_PODCASTS",x=c(49),f=c.n(x).a.create({baseURL:"https://listen-api.listennotes.com/api/v2",headers:{"X-ListenAPI-Key":Object({NODE_ENV:"production",PUBLIC_URL:"/podcast-player",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_LISTEN_NOTES_API_KEY}}),m=function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).onChange=function(t){e.props.searchPodcast(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchPodcasts(e.props.text),e.props.history.push("/results")},e.state={podcasts:[]},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"searchForm",children:Object(s.jsx)("div",{className:"searchDiv",children:Object(s.jsx)("form",{id:"searchForm",onSubmit:this.onSubmit,children:Object(s.jsx)("div",{className:"p-1 rounded  shadow-sm",children:Object(s.jsx)("div",{className:"input group",children:Object(s.jsxs)("div",{className:"input-group-prepend",children:[Object(s.jsx)("button",{id:"button-addon2",type:"submit",className:"btn btn-link",children:Object(s.jsx)("i",{className:"fa fa-search"})}),Object(s.jsx)("input",{type:"text",className:"form-control border-0",name:"searchText",placeholder:"Search podcasts",onChange:this.onChange}),Object(s.jsx)("i",{className:"fa fa-microphone"})]})})})})})})}}]),c}(a.Component),g=Object(o.e)(Object(p.b)((function(e){return{text:e.podcasts.text,podcasts:e.podcasts.podcasts.results}}),{searchPodcast:function(e){return function(t){t({type:u,payload:e})}},fetchPodcasts:function(e){return function(t){f.get("/search?q=".concat(e,"&sort_by_date=0&type=episode&language=English")).then((function(e){return t({type:O,payload:e.data})})).catch((function(e){return console.log(e)}))}}})(m)),v=c.p+"static/media/apiLogo.443fcec0.png",y=(c(100),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"resultsBackground2",children:[Object(s.jsx)("h2",{children:"Welcome!"}),Object(s.jsx)("h1",{children:"Explore top podcasts!"}),Object(s.jsx)(g,{}),Object(s.jsxs)("a",{href:"https://www.listennotes.com/",target:"_blank",rel:"noreferrer",children:[" ",Object(s.jsx)("img",{src:v,className:"apiLogo",alt:"API logo"})]})]})}}]),c}(a.Component)),N=Object(p.b)((function(e){return{loading:e.podcasts.loading,podcasts:e.podcasts.podcasts.results}}))(y),S=c(65),_=c(28),w=c(37),C=c(36),T=c(66),P=c(61),k=(c(101),c(102),function(e){Object(h.a)(c,e);var t=Object(b.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"formatTime",value:function(e){return[Math.floor(e/3600),Math.floor(e/60)%60,e%60].map((function(e){return(""+e).padStart(2,"0")})).filter((function(e,t){return"00"!==e||t>0})).join(":")}},{key:"render",value:function(){var e=this.props.podcast;return Object(s.jsx)("div",{id:"container-fluid",children:Object(s.jsx)(_.a,{children:Object(s.jsxs)(C.a,{children:[Object(s.jsx)("div",{className:"cardHeader",children:Object(s.jsx)(_.a.Toggle,{as:T.a,variant:"link",eventKey:"0",children:Object(s.jsxs)(P.a,{children:[Object(s.jsx)("div",{className:"col-lg-3 col-md-3 col-sm-2",children:Object(s.jsx)("img",{className:"img-fluid",src:e.thumbnail,alt:"Podcast Img"})}),Object(s.jsx)("div",{className:"col-md-9 col-sm-10",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h5",{className:"card-title",children:e.podcast.title_original}),Object(s.jsx)("h6",{className:"card-text",children:e.title_original}),Object(s.jsx)("p",{className:"card-text",dangerouslySetInnerHTML:{__html:e.description_highlighted}}),Object(s.jsxs)("p",{className:"card-text",children:[this.formatTime(e.audio_length_sec)," "]})]})})]})})}),Object(s.jsx)(_.a.Collapse,{eventKey:"0",children:Object(s.jsx)(C.a.Body,{children:Object(s.jsx)(S.a,{src:e.audio,onPlay:function(e){return console.log("onPlay")},layout:"horizontal",autoPlayAfterSrcChange:!1,showFilledVolume:!0,customIcons:{play:Object(s.jsx)(w.b,{size:15,color:"#4045F5"}),pause:Object(s.jsx)(w.a,{size:15,color:"#4045F5"})}})})})]})})})}}]),c}(a.Component));c(103);var E=function(e){return Object(s.jsx)("svg",Object(i.a)(Object(i.a)({width:15,height:26,xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(s.jsx)("path",{d:"M13.5 24.5L1.5 13l12-11.5",stroke:"#000",strokeWidth:1.98,fill:"none",fillRule:"evenodd",strokeLinecap:"round"})}))},F=Object(o.e)(Object(p.b)((function(e){return{podcasts:e.podcasts.podcasts.results,text:e.podcasts.text}}))((function(e){var t=e.podcasts,c="";return void 0===t?console.log("Unable to find any movies"):c=t.map((function(e,t){return Object(s.jsx)(k,{podcast:e},t)})),c.length>0?Object(s.jsxs)("div",{className:"podcastContent",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)(l,{width:"70pt"})})}),Object(s.jsxs)("div",{style:{float:"left",marginTop:"60px",marginLeft:"20px",position:"sticky",top:"90px"},children:[Object(s.jsxs)("div",{className:"resultsCounter",children:[Object(s.jsx)("a",{href:"/podcast-player",children:Object(s.jsx)(E,{})}),"\xa0\xa0\xa0 Results (",c.length,")"]}),Object(s.jsx)("div",{className:"resultsSearch",children:Object(s.jsx)(g,{})})]})]}),Object(s.jsx)("div",{className:"resultsContent",children:c})]}):null}))),L=(c(104),function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("a",{href:"/podcast-player",children:Object(s.jsx)(l,{width:"70pt"})})}),Object(s.jsxs)(o.a,{component:N,children:[Object(s.jsxs)("div",{className:"welcomeText",children:[Object(s.jsx)("h2",{children:"Welcome!"}),Object(s.jsx)("h1",{children:"Explore top podcasts!"})]}),Object(s.jsx)(o.a,{exact:!0,path:"/results",children:Object(s.jsx)(F,{})}),Object(s.jsx)(o.a,{exact:!0,path:"/podcast-player",children:Object(s.jsx)(g,{})})]})]})}),A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},R=c(25),D=c(11),I=c(62),M=c(63),H={text:"",podcasts:[],loading:!1,podcast:[]},K=c(27),W=c(32),B={key:"root",storage:c.n(W).a,whitelist:["podcasts"]},z=Object(D.combineReducers)({podcasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{text:t.payload,loading:!1});case O:return Object(i.a)(Object(i.a)({},e),{},{podcasts:t.payload});default:return e}}}),U=Object(K.a)(B,z),J=(c(107),[I.a]),V=Object(D.createStore)(U,{},Object(M.composeWithDevTools)(D.applyMiddleware.apply(void 0,J))),q=Object(K.b)(V),X=c(64);r.a.render(Object(s.jsx)(R.a,{children:Object(s.jsx)(p.a,{store:V,children:Object(s.jsx)(X.a,{persistor:q,children:Object(s.jsx)(L,{})})})}),document.getElementById("root")),A()},72:function(e,t,c){},79:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.7335557f.chunk.js.map