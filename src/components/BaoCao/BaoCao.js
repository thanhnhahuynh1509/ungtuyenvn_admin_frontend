import { useEffect, useState } from "react";
import { renderHtml } from "../../utils/text-render";
import ModalAddQuanLy from "../QuanLy/ModalAddQuanLy";
import "./css/BaoCao.css";
import Header from "./../Header/Header";
import { layTatCaBaoCao } from "./../../api/bao-cao-api";

function BaoCao(props) {
  const [modalPlace, setModalPlace] = useState(<></>);
  const [tatCaBaoCao, setTatCaBaoCao] = useState([]);

  if (!localStorage.getItem("jwt-token")) {
    window.location.href = "/dang_nhap";
  }

  useEffect(() => {
    const init = async () => {
      setTatCaBaoCao(await layTatCaBaoCao());
    };

    init();
  }, []);

  const openModal = () => {
    setModalPlace(<></>);
  };

  return (
    <>
      <Header />
      <section className="BaoCao">
        <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
          Tất cả báo cáo
        </h2>
        <div className="container BaoCao-container">
          <div className="BaoCao-content">
            {tatCaBaoCao.map((m) => {
              return (
                <div className="BaoCao-card" key={m.id}>
                  <h4>{m.tieuDe}</h4>
                  <p style={{ fontSize: "14px", color: "#333" }}>
                    {m.ngayBaoCao}
                  </p>
                  <p style={{ fontSize: "14px", color: "#333" }}>
                    Mã người dùng: {m.nguoiDung.id}
                  </p>
                  <p
                    style={{ margin: "10px 0px" }}
                    dangerouslySetInnerHTML={renderHtml(m.noiDung)}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {modalPlace}
    </>
  );
}

export default BaoCao;
