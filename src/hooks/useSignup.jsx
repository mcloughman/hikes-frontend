import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(
      "https://hikes-backend-e698c568813b.herokuapp.com/api/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
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
  return { signup, isLoading, error }
}
