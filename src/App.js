import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Employee from "./page/employee/Employee"
import Home from "./page/home/Home"

function App() {
 
   return (
    <div>
        
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Employee" element={<Employee />} />
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
