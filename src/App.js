import {BrowserRouter, Route} from "react-router-dom";

import MovieProvider from "./context/MovieContext";
import MoviesPage from "./pages/MoviesPage";

import './App.scss';
import Navbar from "./components/Navbar";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>
      <UserProvider>

        <BrowserRouter>
          <Navbar />
          <Route exact path = "/movies" component={MoviesPage} />
        </BrowserRouter>    
          
      </UserProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
