import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import ShowProvider from "./context/ShowContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ShowProvider>
            <Navbar />
            <div className="main">
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/movie/:movieId" component={MovieDetailPage}/>
            </div>
          </ShowProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
