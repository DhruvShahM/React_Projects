import React, { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";

function Profile() {

    const {setName,setAge}=useContext(UserData);

  return (
    <div>
      <button onClick={()=>setName('Monal')}>Change the Name</button>
      <button onClick={()=>setAge(23)}>Change the Age</button>
    </div>
  );
}

export default Profile;