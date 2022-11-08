import React from 'react'
import { links, social } from './data'
const Sidebar = () => {
  return (
    <div className="link-container show-container">
    <ul className="links">
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
      {links.map((ele)=>{
        const {id,url,text}=ele;
        return <li key={id}>
          <a href={url}>{text}</a>
        </li>
      })}
    </ul>
  </div>
  )
}

export default Sidebar
