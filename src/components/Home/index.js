import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'
      const heading = isDarkTheme ? 'heading-light' : 'heading-dark'
      return (
        <div className={bgColor}>
          <Navbar />
          <div className="image-home">
            <img src={image} alt="home" className="image" />
            <h1 className={heading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
