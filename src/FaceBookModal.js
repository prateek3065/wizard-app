import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
export default function FaceBookModal(isModalOpen, setModalOpen, setStep) {
  function handleSubmit(e) {
    e.preventDefault();
    setStep("111");
  }
  function closeModal() {
    setStep("10");
    setModalOpen(false);
  }
  return (
    <Modal show={isModalOpen} onHide={closeModal}>
      <Modal.Header closeButton>Facebook LogIn</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Facebook Id/ Mob No.</Form.Label>
            <Form.Control type="text" required />
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group style={{ marginTop: "8px" }}>
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
