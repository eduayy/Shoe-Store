import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/auth/Login/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
