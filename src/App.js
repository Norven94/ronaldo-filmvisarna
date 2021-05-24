import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <div className="main">
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/settings" component={ProfilePage} />
          </div>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
