(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),i=n.n(a),s=n(2),r=n(0),o=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsxs)("div",{className:"d-flex-row align-items-center justify-content-center",children:[Object(r.jsx)("h4",{className:"footer-app",children:"Designed by UriCode \xa9"}),Object(r.jsx)("img",{className:"img-footer",src:"helmet.svg",alt:"img_footer"})]}),Object(r.jsx)("p",{className:"text-center",children:Object(r.jsx)("small",{children:"Este es un proyecto construido con el API de Giphy, todos los Gifs que aqu\xed aparecen son pertenecientes a Giphy."})})]})},d=n(10),j=n(6),l=n.n(j),u=n(8),b=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"ixX8Ljv5kG1WvYK3IzclO118dDKgLqai",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=").concat("ixX8Ljv5kG1WvYK3IzclO118dDKgLqai"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,i=a.data,s=i.map((function(e){var t,n;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url,size:null===(n=e.images)||void 0===n?void 0:n.downsized_medium.size}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url,a=function(e){var t=Object(c.useState)({gif:"",loaded:!1}),n=Object(s.a)(t,2),a=n[0],i=n[1];return{event:function(t){i({gif:e,loaded:!0})},data:a}}(n),i=a.event,o=a.data,d=o.gif,j=o.loaded;return Object(r.jsxs)("div",{className:"d-flex justify-content-center flex-wrap card animate__animated animate__fadeIn n-father",onMouseOver:function(e){var t=e.currentTarget.firstChild.classList;t.contains("d-none")&&t.remove("d-none")},onMouseLeave:function(e){var t=e.currentTarget.firstChild.classList;t.contains("d-none")||t.add("d-none")},children:[Object(r.jsxs)("div",{className:"n-child d-none d-flex-row align-items-bottom justify-content-between",children:[Object(r.jsx)("p",{className:"text-capitalize text-title card-info",children:t}),Object(r.jsx)("a",{href:n,className:"btn card-info",target:"_blank",rel:"noreferrer",children:"\ud83d\udd17"})]}),Object(r.jsx)("img",{src:n,alt:t,onLoad:i,srcSet:j?d:"loading.gif"})]})},x=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){return i({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,i=n.loading;return Object(r.jsxs)("div",{className:"container text-center",children:[Object(r.jsx)("h3",{className:"text-capitalize",children:t}),Object(r.jsx)("hr",{}),Object(r.jsx)("br",{}),i&&Object(r.jsxs)("div",{className:"lds-roller",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]}),Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-between",children:a.map((function(e){return Object(r.jsx)(f,Object(d.a)({},e),e.id)}))})]})},O=n(9),m=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1],d=function(e){e.preventDefault(),void 0!==i&&(i.trim().length>2?(t((function(e){return[i].concat(Object(O.a)(e))})),o("")):alert("No has escrito nada"))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{className:"formulario",onSubmit:d,children:Object(r.jsxs)("div",{className:"d-flex-row",children:[Object(r.jsx)("input",{type:"text",placeholder:"Buscar",value:i,onChange:function(e){o(e.target.value)}}),Object(r.jsx)("button",{className:"d-flex-row align-items-center btn btn-search",onClick:d,children:Object(r.jsx)("p",{children:"\ud83d\udd0e"})})]})}),Object(r.jsx)("br",{})]})},v=function(e){var t=e.setCategories;return Object(r.jsxs)("div",{className:"nav d-flex align-items-center",children:[Object(r.jsx)("img",{src:"https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif",alt:"img-header"}),Object(r.jsx)("div",{className:"d-flex justify-content-center w-100",children:Object(r.jsx)(m,{setCategories:t})})]})},h=function(){var e=Object(c.useState)(["DOOM Eternal"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{setCategories:a}),Object(r.jsx)("div",{children:n.map((function(e){return Object(r.jsx)(x,{category:e},e)}))}),Object(r.jsx)(o,{})]})};n(17),n(18),n(19);i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.27226146.chunk.js.map