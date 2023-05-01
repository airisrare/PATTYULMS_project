import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  //No one is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  //logout user
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">PATTYULMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/concepts">Concepts</Nav.Link>
            {/* If the user is authenticated, add drop down  */}
            {isAuthenticated && (
              <NavDropdown title="Admin" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/productCreate">
                  Create Product
                </NavDropdown.Item>
                <NavDropdown.Item href="/conceptCreate">
                  Create Concept
                </NavDropdown.Item>
                <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Orders</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {/* If user is logged in show the logout button, if not show the login and register */}
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            {!isAuthenticated && <Nav.Link href="/register">Register</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

// class NavBar extends React.Component {
//   render() {
//     const { isAuthenticated, userRole } = this.props;
//     return (
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
//         <Container>
//           <Navbar.Brand href="/">PATTYULMS</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/concepts">Concepts</Nav.Link>
//               {isAuthenticated && userRole === "OMNI" && (
//                 <NavDropdown title="Admin" id="collasible-nav-dropdown">
//                   <NavDropdown.Item href="/productCreate">
//                     Create Product
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/conceptCreate">
//                     Create Concept
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="/Users">Users</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action/3.4">Orders</NavDropdown.Item>
//                 </NavDropdown>
//               )}
//             </Nav>
//             <Nav>
//               <Nav.Link href="/Register">Register</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }
// }

// export default NavBar;
