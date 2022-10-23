import axios from "axios";
import { API_URL, getConfig } from "./common-api";

const NGUOI_DUNG = "/api/nguoi_dung";

export const layTatCaNguoiDung = async () => {
  const response = await axios.get(API_URL + NGUOI_DUNG, getConfig());
  return response.data;
};

export const capNhatNguoiDung = async (data) => {
  const response = await axios.put(
    API_URL + NGUOI_DUNG + "/" + data.id,
    data,
    getConfig()
  );
  return response.data;
};

export const capNhatEnabledNguoiDung = async (id, data) => {
  const response = await axios.put(
    API_URL + NGUOI_DUNG + "/" + id + "/update_enabled",
    data,
    getConfig()
  );
  return response.data;
};

export const layNguoiDung = async (id) => {
  const response = await axios.get(
    API_URL + NGUOI_DUNG + "/" + id,
    getConfig()
  );
  return response.data;
};

export const xoaNguoiDung = async (id) => {
  const response = await axios.delete(
    API_URL + NGUOI_DUNG + "/" + id,
    getConfig()
  );
  return response.data;
};
