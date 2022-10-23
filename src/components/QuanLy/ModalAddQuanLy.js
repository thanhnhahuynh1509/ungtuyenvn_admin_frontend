import { useState } from "react";
import { capNhatQuanLy, luuQuanLy } from "../../api/quan-ly-api";
import Modal from "./../Modal/Modal";

function ModalAddQuanLy(props) {
  const { isOpen, model } = props;
  const [ho, setHo] = useState(model ? model.ho : "");
  const [ten, setTen] = useState(model ? model.ten : "");
  const [email, setEmail] = useState(model ? model.email : "");
  const [matKhau, setMatKhau] = useState("");
  const [diaChi, setDiaChi] = useState(model ? model.diaChi : "");
  const [soDienThoai, setSoDienThoai] = useState(
    model ? model.soDienThoai : ""
  );
  const [ngaySinh, setNgaySinh] = useState(model ? model.ngaySinh : "");

  const onCancel = () => {
    props.setModalPlace(<></>);
  };

  const onAccept = async (e) => {
    e.preventDefault();
    if (model) {
      const quanLy = {
        id: model.id,
        ho,
        ten,
        email,
        matKhau,
        diaChi,
        soDienThoai,
        ngaySinh,
      };
      const data = await capNhatQuanLy(quanLy);
      props.updateQuanLy(data);
      props.setModalPlace(<></>);
    } else {
      const quanLy = { ho, ten, email, matKhau, diaChi, soDienThoai, ngaySinh };
      const data = await luuQuanLy(quanLy);
      if (data.id == 0) {
        alert("email đã tồn tại");
      } else {
        props.addQuanLy(data);
        props.setModalPlace(<></>);
      }
    }
  };

  return (
    <form action="" onSubmit={onAccept}>
      <Modal isOpen={isOpen} onCancel={onCancel}>
        <div className="contain-form-group" style={{ margin: "10px 0px" }}>
          <div className="form-group">
            <label htmlFor="">Họ</label>
            <input
              type="text"
              required
              value={ho}
              onChange={(e) => setHo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Tên</label>
            <input
              type="text"
              required
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
        </div>

        {!model && (
          <>
            <div className="form-group" style={{ margin: "10px 0px" }}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ margin: "10px 0px" }}>
              <label htmlFor="">Mật khẩu</label>
              <input
                type="password"
                required
                value={matKhau}
                onChange={(e) => setMatKhau(e.target.value)}
              />
            </div>
          </>
        )}

        <div className="form-group" style={{ margin: "10px 0px" }}>
          <label htmlFor="">Địa chỉ</label>
          <input
            type="text"
            required
            value={diaChi}
            onChange={(e) => setDiaChi(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ margin: "10px 0px" }}>
          <label htmlFor="">Số điện thoại</label>
          <input
            type="text"
            required
            value={soDienThoai}
            onChange={(e) => setSoDienThoai(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ margin: "10px 0px" }}>
          <label htmlFor="">Ngày sinh</label>
          <input
            type="date"
            required
            value={ngaySinh}
            onChange={(e) => setNgaySinh(e.target.value)}
          />
        </div>
      </Modal>
    </form>
  );
}

export default ModalAddQuanLy;
