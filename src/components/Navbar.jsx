import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => logout()
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="link">
          <h1>Hikes</h1>
        </Link>
        {user && (
          <div className="logout-div">
            <span className="user-email-span">Logged in as: {user.email}</span>
            <button className="logout-btn" onClick={handleClick}>
              Logout
            </button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
            <Link to="/Login">Login</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
