(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{86:function(e,r,n){"use strict";var l=n(4051),t=n.n(l),a=n(5893),o=n(1664),i=n(7294),s=n(1163),c=n(7031),u=n(1067);function d(e,r,n,l,t,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?r(s):Promise.resolve(s).then(l,t)}var m=[{id:1,to:"/admin/dashboard",text:"Dashboard"},{id:2,to:"/admin/events",text:"Events"},{id:3,to:"/admin/registerations",text:"Registeration"},{id:4,to:"/admin/register",text:"Register User"},{id:5,to:"/admin/verify",text:"Verify Payment"}];r.Z=function(e){var r=e.children,n=(0,s.useRouter)().pathname,l=(0,i.useContext)(c.Z),p=l.dispatchUser,f=l.dispatchEvents,v=function(){var e,r=(e=t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.kS)(p,f);case 3:(null===(r=e.sent)||void 0===r?void 0:r.error)&&console.log(r.error),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var r=this,n=arguments;return new Promise((function(l,t){var a=e.apply(r,n);function o(e){d(a,l,t,o,i,"next",e)}function i(e){d(a,l,t,o,i,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"flex bg-primaries-700",children:[(0,a.jsxs)("div",{className:"flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r",children:[(0,a.jsx)("img",{src:"/logo.png",alt:"logo",className:"mb-5"}),(0,a.jsx)("div",{className:"flex flex-col justify-between mt-6 flex-1",children:(0,a.jsx)("aside",{children:(0,a.jsx)("ul",{children:m.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(o.default,{href:e.to,children:(0,a.jsx)("span",{className:"flex cursor-pointer items-center px-4 py-2 text-primaries-100 rounded-md ".concat(n===e.to?"bg-primaries-800":""),children:(0,a.jsx)("span",{className:"font-medium",children:e.text})})})},e.id.toString())}))})})}),(0,a.jsx)("button",{className:"border-2 border-primaries-500 text-primaries-100 px-4 py-2 w-full text-center rounded-xl",onClick:v,children:"Logout"})]}),(0,a.jsx)("div",{className:"w-full p-4 overflow-y-auto h-screen",children:r})]})}},5259:function(e,r,n){"use strict";var l=n(5893);n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){if(null==e)return{};var n,l,t=function(e,r){if(null==e)return{};var n,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}r.Z=function(e){var r=e.children,n=e.handleClick,o=a(e,["children","handleClick"]);return(0,l.jsx)("button",function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(r){t(e,r,n[r])}))}return e}({className:"px-8 py-2 bg-primaries-500 text-white shadow-md hover:scale-105 ease-in-out",style:{borderRadius:"30px"},onClick:n},o,{children:r}))}},6017:function(e,r,n){"use strict";var l=n(5893),t=(n(7294),n(7456));r.Z=function(e){var r=e.text,n=e.handleCancel,a=e.handleConfirm;return(0,l.jsx)("div",{className:"w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center z-50",children:(0,l.jsxs)("div",{className:"".concat(t.scroll_element," max-w-2xl bg-primaries-800 w-11/12 mx-auto overflow-y-auto px-4 py-4 rounded-xl shadow-md"),children:[(0,l.jsx)("p",{className:"text-primaries-100 font-bold text-3xl",children:r}),(0,l.jsxs)("div",{className:"flex items-center justify-end mt-5 gap-3",children:[(0,l.jsx)("button",{className:"bg-primaries-500 text-primaries-100 px-4 w-20 py-2 rounded-xl",onClick:a,children:"Yes"}),(0,l.jsx)("button",{className:"border-primaries-500 border-2 text-primaries-100 w-20 px-4 py-2 rounded-xl",onClick:n,children:"No"})]})]})})}},6140:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var l=n(5893),t=n(2175),a=n(4231),o=(n(7294),n(7725)),i=n(8885);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(r){s(e,r,n[r])}))}return e}function u(e,r){if(null==e)return{};var n,l,t=function(e,r){if(null==e)return{};var n,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=function(e){var r,n=e.label,a=e.name,o=e.placeholder,d=e.options,m=u(e,["label","name","placeholder","options"]),p=(0,t.u6)(),f=p.errors,v=p.touched,b=p.values,x=p.setValues;return(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[n&&(0,l.jsx)("label",{className:"text-primaries-100",children:n}),(0,l.jsx)(i.ZP,c({value:b[a],options:d,onChange:function(e){x(c({},b,s({},a,e)))},name:a,placeholder:o},m)),f[a]&&v[a]&&(0,l.jsx)("p",{className:"text-red-500",children:null===(r=f[a])||void 0===r?void 0:r.value})]})},m=n(5259),p=n(7456);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function v(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(r){f(e,r,n[r])}))}return e}function b(e,r){if(null==e)return{};var n,l,t=function(e,r){if(null==e)return{};var n,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var x=function(e){var r=e.label,n=e.name,a=e.placeholder,o=b(e,["label","name","placeholder"]),i=(0,t.u6)(),s=i.errors,c=i.touched;return(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[r&&(0,l.jsx)("label",{className:"text-primaries-100",children:r}),(0,l.jsx)("textarea",v({placeholder:a,name:n,className:"px-8 w-full border rounded px-3 py-2 text-primaries-100 focus:outline-none bg-primaries-800"},o)),s[n]&&c[n]&&(0,l.jsx)("p",{className:"text-red-500",children:s[n]})]})},h=[{label:"Technical",value:"Technical"},{label:"Non Technical",value:"Non Technical"}],y=[{label:"Online",value:"Online"},{label:"Offline",value:"Offline"},{label:"Blended",value:"Blended"}],j=a.Ry().shape({name:a.Z_().trim().required().label("Name"),tagline:a.Z_().trim().required().label("Tagline"),logo:a.Z_().trim().required().label("Logo"),description:a.Z_().trim().required().label("Description"),rules:a.Z_().trim().required().label("Rules"),rounds:a.Z_().trim().required().label("Rounds"),teams:a.Z_().trim().required().label("Team Distribution"),notes:a.Z_().trim().required().label("Team Lead"),type:a.Ry().shape({label:a.Z_().trim().required(),value:a.Z_().trim().required()}).nullable().required().label("Event Type"),mode:a.Ry().shape({label:a.Z_().trim().required(),value:a.Z_().trim().required()}).nullable().required().label("Event Mode")}),g=function(e){var r=e.setOpen,n=e.handleSubmit,a=e.event;return(0,l.jsx)("div",{className:"w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center",children:(0,l.jsxs)("div",{className:"".concat(p.scroll_element," max-w-5xl bg-primaries-800 w-11/12 mx-auto overflow-y-auto px-4 py-8 rounded-xl shadow-md"),style:{height:"70vh"},children:[(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)("button",{className:"mb-5 text-primaries-100",onClick:function(){return r(!1)},children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),(0,l.jsx)(t.J9,{initialValues:{name:(null===a||void 0===a?void 0:a.name)?a.name:"",tagline:(null===a||void 0===a?void 0:a.tagline)?a.tagline:"",description:(null===a||void 0===a?void 0:a.description)?a.description:"",type:(null===a||void 0===a?void 0:a.type)?{label:a.type,value:a.type}:{},mode:(null===a||void 0===a?void 0:a.mode)?{label:a.mode,value:a.mode}:{},logo:(null===a||void 0===a?void 0:a.logo)?a.logo:"",is_active:!!(null===a||void 0===a?void 0:a.is_active),play:!!(null===a||void 0===a?void 0:a.play),rules:(null===a||void 0===a?void 0:a.rules)?a.rules:"",rounds:(null===a||void 0===a?void 0:a.rounds)?a.rounds:"",teams:(null===a||void 0===a?void 0:a.teams)?a.teams:"",notes:(null===a||void 0===a?void 0:a.notes)?a.notes:"",link:(null===a||void 0===a?void 0:a.link)?a.link:""},validationSchema:j,onSubmit:n,children:function(e){var r=e.values,n=e.handleChange,t=e.handleBlur,a=e.handleSubmit;return(0,l.jsxs)("form",{onSubmit:a,children:[(0,l.jsxs)("div",{className:"grid md:grid-cols-2 gap-5",children:[(0,l.jsx)(o.Z,{type:"text",name:"name",value:r.name,placeholder:"Event Name",label:"Event Name",onChange:n,onBlur:t}),(0,l.jsx)(o.Z,{type:"text",name:"tagline",value:r.tagline,placeholder:"Event Tagline",label:"Event Tagline",onChange:n,onBlur:t}),(0,l.jsx)(o.Z,{type:"text",name:"logo",value:r.logo,placeholder:"Logo URL",label:"Logo",onChange:n,onBlur:t}),(0,l.jsx)(o.Z,{type:"text",name:"link",value:r.link,placeholder:"Platform Url",label:"Platform Url",onChange:n,onBlur:t}),(0,l.jsx)(d,{name:"type",label:"Event Type",placeholder:"Event Type",value:r.type,onBlur:t,options:h}),(0,l.jsx)(d,{name:"mode",label:"Event Mode",placeholder:"Event Mode",value:r.mode,onBlur:t,options:y})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-5 my-5",children:[(0,l.jsx)(x,{name:"description",value:r.description,placeholder:"Description",label:"Description",onChange:n,onBlur:t}),(0,l.jsx)(x,{name:"rules",value:r.rules,placeholder:"Rules",label:"Rules",onChange:n,onBlur:t}),(0,l.jsx)(x,{name:"rounds",value:r.rounds,placeholder:"Rounds",label:"Rounds",onChange:n,onBlur:t}),(0,l.jsx)(x,{name:"teams",value:r.teams,placeholder:"Team Distribution",label:"Team Distribution",onChange:n,onBlur:t}),(0,l.jsx)(x,{name:"notes",value:r.notes,placeholder:"Team Leads",label:"Team Leads",onChange:n,onBlur:t})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(o.Z,{type:"checkbox",name:"is_active",value:r.is_active,placeholder:"Active?",label:"Active?",onChange:n,onBlur:t}),(0,l.jsx)(o.Z,{type:"checkbox",name:"play",value:r.play,placeholder:"Play?",label:"Play?",onChange:n,onBlur:t})]}),(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{type:"submit",children:"Create"})})]})]})}})]})})}},7725:function(e,r,n){"use strict";var l=n(5893),t=(n(7294),n(2175));function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(r){a(e,r,n[r])}))}return e}function i(e,r){if(null==e)return{};var n,l,t=function(e,r){if(null==e)return{};var n,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}r.Z=function(e){var r=e.label,n=e.type,a=e.name,s=e.placeholder,c=e.value,u=i(e,["label","type","name","placeholder","value"]),d=(0,t.u6)(),m=d.errors,p=d.touched;return"checkbox"!==n?(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[r&&(0,l.jsx)("label",{className:"text-primaries-100",children:r}),(0,l.jsx)("input",o({type:n,placeholder:s,name:a,value:c,className:"px-8 w-full border rounded px-3 py-2 text-primaries-100 focus:outline-none bg-primaries-800"},u)),m[a]&&p[a]&&(0,l.jsx)("p",{className:"text-red-500",children:m[a]})]}):(0,l.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,l.jsx)("input",o({type:n,placeholder:s,name:a,checked:c,className:"text-primaries-700 focus:outline-none"},u)),r&&(0,l.jsx)("label",{className:"text-primaries-100",children:r})]})}},65:function(e,r,n){"use strict";var l=n(5893),t=n(7294),a=n(7031),o=n(1163),i=n(8575);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}r.Z=function(e){var r=function(r){var n=(0,t.useContext)(a.Z).user,c=(0,o.useRouter)();return(null===n||void 0===n?void 0:n.id)&&"admin"===(null===n||void 0===n?void 0:n.type)?(0,l.jsx)(e,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},l=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(r){s(e,r,n[r])}))}return e}({},r)):(c.push("/admin"),(0,l.jsx)(i.Z,{}))};return e.getInitialProps&&(r.getInitialProps=e.getInitialProps),r}},7456:function(e){e.exports={scroll_element:"admin_scroll_element__Wfy8P"}}}]);