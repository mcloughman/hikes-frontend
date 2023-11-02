import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import SingleHike from "./components/SingleHike"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import HikeForm from "./pages/HikeForm"
import UpdateHikeForm from "./pages/UpdateHikeForm"
import { useAuthContext } from "./hooks/useAuthContext"
import "./App.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/:id" element={<SingleHike />} />
            <Route path="/hike-form" element={<HikeForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
