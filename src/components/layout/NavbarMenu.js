import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LearnItlogo from "../../assets/logo.svg";
import LogoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavbarMenu = ({ activate }) => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Nav.Link to="/dashboard" as={Link}>
        <Navbar.Brand className="font-weight-bolder text-white">
          <img
            src={LearnItlogo}
            alt="LearnitLogo"
            width="32"
            height="32"
            className="mr-2"
          />
          LearnIt
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-write"
            to="/dashboard"
            as={Link}
            active={activate === "dashboard" ? true : false}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-write"
            to="/bills"
            as={Link}
            active={activate === "bills" ? true : false}
          >
            Bills
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-write"
            to="/setting"
            as={Link}
            active={activate === "setting" ? true : false}
          >
            Setting
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Welcome {username.toUpperCase()}
          </Nav.Link>
          <Button
            variant="secondary"
            className="font-weight-bolder text-white"
            onClick={logout}
          >
            <img
              src={LogoutIcon}
              alt="logoutIcon"
              width="32"
              height="32"
              className="mr-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
