import React from "react";
import { Container, Form } from "react-bootstrap";
export default function About({ mode }) {
  if (mode !== "about") return null;
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
            <h1>About</h1>
          </Form.Label>
        </Form.Group>
      </Form>
    </Container>
  );
}
