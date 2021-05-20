import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
