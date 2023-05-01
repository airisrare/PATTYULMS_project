import { Col, Container, Form, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import UserService from "../service/UserService";

function UserInspect() {
  const [user, setUser] = useState([]);

  //Navigate back to the home page
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("this page is for user " + id);

  //get user id from userservice
  useEffect(() => {
    UserService.getUser(id)
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  //Delete user function found in the user Service
  function handleDelete() {
    UserService.deleteUser(id)
      .then(() => {
        setUser({});
        alert("User was deleted");
        navigate("/Users");
      })
      .catch((error) => console.log(error).alert("Error deleting user"));
  }

  function handleEdit() {}

  return (
    <Container className="containerInspectUser">
      <Col>
        <div className="inspectText">
          <h2>{user.title}</h2>
          <br />
          <Form>
            <Form.Group>
              <Form.Label>User Name: {user.username}</Form.Label>
              <Form.Label>First Name: {user.firstname}</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name: {user.lastname} </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email: {user.email} </Form.Label>
            </Form.Group>
          </Form>
        </div>
      </Col>
      <br />
      <Link to={`/editUser/${user.userID}`}>
        <Button variant="warning" onClick={handleEdit}>
          Edit
        </Button>
      </Link>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Container>
  );
}

export default UserInspect;
