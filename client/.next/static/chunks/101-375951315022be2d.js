(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{146:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(e){var t=e.children;return(0,r.jsx)("h1",{className:"uppercase text-center text-3xl sm:text-4xl md:text-5xl font-black text-sky-400 aerospace_font",children:t})}},9949:function(e,t,n){"use strict";n.d(t,{Z:function(){return J}});var r=n(5893),i=n(1163),s=n(7294),o=n(5259),l=n(4051),a=n.n(l),c=n(782),d=(n(9670),n(6813)),u=n(7031),f=n(4590),x=n(9534),p=n(9559),m=function(e){var t=e.handleConfirm,n=e.text,i=(0,s.useState)(!1);i[0],i[1];return(0,r.jsx)("button",{className:"px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500",onClick:t,children:n})},h=n(155),v=function(e){var t=e.title,n=e.children,i=e.index,s=e.activeIndex,o=e.setActiveIndex;return(0,r.jsxs)("div",{className:"w-full mb-4",children:[(0,r.jsxs)("button",{className:"flex items-center gap-4 w-full text-primaries-100 text-xl font-bold hover:text-blue-500",onClick:function(){return o(s!==(e=i)?e:-1);var e},children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(h.CgR,{className:"".concat(s===i?"rotate-180":""," ease-in-out duration-300")})}),(0,r.jsx)("div",{className:"flex iems-center",children:(0,r.jsx)("p",{className:"font-bold",children:t})})]}),(0,r.jsx)("div",{className:"py-2 pl-4 text-left text-sm ease-in-out duration-300 ".concat(s===i?"block":"hidden"),children:n})]})},g=n(8575),b=function(e){var t=e.slot,n=e.handleBook;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex flex-col gap-4 py-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 justify-between",children:[(0,r.jsxs)("p",{className:"text-white text-xl tracking-wide font-bold flex items-center gap-2",children:[(0,r.jsx)(h.mt1,{}),(0,r.jsx)("span",{children:(0,f.Po)(t.start_time)})]}),(0,r.jsxs)("p",{className:"text-white text-xl tracking-wide font-bold flex items-center gap-2",children:[(0,r.jsx)(h.fk5,{})," ",(0,r.jsxs)("span",{children:[(0,f.Jn)(t.start_time)," - ",(0,f.Jn)(t.end_time)]})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 justify-between",children:[(0,r.jsxs)("p",{className:"text-white text-xl tracking-wide font-bold",children:["capacity: ",t.capacity]}),(0,r.jsx)(m,{text:"Book Now",handleConfirm:function(){return n(t.id)}})]})]}),(0,r.jsx)("div",{className:"w-full h-px bg-white opacity-10"})]})},j=(0,s.forwardRef)((function(e,t){var n=e.title,o=e.description,l=e.rules,a=e.rounds,c=e.teams,d=e.notes,u=e.isLoggedIn,f=e.alreadyRegistered,x=e.handleAddToCart,j=e.loading,y=e.mode,w=e.play,k=e.link,N=e.fetchSlots,_=e.slots,C=e.handleBook,S=e.registeredEvent,O=e.setSlots,R=(0,s.useState)(!1),B=R[0],P=R[1],A=(0,i.useRouter)();(0,s.useImperativeHandle)(t,(function(){return{toggle:function(){P(!B)}}}),[]);var E=[{id:1,text:"Rounds",content:a},{id:2,text:"Rules and Regulations",content:l},{id:3,text:"Team Distribution",content:c},{id:4,text:"Event Leads",content:d}],I=(0,s.useState)(-1),T=I[0],Z=I[1];return(0,r.jsx)("div",{style:{zIndex:"99",pointerEvents:"none",display:B?"block":"none"},className:"fixed top-0 left-0 w-screen min-h-screen backdrop-blur",children:(0,r.jsxs)("div",{className:"fixed w-11/12 max-w-xl text-white rounded-3xl shadow-[0px_0px_15px_5px] shadow-sky-700",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"all",height:"90vh",backgroundImage:'url("Modal_BG.jpeg")',backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:[j&&(0,r.jsx)(g.Z,{}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between w-full px-5 py-6 shadow-lg md:px-8 event_modal_title rounded-t-3xl bg-black/[.6]",style:{height:"15%"},children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:"text-xl font-bold md:text-3xl",children:n}),(0,r.jsxs)("div",{className:"flex items-center gap-2 test-base md:text-lg",children:[(0,r.jsxs)("span",{className:"text-green-500",children:[(0,r.jsx)(h.dmj,{})," "]}),(0,r.jsxs)("p",{children:[y,"Blended"===y?" (Round 1: Online Round 2: Offline)":""]})]})]}),(0,r.jsx)("div",{className:"hover:cursor-pointer",onClick:function(){O([]),P(!1)},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:(0,r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),(null===_||void 0===_?void 0:_.length)>0?(0,r.jsxs)("div",{className:"".concat(p.event_modal_desc," overflow-y-auto text-justify px-4 md:px-8 py-5"),style:{height:"70%"},children:[(0,r.jsx)("p",{className:"mb-5 text-3xl font-bold text-white",children:"Available Slots:"}),_.map((function(e){return(0,r.jsx)(b,{slot:e,handleBook:C},e.id)}))]}):(0,r.jsxs)("div",{className:"".concat(p.event_modal_desc," overflow-y-auto text-justify px-4 md:px-8 py-5 bg-black/[.4]"),style:{height:"70%"},children:[(0,r.jsx)("div",{className:"mb-5",children:o.map((function(e){return(0,r.jsx)("p",{className:"text-lg font-normal text-left text-primaries-100 font",children:e},e)}))}),(0,r.jsx)("div",{className:"border-collapse",children:E.map((function(e){return(0,r.jsx)(v,{title:e.text,activeIndex:T,setActiveIndex:Z,index:e.id,children:e.content.map((function(e){return(0,r.jsx)("p",{className:"text-lg font-normal text-primaries-100 font",children:e},e)}))},e.id)}))})]}),(0,r.jsxs)("div",{className:"flex items-center justify-center py-5 shadow-lg rounded-b-3xl bg-black/[.7]",style:{height:"15%"},children:[u?!f&&(0,r.jsx)(m,{text:"Add to Cart",handleConfirm:x}):(0,r.jsx)("button",{className:"px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500 font-bold",onClick:function(){P(!1),A.push("/register/")},children:"Login/SignUp to Register"}),u&&f&&(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[!(null===S||void 0===S?void 0:S.fk_slot)&&(0,r.jsx)("button",{className:"px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500",onClick:(null===_||void 0===_?void 0:_.length)>0?function(){return O([])}:N,children:(null===_||void 0===_?void 0:_.length)>0?"Cancel":"Book Slot"}),w&&(0,r.jsx)("a",{className:"px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500",href:k,target:"_blank",children:"Play"})]})]})]})})})),y=(n(9227),n(1812));function w(e,t,n,r,i,s,o){try{var l=e[s](o),a=l.value}catch(c){return void n(c)}l.done?t(a):Promise.resolve(a).then(r,i)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){w(s,r,i,o,l,"next",e)}function l(e){w(s,r,i,o,l,"throw",e)}o(void 0)}))}}var N=function(e){var t,n=(0,s.useRef)(),i=(0,s.useContext)(u.Z),o=i.contEvents,l=i.user,p=i.dispatchEvents,m=(0,s.useState)(!1),h=m[0],v=m[1],g=(0,x.Z)(e.description),b=(0,x.Z)(e.rules?e.rules:""),w=(0,x.Z)(e.rounds?e.rounds:""),N=(0,x.Z)(e.teams?e.teams:""),_=(0,x.Z)(e.notes?e.notes:""),C=!!(null===l||void 0===l?void 0:l.id);console.log("isLoggedin",C);var S=(0,s.useState)([]),O=S[0],R=S[1],B=!!C&&!!(null===(t=o.find((function(t){return t.id===e.id})))||void 0===t?void 0:t.id),P=B?o.find((function(t){return t.id===e.id})):void 0,A=(0,y.i)().addToCart,E=function(){var t=k(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=5,(0,d.FJ)(e.id);case 5:if(!(null===(r=t.sent)||void 0===r?void 0:r.error)){t.next=10;break}return c.Am.error(r.error),v(!1),t.abrupt("return");case 10:(null===r||void 0===r||null===(n=r.slots)||void 0===n?void 0:n.length)>0?R(null===r||void 0===r?void 0:r.slots):c.Am.error("Slot booking isn't active for this event!"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0),c.Am.error("Something went wrong");case 17:v(!1);case 18:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var t=k(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,(0,d.pT)(e.id,n,p);case 4:(null===(r=t.sent)||void 0===r?void 0:r.error)?c.Am.error(r.error):(R([]),c.Am.success("Slot Booked")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),c.Am.error("Something went wrong");case 11:v(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"flex flex-col items-center py-5 card bg-primaries-800",children:[(0,r.jsxs)("div",{className:"imgBox",children:[(0,r.jsx)("img",{src:e.logo,alt:e.name})," "]}),(0,r.jsxs)("div",{className:"mt-8 contentBox",children:[(0,r.jsx)("h2",{className:"event_title",children:e.name}),(0,r.jsx)("h3",{className:"mt-2 text-center event_tagline",children:e.tagline}),(null===P||void 0===P?void 0:P.fk_slot)&&(0,r.jsxs)("h3",{className:"mt-2 text-center event_tagline",children:[(0,f.Po)(P.start_time)," ",(0,f.Jn)(P.start_time)," -"," ",(0,f.Jn)(P.end_time)]}),(0,r.jsx)("button",{className:"my-4 buy",onClick:function(){var e;return null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.toggle()},children:"View"})]}),(0,r.jsx)(j,{title:e.name,play:e.play,description:g,rules:b,rounds:w,teams:N,notes:_,ref:n,isLoggedIn:C,alreadyRegistered:B,mode:e.mode,handleAddToCart:k(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.id,e.price,e,e.logo,e.tagline);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),loading:h,link:e.link,fetchSlots:E,slots:O,handleBook:I,registeredEvent:P,setSlots:R})]})};n(18);function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function B(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}function P(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}var E=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var i=R(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return P(this,n)}}var T=function(e){B(n,e);var t=I(n);function n(){return _(this,n),t.apply(this,arguments)}return S(n,[{key:"doClick",value:function(e,t){this.props.click(e)}},{key:"render",value:function(){var e=this,t=this.props.activeId,n=this.props.tabs.map((function(n,i){return(0,r.jsx)("li",{className:"".concat(t===i?"active":""," md:w-1/3 md:mx-5"),children:(0,r.jsx)("a",{onClick:e.doClick.bind(e,i),className:"bg-primaries-800",children:(0,r.jsx)("span",{className:"text-xl",children:n})})})}));return(0,r.jsx)("ul",{className:"flex flex-col justify-center tabs-header md:flex-row",children:n})}}]),n}(s.Component),Z=function(e){B(n,e);var t=I(n);function n(){return _(this,n),t.apply(this,arguments)}return S(n,[{key:"render",value:function(){var e,t,n,i,s=this;return(0,r.jsxs)(r.Fragment,{children:[0===(null===(e=this.props)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)&&"/my_events"===(null===(n=this.props.router)||void 0===n?void 0:n.pathname)&&(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full gap-4 mt-10 md:mt-20 md:gap-8",children:[(0,r.jsx)("p",{className:"text-3xl font-bold text-center md:text-5xl text-primaries-100",children:"Registered Events will be visible after verification."}),(0,r.jsx)(o.Z,{onClick:function(){return s.props.router.push("/events")},children:"Register Now"})]}),(0,r.jsx)("div",{className:"grid items-center justify-center grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10",children:null===(i=this.props.data)||void 0===i?void 0:i.map((function(e,t){return(0,r.jsx)(N,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},e),t)}))})]})}}]),n}(s.Component),J=function(e){var t=e.events;console.log("IN TABS"),console.log(t);var n=["All","Technical","Non Technical"],o=(0,i.useRouter)(),l=(0,s.useState)(0),a=l[0],c=l[1],d=t;return d=0==a?t:1==a?d.filter((function(e){return"Technical"===e.type})):d.filter((function(e){return"Non Technical"===e.type})),(0,r.jsxs)("div",{className:"tabs-body",children:[(0,r.jsx)(T,{data:n,click:function(e){c(e)},tabs:n,activeId:a}),(0,r.jsx)(Z,{data:d,activeId:a,router:o})]})}},9559:function(e){e.exports={event_modal_desc:"event_modal_event_modal_desc__mqQRS",modal_gradient_class:"event_modal_modal_gradient_class__CWVOO"}},9008:function(e,t,n){e.exports=n(3121)}}]);