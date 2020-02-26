import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  background: white;
  text-align: center;
`;

const Logo: React.FC = () => (
  <StyledLogo>
    {/* <h1>FUTSU TECH</h1>
    <span>💻ENGINEER | 🎹KEYBOARDIST | 💡LIFEHACKER</span> */}
    <img
      src={process.env.PUBLIC_URL + "logo.png"}
      alt="logo"
      style={{ maxHeight: 1000 }}
    />
  </StyledLogo>
);

export default Logo;
