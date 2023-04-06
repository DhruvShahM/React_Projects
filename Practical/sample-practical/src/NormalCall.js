import {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export default function NormalCall(){

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response)=>response.json())
        .then((json)=>{
            setData(json);
            setLoading(false);
        })
    },[]);

    let naviagte=useNavigate();

    if(loading) return <h1>loading....</h1>;
    return (
        <div>
            <h1>Normal Call</h1>
             <ul className="navbar">
            <li onClick={()=>naviagte('/normal-call')}>Normal Call</li>
            <li onClick={()=>naviagte('/cached-call')}>Cached Call</li>
        </ul>
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
    )


}