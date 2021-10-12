import React, { useEffect, useState } from 'react'
import axios from 'axios';

function AxiosPractise() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            
                setPosts(res.data.slice(0,10));
                
        })
    }, [])


    const postlist = posts.length ? (
                    posts.map(post=>{
        
                       return  <div className="center card" key={post.id} >
        
                            <div className="card-content">
                                <span className="card-title"> {post.title}</span>
                                <p>{post.body} </p>
                            </div>
                        </div>
                    })
                ):(
                    <div className="center"> No Posts </div>
                )



    return (
        <div>
             <h1> Axios practise component </h1>
               {postlist}
        </div>
    )
}

export default AxiosPractise


// using an arrow function inside useEffect and calling it as () 
// useEffect() {
//     (async () => {
//       let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       let posts = res.data;
//         console.log(posts)
//       setPosts(posts)
//     })();
//   }