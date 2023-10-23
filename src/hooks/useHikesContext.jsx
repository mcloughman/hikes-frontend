import { HikesContext } from "../context/HikeContext"
import { useContext } from "react"

// make hook funtion
export const useHikesContext = () => {
  const context = useContext(HikesContext)

  if (!context) {
    throw Error("useHikesContext must be used inside of HikesContextProvider")
  }
  return context
}
