import { useState } from "react";
import { capNhatQuanLy, luuQuanLy } from "../../api/quan-ly-api";
import Modal from "../Modal/Modal";
import { luuThongBao } from "./../../api/thong-bao-api";

function ModalThongBao(props) {
  const { isOpen, maNguoiDung } = props;

  const [tieuDe, setTieuDe] = useState("");
  const [noiDung, setNoiDung] = useState("");

  const onCancel = () => {
    props.setModalPlace(<></>);
  };

  const onAccept = async (e) => {
    e.preventDefault();
    const thongBao = { tieuDe, noiDung, nguoiDung: { id: maNguoiDung } };
    luuThongBao(thongBao);
    props.setModalPlace(<></>);
  };

  return (
    <form action="" onSubmit={onAccept}>
      <Modal isOpen={isOpen} onCancel={onCancel}>
        <div className="form-group" style={{ margin: "10px 0px" }}>
          <label htmlFor="">Tiêu đề</label>
          <input
            type="text"
            required
            value={tieuDe}
            onChange={(e) => setTieuDe(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ margin: "10px 0px" }}>
          <label htmlFor="">Nội dung</label>
          <input
            type="text"
            required
            value={noiDung}
            onChange={(e) => setNoiDung(e.target.value)}
          />
        </div>
      </Modal>
    </form>
  );
}

export default ModalThongBao;
