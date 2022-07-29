import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import EditStudent from "./components/EditStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const StudentContext = React.createContext();

function App() {
  let data = {
    earning: "45,000",
    annual: "3,50,000",
    task: 50,
    pending: 26,
  };

  let [students, setStudents] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "grid", gridTemplateColumns: "17% 80%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <StudentContext.Provider value={{ students, setStudents }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard data={data} />} />
                <Route path="/all-students" element={<AllStudents />} />
                <Route path="/add-student" element={<AddStudents />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/" element={<Dashboard data={data} />} />
              </Routes>
            </StudentContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
