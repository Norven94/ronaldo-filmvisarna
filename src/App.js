import {BrowserRouter, Route} from "react-router-dom";

import MovieProvider from "./context/MovieContext";
import MoviesPage from "./pages/MoviesPage";

import './App.scss';
import UserProvider from "./context/UserContext";
import Navbar from "./components/Navbar";
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <MovieProvider>
      <UserProvider>

        <BrowserRouter>
          <Navbar />
          <main className="main">
            <Route exact path = "/movies" component={MoviesPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/about" component={AboutPage} />
          </main>
        </BrowserRouter>

      </UserProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
