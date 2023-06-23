import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }
      const imageTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const headingEl = isDarkTheme ? 'light-text' : 'dark-text'
      const navbarBg = isDarkTheme ? 'nav-dark' : 'nav-light'
      return (
        <nav className={`navbar ${navbarBg}`}>
          <img src={logoImage} alt="website logo" className="image-nav" />
          <ul className="heading-flex">
            <Link to="/" className="link">
              <li className={`home-heading ${headingEl}`}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={`about-heading ${headingEl}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={onChangeTheme}
            data-testid="theme"
            className="button"
          >
            {' '}
            <img src={imageTheme} alt="theme" className="image-nav" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
