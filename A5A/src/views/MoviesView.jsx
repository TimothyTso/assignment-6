import { Outlet, useNavigate } from "react-router-dom";
import "./../views/MoviesView.css";

function MoviesView() {
  return (
    <div className="appcontainer">
      <Outlet />
    </div>
  );
}

export default MoviesView;