import axios from "axios";
import { API_URL } from "./common-api";

const DANG_NHAP = "/dang_nhap";
const DANG_KY = "/dang_ky";

export const dangKy = async (data) => {
  const response = await axios.post(API_URL + DANG_KY, data);
  return response.data;
};

export const dangNhap = async (data) => {
  const response = await axios.post(API_URL + DANG_NHAP, data);
  return response.data;
};
