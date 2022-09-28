import { Link } from 'react-router-dom'

import './styles/Header.css'

const Header = () => {
  return (
    <header className='siteHeader'>
        <div className='headerSection'>
            <Link to='/' className='headerLink headerTitle'>CoWork</Link>
            <Link to='/about' className='headerLink headerOption'>About</Link>
            <Link to='/help' className='headerLink headerOption'>Help</Link>
        </div>
        <div className='headerSection'>
            <Link to='/settings' className='headerLink headerOption'>Settings</Link>
        </div>
    </header>
  )
}

export default Header