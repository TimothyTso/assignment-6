import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Hero from "./../components/Hero";
import Feature from "./../components/Feature";
function HomeView() {
  return (
    <div>
        <Header />
        <Hero />
        <Feature />
    </div>
    
  );
}

export default HomeView;
