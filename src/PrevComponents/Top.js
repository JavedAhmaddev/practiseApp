import React, {useState} from 'react';
import Bottom from './Bottom';
var x;
export default function Top(props) {
    
    const[text,setText]=useState("");
     x=text;
    const handleClick=()=>{

    }
    const handleChange=(event)=>{
        setText(event.target.value);
        console.log(text);
    }


    console.log(text);
    return (
        <div class="text-center">
        <h1> {props.data}</h1>
        <textarea class="form-control" onClick={handleClick} placeholder="Leave a comment here" onChange={handleChange} value={text} id="floatingTextarea"></textarea>
         <Bottom text={text}></Bottom>
        </div>
    )
}
export {x}
