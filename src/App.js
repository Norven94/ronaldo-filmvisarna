import { BrowserRouter, Route } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import UserProvider from "./context/UserContext";
import ShowProvider from "./context/ShowContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MovieProvider>
          <ShowProvider>
            <BrowserRouter>
              <Navbar />
              <main className="main">
                <Route exact path="/movies" component={MoviesPage} />
                <Route
                  exact
                  path="/movie/:movieId"
                  component={MovieDetailPage}
                />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/about" component={AboutPage} />
              </main>
            </BrowserRouter>
          </ShowProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
