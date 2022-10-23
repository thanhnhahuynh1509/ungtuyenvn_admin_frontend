import axios from "axios";
import { API_URL, getConfig } from "./common-api";

const QUAN_LY = "/api/quan_ly";

export const layTatCaQuanLy = async () => {
  const response = await axios.get(API_URL + QUAN_LY, getConfig());
  return response.data;
};

export const capNhatQuanLy = async (data) => {
  const response = await axios.put(
    API_URL + QUAN_LY + "/" + data.id,
    data,
    getConfig()
  );
  return response.data;
};

export const layQuanLy = async (token) => {
  const response = await axios.post(
    API_URL + QUAN_LY + "/get_by_token",
    token,
    getConfig()
  );
  return response.data;
};

export const luuQuanLy = async (data) => {
  const response = await axios.post(API_URL + QUAN_LY, data, getConfig());
  return response.data;
};

export const xoaQuanLy = async (id) => {
  const response = await axios.delete(
    API_URL + QUAN_LY + "/" + id,
    getConfig()
  );
  return response.data;
};
