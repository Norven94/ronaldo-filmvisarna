import { BrowserRouter, Route } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import UserProvider from "./context/UserContext";
import BookingProvider from "./context/BookingContext";

import ShowProvider from "./context/ShowContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import MoviesPage from "./pages/MoviesPage";


import "./App.scss";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
