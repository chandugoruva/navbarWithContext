import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'
      const heading = isDarkTheme ? 'heading-light' : 'heading-dark'
      return (
        <div className={bgColor}>
          <Navbar />
          <div className="image-home">
            <img src={image} alt="about" className="image" />
            <h1 className={heading}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
