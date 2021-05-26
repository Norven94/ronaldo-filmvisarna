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
import MovieDetailPage from "./pages/MovieDetailPage";
import Salon from "./components/Salon";

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
                  <Route exact path = "/" component={HomePage} />
                  <Route exact path = "/home" component={HomePage} />
                  <Route exact path = "/movies" component={MoviesPage} />
                      <Route
                        exact
                        path="/movie/:movieId"
                        component={MovieDetailPage}
                      />
                  <Route exact path="/bookings" component={MyBooking} />
                  <Route exact path="/register" component={RegisterPage} />
                  <Route exact path="/settings" component={ProfilePage} />
                  <Route exact path="/about" component={AboutPage} />
                  {/*Temporary route, remove later */}
                  <Route exact path="/salon" component={Salon} />
                </main>
                
              </BrowserRouter>
            </BookingProvider>
          </ShowProvider>
        </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;
