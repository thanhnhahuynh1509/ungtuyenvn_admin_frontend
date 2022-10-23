import { renderHtml } from "./../../utils/text-render";
import Modal from "./../Modal/Modal";

function ModalBaoCao(props) {
  const { danhSachBaoCao } = props;

  const onCancel = () => {
    props.setModalPlace(<></>);
  };

  const onAccept = async (e) => {
    props.setModalPlace(<></>);
  };
  return (
    <>
      <Modal
        title={"Báo cáo"}
        isOpen={true}
        onCancel={onCancel}
        onAcceptWithoutSubmit={onAccept}
      >
        {danhSachBaoCao.map((m) => {
          return (
            <div className="BaoCao-card">
              <h4>{m.tieuDe}</h4>
              <p style={{ fontSize: "14px", color: "#333" }}>{m.ngayBaoCao}</p>

              <p
                style={{ margin: "10px 0px" }}
                dangerouslySetInnerHTML={renderHtml(m.noiDung)}
              ></p>
            </div>
          );
        })}
      </Modal>
    </>
  );
}

export default ModalBaoCao;
