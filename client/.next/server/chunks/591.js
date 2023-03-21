"use strict";
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 8591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ getRegestrations),
/* harmony export */   "s": () => (/* binding */ getCount)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);


const getRegestrations = async ()=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/dashboard/registeration`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            console.log(res.data.registerations);
            return res.data.registerations;
        } catch (e) {
            var ref;
            console.log(e);
            if (e === null || e === void 0 ? void 0 : (ref = e.response) === null || ref === void 0 ? void 0 : ref.data) {
                return e.response.data;
            }
            return {
                error: "Something Went Wrong"
            };
        }
    }
};
const getCount = async ()=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/dashboard/counts`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            console.log(res.data);
            return res.data;
        } catch (e) {
            var ref;
            console.log(e);
            if (e === null || e === void 0 ? void 0 : (ref = e.response) === null || ref === void 0 ? void 0 : ref.data) {
                return e.response.data;
            }
            return {
                error: "Something Went Wrong"
            };
        }
    }
};


/***/ })

};
;