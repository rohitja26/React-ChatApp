import React from "react";
import { FaPowerOff } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button onClick={() => handleClick()}>
      <FaPowerOff />
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  background-color: #9a86f3;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
