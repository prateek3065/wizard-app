import React from "react";
import { Container, Form } from "react-bootstrap";

export default function Sample({ mode }) {
  if (mode !== "sample") return null;

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              height: "100vh",
              alignItems: "center",
            }}
          >
            <h1>This is Sample</h1>
          </Form.Label>
        </Form.Group>
      </Form>
    </Container>
  );
}
