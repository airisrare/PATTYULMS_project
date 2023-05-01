import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";

//Functional component for Registering a user for database
function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  //button submit event handler
  const handleSubmit = (event) => {
    event.preventDefault();

    //This is the data that we are sending through our form and appending to our backend
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("role", role);

    //Register function from the user service
    UserService.register(formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  //JSX html and functions
  return (
    <Card className="cardstyle">
      <Form.Group className="text-center"></Form.Group>
      <Card.Header className="formLabel">Register</Card.Header>
      <Card.Body>
        {/* Must make sure we are using the form data */}
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">First Name</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value) && setRole("1")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Last Name</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Label className="formLabel">UserName</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="formLabel">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button className="btncolor" type="submit">
            Submit
          </Button>
          <br />
          <br />
          <Link to={"/Login"}>
            <Button className="btncolor" type="submit">
              Login
            </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register;
