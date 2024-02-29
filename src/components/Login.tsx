import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 
import movieclip from '../assets/movieclip.mp4';
import './Login.css'
interface UserCredentials {
  email: string;
  password: string;
}

const Login = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api/login', userCredentials);
      localStorage.setItem('authToken', response.data.token);
      navigate('/account');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={movieclip} type="video/mp4" />
      </video>
      <div className="overlay">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="email">Email or phone number</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userCredentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userCredentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Sign In</button>
            <div className="links">
              <Link to="/forgot-password">Forgot password?</Link>
              <Link to="/signup">Sign up now.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
