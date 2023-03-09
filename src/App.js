import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<div>Page Does Not Exist</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
