import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import "./App.css"
const crabbyPhoto =
  "https://res.cloudinary.com/mrjiggyfly/image/upload/v1602545913/Crabby%20Appleton/IMG_9128_qdlrli.jpg"

const link = "https://photos.app.goo.gl/AEiX2EJtMZq9Pn4p8"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
