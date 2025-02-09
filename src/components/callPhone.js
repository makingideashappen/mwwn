import React from "react";
import { Phone } from "react-feather";
import styled from "styled-components";

const CallButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background-color: #2ecc71;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #27ae60;
  }
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
  margin-top: 24px;
  margin-bottom: 24px;
`;

const WorkHours = styled.div`
  max-width: 200px;
  margin-left: 30px;

  p {
    background-color: #fffbcc;
    margin: 0;
    padding: 4px;
  }
  @media (max-width: 800px) {
    display: block;

    p {
      background-color: transparent;
      color: white;
    }
  }
`;

export default function callPhone() {
  return (
    <WorkHours>
      <div>
        <p>Work hours:</p>
        <p> Mon - Fri: 09:00 do 21:00</p>
      </div>
      <div>
        <CallButton href="tel:+123456789">
          <Phone size={20} /> Call Us
        </CallButton>
      </div>
    </WorkHours>
  );
}
