import "./css/Modal.css";

function Modal(props) {
  const { onAcceptWithoutSubmit, onCancel, isOpen } = props;
  return (
    <>
      <div className={`Modal ${isOpen && "show"}`}>
        <div className="backdrop" onClick={onCancel}></div>
        <div className="Modal-container">
          <div className="Modal-content">
            <div className="Modal-head">
              <h3>{props.title}</h3>
            </div>

            <div className="Modal-body">{props.children}</div>

            <div className="seperate"></div>

            <div className="Modal-footer">
              <div className="Modal-contain-buttons">
                <button
                  className="button button-black"
                  type="button"
                  onClick={onCancel}
                >
                  Hủy
                </button>
                {onAcceptWithoutSubmit && (
                  <button
                    className="button button-green"
                    onClick={onAcceptWithoutSubmit}
                  >
                    Xác nhận
                  </button>
                )}

                {!onAcceptWithoutSubmit && (
                  <button className="button button-green">Xác nhận</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
