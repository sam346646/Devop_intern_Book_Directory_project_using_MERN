import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/css/mystyle.css';

import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import InsertBook from "./pages/InsertBook";
import DeleteBook from "./pages/DeleteBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="InsertBook" element={<InsertBook />} />
          <Route path="DeleteBook/:id" element={<DeleteBook />} />
          <Route path="UpdateBook/:id" element={<UpdateBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
