import axios from "axios";
import { API_URL, getConfig } from "./common-api";

const BAOCAO = "/api/bao_cao";

export const layTatCaBaoCao = async () => {
  const response = await axios.get(API_URL + BAOCAO, getConfig());
  return response.data;
};

export const layBaoCaoTheoMaNguoiDung = async (maNguoiDung) => {
  const response = await axios.get(
    API_URL + BAOCAO + "/nguoi_dung/" + maNguoiDung,
    getConfig()
  );
  return response.data;
};
