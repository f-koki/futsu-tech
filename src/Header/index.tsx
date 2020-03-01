import React from "react";
import { Navbar } from "react-bootstrap";

const Header: React.FC = () => (
  <Navbar fixed="top">
    <Navbar.Brand>FUTSU TECH</Navbar.Brand>
    {/* TODO: SPAで切り替える */}
    <Navbar.Text>略歴</Navbar.Text>
  </Navbar>
);

export default Header;
