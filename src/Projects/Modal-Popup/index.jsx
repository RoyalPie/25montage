import './modal.css'
const Modal = ({ id, header, body, footer, closeModal }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={closeModal}>&time;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Modal Body</p>
            </div>
          )}
        </div>
              <div className="footer">
                  {
                      footer ? footer : (<h2>This is Footer</h2>)
                  }
        </div>
      </div>
    </div>
  );
};

export default Modal;
