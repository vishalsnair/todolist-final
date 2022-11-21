import "./App.css";
import SigninForm from "./components/signin/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormBar from "./components/form/form";
import { createContext, useState } from "react";
import ProtectedRoute from "./components/authentication/auth";
import Navbar from "./components/Navbar/navbar";
import SignUp from "./components/signup/signup";
export const context = createContext();
function App() {
  // const [flag, setflag] = useState(false);
  localStorage.setItem("flag", false);
  return (
    <div className="App">
      {/* <context.Provider value={{ flag, setflag }}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/itemlist/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <FormBar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* </context.Provider> */}
    </div>
  );
}

export default App;
