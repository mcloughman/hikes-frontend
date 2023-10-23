import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { HikesContextProvider } from "./context/HikeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HikesContextProvider>
      <App />
    </HikesContextProvider>
  </React.StrictMode>
)
