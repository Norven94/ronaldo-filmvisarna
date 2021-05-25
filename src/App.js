import {BrowserRouter, Route} from "react-router-dom";

import MovieProvider from "./context/MovieContext";

import './App.scss';
import UserProvider from "./context/UserContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import MoviesPage from "./pages/MoviesPage";
import AboutPage from './pages/AboutPage';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <MovieProvider>
      <UserProvider>

        <BrowserRouter>
          <Navbar />
          <main className="main">
            <Route exact path = "/" component={HomePage} />
            <Route exact path = "/home" component={HomePage} />
            <Route exact path = "/movies" component={MoviesPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/settings" component={ProfilePage} />
          </main>
        </BrowserRouter>

      </UserProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
