import "./css/Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

function Home(props) {
  const navigate = useNavigate();

  if (!localStorage.getItem("jwt-token")) {
    window.location.href = "/dang_nhap";
  }

  const onNavigate = (url) => {
    navigate(url);
  };

  return (
    <>
      <Header />
      <section className="container Home-container">
        <div
          className="Card button-green"
          onClick={() => onNavigate("/quan_ly")}
        >
          <h3>Quản lý</h3>
        </div>
        <div
          className="Card button-blue"
          onClick={() => onNavigate("/nguoi_dung")}
        >
          <h3>Người Dùng</h3>
        </div>
        <div className="Card button-red" onClick={() => onNavigate("/bao_cao")}>
          <h3>Báo Cáo</h3>
        </div>
      </section>
    </>
  );
}

export default Home;
