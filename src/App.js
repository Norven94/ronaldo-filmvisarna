import {BrowserRouter, Route} from "react-router-dom";

import MovieProvider from "./context/MovieContext";
import MoviesPage from "./pages/MoviesPage";

import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <BrowserRouter>
          <Route exact path = "/movies" component={MoviesPage} />
        </BrowserRouter>      
      </MovieProvider>
          <Navbar />
        <UserProvider>
        </UserProvider>
    </div>
  );
}

export default App;
