import "./App.css";
import { Container, Form, Button } from "react-bootstrap";
import FaceBookModal from "./FaceBookModal";
export default function Steps({ step, setStep, isModalOpen, setModalOpen }) {
  function getButtons(flag, q) {
    function handleYesClick() {
      setStep((prev) => prev + 1);
      if (q === "LogIn with faceBook ?") {
        setModalOpen(true);
      }
    }
    if (flag)
      return (
        <>
          <Button className="btn" onClick={() => handleYesClick()}>
            Yes
          </Button>
          <Button className="btn" onClick={() => setStep((prev) => prev + "0")}>
            No
          </Button>
        </>
      );
    return <></>;
  }
  function twoChild(q, flag) {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "50vh",
          alignItems: "center",
        }}
      >
        <Form style={{ width: "100%" }}>
          <Form.Group>
            <Form.Label>
              <h1>{q}</h1>
            </Form.Label>
          </Form.Group>
          <Form.Group> {getButtons(flag, q)}</Form.Group>
        </Form>
      </Container>
    );
  }

  function signUp(q) {
    function handleSubmit(e) {
      e.preventDefault();
    }
    return (
      <Container>
        <Form style={{ marginTop: "8px" }}>
          <Form.Group>
            <Form.Label>{q}</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
          <Form.Group style={{ marginTop: "8px" }}>
            <Button className="btn" onClick={handleSubmit} type="submit">
              SignUp
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
  function signIn(q, signInMethod) {
    function handleSubmit(e) {
      e.preventDefault();
      setStep("111");
    }
    if (signInMethod === "facebook") {
      return FaceBookModal(isModalOpen, setModalOpen, setStep);
    }
    return (
      <Container>
        <Form style={{ marginTop: "20px" }}>
          <Form.Group>
            <Form.Label>{q}</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
          <Form.Group style={{ marginTop: "8px" }}>
            <Button
              className="btn"
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              LogIn
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
  if (step === "1") return twoChild("Are you Business Owner ?", true);
  else if (step === "11") return twoChild("Located in US ?", true);
  else if (step === "10") return twoChild("LogIn with faceBook ?", true);
  else if (step === "111") return twoChild("Large Corporation ?", true);
  else if (step === "110") return twoChild("Access Denied !!", false);
  else if (step === "101") return signIn("Fb logIn widget", "facebook");
  else if (step === "100")
    return signIn("Email signIn form", "small corporation");
  else if (step === "1111")
    return twoChild("Interested in Taking survey ?", true);
  else if (step === "1110")
    return twoChild("Contracted with large Corporation ?", true);
  else if (step === "11110" || step === "11111")
    return signUp("Large Corporation Sign Up form");
  else if (step === "11101")
    return twoChild("User must contact Large Corporation", false);
  else if (step === "11100") return signUp("Small Corporation SignUp form");
}
