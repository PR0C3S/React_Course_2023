import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalComponent({
  onCloseModal,
  onSubmit,
  children,
  title,
  buttonAcceptText = "Save",
  buttonAcceptStyle = "primary",
  formID = "",
}) {
  return (
    <Modal show={true} onHide={onCloseModal} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <Button
          variant={buttonAcceptStyle}
          type="submit"
          form={formID}
          onClick={onSubmit}
        >
          {buttonAcceptText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
