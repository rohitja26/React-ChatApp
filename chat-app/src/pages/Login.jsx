import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  const toastOption = {
    position: "bottom-right",
    autoClose: 7000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("User")) {
      navigate("/");
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });

      console.log(data);
      if (data.status === false) {
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        localStorage.setItem("User", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password.length === 0) {
      toast.error("Password is required", toastOption);
      return false;
    } else if (username.length === 0) {
      toast.error("Username is required", toastOption);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chatty</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            required
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            required
          />
          <button type="submit">Login In</button>
          <span>
            Don't have an account ?? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background: transparent;
    font-size: 1rem;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    color: white;
    border-radius: 0.4rem;
    width: 100%;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
      color: white;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: capitalize;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

