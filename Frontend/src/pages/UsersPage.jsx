import { React, useEffect, useState } from "react";
import UserService from "../service/UserService";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserList() {
  //getter and setter -> start with empty array
  const [users, setUsers] = useState([]);
  //Log and make sure we have all the users
  console.log(users);

  //get all users
  useEffect(() => {
    UserService.getAll()
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="centerText">Users</h2>
      <div className="usersContainer">
        <div className="userCardFlex">
          {users.map((user) => {
            return (
              <div key={user.username} className="center">
                <Link to={`/userInspect/${user.userID}`} className="colorLink">
                  <Card>
                    <Card.Body>
                      {/* User credentials */}
                      <Card.Title>Username: {user.username}</Card.Title>
                      <Card.Title>Email: {user.email}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserList;
