import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
export default LoginPage;
