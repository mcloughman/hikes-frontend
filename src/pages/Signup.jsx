import { useState } from "react"
const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
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
      <button>Signup</button>
    </form>
  )
}

export default Signup
