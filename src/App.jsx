import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import SingleHike from "./components/SingleHike"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
