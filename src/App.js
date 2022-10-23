import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import QuanLy from "./components/QuanLy/QuanLy";
import NguoiDung from "./components/NguoiDung/NguoiDung";
import BaoCao from "./components/BaoCao/BaoCao";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang_nhap" element={<Login />} />
        <Route path="/quan_ly" element={<QuanLy />} />
        <Route path="/nguoi_dung" element={<NguoiDung />} />
        <Route path="/bao_cao" element={<BaoCao />} />
      </Routes>
    </>
  );
}

export default App;
