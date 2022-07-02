import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header_container">
    <div className="mini_container">
      <Link to="/">
        <li>Home</li>
      </Link>
    </div>
    <div className="mini_container">
      <Link to="/about">
        <li>About</li>
      </Link>
    </div>
  </div>
)

export default Header
