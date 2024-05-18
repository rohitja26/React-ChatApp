import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome({ currentUser }) {
  return (
    <Container>
      <div>
        <img src={Robot} alt="Robot" />
        <h1>
          Hello,
          <span> {currentUser.username} !</span>
        </h1>
        <h3>Please select a chat to start messaging</h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  text-align: center;
  img {
    height: 20rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  span {
    color: #4e0eff;
  }
`;
