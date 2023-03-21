import axios from "axios";
import apiConfig from "../configs/api";

export const getRegestrations = async () => {
  const pulzion = JSON.parse(localStorage.getItem("pulzion"));
  if (pulzion?.type === "admin") {
    const options = {
      method: "GET",
      url: `${apiConfig.url}/dashboard/registeration`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pulzion.token}`,
      },
    };
    try {
      const res = await axios(options);
      console.log(res.data.registerations);
      return res.data.registerations;
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

export const getCount = async () => {
  const pulzion = JSON.parse(localStorage.getItem("pulzion"));
  if (pulzion?.type === "admin") {
    const options = {
      method: "GET",
      url: `${apiConfig.url}/dashboard/counts`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${pulzion.token}`,
      },
    };
    try {
      const res = await axios(options);
      console.log(res.data);
      return res.data;
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
