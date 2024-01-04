"use client";
import React, { useState } from "react";
import Modal from "react-modal";

// Set the root element for the modal
Modal.setAppElement("#root");

const ImagePreview = ({ imagePath }: { imagePath: string }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <img src={imagePath} onClick={toggleModal} className="cursor-pointer" />
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        className="mx-auto my-10 w-80 md:w-fit bg-white p-2"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <img src={imagePath} alt="Full Size Image" className="w-full h-auto" />
      </Modal>
    </div>
  );
};

export default ImagePreview;
