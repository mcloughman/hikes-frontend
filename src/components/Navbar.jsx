import { Link, useLocation } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const location = useLocation()
  const handleClick = () => {
    navigate("/")
    logout()
  }
  // Function to determine if the user is on the HikeForm page
  const isOnHikeFormPage = location.pathname === "/hike-form"
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="link">
          <h1>Hikes</h1>
        </Link>
        {user && (
          <>
            {!isOnHikeFormPage && (
              <Link to="/hike-form" className="add-hike-a">
                Add New Hike
              </Link>
            )}
            <div className="logout-div">
              <span className="user-email-span">{user.email}</span>
              <button className="logout-btn" onClick={handleClick}>
                Logout
              </button>
            </div>
          </>
        )}
        {!user && (
          <div>
            <span>Login to Add a Hike</span>
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
