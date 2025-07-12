import "./signup.css";
export const SignUpForm = () => {
  return (
    <div className='SignUpForm'>
      <div className='sign-up-logo'>
        <img src='/images/logo.png' alt='Logo' />
      </div>
      <form className='sign-up-form'>
        <h2>Welcome!</h2>
        <p>Your smart coverage for sustainable farming today</p>
        <div className='form-group'>
          <label for='full-name'>Full Name</label>
          <input
            type='text'
            id='full-name'
            name='full-name'
            placeholder='Name'
            required
          />
        </div>
        <div className='form-group'>
          <label for='email'>Email Address</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email Address'
            required
          />
        </div>
        <div className='form-group'>
          <label for='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            required
          />
        </div>
        <button type='submit'>Proceed with verification</button>
        <p>
          Already have an account? <a href='/login'>Sign in</a>
        </p>
      </form>
    </div>
  );
};
