import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import MovieProvider from "./context/MovieContext";
import Navbar from "./components/Navbar";
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <main className="main">
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/about" component={AboutPage} />
            <Route exact path = "/movies" component={MoviesPage} />
            </main>
          </BrowserRouter>
        </UserProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
