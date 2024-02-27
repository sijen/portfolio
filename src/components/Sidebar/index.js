import './index.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-sec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBlog,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link id="logo" to="/">
        <img className="pri-logo" src={logo} alt="Logo" />
      </Link>
      <nav>
        <Link exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link
          exact="true"
          activeclassname="active"
          className="blog-link"
          to="/blog"
        >
          <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
          {/* <a href="#blog">Blog</a> */}
        </Link>

        <Link
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
      </nav>
      <ul>
        <li>
          <a rel="nofererrer" href="https://www.facebook.com/memo.ry.1088/">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a rel="nofererrer" href="https://www.instagram.com/_e_j_n/">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a rel="nofererrer" href="https://www.linkedin.com/in/sijendangol/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
