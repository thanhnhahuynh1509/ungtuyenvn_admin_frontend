import { layQuanLy } from "./quan-ly-api";

export const API_URL = "//localhost:8081";

export const getConfig = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
    },
  };
  return config;
};

export const layQuanLyVaCapNhatToken = async (token) => {
  const quanLy = await layQuanLy(token);
  localStorage.setItem("quanLy", JSON.stringify(quanLy));
  return quanLy;
};
