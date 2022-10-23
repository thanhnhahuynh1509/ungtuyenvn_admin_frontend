import Modal from "./Modal";
import { xoaQuanLy } from "./../../api/quan-ly-api";

function ModalConfirm(props) {
  const onCancel = () => {
    props.setModalPlace(<></>);
  };

  const onAccept = async (e) => {
    const response = await xoaQuanLy(props.id);
    if (response === "OK") {
      props.removeQuanLy(props.id);
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
      <p>Bạn có muốn chắc xóa quản lý với mã số {props.id}</p>
    </Modal>
  );
}

export default ModalConfirm;
