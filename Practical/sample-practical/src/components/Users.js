import React from 'react';
import HigherOrder from '../HigherOrder';

function Users({data}) {

    // const [users, setUsers] = useState([]);

    // const getUsers = async () => {
    //     let users = await fetch(`https://jsonplaceholder.typicode.com/users`).
    //         then((response) => {
    //             return response;
    //         }).catch((err) => {
    //             return err;
    //         });

    //     setUsers(await users.json());
    // };

    // useEffect(() => {
    //     getUsers();
    // });
    return (
        <div>
            <h2>Hello from the users</h2>
            {data.slice(0,10).map((user,index)=>{
                return <p key={index}>{user.name}</p>
            })}
        </div>
    )
}


const UserComp=HigherOrder("Users",Users,"users");
export default UserComp
