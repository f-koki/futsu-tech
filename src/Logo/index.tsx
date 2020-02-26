import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  padding: 300px;
  background: white;
  text-align: center;
`;

const Logo: React.FC = () => (
  <StyledLogo>
    <h1>FUTSU TECH</h1>
    <span>💻ENGINEER | 🎹KEYBOARDIST | 💡LIFEHACKER</span>
  </StyledLogo>
);

export default Logo;
