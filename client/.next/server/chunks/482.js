"use strict";
exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 6807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T0": () => (/* binding */ adminAllEvents),
/* harmony export */   "yM": () => (/* binding */ createEvent),
/* harmony export */   "eJ": () => (/* binding */ updateEvent),
/* harmony export */   "Bt": () => (/* binding */ deleteEvent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);


const adminAllEvents = async (dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/events`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            dispatchEvents({
                type: "SET_EVENTS",
                events: res.data.events
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
const createEvent = async (values, dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "POST",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/admin_events`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            },
            data: {
                ...values,
                type: values.type.value,
                mode: values.mode.value
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            dispatchEvents({
                type: "ADD_EVENT",
                event: res.data.event
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
const updateEvent = async (id, values, dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "PUT",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/admin_events/${id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            },
            data: {
                ...values,
                type: values.type.value,
                mode: values.mode.value
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            dispatchEvents({
                type: "UPDATE_EVENT",
                id,
                updates: res.data.event
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
const deleteEvent = async (id, dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "DELETE",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/admin_events/${id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            dispatchEvents({
                type: "REMOVE_EVENT",
                id
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

/***/ 9670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IP": () => (/* binding */ getAllEvents),
/* harmony export */   "pS": () => (/* binding */ getRegisteredEvents),
/* harmony export */   "KS": () => (/* binding */ registerEvent)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);


const getAllEvents = async ()=>{
    const options = {
        method: "GET",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/events`
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
const getRegisteredEvents = async (dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if (pulzion.type === "user") {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/user_events`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            dispatchEvents({
                type: "SET_EVENTS",
                events: res.data.events
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
const registerEvent = async (transactionId, eventId)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    console.log("pulzion", eventId, transactionId);
    if ((pulzion === null || pulzion === void 0 ? void 0 : pulzion.type) === "admin") {
        const options = {
            method: "POST",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/admin/eventRegister`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            },
            data: {
                transaction_id: transactionId,
                event_id: eventId
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            console.log("data", res.data);
            return res.data;
        } catch (e) {
            console.log(e);
        // if (e?.response?.data) {
        //   return e.response.data;
        // }
        // return {
        //   error: "Something Went Wrong",
        // };
        }
    }
};


/***/ }),

/***/ 1067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N$": () => (/* binding */ userRegister),
/* harmony export */   "OA": () => (/* binding */ sendOTP),
/* harmony export */   "o9": () => (/* binding */ forgetPassword),
/* harmony export */   "n$": () => (/* binding */ userLogin),
/* harmony export */   "II": () => (/* binding */ loadUser),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4212);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6807);
/* harmony import */ var _registeration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9670);




const userRegister = async (values, dispatchUser)=>{
    const data = values;
    const options = {
        method: "POST",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/user/signup`,
        headers: {
            "Content-Type": "application/json"
        },
        data
    };
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
        localStorage.setItem("pulzion", JSON.stringify({
            token: res.data.token,
            type: "user"
        }));
        dispatchUser({
            type: "SET_USER",
            user: {
                ...res.data.user,
                type: "user"
            }
        });
        return res.data.user;
    } catch (e) {
        console.log(e);
        if (e === null || e === void 0 ? void 0 : e.response) {
            var ref;
            return e === null || e === void 0 ? void 0 : (ref = e.response) === null || ref === void 0 ? void 0 : ref.data;
        }
        return {
            error: "Something Went Wrong"
        };
    }
};
const sendOTP = async (email)=>{
    const options = {
        method: "POST",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/user/otp`,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            email
        }
    };
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
        return res.data;
    } catch (e) {
        console.log(e);
        if (e === null || e === void 0 ? void 0 : e.response) {
            var ref;
            return e === null || e === void 0 ? void 0 : (ref = e.response) === null || ref === void 0 ? void 0 : ref.data;
        }
        return {
            error: "Something Went Wrong"
        };
    }
};
const forgetPassword = async (values)=>{
    const options = {
        method: "POST",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/user/forget`,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            ...values,
            otp: parseInt(values.otp)
        }
    };
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
        return res.data;
    } catch (e) {
        console.log(e);
        if (e === null || e === void 0 ? void 0 : e.response) {
            var ref;
            return e === null || e === void 0 ? void 0 : (ref = e.response) === null || ref === void 0 ? void 0 : ref.data;
        }
        return {
            error: "Something Went Wrong"
        };
    }
};
const userLogin = async (values, type, dispatchUser, dispatchEvents)=>{
    const options = {
        method: "POST",
        url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/${type}/signin`,
        headers: {
            "Content-Type": "application/json"
        },
        data: values
    };
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
        localStorage.setItem("pulzion", JSON.stringify({
            token: res.data.token,
            type
        }));
        dispatchUser({
            type: "SET_USER",
            user: {
                ...res.data[type],
                type
            }
        });
        if (type === "admin") {
            (0,_events__WEBPACK_IMPORTED_MODULE_2__/* .adminAllEvents */ .T0)(dispatchEvents);
        } else {
            (0,_registeration__WEBPACK_IMPORTED_MODULE_3__/* .getRegisteredEvents */ .pS)(dispatchEvents);
        }
        return res.data[type];
    } catch (e) {
        console.log(e);
        if (e === null || e === void 0 ? void 0 : e.response) {
            var ref;
            return e === null || e === void 0 ? void 0 : (ref = e.response) === null || ref === void 0 ? void 0 : ref.data;
        }
        return {
            error: "Something Went Wrong"
        };
    }
};
const loadUser = async (dispatchUser, dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if (pulzion) {
        const options = {
            method: "GET",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/${pulzion.type}/me`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            dispatchUser({
                type: "SET_USER",
                user: {
                    ...res.data[pulzion.type],
                    type: pulzion.type
                }
            });
            if (pulzion.type === "admin") {
                (0,_events__WEBPACK_IMPORTED_MODULE_2__/* .adminAllEvents */ .T0)(dispatchEvents);
            } else {
                (0,_registeration__WEBPACK_IMPORTED_MODULE_3__/* .getRegisteredEvents */ .pS)(dispatchEvents);
            }
            return {
                ...res.data[pulzion.type],
                type: pulzion.type
            };
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
const logout = async (dispatchUser, dispatchEvents)=>{
    const pulzion = JSON.parse(localStorage.getItem("pulzion"));
    if (pulzion) {
        const options = {
            method: "POST",
            url: `${_configs_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"].url */ .Z.url}/${pulzion.type}/signout`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${pulzion.token}`
            }
        };
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(options);
            localStorage.removeItem("pulzion");
            localStorage.removeItem("pulzionEvents");
            dispatchUser({
                type: "RESET_USER"
            });
            dispatchEvents({
                type: "RESET_EVENTS"
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

/***/ 4212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiConfig = {
    url: "https://api.pulzion.co.in"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiConfig);


/***/ }),

/***/ 7031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ })

};
;