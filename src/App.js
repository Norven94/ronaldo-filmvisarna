import {BrowserRouter, Route} from "react-router-dom";

import MovieProvider from "./context/MovieContext";

import './App.scss';
import UserProvider from "./context/UserContext";
import BookingProvider from "./context/BookingContext";

import Navbar from "./components/navigation/Navbar";
import RegisterPage from './pages/RegisterPage';
import MoviesPage from "./pages/MoviesPage";
import AboutPage from './pages/AboutPage';
import MyBooking from "./pages/MyBooking";

function App() {
  return (
    <div className="App">
      <MovieProvider>
      <UserProvider>
        <BookingProvider>
          <BrowserRouter>
            <Navbar />
            <main className="main">
              <Route exact path = "/movies" component={MoviesPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/bookings" component={MyBooking} />
            </main>
          </BrowserRouter>
        </BookingProvider>
      </UserProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
