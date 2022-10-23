import { useEffect, useState } from "react";
import ModalAddQuanLy from "../QuanLy/ModalAddQuanLy";
import "./css/NguoiDung.css";
import Header from "./../Header/Header";
import {
  capNhatEnabledNguoiDung,
  layTatCaNguoiDung,
} from "./../../api/nguoi-dung-api";
import { layBaoCaoTheoMaNguoiDung } from "../../api/bao-cao-api";
import Modal from "../Modal/Modal";
import { renderHtml } from "./../../utils/text-render";
import ModalBaoCao from "./ModalBaoCao";
import ModalConfirmDelete from "./ModalConfirmDelete";
import ModalThongBao from "./ModalThongBao";

function NguoiDung(props) {
  const [modalPlace, setModalPlace] = useState(<></>);
  const [tatCaNguoiDung, setTatCaNguoiDung] = useState([]);
  const [search, setSearch] = useState("");

  if (!localStorage.getItem("jwt-token")) {
    window.location.href = "/dang_nhap";
  }

  useEffect(() => {
    const init = async () => {
      setTatCaNguoiDung(await layTatCaNguoiDung());
    };

    init();
  }, []);

  const openModal = () => {
    setModalPlace(
      <ModalAddQuanLy isOpen={true} setModalPlace={setModalPlace} />
    );
  };

  const capNhatTatCaNguoiDung = (data) => {
    const danhSach = tatCaNguoiDung.map((m) => {
      if (data.id === m.id) return data;
      return m;
    });
    setTatCaNguoiDung([...danhSach]);
  };

  const removeNguoiDung = (id) => {
    const danhSach = tatCaNguoiDung.filter((m) => m.id !== id);
    setTatCaNguoiDung([...danhSach]);
  };

  const onDelete = (id) => {
    setModalPlace(
      <ModalConfirmDelete
        setModalPlace={setModalPlace}
        id={id}
        isOpen={true}
        removeNguoiDung={removeNguoiDung}
      />
    );
  };

  const onSearch = async () => {
    let danhSach = await layTatCaNguoiDung();
    if (search.length > 0) {
      danhSach = danhSach.filter((m) =>
        (m.id + " " + m.ten + " " + m.ho + " " + m.email + " ").includes(search)
      );
    }
    setTatCaNguoiDung([...danhSach]);
  };

  const openBaoCao = async (id) => {
    const danhSachBaoCao = await layBaoCaoTheoMaNguoiDung(id);
    setModalPlace(
      <ModalBaoCao
        danhSachBaoCao={danhSachBaoCao}
        setModalPlace={setModalPlace}
      />
    );
  };

  const openThongBao = async (id) => {
    setModalPlace(
      <ModalThongBao
        maNguoiDung={id}
        isOpen={true}
        setModalPlace={setModalPlace}
      />
    );
  };

  return (
    <>
      <Header />
      <section className="NguoiDung">
        <div className="container NguoiDung-container">
          <div className="NguoiDung-header">
            <div className="form-group">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="button button-black" onClick={onSearch}>
              Tìm kiếm
            </button>
          </div>
          <div className="NguoiDung-content">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã số</th>
                  <th>Họ Tên</th>
                  <th>Email</th>
                  <th>Trạng thái</th>
                  <th>Enabled</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tatCaNguoiDung.map((m) => {
                  return (
                    <tr key={m.id}>
                      <td className="text-align-center">{m.id}</td>
                      <td className="text-align-center">
                        {m.ho} {m.ten}
                      </td>
                      <td className="text-align-center">{m.email}</td>
                      <td className="text-align-center">{m.trangThai}</td>
                      <td className="text-align-center">
                        <input
                          type="checkbox"
                          defaultChecked={m.enabled}
                          onChange={async () => {
                            const data = { ...m, enabled: !m.enabled };
                            capNhatTatCaNguoiDung(
                              await capNhatEnabledNguoiDung(m.id, data)
                            );
                          }}
                        />
                      </td>
                      <td className="text-align-center">
                        <div className="contain-buttons">
                          <button
                            className="button button-black"
                            onClick={() => openBaoCao(m.id)}
                          >
                            <i className="fa-regular fa-flag"></i>
                          </button>

                          <button
                            className="button button-primary"
                            onClick={() => openThongBao(m.id)}
                          >
                            <i className="fa-regular fa-bell"></i>
                          </button>
                          <button
                            className="button button-red"
                            onClick={() => onDelete(m.id)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {modalPlace}
    </>
  );
}

export default NguoiDung;
