import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
} from "react";
import { event_modal_desc, modal_gradient_class } from "../styles/event_modal.module.css";
import { useRouter } from "next/router";
import ToolTipButton from "./Button/ToolTipButton";
import { IoGlobeSharp } from "react-icons/io5";
import EventAccordian from "./EventAccordian";
import ContentLoader from "./ContentLoader";
import SlotCard from "./SlotCard";
import { addItem } from "../action/cart";
import { toast } from "react-toastify";

const EventModal = forwardRef(
  (
    {
      id,
      title,
      description,
      rules,
      rounds,
      teams,
      notes,
      isLoggedIn,
      alreadyRegistered,
      loading,
      mode,
      play,
      link,
      fetchSlots,
      slots,
      handleBook,
      registeredEvent,
      setSlots,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const handleAddToCart = async () => {
      try {
        const data = await addItem(id)
        if(data?.error) {
          toast.error(data.error)
          return
        }
        toast.success("Event added to cart")
      }catch(e) {
        console.log(e)
        toast.error("Something went wrong")
      }
    }
    useImperativeHandle(
      ref,
      () => {
        return {
          toggle: () => {
            setIsVisible(!isVisible);
          },
        };
      },
      []
    );

    const tabs = [
      {
        id: 1,
        text: "Rounds",
        content: rounds,
      },
      {
        id: 2,
        text: "Rules and Regulations",
        content: rules,
      },
      {
        id: 3,
        text: "Team Distribution",
        content: teams,
      },
      {
        id: 4,
        text: "Event Leads",
        content: notes,
      },
    ];

    const [active, setActive] = useState(-1);

    return (
      <div
        style={{
          zIndex: "99",
          pointerEvents: "none",
          display: isVisible ? "block" : "none",
        }}
        className="fixed top-0 left-0 w-screen min-h-screen backdrop-blur"
      >
        <div
          className="fixed w-11/12 max-w-xl text-white rounded-3xl shadow-[0px_0px_15px_5px] shadow-sky-700"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "all",
            height: "90vh",
            // backgroundImage : `${modal_gradient_class},url("Modal_BG.jpeg")`,

            // backgroundImage : 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 19%,hsla(0, 0%, 0%, 0.009) 20.7%,hsla(0, 0%, 0%, 0.034) 27.1%,hsla(0, 0%, 0%, 0.072) 40.2%,hsla(0, 0%, 0%, 0.123) 48.4%,hsla(0, 0%, 0%, 0.182) 55.6%,hsla(0, 0%, 0%, 0.249) 60.1%,hsla(0, 0%, 0%, 0.320) 65.9%,hsla(0, 0%, 0%, 0.394) 75.3%,hsla(0, 0%, 0%, 0.468) 80.3%,hsla(0, 0%, 0%, 0.540) 85.1%,hsla(0, 0%, 0%, 0.607) 90.8%,hsla(0, 0%, 0%, 0.668) 95.6%,hsla(0, 0%, 0%, 0.721) 97.7%,hsla(0, 0%, 0%, 0.762) 99.1%,hsla(0, 0%, 0%, 0.790) 100%), url("Modal_BG.jpeg")',

            backgroundImage : 'url("Modal_BG.jpeg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundColor : "linear-gradient(to bottom,hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.009) 11.7%,hsla(0, 0%, 0%, 0.034) 22.1%,hsla(0, 0%, 0%, 0.072) 31.2%,hsla(0, 0%, 0%, 0.123) 39.4%,hsla(0, 0%, 0%, 0.182) 46.6%,hsla(0, 0%, 0%, 0.249) 53.1%,hsla(0, 0%, 0%, 0.320) 58.9%,hsla(0, 0%, 0%, 0.394) 64.3%,hsla(0, 0%, 0%, 0.468) 69.3%,hsla(0, 0%, 0%, 0.540) 74.1%,hsla(0, 0%, 0%, 0.607) 78.8%,hsla(0, 0%, 0%, 0.668) 83.6%,hsla(0, 0%, 0%, 0.721) 88.7%,hsla(0, 0%, 0%, 0.762) 94.1%,hsla(0, 0%, 0%, 0.790) 100%)"
            // backgroundColor : "whitesmoke"
          }}
        >
          {loading && <ContentLoader />}
          <div
            className="flex flex-row items-center justify-between w-full px-5 py-6 shadow-lg md:px-8 event_modal_title rounded-t-3xl bg-black/[.6]"
            style={{
              height: "15%",
            }}
          >
            <div className="flex flex-col">
              <p className="text-xl font-bold md:text-3xl">{title}</p>
              <div className="flex items-center gap-2 test-base md:text-lg">
                <span className="text-green-500">
                  <IoGlobeSharp />{" "}
                </span>
                <p>
                  {mode}
                  {mode === "Blended"
                    ? " (Round 1: Online Round 2: Offline)"
                    : ""}
                </p>
              </div>
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                setSlots([]);
                setIsVisible(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          {slots?.length > 0 ? (
            <div
              className={`${event_modal_desc} overflow-y-auto text-justify px-4 md:px-8 py-5`}
              style={{ height: "70%" }}
            >
              <p className="mb-5 text-3xl font-bold text-white">
                Available Slots:
              </p>
              {slots.map((slot) => (
                <SlotCard key={slot.id} slot={slot} handleBook={handleBook} />
              ))}
            </div>
          ) : (
            <div
              className={`${event_modal_desc} overflow-y-auto text-justify px-4 md:px-8 py-5 bg-black/[.4]`}
              style={{ height: "70%" }}
            >
              <div className="mb-5">
                {description.map((txt) => (
                  <p
                    className="text-lg font-normal text-left text-primaries-100 font"
                    key={txt}
                  >
                    {txt}
                  </p>
                ))}
              </div>
              <div className="border-collapse">
                {tabs.map((tab) => (
                  <EventAccordian
                    key={tab.id}
                    title={tab.text}
                    activeIndex={active}
                    setActiveIndex={setActive}
                    index={tab.id}
                  >
                    {tab.content.map((txt) => (
                      <p
                        className="text-lg font-normal text-primaries-100 font"
                        key={txt}
                      >
                        {txt}
                      </p>
                    ))}
                  </EventAccordian>
                ))}
              </div>
            </div>
          )}
          <div
            className="flex items-center justify-center py-5 shadow-lg rounded-b-3xl bg-black/[.7]"
            style={{
              height: "15%",
            }}
          >
            {!isLoggedIn ? (
              <button
                className="px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500 font-bold"
                onClick={() => {
                  setIsVisible(false);
                  router.push("/register/");
                }}
              >
                Login/SignUp to Register
              </button>
            ) : !alreadyRegistered && (
              <ToolTipButton text="Add to Cart" handleConfirm={handleAddToCart} />
            )}
            {/* {!alreadyRegistered && (
              <ToolTipButton
                text="Add to Cart"
                handleConfirm={handleAddToCart}
              />
            )} */}
            {
              isLoggedIn && alreadyRegistered && (
              // alreadyRegistered && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {!registeredEvent?.fk_slot && (
                    <button
                      className="px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500"
                      onClick={
                        slots?.length > 0 ? () => setSlots([]) : fetchSlots
                      }
                    >
                      {slots?.length > 0 ? "Cancel" : "Book Slot"}
                    </button>
                  )}
                  {play && (
                    <a
                      className="px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500"
                      href={link}
                      target="_blank"
                    >
                      Play
                    </a>
                  )}
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
);

export default EventModal;
