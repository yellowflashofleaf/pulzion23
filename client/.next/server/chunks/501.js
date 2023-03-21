"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SectionHeading = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `uppercase text-center text-3xl sm:text-4xl md:text-5xl font-black text-sky-400 aerospace_font`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeading);


/***/ }),

/***/ 501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);

// import Head from 'next/head';
// import Layout from '../Components/Layout'
// import Sponsors from '../Components/Sponsors'
// import Test from '../Components/Test'


const sponsors = [
    {
        id: '1',
        logo: "https://pulzion22.s3.ap-south-1.amazonaws.com/sponsors/languify-logo.png",
        designation: "Educational Partner"
    },
    {
        id: '2',
        logo: "https://pulzion22.s3.ap-south-1.amazonaws.com/sponsors/GDG+Pune+-+White.png",
        designation: "Community Partner"
    },
    {
        id: '3',
        logo: "https://pulzion22.s3.ap-south-1.amazonaws.com/sponsors/TruScholar+-+Light.png",
        designation: "Credentials Partner"
    },
    {
        id: '4',
        logo: "https://pulzion22.s3.ap-south-1.amazonaws.com/sponsors/Taste_of_Mahabaleshwar-removebg-preview.png",
        designation: "Food Partner"
    }, 
];
const Sponsors = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-4 sm:px-8 md:px-12 lg:px-16 py-5 md:py-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:mb-10 mb-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionHeading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: "Our Sponsors"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap justify-center gap-x-5 gap-y-8 items-emd mb-16",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center gap-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://pulzion22.s3.ap-south-1.amazonaws.com/sponsors/nirmitee-1-white.png",
                            alt: "sponsor",
                            width: "700px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-2xl text-primaries-100 underline font-bold text-center",
                            children: "Title Sponsors"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap justify-center gap-x-5 gap-y-8 items-emd mb-16",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center gap-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://pulzion22.s3.ap-south-1.amazonaws.com/sponsors/Jamboree.png",
                            alt: "sponsor",
                            className: "w-96"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-2xl text-primaries-100 underline font-bold text-center",
                            children: "Event Sponsor (Dextrous)"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap justify-center gap-x-16 gap-y-20 items-end",
                children: sponsors.map((sponsor)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center text-center gap-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: sponsor.logo,
                                alt: "sponsor",
                                className: "w-96"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl text-primaries-100 underline font-bold",
                                children: sponsor.designation
                            })
                        ]
                    }, sponsor.id)
                )
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sponsors);


/***/ })

};
;