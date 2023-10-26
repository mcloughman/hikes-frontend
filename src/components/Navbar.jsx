import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="link">
          <h1>Hikes</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
