import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

// make hook funtion
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw Error("useAuthContext must be used inside of HikesContextProvider")
  }
  return context
}
