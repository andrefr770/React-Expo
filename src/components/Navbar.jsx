import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Text } from "react-native";

class NavbarHome extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Container>
            <Navbar expand="lg" variant="light" bg="light">
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>
          </Container>
      </React.Fragment>
    );
  }
}

export default NavbarHome;
 