import React from 'react';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label>NGO</label>
          <input type="text" placeholder="Enter NGO name" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;