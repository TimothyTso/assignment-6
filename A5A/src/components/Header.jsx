import { Link } from "react-router-dom";
import "./../components/Header.css"

function Header(){
    return (
        <div className="head">
            <div className="menu"></div>
            <h1 className="title">Poorflix</h1>
        <div className="buttons">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
      </div>
        
      );

}
export default Header;