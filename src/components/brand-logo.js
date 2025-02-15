import * as React from "react";
import Logo from "./../logo.svg";
import styled from "styled-components";

const StyledImg = styled.img`
  filter: ${(props) => (props.isOpen ? "invert(1)" : "invert(0)")};
`;
export default function BrandLogo({ isOpen }) {
  console.log(isOpen);
  return (
    <StyledImg
      src={Logo}
      isOpen={isOpen}
      style={{ width: 148 }}
      alt="brand-logo"
    />
  );
}
