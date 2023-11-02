import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      console.log(error)
      setIsLoading(false)
    }
    if (response.ok) {
      // save user to local storage

      localStorage.setItem("user", JSON.stringify(json))
      // update AuthContext
      dispatch({ type: "LOGIN", payload: json })
      setIsLoading(false)
      navigate("/")
    }
  }
  return { login, isLoading, error }
}
