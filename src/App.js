import './App.css';
import Login from "./components/Login";
import Registration from "./components/Registration";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Login/>} />
          <Route path="/register" element = {<Registration/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
