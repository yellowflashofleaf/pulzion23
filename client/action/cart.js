import axios from "axios";
import apiConfig from "../configs/api";
import { toast } from "react-toastify";

export const addItem = async (id, amount, event, logo, tagline, dispatch) => {
  console.log("in additem");
  // const { cart } = useCartContext();
  // console.log("cart", cart);
  // const found = cart.some((item) => item.id === id);
  // console.log("found", found);

  const pulzion = JSON.parse(localStorage.getItem("pulzion"));

  const data = id;
  const options = {
    method: "POST",
    url: `${apiConfig.url}/cart/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${pulzion.token}`,
    },
    data: { event_id: data },
  };
  try {
    const cart = JSON.parse(localStorage.getItem("CartItem"));
    console.log("line no. 27", Array.isArray(cart) ? cart : (cart = []));
    const found = cart.some((item) => item.id === id);

    // const res = await axios(options);
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { id, amount, event, logo, tagline },
      });

      toast.success("Item Added Successfully");
    } else {
      console.log("Exists");
      toast.error("Item Already Added");
    }
    //return res.event;
  } catch (e) {
    console.log(e);
    // if (e?.response) {
    //   return e?.response?.data;
    // }
    // return {
    //   error: "Something Went Wrong",
    // };
  }
};

export const deleteFromCart = async (id, dispatch) => {
  const pulzion = JSON.parse(localStorage.getItem("pulzion"));

  const options = {
    method: "DELETE",
    url: `${apiConfig.url}/cart/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${pulzion.token}`,
    },
  };
  try {
    // const res = await axios(options);
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
    //return res;
  } catch (e) {
    console.log(e);
    //   if (e?.response?.data) {
    //     return e.response.data;
    //   }
    //   return {
    //     error: "Something Went Wrong",
    //   };
  }
};

export const getEventFromCart = async () => {
  const pulzion = JSON.parse(localStorage.getItem("pulzion"));
  const options = {
    method: "GET",
    url: `${apiConfig.url}/cart/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${pulzion.token}`,
    },
  };
  try {
    const res = await axios(options);
    console.log("line no. 26", res.events);
    //return res.events;
  } catch (e) {
    console.log(e);
    // if (e?.response?.data) {
    //   return e.response.data;
    // }
    // return {
    //   error: "Something Went Wrong",
    // };
  }
};
