import '../assets/css/common.css'
import {Link} from 'react-router-dom';
import { HOME_PAGE_PATH } from '../assets/const';

const Header = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
              <Link to={HOME_PAGE_PATH}>
                  <h1>Where in the world?</h1>
              </Link>
            </div>
            <button
              type="button"
              aria-label="Theme Switcher Button"
              className="theme-toggle flex flex-jc-sb flex-ai-c"
              onClick={toggleDarkMode}
            >
              <i className="fa-regular fa-moon theme-icon"></i>
              <span className="theme-text">Dark Mode</span>
            </button>
        </div>
    </header>
  )
}

export default Header