// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { Home } from "./Components/Pages/Home";
import { MainLayout } from "./Components/Layout/MainLayout"
import { Login } from "./Components/Pages/Login";
import {Registration} from "./Components/Pages/Registration"
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
