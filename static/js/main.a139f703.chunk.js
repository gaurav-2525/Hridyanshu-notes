(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var i=n(3),c=n.n(i),a=n(41),o=n.n(a),s=n(44),r=n(27),d=n(42),l=n.n(d),j=(n(49),n(11)),u=n(26),b=n(43),p=n.n(b),O=n(0),v=function(e){var t=e.activeNote,n=e.onUpdateNote,i=function(e,i){var c;n(Object(u.a)(Object(u.a)({},t),{},(c={},Object(j.a)(c,e,i),Object(j.a)(c,"lastModified",Date.now()),c)))};return t?Object(O.jsxs)("div",{className:"app-main",children:[Object(O.jsxs)("div",{className:"app-main-note-edit",children:[Object(O.jsx)("input",{type:"text",id:"title",placeholder:"Enter Group Name",value:t.title,onChange:function(e){return i("title",e.target.value)},autoFocus:!0}),Object(O.jsx)("textarea",{id:"body",placeholder:"Write your note here...",value:t.body,onChange:function(e){return i("body",e.target.value)}})]}),Object(O.jsxs)("div",{className:"app-main-note-preview",children:[Object(O.jsx)("h1",{className:"preview-title",children:t.title}),Object(O.jsx)(p.a,{className:"markdown-preview",children:t.body})]})]}):Object(O.jsx)("div",{className:"no-active-note",children:"No Active Note"})},h=function(e){var t=e.notes,n=e.onAddNote,i=e.onDeleteNote,c=e.activeNote,a=e.setActiveNote,o=t.sort((function(e,t){return t.lastModified-e.lastModified}));return Object(O.jsxs)("div",{className:"app-sidebar",children:[Object(O.jsxs)("div",{className:"app-sidebar-header",children:[Object(O.jsx)("h1",{children:"Pocket Notes"}),Object(O.jsx)("button",{onClick:n,children:"Add"})]}),Object(O.jsx)("div",{className:"app-sidebar-notes",children:o.map((function(e,t){var n=e.id,o=e.title,s=e.body,r=e.lastModified;return Object(O.jsxs)("div",{className:"app-sidebar-note ".concat(n===c&&"active"),onClick:function(){return a(n)},children:[Object(O.jsxs)("div",{className:"sidebar-note-title",children:[Object(O.jsx)("strong",{children:o}),Object(O.jsx)("button",{onClick:function(e){return i(n)},children:"Delete"})]}),Object(O.jsx)("p",{children:s&&s.substr(0,100)+"..."}),Object(O.jsxs)("small",{className:"note-meta",children:["Last Modified"," ",new Date(r).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})};var N=function(){var e=Object(i.useState)(localStorage.notes?JSON.parse(localStorage.notes):[]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(r.a)(a,2),d=o[0],j=o[1];return Object(i.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(h,{notes:n,onAddNote:function(){var e={id:l()(),title:"",body:"",lastModified:Date.now()};c([e].concat(Object(s.a)(n))),j(e.id)},onDeleteNote:function(e){c(n.filter((function(t){return t.id!==e})))},activeNote:d,setActiveNote:j}),Object(O.jsx)(v,{activeNote:n.find((function(e){return e.id===d})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===e.id?e:t}));c(t)}})]})};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))},49:function(e,t,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.a139f703.chunk.js.map