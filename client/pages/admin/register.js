import React, { useContext, useState } from "react";
import Head from "next/head";
import { toast } from "react-toastify";
import privateAdminRoute from "../../routes/privateAdminRoute";
import AdminLayout from "../../Components/AdminLayout";
import { registerEvent } from "../../action/registeration";

const Register = () => {
  const [transactionId, setTransactionId] = useState("");
  const [eventId, setEventId] = useState("");

  function onchange(e) {
    if (e.target.id === "transaction_id") {
      setTransactionId(e.target.value);
    }
    if (e.target.id === "event_id") {
      setEventId(e.target.value);
    }
  }

  async function submitEvent(e) {
    e.preventDefault();
    try {
      const data = await registerEvent(transactionId, eventId);
      console.log("line no.25", data);
      if (data.length>0) {
        toast.success("Registered Successfully");
      }
      if (data.status === 202) {
        toast.error("Event Already Registered");
      }
    } catch (e) {
      toast.error("Event Registered");
    }
  }

  return (
    <AdminLayout>
      <Head>
        <title>Pulzion'23 | Admin</title>
      </Head>
      <div>
        <form>
          <div className="flex flex-col gap-4">
            <label htmlFor="event_id" className="text-white">
              Transaction Id
            </label>
            <input
              id="transaction_id"
              type={"String"}
              placeholder={"Transaction Id"}
              className="w-[150px] sm:w-[55%] border-2 rounded-lg placeholder:px-4 placeholder:py-2"
              onChange={onchange}
              required={true}
            />

            <label htmlFor="event_id" className="text-white">
              Event Id
            </label>
            <input
              id="event_id"
              type={"number"}
              placeholder={"Event Id"}
              className="w-[150px] sm:w-[55%] border-2 rounded-lg placeholder:px-4 placeholder:py-2"
              onChange={onchange}
              required={true}
            />

            <br></br>
            <button
              onClick={async (e) => {
                await submitEvent(e);
              }}
              className="float-right px-4 py-2 w-[55%] text-center border-2 border-primaries-500 text-primaries-100 rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default privateAdminRoute(Register);
