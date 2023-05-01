import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import UserService from "../service/UserService";

function EditUser() {
  //Getter setter for user
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("Edit page for user" + id);

  //Using the User Service which makes a call to the backend to get one User
  useEffect(() => {
    UserService.getUser(id)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(user);

  function handleEdit() {
    UserService.editUser(id, user)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
    navigate("/Users");
  }

  //This is for handling our changes per input
  //e is our "event" change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Card className="cardstyle">
      <Card.Header>Edit User</Card.Header>
      {/* <Form.Group className="text-center"></Form.Group> */}
      <Card.Body>
        {/* Must make sure we are using the form data */}
        <Form>
          <Form.Group>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={user.email}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              value={user.password}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={user.role}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
          <br />
          <Button className="btncolor" type="submit" onClick={handleEdit}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EditUser;
