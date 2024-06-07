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

const Sidebar = ({selectedView}) => {
  console.log(selectedView)
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutSection');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToHome = () => {
    const homeSection = document.getElementById('homeSection');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="nav-bar">
     <div>
      <Link id="logo" to="/">
        <img className="pri-logo" src={logo} alt="Logo" />
      </Link>
      <nav>
        <button onClick={scrollToHome} activeclassname="active" 
          className="home-link" >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </button>
        <button onClick={scrollToAbout} 
          className="about-link">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </button>
        <Link to="/blog"
          className="blog-link">
          <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
        </Link>
        <button onClick={scrollToContact}
          activeclassname="active"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </button>
      </nav>
      </div>
      {/* social media */}
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
