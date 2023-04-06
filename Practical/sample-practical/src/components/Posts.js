import React from 'react'
import HigherOrder from '../HigherOrder';

function Posts({data}) {

    // const [posts, setposts] = useState([]);

    // const getPosts = async () => {
    //     let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).
    //         then((response) => {
    //             return response;
    //         }).catch((err) => {
    //             return err;
    //         });

    //     setposts(await posts.json());
    // };

    // useEffect(() => {
    //     getPosts();
    // });



    return (
        <div>
            <h2>Hello from the posts</h2>
            {data.slice(0,10).map((posts,index)=>{
                return <p key={index}>{posts.title}</p>
            })}
        </div>
    )
}

const PostsComp=HigherOrder("Posts",Posts,"posts");
export default PostsComp
