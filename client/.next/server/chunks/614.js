"use strict";
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 3157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7031);
/* harmony import */ var _action_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1067);






const links = [
    {
        id: 1,
        to: "/admin/dashboard",
        text: "Dashboard"
    },
    {
        id: 2,
        to: "/admin/events",
        text: "Events"
    },
    {
        id: 3,
        to: "/admin/registerations",
        text: "Registeration"
    },
    {
        id: 4,
        to: "/admin/register",
        text: "Register User"
    },
    {
        id: 5,
        to: "/admin/verify",
        text: "Verify Payment"
    }, 
];
const AdminLayout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const path = router.pathname;
    const { dispatchUser , dispatchEvents  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const handleLogout = async ()=>{
        try {
            const data = await (0,_action_user__WEBPACK_IMPORTED_MODULE_5__/* .logout */ .kS)(dispatchUser, dispatchEvents);
            if (data === null || data === void 0 ? void 0 : data.error) {
                console.log(data.error);
            }
        } catch (e) {
            console.log(e);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex bg-primaries-700",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/logo.png",
                        alt: "logo",
                        className: "mb-5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-between mt-6 flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                children: links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: link.to,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `flex cursor-pointer items-center px-4 py-2 text-primaries-100 rounded-md ${path === link.to ? "bg-primaries-800" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-medium",
                                                    children: link.text
                                                })
                                            })
                                        })
                                    }, link.id.toString())
                                )
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "border-2 border-primaries-500 text-primaries-100 px-4 py-2 w-full text-center rounded-xl",
                        onClick: handleLogout,
                        children: "Logout"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full p-4 overflow-y-auto h-screen",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);


/***/ }),

/***/ 65:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7031);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_ContentLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8575);





const privateAdminRoute = (Component)=>{
    const Auth = (props)=>{
        const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
        if (!(user === null || user === void 0 ? void 0 : user.id) || (user === null || user === void 0 ? void 0 : user.type) !== 'admin') {
            router.push('/admin');
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_ContentLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...props
        });
    };
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }
    return Auth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (privateAdminRoute);


/***/ })

};
;