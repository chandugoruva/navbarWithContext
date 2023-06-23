import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'
      const headingChange = isDarkTheme
        ? 'heading-color-light'
        : 'heading-color-dark'
      const paragraph = isDarkTheme ? 'paragraph-dark' : 'paragraph-light'
      return (
        <div className={bgColor}>
          <Navbar />
          <div className="bg-not-found">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={headingChange}>Lost Your way?</h1>
            <p className={paragraph}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
