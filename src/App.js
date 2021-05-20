import {BrowserRouter, Route} from "react-router-dom";

import MovieProvider from "./context/MovieContext";
import MoviesPage from "./pages/MoviesPage";

import './App.scss';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <BrowserRouter>
          <Route exact path = "/movies" component={MoviesPage} />
        </BrowserRouter>      
      </MovieProvider>
    </div>
  );
}

export default App;
