import { React, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";

function Login() {
  //Keep track of user credentials
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await UserService.signIn({ username, password });

      // If the response is successful, save the token to local storage and update the authentication status in the NavBar component's state.
      localStorage.setItem("token", response.data.accessToken);
      console.log(username);
      nav("/");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="cardstyle">
      <Form.Group className="text-center"></Form.Group>
      <Card.Header className="formLabel">Login</Card.Header>
      <Card.Body></Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="formLabel">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="formLabel">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="btncolor" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Login;
