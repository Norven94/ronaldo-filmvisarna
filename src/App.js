import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import Navbar from "./components/Navbar";
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Route exact path="/register" component={RegisterPage}/>
        </UserProvider>
      </BrowserRouter>
      <main className="main"></main>
    </div>
  );
}

export default App;
