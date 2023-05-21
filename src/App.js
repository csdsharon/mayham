import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginAndRegistrationPage/LoginPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
