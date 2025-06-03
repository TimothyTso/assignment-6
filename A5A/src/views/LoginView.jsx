import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useStoreContext } from '../context';
import "./LoginView.css";

export default function LoginView() {

  const navigate = useNavigate();
  const { email: contextEmail, password: contextPassword } = useStoreContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === contextEmail && password === contextPassword) {
      navigate('/movies/genre');
    } else {
      alert("Incorrect email or password.");
      console.log(email, password, contextEmail, contextPassword);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-input"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
