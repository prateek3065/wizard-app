import React, { useState } from "react";
import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import useLocalStorege from "./hooks/useLocalStorage.js";
export default function Steps({ step, setStep }) {
  const [credentials, setCredentials] = useLocalStorege();
  function getButtons(flag) {
    if (flag)
      return (
        <>
          <Button onClick={() => setStep((prev) => prev + 1)}>Yes</Button>
          <Button onClick={() => setStep((prev) => prev + 0)}>No</Button>
        </>
      );
    return <></>;
  }
  function twoChild(q, flag) {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>{q}</Form.Label>
          </Form.Group>
          {getButtons(flag)}
        </Form>
      </Container>
    );
  }
  function oneChild(q) {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>{q}</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <Button type="submit">LogIn</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
  function specialChild(q) {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>{q}</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
  function signUp(q) {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>{q}</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <Button type="submit">LogIn</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
  if (step === "1") return twoChild("Are you Business Owner", true);
  else if (step === "11") return twoChild("Located in US", true);
  else if (step === "10") return twoChild("LogIn with faceBook", true);
  else if (step === "111") return twoChild("Large Corporation", true);
  else if (step === "110") return twoChild("Access Denied", false);
  else if (step === "101") return oneChild("Fb logIn widget");
  else if (step === "100") return oneChild("Email signIn form");
  else if (step === "1111")
    return twoChild("Interested in Taking survey", true);
  else if (step === "1110")
    return twoChild("Contracted with lasge Corporation ?", true);
  else if (
    step === "1011" ||
    step === "1001" ||
    step === "1010" ||
    step === "1000"
  )
    return specialChild("Detect If Corporate Email");
  else if (step === "11110" || step === "11111")
    return signUp("Large Corporation Sign Up form");
  else if (step === "11101")
    return twoChild("User must contact Large Corporation", false);
  else if (step === "11100")
    return twoChild("Small Corporation Sign up form", false);
  else if (
    step === "1011" ||
    step === "1010" ||
    step === "1001" ||
    step === "1000"
  )
    return oneChild("Detect if Corporate Email");
}
