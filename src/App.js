import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Navbar from "./components/navigation/Navbar";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <main className="main">
            <Route exact path="/register" component={RegisterPage} />
          </main>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
