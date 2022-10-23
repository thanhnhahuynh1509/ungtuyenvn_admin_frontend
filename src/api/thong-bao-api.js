import axios from "axios";
import { API_URL, getConfig } from "./common-api";

const THONG_BAO = "/api/thong_bao";

export const luuThongBao = async (data) => {
  const response = await axios.post(API_URL + THONG_BAO, data, getConfig());
  return response.data;
};

export const layThongBaoTheoMaNguoiDung = async (maNguoiDung) => {
  const response = await axios.get(
    API_URL + THONG_BAO + "/nguoi_dung/" + maNguoiDung,
    getConfig()
  );
  return response.data;
};
