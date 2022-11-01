import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  //hex color getting by value
  console.log(hexColor);
  const [alert,setAlert]=useState(false);
  const bcg=rgb.join(',');
  const hex=rgbToHex(...rgb);
  const hexValue=`#${hexColor}`;

  //remove the message of the 'Copied to clipboard' after 3 seconds
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setAlert(false);
    }, 3000);
    return ()=>clearTimeout(timeout);
  },[alert])

  return <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }}>
    <p className='percent-value'>{weight}%</p>
    {/* hex color getting by values */}
    {/* <p className="color-value">{hex}</p>
     */}
    <p className="color-value">{hexValue}</p>
    {alert && <p className="alert">Copied to clipboard</p>}

  </article>
}

export default SingleColor
