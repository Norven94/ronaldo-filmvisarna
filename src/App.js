import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import ShowProvider from "./context/ShowContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";

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
            </div>
          </ShowProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
