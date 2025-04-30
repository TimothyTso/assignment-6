import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MoviesView from './views/MoviesView';
import ErrorView from './views/ErrorView';
import GenreLogin from './views/GenreView';
import DetailView from './views/DetailView';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="now_playing" element={<GenreLogin />}></Route>
          <Route path=":id" element={<DetailView />}></Route>
          </Route>
        
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
