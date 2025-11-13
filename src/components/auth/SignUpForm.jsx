import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";

export const SignUpForm = () => {
  const { setName } = useUserContext();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    setName(data.fullName);
    toast.success("Successfully logged in");
    navigate("/dashboard/home");
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const onError = () => {
    toast.error("All fields are required");
  };

  return (
    <div className='SignUpForm'>
      <div className='sign-up-logo'>
        <img src='./src/assets/images/logo.svg' alt='Logo' />
      </div>
      <form onSubmit={handleSubmit(onsubmit, onError)} className='sign-up-form'>
        <h2 className='sign-up-heading'>Welcome!</h2>
        <p className='sign-up-text'>
          Your smart coverage for sustainable farming today
        </p>
        <div className='form-group'>
          <p className='form-text-1'>Full Name</p>
          <br />
          <input
            type='text'
            id='full-name'
            name='fullName'
            placeholder='Name'
            {...register("fullName")}
          />
        </div>
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
          <div className='form-password'>
            <input
              type={isVisible ? "text" : "password"}
              id='password'
              name='password'
              placeholder='Password'
              {...register("password")}
            />
            <span className='password-visible' onClick={toggleVisibility}>
              {isVisible ? (
                <i className='ri-eye-off-line'></i>
              ) : (
                <i className='ri-eye-line'></i>
              )}
            </span>
          </div>
        </div>
        <button className='sign-up-btn' type='submit'>
          Proceed with verification
        </button>
        <p className='form-text-4'>
          Already have an account?{" "}
          <Link to='/login' className='sign-in-link'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
