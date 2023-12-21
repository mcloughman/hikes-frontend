import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isError, setIsError] = useState("")
  const { signup, isLoading, error } = useSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsError(null)
    console.log(password, confirmPassword)
    if (password !== confirmPassword) {
      setIsError("Password Confirmation Failed!")
      return
    }
    await signup(email, password)
  }
  return (
    <form className="form signup-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <label htmlFor="confirmPassword" className="form-label">
        Confirm Password
      </label>

      <input
        className="form-input"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <button disabled={isLoading}>Signup</button>
      {isError && <div className="error">{isError}</div>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup
