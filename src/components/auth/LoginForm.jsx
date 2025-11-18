import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./login.css";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setName } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().email().required(""),
    password: yup.string().min(4).required("Password is required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = () => {
    const isValid = true;
    setName("");

    if (isValid) {
      localStorage.setItem("loginSuccess", "true");
      navigate("/dashboard/home");
    }
  };

  const onError = () => {
    toast.error("All fields are required");
  };

  return (
    <div className='login-form'>
      <div className='form-container'>
        <div className='login-logo'>
          <img src='./src/assets/images/logo.svg' alt='Logo' />
        </div>
        <form onSubmit={handleSubmit(onsubmit, onError)}>
          <h2 className='login-heading'>
            Welcome <span>Back!</span>
          </h2>
          <p className='login-text'>Let's get started today</p>
          <div className='form-group'>
            <p className='form-text-2'>Email</p>
            <br />
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              {...register("email")}
            />
          </div>
          <div className='form-group'>
            <p className='form-text-3'>Password</p>
            <br />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              {...register("password")}
            />
          </div>
          <button className='login-btn' type='submit'>
            Login
          </button>
          <p className='form-text-4'>
            Don't have an account? {""}
            <Link to='/' className='login-link'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
