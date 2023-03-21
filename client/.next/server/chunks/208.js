"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 6813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sP": () => (/* binding */ getAdminSlots),
/* harmony export */   "Fq": () => (/* binding */ addSlots),
/* harmony export */   "NO": () => (/* binding */ deleteSlot),
/* harmony export */   "FJ": () => (/* binding */ getSlots),
/* harmony export */   "pT": () => (/* binding */ bookSlot)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);


const getAdminSlots = async (event_id)=>{
    const options = {
        method: "GET",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/slots?event_id=${event_id}`
    };
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
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
};
const addSlots = async (values, event_id)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === 'admin') {
        const options = {
            method: "POST",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/slots`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            },
            data: {
                ...values,
                capacity: parseInt(values.capacity),
                fk_event: event_id
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
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
const deleteSlot = async (id)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === 'admin') {
        const options = {
            method: "DELETE",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/slots?slot_id=${id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
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
const getSlots = async (event_id)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === 'user') {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/user_slots?event_id=${event_id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
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
const bookSlot = async (event_id, slot_id, dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === 'user') {
        const options = {
            method: "POST",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/user_slots`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            },
            data: {
                event_id,
                slot_id
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            const data = res.data;
            dispatchEvents({
                type: "UPDATE_EVENT",
                id: data === null || data === void 0 ? void 0 : data.id,
                updates: {
                    fk_slot: data === null || data === void 0 ? void 0 : data.fk_slot,
                    start_time: data === null || data === void 0 ? void 0 : data.start_time,
                    end_time: data === null || data === void 0 ? void 0 : data.end_time
                }
            });
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


/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Po": () => (/* binding */ displayDate),
/* harmony export */   "Jn": () => (/* binding */ displayFormat),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8362);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);

const displayTime = (data)=>{
    const date = new Date(data);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return date.toLocaleString('en-GB', {
        timeZone: 'Etc/UTC'
    });
};
const displayDate = (data)=>{
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(data).tz("Etc/UTC").format('DD MMMM');
};
const displayFormat = (data)=>{
    return moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(data).tz("Etc/UTC").format('HH:mm');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTime);


/***/ }),

/***/ 9534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const seperateLine = (data)=>{
    return data.split('\n');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seperateLine);


/***/ })

};
;