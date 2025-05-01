import { useNavigate } from "react-router-dom";
import "./RegisterView.css";

export default function RegisterView() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let pass = (1);

   if (pass === 1){
    navigate('/Login');
  } else{
    alert("enter the same password dummy");
  }
    }
  

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="name1"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="name2"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password1"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Re-Enter Password</label>
            <input
              type="password"
              name="password2"
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
