import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./Signup";
import Demo from "./Demo";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/demo" element={<Demo />}></Route>
    </Routes>
  </BrowserRouter>
)