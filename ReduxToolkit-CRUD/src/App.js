import "./App.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import UserPost from "./UserPost";
import Create from "./UserPost/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <h2>Understand Redux Toolkit Using API</h2>
        <Routes>
          <Route path="/"  element={<UserPost/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
