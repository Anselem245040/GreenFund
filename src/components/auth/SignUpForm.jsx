import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup.css";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4).required("Password is required"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    navigate("/dashboard", {
      state: { fromSignup: true, fullName: data.fullName },
    });
  };

  const onError = () => {
    toast.error("All fields are required");
  };
  return (
    <div className='SignUpForm'>
      <div className='sign-up-logo'>
        <img src='/images/logo.png' alt='Logo' />
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
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            {...register("password")}
          />
        </div>
        <button className='sign-up-btn' type='submit'>
          Proceed with verification
        </button>
        <p className='form-text-4'>
          Already have an account?{" "}
          <Link to='/login' className='link'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
