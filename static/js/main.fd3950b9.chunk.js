(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),o=n.n(a),l=(n(12),n(6)),s=n(2);var i=n(0),u=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!0),c=Object(s.a)(n,2),a=c[0],o=c[1],l=r.a.useState(!1),i=Object(s.a)(l,2),u=i[0],d=i[1],j=r.a.useState(t),f=Object(s.a)(j,2),b=f[0],p=f[1];return r.a.useEffect((function(){setTimeout((function(){try{var n;localStorage.getItem(e)?n=JSON.parse(localStorage.getItem(e)):(localStorage.setItem(e,JSON.stringify(t)),n=t),p(n),o(!1)}catch(u){d(u)}}),1e3)})),[b,function(t){try{localStorage.setItem(e,JSON.stringify(t)),p(t)}catch(u){d(u)}},a,u]}("TASKS_V1",[]),n=Object(s.a)(t,4),c=n[0],a=n[1],o=n[2],d=n[3],j=r.a.useState(""),f=Object(s.a)(j,2),b=f[0],p=f[1],O=r.a.useState(!1),m=Object(s.a)(O,2),x=m[0],h=m[1],v=c.filter((function(e){return!!e.completed})).length,g=c.length,k=[];k=!b.length>=1?c:c.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{loading:o,error:d,totalTasks:g,completedTasks:v,searchValue:b,setSearchValue:p,searchedTasks:k,addTask:function(e){var t=Object(l.a)(c);t.push({completed:!1,text:e}),a(t)},completeTask:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(l.a)(c);n[t].completed=!0,a(n)},deleteTask:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(l.a)(c);n.splice(t,1),a(n)},openModal:x,setOpenModal:h},children:e.children})}n(14);function j(){var e=r.a.useContext(u),t=e.totalTasks,n=e.completedTasks;return Object(i.jsxs)("h2",{className:"task-counter",children:["You have completed ",n," of ",t," tasks."]})}n(15);function f(){var e=r.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"task-search",placeholder:"Task name",value:t,onChange:function(e){n(e.target.value)}})}var b;n(16);function p(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}var O=["title","titleId"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},m.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){var n=e.title,r=e.titleId,a=x(e,O);return c.createElement("svg",m({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,b||(b=c.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"})))}var v,g=c.forwardRef(h),k=(n.p,["title","titleId"]);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},y.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){var n=e.title,r=e.titleId,a=T(e,k);return c.createElement("svg",y({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,v||(v=c.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"})))}var C=c.forwardRef(S),I=(n.p,n(17),{check:function(e){return Object(i.jsx)(g,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(C,{className:"Icon-svg Icon-svg--delete",fill:e})}});function N(e){var t=e.type,n=e.color,c=void 0===n?"gray":n,r=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:I[t](c)})}function w(e){var t=e.completed,n=e.onComplete;return Object(i.jsx)(N,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function E(e){var t=e.onDelete;return Object(i.jsx)(N,{type:"delete",onClick:t})}n(18);function L(e){return Object(i.jsxs)("li",{className:"task-item",children:[Object(i.jsx)(w,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"task-item-p ".concat(e.completed&&"task-item-p--complete"),children:e.text}),Object(i.jsx)(E,{onDelete:e.onDelete})]})}n(19);function M(e){return Object(i.jsx)("button",{className:"create-task-button",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(20);function P(e){var t=e.children;return o.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(21);function F(){var e=r.a.useState(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=r.a.useContext(u),o=a.addTask,l=a.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.length<=0||(o(n),l(!1))},children:[Object(i.jsx)("label",{children:"What tasks do you have pending?"}),Object(i.jsx)("textarea",{placeholder:"\ud83d\udcddWrite it here!",value:n,onChange:function(e){c(e.target.value)}}),Object(i.jsxs)("div",{className:"TaskForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TaskForm-button TaskForm-button--cancel",onClick:function(){l(!1)},children:"Cancel"}),Object(i.jsx)("button",{type:"submit",className:"TaskForm-button TaskForm-button--add",children:"Add task"})]})]})}function B(e){var t=e.error;return Object(i.jsx)("p",{children:t})}n(22);function D(){return Object(i.jsxs)("div",{className:"loadingTask-container",children:[Object(i.jsx)("span",{className:"loadingTask-completeIcon"}),Object(i.jsx)("p",{className:"loadingTask-text",children:"Loading Tasks..."}),Object(i.jsx)("span",{className:"loadingTask-deleteIcon"})]})}function J(){return Object(i.jsx)("p",{children:"Add your first task!"})}function V(){var e=r.a.useContext(u),t=e.error,n=e.loading,c=e.searchedTasks,a=e.completeTask,o=e.deleteTask,l=e.openModal,s=e.setOpenModal;return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(f,{}),Object(i.jsxs)(p,{children:[t&&Object(i.jsx)(B,{}),n&&Object(i.jsx)(D,{}),!n&&!c.length&&Object(i.jsx)(J,{}),c.map((function(e){return Object(i.jsx)(L,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return o(e.text)}},e.text)}))]}),!!l&&Object(i.jsx)(P,{children:Object(i.jsx)(F,{})}),Object(i.jsx)(M,{setOpenModal:s})]})}var A=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(V,{})})};o.a.render(Object(i.jsx)(A,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.fd3950b9.chunk.js.map