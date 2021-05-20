import {BrowserRouter, Route} from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/movies" component={MoviesPage} />
      </BrowserRouter>      
    </div>
  );
}

export default App;
