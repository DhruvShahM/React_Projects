import React, { useContext } from 'react'
import { UserData } from '../contexts/GlobalContext'


export default function Settings() {

    const {name}=useContext(UserData);

  return (
    <div>
     <h1>Settings {name}</h1>
    </div>
  )
}
