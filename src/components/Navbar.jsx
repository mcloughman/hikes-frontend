import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

const Navbar = () => {
  const { logout } = useLogout()
  const handleClick = () => logout()
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="link">
          <h1>Hikes</h1>
        </Link>
        <div className="logout-div">
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        </div>
        <Link to="/signup" className="signup-link">
          Signup
        </Link>
        <Link to="/Login">Login</Link>
      </nav>
    </header>
  )
}

export default Navbar
