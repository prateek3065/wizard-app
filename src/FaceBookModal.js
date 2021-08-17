import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
export default function FaceBookModal(isModalOpen, setModalOpen) {
  return (
    <Modal show={isModalOpen}>
      <Modal.Header>Facebook LogIn</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Facebook Id/ Mob No.</Form.Label>
            <Form.Control type="text" required />
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
