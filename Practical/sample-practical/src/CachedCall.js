import React, { PureComponent } from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

 function CachedCall() {
    const {data,isLoading}=useQuery(('data'),()=>{
        return fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>response.json())
    });

    let naviagte=useNavigate();

    if(isLoading) return <h1>loading....</h1>;

    return (
      <div>
            <h1>Cached Call</h1>
        <ul className="navbar">
            <li onClick={()=>naviagte('/normal-call')}>Normal Call</li>
            <li onClick={()=>naviagte('/cached-call')}>Cached Call</li>
        </ul>
        <div>
            {data.map((item,index)=>{
                return (
                    <div key={index}>
                        <h2 >
                            {item?.id} {item?.title}
                        </h2>
                    </div>
                )
            })}
        </div>
      </div>
    )

}

export default CachedCall