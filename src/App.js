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
import HomePage from "./pages/HomePage";
import MyBooking from "./pages/MyBooking";
import BookingPage from "./pages/BookingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import RouteGuard from "./components/RouteGuard";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MovieProvider>
          <ShowProvider>
            <BookingProvider>
              <BrowserRouter>
                <Navbar />
                <main className="main">
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/home" component={HomePage} />
                  <Route exact path="/movies" component={MoviesPage} />
                  <Route
                    exact
                    path="/movie/:movieId"
                    component={MovieDetailPage}
                  />
                  <RouteGuard exact path="/bookings" component={MyBooking} />
                  <Route exact path="/register" component={RegisterPage} />
                  <RouteGuard exact path="/settings" component={ProfilePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route
                    exact
                    path="/confirmation"
                    component={BookingConfirmationPage}
                  />

                  <Route
                    exact
                    path="/booking/:showId"
                    component={BookingPage}
                  />
                </main>

                <Footer />
              </BrowserRouter>
            </BookingProvider>
          </ShowProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
