import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import VanNavBar from "./components/VanNavBar";
import About from "./components/About";

function App() {
  return (
    <div>
      <VanNavBar />
      <div className="px-4 py-3">
        <p className="text-primary">Home Page</p>
      </div>
    </div>
  );
}

export default App;
