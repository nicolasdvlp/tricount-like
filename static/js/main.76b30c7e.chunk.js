(this["webpackJsonptricount-like"]=this["webpackJsonptricount-like"]||[]).push([[0],{264:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},275:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(32),i=n(28),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,449)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},l=(n(264),n(265),n(5)),o=n(244),u=(n(266),n(431)),d=(n(267),n(3)),j=function(){return Object(d.jsx)(u.a,{fluid:!0,className:"header",children:Object(d.jsx)("div",{className:"display",children:Object(d.jsx)("h1",{className:"title",children:"le juste compte"})})})},b=n(446),p=(n(269),n(432)),m=n(236),h=n(433),f=n(434),x=(n(270),n(447)),O=n(448),v=(n(271),function(e){var t=e.name,n=e.expenses,a=e.addExpense,c=e.totalUser,r=e.deleteUserModal;return Object(d.jsxs)(x.a,{style:{minWidth:"16rem",maxWidth:"16rem"},className:"cardP",children:[Object(d.jsxs)(x.a.Header,{className:"cardP__header",children:[Object(d.jsx)("span",{className:"cardP__header--left",children:t}),Object(d.jsxs)("span",{className:"cadP__header--right",children:[Object(d.jsx)("a",{onClick:a,children:Object(d.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-plus-circle cardP__header_icons",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(d.jsx)("path",{fillRule:"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]})}),Object(d.jsx)("a",{onClick:r,children:Object(d.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash cardP__header_icons",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})]}),Object(d.jsxs)(O.a,{variant:"flush",children:[n.map((function(e){return Object(d.jsxs)(O.a.Item,{className:"cardP__body",children:[Object(d.jsx)("span",{className:"cardP__body--left",children:e.label}),Object(d.jsx)("span",{className:"cardP__body--right",children:e.amount})]},e.id)})),Object(d.jsxs)(O.a.Item,{className:"cardP__footer",children:[Object(d.jsx)("span",{className:"cardP__body--left",children:"Total"}),Object(d.jsx)("span",{className:"cardP__body--left",children:c})]})]})]})}),g=function e(t){var n=t.users,a=t.switchModal,c=t.addExpense,r=t.deleteUserModal,i=t.clickDelUsers;return Object(d.jsx)(u.a,{className:e.name.toLowerCase(),children:Object(d.jsxs)(p.a,{className:"justify-content-center userlist--flex",children:[Object(d.jsxs)(m.a,{className:"userlist__buttonlist",children:[Object(d.jsx)(h.a,{block:!0,className:"userlist__buttonlist buttonlist--marge",variant:"info",onClick:a,children:"Ajouter un utilisateur"}),Object(d.jsx)(h.a,{block:!0,className:"userlist__buttonlist buttonlist--marge",variant:"warning",onClick:i,children:"Supprimer tous les utilisateurs"})]}),Object(d.jsx)(m.a,{children:Object(d.jsx)(f.a,{style:{justifyContent:"center"},children:n.map((function(e){var t=e.expenses.reduce((function(e,t){return e+t.amount}),0);return Object(d.jsx)(v,{name:e.name,expenses:e.expenses,addExpense:function(){c(e.id)},deleteUserModal:function(){r(e.id)},totalUser:t+0},e.id)}))})})]})})},y="ADD_EXPENSE",_="DISPLAY_MODAL",M="DISPLAY_MODAL_EXP",E="DISPLAY_MODAL_DEL_USER",I="ADD_USER",N="DEL_USER",w="DEL_USERS",D="UPDATE_INPUT",k=function(){return{type:_}},U=function(e){return{type:M,payload:e}},S=function(e){return{type:E,payload:e}},C=function(e){return{type:D,payload:e}},P=Object(i.b)((function(e){return{users:e.main.users}}),(function(e){return{switchModal:function(){e(k())},addExpense:function(t){e(U(t))},deleteUserModal:function(t){e(S(t))},clickDelUsers:function(){e({type:w})}}}))(g),L=(n(272),n(275),n(245)),A=function(e){var t=e.data;return console.log("graphdata :",t),Object(d.jsx)(L.a,{data:t,keys:["amount"],indexBy:"name",margin:{top:0,right:0,bottom:50,left:60},padding:.2,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:function(e){return e.data.color},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Nom",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Montant",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[],isInteractive:!1,animate:!0,motionStiffness:90,motionDamping:15})},R=function e(t){var n=t.data,a=t.transactions;return console.log("transactions",a),Object(d.jsxs)(u.a,{className:e.name.toLowerCase(),children:[Object(d.jsx)("h2",{className:"result__title",children:"Les bleus doivent aux jaunes"}),Object(d.jsx)(u.a,{className:"result__graph result__container",children:Object(d.jsx)(A,{data:n})}),Object(d.jsxs)(u.a,{className:"result__equilibre result__container",children:[Object(d.jsx)("h2",{className:"result__title",children:"Comment \xe9quilibrer ?"}),Object(d.jsx)(O.a,{as:"ul",children:a.map((function(e){return Object(d.jsx)(O.a.Item,{as:"li",children:e},e)}))}),Object(d.jsx)("div",{className:"result__emoji",children:"\ud83c\udf89"})]})]})},H=n(43),z="SWITCH_VIEW",T=function(e){return{type:z,payload:e}},B=n(444),V={displayModalExp:!1,displayModal:!1,displayModalDelUser:!1,switchResultPage:!1,formInput:{inputModal:"",inputModalExp:"",inputModalExpNum:0,currentUserExpID:0,currentUserExpName:""},users:[{id:"1",name:"Archibald",expenses:[{id:"474",label:"fajitas",amount:200},{id:"45478",label:"burritos",amount:200}]},{id:"2",name:"Th\xe9odule",expenses:[{id:"47758",label:"tacos",amount:100},{id:"433278",label:"chili",amount:100}]},{id:"3",name:"Eug\xe8ne",expenses:[{id:"4718",label:"empanadas",amount:50},{id:"47578",label:"tortillas",amount:50}]},{id:"4",name:"Stanislas",expenses:[{id:"47338",label:"quesadillas",amount:300},{id:"44878",label:"enchiladas",amount:300}]},{id:"5",name:"Hippolyte",expenses:[{id:"47968",label:"guacamole",amount:50},{id:"4378",label:"tamales",amount:50}]}]};Array.prototype.sum=function(e){for(var t=0,n=0,a=this.length;n<a;n++)t=parseInt(100*(t+this[n][e]))/100;return t};var F=function(e,t){var n=Math.pow(10,t);return+(Math.round(e*n+(t>0?1:0)*(Math.sign(e)*(10/Math.pow(100,t))))/n).toFixed(t)},W=function(e,t,n){if(Math.abs(e.balance)>Math.abs(t.balance)){var a=t.balance;e.balance=F(e.balance+a,2),t.balance=F(t.balance-a,2),n.push("".concat(e.name," donne ").concat(a,"\u20ac a ").concat(t.name))}if(Math.abs(e.balance)<=Math.abs(t.balance)){var c=e.balance;e.balance=F(e.balance-c,2),t.balance=F(t.balance+c,2),n.push("".concat(e.name," donne ").concat(c,"\u20ac a ").concat(t.name))}},X=function(e){var t=[],n=0,a=e.length;return(e=e.map((function(e){var t=e.expenses.length?e.expenses.reduce((function(e,t){return e-t.amount}),0):0;return n+=t,{id:e.id,name:e.name,amount:t}})).sort((function(e,t){return t.amount-e.amount})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{balance:F(-e.amount+n/a,2)})}))).forEach((function(n){for(var a=e.length-1;a>=0;a--){var c=e[a];if(!n.balance)break;n.id!==c.id&&c.balance&&W(n,c,t)}})),t},q=function(e){var t=0;return(e=e.map((function(e){var n=e.expenses.length?e.expenses.reduce((function(e,t){return e-t.amount}),0):0;return t+=n,{id:e.id,name:e.name,total:n}}))).map((function(n){return{id:n.id,name:n.name,amount:F(t/e.length-n.total,2),color:t/e.length-n.total>=0?"#17a2b8":"#cf992d"}}))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _:return Object(l.a)(Object(l.a)({},e),{},{displayModal:!e.displayModal});case M:return Object(l.a)(Object(l.a)({},e),{},{displayModalExp:!e.displayModalExp,formInput:Object(l.a)(Object(l.a)({},e.formInput),{},{currentUserExpID:t.payload,currentUserExpName:t.payload?e.users.find((function(e){return e.id===t.payload})).name:""})});case E:return Object(l.a)(Object(l.a)({},e),{},{displayModalDelUser:!e.displayModalDelUser,formInput:Object(l.a)(Object(l.a)({},e.formInput),{},{currentUserExpID:t.payload,currentUserExpName:t.payload?e.users.find((function(e){return e.id===t.payload})).name:""})});case I:return Object(l.a)(Object(l.a)({},e),{},{users:[].concat(Object(H.a)(e.users),[{id:Object(B.a)(),name:e.formInput.inputModal,expenses:[]}]),formInput:Object(l.a)(Object(l.a)({},e.formInput),{},{inputModal:""}),displayModal:!1});case N:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.filter((function(t){return t.id!==e.formInput.currentUserExpID})),displayModalDelUser:!e.displayModalDelUser});case w:return Object(l.a)(Object(l.a)({},e),{},{users:[]});case D:return Object(l.a)(Object(l.a)({},e),{},{formInput:Object(l.a)(Object(l.a)({},e.formInput),t.payload)});case y:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(t){return t.id!==e.formInput.currentUserExpID?t:Object(l.a)(Object(l.a)({},t),{},{expenses:[].concat(Object(H.a)(t.expenses),[{id:474458,label:e.formInput.inputModalExp,amount:Math.round(100*parseFloat(e.formInput.inputModalExpNum))/100}])})})),formInput:Object(l.a)(Object(l.a)({},e.formInput),{},{inputModalExp:"",inputModalExpNum:0,currentUserExpID:0}),displayModalExp:!1});case z:return Object(l.a)(Object(l.a)({},e),{},{switchResultPage:t.payload||!e.switchResultPage});default:return e}},J=Object(i.b)((function(e){return{data:q(e.main.users),transactions:X(e.main.users)}}),null)(R),Y=function(e){var t=e.switchResultPage,n=e.clickChangeView;return c.a.useEffect((function(){window.addEventListener("keydown",(function(e){"ArrowRight"===e.key&&n(!0),"ArrowLeft"===e.key&&n(!1)}))}),[]),Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(u.a,{className:"justify-content-md-center main__containerswitch",children:Object(d.jsxs)(b.a,{variant:"pills",className:"main__switch",children:[Object(d.jsx)(b.a.Item,{children:Object(d.jsx)(b.a.Link,{active:!t,onClick:n,children:"Edition"})}),Object(d.jsx)(b.a.Item,{children:Object(d.jsx)(b.a.Link,{active:t,onClick:n,children:"R\xe9sultat"})})]})}),!t&&Object(d.jsx)(P,{}),t&&Object(d.jsx)(J,{})]})},K=Object(i.b)((function(e){return{switchResultPage:e.main.switchResultPage}}),(function(e){return{clickChangeView:function(t){e("boolean"===typeof t?T(t):T())}}}))(Y),Q=n(72),Z=n(442),$=n(443),ee=function(e){var t=e.clickAddUser,n=e.onChangeInput,a=e.inputModal,c=e.onHide;return Object(d.jsxs)(Z.a,Object(l.a)(Object(l.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(Z.a.Header,{closeButton:!0,children:Object(d.jsx)(Z.a.Title,{id:"contained-modal-title-vcenter",children:"Ajouter un(e) ami(e)"})}),Object(d.jsxs)($.a,{onSubmit:t,children:[Object(d.jsx)(Z.a.Body,{children:Object(d.jsxs)($.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)($.a.Label,{children:"Son nom (ou son surnom):"}),Object(d.jsx)($.a.Control,{type:"texte",placeholder:"Nom",name:"inputModal",onChange:function(e){n(Object(Q.a)({},e.target.name,e.target.value))},value:a})]})}),Object(d.jsxs)(Z.a.Footer,{children:[Object(d.jsx)(h.a,{variant:"primary",type:"submit",children:"Ajouter"}),Object(d.jsx)(h.a,{variant:"outline-primary",onClick:c,children:"Annuler"})]})]})]}))},te=Object(i.b)((function(e){return{show:e.main.displayModal,inputModal:e.main.formInput.inputModal}}),(function(e){return{onHide:function(){e(k())},clickAddUser:function(t){var n;t.preventDefault(),e({type:I,payload:n})},onChangeInput:function(t){e(C(t))}}}))(ee),ne=function(e){var t=e.currentUserExpID,n=e.onChangeInput,a=e.inputModal,c=e.onHide,r=e.onSubmitExp,i=function(e){n(Object(Q.a)({},e.target.name,e.target.value))};return Object(d.jsxs)(Z.a,Object(l.a)(Object(l.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(Z.a.Header,{closeButton:!0,children:Object(d.jsx)(Z.a.Title,{id:"contained-modal-title-vcenter",children:"Ajouter un(e) ami(e)"})}),Object(d.jsxs)($.a,{onSubmit:function(e){e.preventDefault(),r(t)},children:[Object(d.jsxs)(Z.a.Body,{children:[Object(d.jsxs)($.a.Group,{controlId:"type",children:[Object(d.jsx)($.a.Label,{children:"Libell\xe9 de la d\xe9pense"}),Object(d.jsx)($.a.Control,{type:"text",placeholder:"Nom",name:"inputModalExp",onChange:i,value:a})]}),Object(d.jsxs)($.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)($.a.Label,{children:"Combien ?"}),Object(d.jsx)($.a.Control,{type:"text",placeholder:"Nom",name:"inputModalExpNum",onChange:i,value:a,parse:function(e){return parseInt(e,10)}})]})]}),Object(d.jsxs)(Z.a.Footer,{children:[Object(d.jsx)(h.a,{variant:"primary",type:"submit",children:"Ajouter"}),Object(d.jsx)(h.a,{variant:"outline-primary",onClick:c,children:"Annuler"})]})]})]}))},ae=Object(i.b)((function(e){return{show:e.main.displayModalExp,inputModalExp:e.main.formInput.inputModalExp,inputModalExpNum:e.main.formInput.inputModalExpNum}}),(function(e){return{onHide:function(){e(U())},onChangeInput:function(t){e(C(t))},onSubmitExp:function(){var t;e({type:y,payload:t})}}}))(ne),ce=function(e){var t=e.currentUserExpID,n=e.onHide,a=e.onSubmitDelUser,c=e.userName;return Object(d.jsxs)(Z.a,Object(l.a)(Object(l.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(Z.a.Header,{closeButton:!0,children:Object(d.jsxs)(Z.a.Title,{id:"contained-modal-title-vcenter",children:["Etes vous sur de vouloir supprimer le participant ",c," ?"]})}),Object(d.jsx)($.a,{onSubmit:function(e){e.preventDefault(),a(t)},children:Object(d.jsxs)(Z.a.Footer,{children:[Object(d.jsx)(h.a,{variant:"primary",type:"submit",children:"Oui"}),Object(d.jsx)(h.a,{variant:"outline-primary",onClick:n,children:"Non"})]})})]}))},re=Object(i.b)((function(e){return{show:e.main.displayModalDelUser,userName:e.main.formInput.currentUserExpName}}),(function(e){return{onHide:function(){e(S())},onSubmitDelUser:function(){var t;e({type:N,payload:t})}}}))(ce);var ie=function(){var e=Object(o.useSwipeable)({onSwipedLeft:function(){return console.log("slide left")},onSwipedRight:function(){return console.log("slide right")},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return Object(d.jsxs)("div",Object(l.a)(Object(l.a)({className:"App"},e),{},{children:[Object(d.jsx)(j,{}),Object(d.jsx)(K,{}),Object(d.jsx)(te,{}),Object(d.jsx)(ae,{}),Object(d.jsx)(re,{})]}))},se=n(77),le=Object(se.b)({main:G}),oe=function(e){return function(t){return function(n){console.log(e.getState()),console.log("Je laisse passer cette action: ",n),t(n)}}},ue=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.c)(Object(se.a)(oe)),de=Object(se.d)(le,ue);Object(r.render)(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{store:de,children:Object(d.jsx)(ie,{})})}),document.getElementById("root")),s()}},[[394,1,2]]]);
//# sourceMappingURL=main.76b30c7e.chunk.js.map