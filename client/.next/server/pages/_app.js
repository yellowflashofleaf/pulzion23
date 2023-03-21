(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./context/AppContext.js
var AppContext = __webpack_require__(7031);
// EXTERNAL MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_ = __webpack_require__(3732);
var external_simple_react_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_lightbox_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./reducers/userReducer.js
const userReducer = (state = {}, action)=>{
    switch(action.type){
        case "SET_USER":
            {
                return action.user;
            }
        case "RESET_USER":
            {
                return {};
            }
        case "UPDATE_USER":
            {
                return {
                    ...state,
                    ...action.updates
                };
            }
        default:
            {
                return {};
            }
    }
};
/* harmony default export */ const reducers_userReducer = (userReducer);

;// CONCATENATED MODULE: ./reducers/eventsReducer.js
const eventsReducer = (state = [], action)=>{
    switch(action.type){
        case "SET_EVENTS":
            {
                return action.events;
            }
        case "RESET_EVENTS":
            {
                return [];
            }
        case "ADD_EVENT":
            {
                return [
                    ...state,
                    action.event
                ];
            }
        case "UPDATE_EVENT":
            {
                return state.map((event)=>{
                    if (event.id === action.id) {
                        return {
                            ...event,
                            ...action.updates
                        };
                    }
                    return event;
                });
            }
        case "REMOVE_EVENT":
            {
                return state.filter((event)=>event.id !== action.id
                );
            }
        default:
            {
                return [];
            }
    }
};
/* harmony default export */ const reducers_eventsReducer = (eventsReducer);

// EXTERNAL MODULE: ./Components/Loader.js + 1 modules
var Loader = __webpack_require__(9048);
// EXTERNAL MODULE: ./action/user.js
var action_user = __webpack_require__(1067);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./Components/StriverModal.js




const StriverModal = ({ isVisible , setIsVisible  })=>{
    const router = useRouter();
    const onApp = router.pathname === '/sponsors/app' || router.pathname === '/privacy_policy/app';
    return /*#__PURE__*/ _jsxs("div", {
        style: {
            zIndex: "99999",
            display: isVisible && !onApp ? "block" : "none"
        },
        className: "fixed top-0 left-0 w-screen min-h-screen backdrop-blur",
        onClick: ()=>{
            setIsVisible(false);
        },
        children: [
            /*#__PURE__*/ _jsx(IoCloseSharp, {
                style: {
                    top: 10,
                    right: 20,
                    position: "absolute",
                    width: "30px",
                    height: "30px"
                },
                color: "#fff",
                onClick: ()=>setIsVisible(false)
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "text-white fixed rounded-3xl max-w-xl w-11/12 flex flex-col items-center justify-center bg-transparent mb-5",
                style: {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    pointerEvents: "all",
                    backgroundColor: "transparent"
                },
                onClick: (e)=>{
                    e.stopPropagation();
                },
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        class: "object-cover",
                        src: "/images/striver.jpeg"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "mt-5 rounded-b-3xl flex justify-center items-center flex-col",
                        children: /*#__PURE__*/ _jsx("a", {
                            href: "https://striver.pulzion.in",
                            className: "text-white px-5 py-2 rounded-md uppercase tracking-wider bg-primaries-500 ease-in-out duration-500 mb-3",
                            children: "Register Now"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Components_StriverModal = ((/* unused pure expression or super */ null && (StriverModal)));

// EXTERNAL MODULE: ./context/CartContext.js + 1 modules
var CartContext = __webpack_require__(1812);
;// CONCATENATED MODULE: ./pages/_app.js
















// import { useRouter } from 'next/router';
function MyApp({ Component , pageProps  }) {
    const { 0: user , 1: dispatchUser  } = (0,external_react_.useReducer)(reducers_userReducer, {});
    const { 0: contEvents , 1: dispatchEvents  } = (0,external_react_.useReducer)(reducers_eventsReducer, []);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(true);
    // const router = useRouter();
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const userData = await (0,action_user/* loadUser */.II)(dispatchUser, dispatchEvents);
                if (userData === null || userData === void 0 ? void 0 : userData.error) {
                    console.log(userData === null || userData === void 0 ? void 0 : userData.error);
                }
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    // useEffect(() => {
    //   const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    //   const handleComplete = (url) => (url === router.asPath) && setLoading(false);
    //   router.events.on('routeChangeStart', handleStart)
    //   router.events.on('routeChangeComplete', handleComplete)
    //   router.events.on('routeChangeError', handleComplete)
    //   return () => {
    //     router.events.off('routeChangeStart', handleStart)
    //     router.events.off('routeChangeComplete', handleComplete)
    //     router.events.off('routeChangeError', handleComplete)
    //   }
    // },[])
    return !loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_simple_react_lightbox_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://checkout.razorpay.com/v1/checkout.js",
                async: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AppContext/* default.Provider */.Z.Provider, {
                value: {
                    user,
                    dispatchUser,
                    contEvents,
                    dispatchEvents
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CartContext/* CartProvider */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {});
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 1189:
/***/ ((module) => {

"use strict";
module.exports = require("react-lottie");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3732:
/***/ ((module) => {

"use strict";
module.exports = require("simple-react-lightbox");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [482,366], () => (__webpack_exec__(6921)));
module.exports = __webpack_exports__;

})();