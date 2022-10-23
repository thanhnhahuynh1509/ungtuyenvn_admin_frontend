import { useEffect, useState } from "react";
import { layTatCaQuanLy } from "../../api/quan-ly-api";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import "./css/QuanLy.css";
import ModalAddQuanLy from "./ModalAddQuanLy";
import ModalConfirm from "./../Modal/ModaConfirm";

function QuanLy(props) {
  const [modalPlace, setModalPlace] = useState(<></>);
  const [tatCaQuanLy, setTatCaQuanLy] = useState([]);
  const [search, setSearch] = useState("");
  const [maQuanLy, setMaQuanLy] = useState(localStorage.getItem("ma-quan-ly"));

  if (!localStorage.getItem("jwt-token")) {
    window.location.href = "/dang_nhap";
  }

  useEffect(() => {
    const init = async () => {
      setTatCaQuanLy(await layTatCaQuanLy());
    };

    init();
  }, []);

  const addQuanLy = (data) => {
    setTatCaQuanLy([...tatCaQuanLy, data]);
  };

  const removeQuanLy = (id) => {
    const data = tatCaQuanLy.filter((m) => m.id !== id);
    setTatCaQuanLy([...data]);
  };

  const updateQuanLy = (data) => {
    const datas = tatCaQuanLy.map((m) => {
      if (data.id === m.id) {
        return data;
      }
      return m;
    });
    setTatCaQuanLy([...datas]);
  };

  const openModal = () => {
    setModalPlace(
      <ModalAddQuanLy
        isOpen={true}
        setModalPlace={setModalPlace}
        addQuanLy={addQuanLy}
      />
    );
  };

  const onUpdate = (model) => {
    setModalPlace(
      <ModalAddQuanLy
        isOpen={true}
        model={model}
        title="Quản Lý"
        setModalPlace={setModalPlace}
        updateQuanLy={updateQuanLy}
      />
    );
  };

  const onDelete = (id) => {
    setModalPlace(
      <ModalConfirm
        id={id}
        isOpen={true}
        setModalPlace={setModalPlace}
        removeQuanLy={removeQuanLy}
      />
    );
  };

  const onSearch = async () => {
    let danhSach = await layTatCaQuanLy();
    if (search.length > 0) {
      danhSach = danhSach.filter((m) =>
        (
          m.id +
          " " +
          m.ho +
          " " +
          m.ten +
          " " +
          m.soDienThoai +
          " " +
          m.diaChi +
          " " +
          m.ngaySinh
        ).includes(search)
      );
    }
    setTatCaQuanLy([...danhSach]);
  };

  return (
    <>
      <Header />
      <section className="QuanLy">
        <div className="container QuanLy-container">
          <div className="QuanLy-header">
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
            <button className="button button-green" onClick={openModal}>
              Thêm Quản Lý
            </button>
          </div>
          <div className="QuanLy-content">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã số</th>
                  <th>Họ Tên</th>
                  <th>Email</th>
                  <th>SDT</th>
                  <th>Địa chỉ</th>
                  <th>Ngày sinh</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tatCaQuanLy.map((m) => {
                  return (
                    <tr key={m.id}>
                      <td className="text-align-center">{m.id}</td>
                      <td className="text-align-center">
                        {m.ho} {m.ten}
                      </td>
                      <td className="text-align-center">{m.email}</td>
                      <td className="text-align-center">{m.soDienThoai}</td>
                      <td className="text-align-center">{m.diaChi}</td>
                      <td className="text-align-center">{m.ngaySinh}</td>
                      <td className="text-align-center">
                        <div className="contain-buttons">
                          {maQuanLy != m.id && (
                            <>
                              <button
                                className="button button-primary"
                                onClick={() => onUpdate(m)}
                              >
                                <i className="fa-solid fa-gear"></i>
                              </button>
                              <button
                                className="button button-red"
                                onClick={() => onDelete(m.id)}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </>
                          )}
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

export default QuanLy;
