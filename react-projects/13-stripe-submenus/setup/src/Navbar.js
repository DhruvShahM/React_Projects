import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {
  const {openSideBar,openSubMenu,closeSubMenu}=useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu();
    }
  };
  return (<nav className='nav' onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="stripe" className='nav-logo' />
        <button className='btn toggle-btn' onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
            <button className="link-btn">
              products
            </button>
        </li>
            <button className="link-btn">
              developers
            </button>
            <button className="link-btn">
              company
            </button>
      </ul>
      <button className="btn signin-btn">
        Sign in 
      </button>
    </div>
  </nav>)
}

export default Navbar
