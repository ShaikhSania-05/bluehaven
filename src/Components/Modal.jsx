function Modal({ isOpen, type = "notice", message, onClose }) {
  if (!isOpen) return null;
  const titles = {
    sucess: "Success",
    error: "Error",
    notice: "Notice",
  };
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3 className="{modal-title ${type}`}">{titles[type]}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onClose}> OK </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
