import React ,{ useEffect, useState} from 'react'
import axios from 'axios'



function UseEffectHook() {

    const [data, setData] = useState("")
    const [Count, setCount] = useState(0)
    
    useEffect(() => {
    
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            
            setData(response.data[Count].email);
            console.log(" APi ");

        })
    }, [Count])
   
    return (
        <div style={{textAlign:'center', padding:'30px'}}>
             
            <h1> Hello!  {data} </h1>
            <h1> {Count}</h1>
            <button onClick={()=>{setCount(Count+1)}}> Inc Count</button>
        </div>
    )
}

export default UseEffectHook