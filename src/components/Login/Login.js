import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";
import { layQuanLyVaCapNhatToken } from "./../../api/common-api";
import { dangNhap } from "../../api/tai-khoan-api";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await dangNhap({ email: email, matKhau: password });
      localStorage.setItem("jwt-token", token);
      const quanLy = await layQuanLyVaCapNhatToken(token);
      localStorage.setItem("ma-quan-ly", quanLy.id);
      navigate("/", { replace: true });
      window.location.reload();
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <>
      <div className="Login">
        <div className="Login-contain-form">
          <div className="Login-logo">
            <h2>UngTuyen Admin</h2>
          </div>

          <form action="" onSubmit={handleSubmit} className="Login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                placeholder=""
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button button-primary Login-button">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
