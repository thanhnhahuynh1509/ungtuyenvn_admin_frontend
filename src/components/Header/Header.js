import "./css/Header.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  const onNavigateHome = () => {
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("quan-ly");
    onNavigateHome();
  };

  return (
    <>
      <header className="Header">
        <div className="container Header-container">
          <h2
            style={{ color: "var(--primary-color)", cursor: "pointer" }}
            onClick={onNavigateHome}
          >
            UngTuyen Admin
          </h2>
          <button className="button button-black" onClick={logout}>
            Đăng xuất
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
