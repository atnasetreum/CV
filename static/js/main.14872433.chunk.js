(window.webpackJsonpcv=window.webpackJsonpcv||[]).push([[0],{73:function(e,a,t){e.exports=t(84)},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),c=t(31),i=t(32),s=t(17),m=t(43),u=t(44),p=t(49),d=t(22),h=t(34),E=t(12),g=t(57),b=t(23),f=t(123),v=t(124),w=t(121),k=t(125),y=t(136),O=t(122),j=t(137),C=t(135),N=t(39),x=t.n(N),I=t(58),B=t.n(I),S=t(38),R=t.n(S),z=t(45),D=t.n(z),M=t(46),F=t.n(M),G=t(59),W=t.n(G),_=Object(g.a)(function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(E.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(E.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(E.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}});function H(){var e=_(),a=r.a.useState(null),t=Object(h.a)(a,2),n=t[0],o=t[1],l=r.a.useState(null),c=Object(h.a)(l,2),i=c[0],s=c[1],m=Boolean(n),u=Boolean(i);function p(e){o(e.currentTarget)}function d(){s(null)}function E(){o(null),d()}var g="primary-search-account-menu",b=r.a.createElement(C.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:E},r.a.createElement(j.a,{onClick:E},"Profile"),r.a.createElement(j.a,{onClick:E},"My account")),N=r.a.createElement(C.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:d},r.a.createElement(j.a,null,r.a.createElement(w.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(O.a,{badgeContent:4,color:"secondary"},r.a.createElement(D.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(j.a,null,r.a.createElement(w.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(O.a,{badgeContent:11,color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(j.a,{onClick:p},r.a.createElement(w.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(R.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(f.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(w.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(x.a,null)),r.a.createElement(k.a,{className:e.title,variant:"h6",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(B.a,null)),r.a.createElement(y.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(w.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(O.a,{badgeContent:4,color:"secondary",onClick:function(){return window.location="Formularios"}},r.a.createElement(D.a,null))),r.a.createElement(w.a,{"aria-label":"show 17 new notifications",color:"inherit",onClick:function(){return window.location="Documentos"}},r.a.createElement(O.a,{badgeContent:17,color:"secondary"},r.a.createElement(F.a,null))),r.a.createElement(w.a,{edge:"end","aria-label":"account of current user","aria-controls":g,"aria-haspopup":"true",onClick:p,color:"inherit"},r.a.createElement(R.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(w.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(W.a,null))))),N,b)}var P=t(132),T=t(126),A=t(134),J=t(60),L=t.n(J),q=t(127),U=t(128),V=t(129),$=t(131),K=t(130),Q=t(133),X=Object(g.a)(function(e){return{root:{position:"fixed",flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},card:{maxWidth:400},media:{height:140}}});function Y(e){var a=e.children,t=e.window,n=X(),o=Object(T.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(q.a,{in:o},r.a.createElement("div",{onClick:function(e){var a=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");a&&a.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},a))}var Z=function(e){var a=X(),t=r.a.useState(null),n=Object(h.a)(t,2),o=n[0],l=n[1],c=Boolean(o);function i(){e.history.push("Formulario"),l(null)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null),r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(k.a,{variant:"h6",className:a.title},"Eduardo Dom\xednguez Garc\xeda"),r.a.createElement("div",null,r.a.createElement(w.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(x.a,null)),r.a.createElement(C.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:i},r.a.createElement(j.a,{onClick:i,to:"Formulario"},r.a.createElement("i",{className:"material-icons"},"accessibility_new"),"Objetivo profesional"),r.a.createElement(j.a,{onClick:i},r.a.createElement("i",{className:"material-icons"},"assignment"),"Experiencia profesional"),r.a.createElement(j.a,{onClick:i},r.a.createElement("i",{className:"material-icons"},"assignment_ind"),"\xc1rea de especialidad y Habilidades"),r.a.createElement(j.a,{onClick:i},r.a.createElement("i",{className:"material-icons"},"account_balance"),"Educaci\xf3n"))))),r.a.createElement(v.a,{id:"back-to-top-anchor"}),r.a.createElement(Q.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"90vh"}},r.a.createElement(Q.a,{item:!0},e.children)),r.a.createElement(Y,e,r.a.createElement(A.a,{color:"secondary",size:"small","aria-label":"scroll back to top"},r.a.createElement(L.a,null))))},ee=Object(g.a)(function(e){return{root:{position:"fixed",flexGrow:1,bottom:e.spacing(2),right:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},card:{maxWidth:400},media:{height:140}}});var ae=function(e){var a=e.img,t=e.contenido,n=e.titulo,o=ee();return r.a.createElement(U.a,{className:o.card},r.a.createElement(V.a,null,r.a.createElement(K.a,{className:o.media,image:a,title:"Contemplative Reptile"}),r.a.createElement($.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center"},n),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p",align:"justify"},t))))};var te=function(e){return r.a.createElement(Z,null,r.a.createElement(ae,{img:"http://portalvirtualempleo.us.es/wp-content/uploads/2015/04/perfil_02.png",contenido:"Aprender e implementar nuevas tecnolog\xedas, para determinar las mejores opciones del mercado con fundamentos reales, as\xed mismo el an\xe1lisis de los datos obtenidos en los diferentes sistemas para mejorar los procesos y detectar nuevas oportunidades de crecimiento.",titulo:"Objetivo profesional"}))},ne=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:null,errorInfo:null},t.componentDidCatch=function(e,a){t.setState({error:e,errorInfo:a})},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Error 500"),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),a}(n.Component),re=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(H,null),"formulario")},oe=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(H,null),"Documentos")},le=function(){return r.a.createElement("p",null,"no encontrada")},ce=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(ne,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:te}),r.a.createElement(d.a,{path:"/Formularios",component:re}),r.a.createElement(d.a,{path:"/Documentos",component:oe}),r.a.createElement(d.a,{component:le})))}}]),a}(n.Component),ie=Object(d.f)(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{basename:"/cv"},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[73,1,2]]]);
//# sourceMappingURL=main.14872433.chunk.js.map