import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

export const LoginForm = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4).required("Password is required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = () => {
    navigate("/dashboard", {
      state: { fromLogin: true },
    });
  };

  const onError = () => {
    toast.error("All fields are required");
  };

  return (
    <div className='login-form'>
      <div className='login-logo'>
        <img src='/images/logo.png' alt='Logo' />
      </div>
      <form onSubmit={handleSubmit(onsubmit, onError)}>
        <h2 className='login-heading'>
          Welcome <span>Back!</span>
        </h2>
        <p className='login-text'>
          Your smart coverage for sustainable farming today
        </p>
        <div className='form-group'>
          <p className='form-text-2'>Email Address</p>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email Address'
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
          <Link to='/' className='link'>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
