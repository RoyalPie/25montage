import { useState } from "react";
import Modal from ".";

const ModalTest = () => {
    const [showModal, setShowModal] = useState(false)
    function handleToggleModal() {
        setShowModal((prev)=>!prev)
    }
    function onClose() {
        setShowModal(false)
    }
  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {showModal && <Modal closeModal={onClose} />}
    </div>
  );
}

export default ModalTest
