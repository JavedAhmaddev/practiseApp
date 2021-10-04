import React, { Component } from 'react'
import axios from 'axios'



export class AxiosPractise extends Component {

    state={
        posts: []
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log("home:", res.data);
            this.setState({
                posts: res.data.slice(0,10)
                
            })
            
        })
    }
    
    render() {
        const {posts}= this.state;
        console.log(posts);
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
}

export default AxiosPractise


// using an arrow function inside componentdidmount and calling it as () 
// componentDidMount() {
//     (async () => {
//       let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       let posts = res.data;
//         console.log(posts)
//       this.setState({
//         posts: posts,
//       });
//     })();
//   }