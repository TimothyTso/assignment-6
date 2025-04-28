import { Link } from "react-router-dom";
import "./HomeView.css";
import "./../components/Header.css"
import Menu from "./../components/Menu";

function HomeView() {
  return (
    <div>
      <Menu />
    <h1>Home</h1>
    <div class="menu">
    <ul class="tabs">
    <l1>Movies</l1>
    <l1>Tv Shows</l1>
    <l1>Favourites</l1>
    <l1>More</l1>
    </ul>
  </div>

  <h1 class="title">Poorflix</h1>

  <div class="buttons">
    <button class="login">Login</button>
    <button class="register">Register</button>
  </div>

  <div class="boxdescript">
    <h1 class="descr">Welcome to Poorflix!</h1><br/>Be sure to log in so that we can give you
    tailoired recommendations!
    <br/>
    <br/>
    Don't have an account yet? Be sure to register so you can enjoy movies any time!
  </div>

  <div class="description"></div>

  <h1 class="ftitle">Check out our top hits!</h1>

  <div class="features">
    <div class="feat1"></div>
    <div class="feat2"></div>
    <div class="feat3"></div>
    <div class="feat4"></div>
    <div class="feat5"></div>
  </div>

  <div class="footer"><p1>Find us Here!</p1>
    <div class="insta"></div>
    <div class="reddit"></div>
    <div class="twitter"></div>
    <div class="facebook"></div>
    <div class="discord"></div>
  </div>
  </div>
    
  );
}

export default HomeView;
