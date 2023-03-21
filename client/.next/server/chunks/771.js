"use strict";
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 4771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ paymentForm),
/* harmony export */   "s": () => (/* binding */ getPaymentDetails)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);


const paymentForm = async (props)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    const carts = JSON.parse(localStorage.getItem("CartItem"));
    let cart_item_id = [];
    carts.map((cart)=>{
        cart_item_id.push(cart.id);
    });
    const options = {
        method: "POST",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/payment_form/`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${pulzion.token}`
        },
        data: {
            event_id: cart_item_id,
            transaction_id: props
        }
    };
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
        return res;
    } catch (e) {
        console.log("Line 30", e);
    }
};
const getPaymentDetails = async ()=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/admin/paymentForm`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            console.log(res.data.verify);
            return res.data.verify;
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