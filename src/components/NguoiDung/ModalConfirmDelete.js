import Modal from "../Modal/Modal";
import { xoaNguoiDung } from "./../../api/nguoi-dung-api";

function ModalConfirmDelete(props) {
  const onCancel = () => {
    props.setModalPlace(<></>);
  };

  const onAccept = async (e) => {
    const response = await xoaNguoiDung(props.id);
    if (response === "OK") {
      props.removeNguoiDung(props.id);
      props.setModalPlace(<></>);
    } else {
      alert("Lỗi");
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onCancel={onCancel}
      onAcceptWithoutSubmit={onAccept}
      title="Xác nhận"
    >
      <p>Bạn có muốn chắc xóa người dùng với mã số {props.id}</p>
    </Modal>
  );
}

export default ModalConfirmDelete;
