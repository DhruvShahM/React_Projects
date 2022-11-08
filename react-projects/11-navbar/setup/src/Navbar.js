import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // if (!linksRef.current) return

    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height=`${linksHeight}px`
    }
    else{
      linkContainerRef.current.style.height='0px';
    }

    console.log(linksHeight);

  }, [showLinks])

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
        <div className='links-container' ref={linkContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* <li>
            <a href="#">home</a>
            </li>
            <li>
            <a href="#">about</a>
            </li>
            <li>
            <a href="#">contacts</a>
            </li>
            <li>
            <a href="#">products</a>
            </li> */}
            {links.map((ele) => {
              const { id, url, text } = ele;
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
      <ul className="social-icons">
        <li>
          <a href="https://www.twitter.com"></a>
          <FaTwitter />
        </li>
        <li>
          <a href="https://www.twitter.com"></a>
          <FaTwitter />
        </li>
        <li>
          <a href="https://www.twitter.com"></a>
          <FaTwitter />
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar
