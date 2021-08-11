import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import Button from "../../components/Button";
import "./Modal.css";

function PopUp({ cleanCart }) {
  const { handleClose, show, errorText } = useContext(CartContext);

  return (
    <Modal show={show} onHide={handleClose} onExited={cleanCart}>
      <Modal.Body>{errorText}</Modal.Body>
      <Modal.Footer>
        <Button
          text={"X"}
          width={"1.5vw"}
          height={"1.5vw"}
          border={"none"}
          backgroundColor={"rgb(18, 0, 177)"}
          color={"white"}
          onClick={handleClose}
        />
      </Modal.Footer>
    </Modal>
  );
}

export default PopUp;