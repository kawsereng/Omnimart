// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { MainLayout } from "./Layout/MainLayout";
import { Login } from "./Pages/Login";
import {Registration} from "./Pages/Registration"
function App() {
 

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>  
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
