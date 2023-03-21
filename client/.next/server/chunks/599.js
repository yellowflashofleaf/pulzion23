exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 4377:
/***/ ((module) => {

// Exports
module.exports = {
	"event_modal_desc": "event_modal_event_modal_desc__mqQRS",
	"modal_gradient_class": "event_modal_modal_gradient_class__CWVOO"
};


/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_Tabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./Components/Button/PrimaryButton.js
var PrimaryButton = __webpack_require__(5259);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./action/registeration.js
var registeration = __webpack_require__(9670);
// EXTERNAL MODULE: ./action/slots.js
var action_slots = __webpack_require__(6813);
// EXTERNAL MODULE: ./context/AppContext.js
var AppContext = __webpack_require__(7031);
// EXTERNAL MODULE: ./utils/displayTime.js
var displayTime = __webpack_require__(4590);
// EXTERNAL MODULE: ./utils/seperateLines.js
var seperateLines = __webpack_require__(9534);
// EXTERNAL MODULE: ./styles/event_modal.module.css
var event_modal_module = __webpack_require__(4377);
;// CONCATENATED MODULE: ./Components/ConfirmationTooltip.js



const ConfirmationTooltip = ({ children , handleConfirm , handleCancel , visible  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: tooltip,
        children: [
            children,
            /*#__PURE__*/ _jsxs("div", {
                className: `${`${tooltiptext} ${visible ? 'visible opacity-100' : 'hidden opacity-0'}`} flex flex-col gap-2 items-center`,
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        className: "text-primaries-100 font-bold text-base text-center",
                        children: "Are You Sure?"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ _jsx("button", {
                                className: "bg-primaries-500 text-primaries-100 px-3 py-1 rounded-xl",
                                onClick: handleConfirm,
                                children: "Yes"
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                className: "border-primaries-500 border-2 text-primaries-100 px-3 py-1 rounded-xl",
                                onClick: handleCancel,
                                children: "No"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Components_ConfirmationTooltip = ((/* unused pure expression or super */ null && (ConfirmationTooltip)));

;// CONCATENATED MODULE: ./Components/Button/ToolTipButton.js



const ToolTipButton = ({ handleConfirm , text  })=>{
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(false);
    return(// <ConfirmationTooltip
    //   handleConfirm={handleConfirm}
    //   handleCancel={() => setVisible(false)}
    //   visible={visible}
    // >
    /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500",
        onClick: handleConfirm,
        children: text
    }));
};
/* harmony default export */ const Button_ToolTipButton = (ToolTipButton);

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./Components/EventAccordian.js



const EventAccordian = ({ title , children , index: index1 , activeIndex , setActiveIndex  })=>{
    const handleSetIndex = (index)=>activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1)
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full mb-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "flex items-center gap-4 w-full text-primaries-100 text-xl font-bold hover:text-blue-500",
                onClick: ()=>handleSetIndex(index1)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoChevronDown, {
                            className: `${activeIndex === index1 ? "rotate-180" : ""} ease-in-out duration-300`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex iems-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-bold",
                            children: title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `py-2 pl-4 text-left text-sm ease-in-out duration-300 ${activeIndex === index1 ? "block" : "hidden"}`,
                children: children
            })
        ]
    });
};
/* harmony default export */ const Components_EventAccordian = (EventAccordian);

// EXTERNAL MODULE: ./Components/ContentLoader.js + 1 modules
var ContentLoader = __webpack_require__(8575);
;// CONCATENATED MODULE: ./Components/SlotCard.js





const SlotCard = ({ slot , handleBook  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-4 py-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-2 justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-white text-xl tracking-wide font-bold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoCalendarSharp, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: (0,displayTime/* displayDate */.Po)(slot.start_time)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-white text-xl tracking-wide font-bold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoAlarmSharp, {}),
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            (0,displayTime/* displayFormat */.Jn)(slot.start_time),
                                            " - ",
                                            (0,displayTime/* displayFormat */.Jn)(slot.end_time)
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-2 justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-white text-xl tracking-wide font-bold",
                                children: [
                                    "capacity: ",
                                    slot.capacity
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button_ToolTipButton, {
                                text: "Book Now",
                                handleConfirm: ()=>handleBook(slot.id)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-px bg-white opacity-10"
            })
        ]
    });
};
/* harmony default export */ const Components_SlotCard = (SlotCard);

;// CONCATENATED MODULE: ./Components/EventModal.js









const EventModal = /*#__PURE__*/ (0,external_react_.forwardRef)(({ title , description , rules , rounds , teams , notes , isLoggedIn , alreadyRegistered , handleAddToCart , loading , mode , play , link , fetchSlots , slots , handleBook , registeredEvent , setSlots ,  }, ref)=>{
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    (0,external_react_.useImperativeHandle)(ref, ()=>{
        return {
            toggle: ()=>{
                setIsVisible(!isVisible);
            }
        };
    }, []);
    const tabs = [
        {
            id: 1,
            text: "Rounds",
            content: rounds
        },
        {
            id: 2,
            text: "Rules and Regulations",
            content: rules
        },
        {
            id: 3,
            text: "Team Distribution",
            content: teams
        },
        {
            id: 4,
            text: "Event Leads",
            content: notes
        }, 
    ];
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(-1);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            zIndex: "99",
            pointerEvents: "none",
            display: isVisible ? "block" : "none"
        },
        className: "fixed top-0 left-0 w-screen min-h-screen backdrop-blur",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "fixed w-11/12 max-w-xl text-white rounded-3xl shadow-[0px_0px_15px_5px] shadow-sky-700",
            style: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                pointerEvents: "all",
                height: "90vh",
                // backgroundImage : `${modal_gradient_class},url("Modal_BG.jpeg")`,
                // backgroundImage : 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 19%,hsla(0, 0%, 0%, 0.009) 20.7%,hsla(0, 0%, 0%, 0.034) 27.1%,hsla(0, 0%, 0%, 0.072) 40.2%,hsla(0, 0%, 0%, 0.123) 48.4%,hsla(0, 0%, 0%, 0.182) 55.6%,hsla(0, 0%, 0%, 0.249) 60.1%,hsla(0, 0%, 0%, 0.320) 65.9%,hsla(0, 0%, 0%, 0.394) 75.3%,hsla(0, 0%, 0%, 0.468) 80.3%,hsla(0, 0%, 0%, 0.540) 85.1%,hsla(0, 0%, 0%, 0.607) 90.8%,hsla(0, 0%, 0%, 0.668) 95.6%,hsla(0, 0%, 0%, 0.721) 97.7%,hsla(0, 0%, 0%, 0.762) 99.1%,hsla(0, 0%, 0%, 0.790) 100%), url("Modal_BG.jpeg")',
                backgroundImage: 'url("Modal_BG.jpeg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            },
            children: [
                loading && /*#__PURE__*/ jsx_runtime_.jsx(ContentLoader/* default */.Z, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row items-center justify-between w-full px-5 py-6 shadow-lg md:px-8 event_modal_title rounded-t-3xl bg-black/[.6]",
                    style: {
                        height: "15%"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl font-bold md:text-3xl",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2 test-base md:text-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-green-500",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoGlobeSharp, {}),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                mode,
                                                mode === "Blended" ? " (Round 1: Online Round 2: Offline)" : ""
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hover:cursor-pointer",
                            onClick: ()=>{
                                setSlots([]);
                                setIsVisible(false);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-8 w-8",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            })
                        })
                    ]
                }),
                (slots === null || slots === void 0 ? void 0 : slots.length) > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${event_modal_module.event_modal_desc} overflow-y-auto text-justify px-4 md:px-8 py-5`,
                    style: {
                        height: "70%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-5 text-3xl font-bold text-white",
                            children: "Available Slots:"
                        }),
                        slots.map((slot)=>/*#__PURE__*/ jsx_runtime_.jsx(Components_SlotCard, {
                                slot: slot,
                                handleBook: handleBook
                            }, slot.id)
                        )
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${event_modal_module.event_modal_desc} overflow-y-auto text-justify px-4 md:px-8 py-5 bg-black/[.4]`,
                    style: {
                        height: "70%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-5",
                            children: description.map((txt)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-lg font-normal text-left text-primaries-100 font",
                                    children: txt
                                }, txt)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "border-collapse",
                            children: tabs.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx(Components_EventAccordian, {
                                    title: tab.text,
                                    activeIndex: active,
                                    setActiveIndex: setActive,
                                    index: tab.id,
                                    children: tab.content.map((txt)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-lg font-normal text-primaries-100 font",
                                            children: txt
                                        }, txt)
                                    )
                                }, tab.id)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center py-5 shadow-lg rounded-b-3xl bg-black/[.7]",
                    style: {
                        height: "15%"
                    },
                    children: [
                        !isLoggedIn ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500 font-bold",
                            onClick: ()=>{
                                setIsVisible(false);
                                router.push("/register/");
                            },
                            children: "Login/SignUp to Register"
                        }) : !alreadyRegistered && /*#__PURE__*/ jsx_runtime_.jsx(Button_ToolTipButton, {
                            text: "Add to Cart",
                            handleConfirm: handleAddToCart
                        }),
                        isLoggedIn && alreadyRegistered && // alreadyRegistered && (
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-2",
                            children: [
                                !(registeredEvent === null || registeredEvent === void 0 ? void 0 : registeredEvent.fk_slot) && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500",
                                    onClick: (slots === null || slots === void 0 ? void 0 : slots.length) > 0 ? ()=>setSlots([])
                                     : fetchSlots,
                                    children: (slots === null || slots === void 0 ? void 0 : slots.length) > 0 ? "Cancel" : "Book Slot"
                                }),
                                play && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500",
                                    href: link,
                                    target: "_blank",
                                    children: "Play"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const Components_EventModal = (EventModal);

// EXTERNAL MODULE: ./action/cart.js
var cart = __webpack_require__(9227);
// EXTERNAL MODULE: ./context/CartContext.js + 1 modules
var CartContext = __webpack_require__(1812);
;// CONCATENATED MODULE: ./Components/EventCard.js













function EventCard(props) {
    var ref1;
    const modalRef = (0,external_react_.useRef)();
    const { contEvents , user , dispatchEvents  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const description = (0,seperateLines/* default */.Z)(props.description);
    const rules = (0,seperateLines/* default */.Z)(props.rules ? props.rules : "");
    const rounds = (0,seperateLines/* default */.Z)(props.rounds ? props.rounds : "");
    const teams = (0,seperateLines/* default */.Z)(props.teams ? props.teams : "");
    const notes = (0,seperateLines/* default */.Z)(props.notes ? props.notes : "");
    const isLoggedIn = !!(user === null || user === void 0 ? void 0 : user.id);
    console.log("isLoggedin", isLoggedIn);
    const { 0: slots , 1: setSlots  } = (0,external_react_.useState)([]);
    const alreadyRegistered = isLoggedIn ? !!((ref1 = contEvents.find((item)=>item.id === props.id
    )) === null || ref1 === void 0 ? void 0 : ref1.id) ? true : false : false;
    const registeredEvent = alreadyRegistered ? contEvents.find((item)=>item.id === props.id
    ) : undefined;
    // const handleRegister = async () => {
    //   if (user.type === "admin") {
    //     toast.error("You are logged in as admin");
    //     return;
    //   }
    //   try {
    //     setLoading(true);
    //     const data = await registerEvent(props.id, dispatchEvents);
    //     if (data?.error) {
    //       toast.error(data.error);
    //       setLoading(false);
    //       return;
    //     }
    //     toast.success("Registration Successful");
    //   } catch (e) {
    //     console.log(e);
    //     toast.error("Something Went Wrong");
    //   }
    //   setLoading(false);
    // };
    // function handleAddToCart() {
    //   if (user.type === "admin") {
    //     toast.error("You are logged in as admin");
    //     return;
    //   }
    // }
    const { addToCart: addToCart1  } = (0,CartContext/* useCartContext */.i)();
    const fetchSlots = async ()=>{
        try {
            var ref;
            setLoading(true);
            const data = await (0,action_slots/* getSlots */.FJ)(props.id);
            if (data === null || data === void 0 ? void 0 : data.error) {
                external_react_toastify_.toast.error(data.error);
                setLoading(false);
                return;
            }
            if ((data === null || data === void 0 ? void 0 : (ref = data.slots) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                setSlots(data === null || data === void 0 ? void 0 : data.slots);
            } else {
                external_react_toastify_.toast.error("Slot booking isn't active for this event!");
            }
        } catch (e) {
            console.log(e);
            external_react_toastify_.toast.error("Something went wrong");
        }
        setLoading(false);
    };
    const handleBook = async (slot_id)=>{
        try {
            setLoading(true);
            const data = await (0,action_slots/* bookSlot */.pT)(props.id, slot_id, dispatchEvents);
            if (data === null || data === void 0 ? void 0 : data.error) {
                external_react_toastify_.toast.error(data.error);
            } else {
                setSlots([]);
                external_react_toastify_.toast.success("Slot Booked");
            }
        } catch (e) {
            external_react_toastify_.toast.error("Something went wrong");
        }
        setLoading(false);
    };
    // console.log("line no. 98", props);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center py-5 card bg-primaries-800",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "imgBox",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.logo,
                        alt: props.name
                    }),
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8 contentBox",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "event_title",
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mt-2 text-center event_tagline",
                        children: props.tagline
                    }),
                    (registeredEvent === null || registeredEvent === void 0 ? void 0 : registeredEvent.fk_slot) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "mt-2 text-center event_tagline",
                        children: [
                            (0,displayTime/* displayDate */.Po)(registeredEvent.start_time),
                            " ",
                            (0,displayTime/* displayFormat */.Jn)(registeredEvent.start_time),
                            " -",
                            " ",
                            (0,displayTime/* displayFormat */.Jn)(registeredEvent.end_time)
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "my-4 buy",
                        onClick: ()=>{
                            var ref;
                            return modalRef === null || modalRef === void 0 ? void 0 : (ref = modalRef.current) === null || ref === void 0 ? void 0 : ref.toggle();
                        },
                        children: "View"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_EventModal, {
                title: props.name,
                // title="Electroquest"
                play: props.play,
                description: description,
                rules: rules,
                rounds: rounds,
                teams: teams,
                notes: notes,
                ref: modalRef,
                isLoggedIn: isLoggedIn,
                alreadyRegistered: alreadyRegistered,
                mode: props.mode,
                handleAddToCart: async ()=>await addToCart1(props.id, props.price, props, props.logo, props.tagline)
                ,
                loading: loading,
                link: props.link,
                fetchSlots: fetchSlots,
                slots: slots,
                handleBook: handleBook,
                registeredEvent: registeredEvent,
                setSlots: setSlots
            })
        ]
    });
}
/* harmony default export */ const Components_EventCard = (EventCard);

// EXTERNAL MODULE: ./public/astronaut.svg
var astronaut = __webpack_require__(18);
;// CONCATENATED MODULE: ./Components/Tabs.js






// import TrackVisibility from "react-on-screen";
// const events = [
//   {
//     name: "Just Coding",
//     logo: "/JustCoding.png",
//     type: "Technical",
//     tagline: "while( ! succeed == try() ){keepCoding();}",
//   },
//   {
//     name: "Bug Off",
//     logo: "/BugOff.png",
//     type: "Technical",
//     tagline: "Where there is a code, there is a bug!",
//   },
//   {
//     name: "Just Coding",
//     logo: "/JustCoding.png",
//     type: "Technical",
//     tagline: "while( ! succeed == try() ){keepCoding();}",
//   },
//   {
//     name: "Bug Off",
//     logo: "/BugOff.png",
//     type: "Non Technical",
//     tagline: "Where there is a code, there is a bug!",
//   },
//   {
//     name: "Just Coding",
//     logo: "/JustCoding.png",
//     type: "Non Technical",
//     tagline: "while( ! succeed == try() ){keepCoding();}",
//   },
//   {
//     name: "Bug Off",
//     logo: "/BugOff.png",
//     type: "Technical",
//     tagline: "Where there is a code, there is a bug!",
//   },
// ];
const Tabs = ({ events  })=>{
    console.log("IN TABS");
    console.log(events);
    const tabs = [
        "All",
        "Technical",
        "Non Technical"
    ];
    const router = (0,router_.useRouter)();
    const { 0: activeTab , 1: setActiveTab  } = (0,external_react_.useState)(0);
    const changeTabOnClick = (index)=>{
        setActiveTab(index);
    };
    let visible = events;
    if (activeTab == 0) {
        visible = events;
    } else if (activeTab == 1) {
        visible = visible.filter((event)=>event.type === "Technical"
        );
    } else {
        visible = visible.filter((event)=>event.type === "Non Technical"
        );
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "tabs-body",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TabHeader, {
                data: tabs,
                click: changeTabOnClick,
                tabs: tabs,
                activeId: activeTab
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TabContent, {
                data: visible,
                activeId: activeTab,
                router: router
            })
        ]
    });
};
// class Tabs extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       activeTab: 0,
//       data: this.props.events,
//     };
//     this.tabs = ["All", "Technical", "Non Technical"];
//     this.changeTabOnClick = this.changeTabOnClick.bind(this);
//   }
//   changeTabOnClick(index) {
//     let data = [];
//     if (index == 0) {
//       data = events;
//     } else if (index == 1) {
//       data = events.filter((event) => event.type === "Technical");
//     } else {
//       data = events.filter((event) => event.type === "Non Technical");
//     }
//     this.setState({
//       activeTab: index,
//       data: data,
//     });
//   }
//   render() {
//     return (
//       <div className="tabs-body">
//         <TabHeader
//           data={this.tabs}
//           click={this.changeTabOnClick}
//           tabs={this.tabs}
//           activeId={this.state.activeTab}
//         />
//         <TabContent data={this.state.data} activeId={this.state.activeTab} />
//       </div>
//     );
//   }
// }
class TabHeader extends (external_react_default()).Component {
    doClick(index, event) {
        this.props.click(index);
    }
    render() {
        let activeClass = this.props.activeId;
        let tabs = this.props.tabs.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${activeClass === index ? "active" : ""} md:w-1/3 md:mx-5`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: this.doClick.bind(this, index),
                    className: "bg-primaries-800",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xl",
                        children: item
                    })
                })
            });
        });
        return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "flex flex-col justify-center tabs-header md:flex-row",
            children: tabs
        });
    }
}
class TabContent extends (external_react_default()).Component {
    render() {
        var ref, ref1, ref2, ref3;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                ((ref = this.props) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.length) === 0 && ((ref2 = this.props.router) === null || ref2 === void 0 ? void 0 : ref2.pathname) === "/my_events" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center justify-center w-full gap-4 mt-10 md:mt-20 md:gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-3xl font-bold text-center md:text-5xl text-primaries-100",
                            children: "Registered Events will be visible after verification."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PrimaryButton/* default */.Z, {
                            onClick: ()=>this.props.router.push("/events")
                            ,
                            children: "Register Now"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid items-center justify-center grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10",
                    children: (ref3 = this.props.data) === null || ref3 === void 0 ? void 0 : ref3.map((event, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Components_EventCard, {
                            ...event
                        }, index)
                    )
                })
            ]
        });
    }
}
/* harmony default export */ const Components_Tabs = (Tabs);


/***/ })

};
;