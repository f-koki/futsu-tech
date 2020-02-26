import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  padding: 300px;
  background: white;
  text-align: center;
  font-family: "monospace";
`;

const StyledName = styled.h1``;

const Logo: React.FC = () => (
  <StyledLogo>
    <StyledName>FUTSU TECH</StyledName>
    <span className="job">💻ENGINEER / 🎹KEYBOARDIST / 💡Lifehacker</span>
  </StyledLogo>
);

export default Logo;
