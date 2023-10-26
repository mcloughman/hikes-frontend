import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { HikesContextProvider } from "./context/HikeContext"
import { AuthContextProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HikesContextProvider>
        <App />
      </HikesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
