import React, { useContext, useReducer, useRef, useState } from "react";
import { toast } from "react-toastify";
import { registerEvent } from "../action/registeration";
import { bookSlot, getSlots } from "../action/slots";
import AppContext from "../context/AppContext";
import { displayDate, displayFormat } from "../utils/displayTime";
import seperateLine from "../utils/seperateLines";
import EventModal from "./EventModal";
import cartReducer from "../reducers/cartReducer";
import { cartEvent } from "../reducers/cartReducer";
import { addToCart } from "../action/cart";
import { useCartContext } from "../context/CartContext.js";

function EventCard(props) {
  const modalRef = useRef();
  const { contEvents, user, dispatchEvents } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const description = seperateLine(props.description);
  const rules = seperateLine(props.rules ? props.rules : "");
  const rounds = seperateLine(props.rounds ? props.rounds : "");
  const teams = seperateLine(props.teams ? props.teams : "");
  const notes = seperateLine(props.notes ? props.notes : "");
  const isLoggedIn = !!user?.id;
  console.log("isLoggedin", isLoggedIn);
  const [slots, setSlots] = useState([]);
  const alreadyRegistered = isLoggedIn
    ? !!contEvents.find((item) => item.id === props.id)?.id
      ? true
      : false
    : false;
  const registeredEvent = alreadyRegistered
    ? contEvents.find((item) => item.id === props.id)
    : undefined;
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

  const { addToCart } = useCartContext();

  const fetchSlots = async () => {
    try {
      setLoading(true);
      const data = await getSlots(props.id);
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      }
      if (data?.slots?.length > 0) {
        setSlots(data?.slots);
      } else {
        toast.error("Slot booking isn't active for this event!");
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  const handleBook = async (slot_id) => {
    try {
      setLoading(true);
      const data = await bookSlot(props.id, slot_id, dispatchEvents);
      if (data?.error) {
        toast.error(data.error);
      } else {
        setSlots([]);
        toast.success("Slot Booked");
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center py-5 card bg-primaries-800">
      <div className="imgBox">
        <img src={props.logo} alt={props.name} />{" "}
      </div>

      <div className="mt-8 contentBox">
        <h2 className="event_title">{props.name}</h2>
        <h3 className="mt-2 text-center event_tagline">{props.tagline}</h3>
        {registeredEvent?.fk_slot && (
          <h3 className="mt-2 text-center event_tagline">
            {displayDate(registeredEvent.start_time)}{" "}
            {displayFormat(registeredEvent.start_time)} -{" "}
            {displayFormat(registeredEvent.end_time)}
          </h3>
        )}
        <button
          className="my-4 buy"
          onClick={() => modalRef?.current?.toggle()}
        >
          View
        </button>
      </div>

      {/* <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
              <div class="relative">
                <img
                  src={props.logo}
                  alt={props.name}
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div class="w-full text-center mt-20">
              <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span class="text-sm text-slate-400">Photos</span>
                </div>
                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span class="text-sm text-slate-400">Followers</span>
                </div>

                <div class="p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span class="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
              Mike Thompson
            </h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Paris, France
            </div>
          </div>
          <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
                <p class="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <a
                  href="javascript:;"
                  class="font-normal text-slate-700 hover:text-slate-400"
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <EventModal
        title={props.name}
        // title="Electroquest"
        play={props.play}
        description={description}
        rules={rules}
        rounds={rounds}
        teams={teams}
        notes={notes}
        ref={modalRef}
        isLoggedIn={isLoggedIn}
        alreadyRegistered={alreadyRegistered}
        mode={props.mode}
        id={props.id}
        loading={loading}
        link={props.link}
        price={props.price}
        fetchSlots={fetchSlots}
        slots={slots}
        handleBook={handleBook}
        registeredEvent={registeredEvent}
        setSlots={setSlots}
      />
    </div>
  );
}

export default EventCard;
