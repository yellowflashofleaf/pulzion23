import axios from "axios";
import apiConfig from "../configs/api";

export const paymentForm = async (props) => {
  const pulzion = JSON.parse(localStorage.getItem("pulzion"));
  const carts = JSON.parse(localStorage.getItem("CartItem"));
  let cart_item_id = [];
  carts.map((cart) => {
    cart_item_id.push(cart.id);
  });

  const options = {
    method: "POST",
    url: `${apiConfig.url}/payment_form/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${pulzion.token}`,
    },
    data: {
      event_id: cart_item_id,
      transaction_id: props,
    },
  };
  try {
    const res = await axios(options);
    return res;
  } catch (e) {
    console.log("Line 30", e);
  }
};

export const getPaymentDetails = async () => {
  const pulzion = JSON.parse(localStorage.getItem("pulzion"));
  if (pulzion?.type === "admin") {
    const options = {
      method: "GET",
      url: `${apiConfig.url}/admin/paymentForm`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pulzion.token}`,
      },
    };
    try {
      const res = await axios(options);
      console.log(res.data.verify);
      return res.data.verify;
    } catch (e) {
      console.log(e);
      if (e?.response?.data) {
        return e.response.data;
      }
      return {
        error: "Something Went Wrong",
      };
    }
  }
};
