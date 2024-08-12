import { json } from "react-router-dom";

export const fetchApi = async () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  try {
    const res = await fetch(url);
    if (res.status!=200) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
};


